/* eslint-env jasmine */

describe('package', () => {

  'use strict';

  let lib = require('.');

  it('returns grid', () => {

    let result = lib('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i');

    expect(result).toBe(' a | b | c \n-----------\n d | e | f \n-----------\n g | h | i ');

  });

});
