import { createOpenAIModel, generateChatResponse } from '#server/services/ai-service'

export default defineEventHandler(async (event: EventHandlerResponse) => {
  const body = await readBody(event)
  const { messages } = body
  console.log(useRuntimeConfig())
  const id = messages.length.toString()
  const openaiApiKey = useRuntimeConfig().openaiApiKey

  const openaiModel = createOpenAIModel(openaiApiKey)
  console.log(openaiModel)
  const response = await generateChatResponse(openaiModel, messages)
  return {
    id,
    role: 'assistant',
    content: response,
  }
})
