const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const PLAYERS_HANDBOOK = {
    publication_year: '1989',
    publication_month: 'April',
    publication_print: 'First printing',
    title: "Player's Handbook",
    shortTitle: 'PHB',
    id: 'phb-revised',
    sourceAttribute: SOURCE.PHB,
    chapters: [],
};
PLAYERS_HANDBOOK.chapters.push({
    number: '3',
    heading: 'Player Character Classes',
    sections: [
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
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS, ATTRIBUTE.DUAL_CLASS_IN_GROUP]
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = PLAYERS_HANDBOOK;