const request = require('supertest')
const app = require('../app')
const mongoose = require('mongoose');
const Todos = require('../models/Todos');

describe('Todo API GET', () => {
    //GET /todos should response with a 200 status code
    it('GET /todos should response with a 200 status code', () => {
        return request(app).get('/todos/get-todos').expect(200)
    })
    //GET /todos should json in the content type header
    it('GET /todos should json in the content type header', () => {
        return request(app).get('/todos/get-todos').expect('Content-Type', /json/)
    })
    //GET /todos should response containing an array and specify type of value
    it('GET /todos should response containing an array and specify type of value', () => {
        return request(app).get('/todos/get-todos')
            .then((response) => {
                expect(response.body).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        _id: expect.any(String),
                        isComplete: expect.any(Boolean),
                        text: expect.any(String)
                    })
                ]))
            })
    })
})

describe('Todo API POST', () => {
    it('POST /todos should response with a 200 status code', () => {
        return request(app).post('/todos/create-todo')
            .send({ text: 'IntegrationTestDataCode001' })
            .expect(200)
    })

    it('POST /todos should json in the content type header', () => {
        return request(app).post('/todos/create-todo')
            .send({ text: 'IntegrationTestDataCode001' })
            .expect('Content-Type', /json/)
    })

    it('POST /todos response with status true', () => {
        return request(app).post('/todos/create-todo')
            .send({ text: 'IntegrationTestDataCode001' })
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        status: true
                    })
                )
            })
    })
})