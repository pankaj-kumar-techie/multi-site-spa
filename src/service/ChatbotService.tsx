import { chatbotServiceClient } from '../config/AxiosRestClient';


export class ChatbotService {

    static sendMessageToChatbot(payload: any) {
        return chatbotServiceClient.post('/open-ai/chat', payload);
    }

    static sendEmail(payload: any) {
        return chatbotServiceClient.post('/email/send', payload);
    }
}