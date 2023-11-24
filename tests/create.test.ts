const { app } = require('../src/server')
import { describe, expect, test } from '@jest/globals';
import request from 'supertest'

describe('Cadatro de usuários', () => {
    it('funciona para criar um novo usuário', async () => {
        const response = await request(app).post('/usuario')
            .send({
                "name": "Paulo",
                "email": "Paulo90@teste.com",
                "cpf": "78978978955",
                "adress": "rua",
                "age": "28",
                "sex": "Masc",
                "profession": "desenvolvedor"
            })
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(
            expect.objectContaining({
                mensagem: expect.any(String)
            })
        )

    })
})






