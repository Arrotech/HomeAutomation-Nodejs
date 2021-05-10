let mongoose = require("mongoose");
let Device = require('../app/models/device.model.js');
let app = require('../index').app;
let server = require('../index').server;

const expect = require('chai').expect;
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();


chai.use(chaiHttp);

describe('Devices', () => {
    // Connect to the database where possible
    before(function (done) {
        mongoose.connect('mongodb://localhost:27017/home-automation', { useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Could not connect to the database. Exiting now...'));
        db.once('open', function () {
            console.log('Successfully connected to the database');
            done();
        });
    });
    beforeEach((done) => {
        Device.deleteOne({}, (err) => {
            done();
        });
    });
    // Get all devices
    describe('/GET home page', () => {
        it('it should GET the home page', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    done();
                });
        });
    });
    // Get all devices
    describe('/GET devices', () => {
        it('it should GET all the devices', (done) => {
            chai.request(server)
                .get('/devices')
                .end((err, res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
    //Post a device
    describe('/POST devices', () => {
        it('it should POST a book ', (done) => {
            let device = {
                name: "TV",
                category: "Electronic",
            }
            chai.request(server)
                .post('/devices')
                .send(device)
                .end((err, res) => {
                    const body = res.body;
                    console.log(res.body);
                    expect(body).to.contain.property('name');
                    expect(body).to.contain.property('category');
                    done();
                });
        });
        it('it should not POST a book with an empty name field', (done) => {
            let device = {
                name: "",
                category: "Electronic",
            }
            chai.request(server)
                .post('/devices')
                .send(device)
                .end((err, res) => {
                    const body = res.body;
                    console.log(res.body);
                    expect(body.message).to.equal('Device name can not be empty');
                    done();
                });
        });
        it('it should not POST a book with an empty category name', (done) => {
            let device = {
                name: "TV",
                category: "",
            }
            chai.request(server)
                .post('/devices')
                .send(device)
                .end((err, res) => {
                    const body = res.body;
                    console.log(res.body);
                    expect(body.message).to.equal('Device category can not be empty');
                    done();
                });
        });
    });
    /*
     * Test the /GET/:id route
     */
    describe('/GET/:id device', () => {
        it('it should GET a device by the given id', (done) => {
            let device = new Device({ name: "alarm", category: "electronic" });
            device.save((err, device) => {
                chai.request(server)
                    .get('/devices/' + device.id)
                    .send(device)
                    .end((err, res) => {
                        console.log(res.body);
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        res.body.should.have.property('category');
                        res.body.should.have.property('_id').eql(device.id);
                        done();
                    });
            });

        });
    });
    /*
     * Test the /PUT/:id route
     */
    describe('/PUT/:id device', () => {
        it('it should UPDATE a device given the id', (done) => {
            let device = new Device({ name: "TV", category: "Electronic" })
            device.save((err, device) => {
                chai.request(server)
                    .put('/devices/' + device.id)
                    .send({ name: "remotia", category: "controlia" })
                    .end((err, res) => {
                        console.log(res.body);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });
    /*
     * Test the /DELETE/:id route
     */
    describe('/DELETE/:id device', () => {
        it('it should DELETE a device given the id', (done) => {
            let device = new Device({ name: "remotee", author: "electronica" })
            device.save((err, device) => {
                chai.request(server)
                    .delete('/devices/' + device.id)
                    .end((err, res) => {
                        console.log(res.body);
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Device deleted successfully!');
                        done();
                    });
            });
        });
    });
    // Close the database connection
    after(function (done) {
        mongoose.connection.db.dropDatabase(function () {
            mongoose.connection.close(done);
        });
    });

});
