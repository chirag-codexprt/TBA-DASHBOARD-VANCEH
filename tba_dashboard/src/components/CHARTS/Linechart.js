import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Label,
  XAxis,
} from "recharts";
import { useRecoilValue } from "recoil";
import { getAllChartData } from "../../recoil/Atoms";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
// ];

const Linechart = () => {
  const visitorData = useRecoilValue(getAllChartData);
  // console.log("visitorData", visitorData);
  // const newDataForMonth = vis
  const organizedTransactions = Object.fromEntries(
    [
      ...new Set(
        visitorData?.visitorData.map((t) =>
          parseInt(t._id.split("-")[0])
        )
      ),
    ].map((yr) => [
      yr,
      Object.fromEntries(
        [
          ...new Set(
            visitorData?.visitorData
              .filter((t) => parseInt(t._id.split("-")[0]) === yr)
              .map((t) => parseInt(t._id.split("-")[1]))
          ),
        ].map((mo) => [
          mo,
          visitorData?.visitorData.filter(
            (t) =>
              parseInt(t._id.split("-")[0]) === yr &&
              parseInt(t._id.split("-")[1]) === mo
          ),
        ])
      ),
    ])
  );
  let data;
  const getData = () => {
    if (visitorData?.chartDataStatus === "yearly") {
      data = visitorData?.visitorData?.map((obj) => {
        return {
          month: obj?.month,
          visitas: obj?.count,
          week: obj?.month,
        };
      });
    } else if (visitorData?.chartDataStatus === "monthly") {
      data = visitorData?.visitorData?.map((obj) => {
        return {
          month: obj?.month,
          visitas: obj?.count,
          week: obj?.week,
        };
      });
    } else if (visitorData?.chartDataStatus === "week") {
      data = visitorData?.visitorData?.map((obj) => {
        return {
          month: obj?.month,
          visitas: obj?.count,
          week: obj?.sortWeek,
        };
      });
    } else {
      data = [];
    }
  };
  getData();

  // console.log("organizedTransactions", organizedTransactions);
  // console.log("visitorLineChart", data);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip'>
          <div>
            {payload.map((pld) => (
              <div
                style={{
                  display: "inline-block",
                  padding: 10,
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)"
                }}>
                <div style={{ color: "#6F767E" }}>{pld.payload.week}</div>
                <div
                  style={{
                    fontWeight: 900, color: "#1A1D1F"
                  }}>
                  {" "}
                  {`${pld.value} ${pld.dataKey}  `}
                </div>
              </div>
            ))}
          </div>
        </div >
      );
    }

    return null;
  };

  return (
    <>
      <ResponsiveContainer width='100%' height={220}>
        {/* <LineChart data={data} width={100} height={100}> */}
        <LineChart data={data}>
          <Line
            type='monotone'
            dataKey='visitas'
            stroke='#58A43D'
            strokeWidth={3}
            r={false}
            activeDot={{ r: 8 }}
            offset={20}></Line>
          <XAxis tick={false} axisLine={false}>
            <Label
              value='37,8% nessa semana'
              offset={0}
              position='insideBottom'></Label>
          </XAxis>

          <Tooltip
            itemStyle={{ color: "#1A1D1F", fontWeight: "bold" }}
            labelStyle={{ fontWeight: "lighter", color: "#6F767E" }}
            contentStyle={{
              border: "none",
              borderRadius: "10px",
              boxShadow:
                "rgba(238, 238, 239, 1) 0px 8px 30px 5px",
            }}
            content={<CustomTooltip />}
          ></Tooltip>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
export default Linechart;
