import './index.scss'
import {AiOutlineSetting} from "react-icons/ai";
import {TbMessage2Plus} from "react-icons/tb";
import {FiSearch} from "react-icons/fi";
import profileImage from "/src/assets/profileImage.png"
import {MdOutlineVerified} from "react-icons/md";
import {GoDotFill} from "react-icons/go";

function Direct() {

    const arr = [
        {id: 1, selected: true},
        {id: 2, selected: false},
        {id: 3, selected: false},
    ]

    return (
        <section id={"direct"}>
            <div className={"mainWrapper"}>
                <div className={"firstWrapper"}>
                    <div className={"name"}>Messages</div>
                </div>
                <div className={"iconWrapper"}>
                    <AiOutlineSetting className={"icon"}/>
                    <TbMessage2Plus className={"icon"}/>
                </div>
            </div>

            <div className={"inputWrapper"}>
                <FiSearch className={"iconSearch"}/>
                <input placeholder={"Search Direct Messages"}/>
            </div>

            {arr && arr.map((item, index) => (
                <div
                    className={`box ${item?.selected ? "selectedBox" : ""}`}
                    key={index}
                >
                    <img src={profileImage} alt="Image" className="profileImage"/>
                    <div className="textWrapperWrapper">
                        <div className="textWrapper">
                            <div className="username">Rihanna</div>
                            <MdOutlineVerified className="verifiedIcon"/>
                            <div className="username1">@rihanna</div>
                            <GoDotFill className="dotIcon"/>
                            <div className="username1">Aug 24</div>
                        </div>
                        <div className="textWrapper">
                            <div className="username1">Hello, world!</div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Direct;