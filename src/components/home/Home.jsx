import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../../App.css'

const Home = (props) => {

    const history = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/login');
    };
    return (
        <div className='App'>
            <div className="welcome-message">Hello and welcome to our You Tube website</div>
            {props.user ? <button onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>}
        </div>
    )
}
export default Home;