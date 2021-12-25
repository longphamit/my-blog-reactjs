import { Col, notification, Row } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, withRouter } from "react-router";
import { logoutAction } from "../../../redux/action/UserAction";
import { Table, Tag, Space } from 'antd';
import "./styles.css";
import request from "../../../connect/AxiosConfig";
import {
  DeleteOutlined,
  EditOutlined
} from "@ant-design/icons";
import { notify_success } from "../../../util/Notify";

function Admin(props) {
  const history= useHistory();
  const columns = [
    {
      title: 'Image Show',
      dataIndex: 'imageShow',
      key: 'imageShow',
      render: text => <img style={{width:100,height:100}} src={text}/>
    },
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
          <a onClick={()=>{
            history.push("/blog/update")
            localStorage.setItem("BLOG_ADMIN_SELECTED",JSON.stringify(record))
          }}><EditOutlined/> Update</a>
          <a style={{color:"red"}} onClick={()=>deleteBlock(record.id)}>
            <DeleteOutlined/>
            Delete</a>
        </Space>
      ),
    },
  ];


  const [blogs,setBlogs]=useState([]);
  const fetchBlogs=async()=>{
    const res=await request.get("/blog");
    console.log(res.data)
    setBlogs(res.data);
  }
  useEffect(() => {
    fetchBlogs()
    return () => {};
  }, []);
  const deleteBlock=async(id)=>{
    let res=await request.delete('/blog/auth/'+id)
    if(res.status==200){
      notify_success("Delete blog success")
      setBlogs(blogs.filter(blog=>blog.id!==id))
    }
    
  }
  return (
    <>
      {
        blogs?<Table columns={columns} dataSource={blogs} />:null
      }
    </>
  );
}

export default Admin;
