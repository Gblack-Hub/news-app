import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { loggedInUser } from '../../../service/authentication/useAuth';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Sidebar from './Sidebar';

function Navbar() {
    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawerState(prev => !prev);
    };

    return (
        <>
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container-fluid">
                <div className="d-flex flex-fill">
                    <div className='d-block d-md-none'>
                        <IconButton onClick={toggleDrawer}>
                            <MenuOutlinedIcon />
                        </IconButton>
                    </div>
                    <Link to="/" className="navbar-brand">
                        News
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex me-auto py-md-0 py-2">
                        <div className="input-group search_box">
                            <input type="search" className="form-control form-control-sm border-0 custom_light_grey_bg_color btn_text" placeholder="Search news" aria-label="Search news" aria-describedby="search" />
                            <span className="input-group-text border-0 bg-light" id="basic-addon1">
                                <SearchIcon className="text-secondary" />
                            </span>
                        </div>
                    </form>
                    <div className='d-flex align-items-center'>
                        <Avatar
                            alt={loggedInUser().username}
                        />
                        <span className='ms-2 text-capitalize'>{loggedInUser().username}</span>
                    </div>
                </div>
            </div>
        </nav>
        <div className='d-md-none'>
            <Drawer
                anchor="left"
                open={drawerState}
                onClose={toggleDrawer}
                >
                <Sidebar />
            </Drawer>
        </div>
        </>
    )
}

export default Navbar;