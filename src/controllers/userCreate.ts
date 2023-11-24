import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";


export class CreateUser {
    async create(req: Request, res: Response) {
        const { name, email, cpf, adress, age, sex, profession } = req.body

        try {

            const newUser = userRepository.create({
                name,
                email,
                cpf,
                adress,
                age,
                sex,
                profession
            })

            await userRepository.save(newUser)

            return res.status(201).json(newUser)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ mensagem: "Erro interno do servidor" })
        }
    }

}