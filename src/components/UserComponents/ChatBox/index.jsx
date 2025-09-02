import './index.scss'
import profileImage from "/src/assets/profileImage.png"
import {MdOutlineVerified} from "react-icons/md";
import {HiOutlineInformationCircle} from "react-icons/hi";
import {TbPhoto} from "react-icons/tb";
import {HiOutlineFaceSmile, HiOutlineGif} from "react-icons/hi2";
import {AiOutlineSend} from "react-icons/ai";
import {useEffect, useRef} from "react";

function ChatBox() {
    const messages = [
        { id: 1, text: "Hey, I was just thinking about you.", side: "left" },
        { id: 2, text: "Really? What were you thinking? 😏", side: "right" },
        { id: 3, text: "That my day feels lighter every time you text me.", side: "left" },
        { id: 4, text: "Aww, that’s so sweet. You always know how to make me smile.", side: "right" },
        { id: 5, text: "Well, your smile is kind of addictive. I might be in trouble. 😉", side: "left" },
        { id: 6, text: "Haha, you definitely are. Once you fall for it, there’s no going back.", side: "right" },
        { id: 7, text: "I think I already fell… a long time ago.", side: "left" },
        { id: 8, text: "Wow… you’re making me blush over here 🙈", side: "right" },
        { id: 9, text: "Good, that was my plan. Blushing looks cute on you.", side: "left" },
        { id: 10, text: "Stoppp, you’re too much 😂 but I like it.", side: "right" },
        { id: 11, text: "So, when do I get to see that smile in person again?", side: "left" },
        { id: 12, text: "Soon, I hope. I’ve been missing our late-night talks.", side: "right" },
        { id: 13, text: "Me too… especially when you kept laughing at my terrible jokes.", side: "left" },
        { id: 14, text: "They were terrible, but your laugh made up for it 😅", side: "right" },
        { id: 15, text: "Alright, then I’ll keep telling bad jokes if it means I get to hear your laugh.", side: "left" },
        { id: 16, text: "Deal. But only if you promise to bring chocolate next time 😋", side: "right" },
        { id: 17, text: "Chocolate and bad jokes, that’s my secret weapon.", side: "left" },
        { id: 18, text: "And don’t forget cuddles. That’s non-negotiable.", side: "right" },
        { id: 19, text: "Of course. Cuddles first, chocolate second.", side: "left" },
        { id: 20, text: "Perfect. Now you’re talking my language ❤️", side: "right" },
    ];



    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [messages]);

    return (
        <section id="chatBox">
            <div className="mainWrapper">
                <div className="firstWrapper">
                    <img src={profileImage} alt="Image" className="profileImage"/>
                    <div className="name">Rihanna</div>
                    <MdOutlineVerified className="verifiedIcon"/>
                </div>
                <HiOutlineInformationCircle className="icon"/>
            </div>

            <div className="messagesWrapper">
                {messages.map((msg) => (

                    <>
                        <div key={msg.id} className={`message ${msg.side}`}>
                            {msg.text}
                        </div>
                        <div key={msg.id} className={`message ${msg.side} message1`}>
                            10:26 AM
                        </div>
                    </>
                ))}
                <div ref={messagesEndRef}></div>
            </div>

            <div className="inputWrapper">
                <TbPhoto className="icon icon1"/>
                <HiOutlineGif className="icon icon2"/>
                <HiOutlineFaceSmile className="icon icon3"/>
                <AiOutlineSend className="icon icon4"/>
                <input placeholder="Start a new message"/>
            </div>
        </section>
    );
}

export default ChatBox;
