const {SOURCE, GAME_SYSTEM ,ATTRIBUTE} = require('../constants')

const THE_COMPLETE_BOOK_OF_NECROMANCERS = {
    publication_year: '1995',
    publication_month: 'March',
    publication_print: '',
    title: "The Complete Book of Necromancers",
    shortTitle: "Necromancers Handbook",
    id: 'necromancers-handbook',
    sourceAttribute: SOURCE.NECROMANCERS_HANDBOOK,
    chapters: [],
};
THE_COMPLETE_BOOK_OF_NECROMANCERS.chapters.push({
    name: 'Chapter',
    number: '4',
    heading: 'The Dark Art',
    sections: [
        {
            id: 'wizard-spell-selection',
            heading: 'Spell Selection for the Wizard',
            sections: [
                {
                    id: 'black-necromancy',
                    heading: 'Criminal or Black Necromancy',
                    entries: [
                        {
                            page_number: '46',
                            entry: [
                                `The *Player's Handbook* and other sources of necromantic spells tend to be vague or (worse yet) contradictory about what constitutes an evil spell. For instance, the classic spell of the necromancer, *animate dead*, contains a clear admonition against its use by good characters.`,
                                `However, certain other necromantic spells (in the *Player's Handbook*, particularly) have been written in a way that conceals, or at least understates, their baneful nature. The description of *summon shadows* mentions nothing about the moral implications of summoning several chaotic evil beings from the Negative Material Plane to serve the caster (usually by draining the life forces of the wizard's enemies). Hence, there is obviously a need for some clearer definitions.`,
                                `Criminal necromancy includes all spells which are cast for the sole purpose of inflicting permanent physical harm on other individuals, or (worse yet) draining their immortal life force. Consider the *death spell* (another classic from the *PHB*), which supposedly "snuffs out the life forces of creatures... instantly and irrevocably."`,
                                `In context with other punishing spells like *chain lightning* and *disintegrate*, *death spell* might not appear terribly horrible or evil. Take another look at the second line in the description which nonchalantly states that "[victims] cannot be raised or resurrected"! In other words, the spell utterly annihilates the victim's life force, past all hope of restoration, save by the omnipotent *wish*.`,
                                `Black necromancy usually brings death, physical injury, or spiritual annihilation in an excruciating and terrifying manner. In order to make the evil nature of a spell painfully clear, the DM should feel free to improvise, exaggerate, or embellish a particularly dry description. Consider the account of *death spell* given in the chapter introduction. This spell and the others on Table 10 fall under the classification of black necromancy and, as such, are most appropriate for evil villains.`,
                                `In game terms, therefore, every time a wizard (NPC or PC) uses a spell of black necromancy, the DM should secretly roll a *powers check*. By their very nature, these spells attract the attention of evil deities who will seek to reward, punish, and ultimately subvert the wizard involved. Criminal necromancy embraces all spells which inflict bodily or spiritual damage, spread disease, bring untimely death, or cause pain. The DM is encouraged to devise similarly nasty descriptions for all of the spells listed in Table 10. Don't sermonize to your players about the evils of criminal necromancy—have their characters experience the horrors themselves. If, despite your warnings, players willingly and consistently employ evil spells, feel free to impose any of the afflictions outlined in Chapter Three.`,
                                `<br>
**Table 10:** Forbidden Spells of Black Necromancy
<br>
<table>
<tr>
    <th>Level</th>
    <th style="text-align: left;">Spells</th>
</tr>
<tr>
    <td>1st</td>
    <td>*chill touch, corpse visage (WH), exterminate*</td>
</tr>
<tr>
    <td>2nd</td>
    <td>*choke (WH), ghoul touch (WH), rain of blood (SH)*</td>
</tr>
<tr>
    <td>3rd</td>
    <td>*bone club (WH), mummy touch (FOR), pain touch (WH), vampiric touch, rain of blood (SH), skull trap*</td>
</tr>
<tr>
    <td>4th</td>
    <td>*Beltyn's burning blood (FOR), brainkill, contagion, enervation*</td>
</tr>
<tr>
    <td>5th</td>
    <td>*bone blight, mummy rot (WH), summon shadow, throbbing bones (WH)*</td>
</tr>
<tr>
    <td>6th</td>
    <td>*blackmantle (WH), dead man's eyes (WH), death spell, flames of justice (AA), ghoul gauntlet, Grimwald's gray mantle (FOR), lich touch (FOR)*</td>
</tr>
<tr>
    <td>7th</td>
    <td>*finger of death, suffocate (TOM)*</td>
</tr>
<tr>
    <td>8th</td>
    <td>*Abi-Dalzim's horrid wilting (TOM), death link (FOR), deathshroud, defoliate (WH), shadow form (WH)*</td>
</tr>
<tr>
    <td>9th</td>
    <td>*conflagration (AA), death ward, energy drain, wail of the banshee (TOM)*</td>
</tr>
</table>
                                `
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                    ]
                },
            ],
        },
        {
            id: 'new-wizard-spells',
            heading: 'New Wizard Spells',
            entries: [
                {
                    page_number: '47',
                    entry: [
                        `The new wizard spells in this section include over two dozen examples of white, gray, and black necromancy. The DM may use these new spells to augment the standard selection available in the *Player's Handbook (PHB)*. The DM can also find interesting necromancy spells in the *Tome of Magic (TOM)*, *Complete Wizard's Handbook (WH)*, *Arabian Adventures (AA)*, and *Forgotten Realms Adventures* hardcover *(FOR)*. For the DM's convenience, relevant spells from all these sources have been included in the appendices and spell index at the end of the book. The DM may also refer to *Van Richten's Guide to the Lich*, though almost all of the spells from this source have been designed for use by undead. Finally, the DM may care to adapt some of the new priest spells from Chapter Six, though the wizard versions should be at least one or two levels higher than their clerical counterparts.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.CLASS],
                },
            ]
        },
    ],
});

THE_COMPLETE_BOOK_OF_NECROMANCERS.chapters.push({
    name: 'Chapter',
    number: '6',
    heading: 'The Priest Sphere',
    sections: [
        {
            id: 'intro',
            heading: 'Intro',
            entries: [
                {
                    page_number: '77',
                    entry: [
                        `All spells belonging to the revised necromantic priest sphere have been listed in Appendix Three. The sphere has been slightly expanded to include such standard spells as *slow poison*, *remove paralysis*, *speak with dead*, *neutralize poison*, and *dispel evil*, which would obviously help priests involved with the dying or the dead. In addition, evil priests need access to the spells *poison* and *dispel good*. Finally, since Appendix Three is intended to help the DM choose spells for NPC death priests (who tend to be evil), all spells have been listed according to their harmful title (not the helpful reverse, as they are listed in the *PHB*).`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.CLASS],
                },
            ]
        },
    ],
});

module.exports = THE_COMPLETE_BOOK_OF_NECROMANCERS;