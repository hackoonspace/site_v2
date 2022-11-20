import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterStyle from './style/Navbar';

function Navbar() {	
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link style={{marginLeft: 35}} href="/">
				<Image height="60" width="65" src="/hs_logo_purple.png" alt="Logo HackoonSpace"/> 
			</Link>
			<div className="navbar-toggler buttonHamburguer" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</div>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="dir nav-item"><Link className="nav-link" href="/">Home</Link></li>
					<li className="dir nav-item"><Link className="nav-link" href="/FAQ">FAQ</Link></li>
					<li className="dir nav-item"><Link className="nav-link" href="/Conta">Conta</Link></li>
				</ul>	
			</div>
			<style jsx>
				{ FooterStyle }
			</style>
		</nav>
	);
}

export default Navbar;