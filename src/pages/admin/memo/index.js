import { Button, Space, Table, Tag } from 'antd';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import request from '../../../connect/AxiosConfig';

function MemoAdmin(props) {
    const [state, setState] = useState('');
    const [memos,setMemos]=useState([]);
    const history=useHistory();
    const fetchMemo=async()=>{
        const res=await request.get('/memo');
        setMemos(res.data)
    }

    const deleteItem=(id)=>{
        let index=-1;
        let i=0;
        let tempMemos=memos;
        for(let item in tempMemos){
            if(item.id==id){
                index=i;
            }
            i++;
        }
        if(i>0){
            console.log('true')
            tempMemos.splice(i,1)
            setMemos(tempMemos)
        }
    }
    const columns = [
        {
          title: 'Image Show',
          dataIndex: 'image',
          key: 'image',
          render: text => <img style={{width:100,height:100}} src={text}/>
        },
        {
          title: 'Detail',
          dataIndex: 'detail',
          key: 'detail',
          render: text => <a>{text}</a>,
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
              <a style={{color:"red"}} onClick={async()=>{await request.delete("memo/auth/"+record.id);deleteItem(record.id) }}>Delete</a>
            </Space>
          ),
        },
      ];
    useEffect(() => {
        fetchMemo()
        return () => {

        }
    }, []);

    return (
        <>
            <Button onClick={()=>history.push("/admin/memo-add")}>Add Memo</Button>
            <Table columns={columns} dataSource={memos}  />
        </>
    )
}

export default MemoAdmin;