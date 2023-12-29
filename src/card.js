






import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
];

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <img src="https://shorturl.at/eswAW" alt="avatar" className='avatar' />
    )
}
function Intro() {
    return (
        <div className=''>

            <h1>Vedansh Kandpal</h1>
            <p>Should contain one Skill component
                for each web dev skill that you have,
                customized with props</p>
        </div>
    )
}
function SkillList() {
    return (
        <div className='skill-list'>
            {skills.map((mySkill) => (
                <Skill skill={mySkill.skill} level={mySkill.level} color={mySkill.color} key={mySkill.skill} />

            ))}
            {/* <Skill name="HTML+CSS" emoji="💪" color="blue" />
            <Skill name="JavaScript" emoji="💪" color="yellow" />
            <Skill name="React" emoji="💪" color="rgb(114, 200, 124)" />
            <Skill name="Web Development" emoji="💪" color="rgb(236, 34, 34)" /> */}
        </div>
    )
}

function Skill({ skill, level, color }) {
    return (
        <div className='skill' style={{ backgroundColor: color }}>
            <span>{skill}</span>
            {level === "beginner" ? <span>👶</span> : level === "intermediate" ? <span>👍</span> : <span>💪</span>}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)