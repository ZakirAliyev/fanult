import './index.scss'
import bannerImage from "/src/assets/pink.png"
import {HiArrowLeft, HiOutlineCalendar} from "react-icons/hi";
import {FiSearch} from "react-icons/fi";
import {MdOutlineVerified} from "react-icons/md";
import profileImage from "/src/assets/profileImage.png"

function ProfileTabs() {
    return (
        <section id={"profileTabs"}>
            <div className={"mainWrapperWrapper"}>
                <div className={"mainWrapper"}>
                    <HiArrowLeft className={"icon"}/>
                    <div className={"titleWrapper"}>
                        <div className={"name"}>
                            Rihanna
                            <MdOutlineVerified className={"verifiedIcon"}/>
                        </div>
                        <div className={"postCount"}>1 post</div>
                    </div>
                </div>
                <FiSearch className={"icon"}/>
            </div>
            <img src={"https://pbs.twimg.com/profile_banners/79293791/1756322851/600x200"} alt={"Banner image"}
                 className={"bannerImage"}/>
            <div className={"buttonWrapper"}>
                <img src={profileImage} alt={"Banner image"}
                     className={"profileImageBig"}/>
                <button className={"editButton"}>Edit Profile</button>
            </div>
            <div className={"titleWrapper1"}>
                <div className={"name"}>
                    Rihanna
                    <MdOutlineVerified className={"verifiedIcon"}/>
                </div>
                <div className={"postCount"}>@rihanna</div>
                <div className={"date"}>
                    <HiOutlineCalendar className={"icon"}/>
                    Joined April 2022
                </div>
                <div className={"followingAndFollowers"}>
                    <span><span className={"count"}>1</span> Following</span>
                    <span><span className={"count"}>0</span> Followers</span>
                </div>
            </div>

            <div className={"exploreTabsWrapper"}>
                <div className={"tab"}>
                    <span>Posts</span>
                </div>
                <div className={"tab"}>
                    Replies
                </div>
                <div className={"tab"}>
                    Highlights
                </div>
                <div className={"tab"}>
                    Articles
                </div>
                <div className={"tab"}>
                    Media
                </div>
            </div>
        </section>
    );
}

export default ProfileTabs;