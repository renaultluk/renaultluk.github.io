import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="layout__content">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;