import { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

import RotateIcon from '../components/RotateIcon';

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
            {/* <div style={{ height: 500 }}>
                <h3>Skills</h3>
            </div> */}
            
            {/* <RotateIcon /> */}

            <div>
                Hi! My name is Renault, and I am a Software Developer based in Hong Kong, armed with Embedded Systems Engineering, UI/UX Design, and Product Design skills. I’m a problem solver, a team player, and a curious and inquisitive learner.
            </div>

            <Parallax
                rotateX={[-90, 0, 'easeOutExpo']}
                startScroll={0}
                endScroll={500}
            >
                <div style={{ height: 500, padding: 16 }}>
                    <h4>Software Development</h4>
                    <span>An aspiring full stack developer at heart, my focus is on creating frontends on websites, desktop and mobile applications; and have experience with devising backend logic and database management; as well as adding machine learning.</span>
                </div>
            </Parallax>


            <div>
                <h4>UI/UX Design</h4>
                <span>Using interaction design principles, I create designs that minimise interaction cost, and account for product’s context of usage for the best user experience.</span>
            </div>

            <div>
                <h4>Embedded Systems Engineering</h4>
                <span>From sourcing components, to designing circuits and PCBs, and developing embedded software, I am interested in creating embedded devices and IoT systems.</span>
            </div>

            <div>
                <h4>Product Design</h4>
                <span>Armed with design thinking skills, I enjoy identifying existing problems and user needs, creating concept sketches, and bringing the product into fruition with the aid of CAD, as well as my technical knowledge with software, hardware and design principles.</span>
            </div>

            <div>
                <div style ={{
                    height: 500,
                    // transform: offsetY > 200 ? `translateX(${offsetY}px)` : '0px',
                }}>
                    <h3>Education</h3>
                </div>
            </div>
            <h3>Achievements</h3>
        </div>
    )
}

export default About;