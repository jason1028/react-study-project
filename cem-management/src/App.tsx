import { useRoutes, Link } from 'react-router-dom';
import routes from './router';

function App() {

    const Outlet = useRoutes(routes);
    return (
        <div className="App">
            {/* <Link to="/home">Home</Link> | 
            <Link to="/about">About</Link> |
            <Link to="/user">User</Link> | */}
            {/* <Outlet></Outlet>  旧版本写法 */}
            { Outlet }
        </div>
    )
}

export default App;