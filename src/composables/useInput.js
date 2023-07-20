export function useInput() {
    const inputs = {
        simpleInput: {
            label: 'Input',
            icon: 'dynamic_form'
        },
        email: {
            label: 'Email',
            icon: 'mail'
        },
        password: {
            label: 'Password',
            icon: 'password'
        },
    }

    return { simpleInput: inputs.simpleInput, email: inputs.email, password: inputs.password }
}