import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const navigate = useNavigate();
    const post = useLoaderData();
    const { id, title, body} = post;
    const handleNavigate = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h3>Post detsils.....</h3>
            <p>Post ID: {id}</p>
            <h2>Post title: {title}</h2>
            <h4>{body}</h4>
            <button onClick={handleNavigate}>Go back</button>
        </div>
    );
};

export default PostDetails;