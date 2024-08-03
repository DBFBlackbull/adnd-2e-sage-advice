const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const SPELLS_AND_MAGIC = {
    publication_year: '1996',
    publication_month: 'May',
    publication_print: 'First Printing, May 1996',
    title: "PLAYER’S OPTION™: Spells & Magic",
    shortTitle: 'S&M',
    id: 's-and-m',
    sourceAttribute: SOURCE.SPELLS_AND_MAGIC,
    chapters: [],
};
SPELLS_AND_MAGIC.chapters.push({
    name: 'Chapter',
    number: '8',
    heading: 'Spells in Combat',
    sections: [
        {
            id: 'spell-characteristics',
            heading: 'Spell Characteristics',
            sections: [
                {
                    id: 'spell-attack-rolls',
                    heading: 'Spells with Attack Rolls',
                    entries: [
                        {
                            page_number: '120',
                            entry: [
                                `A small number of spells require the caster to make an attack roll in order to deliver damage or other effects to the victim. Some of these can be very potent, but their power is limited by the requirement to actually touch the subject with a successful attack roll. Generally, the caster can execute a touch attack (or roll an attack roll) as soon as he finishes casting the spell, or he can delay until the end of the current round and then make his attack. However, if the caster doesn't attempt to discharge the spell in the round in which it is cast, it is wasted unless the spell has a duration of more than one round. For example, *cause light wounds* must be used in the same round in which it is cast, but since *chill touch* lasts a minimum of four rounds, the caster doesn't have to "use it or lose it" in the round he casts the spell.`,
                                `A number of spells don't require the caster to actually injure the target or breach the victim's armor; even a glancing touch will be sufficient to discharge the spell's effects on the target. Spells of this *type ignore the portion of the victim's Armor Class that is derived from wearing armor.* In other words, only Dexterity-based and magical adjustments help a character's Armor Class against some magical attacks.`,
                                ``,
                                `*Oromonos the wizard takes a dislike to an obnoxious guard and decides to teach him a lesson with a* shocking grasp. *Since the spell only requires the wizard to make contact with the target, the DM rules that the guard's* plate mail +1 *won't help him. Only the 1-point Armor Class bonus for the armor's enchantment counts for the guard's AC, which makes him AC 9 to Oromonos's attack instead of his usual AC 2.*`,
                                ``,
                                `Which spells qualify as spells that bypass armor? Basically, this is a judgment call for the DM. In order to gain this advantage, the spell description should clearly imply that the spell would take effect even if it struck the victim on the breastplate instead of requiring the caster's hand to actually touch exposed skin. Another way of looking at it is this: Does the spell emulate the action of a normal weapon, such as a sword, arrow, or dagger? If it does, the spell definitely requires a normal attack roll on the part of the caster, but if the spell affects the victim's life force or achieves its effect from simple contact, the subject's armor is ignored.`,
                                `Spells that directly affect the subject's life force include most of the necromantic touch spells (*chill touch, vampiric touch, energy drain,* etc.), the various *cause wound* spells and other reversals of healing spells such as *poison, slay living,* and *destruction*. The victim's armor does not help to protect him from these attacks. Spells that somehow change or alter the victim's status, such as *imprisonment, plane shift,* or *dispel evil* also ignore armor.`,
                                `A second category of spells that can affect the victim through his armor includes spells that produce energy or forces against which armor is useless. For example, *shocking grasp, chromatic orb, watery double, produce flame, fire seeds,* or *crystalbrittle* can affect an armored or unarmored person equally well.`,
                                `Some spells that use attack rolls but ignore the victim's armor appear in Table 41: Armor-Breaching Spells.`,
                                `Spells that create physical attacks or emulate the effects of weapons include such enchantments as *ice knife, hovering skull, Mordenkainen's sword,* and *spiritual hammer*. Since these spells manifest as tangible weapons and are wielded in the same way, the subject is allowed the full benefit of his or her armor. See Table 42: Armor-Observing Spells.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.TOUCH_SPELLS,ATTRIBUTE.SPELL_ATTACK_ROLL]
                        },
                        {
                            page_number: '120',
                            entry: [
                                `
<table>
<tr>
    <td colspan="2" style="text-align: center;">Table 41:</td>
</tr>
<tr>
    <th colspan="2" style="text-align: center;">Armor-Breaching Spells</th>
</tr>
<tr>
    <th>Wizard Spells</th>
    <th>Priest Spells</th>
</tr>
<tr>
    <td>chill touch (1st)</td>
    <td>cause light wounds (1st)</td>
</tr>
<tr>
    <td>chromatic orb (1st)</td>
    <td>produce flame (2nd)</td>
</tr>
<tr>
    <td>shocking grasp (1st)</td>
    <td>cause blindness or deafness (3rd)</td>
</tr>
<tr>
    <td>ghoul touch (2nd)</td>
    <td>cause disease (3rd)</td>
</tr>
<tr>
    <td>pain touch (3rd)</td>
    <td>curse (3rd)</td>
</tr>
<tr>
    <td>vampiric touch (3rd)</td>
    <td>cause serious wounds (4th)</td>
</tr>
<tr>
    <td>watery double (3rd)</td>
    <td>chaotic sleep (4th)</td>
</tr>
<tr>
    <td>fire aura (4th)</td>
    <td>poison (4th)</td>
</tr>
<tr>
    <td>mummy rot (5th)</td>
    <td>cause critical wounds (5th)</td>
</tr>
<tr>
    <td>Malec-Keth's flame fist (7th)</td>
    <td>dispel evil (5th)</td>
</tr>
<tr>
    <td>Otto's irresistible dance (8th)</td>
    <td>plane shift (5th)</td>
</tr>
<tr>
    <td>crystalbrittle (9th)</td>
    <td>slay living (5th)</td>
</tr>
<tr>
    <td>energy drain (9th)</td>
    <td>fire seeds (6th)</td>
</tr>
<tr>
    <td>imprisonment (9th)</td>
    <td>harm (6th)</td>
</tr>
<tr>
    <td></td>
    <td>seclusion (6th)</td>
</tr>
<tr>
    <td></td>
    <td>Sol's searing orb (6th)</td>
</tr>
<tr>
    <td></td>
    <td>destruction (7th)</td>
</tr>
</table>
`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.TOUCH_SPELLS,ATTRIBUTE.SPELL_ATTACK_ROLL]
                        },
                        {
                            page_number: '120',
                            entry: [
                                `
<table>
<tr>
    <td colspan="2" style="text-align: center;">Table 42:</td>
</tr>
<tr>
    <th colspan="2" style="text-align: center;">Armor-Observing Spells</th>
</tr>
<tr>
    <th>Wizard Spells</th>
    <th>Priest Spells</th>
</tr>
<tr>
    <td>fist of stone (1st)</td>
    <td>magical stone (1st)</td>
</tr>
<tr>
    <td>ice knife (2nd)</td>
    <td>shillelagh (1st)</td>
</tr>
<tr>
    <td>Melf's acid arrow (2nd)</td>
    <td>flame blade (2nd)</td>
</tr>
<tr>
    <td>bone club (3rd)</td>
    <td>spiritual hammer (2nd)</td>
</tr>
<tr>
    <td>hovering skull (3rd)</td>
</tr>
<tr>
    <td>Melf's minute meteors (3rd)</td>
</tr>
<tr>
    <td>snapping teeth (3rd)</td>
</tr>
<tr>
    <td>turn pebble to boulder (4th)</td>
</tr>
<tr>
    <td>claws of the umber hulk (6th)</td>
</tr>
<tr>
    <td>tentacles (6th)</td>
</tr>
<tr>
    <td>Mordenkainen's sword (7th)</td>
</tr>
<tr>
    <td>shadow form (8th)</td>
</tr>
</table>
`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.TOUCH_SPELLS,ATTRIBUTE.SPELL_ATTACK_ROLL]
                        },
                        {
                            page_number: '121',
                            entry: [
                                `***PLAYER'S OPTION: Combat & Tactics:*** In the revised initiative system introduced in the *Combat & Tactics* book, spells that require attack rolls are cast as normal (i.e., on the fast, average, or slow phase, as appropriate for the casting time). After the spell is invoked, the caster may then make his attack for the round in any subsequent phase. For example, a wizard who casts *chill touch*, a fast spell, may then make a touch attack in the average, slow, or very slow phases. Note that the character still receives only one attack per round.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.TOUCH_SPELLS]
                        },
                        {
                            page_number: '121',
                            entry: [
                                `Even though the wizard will often be 'unarmed' when he uses a touch attack spell, he does *not* provoke an attack of opportunity since he's not attempting to initiate unarmed combat. All he needs to do is touch the subject, not land a full-force punch or wrestle with the fellow. However, a victim who is guarding will still be able to make his own attack before the wizard can deliver his touch-based attack.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.TOUCH_SPELLS]
                        }
                    ]
                }
            ]
        }
    ]
});
SPELLS_AND_MAGIC.chapters.push({
    name: 'Appendix',
    number: '3',
    heading: 'Wizard Spells by School',
    foreword: `As mentioned in Chapter 2, some spells have been reassigned to the school of universal magic.`,
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
SPELLS_AND_MAGIC.chapters.push({
    name: 'Appendix',
    number: '4',
    heading: 'Priest Spells by Sphere',
    foreword: [
        `In the PHB, clerics have major access to all, astral, charm, combat, creation, divination, guardian, healing, necromantic, protection, summoning, sun, and minor access to elemental.`,
        `**Revision: Clerics lose access to sun, elemental air, and elemental fire. They retain minor access to elemental water and elemental earth.**`,
        `Previously, druids had major access to all, animal, elemental, healing, plant, weather, and minor access to divination.`,
        `**Revision: Druids lose access to the sphere of divination. They gain major access to the sphere of sun.**`,
        ``,
        `As mentioned in Chapter 3, some spells have been added to the sphere of all. Also, other spheres have been reorganized.`
    ],
    sections: [
        {
            id: 'all',
            heading: 'All',
            foreword: `**(Major: any priest)**`,
            entries: [
                {
                    page_number: '186',
                    entry: [
                        `Bless/Curse (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Combine (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Detect Magic (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Orison (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Purify Food & Drink/Putrefy Food & Drink (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Chant (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Mystic Transfer (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Sanctify/Defile (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Dispel Magic (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Remove Curse/Bestow Curse (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Focus (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Tongues (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Uplift (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Atonement (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Commune (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Meld (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Quest (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `True Seeing/False Seeing (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Speak with Monsters (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Gate (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'animal',
            heading: 'Animal',
            foreword: `**(Major: shaman, druid)**`,
            entries: [
                {
                    page_number: '186',
                    entry: [
                        `Animal Friendship (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Calm Animals (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Invisibility to Animals (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Locate Animals or Plants (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Charm Person or Mammal (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Messenger (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Snake Charm (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Speak with Animals (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Control Animal (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Hold Animal (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Summon Insects (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Animal Summoning I (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Call Woodland Beings (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Giant Insect (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Repel Insects (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Animal Growth (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Animal Summoning II (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Commune with Nature (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Insect Plague (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Animal Summoning III (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Antianimal Shell (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Creeping Doom (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Reincarnate (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'astral',
            heading: 'Astral',
            foreword: `**(Major: cleric)**`,
            entries: [
                {
                    page_number: '186',
                    entry: [
                        `Astral Celerity (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Speak with Astral Traveler (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Astral Awareness (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Ethereal Barrier (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Astral Window (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Etherealness (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Join with Astral Traveler (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Plane Shift (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Astral Spell (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'chaos',
            heading: 'Chaos',
            foreword: `**(Major: chaotic crusaders)**`,
            entries: [
                {
                    page_number: '186',
                    entry: [
                        `Battlefate (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Mistaken Missive (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Chaos Ward (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Dissension's Feast (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Miscast Magic (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Random Causality (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Chaotic Combat (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Chaotic Sleep (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Inverted Ethics (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Chaotic Commands (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Entropy Shield (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Uncontrolled Weather (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'charm',
            heading: 'Charm',
            foreword: `**(Major: clerics)**`,
            entries: [
                {
                    page_number: '186',
                    entry: [
                        `Command (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Remove Fear/Cause Fear (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Sanctuary (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Enthrall (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Hold Person (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Music of the Spheres (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Snake Charm (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Dictate (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Emotion Control (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Cloak of Bravery/Cloak of Fear (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Free Action (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Imbue with Spell Ability (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Command Monster (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Confusion (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Exaction (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'combat',
            heading: 'Combat',
            foreword: `**(Major: clerics, crusaders; Minor: monks)**`,
            entries: [
                {
                    page_number: '186',
                    entry: [
                        `Command (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Magical Stone (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Aid (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Spiritual Hammer (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Prayer (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Unearthly Choir (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Recitation (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Flame Strike (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Righteous Wrath of the Faithful (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Spiritual Wrath (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Word of Recall (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Holy Word/Unholy Word (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'creation',
            heading: 'Creation',
            foreword: `**(Major: clerics)**`,
            entries: [
                {
                    page_number: '186',
                    entry: [
                        `Light/Darkness (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Create Holy Symbol (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Continual Light/Continual Darkness (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Create Food & Water (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Blessed Abundance (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Blade Barrier (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Heroes' Feast (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `The Great Circle/The Black Circle (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'divination',
            heading: 'Divination',
            foreword: `**(Major: clerics, monks)**`,
            entries: [
                {
                    page_number: '186',
                    entry: [
                        `Analyze Balance (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Detect Evil/Detect Good (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Detect Poison (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Augury (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Detect Charm/Undetectable Charm (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Find Traps (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Detect Spirits (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Extradimensional Detection (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Locate Object/Obscure Object (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Speak with Dead (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Detect Lie/Undetectable Lie (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Divination (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Omniscient Eye (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Consequence (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Magic Font (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Find the Path/Lose the Path (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Stone Tell (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Divine Inspiration (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'elemental-air',
            heading: 'Elemental, Air',
            foreword: `**(Major: druids)**`,
            entries: [
                {
                    page_number: '186',
                    entry: [
                        `Wind Column (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Dust Devil (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Wind Servant (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Zone of Sweet Air (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Windborne (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Air Walk (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Cloud of Purification (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '186',
                    entry: [
                        `Control Winds (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Whirlwind (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Conjure Air Elemental (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Wind Walk (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'elemental-earth',
            heading: 'Elemental, Earth',
            foreword: `**(Major: druids; Minor: clerics)**`,
            entries: [
                {
                    page_number: '187',
                    entry: [
                        `Strength of Stone (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Soften Earth and Stone (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Meld into Stone (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Stone Shape (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Adamantite Mace (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Spike Stones (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Transmute Rock to Mud/Transmute Mud to Rock (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Stone Tell (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Animate Rock (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Antimineral Shell (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Conjure Earth Elemental (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Earthquake (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Transmute Metal to Wood (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'elemental-fire',
            heading: 'Elemental, Fire',
            foreword: `**(Major: druids)**`,
            entries: [
                {
                    page_number: '187',
                    entry: [
                        `Firelight (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Log of Everburning (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Fire Trap (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Flame Blade (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Heat Metal/Chill Metal (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Produce Flame (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Flame Walk (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Protection from Fire (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Pyrotechnics (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Produce Fire/Quench Fire (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Animate Flame (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Wall of Fire (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Conjure Fire Elemental (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Fire Seeds (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Chariot of Sustarre (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Fire Storm (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'elemental-water',
            heading: 'Elemental, Water',
            foreword: `**(Major: druids; Minor: clerics)**`,
            entries: [
                {
                    page_number: '187',
                    entry: [
                        `Create Water/Destroy Water (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Watery Fist (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Water Breathing/Air Breathing (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Water Walk (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Lower Water/Raise Water (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Reflecting Pool (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Produce Ice (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Part Water (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Transmute Water to Dust/Improved Create Water (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Conjure Water Elemental (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Tsunami (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'guardian',
            heading: 'Guardian',
            foreword: `**(Major: clerics, crusaders, monks)**`,
            entries: [
                {
                    page_number: '187',
                    entry: [
                        `Blessed Watchfulness (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Light/Darkness (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Sacred Guardian (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Iron Vigil (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Silence, 15' Radius (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Wyvern Watch (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Continual Light/Continual Darkness (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Glyph of Warding (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Abjure (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Dimensional Anchor (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Dispel Evil/Dispel Good (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Unceasing Vigilance of the Holy Sentinel (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Blade Barrier (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Forbiddance (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Symbol (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'healing',
            heading: 'Healing',
            foreword: `**(Major: clerics, crusaders, druids; Minor: monks, shamans)**`,
            entries: [
                {
                    page_number: '187',
                    entry: [
                        `Cure Light Wounds/Cause Light Wounds (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Cure Moderate Wounds/Cause Moderate Wounds (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Slow Poison (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Cure Blindness or Deafness/Cause Blindness or Deafness (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Cure Disease/Cause Disease (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Hold Poison (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Repair Injury (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Cure Serious Wounds/Cause Serious Wounds (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Fortify (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Neutralize Poison/Poison (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Cure Critical Wounds/Cause Critical Wounds (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Heal/Harm (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Regenerate (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'law',
            heading: 'Law',
            foreword: `**(Major: lawful crusaders)**`,
            entries: [
                {
                    page_number: '187',
                    entry: [
                        `Command (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Protection from Chaos (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Calm Chaos (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Enthrall (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Hold Person (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Dictate (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Rigid Thinking (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Strength of One (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Compulsive Order (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Defensive Harmony (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Champion's Strength (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Impeding Permission (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Legal Thoughts (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'necromantic',
            heading: 'Necromantic',
            foreword: `**(Major: clerics; Minor: crusaders, monks)**`,
            entries: [
                {
                    page_number: '187',
                    entry: [
                        `Dispel Fatigue (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Invisibility to Undead (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Aid (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Restore Strength (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Animate Dead (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Feign Death (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Negative Plane Protection (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Remove Paralysis (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Speak with Dead (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Suspended Animation (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Unfailing Endurance (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Raise Dead (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Restoration (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Resurrection (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'numbers',
            heading: 'Numbers',
            foreword: `**(Major: Monks)**`,
            entries: [
                {
                    page_number: '187',
                    entry: [
                        `Analyze Balance (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Calculate (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Personal Reading (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Moment (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Music of the Spheres (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Etherealness (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Extradimensional Detection (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Moment Reading (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Telethaumaturgy (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Addition (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Dimensional Folding (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Probability Control (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Consequence (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Dimensional Translocation (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Extradimensional Manipulation (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Extradimensional Pocket (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Physical Mirror (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Seclusion (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Spacewarp (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Timelessness (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'plant',
            heading: 'Plant',
            foreword: `**(Major: druids; Minor: shamans)**`,
            entries: [
                {
                    page_number: '187',
                    entry: [
                        `Entangle (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Locate Animals or Plants (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Pass without Trace (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Shillelagh (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Barkskin (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Detect Snares & Pits (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Goodberry/Badberry (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Trip (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Warp Wood (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Plant Growth (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Slow Rot (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Snare (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Spike Growth (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Tree (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Hallucinatory Forest (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Hold Plant (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Plant Door (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Speak with Plants (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Sticks to Snakes (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Antiplant Shell (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Commune with Nature (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '187',
                    entry: [
                        `Pass Plant (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Liveoak (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Transport Via Plants (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Turn Wood (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Wall of Thorns (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Changestaff (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'protection',
            heading: 'Protection',
            foreword: `**(Major: clerics, shamans; Minor: crusaders)**`,
            entries: [
                {
                    page_number: '188',
                    entry: [
                        `Endure Cold/Endure Heat (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Protection from Evil/Protection from Good (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Ring of Hands/Ring of Woe (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Sanctuary (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Resist Acid and Corrosion (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Resist Fire/Resist Cold (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Withdraw (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Line of Protection/Line of Destruction (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Magical Vestment (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Negative Plane Protection (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Protection from Evil, 10' Radius/Protection from Good, 10' Radius (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Remove Paralysis (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Spell Immunity (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Antiplant Shell (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Impregnable Mind (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Antianimal Shell (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Antimineral Shell (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Impervious Sanctity of Mind (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'summoning',
            heading: 'Summoning',
            foreword: `**(Major: clerics, shamans)**`,
            entries: [
                {
                    page_number: '188',
                    entry: [
                        `Call Upon Faith (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Draw Upon Holy Might (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Dust Devil (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Messenger (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Summon Animal Spirit (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Abjure (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Dimensional Translocation C5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Dispel Evil/Dispel Good (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Aerial Servant (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Animate Object (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Conjure Animals (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Word of Recall (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Exaction (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Mind Tracker (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Spirit of Power (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Succor/Call (7th)`
                    ],
                    comment: 'Added reverse spell "Call"',
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'sun',
            heading: 'Sun',
            foreword: `**(Major: druids)**`,
            entries: [
                {
                    page_number: '188',
                    entry: [
                        `Light/Darkness (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Sunscorch (1ist)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Continual Light/Continual Darkness (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Starshine (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Blessed Warmth (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Moonbeam (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Rainbow (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Sol's Searing Orb (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Sunray (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'thought',
            heading: 'Thought',
            foreword: `**(Major: Monks)**`,
            entries: [
                {
                    page_number: '188',
                    entry: [
                        `Emotion Read (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Thought Capture (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Idea (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Mind Read (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Emotion Control (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Memory Read (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Telepathy (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Genius (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Mental Domination (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Modify Memory (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Rapport (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Solipsism (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Thought Broadcast (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Impregnable Mind (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Memory Wrack (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Mindshatter (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Thoughtwave (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Disbelief (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Group Mind (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Impervious Sanctitv of Mind (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Mind Tracker (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'time',
            heading: 'Time',
            foreword: `**(Minor: Monks)**`,
            entries: [
                {
                    page_number: '188',
                    entry: [
                        `Know Age (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Know Time (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Hesitation (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Nap (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Accelerate Healing (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Choose Future (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Unfailing Premonition (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Age Plant (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Body Clock (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Age Object (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Othertime (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Repeat Action (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Time Pool (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Age Creature (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Reverse Time (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Skip Day (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Age Dragon (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'travel',
            heading: 'Travel',
            foreword: `**(Major: Shamans)**`,
            entries: [
                {
                    page_number: '188',
                    entry: [
                        `Know Direction (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Aura of Comfort (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Lighten Load (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Create Campsite (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Helping Hand (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Know Customs (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Circle of Privacy (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Tree Steed (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Clear Path (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Easy March (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Monster Mount (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Hovering Road (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'war',
            heading: 'War',
            foreword: `**(Major: crusaders)**`,
            entries: [
                {
                    page_number: '188',
                    entry: [
                        `Courage (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Morale (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Emotion Perception (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Rally (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Adaptation (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Caltrops (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Fortify (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Entrench (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Leadership/Doubt (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Tanglefoot/Selective Passage (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Disguise (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Illusory Artillery (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Gravity Variation (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Illusory Fortification (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Shadow Engine (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'wards',
            heading: 'Wards',
            foreword: `**(Major: Crusaders, shamans)**`,
            entries: [
                {
                    page_number: '188',
                    entry: [
                        `Antivermin Barrier (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Weighty Chest (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Ethereal Barrier (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Frisky Chest (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Zone of Truth (2nd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Efficacious Monster Ward (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Invisibility Purge (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Squeaking Floor (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Thief's Lament (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Zone of Sweet Air (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Fire Purge (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Weather Stasis (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Barrier of Retention (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Elemental Forbiddance (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Grounding (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Shrieking Walls (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Undead Ward (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Crushing Walls (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Dragonbane (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Land of Stability (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Tentacle Walls (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        },
        {
            id: 'weather',
            heading: 'Weather',
            foreword: `**(Major: Druids)**`,
            entries: [
                {
                    page_number: '188',
                    entry: [
                        `Faerie Fire (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Obscurement (1st)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Call Lightning (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Weather Prediction (3rd)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Control Temperature, 10' Radius (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Protection from Lightning (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Weather Stasis (4th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Control Winds (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Rainbow (5th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Weather Summoning (6th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
                {
                    page_number: '188',
                    entry: [
                        `Control Weather (7th)`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                },
            ]
        }
    ]
});

module.exports = SPELLS_AND_MAGIC;