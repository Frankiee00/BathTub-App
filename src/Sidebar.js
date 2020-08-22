import React from "react"
import BathtubIcon from '@material-ui/icons/Bathtub';
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SidebarOption from "./SidebarOption";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";
import firebase from "firebase";

function Sidebar(){
    return (
        <div className="Sidebar">
        <BathtubIcon className="bathtubIcon" />

        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />

        {/* SidebarOption*/}
        {/* SidebarOption*/}
        {/* SidebarOption*/}
        {/* SidebarOption*/}

        {/* Tweet */}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
            TubThought
            </Button>
        

        <Button onClick={()=>firebase.auth().signOut()} type="submit" className="signout__Button" fullWidth>
            Sign Out!
            </Button>

        </div>
    );
}

export default Sidebar;