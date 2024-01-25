const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const PRIESTS_SPELL_COMPENDIUM_VOLUME_1 = {
    publication_year: '1999',
    publication_month: '',
    publication_print: '',
    title: "Priest's Spell Compendium Volume One",
    shortTitle: "PSC 1",
    id: 'psc-1',
    sourceAttribute: SOURCE.PRIEST_SPELL_COMPENDIUM_1,
    chapters: [],
};
PRIESTS_SPELL_COMPENDIUM_VOLUME_1.chapters.push({
    name: 'Introduction',
    number: '',
    heading: 'How to Use This Book',
    sections: [
        {
            id: 'spheres',
            heading: 'Spheres',
            entries: [
                {
                    page_number: '4',
                    entry: [
                        `**Spheres:** Priest spells are grouped into a number of *spheres of influence*, or *spheres*. These spheres are the building blocks of a divine power's portfolio, and determine which spells are made available to priests of that faith. For the most part, the revised sphere assignments from the PLAYER'S OPTIONS: *Spells & Magic* assignments are official errata. For the purpose of this series, spheres are grouped into three categories: *Clerical Spheres*, *Druidical Spheres*, and *Specialty Spheres*. In addition, there is an *All* sphere, to which all priests have access.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS]
                },
            ],
            sections: [
                {
                    id: 'speciality-spheres',
                    heading: 'Speciality Spheres',
                    entries: [
                        {
                            page_number: '5',
                            entry: [
                                `**Optional:** If the DM wishes, speciality spheres might be made available as follows:`,
                                `**Clerics** might receive major access to Wards, and to either Law or Chaos, depending on their alignment (a neutral cleric receives one or the other but not both).`,
                                `**Druids** might receive major access to Time and to Wards, and minor access to Travelers.`,
                                `**Paladins** might receive access to Law and to War.`,
                                `**Rangers** might receive access to Travelers and to Weather`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS]
                        },
                    ]
                }

            ]
        },
    ]
});

module.exports = PRIESTS_SPELL_COMPENDIUM_VOLUME_1;