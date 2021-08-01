import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, withRouter } from "react-router";
import { logoutAction } from "../../../redux/action/UserAction";
import { Table, Tag, Space } from 'antd';
import "./styles.css";
import request from "../../../connect/AxiosConfig";
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Created At',
    key: 'createdAt',
    dataIndex: 'createdAt',
    render: tag => (
      <>
        <Tag color="volcano" key={tag}>
            {new Date(tag).toLocaleDateString()}
        </Tag>
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Update {record.name}</a>
        <a style={{color:"red"}}>Delete</a>
      </Space>
    ),
  },
];

function Admin(props) {
  const [collapsed, setCollapsed] = useState("");
  const [blogs,setBlogs]=useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const fetchBlogs=async()=>{
    const res=await request.get("/blog");
    console.log(res.data)
    setBlogs(res.data);
  }
  useEffect(() => {
    fetchBlogs()
    return () => {};
  }, []);

  return (
    <>
      {
        blogs?<Table columns={columns} dataSource={blogs} />:null
      }
    </>
  );
}

export default Admin;
