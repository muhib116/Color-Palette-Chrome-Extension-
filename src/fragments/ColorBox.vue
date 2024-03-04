<template>
    <div @click="copyColor(color)" class="relative cursor-pointer hover:scale-110 duration-300">
        <span v-if="isCopied" class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 dark:bg-white dark:text-gray-700 bg-gray-700 text-white px-1 rounded text-sm">
            Copied
        </span>
        <span
            :style="{ backgroundColor: color }"
            class="block h-5 border rounded-sm"
        ></span>
        <span class="text-[10px]">{{ color }}</span>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    defineProps({
        color: String
    })

    const isCopied = ref(false)
    const copyColor = (color) => {
        isCopied.value = true
        navigator.clipboard.writeText(color)
        setTimeout(() => {
            isCopied.value = false
        }, 1000)
    }
</script>