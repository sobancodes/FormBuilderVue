import { useObject } from './useObject'
const { cloneObject } = useObject()

export function useInputGenerator() {
    const inputs = function () {
        return {
            text: {
                type: 'text',
                icon: 'dynamic_form',
                name: 'text',
                template: `<input type='text' name=##name## placeholder=##placeholder## v-model=##vmodel## class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-neutral-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
                label: 'Input',
                // <input type='text' name='input' placeholder='Input' v-model=##vmodel## class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-neutral-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600' />
                generatedNode: null,
            },
            email: {
                type: 'email',
                icon: 'mail',
                name: 'email',
                template: `<input type='email' name=##name## placeholder=##placeholder## v-model=##vmodel## class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-neutral-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
                label: 'Email',
                // <input type='email' name=##name## placeholder=##placeholder## v-model=##vmodel## class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-neutral-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />
                generatedNode: null,
            },
            password: {
                type: 'password',
                icon: 'password',
                name: 'password',
                template: `<input type='password' name=##name## placeholder=##placeholder## v-model=##vmodel## class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-neutral-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
                label: 'Password',
                // <input type='password' name=##name## placeholder=##placeholder## v-model=##vmodel## class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-neutral-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />
                generatedNode: null,
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