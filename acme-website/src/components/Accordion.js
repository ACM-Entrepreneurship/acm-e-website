import { useState } from 'react'
import "./Accordion.css";

function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className="accordion_wrapper">
            <div className="accordion">
                {data.map((item, i) => (
                    <div className="accordion_item">
                        <div className="accordion_title" onClick = {() => toggle(i)}>
                            <h2 className="accordion_h2">{item.question}</h2>
                            <span>{selected == i ? '-' : '+'}</span>
                        </div>
                        <div className={selected == i ? 'accordion_content show' : 'accordion_content'}>{item.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const data = [
    {
        question: 'What is ACM Entrepreneurship?',
        answer: 'Answer1',
    },

    {
        question: 'What do we do?',
        answer: 'Answer2',
    },

    {
        question: 'What are the benefits of joining?',
        answer: 'Answer2',
    },

    {
        question: 'Who can join?',
        answer: 'Answer2',
    },

    {
        question: 'Have more questions?',
        answer: 'Answer2',
    },
]

export default Accordion