import {
  Button,
  Space,
  Table,
  Tag,
  Modal,
  Input,
  Form,
  notification,
  Upload,
} from "antd";

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import request from "../../../connect/AxiosConfig";
import ImgCrop from "antd-img-crop";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
function CategoryAdmin(props) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const fetchCategory = async () => {
    const res = await request.get("/category");
    setCategories(res.data);
  };
  const onAddModalFinish = async (values) => {
    if(fileList&&fileList.length>0){
      let form= new FormData()
      form.append("image",fileList[0].originFileObj)
      form.append(
        "category",
        new Blob([JSON.stringify(values)], {
          type: "application/json",
        })
      );
      console.log(fileList)
      console.log(values)
      const res = await request.post("/category/auth", form);
      if (res.status == 200) {
        notification["success"]({
          message: "System",
          placement: "bottomRight",
          style: { background: "#d2ffc7" },
          description: "Add a category success!",
        });
      }
    }else{
      notification["warning"]({
        message: "System",
        placement: "bottomRight",
        description: "Please upload image",
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
          <a>
            <EditOutlined /> Update
          </a>

          <a
            style={{ color: "red" }}
            onClick={async () => {
              await request.delete("/category/auth/" + record.id);
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
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
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
            label="Image"
            name="imageList"
          >
            <ImgCrop rotate>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length == 0 && "+ Upload"}
              </Upload>
            </ImgCrop>

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
