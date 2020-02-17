const { encode, decode } = require('./index')

describe('node-base64', () => {
  it('works', () => {
    const testString = '1234567890abcdefgh!@@$(%($)#)@*#$'

    expect(decode(encode(testString))).toEqual(testString);
  });
});