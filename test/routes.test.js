import request from 'supertest'
import app  from '../../server'

describe('Routes', () => {
  it('should be rensponse', async () => {
    const res = await request(app)
      .get('/api/')

    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('get')
  })
})
