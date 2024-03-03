<template>
    <div>
        <span
            :style="{ backgroundColor: color }"
            class="block h-5 border rounded-sm"
        ></span>
        <span class="text-[12px]">{{ color }}</span>
    </div>
</template>

<script setup>
    defineProps({
        color: String
    })
</script>