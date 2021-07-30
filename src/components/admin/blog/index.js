import React, { useState, useEffect } from 'react';
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
function Blog(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
            <CKEditor
            editor={Editor}
            config={{
              ckfinder: {
                // Upload the images to the server using the CKFinder QuickUpload command.
                uploadUrl: "http://localhost:8181/api/product/ckfinder",
              },
              toolbar: [
                "heading",
                "|",
                "fontfamily",
                "fontsize",
                "|",
                "alignment",
                "|",
                "fontColor",
                "fontBackgroundColor",
                "|",
                "bold",
                "italic",
                "strikethrough",
                "underline",
                "subscript",
                "superscript",
                "|",
                "link",
                "|",
                "outdent",
                "indent",
                "|",
                "bulletedList",
                "numberedList",
                "todoList",
                "|",
                "code",
                "codeBlock",
                "|",
                "insertTable",
                "|",
                "uploadImage",
                "blockQuote",
                "|",
                "undo",
                "redo",
              ],
            }}
            data=""
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log(data)
              //setFormCreate({...formCreate,description:data})
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </>
    )
}

export default Blog;