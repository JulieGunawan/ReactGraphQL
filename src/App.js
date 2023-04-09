import './App.css';
import { Link, Outlet } from 'react-router-dom';

/*
This is a React functional component named "Home". 
The component returns JSX, which is a syntax extension to JavaScript used to describe the UI. 
The JSX code consists of a div element that contains a navigation bar with three Link elements, 
which represent links to the Home, About Us, and Contact Us pages. 
Additionally, there are an h1 element that displays the text "My Wonderful Kitchen" and a p element that contains a Lorem ipsum text.

This code is likely a part of a larger React application that renders different components based on the user's navigation. 
The Home component seems to be the landing page for the application, which displays information about "My Wonderful Kitchen".
*/
function Home() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
           <h1>My Wonderful Kitchen</h1> 
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

/*
This is a function component named "About" .
The most interesting part of this component is the presence of an Outlet component that allows nested routing. 
It means that this component can render child components based on the current URL path, 
which makes it possible to create a multi-page application with a single page application architecture.
*/
export function About(){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Outlet />
        </div>
    )
}

export function Contact(){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
            <h1>Contact Us</h1>
            <p>Lorem Ipsum: dolor sit amet</p>
            <p>consectetur: adipiscing eli </p>
        </div>
    )
}

export function History(){
    return(
        <div>
            <h1>History</h1>
            <p>Tellus cras adipiscing enim eu turpis egestas. Consequat ac felis donec et odio pellentesque diam. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam</p>
        </div>
    )
}

export function App(){
    return(
        <Home />
    );
}

//export default App;