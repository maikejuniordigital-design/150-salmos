import { GoogleGenAI } from "@google/genai";
import { AspectRatio, ImageSize } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

// Uses 'gemini-3-pro-preview' with Thinking Budget for deep theological analysis
export const analyzePsalmDeeply = async (psalm: string, topic: string): Promise<string> => {
  const ai = getClient();
  
  try {
    const prompt = `
      Atue como um teólogo erudito e compassivo.
      Analise profundamente o Salmo ${psalm} com foco em: ${topic}.
      Forneça uma explicação versículo por versículo breve, mas profunda, revelando o contexto histórico e a aplicação espiritual para os dias de hoje.
      Use uma linguagem acessível, mas espiritualmente rica.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 32768, // Max thinking for deep analysis
        },
      },
    });

    return response.text || "Não foi possível gerar a análise no momento.";
  } catch (error) {
    console.error("Error analyzing psalm:", error);
    throw error;
  }
};

// Uses 'gemini-3-pro-image-preview' for generating high-quality spiritual imagery
export const generateSpiritualImage = async (
  prompt: string,
  aspectRatio: AspectRatio,
  size: ImageSize
): Promise<string> => {
  const ai = getClient();

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          {
            text: `Uma imagem artística, etérea e espiritual representando: ${prompt}. Estilo pintura a óleo clássica ou iluminação cinematográfica suave.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
          imageSize: size,
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image data received");
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};

// Uses 'gemini-2.5-flash-image' for editing existing images (e.g. adding text or changing atmosphere)
export const editSpiritualImage = async (
  base64Image: string,
  editInstruction: string
): Promise<string> => {
  const ai = getClient();
  const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Data,
              mimeType: 'image/png',
            },
          },
          {
            text: editInstruction,
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No edited image data received");
  } catch (error) {
    console.error("Error editing image:", error);
    throw error;
  }
};