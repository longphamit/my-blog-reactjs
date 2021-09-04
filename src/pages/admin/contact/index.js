import { Button, notification, Space, Table, Tag } from "antd";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import request from "../../../connect/AxiosConfig";
import {
  DeleteOutlined,
} from "@ant-design/icons";
import { deleteItemFromArray } from "../../../util/DeleteItem";
import { notify_success } from "../../../util/Notify";
function ContactAdmin(props) {
  const [state, setState] = useState("");
  const [contacts, setContacts] = useState([]);
  const history = useHistory();
  const fetchContact = async () => {
    const res= await request.get("/contact/auth");
    setContacts(res.data)
  };

  const deleteItem = async(id) => {
      const res=await request.delete("/contact/auth/"+id)
      if (res.status == 200) {
        notify_success("Delete contact success")
        let newValue= deleteItemFromArray(id,contacts)
        setContacts([...newValue])
      }
      
  };
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
            {new Date(date).toLocaleDateString()}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            style={{ color: "red" }}
            onClick={async () => {
              
              deleteItem(record.id);
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
