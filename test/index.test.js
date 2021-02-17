const { expect } = require('chai');
const addition =require('../index')

describe('check add function:-', () => {
    it('Should validate addition', (done) => {
        let check = addition.add(1,3)
        expect(check).to.equal(4);
        done()
    });
})

