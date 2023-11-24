import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";

export class UserDelete {
    async delete(req: Request, res: Response) {
        const { id } = req.params

        try {

            const user = await userRepository.findOneBy({ id: Number(id) })

            if (!user) {
                return res.status(404).json({ mensagem: "Usuário não encontrado!" })
            }

            await userRepository.delete({ id: Number(id) })

            return res.status(200).json({ mensagem: "Usuário excluído com sucesso!" })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ mensagem: "Erro interno do servidor!" })
        }
    }
}