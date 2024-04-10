const {SOURCE, GAME_SYSTEM ,ATTRIBUTE} = require('../constants')

const THE_COMPLETE_DRUIDS_HANDBOOK = {
    publication_year: '1994',
    publication_month: 'August',
    publication_print: '',
    title: "The Complete Druid’s Handbook",
    shortTitle: "Druids Handbook",
    id: 'druids-handbook',
    sourceAttribute: SOURCE.DRUIDS_HANDBOOK,
    chapters: [],
};
THE_COMPLETE_DRUIDS_HANDBOOK.chapters.push({
    name: 'Chapter',
    number: '5',
    heading: 'Druidic Magic',
    sections: [
        {
            id: 'druid-sphere-expansions',
            heading: 'Optional Sphere Expansions',
            foreword: 'As detailed in Chapter 3 of the *Player’s Handbook* (p. 35), druids have access to priest spells in certain spheres and can use a variety of enchanted weapons, armor, and other magical items. This chapter expands the magic available to player characters in the druid class, adding many spells and magical items along with the new field of herbal magic.',
            entries: [
                {
                    page_number: '86',
                    entry: [
                        `Some existing Nature-related spells remain unavailable to druids due to sphere restrictions. To offer these spells to druids, DMs may expand the selection of spells accessible through certain spheres of magic:`,
                        `• *Call woodland beings* becomes part of the Animal sphere.`,
                        `• *Commune with nature* becomes part of both the Animal and Plant spheres.`,
                        `• *Insect plague* becomes part of the Animal sphere.`,
                        `• *Reincarnate* becomes part of the Animal sphere.`,
                        `An expansion does not remove a spell from a sphere that already contains it, but merely makes the spell accessible from an additional sphere or spheres.`,
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS, ATTRIBUTE.SPELL],
                },
            ]
        },
    ],
});

module.exports = THE_COMPLETE_DRUIDS_HANDBOOK;