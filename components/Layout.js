import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="layout__content">{children}</div>
        </div>
    );
}

export default Layout;