import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div>
            <h1>There isn't any information here. Click the button below to return back to onboarding page.</h1>
            <Link to='/'><button>Click me!</button></Link>
        </div>
     );
}
 
export default NotFound;