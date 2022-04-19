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
            <div style={{ height: 500 }}>
                <h1>About Me</h1>
            </div>
            <div style={{ height: 500 }}>
                <h3>Skills</h3>
            </div>
            <div>
                <div style ={{
                    height: 500,
                    transform: offsetY > 200 ? `translateX(${offsetY}px)` : '0px',
                }}>
                    <h3>Education</h3>
                </div>
            </div>
            <h3>Achievements</h3>
        </div>
    )
}

export default About;