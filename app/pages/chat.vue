<script setup lang="ts">
const { chat, messages, sendMessage } = useChat()
</script>

<template>
  <ChatWindow
    :chat="chat"
    :messages="messages"
    @send-message="sendMessage"
  />
</template>
