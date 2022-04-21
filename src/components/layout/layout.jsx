import Footer from '../footer/footer';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
