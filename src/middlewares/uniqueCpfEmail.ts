import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import { userSchema } from "../schemas/userValidation";


export class UserValidate {
    async validate(req: Request, res: Response, next: NextFunction) {


        try {

            await userSchema.validate(req.body)
            const { cpf, email } = req.body

            const cpfExist = await userRepository.findOneBy({ cpf })

            const emailExist = await userRepository.findOneBy({ email })

            if (cpfExist || emailExist) {
                return res.status(400).json({ mensagem: "O e-mail ou o cpf informado já está cadastrado!" })
            }

            next()

        } catch (error: any) {
            return res.status(400).json({ erro: error.errors[0] })
        }
    }

}



