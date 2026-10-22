import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./Layout.css"; 


const Layout = () => {
    return (
        <div id="content">
            <Header /> 
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;