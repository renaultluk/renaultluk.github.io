'use client'

import { Col, Container } from "react-bootstrap";
import Image from 'next/image'
import styles from '../app/styles/SocialButton.module.css'

const SocialButton = (props) => {
    const redirect = () => {
        window.open(props.url, '_blank').focus();
    }
    
    return (
        <Col xs={12} sm={6} className={styles.btnContainer}>
            <Container className={styles.btnBody} onClick={redirect}>
                <Image 
                    src={props.image}
                    width={80}
                    height={80}
                    layout="intrinsic"
                    className={styles.imgCover}
                />
                <div className={styles.txtBody}>
                    <h3>{props.title}</h3>
                    <span>{props.info}</span>
                </div>
            </Container>
        </Col>
    );
}

export default SocialButton;