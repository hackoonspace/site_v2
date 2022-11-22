import Image from 'next/image';

import suppotersJson from '../../data/supporters.json';

function Supporters() {
	return ( 
		<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
			<div className="spaceBorder">
				<div className="entidades">
					<h1 style={{color: 'white'}}>Realização</h1>
					<div className="row">
						{
							suppotersJson.map((supporter, index) => {
								return (
									<div className="col-sm" key={`supporter-${index}`}>
										<a href={supporter.href} target="_blank" rel="noreferrer">
											<Image width='125' height='125' className="entidadeImg interactiveImg" alt={supporter.alt} src={supporter.src}/>
										</a>
										<h3 style={{marginTop: "20px", color: "white"}}>{supporter.name}</h3>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Supporters;