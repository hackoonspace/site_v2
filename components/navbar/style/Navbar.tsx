import css from 'styled-jsx/css';

export default css`
    label.logo {
        color: rgb(207, 207, 207);
        font-size: 35px;
        font-weight: bold;
        line-height: 60px;
        margin-left: 40px;
    }

    a.active, a:hover {
        transition: color 0.1s ease-in-out;
        color: #ffaec6e1;
        /*color: #a5264ce1;*/
    }

    #navbarNav {
        justify-content: right;
        margin-right: 30px;
    }

    .buttonHamburguer{
        cursor: pointer;
    }

    .navbar {
        background-color: #333548 !important;
        font-size: 20px;
        font-weight: 600 !important;
        font-family: Arial, Helvetica, sans-serif !important;
        top: 0;
        z-index: 999 !important;
        position: sticky !important;
    }

    .nav-item {
        display: flex;
        justify-content: center;
        margin: 0 10px;
    }
`;