import { Button, Space, Table, Tag } from "antd";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import request from "../../../connect/AxiosConfig";
import {
  DeleteOutlined,
  EditOutlined
} from "@ant-design/icons";
function ContactAdmin(props) {
  const [state, setState] = useState("");
  const [contacts, setContacts] = useState([]);
  const history = useHistory();
  const fetchContact = async () => {
    const res= await request.get("/contact/auth");
    console.log(res.data)
    setContacts(res.data)
  };

  // const deleteItem = (id) => {
  //   let index = -1;
  //   let i = 0;
  //   let tempMemos = memos;
  //   for (let item in tempMemos) {
  //     if (item.id == id) {
  //       index = i;
  //     }
  //     i++;
  //   }
  //   if (i > 0) {
  //     console.log("true");
  //     tempMemos.splice(i, 1);
  //     setMemos(tempMemos);
  //   }
  // };
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Created At",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (date) => (
        <>
          <Tag color="volcano" key={date}>
            {new Date(date).toDateString()}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a><EditOutlined/> Update</a>
          <a
            style={{ color: "red" }}
            onClick={async () => {
              
              //deleteItem(record.id);
            }}
          >
            <DeleteOutlined/>
            Delete
          </a>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    fetchContact();
    return () => {};
  }, []);

  return (
    <>
      <Table columns={columns} dataSource={contacts} />
    </>
  );
}

export default ContactAdmin;
