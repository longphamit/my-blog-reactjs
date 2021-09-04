import { Button, notification, Space, Table, Tag } from "antd";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import request from "../../../connect/AxiosConfig";
import { deleteItemFromArray } from "../../../util/DeleteItem";
import { notify_success } from "../../../util/Notify";

function MemoAdmin(props) {
  const [memos, setMemos] = useState([]);
  const history = useHistory();
  const fetchMemo = async () => {
    const res = await request.get("/memo");
    setMemos(res.data);
  };

  const deleteMemo = async (record) => {
    const res = await request.delete("memo/auth/" + record.id);
    if (res.status == 200) {
      notify_success("Delete memo success")
      let newValue = deleteItemFromArray(record.id, memos);
      setMemos([...newValue]);
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
          <a>Update </a>
          <a style={{ color: "red" }} onClick={() => deleteMemo(record)}>
            Delete
          </a>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    fetchMemo();
    return () => {};
  }, []);

  return (
    <>
      <Button onClick={() => history.push("/admin/memo-add")}>Add Memo</Button>
      {memos ? <Table columns={columns} dataSource={memos} /> : null}
    </>
  );
}

export default MemoAdmin;
