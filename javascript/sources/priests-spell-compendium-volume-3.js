const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const PRIESTS_SPELL_COMPENDIUM_VOLUME_3 = {
    publication_year: '1999',
    publication_month: '',
    publication_print: '',
    title: "Priest’s Spell Compendium Volume Three",
    shortTitle: "PSC 3",
    id: 'psc-3',
    sourceAttribute: SOURCE.PRIEST_SPELL_COMPENDIUM_3,
    chapters: [],
};
PRIESTS_SPELL_COMPENDIUM_VOLUME_3.chapters.push({
    name: 'Introduction',
    number: '',
    heading: 'How to Use This Book',
    sections: [
        {
            id: 'spheres',
            heading: 'Spheres',
            entries: [
                {
                    page_number: '579',
                    entry: [
                        `**Spheres:** Priest spells are grouped into a number of *spheres of influence*, or *spheres*. These spheres are the building blocks of a divine power's portfolio, and determine which spells are made available to priests of that faith. For the most part, the sphere assignment from the *Players Handbook* are given, however, the revised assignments from the PLAYER'S OPTIONS: *Spells & Magic* assignments are assumed to be official updates. For the purpose of this series, spheres are grouped into three categories: *Clerical Spheres*, *Druidical Spheres*, and *Specialty Spheres*. In addition, there is an *All* sphere, to which all priests have access.`
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
                            page_number: '580',
                            entry: [
                                `**Optional:** If the DM wishes, speciality spheres might be made available as follows:`,
                                `*Clerics* might receive major access to Wards, and to either Law or Chaos, depending on their alignment (a neutral cleric receives one or the other but not both).`,
                                `*Druids* might receive major access to Time and to Wards, and minor access to Travelers.`,
                                `*Paladins* might receive access to Law and to War.`,
                                `*Rangers* might receive access to Travelers and to Weather`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS]
                        },
                    ]
                }

            ]
        },
    ]
});

module.exports = PRIESTS_SPELL_COMPENDIUM_VOLUME_3;