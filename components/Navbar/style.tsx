import css from 'styled-jsx/css';

export default css`
    .navbar-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav-link-container {
        color: white;
        font-size: 18px;
        font-weight: bold;
        width: 100%;
        text-align: center;
        margin-right: 35px;
        gap: 20px;
    }

    .nav-link-container:hover {
        background-color: rgb(14, 29, 76);
    }

    .brand-span {
        color: white;
        font-weight: bold;
        font-size: 28px;
    }

    @media(max-width: 768px) {
        .brand-span {
            display: none;
        }

        .nav-link-container {
            margin-right: 0;
            gap: 0;
        }
    }
`;