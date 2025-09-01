import './index.scss'
import {CgMoreAlt} from "react-icons/cg";
import profileImage from "/src/assets/profileImage.png"

function TagsAndHowToFollow() {
    return (
        <section id={"tagsAndHowToFollow"}>
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

            <div className={"title"}>Who to follow</div>
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
                <button className={"followButton"}>Follow</button>
            </div>
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
                <button className={"followButton"}>Follow</button>
            </div>
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
                <button className={"followButton"}>Follow</button>
            </div>
        </section>
    );
}

export default TagsAndHowToFollow;