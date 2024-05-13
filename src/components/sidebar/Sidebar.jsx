
import { useStateContext } from "../../context/ContextProvider";
import { menus } from "./components/menu";
import NavLinkItem from "./components/NavLinkItem";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


const Sidebar = () => {
    const {activeMenu, setActiveMenu } = useStateContext()
    const [active,setActive] =useState('/deposit')

    //set active based on pathname here using useEffect will work once we setup react router dom.

    return (
        <div className={`bg-white text-black min-h-screen h-full w-48 px-4 relative`}>
           {activeMenu && <IoClose onClick={()=>setActiveMenu(false)} className="absolute right-3 top-3 w-5 h-5 cursor-pointer" />}
            <div className={`flex flex-wrap items-center gap-1 justify-between py-3`}>
                {/* <p className={`font-semibold `}>
                    Available Credits:
                </p>
                <p className={`font-semibold`}>
                    09999
                </p> */}
            </div>
            <div className="relative flex flex-col items-center gap-2">
                {menus?.map((menu, i) => {
                    return <NavLinkItem menu={menu} index={i} active={active} key={i} />;
                })}
            </div>
        </div>
    );
}

export default Sidebar