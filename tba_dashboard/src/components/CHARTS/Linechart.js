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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const Linechart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        {/* <LineChart data={data} width={100} height={100}> */}
        <LineChart data={data} >
          <Line
            type="monotone"
            dataKey="pv"
            stroke="
        #58A43D"
            strokeWidth={3}
            r={false}
            activeDot={{ r: 8 }}
            offset={20}
          ></Line>
          <XAxis tick={false} axisLine={false}>
            <Label value="37,8% nessa semana" offset={0} position="insideBottom">
            </Label>
          </XAxis>

          <Tooltip
            itemStyle={{ color: '#1A1D1F', fontWeight: 'bold' }}
            labelStyle={{ fontWeight: 'lighter', color: '#6F767E' }}
            contentStyle={{
              border: 'none', borderRadius: '10px', boxShadow: 'rgba(238, 238, 239, 1) 0px 8px 30px 5px'
            }}
          ></Tooltip>
        </LineChart>


      </ResponsiveContainer>

    </>

  );
};
export default Linechart;
