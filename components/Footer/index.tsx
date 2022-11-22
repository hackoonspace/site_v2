import React from 'react';
import FooterStyle from './style';

import linkJson from '../../data/links.json';

export default function Footer() {
	return ( 
        <div>
            <footer className="row d-flex justify-content-center mb-4 gap-2 w-100">
                {
                    linkJson.map((link, index) => {
                        return (
                            <div key={`footer-${index}`}className="col-md text-center">
                                <a className='link' target={link.blank ? "__blank" : ""} rel="noreferrer"href={link.href}>{link.text}</a>
                            </div>
                        );
                    })
                }
            </footer>
            <style jsx>
                {FooterStyle}
            </style>
        </div>
	)
}