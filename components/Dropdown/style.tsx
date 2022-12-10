import css from 'styled-jsx/css';

export default css`
    .drp-title {
        font-family: 'VT323';
        font-size: 24px;
        color: white;
        width: 100%;
        hyphen: auto;
        text-align: center;
    }

    .drp-body {
        background-color: #060c21;
        padding: 20px;
        display: flex;
        gap: 10px;
        flex-direction: column;
    }

    .drp-item-container {
        display: inline;
    }

    .drp-item {
        font-family: 'VT323';
        font-size: 22px;
        margin-bottom: 0;
        hyphen: auto;
    }
`;