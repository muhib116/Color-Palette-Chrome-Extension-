<template>
    <div v-if="colorPalette.length" class="border-b border-gray-400 dark:border-gray-400 pb-3">
        <div class="mb-2 flex items-center justify-between ">
          <h2 class="text-md font-medium">Color Palette</h2>
          <button
            class="font-bold text-sky-500 flex items-center gap-1"
            @click="copyColors(colorPalette.join(', '))"
          >
            <svg 
              class="w-6 h-6"
              :class="isCopied ? 'opacity-100' : 'opacity-0'"
              xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
            Copy All
          </button>
        </div>
        <div class="grid grid-cols-5 gap-3">
          <ColorBox
            v-for="(color, index) in colorPalette"
            :key="index"
            :color="color"
            :getComplementaryColor="getComplementaryColor"
          />
        </div>
    </div>
</template>

<script setup>
    import { inject, ref } from 'vue'
    import ColorBox from '@/fragments/ColorBox.vue'

    const {
        colorPalette,
        getComplementaryColor
    } = inject('usePalette')


  const isCopied = ref(false)
  const copyColors = (colors) => {
    isCopied.value = true
    navigator.clipboard.writeText(colors)
    setTimeout(() => {
        isCopied.value = false
    }, 1000)
  }
</script>