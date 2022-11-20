
import React from 'react';

function Contato() {
	return ( 
		<div className='d-flex align-items-center justify-content-center'>
			<div className="spaceBorder">
				<div className="contato">
					<h1>Contato e redes sociais</h1>
					<div className="row">
						<div className="col-sm">
							<a href="https://www.facebook.com/hackoonspace/" target="_blank" rel="noreferrer" title="Facebook"><img className="contatoImg" alt="Logo do Facebook" src="/facebook.png"></img></a>
						</div>
						<div className="col-sm">
							<a href="https://twitter.com/HackoonSpace" target="_blank" rel="noreferrer" title="Twitter"><img className="contatoImg" alt="Logo do Twitter" src="/twitter.png"></img></a>
						</div>
						<div className="col-sm">
							<a href="https://www.youtube.com/@hackoonspace" target="_blank" rel="noreferrer" title="Youtube"><img className="contatoImg" alt="Logo do Youtube" src="/youtube.png"></img></a>
						</div>
						<div className="col-sm">
							<a href="https://www.instagram.com/hackoonspace" target="_blank" rel="noreferrer" title="Instagram"><img className="contatoImg" alt="Logo do Instagram" src="/instagram.png"></img></a>
						</div>
						<div className="col-sm">
							<a href="https://www.linkedin.com/company/hackoonspace/" target="_blank" rel="noreferrer" title="LinkedIn"><img className="contatoImg" alt="Logo do LinkedIn" src="/linkedin.png"></img></a>
						</div>
					</div>
					<h4 className='mt-4'>E-mail: <a className='link' href="mailto:hackoonspace@gmail.com">hackoonspace@gmail.com</a></h4>
				</div>
			</div>
		</div>
	)
}

export default Contato;