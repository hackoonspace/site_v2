import css from 'styled-jsx/css';

export default css`
    .containerLogo {
        display: flex;
        justify-content:center;
        align-items: center;
        margin-bottom: 32px;
        margin-top: 25px;
        margin-right: auto;
        margin-left: auto;
        max-width: 550px;
    }

    .logo {
        height: auto;
        width: 100%;
    }

    .text {
        color: #eb628be1;
        opacity: 1;
        font-family: "VT323";
        margin-top: 8px;
        margin-left: 20px;
        font-size: 45px;
        font-weight: 150;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .text::after {
        content: " █ ";
        font-size:20px;
        margin-left:5px;
        display: inline-block;
        animation: cursor-blink 1.1s steps(2) infinite;
    }
    
    @keyframes cursor-blink {
        0% {
            opacity: 0;
        }
    }

    .containerTexto p {
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .containerTexto {
        margin-left: 20px; 
        margin-right: 20px;
        background-color: #120b3cc4;
        width: 100vh;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px; 
        max-width: 1100px;
        padding: 15px;
    }

    .descricao {
        text-align: justify;
        hyphens: auto;
        max-width: 850px;
        font-family: "VT323";
        font-size: 25px;
    }

    .centralizador {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;