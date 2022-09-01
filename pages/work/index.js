import Head from 'next/head';
import { Container, Card, Row, Col } from "react-bootstrap";
// import { getPostsMetaData } from "../../utils/getPostsData";
import getPosts from "../../scripts/fileSystem";
import styles from '../../styles/WorkIndex.module.css'
import PostTag from '../../components/PostTag';
import Header from "../../components/Header"

import { useRouter } from "next/router";

const WorkHome = ({ posts }) => {
    const router = useRouter();
    
    return (
        <>
            <Head>
                <title>My Work | Renault Luk</title>
            </Head>

            <Header />
            <Container>
                <h1>My Work</h1>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        {posts.map((post, index) => {
                            return (
                                <Col xs={12} md={6} lg={3}>
                                    <Card
                                        className={styles.customCard}
                                        bg="secondary"
                                        key = {index}
                                        style={{ maxWidth: '18rem', margin: '10px' }}
                                        onClick={() => router.push(`/work/${post.data.slug}`)}
                                    >
                                        <Card.Img style={{ height: '10rem', objectFit: 'cover' }} variant="top" src={`projects/${post.data.slug}/${post.data.thumbnail}`} />
                                        <Card.Body>
                                            <Card.Title>{post.data.title}</Card.Title>
                                            <Card.Text>{post.data.description}</Card.Text>
                                            {
                                                post.data.tags && (
                                                    post.data.tags.split(',').map((value, index) => {
                                                        return (
                                                            <PostTag tag={value} />
                                                        );
                                                    })
                                                )
                                            }
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default WorkHome;

export const getStaticProps = () => {
    const posts = getPosts(15);
  
    return {
      props: {
        posts,
      },
    };
  };