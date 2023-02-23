import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
