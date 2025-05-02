import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* renders child routes */}
      </main>
    </>
  );
};

export default RootLayout;
