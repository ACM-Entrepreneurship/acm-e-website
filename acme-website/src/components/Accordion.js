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
        <>
         <div id="faq">
           
         </div>
         <div className="accordion_wrapper">
             <div className="accordion">
             <h1 id="paragraph_header">FAQ</h1>
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
        </>
    )
}

const data = [
    {
        question: 'What is ACM Entrepreneurship?',
        answer: 'ACM-E is an organization that focuses on two main goals. The first is to provide exposure to students from any majors through hands-on learning in their fields of interest with our virtual companies and our external projects. The second goal is to foster entrepreneurial mindset by allowing students to come up with innovative ideas for our virtual companies, by providing support for student startups. We welcome everyone and help our members build the technical as well as the soft skills that are sought in the professional world.',
    },

    {
        question: 'What do we do?',
        answer: 'We are here to find and recognize problems, and provide solutions. We encourage members to provide solutions that creates value. Once a member has strong plan to tackle the problem, we are here to make it happen!',
    },

    {
        question: 'What are the benefits of joining?',
        answer: 'Team members here will gain new skills and knowledge from collaborating in a diverse team! Members will develop critical thinking, problem solving, creativity, financial intelligence, business sense, leadership, networking, and access resources! And more!',
    },

    {
        question: 'Who can join?',
        answer: 'Anyone can join! All majors and skillsets are welcome. You don’t need any experience. Come with a growth mindset, and learn on the go while serving and leaving a better legacy.',
    },

    {
        question: 'Have more questions?',
        answer: 'Please email us for further questions:  entrepreneurshipacm@gmail.com',
    },
]

export default Accordion