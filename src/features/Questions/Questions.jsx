import React from 'react';
import './Questions.scss';
import { FAQItem, LinkButton } from '../../components';

const faqData = [
    {
        question: "What is Bookmark?",
        answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies nonligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
        question: "How can I request a new browser?",
        answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies nonligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
        question: "Is there a mobile app?",
        answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies nonligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
        question: "What about other Chromium browsers?",
        answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies nonligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
];

const Questions = () => {
    return (
        <section className='questions'>
            <div className='questions__contener'>
                <h2>Frequently Asked Questions</h2>
                <p>
                    Here are some of our FAQs. If you have any
                    other questions you'd like answered please
                    feel free to email us.
                </p>
            </div>

            <div className='questions__contener2'>
                {faqData.map((item, i) => (
                    <FAQItem key={i} question={item.question} answer={item.answer} />
                ))}
            </div>
            <div className='questions__contener3'>
                <LinkButton href="#" style={{ width: '100%' }}>
                    More Info
                </LinkButton>
            </div>


        </section>
    );
};

export default Questions;