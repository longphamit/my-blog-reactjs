import React from "react";
import "./styles.css"
const FooterClient = () => {
  return (
    <div >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <footer class="w3-container w3-teal w3-center w3-margin-top" style={{padding:30}}>
        <p>Find me on social media.</p>
        <a href="https://www.facebook.com/canlong.pham.7/"><i class="fa fa-facebook-official w3-hover-opacity"></i></a>
        <i class="fa fa-instagram w3-hover-opacity"></i>
        <i class="fa fa-snapchat w3-hover-opacity"></i>
        <i class="fa fa-pinterest-p w3-hover-opacity"></i>
        <i class="fa fa-twitter w3-hover-opacity"></i>
        <i class="fa fa-linkedin w3-hover-opacity"></i>
      </footer>
    </div>
  );
};

export default FooterClient;
