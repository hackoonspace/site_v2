
import React from 'react';
	
function Entidades() {
	return ( 
		<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
			<div className="spaceBorder">
				<div className="entidades">
					<h1>Realização</h1>
					<div className="row">
						<div className="col-sm">
							<a href="https://hackoonspace.com" target="_blank" rel="noreferrer" title="Site do HackoonSpace"><img className="entidadeImg" alt="Logo do HackoonSpace" src="hackoonLogo.png"></img></a>
							<h3 style={{marginTop: "20px"}}>HackoonSpace</h3>
						</div>
						<div className="col-sm">
							<a href="https://maritacas-gamedev.github.io/website/" target="_blank" rel="noreferrer" title="Site do Maritacas GameDev"><img className="entidadeImg" alt="Logo do Maritacas GameDev" src="maritaca.png"></img></a>
							<h3 style={{marginTop: "20px"}}>Maritacas GameDev</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Entidades;