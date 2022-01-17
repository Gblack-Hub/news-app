import { Link, useLocation } from 'react-router-dom';
import { sidebarItems } from '../../../utils/index';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export default function Sidebar() {
    const location = useLocation();

    return (
        <div className="sidebar h-100 p-1 pt-3 small d-flex flex-column justify-content-between pb-5">
            <div>
            {
                sidebarItems.map((item, index) => (
                    <Link to={item.route} key={index} className={`text-center d-flex ${location.pathname === item.route ? 'primary_bg_color' :'text-dark'} text-decoration-none mb-3`}>
                        <item.icon />
                        <div className='sidebar__text ps-2'>{item.title}</div>
                    </Link>
                ))
            }
            </div>

            <div className='text-center'>
                <hr />
                <section className='mb-3'>
                    <NotificationsNoneOutlinedIcon />
                    <div className='sidebar__text'>FAQ</div>
                </section>
                <section>
                    <ChatBubbleOutlineOutlinedIcon />
                    <div className='sidebar__text'>Tutorials</div>
                </section>
            </div>
        </div>
    )
}