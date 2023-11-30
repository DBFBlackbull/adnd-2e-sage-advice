const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const PLAYERS_HANDBOOK = {
    publication_year: '1995',
    publication_month: 'April',
    publication_print: 'First Printing, May 2013',
    title: "Player's Handbook Revised",
    shortTitle: 'PHB Revised',
    id: 'phb-revised',
    sourceAttribute: SOURCE.PHB,
    chapters: [],
};
PLAYERS_HANDBOOK.chapters.push({
    number: '1',
    heading: 'Ability Scores',
    sections: [
        {
            id: 'con',
            heading: 'Constitution',
            entries: [
                {
                    page_number: '21',
                    entry: [
                        `**System Shock** states the percentage chance a character has to survive magical effects that reshape or age his body: petrification (and reversing petrification), polymorph, magical aging, etc. It can also be used to see if the character retains consciousness in particularly difficult situations. For example, an evil wizard polymorphs his dim-witted hireling into a crow. The hireling, whose Constitution score is 13, has an 85% chance to survive the change. Assuming he survives, he must successfully roll for system shock again when he is changed back to his original form or else he will die.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.MAGICAL_AGING]
                }
            ]
        },
        {
            id: 'int',
            heading: 'Intelligence',
            entries: [
                {
                    page_number: '21',
                    entry: [
                        `**Spell Immunity** is gained by those with exceptionally high Intelligence scores. Those with the immunity notice some inconsistency or inexactness in the illusion or phantasm, automatically allowing them to make their saving throws. All benefits are cumulative, thus, a character with a 20 Intelligence is not fooled by 1st- or 2nd-level illusion spells.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.INTELLIGENCE_VS_ILLUSIONS, ATTRIBUTE.INVISIBILITY]
                }
            ]
        }
    ]
});
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
                            page_number: '62',
                            entry: [
                                `... A character can acquire up to four classes, one from each group, as long as he has the ability scores and wants to make the change.`
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