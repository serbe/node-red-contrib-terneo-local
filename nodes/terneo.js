import got from 'got';

const { data } = await got.post('http://192.168.15.82/api.cgi', {
    json: { "cmd": 4 }
}).json();

console.log(data);