import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from "recharts";
import request from "../../../connect/AxiosConfig";
import "./styles.css";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
function TrackingCovid(props) {
  const [state, setState] = useState("");
  const [dataNewest, setDataNewest] = useState("");
  const [dataLineChart, setDataLineChart] = useState("");

  const convertDate=(today)=>{
    return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today)
  }
  const fetchDataToLinearChart= async()=>{
    const toDate=new Date();
    let dateBefore7= new Date();
    dateBefore7.setDate(toDate.getDate()-7);
    toDate.setHours(0,0,0,0)
    dateBefore7.setHours(0,0,0,0)
    const link="https://api.covid19api.com/total/country/vn?from="+dateBefore7.toISOString()+"&to="+toDate.toISOString();
    console.log(link)
    const dataFromRequest = await request.get(
      link
    );
    console.log(dataFromRequest.data)
    const arrayData=[]
    await dataFromRequest.data.map(item=>{
      arrayData.push({"Date":convertDate(new Date(item.Date)),"Deaths":item.Deaths,"Confirmed":item.Confirmed,"Recovered":item.Recovered,"Active":item.Active})
    })
    setDataLineChart(arrayData)
    setDataNewest(arrayData[arrayData.length - 1]);
  }
  useEffect(() => {
    fetchDataToLinearChart();
  }, []);

  return (
    <>
      <div style={{ margin: 20,alignItems:"center" }}>
        <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
          Viet Nam Covid Tracking
        </h2>
        <Row>
          {dataNewest ? (
            <>
              <Col className="tableCovid" span={6}>
                <table>
                  <tr>
                    <th>
                      <p className="tableHead">Confirmed</p>
                    </th>
                    <td>
                      <p style={{ color: "#5195f5" }}>{dataNewest.Confirmed}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="tableHead">Death</p>
                    </th>
                    <td>
                      <p style={{ color: "#f56747" }}>{dataNewest.Deaths}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="tableHead">Recovered</p>
                    </th>
                    <td>
                      <p style={{ color: "#46c26f" }}>{dataNewest.Recovered}</p>
                    </td>
                  </tr>
                </table>
              </Col>
              <Col span={14} className="chartLinear">
                <p style={{textAlign:"center",fontWeight:"bold"}}>Chart covid in 7 days</p>
                <LineChart
                  width={730}
                  height={300}
                  data={dataLineChart}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Confirmed" stroke="#5195f5"  />
                  <Line type="monotone" dataKey="Active" stroke="#fcba03" />
                  <Line type="monotone" dataKey="Recovered" stroke="#82ca9d" />
                </LineChart>
                <LineChart
                  width={730}
                  height={300}
                  data={dataLineChart}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />                  
                  <Line type="monotone" dataKey="Deaths" stroke="#f56747" />
                </LineChart>
              </Col>
            </>
          ) : null}
        </Row>

        <div span={6}></div>
      </div>
    </>
  );
}

export default TrackingCovid;
