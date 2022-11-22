
import ListStyle from './style';

type ListItem = {
    title: string;
    href: string;
}

interface Props {
    title: string;
    description: string;
    items: ListItem[]
}

function List({title, description, items}: Props) {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className="spaceBorder flex-column">
                <h4 className='list-title'>{title}</h4>
                <p className='list-description'>
                    {description}
                </p>
                <ul className="list list-group">
                    {
                        items.map((item, index) => {
                            return (
                                <li key={`${title}-item-${index}`} className="list-item list-group-item">
                                    <a className='list-anchor' target='__blank' href={item.href}>
                                        <span className='list-anchor-text'>{item.title}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <style jsx>
                {ListStyle}
            </style>
        </div>
    );
}

export default List;