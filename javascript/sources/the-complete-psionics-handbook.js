const {SOURCE, GAME_SYSTEM ,ATTRIBUTE} = require('../constants')

const THE_COMPLETE_PSIONICS_HANDBOOK = {
    publication_year: '1991',
    publication_month: 'January',
    publication_print: '9th printing, October 1996',
    title: "The Complete Psionics Handbook",
    shortTitle: "Psionics Handbook",
    id: 'psionics-handbook',
    sourceAttribute: SOURCE.PSIONICS_HANDBOOK,
    chapters: [],
};
THE_COMPLETE_PSIONICS_HANDBOOK.chapters.push({
    name: 'Chapter',
    number: '9',
    heading: 'A Psionics Campaign',
    sections: [
        {
            id: 'psionics-magic',
            heading: 'Psionics and Magic',
            foreword: [
                `Psionics and magic are completely separate forces. Some of their effects overlap, as might be expected, since some effects are so useful that everyone who can get them probably will try. For example, both psionics and magic-users have a means of becoming invisible, traveling instantaneously, and controlling other people or creatures. But in their basic makeup, magic and psionics are like oil and water; they do not mix. The text below offers some general guidelines and specific rules for the interaction magic and psionics`,
            ],
            sections: [
                {
                    id: 'general-guidelines',
                    heading: 'General Guidelines',
                    entries: [
                        {
                            page_number: '109',
                            entry: [
                                `• The essence of magic and psionics are wholly different. A wizard or cleric who can *detect magic* will never detect psionics. Nor will a psionicist who scans for psionic activity ever detect spell-casting. This hold true even if the effect of a particular magical and psionic skill is identical, or nearly identical. For example, a wizard can use *hold portal* to hold a door shut. In his own way, using psychokinesis, so can a psionicist. If a psionicist is holding a door shut, and a wizard casts *detect magic* on the door, the wizard will find nothing unusual about it. If the wizard casts *dispel magic*, the door will not open. No magical forces are at work on the door.`,
                                `Exceptions do exist. but they're fairly easy to determine. For example, a wizard who casts a *detect invisibility* spell will see a character using psionic invisibility because the spell description states specifically that the spell does not discriminate between types of invisibility.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS, ATTRIBUTE.INVISIBILITY]
                        },
                        {
                            page_number: '109-110',
                            entry: [
                                `• Magic is capable of duplicating psionic effects like ESP, clairvoyance, clairaudience, teleportation, and levitation, among others. Again, however, the energy involved is magical, not psionic. So normal psionic powers do not detect these magicks.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `• Magical images and illusions manipulate light, sound, and scent. That means they can affect psionic powers which rely on or expand the normal senses: clairvoyance, clairaudience, all-around vision, feel light, etc. Using any psychometabolic, psychokinetic, telepathic, or psychoportive power against a magical illusion automatically gives the psionicist cause to make a saving throw vs. spells. Depending on the situation, the DM may rule that the use of such power penetrates an illusion automatically.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `• Magical phantasms, on the other hand, operate entirely in the mind of the viewer. A psionicist using any power against a phantasm automatically gets to make a saving throw vs. spell to penetrate the phantasm. (The psionicist is too tuned into his own mind to be easily fooled this way.)`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                    ]
                },
                {
                    id: 'spells-and-psionics',
                    heading: 'Spells and Psionics',
                    entries: [
                        {
                            page_number: '110',
                            entry: [
                                `*Anti-Magic Shell.* This spell has no effect against psionics.`
                            ],
                            comment: `In DMGR:HLC and Sage Advice #249 it is stated that ***antimagic shell*** works against psionics.`,
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Detect Charm.* This will detect telepathic control such as domination.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS, ATTRIBUTE.CHARM]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Detect Invisibility.* This spell is effective against psionic invisibility, astral travelers, shadow form, and ethereal characters. It is not effective against characters in other dimensions.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS, ATTRIBUTE.INVISIBILITY]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Detect Magic.* This never detects psionic activity.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Detect Scrying.* When this spell is used against a clairvoyant psionicist, he must make a saving throw vs. spells. If successful, the clairvoyant avoids detection.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*ESP.* A Psionicist always gets a saving throw against this spell with a +2 bonus. Success negates the spell.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*False Vision.* The psionicist is allowed a saving throw vs. spells to negate the effect og this spell.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Forbiddance.* None of the teleportation or metabolic powers can breach this spell.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Free Action.* This spell overcomes all psychokinetic effects against the subject's body, plus domination.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS, ATTRIBUTE.CHARM]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Globe of Invulnerability.* Psionics are unaffected by globes.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Magic Jar.* The psionicist uses his combined Wisdom and Constitution scores when determining the differential modifier.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Magic Missile.* This spell has no effect inside a stasis field.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Mind Blank.* The psionicist is allowed a saving throw vs. spells to overcome this spell.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Minor Globe of Invulnerability.* Psionics are unaffected by globes.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Misdirection.* This spell affects magical detection only.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Mislead.* Any psionicist who tries to contact the wizard's mind will realize the deception immediately. That first contact attempt will fail automatically, however.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Nondetection.* This spell is fully effective against psionic sensing.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Otiluke's Resilient Sphere.* Psionic powers cannot penetrate this spells protection.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Protection From Evil.* All telepathic powers used against someone protected from evil have their power scores reduced by 2. Additionally, the spell prevents mental control such as domination.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS, ATTRIBUTE.CHARM]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Protection from Evil, 10' Radius.* Same as *protection from evil.*`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS, ATTRIBUTE.CHARM]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Reincarnation.* Unless the new incarnation is allowable in the psionicist class, all psionic powers are lost.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Spell Immunity.* This has no effect against psionic powers.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110',
                            entry: [
                                `*Telekinesis.* If this spell is opposed by psychokinesis, conduct a psychic contest between the psionicist's power score and the wizard's experience level.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '110-111',
                            entry: [
                                `*Trap the Soul.* A psionicist trapped via this spell cannot use any of his psionic powers. (Although the character's body is trapped along with his soul, it is stored in a radically altered, magical form. Thus the psionicist is denied access to the physical energy which is the basis for all his powers.)`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '111',
                            entry: [
                                `**Note:** As stated in Chapter 1, all psionicists gain a +2 bonus when making a saving throw vs. any enchantment/charm spell.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                    ]
                },
                {
                    id: 'magical-items',
                    heading: 'Magical Items',
                    entries: [
                        {
                            page_number: '111',
                            entry: [
                                `The same guidelines which apply to spells also apply to magical items, their effects, and the interplay between them and psionics. One item in particular, however, deserves special mention—the *philosopher's stone.*`,
                                `For reasons that are unknown, a *philosopher's stone* aids a psionicist in shaping energy. As long as the stone is in contact with the psionicist's flesh, all psionic power scores in his primary discipline are increased by one. If the stone is of the rare, crystalline salt variety, it increases his power scores in his primary discipline and one other discipline of the character's choice. If it is the extremely rare white powder stone, it boosts his power scores in his primary discipline, and allows him to recover psionic strength points at twice the normal rate.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = THE_COMPLETE_PSIONICS_HANDBOOK;