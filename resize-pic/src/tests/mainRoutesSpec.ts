import supertest from 'supertest'
import myrouter from '../routes/mainRoutes'

const request = supertest(myrouter)
describe('Test endpoint responses', () => {
    it('gets the root endpoint', async (done) => {
        const response = await request.get('/')
        expect(response.status).toBe(200)
        done()
    }),
        it('gets the main endpoint', async (done) => {
            const response = await request.get('/main')
            expect(response.status).toBe(200)
            done()
        })

    it('cannot accpet form wrong endpoint', async (done) => {
        const response = await request.get('/pistache')
        expect(response.status).toBe(404)
        done()
    })
})
