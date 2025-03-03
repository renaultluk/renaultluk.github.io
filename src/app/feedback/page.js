// import { send } from "emailjs-com";
import emailjs from "@emailjs/browser"
import { useState } from "react";
import { Button, Form, Container, Row, Alert } from "react-bootstrap";
import Head from "next/head";
import Header from "../../components/Header";

const Feedback = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [failed, setFailed] = useState(false);
    
    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
        'service_abbrlwq',
        'template_unk40is',
        {
            email: email,
            name: name,
            content: content,
        },
        'h8f9f-FVegHKBWSX-'
        )
        .then((response) => {
            // console.log('SUCCESS!', response.status, response.text);
            setSuccessful(true)
            setFailed(false)
        })
        .catch((err) => {
            // console.log('FAILED...', err);
            setSuccessful(false)
            setFailed(true)
        });
    }
    
    // console.log(email, name, content)
    console.log("successful:", successful, "failed: ", failed)

    return (
        <>
            <Head>
                <title>Feedback | Renault Luk</title>
            </Head>

            <Header />
            <Container>
                <h1>Feedback Form</h1>

                {/* <form onSubmit={onSubmit}>
                    <label>Email</label>
                    <input 
                        type="text"
                        placeholder="Enter your email"
                        value={toSend.email}
                        onChange={onChange}
                    />

                    <label>Name</label>
                    <input 
                        type="text"
                        placeholder="Enter your name"
                        value={toSend.name}
                        onChange={onChange}
                    />

                    <label>Feedback</label>
                    <input 
                        type="text"
                        placeholder="What do you think about the website?"
                        value={toSend.email}
                        onChange={onChange}
                    />

                    <Button type="submit"></Button>
                </form> */}

                {successful && (
                    <Alert variant="success">
                        Feedback successfully sent!
                    </Alert>
                )}

                {failed && (
                    <Alert variant="danger">
                        Feedback was not sent. Try again!
                    </Alert>
                )}
                
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group controlId="name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group controlId="feedback">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={5}
                            placeholder="What do you think about the website?" 
                            value={content}
                            onChange={(e) => setContent(e.target.value)} 
                        />
                    </Form.Group>

                    <Button type="submit" onSubmit={onSubmit}>Submit</Button>
                </Form>
            </Container>
        </>
    )
} 

export default Feedback;