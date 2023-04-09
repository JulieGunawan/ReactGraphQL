import './App.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
           <h1>My Wonderful Kitchen</h1> 
        </div>
    );
}

export function About(){
    return(
        <div>
            <h1>About Us</h1>
        </div>
    )
}

export function Contact(){
    return(
        <div>
            <h1>Contact Us</h1>
        </div>
    )
}

export function App(){
    return(
        <Home />
    );
}

//export default App;