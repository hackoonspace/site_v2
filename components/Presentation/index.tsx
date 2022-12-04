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
					<Image style={{margin: 20}} width='150' height='150' src={image} alt="palestra"/>	
					</div> 
					<div className="horarioTitulo">
						<div>
							<div>
								<span> Evento: <span className="dadosPalestra">{title}</span> Horário: {hour} </span>
							</div>
							<div>
								<span> Host: 
									<span className="dadosPalestra"> 
										{host} 
									</span>
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