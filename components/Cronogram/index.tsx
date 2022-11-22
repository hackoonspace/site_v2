import React, { useState, useEffect } from 'react';
import Presentation from "../Presentation";

import CronogramStyle from './style';
import CronogramJson from '../../data/cronogram.json';

export default function Cronogram() {
	const [selectedDay, setSelectedDay] = useState(0);
	const [selectedPresentations, setSelectedPresentations] = useState([
		<div key='presentation-1'></div>, 
		<div key='presentation-2'></div>, 
		<div key='presentation-3'></div>
	]);

	function getButtonBackgroundColor(day: number) {
		return day === selectedDay ?  { backgroundColor: "#f44bfac0" } : { };
	}

	function changeDay(newDay: number) {
		setSelectedDay(newDay);
	}

	function updatePresentations() {
		const { presentations } = CronogramJson[selectedDay];

		const newPresentations = presentations.map((presentation, index) => {
			return (
				<Presentation 
					title={presentation.title}
					description={presentation.description}
					host={presentation.host}
					hour={presentation.hour}
					image={presentation.image}
					key={`presentation-${index}`}
				/>
			);
		});
		setSelectedPresentations(newPresentations);
	}

	useEffect(() => {
		updatePresentations();
	}, [selectedDay]);

	return (
		<div className="palestraContainer mt-5">
			<div className="cronogram-buttons row d-flex justify-content-around mb-4 gap-4 mw-100">
				<div className="col col-md-auto d-flex justify-content-center">
					<button style={getButtonBackgroundColor(0)} onClick={() => changeDay(0) }>
						1º dia - 12/12
					</button>
				</div>
				<div className="col col-md-auto d-flex justify-content-center">
					<button style={getButtonBackgroundColor(1)} onClick={() => changeDay(1) }>
						2º dia - 13/12
					</button>
				</div>
				<div className="col col-md-auto d-flex justify-content-center"> 
					<button style={getButtonBackgroundColor(2)} onClick={() => changeDay(2) }>
						3º dia - 14/12
					</button>
				</div>
				<div className="col col-md-auto d-flex justify-content-center"> 
					<button style={getButtonBackgroundColor(3)} onClick={() => changeDay(3) }>
						4º dia - 15/12
					</button>
				</div>
				<div className="col col-md-auto d-flex justify-content-center"> 
					<button style={getButtonBackgroundColor(4)} onClick={() => changeDay(4) }>
						5º dia - 16/12
					</button>
				</div>
			</div>
			<div className="palestraBox" id="boxdiv">
				{selectedPresentations}
			</div>
			<style jsx>
				{CronogramStyle}
			</style>
		</div>
	)
}