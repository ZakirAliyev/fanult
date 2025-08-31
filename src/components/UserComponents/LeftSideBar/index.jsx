import './index.scss'
import {GoHome} from "react-icons/go";
import {IoNotificationsOutline, IoPeopleOutline, IoSearchOutline} from "react-icons/io5";
import {AiOutlineMessage} from "react-icons/ai";
import {TbPremiumRights} from "react-icons/tb";
import {HiOutlineUserCircle} from "react-icons/hi";
import {CgMoreAlt, CgMoreO} from "react-icons/cg";
import logo from "/src/assets/logo.png"

function LeftSideBar() {

    const arr = [
        {id: 0, name: "Logo", type: "logo"},
        {id: 1, name: "Home", icon: <GoHome className={"icon"}/>},
        {id: 2, name: "Explore ", icon: <IoSearchOutline className={"icon"}/>},
        {id: 3, name: "Notifications", icon: <IoNotificationsOutline className={"icon"}/>},
        {id: 4, name: "Messages", icon: <AiOutlineMessage className={"icon"}/>},
        {id: 5, name: "Communities", icon: <IoPeopleOutline className={"icon"}/>},
        {id: 6, name: "Premium", icon: <TbPremiumRights className={"icon"}/>},
        {id: 7, name: "Profile", icon: <HiOutlineUserCircle className={"icon"}/>},
        {id: 8, name: "More", icon: <CgMoreO className={"icon"}/>},
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
                        <div className={"box"}>
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
                            src={"https://avatars.githubusercontent.com/u/106933941"}
                            alt={"Image"}
                            className={"profileImage"}
                        />
                    </div>
                    <div className={"textWrapper"}>
                        <div className={"name"}>Zakir Aliyev</div>
                        <div className={"username"}>@FraserBogs</div>
                    </div>
                </div>
                <CgMoreAlt className={"icon"}/>
            </div>
        </section>
    );
}

export default LeftSideBar;
