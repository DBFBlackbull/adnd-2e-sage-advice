const pug = require('pug');
const fs = require('fs');
const path = require('path');
const sourceFolder = path.join(__dirname, '..');
const jsFolder = path.join(sourceFolder, 'javascript');
const htmlFolder = path.join(sourceFolder, 'html');
const pugFolder = path.join(sourceFolder, 'pug');

const {SOURCE, GAME_SYSTEM, ATTRIBUTE} = require(path.join(jsFolder, 'constants.js'));
const phb1 = require(path.join(jsFolder, 'sources','players-handbook-1st-print.js'));
const phbr = require(path.join(jsFolder, 'sources','players-handbook-revised.js'));
const dmg = require(path.join(jsFolder, 'sources','dungeon-master-guide.js'));
const age = require(path.join(jsFolder, 'sources','arms-and-equipment-guide.js'));
const wizardsHandbook = require(path.join(jsFolder, 'sources','wizards-handbook.js'));
const psionics = require(path.join(jsFolder, 'sources','psionics-handbook.js'));
const paladinsHandbook = require(path.join(jsFolder, 'sources','paladins-handbook.js'));
const waw = require(path.join(jsFolder, 'sources','the-will-and-the-way.js'));
const combatAndTactics = require(path.join(jsFolder, 'sources','combat-and-tactics.js'));
const dragonMagazines = require(path.join(jsFolder, 'sources','sage-advice.js'));
const highLevelCampaigns = require(path.join(jsFolder, 'sources','high-level-campaigns.js'));
const wsc4 = require(path.join(jsFolder, 'sources','wizards-spell-compendium-volume-4.js'));
const psc1 = require(path.join(jsFolder, 'sources','priests-spell-compendium-volume-1.js'));
const psc2 = require(path.join(jsFolder, 'sources','priests-spell-compendium-volume-2.js'));
const psc3 = require(path.join(jsFolder, 'sources','priests-spell-compendium-volume-3.js'));

let html = pug.renderFile(path.join(pugFolder, 'main.pug'), {
    pretty: true,
    sources: SOURCE,
    gameSystems: GAME_SYSTEM,
    attributes: ATTRIBUTE,
    phb1: phb1,
    phbr: phbr,
    dmg: dmg,
    age: age,
    combatAndTactics: combatAndTactics,
    dragonMagazines: dragonMagazines,
    highLevelCampaigns: highLevelCampaigns,
    wizardsHandbook: wizardsHandbook,
    psionicsHandbook: psionics,
    paladinsHandbook: paladinsHandbook,
    waw: waw,
    wsc4: wsc4,
    psc1: psc1,
    psc2: psc2,
    psc3: psc3,
});
fs.writeFileSync(path.join(htmlFolder,'index.html'), html);