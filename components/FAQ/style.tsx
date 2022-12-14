import css from 'styled-jsx/css';

export default css`
    .faq-container {
        padding: 20px 20px 30px;
        position: relative;
        background: #060c21;
        border: 1px solid #000;
        border-radius: 10px;
        border-radius: 10px;
        text-align: justify;
        width: 100%;
    }

    .faq-title {
        color: white;
        font-family: 'VT323';
        font-size: 42px;
        margin-bottom: 18px;
        text-align: center;
    }

    .faq-question-title {
        font-family: 'VT323';
        font-size: 24px;
        color: white;
        width: 100%;
        text-align: center;
        hyphen: auto;
    }

    .faq-body {
        background-color: #060c21;
        padding: 25px;
        display: flex;
        gap: 20px;
        flex-direction: column;
    }

    .faq-question-answer {
        color: white;
        font-family: 'VT323';
        font-size: 22px;
        margin-bottom: 0;
    }
`;