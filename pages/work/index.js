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
                        style={{ width: '18rem', margin: '10px' }}
                        onClick={() => router.push(`/work/${post.data.slug}`)}
                    >
                        <Card.Img style={{ height: '10rem', objectFit: 'cover' }} variant="top" src={`projects/${post.data.slug}/${post.data.thumbnail}`} />
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