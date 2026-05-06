const https = require('https');

const urls = [
  'https://img.icons8.com/3d-fluency/94/broom.png',
  'https://img.icons8.com/3d-fluency/94/wrench.png',
  'https://img.icons8.com/3d-fluency/94/flash-on.png',
  'https://img.icons8.com/3d-fluency/94/water-pipe.png',
  'https://img.icons8.com/3d-fluency/94/air-conditioner.png',
  'https://img.icons8.com/3d-fluency/94/lotus.png',
  'https://img.icons8.com/3d-fluency/94/hammer.png',
  'https://img.icons8.com/3d-fluency/94/insect.png',
  'https://img.icons8.com/3d-fluency/94/paint-roller.png',
  'https://img.icons8.com/3d-fluency/94/happy.png',
  'https://img.icons8.com/3d-fluency/94/worker-male.png',
  'https://img.icons8.com/3d-fluency/94/toolbox.png',
  'https://img.icons8.com/3d-fluency/94/star.png',
  'https://img.icons8.com/3d-fluency/94/shield.png',
  'https://img.icons8.com/3d-fluency/94/money-bag.png',
  'https://img.icons8.com/3d-fluency/94/ok.png',
  'https://img.icons8.com/3d-fluency/94/lock.png',
  'https://img.icons8.com/3d-fluency/94/phone.png',
  'https://img.icons8.com/3d-fluency/94/iphone-x.png',
  'https://img.icons8.com/3d-fluency/94/bullseye.png',
  'https://img.icons8.com/3d-fluency/94/calendar.png',
  'https://img.icons8.com/3d-fluency/94/rocket.png',
  'https://img.icons8.com/3d-fluency/94/waving-hand-emoji.png',
  'https://img.icons8.com/3d-fluency/94/marker.png',
  'https://img.icons8.com/3d-fluency/94/bank-building.png',
  'https://img.icons8.com/3d-fluency/94/bank-cards.png',
  'https://img.icons8.com/3d-fluency/94/wallet.png',
  'https://img.icons8.com/3d-fluency/94/bell.png',
  'https://img.icons8.com/3d-fluency/94/home.png',
  'https://img.icons8.com/3d-fluency/94/search.png',
  'https://img.icons8.com/3d-fluency/94/clipboard.png',
  'https://img.icons8.com/3d-fluency/94/user-male-circle.png',
  'https://img.icons8.com/3d-fluency/94/group.png',
  'https://img.icons8.com/3d-fluency/94/medal.png',
  'https://img.icons8.com/3d-fluency/94/company.png',
  'https://img.icons8.com/3d-fluency/94/speech-bubble-with-dots.png',
  'https://img.icons8.com/3d-fluency/94/gift.png',
  'https://img.icons8.com/3d-fluency/94/pixel-heart.png',
  'https://img.icons8.com/3d-fluency/94/battery-level.png'
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
