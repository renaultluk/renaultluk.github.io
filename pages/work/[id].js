import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPostsPath, getPostData } from '../../utils/getPostsData.js';

import { Container } from 'react-bootstrap';

const ProjectDetails = ({ postMetadata, postContent }) => {
    return (
        <Container>
            <h1>{postMetadata.title}</h1>
            <MDXRemote components={postMetadata.components} />
        </Container>
    )
}

export const getStaticPaths = async () => {
    const postData = await getPostData(params.id);
    const mdxSource = await serialize(postData.content);
    return {
        props: {
            postMetadata: postData.metadata,
            postContent: mdxSource,
            id: params.id,
        }
    }
}

export default ProjectDetails;