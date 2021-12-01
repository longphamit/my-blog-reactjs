
import React, { useState, useEffect } from "react";
import FooterClient from "../../../components/client/footer";
import Header from "../../../components/client/header";
import BlogDetail from "../blog_detail";
import BlogList from "../blog_list";
import Contact from "../contact";
import Home from "../home.js";
import Memo from "../memo.js";
import Project from "../project";

function LayOutClient(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Header />
      <div>
        {props.page === "HOME" ? (
          <Home />
        ) : props.page === "BLOG_LIST" ? (
          <BlogList {...props} />
        ) : props.page === "BLOG_DETAIL" ? (
          <BlogDetail />
        ) : props.page === "MEMO" ? (
          <Memo />
        ) : props.page === "CONTACT" ? (
          <Contact />
        ) : props.page === "PROJECT" ? (
          <Project />
        ) : (
          <Home />
        )}
      </div>
            <FooterClient/>
    </>
  );
}

export default LayOutClient;
