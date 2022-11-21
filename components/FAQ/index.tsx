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
        <div className="faq-space-border">
            <div className="faq-container">
                <h2 className="text-center">{title}</h2>
                <Accordion defaultActiveKey="0">
                    {
                        questions.map((question, index) => {
                            return (
                                <>
                                    <Accordion.Item eventKey={`${index}`} key={`question-${index}`} className="duvida">
                                        <Accordion.Header>{question.title}</Accordion.Header>
                                        <Accordion.Body>
                                            {question.answers.map((answer, idx) => {
                                                return (
                                                    <p key={`answer-${idx}`}>
                                                        {answer}
                                                    </p>
                                                )
                                            })}
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
    );
}

export default FAQ;