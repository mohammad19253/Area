import React , { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import Link from "next/link";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SubMenu,
  } from "react-pro-sidebar";

//icons
import { HiDotsVertical } from "react-icons/hi";
import { FaList, FaRegHeart, FaUserFriends ,FaRegComment} from "react-icons/fa";
import { FiLogOut, FiArrowLeftCircle, FiMapPin, } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

const SideBar = () =>{
    
    const userStatus = useSelector(state=>state.authorization.status)
    const [menuCollapse, setMenuCollapse] = useState(false)
    const [settingIcon,setSettingIcon]=useState(false)

    useEffect (()=>{ if( window.matchMedia('(max-width:1000px)').matches) setMenuCollapse(true)} ,[])
    if (userStatus === 'sign-in'){
        return (
            <div className="custome-sidebar-container">  
            <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                    <div className="logotext m-4 mb-1">
                    {/* small and big change using menucollapse state */}
                    <p>Logo</p>
                    </div>
                    <div className="closemenu m-4 mb-2 mt-1" onClick={() => {menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);}}>
                        {menuCollapse ? (<HiDotsVertical/>):(<FiArrowLeftCircle/>)}
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                    <MenuItem active={true} icon={<CgProfile />}>
                    <Link href={'/profile'}>Profile</Link>
                    </MenuItem>
                    <MenuItem active={true} icon={<MdDashboard />}>
                        <Link href={'/dashboard'}>Dashboard</Link>
                    </MenuItem>
                    <MenuItem icon={<FaList />}>Category</MenuItem>
                    <MenuItem icon={<FaUserFriends/>}>Friends</MenuItem>
                    <MenuItem icon={<FiMapPin/>}>   <Link href={'/map'}>Map</Link></MenuItem>
                    <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
                    <MenuItem icon={<FaRegComment />}>Chat</MenuItem>
                    <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
                    <SubMenu
                         title='Settings'
                         icon={<BiCog/>} 
                         open={settingIcon}
                         onClick={()=>{ setSettingIcon(!settingIcon) }}
                       >
                      <MenuItem  active={true}>
                         <Link href={'/security'}>security</Link>
                      </MenuItem>
                  </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="square">
                    <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
            </div>
        )
    }else{
        return ''
    }
  
}

export default SideBar