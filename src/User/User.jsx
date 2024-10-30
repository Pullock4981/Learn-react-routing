import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const {id, name, email} = user
    return (
        <div className="user-style">
            <p>Id: {id}</p>
            <h2>Name:{name}</h2>
            <p>Email: {email}</p>
            <Link to = {`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;