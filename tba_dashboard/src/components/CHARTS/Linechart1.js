import React, { useState, useCallback } from "react";
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

const Linechart = () => {
	const contactData = useRecoilValue(getAllChartData);
	console.log("contactData", contactData);

	let data;
	const getData = () => {
		if (contactData?.chartDataStatus === "yearly") {
			data = contactData?.contactData?.map((obj) => {
				return {
					month: obj?.month,
					count: obj?.count,
					week: obj?.month,
				};
			});
		} else if (contactData?.chartDataStatus === "monthly") {
			data = contactData?.contactData?.map((obj) => {
				return {
					month: obj?.month,
					count: obj?.count,
					week: obj?.week,
				};
			});
		} else if (contactData?.chartDataStatus === "week") {
			data = contactData?.contactData?.map((obj) => {
				return {
					month: obj?.month,
					count: obj?.count,
					week: obj?.sortWeek,
				};
			});
		} else {
			data = [];
		}
	};
	getData();

	return (
		<ResponsiveContainer width='100%' height={220}>
			{/* <LineChart data={data} width={100} height={100}> */}
			<LineChart data={data}>
				<Line
					type='monotone'
					dataKey='count'
					r={false}
					stroke=' #A43D3D   '
					strokeWidth={3}
					activeDot={{ r: 8 }}
					offset={20}
				/>
				<XAxis tick={false} axisLine={false}>
					<Label
						value='2.1% nessa semana'
						offset={0}
						position='insideBottom'></Label>
				</XAxis>
				<Tooltip
					itemStyle={{ color: "#1A1D1F", fontWeight: "bold" }}
					labelStyle={{ fontWeight: "lighter", color: "#6F767E" }}
					contentStyle={{
						border: "none",
						borderRadius: "10px",
						boxShadow: "rgba(238, 238, 239, 1) 0px 8px 30px 5px",
					}}></Tooltip>
			</LineChart>
		</ResponsiveContainer>
	);
};
export default Linechart;
