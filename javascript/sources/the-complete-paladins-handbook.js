const {SOURCE, GAME_SYSTEM ,ATTRIBUTE} = require('../constants')

const THE_COMPLETE_PALADINS_HANDBOOK = {
    publication_year: '1994',
    publication_month: 'May',
    publication_print: '',
    title: "The Complete Paladin’s Handbook",
    shortTitle: "Paladins Handbook",
    id: 'paladins-handbook',
    sourceAttribute: SOURCE.PALADINS_HANDBOOK,
    chapters: [],
};
THE_COMPLETE_PALADINS_HANDBOOK.chapters.push({
    name: 'Chapter',
    number: '2',
    heading: 'Paladin Abilities',
    sections: [
        {
            id: 'holy-sword',
            heading: 'Holy Sword',
            entries: [
                {
                    page_number: '15-16',
                    entry: [
                        `When unsheathed and held by a paladin, every holy sword projects a *circle of power* 10 feet in diameter. The paladin's hand serves as the center of the circle. The circle moves with the paladin and persists as long as he grips the sword. The sword projects the circle even if a glove, gauntlet, or bandage covers the paladin's hand.`,
                        `**Note:** The first sentence in the paragraph regarding the paladin's holy sword in Chapter 3 of the *PH* (page 27) should read: "A paladin using a *holy sword* projects a circle of power 10 feet in diameter when the sword is unsheathed and held."`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PALADIN_HOLY_SWORD],
                },
                {
                    page_number: '16',
                    entry: [
                        `Within its range, the circle of power dispels all hostile magic of a level less than or equal to the paladin's experience level and creates a magic resistance of 50%. Specifically:`,
                        `• All evil opponents within the circle are unable to cast spells, including monsters and characters of evil alignment; extraplanar, conjured, and summoned evil entities; and monsters and characters who have been charmed or controlled by evil casters. The circle neutralizes a spell the instant it's cast. Opponents may not make saving throws to resist the circle of power.`,
                        `• Evil opponents have normal use of their spell and spell-like abilities once they leave the range of the circle. However, the paladin remains immune to their spells, even when cast from outside the circle. An evil wizard can cast a *fireball* spell at a paladin, but the *fireball* dissipates as soon as it enters the circle. An evil spellcaster's attempts to mentally probe or control a paladin (with spells such as *ESP* and *magic jar*) will also fail.`,
                        `• Magical items created by evil magic won't work within the circle. Physical properties remain unchanged, however; a *sword +1* may still be wielded as a normal sword. Outside the circle, magical items function normally, but the paladin remains immune to their effects.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PALADIN_HOLY_SWORD],
                },
                {
                    page_number: '16',
                    entry: [
                        `The following restrictions also apply:`,
                        `• The paladin is always vulnerable to magic from opponents whose level exceeds his own. The paladin has the normal chances of avoiding the affects of these magical attacks.`,
                        `• The circle functions only as long as the paladin grips the holy sword. Should he sheathe or drop it, he immediately becomes vulnerable to evil magic.`,
                        `• The paladin must be conscious and in control of his own actions for the holy sword to project a circle of power. A holy sword doesn't dispel magic in the grip of a comatose or sleeping paladin.`,
                        `• An evil spellcaster may temporarily negate the magic of a holy sword, including its power to project a circle of protection, by casting *dispel magic* directly on the weapon. The holy sword may resist the spell with a successful saving throw vs. spell, using the paladin's saving-throw number. If the throw fails, the holy sword's magic is inert for 1-4 rounds.`,
                        `• A paladin is still subject to indirect effects of evil magic. If an evil spellcaster uses a *lighting bolt* spell to cause an avalanche, the paladin risks damage from falling boulders.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PALADIN_HOLY_SWORD],
                },
                {
                    page_number: '16',
                    entry: [
                        `Certain holy swords may have additional benefits and limitations. A *Holy Avenger*, for instance, inflicts +10 points of damage on chaotic evil opponents. Each holy sword described in Chapter 6 has its own special properties. In designing holy swords, the DM may use the standard benefits and limits described above, perhaps adding a +1 to +5 bonus on attack and damage rolls against certain kinds of evil opponents.
`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PALADIN_HOLY_SWORD],
                }
            ]
        },
    ],
});

module.exports = THE_COMPLETE_PALADINS_HANDBOOK;