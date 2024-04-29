import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

const MainLayout = () => {
    
    return (
        <div className="relative">
            <div className="fixed w-full z-20">
                <NavBar />
            </div>
            <div className=" z-10">
                <Outlet  />
            </div>
        </div>
    );
};

export default MainLayout;