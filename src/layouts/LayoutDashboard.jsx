import Navbar from '../components/layouts/layouts-dashboard/Navbar';
import Sidebar from '../components/layouts/layouts-dashboard/Sidebar';

export default function LayoutDashboard({children}) {
    return (
        <>
            <Navbar />
            <main className='container-fluid'>
                <div className='row'>
                    <aside className='col-sm-12 col-md-3 d-none d-md-block sidebar_container ps-0'>
                        <Sidebar />
                    </aside>
                    <div className='col-sm-12 col-md-9 pt-3'>
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}