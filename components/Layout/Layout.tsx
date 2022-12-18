import Header from "../Header/Header";
import Navbar from "../Header/Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
