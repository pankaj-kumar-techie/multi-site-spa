import { useState } from 'react';
import ChatbotForm, { ChatbotDetails } from '../../components/common/chatbot/ChatbotForm';
import ChatbotDisplay from '../../components/common/chatbot/ChatbotDisplay';

export default function ChatbotDemo() {
    const [chatbotDetails, setChatbotDetails] = useState<ChatbotDetails | null>(null);

    const handleFormSubmit = (formData: ChatbotDetails) => {
        setChatbotDetails(formData);
    };

    return (
        <div>
            {!chatbotDetails ? (
                <ChatbotForm onSubmit={handleFormSubmit} />
            ) : (
                <ChatbotDisplay chatbotDetails={chatbotDetails} />
            )}
        </div>
    );
}
