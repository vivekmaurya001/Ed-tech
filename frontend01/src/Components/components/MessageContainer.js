import React, { useEffect, useState } from "react";
import ScrollableFeed from "react-scrollable-feed";
import {
  Button,
  FormControl,
  useToast,
  Input,
  Spinner,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";

import { ChatState } from "../../Context/ChatProvider";
import axios from "axios";
import MessageItem from "./MessageItem";
import io from "socket.io-client";
import Lottie from "react-lottie";
import animationData from "../components/animation/Animation.json";
const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const MessageContainer = ({ fetchAgain, setFetchAgain }) => {
  const [messages, setMessages] = useState([]);
  const [newmessage, setnewMessage] = useState("");
  const [loading, setloading] = useState(false);
  const { user, selectedChat, Notification, setNotification } = ChatState();
  const toast = useToast();
  const [socketConnected, setsocketConnected] = useState(false);
  const [Typing, setTyping] = useState(false);
  const [IsTyping, setIsTyping] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user.user);
    socket.on("connected", () => setsocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop-typing", () => setIsTyping(false));
  }, []);

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      setloading(true);

      const config1 = {
        headers: {
          Authorization: `Bearer ${user.auhToken}`,
        },
      };
      const { data } = await axios.get(
        `/api/message/${selectedChat._id}`,
        config1
      );

      setMessages(data);
      setnewMessage("");
      setloading(false);
      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      toast({
        title: "Error occured!",
        description: "failed to load all chats",
        status: "error",
        duration: 2000,
        position: "bottom",
      });
      setloading(false);
    }
  };

  const SendMessage = async () => {
    if (newmessage) {
      socket.emit("stop-typing", selectedChat._id);

      try {
        setloading(true);

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.auhToken}`,
          },
        };
        const { data } = await axios.post(
          `/api/message`,
          {
            chatId: selectedChat._id,
            content: newmessage,
          },
          config
        );
        setMessages([...messages, data]);
        setnewMessage("");
        socket.emit("new message", data);
        setloading(false);
      } catch (error) {
        toast({
          title: "Failed to send the message!",
          description: error.response.data,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setloading(false);
      }
    }
  };

  useEffect(() => {
    fetchMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
      //chking that if no chat is selcted and selected chat and newmessage of a chat are not same then we show notifications
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.Chat._id
      ) {
        //showing notification
        if (!Notification.includes(newMessageReceived)) {
          newMessageReceived.senderName = user.user.name;
          setNotification([newMessageReceived, ...Notification]);
          setFetchAgain(!fetchAgain);
        }
      } else {
        setMessages([...messages, newMessageReceived]);
      }
    });
  });

  const typingHandler = (e) => {
    setnewMessage(e.target.value);
    if (!socketConnected) return;
    if (!Typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && Typing) {
        socket.emit("stop-typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };
  // for running submitHandler through Enter

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      SendMessage();
    }
  };

  return (
    <>
      <Stack h="84%">
        {loading ? (
          <Spinner alignSelf="Center" size="xl" />
        ) : (
          <MessageItem messages={messages} />
        )}
        {IsTyping ? (
          <div style={{ marginBottom: 15, marginLeft: 0, width: "70px" }}>
            {" "}
            <Lottie
              options={defaultOptions}
              // height={50}
              width={70}
            />{" "}
            Typing....
          </div>
        ) : null}
      </Stack>
      <FormControl>
        <InputGroup>
          <Input
            bottom="0"
            type="text"
            placeholder="Enter the message......."
            border="1.6px solid grey"
            value={newmessage}
            onChange={typingHandler}
            onKeyDown={handleKeyPress}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => {
                SendMessage();
              }}
            >
              <i class="fas fa-paper-plane"></i>
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

export default MessageContainer;
