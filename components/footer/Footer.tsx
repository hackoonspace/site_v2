import React from 'react';
import FooterStyle from './style/Footer';
	
export default function Footer() {
	return ( 
        <div>
            <footer className="w-100 d-flex justify-content-center align-items-center fixed-footer text-center">
                <div className="col-md-4">
                    <a className='link' target="_blank" rel="noreferrer" href="/TermosDeUso">Termos de Uso</a>
                </div>
                <div className="col-md-4">
                    <a className='link' target="_blank" rel="noreferrer" href="/Privacidade">Política de Privacidade</a>
                </div>
                <div className="col-md-4">
                    <a className='link' target="_blank" rel="noreferrer"href="/FAQ">FAQ</a>
                </div>
            </footer>
            <style jsx>
                {FooterStyle}
            </style>
        </div>
	)
}