import './index.scss'
import Discover from "../../../components/UserComponents/Discover/index.jsx";
import LeftSideBar from "../../../components/UserComponents/LeftSideBar/index.jsx";
import RightSideBar from "../../../components/UserComponents/RightSideBar/index.jsx";
import ProfileTabs from "../../../components/UserComponents/ProfileTabs/index.jsx";

function ProfilePage() {
    return (
        <section id={"profilePage"}>
            <LeftSideBar/>
            <div className={"middlePart"}>
                <ProfileTabs/>
                <Discover/>
            </div>
            <RightSideBar/>
        </section>
    );
}

export default ProfilePage;