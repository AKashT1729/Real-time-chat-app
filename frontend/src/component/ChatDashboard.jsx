import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";

import { FiSend } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";

const ChatDashboard = () => {
  const { authUser } = useAuth();
  const [contacts] = useState([
    {
      id: 1,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "Hey, how are you?",
      online: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "See you tomorrow!",
      online: false,
    },
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      text: "Hey, how are you?",
      timestamp: "10:30 AM",
      isSent: false,
    },
    {
      id: 2,
      sender: "You",
      text: "I'm good, thanks! How about you?",
      timestamp: "10:31 AM",
      isSent: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "You",
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isSent: true,
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center p-4 border-b border-gray-200 bg-white">
          <img
            src={selectedContact.avatar}
            alt={selectedContact.name}
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
            }}
          />
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-medium">{selectedContact.name}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <BsCircleFill
                className={`${selectedContact.online ? "text-green-400" : "text-gray-400"} w-2 h-2 mr-2`}
              />
              {selectedContact.online ? "Online" : "Offline"}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isSent ? "justify-end" : "justify-start"} mb-4`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.isSent ? "bg-blue-500 text-white" : "bg-white border border-gray-200"}`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${message.isSent ? "text-blue-100" : "text-gray-500"}`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 h-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FiSend className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default ChatDashboard;
