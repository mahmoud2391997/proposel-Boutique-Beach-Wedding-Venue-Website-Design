import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Singleton instance to maintain chat state if needed, though we recreate for simplicity in this demo
let chatInstance: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are 'Aria', the dedicated Wedding Concierge for 'Azure Sands', a luxury beach destination wedding venue in the Maldives.
Your tone is warm, professional, elegant, and reassuring.
Briefly answer questions about:
- Capacity: We host intimate elopements (2-10 guests) up to Grand Galas (200 guests).
- Weather: Best season is November to April (dry season). May-October is lush but chance of rain.
- Catering: World-class seafood, fusion cuisine, and custom menus.
- Accommodation: We have 50 overwater villas for guests.
- Booking: We recommend booking 12-18 months in advance.
Keep answers concise (under 50 words) unless asked for detail.
Always encourage booking a virtual tour.
`;

export const getGeminiChat = () => {
  if (!API_KEY) {
    console.warn("Gemini API Key is missing.");
    return null;
  }

  if (!chatInstance) {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    chatInstance = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatInstance;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const chat = getGeminiChat();
  if (!chat) {
    return "I'm sorry, I am currently offline. Please contact our front desk directly.";
  }

  try {
    const result = await chat.sendMessage({ message });
    return result.text || "I didn't quite catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, I'm having trouble connecting to the reservation system right now.";
  }
};