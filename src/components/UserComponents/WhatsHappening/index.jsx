import './index.scss'
import { useRef } from "react";
import {TbPhoto} from "react-icons/tb";
import {HiMiniListBullet, HiOutlineCalendarDays, HiOutlineFaceSmile, HiOutlineGif} from "react-icons/hi2";
import {HiOutlineCamera, HiOutlineLocationMarker} from "react-icons/hi";

function WhatsHappening() {
    const textareaRef = useRef(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    };

    return (
        <section id="whatsHappening">
            <div className="profileImageWrapper">
                <img
                    src="https://pbs.twimg.com/profile_images/1960786225423659008/GhLekHuP_400x400.jpg"
                    alt="Image"
                    className="profileImage"
                />
            </div>
            <div className="contentWrapper">
                <div className="textareaWrapper">
                    <textarea
                        ref={textareaRef}
                        placeholder="What's happening?"
                        onInput={handleInput}
                        rows={1}
                    />
                    <div className={"postButtonWrapper"}>
                        <div className={"icons"}>
                            <TbPhoto className={"icon"}/>
                            <HiOutlineGif className={"icon"}/>
                            <HiOutlineFaceSmile className={"icon"}/>
                            <HiOutlineCalendarDays className={"icon"}/>
                            <HiOutlineLocationMarker className={"icon"}/>
                            <HiMiniListBullet className={"icon"}/>
                            <HiOutlineCamera className={"icon"}/>
                        </div>
                        <button className={"subscribeButton"}>Post</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatsHappening;
