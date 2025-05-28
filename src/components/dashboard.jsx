import { Outlet } from "react-router-dom";
import Sidebar from "./sideBar";
import Header from "./header";

const DashboardLayout = () => {
  return (
    <div className="flex font-mont h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <Outlet /> {/* <-- renders matched child route */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
