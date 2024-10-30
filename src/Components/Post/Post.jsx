import { Link } from 'react-router-dom';
import './post.css'

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className="post">
            <h4>Post id: {id}</h4>
            <p>{title}</p>
            <Link to= {`/post/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;