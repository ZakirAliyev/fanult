import './index.scss'
import Discover from "../../../components/UserComponents/Discover/index.jsx";
import LeftSideBar from "../../../components/UserComponents/LeftSideBar/index.jsx";
import RightSideBar from "../../../components/UserComponents/RightSideBar/index.jsx";
import ExploreTabs from "../../../components/UserComponents/ExploreTabs/index.jsx";
import TagsAndHowToFollow from "../../../components/UserComponents/TagsAndHowToFollow/index.jsx";

function ExplorePage() {
    return (
        <section id={"explorePage"}>
            <LeftSideBar/>
            <div className={"middlePart"}>
                <ExploreTabs/>
                <TagsAndHowToFollow/>
                <Discover/>
            </div>
            <RightSideBar/>
        </section>
    );
}

export default ExplorePage;