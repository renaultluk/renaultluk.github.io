import { useState, useEffect } from 'react';

const About = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });
    
    return (
        <div>
            <h1>About Me</h1>
            <h3>Skills</h3>
            <h3>Education</h3>
            <h3>Achievements</h3>
        </div>
    )
}

export default About;