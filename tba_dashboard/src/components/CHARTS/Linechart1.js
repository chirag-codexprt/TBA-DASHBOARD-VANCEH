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
	// console.log("contactData", contactData);

	let data;
	const getData = () => {
		if (contactData?.chartDataStatus === "yearly") {
			data = contactData?.contactData?.map((obj) => {
				return {
					month: obj?.month,
					Contatos: obj?.count,
					week: obj?.month,
				};
			});
		} else if (contactData?.chartDataStatus === "monthly") {
			data = contactData?.contactData?.map((obj) => {
				return {
					month: obj?.month,
					Contatos: obj?.count,
					week: obj?.week,
				};
			});
		} else if (contactData?.chartDataStatus === "week") {
			data = contactData?.contactData?.map((obj) => {
				return {
					month: obj?.month,
					Contatos: obj?.count,
					week: obj?.sortWeek,
				};
			});
		} else {
			if (contactData?.contactData?.length >= 30) {
				console.log("30");
			} else if (
				contactData?.contactData?.length >= 30 &&
				contactData?.contactData?.length <= 60
			) {
				Date.prototype.getWeek = function (dowOffset) {
					/*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.epoch-calendar.com */

					dowOffset = typeof dowOffset == "int" ? dowOffset : 0; //default dowOffset to zero
					var newYear = new Date(this.getFullYear(), 0, 1);
					var day = newYear.getDay() - dowOffset; //the day of week the year begins on
					day = day >= 0 ? day : day + 7;
					var daynum =
						Math.floor(
							(this.getTime() -
								newYear.getTime() -
								(this.getTimezoneOffset() -
									newYear.getTimezoneOffset()) *
									60000) /
								86400000
						) + 1;
					var weeknum;
					//if the year starts before the middle of a week
					if (day < 4) {
						weeknum = Math.floor((daynum + day - 1) / 7) + 1;
						if (weeknum > 52) {
							let nYear = new Date(this.getFullYear() + 1, 0, 1);
							let nday = nYear.getDay() - dowOffset;
							nday = nday >= 0 ? nday : nday + 7;
							/*if the next year starts before the middle of
									 the week, it is week #1 of that year*/
							weeknum = nday < 4 ? 1 : 53;
						}
					} else {
						weeknum = Math.floor((daynum + day - 1) / 7);
					}
					return weeknum;
				};

				function getWeekStart(date) {
					var offset = new Date(date).getDay();
					return new Date(
						new Date(date) - offset * 24 * 60 * 60 * 1000
					)
						.toISOString()
						.slice(0, 10);
				}

				function groupWeeks(dates) {
					const groupsByWeekNumber = dates.reduce(function (
						acc,
						item
					) {
						const today = new Date(item._id);
						const weekNumber = today.getWeek();

						// check if the week number exists
						if (typeof acc[weekNumber] === "undefined") {
							acc[weekNumber] = [];
						}

						acc[weekNumber].push(item);

						return acc;
					},
					[]);

					return groupsByWeekNumber.map(function (group) {
						return {
							weekStart: getWeekStart(group[0]._id),
							Contatos: group.reduce(function (acc, item) {
								return acc + item.count;
							}, 0),
						};
					});
				}

				// console.log("fdsf", groupWeeks(contactData?.contactData));
				data = groupWeeks(contactData?.contactData).filter(function (
					el
				) {
					return el != null;
				});
			} else {
				// console.log("60+");
			}
		}
	};
	getData();
	const CustomTooltip = ({ active, payload, label }) => {
		// console.log("payload", payload);
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
									boxShadow:
										"0px 0px 10px rgba(0, 0, 0, 0.15)",
								}}>
								<div style={{ color: "#6F767E" }}>
									{pld.payload.week}
								</div>
								<div
									style={{
										fontWeight: 900,
										color: "#1A1D1F",
									}}>
									{" "}
									{`${pld.value} ${pld.dataKey}`}
								</div>
							</div>
						))}
					</div>
				</div>
			);
		}

		return null;
	};

	return (
		<ResponsiveContainer width='100%' height={220}>
			{/* <LineChart data={data} width={100} height={100}> */}
			<LineChart data={data}>
				<Line
					type='monotone'
					dataKey='Contatos'
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
					}}
					content={<CustomTooltip />}></Tooltip>
			</LineChart>
		</ResponsiveContainer>
	);
};
export default Linechart;
