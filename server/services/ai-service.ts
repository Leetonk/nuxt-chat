import { generateText, type ModelMessage, type LanguageModel } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { createOllama } from 'ai-sdk-ollama'

export const createOllamaModel = () => {
  const ollama = createOllama()
  return ollama('llama3.2')
}

export const createOpenAIModel = (apiKey: string) => {
  const openai = createOpenAI({
    apiKey,
  })
  console.log(openai)
  return openai('gpt-4o-mini')
}

export async function generateChatResponse(model: LanguageModel, messages: ModelMessage[]) {
  if (!Array.isArray(messages) || !messages.length) {
    throw new Error('Invalid messages format')
  }

  const response = await generateText({
    model,
    messages,
  })

  return response.text.trim()
}
