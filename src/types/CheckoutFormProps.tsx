import { useForm, SubmitHandler } from 'react-hook-form'
import { FormInput } from './FormInput'

export type CheckoutFormProps = {
    onSubmit: SubmitHandler<FormInput>
}
