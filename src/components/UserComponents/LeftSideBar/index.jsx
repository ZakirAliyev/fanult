import './index.scss'
import {GoHome} from "react-icons/go";
import {IoNotificationsOutline, IoPeopleOutline, IoSearchOutline} from "react-icons/io5";
import {AiOutlineMessage} from "react-icons/ai";
import {TbPremiumRights} from "react-icons/tb";
import {HiOutlineUserCircle} from "react-icons/hi";
import {CgMoreAlt, CgMoreO} from "react-icons/cg";
import logo from "/src/assets/logo.png"
import {useNavigate} from "react-router";
import profileImage from "/src/assets/profileImage.png"

function LeftSideBar() {

    const navigate = useNavigate();

    const arr = [
        {id: 0, name: "Logo", type: "logo", path: ''},
        {id: 1, name: "Home", icon: <GoHome className={"icon"}/>, path: 'home'},
        {id: 2, name: "Explore ", icon: <IoSearchOutline className={"icon"}/>, path: 'explore'},
        {id: 3, name: "Notifications", icon: <IoNotificationsOutline className={"icon"}/>, path: ''},
        {id: 4, name: "Messages", icon: <AiOutlineMessage className={"icon"}/>, path: ''},
        {id: 5, name: "Communities", icon: <IoPeopleOutline className={"icon"}/>, path: ''},
        {id: 6, name: "Premium", icon: <TbPremiumRights className={"icon"}/>, path: ''},
        {id: 7, name: "Profile", icon: <HiOutlineUserCircle className={"icon"}/>, path: 'profile'},
        {id: 8, name: "More", icon: <CgMoreO className={"icon"}/>, path: ''},
        {id: 9, name: "Post", type: "button"},
    ]

    return (
        <section id={"leftSideBar"}>
            {arr && arr.map((item) => (
                <div key={item.id}>
                    {item?.type === "logo" && (
                        <img src={logo} alt={"Logo"} className={"logo"}/>
                    )}

                    {item?.type !== "logo" && item?.type !== "button" && (
                        <div className={"box"} onClick={()=> {
                            navigate(`/${item?.path}`)
                        }}>
                            {item?.icon}
                            <span>{item?.name}</span>
                        </div>
                    )}

                    {item?.type === "button" && (
                        <button className={"leftSideBarButton"}>{item?.name}</button>
                    )}
                </div>
            ))}

            <div className={"fixedBottom"}>
                <div className={"firstWrapper"}>
                    <div className={"profileImageWrapper"}>
                        <img
                            src={profileImage}
                            alt={"Image"}
                            className={"profileImage"}
                        />
                    </div>
                    <div className={"textWrapper"}>
                        <div className={"name"}>Rihanna</div>
                        <div className={"username"}>@rihanna</div>
                    </div>
                </div>
                <CgMoreAlt className={"icon"}/>
            </div>
        </section>
    );
}

export default LeftSideBar;
