import * as yup from 'yup'
import { pt } from 'yup-locales'

yup.setLocale(pt)

export const userSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    cpf: yup.string().required().min(11).max(11)
})