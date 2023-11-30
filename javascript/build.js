const pug = require('pug');
const fs = require('fs');
const path = require('path');
const sourceFolder = path.join(__dirname, '..');
const jsFolder = path.join(sourceFolder, 'javascript');
const htmlFolder = path.join(sourceFolder, 'html');
const pugFolder = path.join(sourceFolder, 'pug');

const {SOURCE, GAME_SYSTEM, ATTRIBUTE} = require(path.join(jsFolder, 'constants.js'));
const phb = require(path.join(jsFolder, 'sources','players-handbook.js'));
const dmg = require(path.join(jsFolder, 'sources','dungeon-master-guide.js'));
const dragonMagazines = require(path.join(jsFolder, 'sources','sage-advice.js'));
const highLevelCampaigns = require(path.join(jsFolder, 'sources','high-level-campaigns.js'));
const wizardsHandbook = require(path.join(jsFolder, 'sources','wizards-handbook.js'));

let html = pug.renderFile(path.join(pugFolder, 'main.pug'), {
    pretty: true,
    sources: SOURCE,
    gameSystems: GAME_SYSTEM,
    attributes: ATTRIBUTE,
    phb: phb,
    dmg: dmg,
    dragonMagazines: dragonMagazines,
    highLevelCampaigns: highLevelCampaigns,
    wizardsHandbook: wizardsHandbook,
});
fs.writeFileSync(path.join(htmlFolder,'index.html'), html);