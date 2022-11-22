import Image from 'next/image';

import ContactStyle from './style';

interface Props {
	id: string;
}

function Contact({ id }: Props) {
	return ( 
		<div className='d-flex align-items-center justify-content-center' id={id}>
			<div className="spaceBorder">
				<div className="contato">
					<h1 style={{color: 'white'}}>Contato e redes sociais</h1>
					<div className="row">
						<div className="col-sm">
							<a href="https://www.facebook.com/hackoonspace/" target="_blank" rel="noreferrer" title="Facebook">
								<Image className="contatoImg interactiveImg" height='80' width='80' alt="Logo do Facebook" src="/facebook.png" />
							</a>
						</div>
						<div className="col-sm">
							<a href="https://twitter.com/HackoonSpace" target="_blank" rel="noreferrer" title="Twitter">
								<Image className="contatoImg interactiveImg" height='80' width='80' alt="Logo do Twitter" src="/twitter.png" />
							</a>
						</div>
						<div className="col-sm">
							<a href="https://www.youtube.com/@hackoonspace" target="_blank" rel="noreferrer" title="Youtube">
								<Image className="contatoImg interactiveImg" height='80' width='80' alt="Logo do Youtube" src="/youtube.png" />
							</a>
						</div>
						<div className="col-sm">
							<a href="https://www.instagram.com/hackoonspace" target="_blank" rel="noreferrer" title="Instagram">
								<Image className="contatoImg interactiveImg" height='80' width='80'  alt="Logo do Instagram" src="/instagram.png" />
							</a>
						</div>
						<div className="col-sm">
							<a href="https://www.linkedin.com/company/hackoonspace/" target="_blank" rel="noreferrer" title="LinkedIn">
								<Image className="contatoImg interactiveImg" height='80' width='80' alt="Logo do LinkedIn" src="/linkedin.png" />
							</a>
						</div>
						<div className="col-sm">
							<a href="https://github.com/hackoonspace" target="_blank" rel="noreferrer" title="Github">
								<Image className="contatoImg interactiveImg" height='80' width='80' alt="Logo do Github" src="/github.png" />
							</a>
						</div>
					</div>
					<p className='contact-email mt-4'>
						E-mail: <a className='link' href="mailto:hackoonspace@gmail.com">hackoonspace@gmail.com</a>
					</p>
				</div>
			</div>
			<style jsx>
				{ContactStyle}
			</style>
		</div>
	)
}

export default Contact;