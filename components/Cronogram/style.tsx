import css from 'styled-jsx/css';

export default css`
    .palestraContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: auto;
        margin-left: auto;
        max-width: 1280px;
    }

    .palestraBox {
        overflow-y: scroll; 
        display:block;
        height: 450px;
        /*width: 150vh;*/
        width: 95%;
        margin-left:20px;
        border-radius: 10px;
        border: 2px solid cyan;
        background-color: rgba(200, 200, 200, 0.2);
    }

    .palestraBox::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar {
        cursor: pointer;
    }
    
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(65, 60, 60, 0.253); 
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #f700ff6e; 
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #f44bfac0;
    }

    .buttonbox {
        display:block;
    }


    .palBut:hover {
        box-shadow: 0 0.5em 0.5em -0.4em black;
        transform: translateY(-0.25em);
        background-color: #00ccff98;
    }

    .palBut:focus{ 
        background-color: #00ccff;
        border-color: rgba(0, 0, 0, 0);
    }
    .palbut{
        word-wrap: break-word;
    }

    button {
        background: #f700ff5b;
        position: relative;
        z-index: 200;
        color: white;
        font-family: "VT323";
        padding: 5px 5px;
        font-size: 25px;
        border-radius: 8px;
    }

    button:hover {
        background: #f44bfac0;
    }

    .cronogram-buttons div {
        white-space: nowrap;
    }
`;