<script setup lang="ts">
const appConfig = useAppConfig()
const { chat, messages, sendMessage } = useChat()

const appTitle = computed(() =>
  chat.value.title ? `${chat.value.title} - ${appConfig.title}` : appConfig.title
)

const typing = ref(false)

const handleSendMessage = async (message: string) => {
  typing.value = true
  await sendMessage(message)
  typing.value = false
}

useHead({
  title: appTitle,
})
</script>

<template>
  <ChatWindow
    :chat="chat"
    :messages="messages"
    :typing="typing"
    @send-message="handleSendMessage"
  />
</template>
