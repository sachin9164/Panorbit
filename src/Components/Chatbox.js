import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

class Chatbox extends React.Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "Hola! need Help?",
            trigger: "2"
          },
          {
            id: "2",
            user: true,
            trigger: "3"
          },
          {
            id: "3",
            message: "{previousValue}, okay",
            trigger: "4"
          },

          {
            id: "4",
            user: true,
            trigger: "5"
          },
          {
            id: "5",
            message: "okay",
            trigger: "6"
          },
          {
            id: "6",
            user: true,
            trigger: "7"
          },
          {
            id: "7",
            message: "okay",
            end: true
          }
        ]}
      />
    );
  }
}
export default Chatbox;
