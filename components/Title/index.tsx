import TitleStyled from './style';

interface Props {
    text: string;
}

export default function Title({ text }: Props) {
    return (
        <div>
            <h2 className='styled-title'>{text}</h2>
            <style jsx>
                {TitleStyled}
            </style>
        </div>
    );
}