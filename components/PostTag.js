import { Button } from 'react-bootstrap';
import styles from '../styles/PostTag.module.css'

const PostTag = (props) => {
    return (
        <>
           <style type="text/css">
                {`
                    .btn-tag {
                        background-color: #E6BCCD;
                        color: #7E52A0;
                        border-radius: 2rem;
                        margin: 0.25rem;
                        font-size: 0.8em;
                    }
                `}
            </style> 
            <Button
                className="product-tag"
                variant="tag"
                // onClick={searchTag}
            >
            {props.tag}
            </Button>
        </>
    );
}

export default PostTag;