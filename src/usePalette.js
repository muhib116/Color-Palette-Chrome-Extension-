import { ref } from 'vue'
import {
    buildPalette,
    rgbToHex,
    hslToHex,
    buildRgb,
    quantization,
} from './helper.js'

const previewImg = ref()
const colorPalette = ref([])
const complementaryPalette = ref([])
const isColorProcessing = ref(false)

export const usePalette = () => 
{
    const fileProcess = (e) => {
        isColorProcessing.value = true
        const files = e.target.files
        const file = files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            const dataURL = e.target.result
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            const img = new Image()
            
            if(previewImg.value){
                previewImg.value.src = dataURL
            }

            img.src = dataURL
            img.onload = () => {
                canvas.width = img.width
                canvas.height = img.height
                ctx.drawImage(img, 0, 0, img.width, img.height)
                const imageData = ctx.getImageData(0, 0, img.width, img.height)
                const data = imageData.data
                const rgbValues = []
                
                for (let i = 0; i < data.length; i += 4) {
                    const rgb = {
                        r: data[i],
                        g: data[i + 1],
                        b: data[i + 2],
                    }
                    rgbValues.push(rgb)
                }

                // Convert the image data to RGB values so its much simpler
                const rgbArray = buildRgb(data);
                /**
                 * Color quantization
                 * A process that reduces the number of colors used in an image
                 * while trying to visually maintin the original image as much as possible
                 */
                const quantColors = quantization(rgbArray, 0);

                const {
                    colors,
                    complementary
                } = buildPalette(quantColors)

                colorPalette.value =  colors
                complementaryPalette.value =  complementary
                isColorProcessing.value = false
            }
        }
    }

    return {
        fileProcess,
        colorPalette,
        complementaryPalette,
        previewImg,
        isColorProcessing
    }
}