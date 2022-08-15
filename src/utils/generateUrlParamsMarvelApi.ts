import MD5 from 'crypto-js/md5';

function generateUrlParamsMarvelApi() {
  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

  const timestamp = Math.floor(new Date().getTime() / 1000);

  const hashMD5 = MD5(`${timestamp}${privateKey}${publicKey}`);

  return `ts=${timestamp}&apikey=${publicKey}&hash=${hashMD5}`;
}

export default generateUrlParamsMarvelApi;
