import Accordion from 'react-bootstrap/Accordion';

import { Contact } from '../../types/Cronogram';
import DropdownStyle from './style';

interface Props {
    title: string;
    items: Contact[];
}

export default function Dropdown({ title, items }: Props) {
    return (
        <>
            <Accordion style={{ maxWidth: 300}}>
                <Accordion.Item eventKey='0' key={`drp-${title}`}>
                    <Accordion.Header>
                        <span className='drp-title'>
                            {title}
                        </span>
                    </Accordion.Header>
                    <Accordion.Body style={{padding: 0, gap: 10}}>
                        <div className='drp-body'>
                            {items.map((item, index) => (
                                <div className='drp-item-container' key={`drp-${item}-${index}`}>
                                    <span>- </span>
                                    <a 
                                        className='link drp-item' 
                                        href={item.href}
                                        target='__blank'
                                    >
                                        {item.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <style jsx>
                {DropdownStyle}
            </style>
        </>
    )
}