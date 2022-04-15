import { Container, Card } from "react-bootstrap";
// import { getPostsMetaData } from "../../utils/getPostsData";
import getPosts from "../../scripts/fileSystem";

import { useRouter } from "next/router";

const WorkHome = ({ posts }) => {
    const router = useRouter();
    
    return (
        <Container>
            <h1>My Projects</h1>
            {posts.map((post, index) => {
            return (
            <Card
                key = {index}
                onClick={() => router.push(`/work/${post.data.slug}`)}
            >
                <Card.Body>
                    <Card.Title>{post.data.title}</Card.Title>
                    <Card.Text>{post.data.description}</Card.Text>
                </Card.Body>
            </Card>
            )
            })}
        </Container>
    )
}

export default WorkHome;

export const getStaticProps = () => {
    const posts = getPosts(10);
  
    return {
      props: {
        posts,
      },
    };
  };