'use client'

import Head from 'next/head'
import { Container, Row } from 'react-bootstrap';
import Header from '../../components/Header';
import SocialButton from '../../components/SocialButton';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Me | Renault Luk</title>
            </Head>

            <Header />
            <Container>
                <h1>Contact Me</h1>
                <h4>Work</h4>
                    <Row style={{ paddingBottom: 10 }}>
                        <SocialButton title="Github" info="https://github.com/renaultluk/" url="https://github.com/renaultluk/" image="/Github.png" />
                        <SocialButton title="LinkedIn" info="https://www.linkedin.com/in/renault-luk-54a9451bb/" url="https://www.linkedin.com/in/renault-luk-54a9451bb/" image="/LinkedIn.svg" />
                        <SocialButton title="Fiverr" info="https://www.fiverr.com/renaultluk" url="https://www.fiverr.com/renaultluk" image="/Fiverr.png" />
                    </Row>
                <h4>Socials</h4>
                    <Row style={{ paddingBottom: 10 }}>
                        <SocialButton title="Instagram" info="renaultluk" url="https://www.instagram.com/renaultluk/" image="/Instagram.svg" />
                        <SocialButton title="Whatsapp" info="+852 5116 4998" url="https://wa.me/85251164998" image="/WhatsApp.svg" />
                        <SocialButton title="Signal" info="+852 5116 4998" url="https://signal.me/#p/+85251164998" image="/Signal.svg" />
                    </Row>
            </Container>
        </>
    );
}

export default Contact;