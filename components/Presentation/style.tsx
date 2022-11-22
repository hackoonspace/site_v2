import css from 'styled-jsx/css';

export default css`
    .imagemContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: auto;
        margin-left:auto;
    }

    .palestra {
        height:max-content;
        display:block;
        background-color: #170d5199;
        border: 2px solid rgb(34, 226, 252); 
        border-radius: 10px;
        align-items: center;
        padding: 10px;
    }

    .infoBox {
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        margin-bottom: 3px; 
        justify-content: stretch
    }

    .horarioTitulo {
        /*background-color: darkgray; */
        height: 100;
        width: 75%;
        font-size:20px;
        margin-left: auto;
        margin-right: auto;
        display:flex;
        flex-direction: column;
        align-content: center;
        justify-content:center;
        margin-top: 10px;
    }

    .horarioTitulo span {
        color: #7cb5eb; 
        font-family: "VT323";
        font-weight: 500;
        font-size: 35px;
    }

    .Desc {
        /*display: flex;
        justify-content: center;
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 20px;*/
        border: 3px solid rgba(255, 15, 127, 0.623);
        width: 150fr;

        border-radius: 25px;
        margin-top: 10px;

        margin-bottom: 10px;
        margin-right: 10px;
    }

    .Desc p {
        margin-top:7px;
        margin-left: 12px;
        margin-bottom: 12px;
        margin-right: 12px;
        font-size: 25px;
        font-family: "VT323";
    }

    .inputBoxC{
        font-size: 25px;
    }

    .horarioTitulo p{
        margin-bottom: 10px;
    }

    .horarioTitulo .dadosPalestra {
        color: #fff;
    }

    @media (max-width: 768px) {
        .infoBox {
            display: block;
        }

        .horarioTitulo span {
            font-size: 25px;
        }

        .imagemContainer {
            margin-top: 20px;
        }

        .MeioPagLogo {
            margin-top: 25px;
        }

        .containerTexto {
            margin-top: 25px;
        }
    }
`;