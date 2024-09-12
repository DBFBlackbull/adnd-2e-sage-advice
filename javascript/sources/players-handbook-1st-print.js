const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const PLAYERS_HANDBOOK = {
    publication_year: '1989',
    publication_month: 'April',
    publication_print: 'First printing',
    title: "Player’s Handbook",
    shortTitle: 'PHB',
    id: 'phb-1st-print',
    sourceAttribute: SOURCE.PHB,
    chapters: [],
};
PLAYERS_HANDBOOK.chapters.push({
    name: 'Chapter',
    number: '3',
    heading: 'Player Character Classes',
    sections: [
        {
            id: 'warrior',
            heading: 'Warriors',
            sections: [
                {
                    id: 'paladin',
                    heading: 'Paladin',
                    entries: [
                        {
                            page_number: '27',
                            entry: [
                                `**A paladin using a *holy sword* projects a circle of power** 30 feet in diameter when the sword is unsheathed and held. This power dispels hostile magic of a level up to the paladin's experience level. (A *holy sword* is a very special weapon; if your paladin acquires one, the DM will explain its other powers.)`
                            ],
                            comment: `The 30 feet diameter is corrected to 10 feet diameter in both later printings and The Complete Paladins Handbook`,
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS, ATTRIBUTE.PALADIN_HOLY_SWORD]
                        }
                    ],
                },
            ]
        },
        {
            id: 'multi-dual-class',
            heading: 'Multi-Class and Dual-Class Characters',
            sections: [
                {
                    id: 'dual-class-restrictions',
                    heading: 'Dual-Class Benefits and Restrictions',
                    entries: [
                        {
                            page_number: '45',
                            entry: [
                                `... There is no limit to the number of classes a character can acquire, as long as he has the ability scores and wants to make the change.`
                            ],
                            comment: `This is reduced to 4 classes in the Revised Player’s Handbook`,
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS, ATTRIBUTE.DUAL_CLASS_IN_GROUP]
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = PLAYERS_HANDBOOK;