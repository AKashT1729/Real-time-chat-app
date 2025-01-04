import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { URL } from "../utils/Url";
import { MdOutlinePersonSearch } from "react-icons/md";


const Sidebar = () => {
  const { authUser } = useAuth();
  const [searchInput, setSearchInput] = useState("");
  const [chatUsers, setChatUsers] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchUser, setSearchUser] = useState("");

  const handlerSearchSubmit = async(e) => {
    e.preventDefault();
    try {
      const search = await axios.get(`${URL}/users/search?search=${searchInput}`,{
        withCredentials: true,
      });
      console.log(search);
      
      const data = search.data;
      if(data.success === false){
        console.error(data.message);

      } 
      if(data.loading === 0){
        alert(data.message)
      }
    } catch (error) {
       console.log(error);
       
      
    }
    
    // Add search logic here
  };

  useEffect(() => {
    const fetchChatUsers = async () => {
      try {
        const response = await axios.get(`${URL}/users/currentChatters`,{
          withCredentials: true,
        });
        const data = response.data;
        // console.log(data.data);
        
        if (data.success === false) {
          console.error(data.message);
        } else {
          setChatUsers(data.data || []);
           //console.log(chatUsers);
          
        }
      } catch (error) {
        console.error("Error fetching chat users:", error);
      }
    };

    fetchChatUsers();
  }, []);

  return (
    <div className="w-full md:w-1/4 bg-white border-r border-gray-200 h-screen flex flex-col">
    {/* Header Section */}
    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        {/* Search Form */}
        <form onSubmit={handlerSearchSubmit} className="flex items-center bg-gray-100 rounded-full px-2 py-1">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search user"
            className="bg-transparent outline-none px-2 text-sm"
          />
          <button type="button" >
            <MdOutlinePersonSearch className="text-xl text-gray-500 hover:text-gray-700" />
          </button>
        </form>
      </div>
  
      {/* User Info */}
      <div className="flex items-center space-x-3">
       <h3 className="text-lg font-medium">{authUser.username}</h3>
        <img
          src={authUser.avatar || "https://via.placeholder.com/30"}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  
    {/* Chat List */}
    <div className="flex-1 overflow-y-auto">
      {chatUsers.length > 0 ? (
        chatUsers.map((contact) => (
          <div
            key={contact.id}
            className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
              selectedContact?.id === contact.id ? "bg-gray-50" : ""
            }`}
            onClick={() => setSelectedContact(contact)}
          >
            {/* Avatar */}
            <div className="relative">
              <img
                src={contact.avatar || "https://via.placeholder.com/50"}
                alt={contact.name}
                className="w-12 h-12 rounded-full"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/50";
                }}
              />
              <span
                className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white ${
                  contact.online ? "bg-green-400" : "bg-gray-400"
                }`}
              ></span>
            </div>
  
            {/* Contact Info */}
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-medium text-gray-900">{contact.fullName}</h3>
              <p className="text-sm text-gray-500 truncate">
                {contact.lastMessage || "No messages yet"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 text-gray-500 text-sm text-center">
          No chat users found.
        </div>
      )}
    </div>
  </div>
  
  );
};

export default Sidebar;
