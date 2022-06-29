import { Container } from "react-bootstrap"

const Footer = () => {
    return (
        <Container style={{ textAlign: "center", backgroundColor: "#012A36", width: "100%" }}>
            <p>Made with Next.js, MDX, React Bootstrap, and love &#60;3</p>
            <a
                href="https://github.com/renaultluk/renaultluk.github.io"
                style={{
                    color: "#D295BF",
                }}
            >Check out the codebase</a>
        </Container>
    );
}

export default Footer;