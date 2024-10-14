import React, { useState } from 'react';
import { ChatbotService } from '../../../service/ChatbotService';

interface ChatbotFormProps {
    onSubmit: (formData: ChatbotDetails) => void;
}

export interface ChatbotDetails {
    clientName: string;
    clientEmail: string;
    companyName: string;
    service: string;
    chatbotName: string;
    chatbotDescription: string;
    website: string;
    targetAudience: string;
    chatbotGoals: string;
    expectedTraffic: string;
    integrationRequirements: string;
}

const ChatbotForm: React.FC<ChatbotFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<ChatbotDetails>({
        clientName: '',
        clientEmail: '',
        companyName: '',
        service: '',
        chatbotName: '',
        chatbotDescription: '',
        website: '',
        targetAudience: '',
        chatbotGoals: '',
        expectedTraffic: '',
        integrationRequirements: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);

        // Send form data to the API for creating the chatbot
        try {
            await ChatbotService.sendEmail(formData);
            // onSubmit(formData);
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-xl font-semibold">Create Your Law Firm Chatbot</h2>

            {/* Client Name */}
            <div className="flex flex-col">
                <label className="mb-2 text-gray-600">Your Name</label>
                <input
                    name="clientName"
                    type="text"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-lg p-2"
                    placeholder="Enter your name"
                    required
                />
            </div>

            {/* Email */}
            <div className="flex flex-col">
                <label className="mb-2 text-gray-600">Your Email (for sending report)</label>
                <input
                    name="clientEmail"
                    type="email"
                    value={formData.clientEmail}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-lg p-2"
                    placeholder="Enter your email"
                    required
                />
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
                <label className="mb-2 text-gray-600">Company Name</label>
                <input
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-lg p-2"
                    placeholder="Enter your company name"
                    required
                />
            </div>

            {/* Service Provided */}
            <div className="flex flex-col">
                <label className="mb-2 text-gray-600">Specializing in </label>
                <input
                    name="service"
                    type="text"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-lg p-2"
                    placeholder="e.g., Personal Injury, Criminal Defense"
                    required
                />
            </div>

            {/* Chatbot Name */}
            <div className="flex flex-col">
                <label className="mb-2 text-gray-600">Chatbot Name</label>
                <input
                    name="chatbotName"
                    type="text"
                    value={formData.chatbotName}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-lg p-2"
                    placeholder="Enter chatbot name"
                    required
                />
            </div>

            {/* Chatbot Description */}
            <div className="flex flex-col">
                <label className="mb-2 text-gray-600">Chatbot Description</label>
                <textarea
                    name="chatbotDescription"
                    value={formData.chatbotDescription}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-lg p-2"
                    placeholder="Describe your chatbot"
                    required
                />
            </div>

            {/* Website URL */}
            <div className="flex flex-col">
                <label className="mb-2 text-gray-600">Website URL</label>
                <input
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-lg p-2"
                    placeholder="Enter your website URL"
                    required
                />
            </div>

            {/* Chatbot Goals */}
            <div className="flex flex-col">
                <label className="mb-2 text-gray-600">Chatbot Goals</label>
                <textarea
                    name="chatbotGoals"
                    value={formData.chatbotGoals}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-lg p-2"
                    placeholder="What are the goals of your chatbot?"
                    required
                />
            </div>

            {/* Expected Traffic */}
            <div className="flex flex-col">
                <label className="mb-2 text-gray-600">Expected Traffic</label>
                <input
                    name="expectedTraffic"
                    type="text"
                    value={formData.expectedTraffic}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-lg p-2"
                    placeholder="Estimated traffic volume (e.g., 200-500 users per day)"
                    required
                />
            </div>

            {/* Integration Requirements */}
            <div className="flex flex-col">
                <label className="mb-2 text-gray-600">Integration Requirements</label>
                <textarea
                    name="integrationRequirements"
                    value={formData.integrationRequirements}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-lg p-2"
                    placeholder="Any existing systems for integration?"
                />
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
                Create Chatbot
            </button>
        </form>
    );
};

export default ChatbotForm;
