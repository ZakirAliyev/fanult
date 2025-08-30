import './index.scss'
import Discover from "../../../components/UserComponents/Discover/index.jsx";
import LeftSideBar from "../../../components/UserComponents/LeftSideBar/index.jsx";
import RightSideBar from "../../../components/UserComponents/RightSideBar/index.jsx";
import Tabs from "../../../components/UserComponents/Tabs/index.jsx";

function HomePage() {
    return (
        <section id={"homePage"}>
            <LeftSideBar/>
            <div className={"middlePart"}>
                <Tabs/>
                <Discover/>
            </div>
            <RightSideBar/>
        </section>
    );
}

export default HomePage;