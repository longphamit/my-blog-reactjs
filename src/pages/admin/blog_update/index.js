import React, { useState, useEffect } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import request from "../../../connect/AxiosConfig";
import "./styles.css";
import { Button, Input, notification, Select } from "antd";
import { notify_success, notify_warning } from "../../../util/Notify";
const { Option } = Select;
function BlogUpdate(props) {
  const [imageShow, setImageShow] = useState();
  const [category, setCategory] = useState();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "Long Phạm",
    categoryId: "",
  });
  const onChooseImage = (e) => {
    const image = e.target.files[0];
    // setImages([...images, image]);
    // const urlImage = URL.createObjectURL(e.target.files[0]);
    setImageShow(image);
  };
  const fetchCategory = async () => {
    const res = await request.get("/category");
    console.log(res.data);
    setCategory(res.data);
  };
  const onSubmitBlog = async () => {
    if (!blog.title) {
      notify_warning("Please fill title")
      return;
    }
    if (!blog.categoryId) {
      notify_warning("Please choose category")
      return;
    }

    let form = new FormData();
    form.append("imageShow", imageShow);

    form.append(
      "blog",
      new Blob([JSON.stringify(blog)], {
        type: "application/json",
      })
    );
    const res = await request.put("/blog/auth", form);
    if (res.status == 200) {
      notify_success("Update blog success")
    }
  };
  const fetchBlogSelected = () => {
    setBlog(JSON.parse(localStorage.getItem("BLOG_ADMIN_SELECTED")));
  };
  useEffect(() => {
    fetchCategory();
    fetchBlogSelected();
    return () => {};
  }, []);

  return (
    <>
      {blog.content ? (
        <div className="editor">
          <div>
            <h3 style={{ color: "#f56042", fontWeight: "bold" }}>Title</h3>
            <Input
            value={blog.title}
              onChange={(e) => {
                setBlog({ ...blog, title: e.target.value });
              }}
            />
          </div>
          <div className="editPart">
            <h3 style={{ color: "#f56042", fontWeight: "bold" }}>category</h3>
            <Select
              defaultValue={blog.categoryId?blog.categoryId:"NONE"}
              style={{ width: 120 }}
              onChange={(e) => setBlog({ ...blog, category: e })}
            >
              {category?.map((item) => {
                return <Option value={item.id}>{item.name}</Option>;
              })}
            </Select>
          </div>
          <div className="editPart">
            <h3 style={{ color: "#f56042", fontWeight: "bold" }}>Show Image</h3>
            <input type="file" onChange={(e) => onChooseImage(e)} />
          </div>
          <div className="editPart">
            <h3 style={{ color: "#f56042", fontWeight: "bold" }}>Content</h3>
            <CKEditor
              editor={Editor}
              config={{
                ckfinder: {
                  // Upload the images to the server using the CKFinder QuickUpload command.
                  uploadUrl: "http://localhost:8080/api/blog/auth/editor",
                },
                image: {
                  // You need to configure the image toolbar, too, so it uses the new style buttons.
                  toolbar: [
                    "imageTextAlternative",
                    "|",
                    "imageStyle:alignRight",
                    "imageStyle:full",
                    "imageStyle:alignLeft",
                  ],

                  styles: [
                    // This option is equal to a situation where no style is applied.
                    "alignRight",

                    // This represents an image aligned to the left.
                    "full",

                    // This represents an image aligned to the right.
                    "alignLeft",
                  ],
                },
                allowedContent: true,
              }}
              data={blog.content}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log(data);
                setBlog({ ...blog, content: data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>

          <Button className="uploadButton" onClick={() => onSubmitBlog()}>
            Upload
          </Button>
        </div>
      ) : null}
    </>
  );
}

export default BlogUpdate;
