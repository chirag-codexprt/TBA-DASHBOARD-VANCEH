// import React, { useState, useCallback } from "react";

// import {
//   BarChart,
//   Bar,
//   Tooltip,
//   Cell,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Label,
// } from "recharts";
// const data = [
//   {
//     name: "Seg",
//     uv: 8,
//   },
//   {
//     name: " Ter",
//     uv: 14,
//   },
//   {
//     name: " Qua",
//     uv: 25,
//   },
//   {
//     name: " Qui ",
//     uv: 17,
//   },
//   {
//     name: " Sex",
//     uv: 20,
//   },
//   {
//     name: " Sab",
//     uv: 16,
//   },
//   {
//     name: " Dom ",
//     uv: 27,
//   },
// ];
// const Barchart = () => {
//   const [activeIndex, setActiveIndex] = useState();
//   const activeItem = data[activeIndex];

//   const handleClick = useCallback(
//     (i) => {
//       setActiveIndex(i);
//       setActiveIndex(i);
//     },
//     [setActiveIndex]
//   );
//   return (
//     <ResponsiveContainer width="100%" height={220}>
//       <BarChart data={data} >
//         <XAxis
//           
//         ></XAxis>
//         <Bar dataKey="uv" fill="#1C3D5980" radius={5} onClick={handleClick}
//         ></Bar>

//         <Tooltip
//           // cursor={{ fill: "#1C3D59", }}
//           itemStyle={{ color: '#1A1D1F', fontWeight: 'bolder' }}
//           labelStyle={{ fontWeight: 'normal', color: '#6F767E' }}
//           contentStyle={{
//             border: 'none', borderRadius: '10px', boxShadow: '0px, 4px,rgba(0, 0, 0, 0.15)'
//           }}
//         ></Tooltip>
//         {
//           data.map((i) => (
//             <Cell
//               cursor="pointer"
//               height={activeItem}
//               fill={i === activeIndex ? "#1C3D59" : "#1C3D59"}
//               key={`cell-${i}`}

//             />
//           ))
//         }
//       </BarChart >
//     </ResponsiveContainer>
//   );
// };

// export default Barchart;
// These are the codes from Recharts
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
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

// const CustomToolTip = ({ active, payload, label }) => {
//   if (active) {
//     return (
//       <div className={"Custom-Tooltip"}>
//         <p>{label}</p>
//         {payload[0].dataKey + ": " + payload[0].value}
//       </div>
//     );
//   }
//   return null;
// };

function ColorChangingAndCustomToolTip() {
  const [focusBar, setFocusBar] = useState(null);
  const [mouseLeave, setMouseLeave] = useState(true);
  return (
    <BarChart
      width={500}
      height={300}
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
          setMouseLeave(false);
        } else {
          setFocusBar(null);
          setMouseLeave(true);
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


      <Bar dataKey="uv" fill="#2B5CE7" radius={5}>
        {data.map((entry, index) => (
          <Cell
            fill={
              focusBar === index || mouseLeave
                ? "#1C3D59"
                : "#1C3D5980"
            }
          />
        ))}
      </Bar>
    </BarChart>
  );
}

export default ColorChangingAndCustomToolTip;