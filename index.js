function atob(string) {
  return Buffer.from(string, 'base64').toString('ascii');
};

function btoa(string) {
  return Buffer.from(string).toString('base64');
};

function encode(string) {
  return btoa(string);
}

function decode(string) {
  return atob(string);
}

module.exports = {
  atob,
  btoa,
  encode,
  decode,
}