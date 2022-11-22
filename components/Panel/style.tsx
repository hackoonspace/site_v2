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
        max-width: 350px;
    }

    .text {
        color: #eb628be1;
        font-family: "VT323";
        font-size: 45px;
        font-weight: 150;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 0;
    }

    .text::after {
        content: " █ ";
        font-size: 24px;
        margin-left: 12px;
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
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px; 
        max-width: 1100px;
        padding: 25px;
    }

    .descricao {
        text-align: justify;
        hyphens: auto;
        font-family: "VT323";
        font-size: 25px;
    }

    .panel-items-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 18px;
        padding: 8px;
        max-width: 920px;
    }

    .panel-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
    }

    @media (max-width: 768px) {
        .logo {
            width: 100%;
        }
    }
`;