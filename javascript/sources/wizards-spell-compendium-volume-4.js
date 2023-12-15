const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const WIZARDS_SPELL_COMPENDIUM_VOLUME_4 = {
    publication_year: '1998',
    publication_month: 'September',
    publication_print: 'First Printing',
    title: "Wizard's Spell Compendium Volume Four",
    shortTitle: "WSC 4",
    id: 'wsc-4',
    sourceAttribute: SOURCE.WIZARD_SPELL_COMPENDIUM_4,
    chapters: [],
};
WIZARDS_SPELL_COMPENDIUM_VOLUME_4.chapters.push({
    name: 'Appendix',
    number: '',
    heading: 'Appendices',
    sections: [
        {
            id: 'errata',
            heading: 'Errata for Wizard Spell Compendium Volumes 1 to 3',
            sections: [
                {
                    id: 'volume-1',
                    heading: 'Volume 1',
                    entries: [
                        {
                            page_number: '1152',
                            entry: [
                                `*Andrui's Baneful Backfire* is from the WORLD OF GREYHAWK setting, add to Notes: (WoG).`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Articus's Melee manager* and *Articus's Devolutionary Warrior* frequency is common or uncommon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Accelerate Metabolism* should precede *Accelerate Plant Growth*.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Alyssindra's Summons* frequency in the MYSTARA setting is common.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Balliard's Rejuvenating Touch* frequency in the MYSTARA setting is common or uncommon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Banishment* is known to be in the *Demonomicon of Iggwilv (WoG)*.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Binding* is known to be in the *Demonomicon of Iggwilv (WoG)*.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Blackmantle* is also Shadow school, uncommon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Bloodline Corruption* has a BIRTHRIGHT icon`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Bloodstone's Spectral Steed* is also Shadow school, uncommon or rare.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Blur* is also Shadow school, common.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Brannart's Acidic Grip* frequency in the MYSTARA setting is common.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Callistram's Gondola* frequency in the MYSTARA setting is common or uncommon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Cool—Pluma* has a Maztica icon`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*DeGrass Pilfering Fingers* frequency in the MYSTARA setting is common or uncommon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Destroy Undead* has a RAVENLOFT icon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Disruption* col 2, ln 3, replace "destruction" with "disruption."`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Dismissal and Dolor* are known to be in the *Demonomicon of Iggwilv (WoG)*.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Drawmij's Instant Summons* frequency is common or uncommon; all other *Drawmij* spells are uncommon or rare.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Drawmij's Lasting Breath* casting time is 1.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Drawmis Light Step*, add (WoG).`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Drawmij's Merciful Metamorphosis*, add (WoG)`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `All *Drenal* spells are "(Updated from DRAGON Magazine.)"`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Drought—Hishna* has Maztica icon`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `"Most Common" list should be included in future printings.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                    ]
                },
                {
                    id: 'volume-2',
                    heading: 'Volume 2',
                    entries: [
                        {
                            page_number: '1152',
                            entry: [
                                `*Emirikol's Question* was omitted (it appears here).`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Empathic Control*, *Empathic Link*, and *Empathic Seizure* are also Necromancy school.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Enhance* is renamed *Enhance Ability* and the 5th paragraph is deleted (it duplicates the 4th).`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Enhanced Empathy* is also Necromancy school.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Evard's Black Tentacles* frequency is common or uncommon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Ghoul Touch*, para 1, line 3. Change "a halfling" to "or halfling"`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Improved Whispering Wind* delete icon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Intensify Nature* is 9th level.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Itembane* frequency in the MYSTARA setting is common.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Jaggar's Strengthened Bastion* frequency in the MYSTARA setting is common or uncommon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Janga's Jewel* optional school is "Artifice".`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Khazid's Procurement* frequeney is uncommon or rare.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Lesser Sign of Sealing* is 3rd level.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Life Force Transfer* optional school is "Artifice".`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Lifesteal* is listed as *Life Steal*.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Lysander* spells (all) have PLANESCAPE icons.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Malec-Keth's Flame Fist* frequency is uncommon or rare.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Maximillian's Earthen Grasp* frequency is uncommon or rare.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Maximillian's Story Grasp* frequency is uncommon or rare.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Melf's Minute Meteors* frequency is common or uncommon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Memory* delete Mentalism school.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Metal Skin* delete Alchemy school.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Metal to Rust* delete Alchemy school.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                    ]
                },
                {
                    id: 'volume-3',
                    heading: 'Volume 3',
                    entries: [
                        {
                            page_number: '1152',
                            entry: [
                                `Table of Contents page numbers: Intro 579; How 579; Frequency 582; Icons 583; Mo 585; N 610; O 630; P 651; Q 720; R. 723: S 760; List 862.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Night's Jambiya* has an AL-QADIM icon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Protection From Acid*, add the optional school Alchemy,`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Rain of Terror* has a RAVENLOFT icon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Remove Gate Ward*, the reversed form of *gate ward* should be noted on page 742.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Sand Gems* Note: change "Known" to "Restricted". Delete "virtually..."`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Sandswallow* Note: change "Known" to "Restricted". Delete "virtually..."`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Seduction—Witch*, para 2 ln 2, change "give" to "gives".`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Signature Sigil* has the DRAGONLANCE icon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Silence 15' Radius—Bard* has no icon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Spirit Armor* is restricted to necromancers and Shadow Mages; uncommon.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Protection From Fiends 10' Radius*: (Add)`,
                                `"...This spell fails instantly if the creature it is centered on crosses a dimensional or planar boundary of any sort; for example, *plane shift*, teleportation, phase shifting, entering or leaving an extra-dimensional space, or using a dimensional gate or portal."`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `Add: **Remove Gate Ward** *Reversed form see* gate ward.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `*Rip* Table: Replace entries in column 1 as follows:`,
                                `
<table>
<tr>
    <td>Leather:</td>
    <td>"10"</td>
    <td>to</td>
    <td>"15"</td>
</tr>
<tr>
    <td>Paper:</td>
    <td>"19"</td>
    <td>to</td>
    <td>"20"</td>
</tr>
<tr>
    <td>Wood, thick:</td>
    <td>"8"</td>
    <td>to</td>
    <td>"10"</td>
</tr>
</table>`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                        {
                            page_number: '1152',
                            entry: [
                                `**Emirikol's Question**`,
                                `**(Enchantment)**`,
                                ``,
                                `Level: 1`,
                                `Range: 10 ft.`,
                                `Components: V, S`,
                                `Casting Time: 12`,
                                `Duration: Instantaneous`,
                                `Area of Effect: 1 creature`,
                                `Saving Throw: Neg.`,
                                ``,
                                `To cast *Emirikol's question*, the caster points a finger at a target creature (usually a human, demihuman, or humanoid), and asks a single question. If the creature knows the answer and fails the saving throw, it instantly gives the answer as briefly and quickly as possible. The spell fails if the creature does not understand the question. Note that a brief answer might be meaningless to the caster. This spell will not overcome a sealing spell of higher level.`,
                                `**Notes:** Common or uncommon in the MYSTARA setting; otherwise, very rare.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL]
                        },
                    ]
                }
            ]
        }
    ]
});

module.exports = WIZARDS_SPELL_COMPENDIUM_VOLUME_4;