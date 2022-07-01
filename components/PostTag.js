import { Button } from 'react-bootstrap';
import styles from '../styles/PostTag.module.css'

const PostTag = (props) => {
    return (
        <>
           <style type="text/css">
                {`
                    .btn-tag {
                        border: 2.5px solid #E6BCCD;
                        // background-color: #E6BCCD;
                        color: #E6BCCD;
                        border-radius: 2rem;
                        margin: 0.25rem;
                        margin-left: 0;
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