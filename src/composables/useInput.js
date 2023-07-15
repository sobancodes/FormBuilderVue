export function useInput() {
    const inputs = {
        simpleInput: {
            label: 'Input',
            icon: 'dynamic_form',
            code: `<input type='text' name='##name##' placeholder='##placeholder##' v-model="##v-model##" class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-gray-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
            inputName: '',
            inputValue: '',
            inputPlaceholder: '',
        },
        email: {
            label: 'Email',
            icon: 'mail',
            code: `<input type='email' name='##name##' placeholder='##placeholder##' v-model="##v-model##" class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-gray-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
            inputName: '',
            inputValue: '',
            inputPlaceholder: '',
        },
        password: {
            label: 'Password',
            icon: 'password',
            code: `<input type='password' name='##name##' placeholder='##placeholder##' v-model="##v-model##" class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-gray-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
            inputName: '',
            inputValue: '',
            inputPlaceholder: '',
        },
    }

    return { simpleInput: inputs.simpleInput, email: inputs.email, password: inputs.password }
}