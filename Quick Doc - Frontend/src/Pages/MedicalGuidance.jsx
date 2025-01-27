import React from 'react'

import {
    Box,
    TextField,
    Button,
    Typography,
    Avatar,
    Grid,
    Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {motion} from "framer-motion";
import "../chatbot.css";
import chatLogo from "../assets/chatbot/chatbot_logo.png";
import receiveAudio from "../assets/tone/tone.mp3";
import {chatbotAPI} from "../api/api.js";

const BOT = "bot";
const USER = "user";

const Message = ({message}) => {
    const isBot = message.sender === "bot";
    const textColor = isBot ? "rgb(0,0,0)" : "rgb(255,255,255)";

    const steps = message.text.split("\n");

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            style={{
                display: "flex",
                justifyContent: isBot ? "flex-start" : "flex-end",
                marginBottom: 15,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isBot ? "row" : "row-reverse",
                    alignItems: "center",
                }}
            >
                <Avatar
                    className="clickable"
                    sx={{
                        bgcolor: isBot ? "primary.main" : "rgba(39, 174, 96,1.0)",
                        border: "2px solid white",
                    }}
                >
                    {isBot ? "Q" : "U"}
                </Avatar>
                <Paper
                    variant="outlined"
                    sx={{
                        p: 2,
                        ml: isBot ? 1 : 0,
                        mr: isBot ? 0 : 1,
                        border: "1.5px solid white",
                        backgroundColor: isBot ? "rgb(242,245,247)" : "rgb(19,90,252)",
                        borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
                    }}
                >
                    {steps.map((step, index) => (
                        <Typography key={index} color={textColor} variant="body1">
                            {step}
                        </Typography>
                    ))}
                </Paper>
            </Box>
        </motion.div>
    );
};

function MedicalGuidance() {
    const [input, setInput] = React.useState("");
    const [messages, setMessages] = React.useState([
        {text: "Hi ! ", sender: BOT},
    ]);
    const [loading, isLoading] = useState(false);
    const ref = useRef();

    const playReceiveAudio = async () => {
        const audio = new Audio(receiveAudio);
        await audio.play();
    };

    const requestMessage = async (tempArr) => {
        isLoading(true);
        await axios
            .post(`${chatbotAPI}/webhooks/rest/webhook`, {
                sender: USER,
                message: input,
            })
            .then((res) => {
                const temp = res.data[0];
                const bot_msg = temp["text"];
                const cookedObj = {
                    text: bot_msg,
                    sender: "bot",
                };
                playReceiveAudio();
                tempArr.push(cookedObj);
                setMessages(tempArr);
            })
            .catch((err) => {
                toast.error(err.message);
                toast.clearWaitingQueue();
            })
            .finally(() => {
                isLoading(false);
                setInput("");
                scrollToBottom();
            });
    };

    const scrollToBottom = () => {
        const timeout = setTimeout(() => {
            ref.current.scrollIntoView({behavior: "smooth"});
        }, 100);
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const handleSend = async () => {
        if (input.trim() !== "") {
            const temp = [...messages];
            temp.push({
                text: input,
            });
            setMessages(temp);
            await requestMessage(temp);
        }
    };

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
            }}
        >
            <Box
                className="glass"
                sx={{
                    height: "90vh",
                    width: "100%",
                    maxWidth: "800px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div className={"chatHeader"}>
                    <div className={"chatLogo"}>
                        <img src={chatLogo} alt="Logo" className={"chatLogoImg"}/>
                    </div>
                    <div className={"chatTitle"}>
                        <h2> Quick Doc Chatbot </h2>
                    </div>
                </div>

                <Box sx={{flexGrow: 1, overflow: "auto", p: 2}}>
                    {messages.map((message, index) => (
                        <Message key={index} message={message}/>
                    ))}
                    {loading && <Message message={{sender: BOT, text: "typing..."}}/>}
                    <div ref={ref}/>
                </Box>
                <Box sx={{p: 2, backgroundColor: "background.default"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <TextField
                                size="small"
                                fullWidth
                                placeholder="Type a message"
                                variant="outlined"
                                value={input}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                fullWidth
                                color="primary"
                                variant="contained"
                                endIcon={<SendIcon/>}
                                onClick={handleSend}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <ToastContainer containerId="chatContainer" limit={1} hideProgressBar/>
        </Box>
    );
}

export default MedicalGuidance;


