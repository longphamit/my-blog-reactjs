import React, { useState, useEffect } from "react";

import moment from "moment";
import { Col, Row } from "antd";
import "./styles.css"
import { PRIMARY_COLOR } from "../../../../assets/constant/color";
function CountDown(props) {
  const { toTime, timeFormat,title,description } = props;
  const [isTarget,setIsTarget]=useState(false)
  const [result, setResult] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  });
  let interval = null;
  const calCountDown = () => {
    interval = setInterval(() => {
        console.log(moment(toTime,timeFormat).valueOf())
        console.log(moment().valueOf())
        let distance = moment(toTime,timeFormat).valueOf() - moment().valueOf();
        console.log(distance)
        if(distance<=0){
          clearInterval(interval);
          setIsTarget(true)
          return;
        }else{
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setResult({...result,days:days,hours:hours,minutes:minutes,seconds:seconds})
        }
        
    }, 1000);
  };
  useEffect(() => {
    calCountDown();
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <>
      <div style={{textAlign:"center"}}>
      <h1 style={{fontWeight:"bold",color:PRIMARY_COLOR}}>{title}</h1>
        <Row>
            <Col xs={0} xl={8} span={8}/>
            <Col xs={24} xl={8} span={8}>
                <Row>
                    <Col span={6}><div className="rs-countdown">{result.days} D </div></Col>
                    <Col span={6}><div className="rs-countdown">{result.hours} H </div></Col>
                    <Col span={6}><div className="rs-countdown">{result.minutes} M </div></Col>
                    <Col span={6}><div className="rs-countdown">{result.seconds} S </div></Col>
                </Row>
                
            </Col>
            <Col xs={0} xl={8} span={8}/>
        </Row>
        {
          isTarget?<h1 style={{fontWeight:"bold",color:"rgb(248, 143, 138)"}}>{description}</h1>:null
        }
      </div>
    </>
  );
}

export default CountDown;
