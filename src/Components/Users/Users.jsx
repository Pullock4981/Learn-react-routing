import { useLoaderData } from "react-router-dom";
import User from "../../User/User";
import './users.css'

const Users = () => {
    // call tyhe data from loader
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h2>This is user page.....</h2>
            <h1>Users: {users.length}</h1>
            <div className="users">
            {
                users.map(user => <User user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;