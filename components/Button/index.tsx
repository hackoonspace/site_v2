import React from 'react';

import ButtonStyle from './style';

interface Props {
    text: string;
    href: string;
    size: 'bg' | 'md' | 'sm';
}

export default function Button({text, href, size}: Props) {
    const sizes = {
        'bg': 35,
        'md': 30,
        'sm': 25
    }

	return ( 
        <div className='mt-5 d-flex justify-content-center align-items-center'>
            <a className='button-anchor' style={{fontSize: sizes[size]}} href={href}>
                {text}
            </a>
            <style jsx>
                {ButtonStyle}
            </style>
        </div>
	)
}