import { Card, Col, Image, Row } from "antd";
import React, { useState, useEffect } from "react";
import "./styles.css";
import request from "../../../connect/AxiosConfig";
import { useHistory } from "react-router";
import { notify_success } from "../../../util/Notify";
import moment from 'moment'
import CountDown from "../../../components/client/recom/count_down/CountDown";
const { Meta } = Card;
const Home = (props) => {
  const [data, setData] = useState();
  const fetchCategory = async () => {
    const res = await request.get("/category");
    console.log(res);
    setData(res.data);
  };
  const history = useHistory();
  useEffect(() => {
    fetchCategory();
    notify_success("Welcome to Long's blog! Have a nice day!");
    return () => {};
  }, []);
  const redirectBlogList = (id) => {
    history.push("/blog-list/" + id);
  };
  return (
    <>
     <CountDown 
     toTime="1/2/2022 00:00:00" 
     timeFormat="DD/MM/YYYY HH:mm:ss" 
     title="TẾT HOLIDAY"
     description="HAPPY LUNAR NEW YEAR"/>
      <div className="body">
        <Row>
          {data
            ? data.map((i) => {
                return (
                  <Col
                    className="gutter-row"
                    xl={6}
                    xs={12}
                    span={6}
                    onClick={() => {
                      redirectBlogList(i.id);
                    }}
                  >
                    <div className="divCard">
                      <Image key={i.id} src={i.image} />
                      <Meta title={i.name} />
                    </div>
                  </Col>
                );
              })
            : null}
        </Row>
      </div>
    </>
  );
};

export default Home;
