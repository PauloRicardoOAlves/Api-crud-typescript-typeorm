import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";

export class UserUpdate {
    async update(req: Request, res: Response) {
        const { name, email, cpf, adress, age, sex, profession } = req.body

        const { id } = req.params

        try {

            let user = await userRepository.findOneBy({ id: Number(id) })

            if (user) {
                user.name = name
                user.email = email
                user.cpf = cpf
                user.adress = adress
                user.age = age
                user.sex = sex
                user.profession = profession
    
                await userRepository.save(user)

                return res.status(204).json()
            }


            return res.status(404).json({mensagem: "O usuário informado não foi encontrado"})


        } catch (error) {
            console.log(error)
            return res.status(500).json({ mensagem: "Erro interno do servidor" })
        }
    }
}