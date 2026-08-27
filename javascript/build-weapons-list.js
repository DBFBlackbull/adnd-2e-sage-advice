const pug = require('pug');
const fs = require('fs');
const path = require('path');
const sourceFolder = path.join(__dirname, '..');
const jsFolder = path.join(sourceFolder, 'javascript');
const htmlFolder = path.join(sourceFolder, 'html');
const pugFolder = path.join(sourceFolder, 'pug');

const {SOURCE} = require(path.join(jsFolder, 'constants.js'));
const weapons = require(path.join(jsFolder, 'sources','weapons.js'));

// const booksPriority = [
//     {book: 'PHB', print: 'First Printing May 2013'},
//     {book: 'The Complete Fighter's Handbook', print: '11th Printing, May 1996'},
//     {book: 'The Complete Thief's Handbook', print: 'November 1993'},
//     {book: 'The Complete Priest's Handbook', print: 'Seventh printing, October 1996'},
//     {book: 'The Complete Wizard's Handbook', print: '10th printing, March 1996'},
//     {book: 'The Complete Psionics Handbook', print: 'Ninth printing: October 1996'},
//     {book: 'Tome of Magic', print: 'Seventh Printing: March, 1996'},
//     {book: 'Arms and Equipment Guide', print: 'Fifth Printing: January 1994'},
//     {book: 'The Complete Book of Dwarves', print: 'November 1993'},
//     {book: 'The Complete Bard's Handbook', print: 'Fourth printing, November 1994'},
//     {book: 'The Complete Book of Elves', print: ''},
//     {book: 'The Complete Book of Humanoids', print: 'Sixth printing, March 1999'},
//     {book: 'The Complete Ranger's Handbook', print: 'Fifth printing, July 1995'},
//     {book: 'The Complete Paladin's Handbook', print: ''},
//     {book: 'The Complete Druid's Handbook', print: ''},
//     {book: 'The Complete Barbarian's Handbook', print: ''},
//     {book: 'The Complete Book of Necromancers', print: ''},
//     {book: 'The Complete Ninja's Handbook', print: '2nd printing, March 1996'},
//     {book: 'Player's Option: Combat & Tactics', print: ''},
//     {book: 'Player's Option: Skills & Powers', print: ''},
//     {book: 'Player's Option: Spells & Magic', print: ''},
// ];
const bookPriority = [
    SOURCE.PHB,
    SOURCE.FIGHTERS_HANDBOOK,
]
for (const [weaponKey, weaponObj] of Object.entries(weapons)) {
    let fileName = weaponKey.replaceAll("_", "-").toLowerCase()
    fileName += '.html'
    console.log("Building " + fileName)
    let html = pug.renderFile(path.join(pugFolder, 'weapons-list', 'weapon.pug'), {
        pretty: true,
        bookPriority: bookPriority,
        weaponObj: weaponObj,
    });

    fs.writeFileSync(path.join(htmlFolder, 'weapons', fileName), html)
}


// var weaponsOrder = Object.entries(weapons).toSorted(([aKey, aVal], [bKey, bVal]) => {
//     let aSortingGroup = Object.values(aVal).find(v => v.sorting_group);
//     let bSortingGroup = Object.values(bVal).find(v => v.sorting_group);
//     if (aSortingGroup && bSortingGroup) {
//         let sortGroup = aSortingGroup.localeCompare(bSortingGroup);
//         if (sortGroup === 0) {
//             return aKey.localeCompare(bKey);
//         }
//
//         return sortGroup;
//     }
//
//     if (aSortingGroup) {
//         return aSortingGroup.localeCompare(bKey)
//     }
//
//     if (bSortingGroup) {
//         return aKey.localeCompare(bSortingGroup)
//     }
//
//     return aKey.localeCompare(bKey);
// });

// let html = pug.renderFile(path.join(pugFolder, 'weapons-list', 'main.pug'), {
//     pretty: true,
//     weapons: weapons,
// });
// fs.writeFileSync(path.join(htmlFolder,'weapons-list.html'), html);