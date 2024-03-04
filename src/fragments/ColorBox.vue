<template>
    <div 
        @click="copyColor(color)" 
        class="relative group cursor-pointer hover:scale-110 duration-300"
    >
        <span v-if="isCopied" class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 dark:bg-white dark:text-gray-700 bg-gray-700 text-white px-1 rounded text-sm pointer-events-none animate-pulse duration-300">
            Copied
        </span>
        <span
            class="block h-5 border rounded-sm relative"
            :style="{
                backgroundColor: color,
                color: getComplementaryColor(color)
            }"
        >
            <svg 
                class="w-4 h-4 opacity-0 group-hover:opacity-100 duration-300 drop-shadow absolute inset-1/2 -translate-x-1/2 -translate-y-1/2" 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                fill="currentColor" 
                viewBox="0 0 256 256"
            >
                <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
            </svg>
        </span>
        <span class="text-[10px]">{{ color }}</span>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    defineProps({
        color: String,
        getComplementaryColor: Function,
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