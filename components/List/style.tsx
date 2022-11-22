import css from 'styled-jsx/css';

export default css`
    .list {
        min-width: 100%;
    }

    .list-title {
        padding: 16px;
        color: white;
        font-family: 'VT323';
        font-size: 30px;
    }

    .list-description {
        max-width: 600px;
        background-color: #060c21;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 6px;
        font-size: 26px;
        font-family: 'VT323';
    }

    .list-item {
        background-color: #060c21;
        color: white;
        font-family: 'VT323';
        font-size: 22px;
        padding: 0;
    }

    .list-item:hover {
        background-color: #0d1a48;
    }

    .list-anchor {
        padding: 10px;
        width: 100%;
        display: block;
        text-decoration: none;
    }

    .list-anchor-text {
        font-weight: bold;
        color: #eb628be1;
    }

    .list-anchor:hover {
        transition: .1s linear;
        color: #ffaec6e1;
        text-decoration: underline;
    }
`;