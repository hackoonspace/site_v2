import css from 'styled-jsx/css';

export default css`
    .button-anchor {
        border: 2px solid black;
        background: #f700ff5b;
        position: relative;
        z-index: 200;
        color: white;
        font-family: "VT323";
        padding: 10px 15px;
        border-radius: 8px;
        text-decoration: none;
        text-align: center;
        max-width: 80%;
    }

    .button-anchor:hover{
        background: #f44bfac0;
        text-decoration: underline;
    }

`;