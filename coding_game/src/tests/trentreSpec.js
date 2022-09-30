const { calcultrente } = require('../trente.js');

describe('calcultrente', () => {

    it('expect calcultrente [10,8,12,14,16,20] ', () => {
      expect(calcultrente ([10,8,12,14,16,20])).toBeTrue();
    });
    
    it('expect calcultrente ([10,27,14,1],', () => {
        expect(calcultrente ([10,27,14,1])).toBeFalse();
      });
    })