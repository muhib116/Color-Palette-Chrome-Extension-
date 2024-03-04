<template>
  <div class="w-[350px] max-h-[500px] overflow-y-auto select-none border p-6 bg-white text-gray-800 dark:text-white dark:bg-gray-800">
    <FileUpload />
    <div 
      class="space-y-4 mt-6"
      v-if="!isColorProcessing"
    >
      <ColorPalette />
      <ComplementaryColor />
    </div>

    <div v-else class="flex justify-center my-4 gap-2 items-center">
      <svg class="w-6 h-6 animate-spin" width="800" height="800" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="7" cy="7" r="6" stroke="currentColor" stroke-opacity=".3" stroke-width="2"/><path fill="currentColor" fill-opacity=".6" fill-rule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"/></g></svg>
      Processing...
    </div>

    <img
      ref="previewImg"
      class="w-full block mt-6"
    />
  </div>
</template>

<script setup>
  import { provide, ref } from 'vue';
  import { usePalette } from './usePalette'
  import FileUpload from '@/fragments/FileUpload.vue'
  import ColorPalette from '@/fragments/ColorPalette.vue'
  import ComplementaryColor from '@/fragments/ComplementaryColor.vue'

  const {
    isColorProcessing,
    previewImg,
    getComplementaryColor
  } = usePalette()

  provide('usePalette', usePalette())
</script>