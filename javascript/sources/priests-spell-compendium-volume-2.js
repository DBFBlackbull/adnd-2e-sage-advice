const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const PRIESTS_SPELL_COMPENDIUM_VOLUME_2 = {
    publication_year: '2000',
    publication_month: '',
    publication_print: '',
    title: "Priest’s Spell Compendium Volume Two",
    shortTitle: "PSC 2",
    id: 'psc-2',
    sourceAttribute: SOURCE.PRIEST_SPELL_COMPENDIUM,
    chapters: [],
};
PRIESTS_SPELL_COMPENDIUM_VOLUME_2.chapters.push({
    name: 'Introduction',
    number: '',
    heading: 'How to Use This Book',
    sections: [
        {
            id: 'spheres',
            heading: 'Spheres',
            entries: [
                {
                    page_number: '291',
                    entry: [
                        `**Spheres:** Priest spells are grouped into a number of *spheres of influence*, or *spheres*. These spheres are the building blocks of a divine power's portfolio, and determine which spells are made available to priests of that faith. For the most part, the sphere assignment from the *Players Handbook* are given (the PLAYER'S OPTIONS: *Spells & Magic* assignments are optional.) For the purpose of this series, spheres are grouped into three categories: *Clerical Spheres*, *Druidical Spheres*, and *Specialty Spheres*. In addition, there is an *All* sphere, to which all priests have access.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS]
                },
            ],
        },
    ]
});

module.exports = PRIESTS_SPELL_COMPENDIUM_VOLUME_2;