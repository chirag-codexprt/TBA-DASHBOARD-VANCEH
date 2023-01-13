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
	ResponsiveContainer,
} from "recharts";
import { useRecoilValue } from "recoil";
import { getAllChartData } from "../../recoil/Atoms";

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

function BarChartCounter() {
	const [focusBar, setFocusBar] = useState(null);
	// const [mouseLeave, setMouseLeave] = useState(true);
	const visitorData = useRecoilValue(getAllChartData);
	// console.log("visitorDataBarchart", visitorData);
	let data;
	const getData = () => {
		if (visitorData?.chartDataStatus === "yearly") {
			console.log("1");
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

	const CustomTooltip = ({ active, payload, label }) => {
		console.log('payload+', payload)
		if (active && payload && payload.length) {
			return (
				<div className='custom-tooltip'>
					<div>
						{payload.map((pld) => (
							<div div
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
									{`${pld.value} ${pld.dataKey}`}
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
		<ResponsiveContainer width='100%' height={220}>
			<BarChart
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
				onMouseMove={(state) => {
					if (state.isTooltipActive) {
						setFocusBar(state.activeTooltipIndex);
						// setmouseOver(false);
					} else {
						setFocusBar(null);
						// setmouseOver(true);
					}
				}}>
				<XAxis
					dataKey='week'
					axisLine={false}
					tickMargin='10'
					tickLine={false}
				/>

				<Tooltip
					cursor={false}
					itemStyle={{ color: "#1A1D1F", fontWeight: "bolder" }}
					labelStyle={{ fontWeight: "normal", color: "#6F767E" }}
					contentStyle={{
						border: "none",
						borderRadius: "10px",
						boxShadow: "0px, 4px,rgba(0, 0, 0, 0.15)",
					}}
					content={<CustomTooltip />}
				/>

				<Bar dataKey='visitas' radius={5}>
					{data?.map((entry, index) => (
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
