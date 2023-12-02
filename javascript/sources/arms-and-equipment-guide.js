const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const ARMS_AND_EQUIPMENT_GUIDE = {
    publication_year: '1991',
    publication_month: 'July',
    publication_print: 'Fifth Printing: January 1994',
    title: "Arms and Equipment Guide",
    shortTitle: 'A&EG',
    id: 'aeg',
    sourceAttribute: SOURCE.AEG,
    chapters: [],
};
ARMS_AND_EQUIPMENT_GUIDE.chapters.push({
    name: 'Chapter',
    number: '3',
    heading: 'Weapons',
    sections: [
        {
            id: 'bow',
            heading: 'Bow',
            sections: [
                {
                    id: 'composite-bows',
                    heading: 'Composite Bows',
                    entries: [
                        {
                            page_number: '59',
                            entry: [
                                `An adventurer who wishes to gain a damage bonus from high Strength when wielding a bow must purchase specially crafted bows. Such a bow costs the normal price for a bow *plus the normal price again for every bonus point desired*. Thus, a warrior with 17 Strength who wants a long bow (base cost 75 gp) that gives him his +1 bonus to damage rolls would have to pay a total of 150 gp. The same fighter with 18/00 Strength (+6 bonus to damage) would pay 525 gp. These bows can be strung and drawn only by characters of that Strength or higher. Others attempting this must make a successful bend bars/lift gates roll.`
                            ],
                            comment: [
                                `This pricing scheme matches Sage Advice #141, but no the 2E ***PHB*** which only starts adding the price when you reach exceptional strength.`,
                                `Note how the bow in the example is a regular long bow and not a composite bow, which is confusing as the description is written under the composite bow heading. This is in contrast to Sage Advice #272 that states the ***A&GE*** requires a composite bow.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.WEAPON, ATTRIBUTE.BOWS_AND_STRENGTH]
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = ARMS_AND_EQUIPMENT_GUIDE