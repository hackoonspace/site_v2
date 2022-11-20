import React from 'react';

function Patrocinio() {
	return ( 
		<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
			<div className="spaceBorder">
				<div className="patrocinadores">
					<h1>Patrocinador</h1>
					<a href="http://mindlabs.com.br/" target="_blank" rel="noreferrer" title="Site da MindLabs">
						<img className="patrocinadorImg" alt="Logo da empresa MindLabs" src="/mind.svg"/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Patrocinio;