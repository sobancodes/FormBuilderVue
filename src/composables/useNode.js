export function useNode() {
    const getNextSibling = (node, siblingClass = '') => {
        let nextSibling = node.nextElementSibling

        if (siblingClass.trim() === '') {
            return nextSibling
        }

        while (!nextSibling.classList.contains('update-input-holder')) {
            nextSibling = nextSibling.nextElementSibling
        }

        if (!nextSibling.classList.contains('update-input-holder')) {
            return null
        }

        return nextSibling
    }

    return { getNextSibling }
}




{/* <label class="relative">
            {{ label }}
            <span @click="showUpdateInput"
                class="font-bold cursor-pointer label-edit-icon text-base absolute -translate-y-1/2 top-1/2 right-[-20px] text-blue-600 material-symbols-outlined animate__animated animate__fadeIn animate__fastest">
                edit
            </span>
            <div class="hidden update-input-holder absolute left-0 top-[-0.3rem] rounded space-x-1">
                <input v-model="label" class="outline-none" type="text">
                <span @click="onceLabelUpdates"
                    class="cursor-pointer material-symbols-outlined items-center text-green-600 text-lg font-bold">
                    done
                </span>
            </div>
        </label> */}