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
        font-size: 32px;
        margin-bottom: 18px;
    }

    .faq-question-title {
        font-family: 'VT323';
        font-size: 24px;
        color: white;
        width: 100%;
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
        font-size: 24px;
        margin-bottom: 0;
    }
`;