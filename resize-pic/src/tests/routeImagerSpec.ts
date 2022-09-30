import supertest from 'supertest'
import myrouter from '../routes/routeMetier/routeImager'

const request = supertest(myrouter)
describe('Test endpoint responses', () => {
    it('gets the api endpoint with a size', async (done) => {
        const response = await request.get('/image.resize/225')
        expect(response.status).toBe(200)
        done()
    }),
        it('gets the api endpoint with length plus  size', async (done) => {
            const response = await request.get('/image.resize/length:225')
            expect(response.status).toBe(200)
            done()
        }),
        it('gets error if tring instead of number', async (done) => {
            const response = await request.get('/image.resize/test')
            expect(response.status).toBe(404)
            done()
        })
})
