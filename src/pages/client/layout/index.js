import { Footer } from 'antd/lib/layout/layout';
import React, { useState, useEffect } from 'react';
import Header from '../../../components/client/header';
import BlogDetail from '../blog_detail';
import BlogList from '../blog_list';
import Contact from '../contact';
import Home from '../home.js';
import Memo from '../memo.js';

function LayOutClient(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
           <Header/>
           <div>
                {
                    props.page==="HOME"?<Home/>:
                    props.page==="BLOG_LIST"?<BlogList {...props}/>:
                    props.page==="BLOG_DETAIL"?<BlogDetail/>:
                    props.page==="MEMO"?<Memo/>:
                    props.page==="CONTACT"?<Contact/>:<Home/>
                }
           </div>
           <Footer style={{ textAlign: "center" }}>
            Website created By LongPham
            Contact 070579900
          </Footer>
        </>
    )
}

export default LayOutClient;