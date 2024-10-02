let tzoffset = (new Date()).getTimezoneOffset() * 60000;
let localISOTime = (new Date(Date.now() - tzoffset)).toISOString();

module.exports = localISOTime
