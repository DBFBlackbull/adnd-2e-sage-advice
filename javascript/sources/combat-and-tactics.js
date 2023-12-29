const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const COMBAT_AND_TACTICS = {
    publication_year: '1995',
    publication_month: 'June',
    publication_print: '2nd Printing, Nov 1995.',
    title: "PLAYER'S OPTION™: Combat & Tactics",
    shortTitle: 'C&T',
    id: 'c-and-t',
    sourceAttribute: SOURCE.COMBAT_AND_TACTICS,
    chapters: [],
};
COMBAT_AND_TACTICS.chapters.push({
    name: 'Chapter',
    number: 'Seven',
    heading: 'Weapons & Armor',
    sections: [
        {
            id: 'master-weapon-list',
            heading: 'Master Weapon List',
            sections: [
                {
                    id: 'weapon-desc',
                    heading: 'Weapon  Description',
                    entries: [
                        {
                            page_number: '134',
                            entry: [
                                `**Bow.** One of the most common weapons throughout history is the bow. The simple self bow, or short bow, has been used for hunting and war since before the dawn of civilization. If a bow is made from a single piece of wood, it is a plain long or short bow; if it is made from laminated horn, wood, bone, or any other materials, it is a composite bow.`,
                                `If a character has an unusually low Strength score, he *must* apply any attack or damage penalties to his archery. He is forced to use bows that have a lighter pull. However, for a character to gain his bonuses for a high Strength score, he must get a custom-made bow, which costs 3-5 times the normal price. A higher-Strength character can always use a lower-Strength bow, gaining bonuses up to the maximum permitted by the bow. For example, a character with a Strength of 18/35 can use a bow made for a Strength of 17, gaining a +1 to hit and +1 to damage instead of his normal full bonuses.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.WEAPON, ATTRIBUTE.BOWS_AND_STRENGTH]
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = COMBAT_AND_TACTICS;