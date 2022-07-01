import { Col, Container } from "react-bootstrap";
import Image from 'next/image'
import styles from '../styles/SocialButton.module.css'

const SocialButton = (props) => {
    const redirect = () => {
        window.open(props.url, '_blank').focus();
    }
    
    return (
        <Col xs={12} sm={6} className={styles.btnContainer}>
            <Container className={styles.btnBody} onClick={redirect}>
                <Image 
                    src="/WhatsApp.svg"
                    width={80}
                    height={80}
                />
                <Container className={styles.txtBody}>
                    <h3>{props.title}</h3>
                    <span>{props.info}</span>
                </Container>
            </Container>
        </Col>
    );
}

export default SocialButton;