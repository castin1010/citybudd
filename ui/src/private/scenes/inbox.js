import React from "react";
import styled from "styled-components";
import {
    Chat,
    Channel,
    ChannelHeader,
    Thread,
    Window
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";

import { StreamChat } from "stream-chat";

const InboxWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: nowrap;
    height: 98%;
    & div {
        margin: 5px;
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
            0 5px 15px rgba(0, 0, 0, 0.06);
    }
    & .chats {
        flex: 2;
    }
    & .conversation {
        flex: 5;
    }
    & .nextuser {
        flex: 2;
    }
`;

const chats = [
    {
        name: "Castin Masikah",
        status: "typing",
        new_messages: 3
    },
    {
        name: "Pozy Wizard",
        status: "typing",
        new_messages: 3
    },
    {
        name: "Lovelace",
        status: "typing",
        new_messages: 3
    },
    {
        name: "Whoami",
        status: "typing",
        new_messages: 3
    }
];

const chatClient = new StreamChat("qk4nn7rpcn75");
const userToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY29vbC1za3ktOSJ9.mhikC6HPqPKoCP4aHHfuH9dFgPQ2Fth5QoRAfolJjC4";

chatClient.setUser(
    {
        id: "cool-sky-9",
        name: "Cool Sky",
        image: "https://getstream.io/random_svg/?id=cool-sky-9&name=Cool+sky"
    },
    userToken
);

const channel = chatClient.channel("messaging", "godevs", {
    // image and name are required, however,you can add custom fields
    image:
        "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
    name: "Talk about Go"
});

function Inbox() {
    return (
        <InboxWrapper>
            {/*<div className="chats">
                {chats.length > 0 &&
                    chats.map((chat, idx) => (
                        <div className="chat">
                            <div className="avatar"></div>
                            <div className="details">
                                <p>{chat.name}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="conversation"></div>
            <div className="nextuser"></div>*/}
            <Chat client={chatClient} theme={"messaging light"}>
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                </Channel>
            </Chat>
        </InboxWrapper>
    );
}

export default Inbox;
