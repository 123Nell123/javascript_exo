import supertest from 'supertest'
import myapp from '../routes/mainRoutes'

const request = supertest(myapp)
describe('Test the api', () => {
    it('return a file', () => {
        expect(request).not.toBeNull
    })
})
