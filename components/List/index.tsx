
import ListStyle from './style';

interface Props {
    title: string;
    description: string;
    items: JSX.Element[]
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
                    { items }
                </ul>
            </div>
            <style jsx>
                {ListStyle}
            </style>
        </div>
    );
}

export default List;