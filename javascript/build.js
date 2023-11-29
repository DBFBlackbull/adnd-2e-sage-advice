const pug = require('pug');
const fs = require('fs');
const path = require('path');
const sourceFolder = path.join(__dirname, '..');
const jsFolder = path.join(sourceFolder, 'javascript');
const htmlFolder = path.join(sourceFolder, 'html');
const pugFolder = path.join(sourceFolder, 'pug');

const dragonMagazines = require(path.join(jsFolder, 'sage-advice.js'));
const highLevelCampaigns = require(path.join(jsFolder, 'high-level-campaigns.js'));

let html = pug.renderFile(path.join(pugFolder, 'main.pug'), {
    pretty: true,
    dragonMagazines: dragonMagazines,
    highLevelCampaigns: highLevelCampaigns,
});
fs.writeFileSync(path.join(htmlFolder,'index.html'), html);