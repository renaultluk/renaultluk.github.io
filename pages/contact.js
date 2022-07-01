import Head from 'next/head'
import { Container, Row } from 'react-bootstrap';
import SocialButton from '../components/SocialButton';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Me | Renault Luk</title>
            </Head>

            <Container>
                <h1>Contact Me</h1>
                <h4>Work</h4>
                    <Row>
                        <SocialButton title="Github" info="https://github.com/renaultluk/" url="https://github.com/renaultluk/" />
                        <SocialButton title="LinkedIn" info="https://www.linkedin.com/in/renault-luk-54a9451bb/" url="https://www.linkedin.com/in/renault-luk-54a9451bb/" />
                        <SocialButton title="Fiverr" info="https://www.fiverr.com/renaultluk" url="https://www.fiverr.com/renaultluk" />
                    </Row>
                <h4>Socials</h4>
                    <Row>
                        <SocialButton title="Instagram" info="renaultluk" url="https://www.instagram.com/renaultluk/" />
                        <SocialButton title="Whatsapp" info="+852 5116 4998" url="https://wa.me/85251164998" />
                        <SocialButton title="Signal" info="+852 5116 4998" url="https://signal.me/#p/+85251164998" />
                    </Row>
            </Container>
        </>
    );
}

export default Contact;