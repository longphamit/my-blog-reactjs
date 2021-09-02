import { Button, Space, Table, Tag, Modal, Input, Form, notification } from "antd";

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import request from "../../../connect/AxiosConfig";
import {
  DeleteOutlined,
  EditOutlined
} from "@ant-design/icons";
function CategoryAdmin(props) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const fetchCategory = async () => {
    const res = await request.get("/category");
    setCategories(res.data);
  };
  const onAddModalFinish = async (values) => {
      const res=await request.post("/category/auth",values);
      if (res.status == 200) {
        notification["success"]({
          message: "System",
          placement: "bottomRight",
          style: { background: "#d2ffc7" },
          description: "Add a category success!",
        });
    }
  };
  const onAddModalFail = () => {};
//   const deleteItem = (id) => {
//     let index = -1;
//     let i = 0;
//     let tempMemos = memos;
//     for (let item in tempMemos) {
//       if (item.id == id) {
//         index = i;
//       }
//       i++;
//     }
//     if (i > 0) {
//       console.log("true");
//       tempMemos.splice(i, 1);
//       setMemos(tempMemos);
//     }
//   };
  const onOkAddCategory = async () => {};
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a><EditOutlined />   Update</a>

          <a
            style={{ color: "red" }}
            onClick={async () => {
            //   await request.delete("memo/auth/" + record.id);
            //   deleteItem(record.id);
            }}
          >
            <DeleteOutlined />
            Delete
          </a>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    fetchCategory();
    return () => {};
  }, []);

  return (
    <>
      <Modal
        title="Add Category"
        visible={showAddModal}
        onCancel={() => setShowAddModal(false)}
        cancelText="Cancel"
        okButtonProps={{ disabled: true }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onAddModalFinish}
          onFinishFailed={onAddModalFail}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input name category!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add Category
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Button onClick={() => setShowAddModal(true)}>Add Category</Button>
      <Table columns={columns} dataSource={categories} />
    </>
  );
}

export default CategoryAdmin;
