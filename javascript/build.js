const pug = require('pug');
const fs = require('fs');
const path = require('path');
const sourceFolder = path.join(__dirname, '..');
const jsFolder = path.join(sourceFolder, 'javascript');
const htmlFolder = path.join(sourceFolder, 'html');
const pugFolder = path.join(sourceFolder, 'pug');

const {BOOK, GAME_SYSTEM, ATTRIBUTE} = require(path.join(jsFolder, 'constants.js'));
const dragonMagazines = require(path.join(jsFolder, 'sage-advice.js'));
const highLevelCampaigns = require(path.join(jsFolder, 'high-level-campaigns.js'));
const wizardsHandbook = require(path.join(jsFolder, 'wizards-handbook.js'));

let html = pug.renderFile(path.join(pugFolder, 'main.pug'), {
    pretty: true,
    books: BOOK,
    gameSystems: GAME_SYSTEM,
    attributes: ATTRIBUTE,
    dragonMagazines: dragonMagazines,
    highLevelCampaigns: highLevelCampaigns,
    wizardsHandbook: wizardsHandbook,
});
fs.writeFileSync(path.join(htmlFolder,'index.html'), html);