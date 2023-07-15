export function useInput() {
    const inputs = {
        simpleInput: {
            type: 'Input',
            icon: 'dynamic_form',
            code: `<input type='text' name='##name##' placeholder='##placeholder##' v-model="##v-model##" class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-gray-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
            label: '',
            name: '',
            value: '',
            placeholder: '',
        },
        email: {
            type: 'Email',
            icon: 'mail',
            code: `<input type='email' name='##name##' placeholder='##placeholder##' v-model="##v-model##" class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-gray-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
            label: '',
            name: '',
            value: '',
            placeholder: '',
        },
        password: {
            type: 'Password',
            icon: 'password',
            code: `<input type='password' name='##name##' placeholder='##placeholder##' v-model="##v-model##" class='mb-4 w-full text-sm shadow-sm border rounded-md px-3 py-2 placeholder:text-gray-300 placeholder:text-sm focus:outline-8 focus:outline-blue-600'  />`,
            label: '',
            name: '',
            value: '',
            placeholder: '',
        },
    }

    return { simpleInput: inputs.simpleInput, email: inputs.email, password: inputs.password }
}