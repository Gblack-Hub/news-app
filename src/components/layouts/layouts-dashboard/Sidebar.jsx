import { Link, useLocation, useNavigate } from 'react-router-dom';
import { sidebarItems } from '../../../utils/index';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    function handleLogout(){
        window.localStorage.removeItem("loggedIn");
        window.localStorage.removeItem("loggedInUser");
        navigate("/auth/login");
    }

    return (
        <div className="sidebar">
            <div>
            {
                sidebarItems.map((item, index) => (
                    <Link to={item.route} key={index} className={`sidebar__item ${location.pathname === item.route ? 'sidebar__item-active' :'text-dark'}`}>
                        <item.icon />
                        <div className='sidebar__text ps-2'>{item.title}</div>
                    </Link>
                ))
            }
            </div>

            <div className='text-center d-grid'>
                <hr />
                <button className='btn sidebar__item d-flex align-items-center' onClick={handleLogout}>
                    <LogoutOutlinedIcon />
                    <div className='sidebar__text ps-2'>Logout</div>
                </button>
            </div>
        </div>
    )
}