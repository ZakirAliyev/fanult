import './index.scss'
import {AiOutlineMessage} from "react-icons/ai";
import {FaDotCircle, FaRegComment} from "react-icons/fa";
import {FaRegBookmark, FaRegHeart, FaRegShareFromSquare, FaRetweet} from "react-icons/fa6";
import {IoAnalytics} from "react-icons/io5";
import {MdOutlineVerified} from "react-icons/md";
import {GoDotFill} from "react-icons/go";
import {CgMoreAlt} from "react-icons/cg";

function Card({images}) {
    return (
        <section id={"card"}>
            <div className={"profileImageWrapper"}>
                <img
                    src={"https://pbs.twimg.com/profile_images/1960786225423659008/GhLekHuP_400x400.jpg"}
                    alt={"Image"}
                    className={"profileImage"}
                />
            </div>
            <div className="contentWrapper">
                <div className={"titleWrapper"}>
                    <div className={"moreAlt"}>
                        <div className={"name"}>Rihanna</div>
                        <MdOutlineVerified className={"verifiedIcon"}/>
                        <div className={"username"}>@rihanna</div>
                        <GoDotFill className={"dotIcon"}/>
                        <div className={"date"}>Aug 26</div>
                    </div>
                    <CgMoreAlt className={"icon"}/>
                </div>
                <div className={"description"}>
                    20 years ago, i left my country, my culture, my food, and family to embark on a journey that started
                    with the release of my very first body of music! So many of you were a part of my life and career
                    since the very beginning, and some of you have joined the adventure along the way. I’m forever
                    grateful to all of you. Each of you played a very crucial role in where this journey has taken me
                    thus far!
                    I just wanted to take this moment to say thank you! Thank you for the greatest first 20 years ever!
                    20 years of the most loyal, die-hard fans that don’t play about me whatsoever, 20 years of hard work
                    and hardworking teams around me, 20 years of lessons, 20 years of unforgettable experiences and
                    accomplishments, 20 years of my family being my number one support system, and to all the people who
                    said yes to me and gave me a chance before it was “cool” to (Execs, DJ’s, writers, producers,
                    dancers, choreographers, directors, fashion designers, photographers, glam, journalists, brands,
                    mentors, etc etc) 20 years worth of thanks to you!! I thank God, He’s been very generous to me and
                    the Glory belongs to Him! #R20 🙏🏿⚓️
                </div>

                <div className={`contentGrid count-${images.length}`}>
                    {images.map((src, i) => (
                        <img key={i} src={src} alt={`Content ${i}`} className="contentImage"/>
                    ))}
                </div>
                <div className={"actions"}>
                    <div className={"action"}>
                        <FaRegComment/>
                        678
                    </div>
                    <div className={"action"}>
                        <FaRetweet/>
                        1.7K
                    </div>
                    <div className={"action"}>
                        <FaRegHeart/>
                        20K
                    </div>
                    <div className={"action"}>
                        <IoAnalytics/>
                        17M
                    </div>
                    <div className={"action"}>
                        <FaRegBookmark/>
                        <FaRegShareFromSquare/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;
