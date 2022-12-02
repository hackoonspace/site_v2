import css from 'styled-jsx/css';

export default css`
    .scroll-container {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        right: 30px;
        bottom: 32px;
        border: 2px solid black;
        color: white;
        background-color: #f700ff5b;
        position: fixed;
        z-index: 1050;
    }

    .scroll-container:hover {
        background: #f44bfac0;
    }
`;