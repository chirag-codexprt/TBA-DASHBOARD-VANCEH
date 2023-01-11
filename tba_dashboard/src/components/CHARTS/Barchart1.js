
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer
} from "recharts";


const data = [
  {
    name: "Seg",
    uv: 8,
  },
  {
    name: " Ter",
    uv: 14,
  },
  {
    name: " Qua",
    uv: 25,
  },
  {
    name: " Qui ",
    uv: 17,
  },
  {
    name: " Sex",
    uv: 20,
  },
  {
    name: " Sab",
    uv: 16,
  },
  {
    name: " Dom ",
    uv: 27,
  },
];


function BarChartCounter() {
  const [focusBar, setFocusBar] = useState(null);
  // const [mouseLeave, setMouseLeave] = useState(true);


  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart

        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        onMouseMove={(state) => {
          if (state.isTooltipActive) {
            setFocusBar(state.activeTooltipIndex);
            // setmouseOver(false);
          } else {
            setFocusBar(null);
            // setmouseOver(true);
          }
        }}
      >
        <XAxis dataKey="name"
          axisLine={false}
          tickMargin="10"
          tickLine={false} />

        <Tooltip cursor={false}
          itemStyle={{ color: '#1A1D1F', fontWeight: 'bolder' }}
          labelStyle={{ fontWeight: 'normal', color: '#6F767E' }}
          contentStyle={{
            border: 'none', borderRadius: '10px', boxShadow: '0px, 4px,rgba(0, 0, 0, 0.15)'
          }} />


        <Bar dataKey="uv" radius={5}>
          {data.map((entry, index) => (
            <Cell
              fill={
                focusBar === index
                  ? "rgba(28, 61, 89, 1)"
                  : "rgba(28, 61, 89, 0.8)"
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>

  );
}

export default BarChartCounter;