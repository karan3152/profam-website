const https = require('https');

const urls = [
  'https://img.icons8.com/3d-fluency/94/pipe.png',
  'https://img.icons8.com/3d-fluency/94/plumbing.png',
  'https://img.icons8.com/3d-fluency/94/water-tap.png',
  'https://img.icons8.com/3d-fluency/94/water.png',
  'https://img.icons8.com/3d-fluency/94/bug.png',
  'https://img.icons8.com/3d-fluency/94/spider.png',
  'https://img.icons8.com/3d-fluency/94/smiling.png',
  'https://img.icons8.com/3d-fluency/94/thumb-up.png',
  'https://img.icons8.com/3d-fluency/94/smartphone.png',
  'https://img.icons8.com/3d-fluency/94/iphone.png',
  'https://img.icons8.com/3d-fluency/94/target.png',
  'https://img.icons8.com/3d-fluency/94/hand.png',
  'https://img.icons8.com/3d-fluency/94/document.png',
  'https://img.icons8.com/3d-fluency/94/note.png',
  'https://img.icons8.com/3d-fluency/94/heart.png',
  'https://img.icons8.com/3d-fluency/94/battery.png',
  'https://img.icons8.com/3d-fluency/94/full-battery.png'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        resolve(`${url} -> OK`);
      } else {
        resolve(`${url} -> ERROR ${res.statusCode}`);
      }
    }).on('error', (e) => {
      resolve(`${url} -> NETWORK ERROR`);
    });
  });
}

async function run() {
  for (const url of urls) {
    const result = await checkUrl(url);
    console.log(result);
  }
}

run();
