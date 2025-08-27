const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const THE_COMPLETE_FIGHTERS_HANDBOOK = {
    publication_year: '1989',
    publication_month: 'December',
    publication_print: '11th Printing, May 1996',
    title: "The Complete Fighter’s Handbook",
    shortTitle: 'Fighters Handbook',
    id: 'fighters-handbook-11th-print',
    sourceAttribute: SOURCE.FIGHTERS_HANDBOOK,
    chapters: [],
};
THE_COMPLETE_FIGHTERS_HANDBOOK.chapters.push({
    name: '',
    number: '',
    heading: 'Combat Rules',
    sections: [
        {
            id: 'weapon-proficiency-slots',
            heading: 'Weapon Proficiency Slots',
            sections: [
                {
                    id: 'singe-weapon-proficiency-weapon-specialization',
                    heading: 'Singe-Weapon Proficiency, Weapon Specialization',
                    entries: [
                        {
                            page_number: '58',
                            entry: [
                                `Only single-class fighters, not paladins or rangers, can take weapon specialties. Such a character can only take one when he is first created, but may specialize in more weapons as he gains new slots.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS]
                        }
                    ],
                },
            ]
        },
    ]
});

module.exports = THE_COMPLETE_FIGHTERS_HANDBOOK;