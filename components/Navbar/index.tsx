import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavbarStyle from './style';

const navContainerCSS = {
	background: 'rgb(5, 10, 26)',
	paddingTop: 0,
	paddingBottom: 4,
	borderBottom: '2px solid rgb(235, 100, 140)'
}

const navBrandCSS = {
	textDecoration: 'none',
	display: 'flex',
	alignItems: 'center',
	gap: 20,
	marginLeft: 35,
	minHeight: 80,
}

const navToggleCSS = {
	color: 'white', 
	marginRight: 20,
	backgroundColor: 'rgb(235, 100, 140)'
}

function NavbarComponent() {	
	return (
		<Navbar variant='dark' style={navContainerCSS} sticky='top' expand="xl">
				<Navbar.Brand style={navBrandCSS} href='/'>
					<Image height="45" width="50" src="/hs_logo_purple.png" alt="Logo HackoonSpace"/> 
					<span className='brand-span'>HACKOONSPACE</span>
				</Navbar.Brand>
				<Navbar.Toggle style={navToggleCSS} aria-controls="basic-navbar-nav" />
				<Navbar.Collapse style={{justifyContent: 'flex-end'}} id="basic-navbar-nav">
					<Nav>
						<div className='nav-link-container'>
							<Nav.Link style={{color: 'white'}} href="/">Home</Nav.Link>
						</div>
						<div className='nav-link-container'>
							<Nav.Link style={{color: 'white'}} href="/#about">Sobre</Nav.Link>
						</div>
						<div className='nav-link-container'>
							<Nav.Link style={{color: 'white'}} href="/projects">Projetos</Nav.Link>
						</div>
						<div className='nav-link-container'>
							<Nav.Link style={{color: 'white'}} target='__blank' href="https://newsletter-hackoon.herokuapp.com/">Newsletter</Nav.Link>
						</div>
						<div className='nav-link-container'>
							<Nav.Link style={{color: 'white'}} href="/hackoonweek">HackoonWeek</Nav.Link>
						</div>
						<div className='nav-link-container'>
							<Nav.Link style={{color: 'white'}} href="/faq">FAQ</Nav.Link>
						</div>
						<div className='nav-link-container'>
							<Nav.Link style={{color: 'white'}} href="/#contact">Contato</Nav.Link>
						</div>
					</Nav>
				</Navbar.Collapse>
			
			<style jsx>
				{ NavbarStyle }
			</style>
		</Navbar>
	);
}

export default NavbarComponent;