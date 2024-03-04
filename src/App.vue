<template>
  <div class="w-[350px] max-h-[500px] overflow-y-auto border p-6 bg-white text-gray-800 dark:text-white dark:bg-gray-800">
    <FileUpload />
    <div 
      class="space-y-4 mt-6"
      v-if="!isColorProcessing"
    >
      <div v-if="colorPalette.length">
        <h2 class="text-md font-medium mb-2">Color Palette</h2>
        <div class="grid grid-cols-5 gap-3">
          <ColorBox
            v-for="(color, index) in colorPalette"
            :key="index"
            :color="color"
          />
        </div>
      </div>

      <div v-if="complementaryPalette.length">
        <h2 class="text-md font-medium mb-2">Complementary Color Palette</h2>
        <div class="grid grid-cols-5 gap-3">
          <ColorBox
            v-for="(color, index) in complementaryPalette"
            :key="index"
            :color="color"
          />
        </div>
      </div>
    </div>
    <div v-else>
      Color processing...
    </div>

    <img
      ref="previewImg"
      class="w-full block mt-6"
    />
  </div>
</template>

<script setup>
  import { provide } from 'vue';
  import { usePalette } from './usePalette'
  import FileUpload from '@/fragments/FileUpload.vue'
  import ColorBox from '@/fragments/ColorBox.vue'

  const {
    isColorProcessing,
    colorPalette,
    complementaryPalette,
    previewImg
  } = usePalette()

  provide('usePalette', usePalette())
</script>