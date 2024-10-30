import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const { id, title, body} = post;
    return (
        <div>
            <h3>Post detsils.....</h3>
            <p>Post ID: {id}</p>
            <h2>Post title: {title}</h2>
            <h4>{body}</h4>
        </div>
    );
};

export default PostDetails;