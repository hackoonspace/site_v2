import React from 'react';

import MainPanelStyle from './style';

interface Props {
    title: string;
    description: JSX.Element[];
    image: string;
}

function MainPanel ({ title, description, image }: Props) {
	return (
		<div>
			<div className="containerLogo"> 
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img className="logo" src={image} alt="Logo HackoonWeek"/>
			</div>
			<div className="centralizador">

			<div className="containerTexto">
				<h1 className="text">{title}</h1>
				{ description.map((d, index) => <div className="descricao" key={`d-${index}`}>{d}</div>) }
			</div> 
			</div>
			<style jsx>
				{MainPanelStyle}
			</style>
		</div>
	);
}

export default MainPanel;