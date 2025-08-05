import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; // We'll create this next
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet /> {/* This is where child routes will render */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;