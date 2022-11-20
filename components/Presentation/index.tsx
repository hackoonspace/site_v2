import React from 'react';
import Image from 'next/image';

import PresentationStyle from './style';

interface Props {
	title: string,
	description: string,
	host: string,
	hour: string,
	image: string
}

function Presentation ({ title, description, host, hour, image }: Props) {
	return (
		<div style={{padding: 10}}>
			<div className="palestra">
				<div className="infoBox">
					<div className="imagemContainer">    
					<Image className="palestraImagem" width='250' height='250' src={image} alt="palestra"/>	
					</div> 
					<div className="horarioTitulo">
						<div>
							<div>
								<span> Evento: <span className="dadosPalestra">{title}</span> {hour} </span>
							</div>
							<div>
								<span> Host: 
									<span className="dadosPalestra"> {host} </span>
								</span>
							</div>
						</div>
						<div className="Desc">
							<span className="box">
								<p> {description} </p>
							</span>
						</div>
					</div>
				</div> 
			</div>
			<style jsx>
				{PresentationStyle}
			</style>
		</div>
	)
}

export default Presentation;