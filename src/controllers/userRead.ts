import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";


export class ReadUser {
    async read(req: Request, res: Response) {

        const { id } = req.query

        try {

            if (id) {
                const user = await userRepository.findOneBy({ id: Number(id) })

                if (!user) {
                    return res.status(404).json({ mensagem: 'O usuário informado não foi encontrado' })
                }

                return res.status(200).json(user)
            }

            const users = await userRepository.find()

            return res.status(200).json(users)

        } catch (error: any) {
            console.log(error)
            return res.status(500).json({ mensagem: 'Erro interno do servidor' })
        }
    }
}