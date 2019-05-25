const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index.js');

describe('POST /api/v1/devices', () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    })

    after((done) => {
        conn.close()
            .then(() => done())
            .catch((err) => done(err));
    })

    it('Success, Device added successfully', (done) => {
        request(app).post('/api/v1/devices')
            .send({ name: 'alarm', category: 'electronic' })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property('id');
                expect(body).to.contain.property('name');
                expect(body).to.contain.property('category');
                done();
            })
    })
})