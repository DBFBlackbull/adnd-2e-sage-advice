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
    number: 'One',
    heading: 'Combat System',
    sections: [
        {
            id: '5-steps-of-combat-round',
            heading: 'The Five Basic Steps of Every Combat Round',
            sections: [
                {
                    id: 'end-of-round-resolution',
                    heading: 'Step Five: End-of-Round Resolution',
                    entries: [
                        {
                            page_number: '17',
                            entry: [
                                `After all actions have been resolved, there are several things that need to be done before the round ends. The four parts of this step are *fatigue, retreats, morale*, and *status*.`,
                                `Fatigue is a measure of the character's endurance over a prolonged combat. At the end of each round, the character checks to see if the combat has lasted long enough for him to become fatigued or exhausted.`,
                                `Retreats occur when a figure is forced to fall back by the press of the fight. This can have the effect of breaking up an enemy line or forcing the retreating character over a cliff, into quicksand, and so on.`,
                                `The DM makes morale checks for the monsters, if appropriate. Most creatures don't care to carry a losing battle to their own deaths and will try to break off the fight if things aren't going their way.`,
                                `Last but not least, characters who are suffering from spell effects, poison, or special critical hits suffer damage or fight off the effect. The exact procedure is determined by the type of condition the character is suffering from.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.DOT]
                        }
                    ]
                }
            ]
        }
    ]
})
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