import css from 'styled-jsx/css';

export default css`
    .MeioPagLogo {
        height:240%;
        max-height: 700px;
        min-height: 250px;
        width: auto;
    }

    .text {
        /*color:#d95d67d3;*/
        /*color:#D25899;*/
        /*color: #D8C700;*/
        /*color:#efe9ef;*/
        color:#eb628be1;
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

    .containerLogo{
        display: flex;
        width: 100%; 
        height: 15vw;
        justify-content:center;
        align-items: center;
        margin-bottom: 32px;
        margin-top:25px;
    }

    .containerTexto {
        margin-bottom: 32px;
        margin-left: 20px; 
        margin-right: 20px;
        background-color: #170d5183;
        border: 1px solid rgba(0, 0, 0, 0);
        width: 150vh;
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