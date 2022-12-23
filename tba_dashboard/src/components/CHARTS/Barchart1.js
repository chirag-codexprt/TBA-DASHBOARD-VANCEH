import React, { useState, useCallback } from "react";

import {
  BarChart,
  Bar,
  Tooltip,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
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
const Barchart1 = () => {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickMargin="10"
          tickLine={false}
        />

        <Bar dataKey="uv" fill="#1C3D5980"></Bar>
        <Tooltip
          cursor={{ fill: "#1C3D59" }}
          itemStyle={{ color: '#1A1D1F', fontWeight: 'bold' }}
          labelStyle={{ fontWeight: 'lighter', color: '#6F767E' }}
          contentStyle={{
            border: 'none', borderRadius: '10px', boxShadow: 'rgba(238, 238, 239, 1) 0px 8px 30px 5px'
          }}
        />

      </BarChart>
    </ResponsiveContainer >
  );
};

export default Barchart1;
