import { Button, DatePicker, Popconfirm, Space, Table, Tag } from "antd";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import request from "../../../connect/AxiosConfig";
import { notify_success,notify_warning } from "../../../util/Notify";
import { Modal } from "antd";
import { Form, Input } from "antd";
function MemoAdmin(props) {
  const [memos, setMemos] = useState([]);
  const [memoSelected, setMemoSelected] = useState();
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const fetchMemo = async () => {
    const res = await request.get("/memo");
    console.log(res.d);
    setMemos(res.data);
  };
  const showModal = (record) => {
    setMemoSelected(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const deleteMemo = async (record) => {
    const res = await request.delete("memo/auth/" + record.id);
    if (res.status == 200) {
      notify_success("Delete memo success");
      setMemos(memos.filter((memo) => memo.id !== record.id));
    }
  };
  const columns = [
    {
      title: "Image Show",
      dataIndex: "image",
      key: "image",
      render: (text) => <img style={{ width: 100, height: 100 }} src={text} />,
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Created At",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (tag) => (
        <>
          <Tag color="volcano" key={tag}>
            {new Date(tag).toLocaleDateString()}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => showModal(record)}>Update </a>
          <Popconfirm
            title="Are you sure to delete this memory?"
            onConfirm={() => deleteMemo(record)}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    fetchMemo();
    return () => {};
  }, []);
  const onFinish = async() => {
    if(!memoSelected.content){
      notify_warning("Content is not empty")
    }
    const res = await request.put("/memo/auth", memoSelected);
    if (res.status == 200) {
      notify_success("Post memo success");
      const newMemos=memos.slice();
      let memoIndex=newMemos.findIndex(memo=>memo.id===memoSelected.id);
      newMemos[memoIndex]=memoSelected;
      setMemos(newMemos);
    }
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  return (
    <>
      <Button onClick={() => history.push("/admin/memo-add")}>Add Memo</Button>
      {memos ? <Table columns={columns} dataSource={memos} /> : null}

      {memoSelected ? (
        <Modal
          title="Update memory"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            
          ]}
        >
          <Form
            id="updateForm"
            {...formItemLayout}
            initialValues={{
              content: memoSelected.content,
            }}
            key={memoSelected.id}
          >
            <Form.Item label="Content" name="content">
              <Input
                key={memoSelected.id}
                defaultValue={memoSelected.content}
                value={memoSelected.content}
                onChange={(item) =>
                  setMemoSelected({
                    ...memoSelected,
                    content: item.target.value,
                  })
                }
              />
            </Form.Item>

            <Form.Item label="Year" name="year">
              <DatePicker
                key={memoSelected.id}
                picker="year"
                onChange={(item) =>
                  setMemoSelected({
                    ...memoSelected,
                    year: item.year(),
                  })
                }
              />
              ;
            </Form.Item>
            <Form.Item
              wrapperCol={{
                xs: { span: 24, offset: 0 },
                sm: { span: 16, offset: 8 },
              }}
            >
              <Button onClick={()=>{onFinish()}} >
                Update
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      ) : null}
    </>
  );
}

export default MemoAdmin;
