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
                    page_number: '19-20',
                    entry: [
                        `**Hit Probability** adjustments are added to or subtracted from the attack roll rolled on 1d20 (one 20-sided die) during combat. A bonus (positive number) makes the opponent easier to hit; a penalty (negative number) makes him harder to hit.`
                    ],
                    comment: 'The DMG explicitly tells that this bonus is also included for hurled weapons and bows.',
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.BOWS_AND_STRENGTH]
                },
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
    number: '2',
    heading: 'PC Races',
    sections: [
        {
            id: 'other-characteristics',
            heading: 'Other Characteristics',
            entries: [
                {
                    page_number: '32-33',
                    entry: [
                        `As a character ages, his ability scores are affected. Upon reaching one-half of his base maximum age (45 for a human), the character loses 1 point of Strength (or half of his exceptional Strength rating) and 1 point of Constitution, but gains 1 point each of Intelligence and Wisdom. At two-thirds of his base maximum age (60 for a human), the character loses 2 more points of Strength (or all his exceptional Strength and 1 point more), 2 points of Dexterity, and 1 more point of Constitution, but he gains 1 point of Wisdom. Upon reaching the base maximum age, the character loses 1 more point from each of Strength, Dexterity, and Constitution, while gaining 1 more point in both Intelligence and Wisdom. All aging adjustments are cumulative. See Table 12 for a summary of these effects.`
                    ],

                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.MAGICAL_AGING]
                },
                {
                    page_number: '33',
                    entry: [
                        `There may be times when a magical device or spell adds years to or subtracts years from a player character's life. This magical aging can have two different effects. Some magical aging physically affects the character. For example, a *haste* spell ages those it affects by one year. This aging is added directly to the player character's current age. He physically acquires the appearance of himself one year older (a few more wrinkles, etc.). Characters who increase in age from magical effects do not gain the benefits of increased Wisdom and Intelligence—these are a function of the passage of game time—but the character does suffer the physical losses to Strength, Dexterity, and Constitution associated with aging. These are breakdowns of the body's systems. Physical age can also be removed in the same manner. Some potions give years back to the character. In this case, the physical appearance of the character is restored. The character can regain lost vigor (Str, Dex, and Con) as his body is renewed but he does not lose any of the benefits of aging (Wis and Int).`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.MAGICAL_AGING]
                }
            ]
        },
    ]
});
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
                            page_number: '39',
                            entry: [
                                `**A paladin using a *holy sword* projects a circle of power** 10 feet in diameter when the sword is unsheathed and held. This power dispels hostile magic of a level up to the paladin's experience level. (A *holy sword* is a very special weapon; if your paladin acquires one, the DM will explain its other powers.)`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CLASS, ATTRIBUTE.PALADIN_HOLY_SWORD]
                        }
                    ],
                },
            ]
        },
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
                                `Heavier pull bows are not normally any more expensive than standard bows. The exceptions to this are those bows that enable the fighter to gain bonuses for exceptional Strength (18/01 or greater). These bows must be custom crafted and cost three to five times the normal price. These bows are also difficult to string or use effectively for those without exceptional Strength. These characters must roll a successful bend bars/lift gates roll to string or use such weapons (again, think of the test of the suitors in Odysseus's household).`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.WEAPON, ATTRIBUTE.BOWS_AND_STRENGTH]
                        }
                    ]
                }
            ],
        }
    ]
});
PLAYERS_HANDBOOK.chapters.push({
    name: 'Appendix',
    number: '6',
    heading: 'Notes on Spells',
    sections: [
        {
            id: '',
            heading: '',
            entries: [
                {
                    page_number: '168',
                    entry: [
                        `**Range:** This lists the distance from the caster at which the spell effect occurs or begins. A “0” indicates the spell can be used on the caster only, with the effect embodied within or emanating from him. “Touch” means the caster can use the spell on others if he can physically touch them. Unless otherwise specified, all other spells are centered on a point visible to the caster and within the range of the spell. The point can be a creature or object if desired. In general, a spell that affects a limited number of creatures within an area affects those closest to the center first, unless there are other parameters operating (such as level or Hit Dice). Spells can be cast through narrow openings only if both the caster's vision and the spell energy can be directed simultaneously through the opening. A wizard standing behind an arrow slit can cast through it; sending a fireball through a small peephole he is peering through is another matter.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.BLINDNESS]
                }
            ],
        }
    ]
});

module.exports = PLAYERS_HANDBOOK;