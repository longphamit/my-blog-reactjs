import { Button, DatePicker, Form, Input, notification, Upload } from "antd";
import React, { useState, useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import "./styles.css";
import request from "../../../connect/AxiosConfig";
function MemoAdd(props) {
  const [memo, setMemo] = useState({
    content: "",
    year: "",
  });
  const [image, setImage] = useState("");
  const onFinish = async () => {

    console.log(memo)
    let form = new FormData();
    form.append("image", image);

    form.append(
      "memo",
      new Blob([JSON.stringify(memo)], {
        type: "application/json",
      })
    );
    const res = await request.post("/memo/auth", form);
    if (res.status == 200) {
        notification["success"]({
          message: "System",
          placement: "bottomRight",
          style: { background: "#d2ffc7" },
          description: "Post a memo success!",
        });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}

      >
        <Form.Item label="Content">
          <Input.TextArea onChange={(item)=>setMemo({...memo,content:item.target.value})} />
        </Form.Item>
        <Form.Item label="Year">
            <DatePicker picker="year" onChange={(item)=>item.year?setMemo({...memo,year:item.year()}):null} />;
        </Form.Item>

        <Form.Item label="File" name="file">
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        ></Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={() => onFinish()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default MemoAdd;
