import {onMounted, ref, shallowRef} from "vue";

export function usePaste(){
    const clipboardFile = shallowRef()
    const paste = ref(1)
    onMounted(() => {
        document.addEventListener("paste", (e) => {
            if(!e.clipboardData) return
            if(!e.clipboardData.items) return;
            e.preventDefault()
            const items = e.clipboardData.items
            let blob
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf("image") !== -1) {
                    blob = items[i].getAsFile();
                }
            }
            if(blob){
                clipboardFile.value = blob
                paste.value = paste.value + 1
            }
        })
    })

    return {
        clipboardFile,
        paste
    }
}