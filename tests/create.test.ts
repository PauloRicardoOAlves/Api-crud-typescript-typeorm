const {app} = require('../src/server')
import {describe, expect, test} from '@jest/globals';
const request = require('supertest')

describe('Cadatro de usuários', async () => {
    const response = await request(app).post('/usuario')
    .send({
        "name": "Paulo",
        "email": "Paulo@teste.com",
        "cpf": "12312312355",
        "adress":"rua",
        "age": "28",
        "sex": "Masc",
        "profession":"desenvolvedor"
    })
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(
        expect.objectContaining({
            mensagem: expect.any(String)
        })
    )
})