import React from "react";
import { PRIMARY_COLOR } from "../../../assets/constant/color";
import "./styles.css"
const FooterClient = () => {
  return (
    <div >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <footer  class="w3-container  w3-center w3-margin-top" style={{padding:30,backgroundColor:PRIMARY_COLOR}}>
        <p>Find me on social media.</p>
        <a href="https://www.facebook.com/canlong.pham.7/"><i class="fa fa-facebook-official w3-hover-opacity"></i></a>
      </footer>
    </div>
  );
};

export default FooterClient;
