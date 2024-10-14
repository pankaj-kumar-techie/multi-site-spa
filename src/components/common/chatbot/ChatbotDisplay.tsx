import React, { useState, useRef, useEffect } from 'react';
import { ChatbotDetails } from './ChatbotForm';
import { ChatbotService } from '../../../service/ChatbotService';

interface ChatbotDisplayProps {
    chatbotDetails: ChatbotDetails;
}

const ChatbotDisplay: React.FC<ChatbotDisplayProps> = ({ chatbotDetails }) => {
    const [userMessage, setUserMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        {
            sender: 'bot',
            text: `Hi! I am ${chatbotDetails.chatbotName}, here to assist you with ${chatbotDetails.service} cases. How can I help you today?`,
        },
    ]);
    const [isBotTyping, setIsBotTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    // Function to send message to backend OpenAI API
    const handleSendMessage = async () => {
        if (userMessage.trim()) {
            // Add user's message to chat history
            setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', text: userMessage }]);
            setUserMessage(''); // Clear the input field
            setIsBotTyping(true); // Bot is typing...

            try {
                // Create payload with all necessary parameters
                const payload = {
                    clietName: chatbotDetails.clientName,
                    clientEmail: chatbotDetails.clientEmail,
                    chatbotName: chatbotDetails.chatbotName,
                    service: chatbotDetails.service,
                    chatbotDescription: chatbotDetails.chatbotDescription,
                    chatbotGoals: chatbotDetails.chatbotGoals,
                    context: userMessage,
                };

                // Call the ChatbotService to send the message
                const response = await ChatbotService.sendMessageToChatbot(payload);

                const botResponse = response.data.response || "Sorry, I couldn't generate a response.";

                // Add bot's response to chat history
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { sender: 'bot', text: botResponse },
                ]);
            } catch (error) {
                console.error('Error fetching AI response:', error);
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { sender: 'bot', text: "I'm having trouble fetching a response. Please try again." },
                ]);
            } finally {
                setIsBotTyping(false); // Bot has finished typing
            }
        }
    };

    // Handle Enter key press to send message
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Scroll to the bottom of the chat when a new message is added
    const scrollToBottom = () => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory, isBotTyping]);

    return (
        <div className="flex flex-col h-full p-6 sm:p-8 bg-gray-100 rounded-lg shadow-lg max-w-lg mx-auto">
            {/* Chat Header */}
            <div className="bg-white p-4 sm:p-6 border border-gray-300 rounded-lg mb-2">
                <div className="flex items-center justify-center space-x-4">
                    <img
                        src="https://i.pinimg.com/1200x/fd/c5/95/fdc59561325fdf89d6b05632b84fd0cb.jpg" // Replace with your actual logo URL
                        alt={`${chatbotDetails.chatbotName} Logo`}
                        className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover shadow"
                    />
                    <div>
                        <p className="text-lg font-semibold sm:text-xl">{chatbotDetails.chatbotName}</p>
                        <p className="text-sm sm:text-base text-gray-500 capitalize">
                            {chatbotDetails.chatbotDescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* Chat History with fixed height and scrolling */}
            <div className="flex-grow h-72 sm:h-80 overflow-y-auto flex flex-col space-y-3 pr-2 bg-white border border-gray-300 rounded-lg mb-2">
                {chatHistory.map((message, index) => (
                    <div key={index} className={`flex ${message.sender === 'user' ? 'flex-row-reverse' : ''} space-x-3 mt-4`}>
                        <div className="flex-shrink-0">
                            {message.sender === 'bot' ? (
                                <img
                                    src="https://i.pinimg.com/1200x/fd/c5/95/fdc59561325fdf89d6b05632b84fd0cb.jpg" // Replace with your actual logo URL
                                    alt="Chatbot Logo"
                                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                                />
                            ) : (
                                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-400 text-white flex items-center justify-center">
                                    U
                                </div>
                            )}
                        </div>
                        <div
                            className={`${message.sender === 'bot' ? 'bg-blue-100 text-blue-900' : 'bg-gray-200 text-gray-900'
                                } p-2 sm:p-3 rounded-lg shadow max-w-xs sm:max-w-sm text-sm`}
                        >
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}

                {/* Show typing indicator when the bot is typing */}
                {isBotTyping && (
                    <div className="flex space-x-3 items-center">
                        <img
                            src="https://i.pinimg.com/1200x/fd/c5/95/fdc59561325fdf89d6b05632b84fd0cb.jpg" // Replace with your actual logo URL
                            alt="Chatbot Logo"
                            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                        />
                        <div className="bg-blue-100 text-blue-900 p-2 sm:p-3 rounded-lg shadow max-w-xs sm:max-w-sm text-sm">
                            <p className="italic">The bot is typing...</p>
                        </div>
                    </div>
                )}

                {/* Scroll to this div when new messages are added */}
                <div ref={chatEndRef} />
            </div>

            {/* Input Field */}
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask the chatbot..."
                    className="flex-grow p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                    onClick={handleSendMessage}
                    className="p-2 sm:p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors text-sm"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatbotDisplay;
