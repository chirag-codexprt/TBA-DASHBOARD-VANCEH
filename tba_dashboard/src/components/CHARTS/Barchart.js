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

function BarChartVisitor() {
	const [focusBar, setFocusBar] = useState(null);

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
			if (contactData.length <= 30) {
				data = contactData?.contactData?.map((obj) => {
					return {
						month: obj?.month,
						Contatos: obj?.count,
						week: obj?.sortWeek,
					};
				});
				console.log("30");
			} else if (contactData.length >= 30 && contactData.length <= 60) {
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
				// console.log("60");
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

				<Bar dataKey='Contatos' radius={5}>
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

export default BarChartVisitor;
