import './index.scss'
import LeftSideBar from "../../../components/UserComponents/LeftSideBar/index.jsx";
import ChatBox from "../../../components/UserComponents/ChatBox/index.jsx";
import Direct from "../../../components/UserComponents/Direct/index.jsx";

function MessagesPage() {
    return (
        <section id={"messagesPage"}>
            <LeftSideBar/>
            <div className={"middlePart"}>
                <Direct/>
            </div>
            <ChatBox/>
        </section>
    );
}

export default MessagesPage;