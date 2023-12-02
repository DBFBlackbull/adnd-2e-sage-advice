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
    name: 'Chapter',
    number: '1',
    heading: 'Ability Scores',
    sections: [
        {
            id: 'str',
            heading: 'Strength',
            entries: [
                {
                    page_number: '20',
                    entry: [
                        `**Damage Adjustment** also applies to combat. The listed number is added to or subtracted from the dice rolled to determine the damage caused by an attack (regardless of subtractions, a successful attack roll can never cause less than 1 point of damage). For example, a short sword normally causes 1d6 points of damage (a range of 1 to 6). An attacker with Strength 17 causes one extra point of damage, for a range of 2 to 7 points of damage. The damage adjustment also applies to missile weapons, although bows must be specially made to gain the bonus; crossbows never benefit from the user's Strength.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.BOWS_AND_STRENGTH]
                }
            ]
        },
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
    name: 'Chapter',
    number: '3',
    heading: 'Player Character Classes',
    sections: [
        {
            id: 'wizard',
            heading: 'Wizard',
            entries: [
                {
                    page_number: '42',
                    entry: [
                        `Wizards cannot wear any armor, for several reasons. Firstly, most spells require complicated gestures and odd posturings by the caster and armor restricts the wearer's ability to do these properly. Secondly, the wizard spent his youth (and will spend most of his life) learning arcane languages, poring through old books, and practicing his spells. This leaves no time for learning other things (like how to wear armor properly and use it effectively). If the wizard had spent his time learning about armor, he would not have even the meager skills and powers he begins with. There are even unfounded theories that claim the materials in most armors disrupt the delicate fabric of a spell as it gathers energy; the two cannot exist side by side in harmony. While this idea is popular with the common people, true wizards know this is simply not true. If it were, how would they ever be able to cast spells requiring iron braziers or metal bowls?`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS, ATTRIBUTE.WIZARD_ARMOR, ATTRIBUTE.WIZARD_ELVEN_CHAIN]
                }
            ]
        },
        {
            id: 'multi-dual-class',
            heading: 'Multi-Class and Dual-Class Characters',
            sections: [
                {
                    id: 'multi-class-restrictions',
                    heading: 'Multi-Class Benefits and Restrictions',
                    entries: [
                        {
                            page_number: '62',
                            entry: [
                                `**Wizard:** A multi-classed wizard can freely combine the powers of the wizard with any other class allowed, although the wearing of armor is restricted. Elves wearing elven chain can cast spells in armor, as magic is part of the nature of elves. However, elven chain is extremely rare and can never be purchased. It must be given, found, or won.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS, ATTRIBUTE.WIZARD_ARMOR, ATTRIBUTE.WIZARD_ELVEN_CHAIN]
                        }
                    ]
                },
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
PLAYERS_HANDBOOK.chapters.push({
    name: 'Chapter',
    number: '5',
    heading: 'Proficiencies',
    sections: [
        {
            id: 'nwp',
            heading: 'Nonweapon Proficiencies',
            sections: [
                {
                    id: 'nwp-desc',
                    heading: 'Nonweapon Proficiency Descriptions',
                    entries: [
                        {
                            page_number: '80',
                            entry: [
                                `**Bowyer/Fletcher:** This character can make bows and arrows of the types given in Table 44.`,
                                `...`,
                                `*Option:* If a character wishes to create a weapon of truly fine quality and the DM allows it, the player can opt to use the following alternative procedure for determining the success of his attempt. When the proficiency check is made, any failure means that the weapon is useless. However, a successful check means that the weapon enables the character to add Strength bonuses to attack and damage rolls. Additionally, if the proficiency check is a natural 1, the range of the bow is increased 10 yards for all range classes or is of such fine work that it is suitable for enchantment.`
                            ],
                            comment: `This is the only reference that says bows can gain strength bonus to **attack rolls**. This must be a typo as all other references only ever mentions a bonus to **damage rolls**.`,
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.WEAPON, ATTRIBUTE.BOWS_AND_STRENGTH]
                        }
                    ]
                }
            ]
        }
    ]
});
PLAYERS_HANDBOOK.chapters.push({
    name: 'Chapter',
    number: '6',
    heading: 'Money and Equipment',
    sections: [
        {
            id: 'equipment-desc',
            heading: 'Equipment Descriptions',
            sections: [
                {
                    id: 'weapons',
                    heading: 'Weapons',
                    entries: [
                        {
                            page_number: '96',
                            entry: [
                                `**Bows:** Bows come in various shapes and sizes. The power of a bow is measured by its pull. The greater the pull, the more Strength needed to work the bow. Thus, it is possible for characters to have bows that grant them damage bonuses for high Strength (it is assumed the character has chosen a bow that has a greater pull). Likewise, characters with low Strengths suffer their usual penalties when using a bow (they are forced to use weaker bows or simply cannot draw back as far). The pull of a bow seldom prevents a character from using the weapon, only from gaining the full effect. The true test of a character's Strength comes in stringing a bow—the bow of a strong hero may simply be unstringable by a lesser man (as was Odysseus's).`,
                                `Heavier pull bows are not normally any more expensive than standard bows. The exceptions to this are those bows that enable the fighter to gain bonuses for exceptional Strength (18/01 or greater). These bows must be custom crafted and cost three to five times the normal price. These bows are also difficult to string or use effectively for those without exceptional Strength. These characters must roll a successful bend bars/lift gates roll to string or use such weapons (again, think of the test of the suitors in Odysseus’s household).`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.WEAPON, ATTRIBUTE.BOWS_AND_STRENGTH]
                        }
                    ]
                }
            ],
        }
    ]
});

module.exports = PLAYERS_HANDBOOK;