import './index.scss'
import {CgMoreAlt} from "react-icons/cg";

function RightSideBar() {

    return (
        <section id={"rightSideBar"}>
            <div className={"box"}>
                <div className={"title"}>Subscribe to Premium</div>
                <div className={"content"}>
                    Subscribe to unlock new features and if eligible, receive a share of revenue.
                </div>
                <button className={"subscribeButton"}>Subscribe</button>
            </div>
            <div className={"box"}>
                <div className={"title"}>What’s happening</div>
                <div className={"postWrapper"}>
                    <div>
                        <div className={"contentDescription"}>Trending in Azerbaijan</div>
                        <div className={"content"}>#reportaz</div>
                    </div>
                    <CgMoreAlt className={"icon"}/>
                </div>
                <div className={"postWrapper"}>
                    <div>
                        <div className={"contentDescription"}>Trending in Azerbaijan</div>
                        <div className={"content"}>Amin</div>
                        <div className={"contentPostsCount"}>43.9K Posts</div>
                    </div>
                    <CgMoreAlt className={"icon"}/>
                </div>
                <div className={"postWrapper"}>
                    <div>
                        <div className={"contentDescription"}>Trending in Azerbaijan</div>
                        <div className={"content"}>#reportnewsaz</div>
                    </div>
                    <CgMoreAlt className={"icon"}/>
                </div>
                <div className={"postWrapper"}>
                        <div className={"showMore"}>Show more</div>
                </div>
            </div>
            <div className={"box"}>
                <div className={"title"}>Who to follow</div>
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
                    <button className={"followButton"}>Follow</button>
                </div>
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
                    <button className={"followButton"}>Follow</button>
                </div>
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
                    <button className={"followButton"}>Follow</button>
                </div>
            </div>
        </section>
    );
}

export default RightSideBar;