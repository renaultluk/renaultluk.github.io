import { Container, Card } from "react-bootstrap";
import { getPostsMetaData } from "../../utils/getPostsData";

import { useRouter } from "next/router";

const WorkHome = ({ postsData }) => {
    const router = useRouter();
    
    return (
        <Container>
            <h1>My Projects</h1>
            {postsData.map((metadata) => {
            return (
            <Card
                key = {metadata.id}
                onClick={() => router.push(`/work/${metadata.id}`)}
            >
                <Card.Body>
                    <Card.Title>{metadata.title}</Card.Title>
                    <Card.Text>{metadata.description}</Card.Text>
                </Card.Body>
            </Card>
            )
            })}
        </Container>
    )
}

export default WorkHome;

export const getStaticProps = async () => {
    const postsData = getPostsMetaData();
    return {
      props: {
        postsData: postsData,
      }
    }
}