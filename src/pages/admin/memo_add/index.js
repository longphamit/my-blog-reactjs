import { Button, DatePicker, Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import request from "../../../connect/AxiosConfig";
import { notify_success,notify_warning } from "../../../util/Notify";
function MemoAdd(props) {
  const [memo, setMemo] = useState({
    content: "",
    year: "",
  });
  const [image, setImage] = useState("");
  const onFinish = async () => {
    if(!memo.content){
      notify_warning("Content is not empty")
      return
    }
    if(!memo.year){
      notify_warning("Year is not empty")
      return
    }
    if(!image){
      notify_warning("Image is not empty")
      return
    }
    console.log(memo);
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
      notify_success("Post memo success");
    }
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item
          label="Content"
          rules={[{ required: true, message: "Please input content!" }]}
        >
          <Input.TextArea
            onChange={(item) =>
              setMemo({ ...memo, content: item.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Year">
          <DatePicker
            picker="year"
            onChange={(item) =>
              item.year ? setMemo({ ...memo, year: item.year() }) : null
            }
          />
          ;
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
