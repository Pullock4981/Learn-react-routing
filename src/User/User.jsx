import './User.css'

const User = ({user}) => {
    const {id, name, email} = user
    return (
        <div className="user-style">
            <p>Id: {id}</p>
            <h2>Name:{name}</h2>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;