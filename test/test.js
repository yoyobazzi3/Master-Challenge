/* eslint-disable no-unused-expressions */

/* eslint-disable */
import { response } from 'express'
import server from '../index'
/* eslint-enable */

const rp = require('request-promise')
const chai = require('chai')
const expect = chai.expect
require('dotenv').config()

const testURL = `http://${process.env.HOST}:${process.env.PORT}`

describe('TESTING MODULES', () => {
  describe('1. Base Route', () => {
    it('Expects a HTML page in return', done => {
      const options = {
        method: 'GET',
        url: testURL + '/basePage',
        resolveWithFullResponse: true
      }
      rp(options).then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.be.a('string')
        done()
      }).catch(err => {
        done(err)
      })
    })
  });
describe('2. Inserstion route', ()=>{
  it('Expexts to insert an item into the catalog', done =>{
    const options ={
      method: 'POST',
      url: testURL + '/',
      resolveWithFullResponse: true
    }
    rp(options).then(response => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.be.a('string', 'string');
      done()
    }).catch(err => {
      done(err);
    }) 
  })
});

describe('3. Search for product' ,()=>{
  it('Expects the item to be found by the ID', done=>{
    const options={
      method:'GET',
      url : testURL + '/search/id/6636b5aa6c9e250cf606df0e',
      resolveWithFullResponse: true
    }
    rp(options).then(response=> {
      expect(response.statusCode).to.equal(200)
      expect(response.body).to.be.a('string')
      done()
    }).catch(err=>{
      done(err);l
    })

  })
});
describe('4. Delete a product by ID', ()=>{
it('Expects to delete an product by using an ID' ,done=>{
  const options={
    method: 'DELETE',
    url: testURL + '/items/6636b5aa6c9e250cf606df0e',
    resolveWithFullResponse: true
  }
  rp(options).then(response=>{
    expect(response.statusCode).to.equal(200)
    expect(response.body).to.be.a('string')
    done()
  }).catch(err=>{
    done(err);
  })
  
})
})
describe('5. Update an item by ID', () => {
  it('Expects to update an item by ID', done => { 
    const options = {
      method: 'PUT',
      url: testURL + '/items/6636b5aa6c9e250cf606df0e',
      resolveWithFullResponse: true
    };
    rp(options).then(response => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.be.a('string','string'); 
      done();  
    }).catch(err => {
      done(err); 
    });
  });
});
describe('6. Filter by category',()=>{
  it('Expects to filter products by category', done=>{
    const options={
      method: 'GET',
      url: testURL +'/filter/ldjfnd',
      resolveWithFullResponse: true
    }
    rp(options).then(response=>{
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.be.a('string')
      done()
    }).catch(err => {
      done(err); 
    });
  })
})
describe('7. Gets all the items in the DB',()=>{
  it('Expects to print out all the items in the DB',done=>{
    const options={
      method:'GET',
      url: testURL + '/items',
      resolveWithFullResponse: true
    }
    rp(options).then(response=>{
      expect(response.statusCode).to.equal(200)
      expect(response.body).to.be.a('string')
      done()
    }).catch(err => {
      done(err); 
    });
  })
})
})
