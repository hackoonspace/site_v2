import { useState, useEffect } from 'react';

import Accordion from 'react-bootstrap/Accordion';

import FAQStyles from './style';

type Question = {
    title: string;
    answers: string[];
}

interface Props {
    title: string;
    data: string;
}

function FAQ({ title, data }: Props) {
    const [questions, setQuestions] = useState<Array<Question>>([]);

    useEffect(() => {
        const jsonData = require(`../../data/faqs/${data}`);
        setQuestions(jsonData);
    },[data]);

    return (
        <div>
            <div className="spaceBorder">
                <div className="faq-container">
                    <h2 className="faq-title">{title}</h2>
                    <Accordion defaultActiveKey="0">
                        {
                            questions.map((question, index) => {
                                return (
                                    <>
                                        <Accordion.Item 
                                            eventKey={`${index}`} key={`question-${index}`}
                                        >
                                            <Accordion.Header>
                                                <span className='faq-question-title'>{question.title}</span>
                                            </Accordion.Header>
                                            <Accordion.Body style={{padding: 0, gap: 20}}>
                                                <div className='faq-body'>
                                                    {question.answers.map((answer, idx) => {
                                                        return (
                                                            <p key={`answer-${idx}`} className='faq-question-answer'>
                                                                {answer}
                                                            </p>
                                                        )
                                                    })}
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        {index < (questions.length - 1) ? <hr className="linhaDuvida"/> : ''}
                                    </>
                                )
                            })
                        }
                    </Accordion>
                </div>
                <style jsx>
                    {FAQStyles}
                </style>
            </div>
        </div>
    );
}

export default FAQ;