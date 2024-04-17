const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const SPELLS_AND_MAGIC = {
    publication_year: '1996',
    publication_month: 'May',
    publication_print: 'First Printing, May 1996',
    title: "PLAYER’S OPTION™: Spells & Magic",
    shortTitle: 'S&M',
    id: 's-and-m',
    sourceAttribute: SOURCE.SPELLS_AND_MAGiC,
    chapters: [],
};
SPELLS_AND_MAGIC.chapters.push({
    name: 'Appendix',
    number: '3',
    heading: 'Wizard Spells by School',
    sections: [
        {
            id: 'universal-magic',
            heading: 'Universal Magic',
            foreword: `**Barred:** None`,
            entries: [
                {
                    page_number: '180',
                    entry: [
                        `Cantrip (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Comprehend Languages/Confuse Languages (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Detect Magic (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Hold Portal (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Identify (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Read Magic (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Wizard Mark (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Knock/Lock (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Protection from Cantrips (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Wizard Lock (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Dispel Magic (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Remove Curse/Bestow Curse (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Teleport (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Enchant an Item (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Teleport Without Error (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Permanency (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Astral Spell (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'abjuration',
            heading: 'Abjuration',
            foreword: `**Barred:** Illusionists, transmuters, shadow mages`,
            entries: [
                {
                    page_number: '180',
                    entry: [
                        `Alarm (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Protection from Evil/Protection from Good (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Protection from Hunger and Thirst (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Protection from Vermin (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Filter (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Protection from Cantrips (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Protection from Paralysis (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Protection from Poison (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Invisible Mail (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Iron Mind (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Lesser Sign of Sealing (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Nondetection (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Protection from Amorphs (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Protection from Evil, 10' Radius/Protection from Good, 10' Radius (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Protection from Normal Missiles (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Fire Aura (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Fire Trap (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Halo of Eyes (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Minor Globe of Invulnerability (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Minor Spell Turning (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Otiluke's Dispelling Screen (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Psychic Protection (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Avoidance/Attraction (5th)`
                    ],
                    comment: 'Fixed spelling "voidance" -> "Avoidance". Fixed spell level 4th -> 5th',
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Dismissal (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Invulnerability to Normal Weapons (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Lower Resistance (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Mordenkainen's Private Sanctum (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Proofing vs. Combustion (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Safeguarding (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Von Gasik's Refusal (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Antimagic Shell (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Dragon Scales (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Globe of Invulnerability (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Greater Sign of Sealing (6th)`
                    ],
                    comment: 'Fixed level 4th -> 6th',
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Invulnerability to Magical Weapons (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Repulsion (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Banishment (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Neutralize Gas (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Sequester (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Seven-eyes (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Spell Turning (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Fear Ward (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Mind Blank (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Serten's Spell Immunity (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Elemental Aura (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Imprisonment/Freedom (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Prismatic Sphere (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'alteration',
            heading: 'Alteration',
            foreword: `**Barred:** Abjurers, force mages`,
            entries: [
                {
                    page_number: '180',
                    entry: [
                        `Affect Normal Fires (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Burning Hands (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Chromatic Orb (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Color Spray (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Dancing Lights (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Enlarge/Reduce (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Erase (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Expeditious Retreat (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Feather Fall (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Fire Burst (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Fist of Stone (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Gaze Reflection (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Jump (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Lasting Breath (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Light (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Mending (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Message (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Metamorphose Liquids (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Murdock's Feathery Flyer (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Shocking Grasp (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Spider Climb (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Alter Self (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Cat's Grace (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Continual Light (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Darkness, 15' radius (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Deeppockets (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Displace Self (2nd)`
                    ],
                    comment: 'Fixed level 3rd -> 2nd',
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Fog Cloud (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Fools' Gold (2nd)`
                    ],
                    comment: `Fixed spelling "Fool's Gold" -> "Fools' Gold"`,
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Irritation (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Levitate (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Magic Mouth (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Maximilian's Earthen Grasp (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Moon Rune (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Pyrotechnics (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Ride the Wind (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Rope Trick (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Sense Shifting (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Shatter (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Strength (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Vocalize (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Whispering Wind (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Alacrity (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Blink (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Delude (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Explosive Runes (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Far Reaching I (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Fly (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Gust of Wind (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Haste (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Infravision (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Item (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Leomund's Tiny Hut (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Maximilian's Stony Grasp (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Melf's Minute Meteors (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Secret Page (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Slow (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Snapping Teeth (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Squaring the Circle (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Tongues/Babble (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Water Breathing/Air Breathing (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Wind Wall (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Wraithform (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Dilation I (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Dimension Door (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Extension I (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Far Reaching II (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Fire Shield (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Improved Strength (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Leomund's Secure Shelter (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Massmorph (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Mordenkainen's Celerity (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Otiluke's Resilient Sphere (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Plant Growth (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Polymorph Other (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Polymorph Self (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Rainbow Pattern (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Rary's Mnemonic Enhancer (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Solid Fog (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Stoneskin (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Turn Pebble to Boulder/Turn Boulder to Pebble (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Ultravision (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '180',
                    entry: [
                        `Vacancy (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Wizard Eye (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Airy Water (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Animal Growth/Shrink Animal (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Avoidance/Attraction (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Distance Distortion (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Extension II (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Fabricate (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Far Reaching III (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Improved Blink (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Leomund's Hidden Lodge (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Leomund's Secret Chest (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Lower Resistance (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Mordenkainen's Private Sanctum (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Passwall (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Rary'S Telepathic Bond (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Rusting Grasp (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Stone Shape (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Telekinesis (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Transmute Rock to Mud/Transmute Mud to Rock (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Claws of the Umber Hulk (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Control Weather (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Death Fog (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Dilation II (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Disintegrate (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Extension III (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Glassee (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Guards and Wards (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Lower Water/Raise Water (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Mirage Arcana (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Mordenkainen's Lucubration (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Move Earth (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Otiluke's Freezing Sphere (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Part Water (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Project Image (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Stone to Flesh/Flesh to Stone (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Superior Magnetism (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Tenser's Transformation (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Tentacles (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Transmute Water to Dust/Improved Create Water (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Duo-dimension (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Hatch the Stone from the Egg (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Mordenkainen's Magnificent Mansion (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Phase Door (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Reverse Gravity (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Statue (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Suffocate (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Vanish (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Abi-Dalzim's Horrid Wilting (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Airboat (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Glassteel (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Incendiary Cloud (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Iron Body (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Otiluke's Telekinetic Sphere (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Polymorph Any Object (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Sink (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Crystalbrittle (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Estate Transference (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Glorious Transmutation (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Mordenkainen's Disjunction (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Shape Change (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Succor/Call (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Temporal Stasis/Temporal Reinstatement (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Time Stop (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'conjuration-summoning',
            heading: 'Conjuration/Summoning',
            foreword: `**Barred:** Diviners, invokers`,
            entries: [
                {
                    page_number: '181',
                    entry: [
                        `Armor (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Conjure Spell Component (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Find Familiar (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Grease (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Mount (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Unseen Servant (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Choke (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Glitterdust (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Melf's Acid Arrow (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Summon Swarm (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Wall of Gloom (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Bands of Sirellyn (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Flame Arrow (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Monster Summoning I (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Phantom Steed (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Sepia Snake Sigil (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Snapping Teeth (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Solvent of Corrosion (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Watery Double (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Conjure Elemental-Kin (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Duplicate (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Evard's Black Tentacles (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Halo of Eyes (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Monster Summoning II (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Summon Lycanthrope (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Vitriolic Sphere (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Conjure Elemental (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Khazid's Procurement (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Leomund's Secret Chest (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Monster Summoning III (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Mordenkainen's Faithful Hound (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Summon Shadow (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Vile Venom (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Wall of Bones (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Conjure Animals (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Ensnarement (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Forest's Fiery Constrictor (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Invisible Stalker (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Monster Summoning IV (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Tentacles (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Drawmij's Instant Summons (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Intensify Summoning (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Limited Wish (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Monster Summoning V (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Mordenkainen's Magnificent Mansion (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Power Word, Stun (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Prismatic Spray (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Seven-eyes (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Maze (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Monster Summoning VI (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Power Word, Blind (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Prismatic Wall (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Symbol (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Trap the Soul (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Gate (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Monster Summoning VII (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Power Word, Kill (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Prismatic Sphere (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Sphere of Ultimate Destruction (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Wish (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'divination',
            heading: 'Divination',
            foreword: `**Barred:** Conjurers, force mages, song wizards`,
            entries: [
                {
                    page_number: '181',
                    entry: [
                        `Detect Disease (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Detect Phase (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Detect Secret Passages & Portals (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Detect Undead (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Divining Rod (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Death Recall (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Detect Evil/Detect Good (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Detect Invisibility (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Detect Life (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `ESP (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Know Alignment/Undetectable Alignment (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Locate Object/Obscure Object (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Past Life (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Alamir's Fundamental Breakdown (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Clairaudience (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Clairvoyance (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Wizard Sight (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Detect Scrying (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Locate Creature (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Magic Mirror (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Contact Other Plane (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `False Vision (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Khazid's Procurement (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Know Value (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Prying Eyes (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Rary's Telepathic Bond (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Legend Lore (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `True Seeing (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Vision (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Analyze Dweomer (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Screen (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '181',
                    entry: [
                        `Foresight (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'enchantment-charm',
            heading: 'Enchantment/Charm',
            foreword: `**Barred:** Invokers, necromancers, dimensionalists, artificers, geometers`,
            entries: [
                {
                    page_number: '182',
                    entry: [
                        `Charm Person (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Divining Rod (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Friends (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Hypnotism (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Sleep (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Taunt (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Bind (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Deeppockets (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Forget (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Insatiable Thirst (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Ray of Enfeeblement (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Scare (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Tasha's Uncontrollable Hideous Laughter (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Bone Club (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Delay Death (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Hold Person (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Minor Malison (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Suggestion (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Watery Double (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Charm Monster (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Confusion (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Emotion (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Enchanted Weapon (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Fire Charm (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Fumble (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Greater Malison (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Leomund's Secure Shelter (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Lesser Geas (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Magic Mirror (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Chaos (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Domination (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Fabricate (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Feeblemind (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Hold Monster (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Leomund's Hidden Lodge (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Leomund's Lamentable Belaborment (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Magic Staff (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Mind Fog (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Blackmantle (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Eyebite (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Geas (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Guards and Wards (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Mass Suggestion (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Charm Plants (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Descent into Madness (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Hatch the Stone from the Egg (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Shadow Walk (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Steal Enchantment (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Airboat (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Antipathy-sympathy (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Binding (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Demand (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Mass Charm (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Otto's Irresistible Dance (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Sink (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Mordenkainen's Disjunction (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Programmed Amnesia (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Succor/Call (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ],
        },
        {
            id: 'illusion-phantasm',
            heading: 'Illusion/Phantasm',
            foreword: `**Barred:** Abjurers, necromancers, alchemists, geometers`,
            entries: [
                {
                    page_number: '182',
                    entry: [
                        `Audible Glamer (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Change Self (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Corpse Visage (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Nystul's Magic Aura (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Phantasmal Force (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Spook (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Ventriloquism (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Blindness (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Blur (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Deafness (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Fools' Gold (2nd)`
                    ],
                    comment: `Fixed spelling "Fool's Gold" -> "Fools' Gold"`,
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Hypnotic Pattern (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Improved Phantasmal Force (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Invisibility (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Leomund's Trap (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Mirror Image (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Misdirection (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Whispering Wind (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Illusionary Script (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Invisibility, 10' Radius (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Lorloveim's Creeping Shadow (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Phantom Steed (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Spectral Force (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Wraithform (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Fear (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Hallucinatory Terrain (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Illusionary Wall (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Improved Invisibility (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Minor Creation (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Phantasmal Killer (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Rainbow Pattern (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Shadow Monsters (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Vacancy (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Advanced Illusion (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Demishadow Monsters (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Dream/Nightmare (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Major Creation (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Seeming (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Shadow Door (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Shadow Magic (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Demishadow Magic (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Eyebite (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Lorloveim's Shadowy Transformation (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Mirage Arcana (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Mislead (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Permanent Illusion (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Programmed Illusion (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Project Image (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Shades (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Veil (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Mass Invisibility (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Sequester (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Shadow Walk (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Shadowcat (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Simulacrum (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Screen (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Weird (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'invocation-evocation',
            heading: 'Invocation/Evocation',
            foreword: `**Barred:** Conjurers, enchanters, illusionists, mentalists, shadow mages, song wizards`,
            entries: [
                {
                    page_number: '182',
                    entry: [
                        `Alarm (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Copy (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Chromatic Orb (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Dictation (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Fire Burst (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Magic Missile (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Shield (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Tenser's Floating Disc (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Wall of Fog (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Flaming Sphere (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Ice Knife (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Stinking Cloud (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Web (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Augmentation I (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Fireball (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Invisible Mail (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Lance of Disruption (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Lightning Bolt (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Melf's Minute Meteors (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Wall of Water (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Dig (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Divination Enhancement (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Fire Shield (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Fire Trap (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Ice Storm (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Mordenkainen's Celerity (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Mordenkainen's Force Missiles (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Otiluke's Dispelling screen (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Otiluke's Resilient Sphere (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Shout (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Thunder Staff (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Wall of Fire (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Wall of Ice (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Wind Breath (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Bigby's Interposing Hand (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Cloudkill (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Cone of Cold (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Dream/Nightmare (5th)`
                    ],
                    comment: 'Added reverse spell "Nightmare"',
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Leomund's Lamentable Belaborment (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Sending (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Tenser's Destructive Resonance (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Wall of Force (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Wall of Iron (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '182',
                    entry: [
                        `Wall of Stone (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Augmentation II (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Bigby's Forceful Hand (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Chain Lightning (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Contingency (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Death Fog (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Dimensional Blade (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Guards and Wards (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Otiluke's Freezing Sphere (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Tenser's Transformation (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Acid Storm (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Bigby's Grasping Hand (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Delayed Blast Fireball (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Forcecage (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Hatch the Stone from the Egg (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Limited Wish (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Malec-Keth's Flame Fist (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Mordenkainen's Sword (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Persistence (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Bigby's Clenched Fist (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Binding (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Demand (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Gunther's Kaleidoscopic Strike (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Homunculus Shield (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Incendiary Cloud (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Otiluke's Telekinetic Sphere (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Bigby's Crushing Hand (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Chain Contingency (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Elemental Aura (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Energy Drain (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Meteor Swarm (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'necromancy',
            heading: 'Necromancy',
            foreword: `**Barred:** Enchanters, illusionists, transmuters, dimensionalists, mentalists, alchemists, artificers, song wizards`,
            entries: [
                {
                    page_number: '183',
                    entry: [
                        `Chill Touch (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Corpse Visage (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Detect Undead (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Ray of Fatigue (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Choke (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Death Recall (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Ghoul Touch (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Spectral Hand (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Bone Club (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Delay Death (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Feign Death (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Hold Undead (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Hovering Skull (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Pain Touch (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Spirit Armor (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Vampiric Touch (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Contagion (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Enervation (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Mask of Death (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Animate Dead (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Force Shapechange (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Magic Jar (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Mummy Rot (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Summon Shadow (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Throbbing Bones (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Wall of Bones (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Arrow of Bone (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Blackmantle (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Bloodstone's Spectral Steed (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Dead Man's Eyes (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Death Spell (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Reincarnation (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Trollish Fortitude (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Bloodstone's Frightful Joining (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Control Undead (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Finger of Death (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Intensify Summoning (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Suffocate (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Zombie Double (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Abi-Dalzim's Horrid Wilting (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Clone (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Defoliate (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Heart of Stone (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Homunculus Shield (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Shadow Form (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Energy Drain (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Wail of the Banshee (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'elemental-air',
            heading: 'Elemental Air',
            foreword: `**Barred:** Earth elementalists`,
            entries: [
                {
                    page_number: '183',
                    entry: [
                        `Feather Fall (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Lasting Breath (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Wall of Fog (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Fog Cloud (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Ride the Wind (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Stinking Cloud (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Whispering Wind (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Alamir's Fundamental Breakdown (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Gust of Wind (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Lance of Disruption (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Water Breathing/Air Breathing (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Wind Wall (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Conjure Elemental-Kin (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Solid Fog (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Airy Water (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Cloudkill (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Conjure Elemental (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Control Weather (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Death Fog (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Neutralize Gas (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Suffocate (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Airboat (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Incendiary Cloud (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Elemental Aura (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'elemental-earth',
            heading: 'Elemental Earth',
            foreword: `**Barred:** Air elementalists`,
            entries: [
                {
                    page_number: '183',
                    entry: [
                        `Fist of Stone (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Fools' Gold (2nd)`
                    ],
                    comment: `Fixed spelling "Fool's Gold" -> "Fools' Gold"`,
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Maximilian's Earthen Grasp (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Alamir's Fundamental Breakdown (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Maximilian's Stony Grasp (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Conjure Elemental-Kin (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Dig (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Stoneskin (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Turn Pebble to Boulder/Turn Boulder to Pebble (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Conjure Elemental (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Distance Distortion (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Passwall (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Stone Shape (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Transmute Rock to Mud/Transmute Mud to Rock (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Wall of Iron (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Wall of Stone (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Glassee (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Move Earth (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Stone to Flesh/Flesh to Stone (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Transmute Water to Dust/Improved Create Water (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Hatch the Stone from the Egg (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Statue (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Glassteel (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Iron Body (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Sink (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Crystalbrittle (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Elemental Aura (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'elemental-fire',
            heading: 'Elemental Fire',
            foreword: `**Barred:** Water elementalists`,
            entries: [
                {
                    page_number: '183',
                    entry: [
                        `Affect Normal Fires (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Burning Hands (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Dancing Lights (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Fire Burst (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Flaming Sphere (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Pyrotechnics (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Alamir's Fundamental Breakdown (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Fireball (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Flame Arrow (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Melf's Minute Meteors (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Conjure Elemental-Kin (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Fire Charm (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Fire Shield (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Fire Trap (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Wall of Fire (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Conjure Elemental (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Proofing vs. Combustion (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Forest's Fiery Constrictor (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Delayed Blast Fireball (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Malec-Keth's Flame Fist (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Incendiary Cloud (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Elemental Aura (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '183',
                    entry: [
                        `Meteor Swarm (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'elemental-water',
            heading: 'Elemental Water',
            foreword: `**Barred:** Fire elementalists`,
            entries: [
                {
                    page_number: '184',
                    entry: [
                        `Metamorphose Liquids (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Insatiable Thirst (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Alamir's Fundamental Breakdown (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Wall of Water (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Water Breathing/Air Breathing (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Watery Double (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Conjure Elemental-Kin (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Ice Storm (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Vitriolic Sphere (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Wall of Ice (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Airy Water (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Cone of Cold (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Conjure Elemental (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Rusting Grasp (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Transmute Rock to Mud/Transmute Mud to Rock (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Vile Venom (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Lower Water (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Otiluke's Freezing Sphere (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Part Water (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Transmute Water to Dust/Improved Create Water (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Acid Storm (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Abi-Dalzim's Horrid Wilting (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Elemental Aura (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'dimension',
            heading: 'Dimension',
            foreword: `**Barred:** by philosophy`,
            entries: [
                {
                    page_number: '184',
                    entry: [
                        `Detect Phase (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Enlarge/Reduce (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Gaze Reflection (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Deeppockets (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Displace Self (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Rope Trick (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Blink (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Dimension Door (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Distance Distortion (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Improved Blink (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Leomund's Secret Chest (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Dimensional Blade (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Etherealness (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Drawmij's Instant Summons (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Duo-dimension (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Mordenkainen's Magnificent Mansion (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Phase Door (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Shadow Walk (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Maze (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Gate (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Sphere of Ultimate Destruction (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Time Stop (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'force',
            heading: 'Force',
            foreword: `**Barred:** by philosophy`,
            entries: [
                {
                    page_number: '184',
                    entry: [
                        `Armor (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Magic Missile (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Shield (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Tenser's Floating Disc (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Levitate (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Invisible Mail (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Lance of Disruption (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Mordenkainen's Force Missiles (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Otiluke's Resilient Sphere (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Bigby's Interposing Hand (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Telekinesis (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Tenser's Destructive Resonance (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Wall of Force (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Bigby's Forceful Hand (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Repulsion (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Bigby's Grasping Hand (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Forcecage (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Mordenkainen's Sword (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Bigby's Clenched Fist (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Otiluke's Telekinetic Sphere (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Bigby's Crushing Hand (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'mentalism',
            heading: 'Mentalism',
            foreword: `**Barred:** by philosophy`,
            entries: [
                {
                    page_number: '184',
                    entry: [
                        `Charm Person (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Hypnotism (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Spook (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `ESP (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Forget (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Clairaudience (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Clairvoyance (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Iron Mind (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Suggestion (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Charm Monster (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Phantasmal Killer (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Psychic Protection (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Rary's Mnemonic Enhancer (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Domination (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Feeblemind (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Magic Jar (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Sending (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Eyebite (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Geas (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Mass Suggestion (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Tower of Mental Resistance (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Descent into Madness (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Demand (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Mind Blank (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Programmed Amnesia (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'shadow',
            heading: 'Shadow',
            foreword: `**Barred:** by philosophy`,
            entries: [
                {
                    page_number: '184',
                    entry: [
                        `Chill Touch (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Sleep (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Spook (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Blur (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Continual Darkness (2nd)`
                    ],
                    comment: 'There is no wizard spell called "Continual Darkness" as the wizard version of "Continual Light" is not reversible. Either this is the cleric spell "Continual Darkness" or it is an error.',
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Darkness, 15' Radius (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Ray of Enfeeblement (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Scare (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Spectral Hand (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Wall of Gloom (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Lorloveim's Creeping Shadow (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Nondetection (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Phantom Steed (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Spirit Armor (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Wraithform (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Dimension Door (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Enervation (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Evard's Black Tentacles (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Fear (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Minor Creation (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Shadow Monsters (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Demishadow Monsters (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Major Creation (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Mordenkainen's Faithful Hound (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Passwall (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Shadow Door (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Shadow Magic (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Blackmantle (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Bloodstone's Spectral Steed (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Demishadow Magic (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Lorloveim's Shadowy Transformation (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Shades (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Duo-dimension (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Phase Door (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Shadowcat (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Shadow Walk (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Maze (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Shadow Form (8th)`
                    ],
                    comment: `Fixed spelling "Shadowform" -> "Shadow Form"`,
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Energy Drain (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'alchemy',
            heading: 'Alchemy',
            foreword: `**Barred:** by philosophy`,
            entries: [
                {
                    page_number: '184',
                    entry: [
                        `Affect Normal Fires (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Fire Burst (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Grease (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Metamorphose Liquids (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Patternweave (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Protection from Evil/Protection from Good (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Fools' Gold (2nd)`
                    ],
                    comment: `Fixed spelling "Fool's Gold" -> "Fools' Gold"`,
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Glitterdust (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Melf's Acid Arrow (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Pyrotechnics (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Sense Shifting (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Stinking Cloud (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Alamir's Fundamental Breakdown (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Flame Arrow (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Melf's Minute Meteors (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '184',
                    entry: [
                        `Protection from Evil, 10' Radius/Protection from Good, 10' Radius (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Solvent of Corrosion (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Enchanted Weapon (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Fire Charm (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Fire Trap (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Vitriolic Sphere (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Cloudkill (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Fabricate (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Rusting Grasp (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Transmute Rock to Mud/Transmute Mud to Rock (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Vile Venom (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Death Fog (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Glassee (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Stone to Flesh/Flesh to Stone (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Transmute Water to Dust/Improved Create Water (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Acid Storm (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Hatch the Stone from the Egg (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Neutralize Gas (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Statue (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Glassteel (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Incendiary Cloud (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Crystalbrittle (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Glorious Transmutation (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'artifice',
            heading: 'Artifice',
            foreword: `**Barred:** by philosophy`,
            entries: [
                {
                    page_number: '185',
                    entry: [
                        `Chromatic Orb (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Divining Rod (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Mending (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Bind (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Ice Knife (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Leomund's Trap (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Moon Rune (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Bone Club (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Explosive Runes (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Flame Arrow (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Item (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Melf's Minute Meteors (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Snapping Teeth (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Enchanted Weapon (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Magic Mirror (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Thunder Staff (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Magic Staff (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Arrow of Bone (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Dimensional Blade (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Steal Enchantment (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Analyze Dweomer (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Antipathy-sympathy (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Shape Change (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'geometry',
            heading: 'Geometry',
            foreword: `**Barred:** by philosophy`,
            entries: [
                {
                    page_number: '185',
                    entry: [
                        `Alarm (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Copy (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Dictation (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Erase (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Shield (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Hornung's Baneful Deflector (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Hypnotic Pattern (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Moon Rune (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Bone Club (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Explosive Runes (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Lesser Sign of Sealing (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Secret Page (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Sepia Snake Sigil (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Conjure Elemental-Kin (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Fire Trap (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Minor Globe of Invulnerability (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Rainbow Pattern (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `There/Not There (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Thunder Staff (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Animate Dead (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Avoidance/Attraction (5th)`
                    ],
                    comment: `Added reverse spell "Attraction"`,
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Conjure Elemental (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Invulnerability to Normal Weapons (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Khazid's Procurement (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Mordenkainen's Private Sanctum (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Von Gasik's Refusal (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Ensnarement (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Globe of Invulnerability (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Greater Sign of Sealing (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Guards and Wards (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Invulnerability to Magical Weapons (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Fear Ward (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Phase Door (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Sequester (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Vanish (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Binding (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Maze (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Symbol (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Trap the Soul (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Gate (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Shape Change (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'song',
            heading: 'Song',
            foreword: `**Barred:** by philosophy`,
            entries: [
                {
                    page_number: '185',
                    entry: [
                        `Audible Glamer (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Charm Person (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Find Familiar (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Friends (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Sleep (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Taunt (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Forget (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Summon Swarm (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Tasha's Uncontrollable Hideous Laughter (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Whispering Wind (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Fireflow (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Hold Person (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Monster Summoning I (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Suggestion (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Charm Monster (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Confusion (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Emotion (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Lesser Geas (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Monster Summoning II (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Shout (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Summon Lycanthrope (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Chaos (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Dismissal (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Hold Monster (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Leomund's Lamentable Belaborment (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Monster Summoning III (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Control Weather (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Mass Suggestion (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Monster Summoning IV (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Banishment (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Charm Plants (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Monster Summoning V (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Power Word, Stun (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Spell Shape (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Binding (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Mass Charm (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Monster Summoning VI (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Otto's Irresistible Dance (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Power Word, Blind (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Monster Summoning VII (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Power Word, Kill (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Wail of the Banshee (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },

            ]
        },
        {
            id: 'wild-magic',
            heading: 'Wild Magic',
            foreword: `**Barred:** All except wild mages`,
            entries: [
                {
                    page_number: '185',
                    entry: [
                        `Hornung's Guess (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Nahal's Reckless Dweomer (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Patternweave (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Chaos Shield (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Hornung's Baneful Deflector (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Nahal's Nonsensical Nullifier (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Alternate Reality (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Fireflow (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Fool's Speech (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `There/Not There (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Unluck (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Vortex (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Waveform (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Wildshield (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Wildstrike (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Hornung's Surge Selector (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Spell Shape (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Hornung's Random Dispatcher (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Wildzone (8th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Stabilize (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Wildfire (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '185',
                    entry: [
                        `Wildwind (9th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        }
    ]
});