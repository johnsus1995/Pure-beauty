import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "src/components/footer/Footer";
import { Navbar } from "src/components/navbar/Navbar";

export const MainLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};
