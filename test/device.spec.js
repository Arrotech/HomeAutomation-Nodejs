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
    beforeEach((done) => {
        Device.remove({}, (err) => {
           done();
        });
    });
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
         let device = new Device({name: "TV", category: "Electronic"})
         device.save((err, device) => {
               chai.request(server)
               .put('/devices/' + device.id)
               .send({name: "remotia", category: "controlia"})
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
         let device = new Device({name: "remotee", author: "electronica"})
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

});
