import './index.scss'
import {FiSearch} from "react-icons/fi";
import {AiOutlineSetting} from "react-icons/ai";

function ExploreTabs() {
    return (
        <section id={"exploreTabs"}>
           <div className={"inputWrapperWrapper"}>
               <div className={"inputWrapper"}>
                   <FiSearch className={"iconSearch"}/>
                   <input placeholder={"Search"}/>
               </div>
               <AiOutlineSetting className={"settingIcon"}/>
           </div>
            <div className={"exploreTabsWrapper"}>
                <div className={"tab"}>
                    <span>For You</span>
                </div>
                <div className={"tab"}>
                    Trending
                </div>
                <div className={"tab"}>
                    News
                </div>
                <div className={"tab"}>
                    Sports
                </div>
                <div className={"tab"}>
                    Entertainment
                </div>
            </div>
        </section>
    );
}

export default ExploreTabs;