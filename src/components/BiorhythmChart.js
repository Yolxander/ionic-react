import React from 'react';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	ReferenceLine,
	CartesianGrid,
} from 'recharts';

import { calculateBiorhythmSeries } from '../calculations';
import dayjs from 'dayjs';

function formatDate(isoString) {
	return dayjs(isoString).format('D MMM');
}

const BiorhythmChart = ({ birthDate, targetDate }) => {
	const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
	const data = calculateBiorhythmSeries(
		birthDate,
		startDate,
		31
	).map((item) => ({ ...item, date: formatDate(item.date) }));
	return (
		<ResponsiveContainer width="100%" height={200}>
			<LineChart data={data}>
				<XAxis
					dataKey="date"
					ticks={[data[3].date, data[15].date, data[27].date]}
				/>
				<CartesianGrid vertical={false} strokeDasharray="3 3" />
				<ReferenceLine x={data[15].date} />
				<Line dot={false} type="natural" dataKey="physical" stroke="green" />
				<Line dot={false} type="natural" dataKey="emotional" stroke="red" className="emotional"/>
				<Line dot={false} type="natural" dataKey="intellectual" stroke="blue" />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default BiorhythmChart;
