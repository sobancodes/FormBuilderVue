import { useObject } from './useObject'
const { cloneObject } = useObject()

export function useInputGenerator() {
    const inputs = function () {
        return {
            text: {
                type: 'text',
                icon: 'dynamic_form',
                code: `<input type='text' name='##name##' placeholder='##placeholder##' v-model="##v-model##" class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-gray-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
                label: 'Input',
            },
            email: {
                type: 'email',
                icon: 'mail',
                code: `<input type='email' name='##name##' placeholder='##placeholder##' v-model="##v-model##" class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-gray-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
                label: 'Email',
            },
            password: {
                type: 'password',
                icon: 'password',
                code: `<input type='password' name='##name##' placeholder='##placeholder##' v-model="##v-model##" class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-gray-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
                label: 'Password',
            }
        }
    }


    const generateInput = function (input = null) {
        const formInputs = inputs()

        if (input === null) {
            return formInputs.text
        }

        return formInputs[input.type]
    }

    return { inputs, generateInput }
}