const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const WIZARDS_SPELL_COMPENDIUM_VOLUME_3 = {
    publication_year: '1998',
    publication_month: 'September',
    publication_print: 'First Printing',
    title: "Wizard’s Spell Compendium Volume Three",
    shortTitle: "WSC 3",
    id: 'wsc-3',
    sourceAttribute: SOURCE.WIZARD_SPELL_COMPENDIUM,
    chapters: [],
};
WIZARDS_SPELL_COMPENDIUM_VOLUME_3.chapters.push({
    name: 'P',
    number: '',
    heading: 'P',
    sections: [
        {
            id: 'permanency',
            heading: 'Permanency',
            entries: [
                {
                    page_number: '656',
                    entry: [
                        `**Permanency**`,
                        ``,
                        `(Alteration)`,
                        `(*Universal*)`,
                        ``,
                        `Level: 8`,
                        `Range: Special`,
                        `Components: V, S`,
                        `Cast Time: 2 rds.`,
                        `Duration: Instantaneous`,
                        `Area of Effect: Special`,
                        `Saving Throw: None`,
                        ``,
                        `This spell affects the duration of certain other spells, making the duration permanent.The wizard can cast this spell in three different ways: on himself, on other creatures, and on an area.`,
                        `• *On Himself:* The wizard casts the desired spell and then follows it with the *permanency* spell. Each such *permanency* spell lowers the wizard's Constitution by 1 point. This application of *permanency* can be dispelled only by a wizard of greater level than the spellcaster was when he cast the spell. The personal spells upon which a permanency is known to be effective are as follows :`,
                        `
<table>
<tr>
    <td>*comprehend languages*</td>
    <td>*protection from evil*</td>
</tr>
<tr>
    <td>*detect disease*</td>
    <td>*protection from hunger and thirst*</td>
</tr>
<tr>
    <td>*detect evil*</td>
    <td>*protection from normal missiles*</td>
</tr>
<tr>
    <td>*detect invisibility*</td>
    <td>*protection from paralysis*</td>
</tr>
<tr>
    <td>*detect life*</td>
    <td>*read magic*</td>
</tr>
<tr>
    <td>*detect magic*</td>
    <td>*tongues*</td>
</tr>
<tr>
    <td>*infravision*</td>
    <td>*unseen servant*</td>
</tr>
<tr>
    <td>*past life*</td>
</tr>
<tr>
    <td>*protection from cantrips*</td>
</tr>
</table>`,
                        `• *On a Creature:* This application can be dispelled only by a spellcaster of greater level than the wizard was when he cast the spell. The following can made permanent if cast on another creature:`,,
                        `
<table>
<tr>
    <td>*enlarge*</td>
    <td>*fear*</td>
</tr>
<tr>
    <td>*invisibility*</td>
</tr>
</table>`,
                        `• *On an Object or Area*: These applications to other spells allow a *permanency* to be cast simultaneously with any of the latter. The entire spell complex can be dispelled normally, and thus negated .The *permanency* spell can be used to make the following object or area-effect spells permanent:`,
                        `
<table>
<tr>
    <td>*alarm*</td>
    <td>*prismatic sphere*</td>
</tr>
<tr>
    <td>*audible glamer*</td>
    <td>*solid fog*</td>
</tr>
<tr>
    <td>*dancing lights*</td>
    <td>*stinking cloud*</td>
</tr>
<tr>
    <td>*distance distortion*</td>
    <td>*teleport*</td>
</tr>
<tr>
    <td>*enlarge*</td>
    <td>*Von Gasik's refusal*</td>
</tr>
<tr>
    <td>*fear*</td>
    <td>*wall of fire*</td>
</tr>
<tr>
    <td>*gust of wind*</td>
    <td>*wall of force*</td>
</tr>
<tr>
    <td>*magic mouth*</td>
    <td>*web*</td>
</tr>
<tr>
    <td>*Otiluk's dispelling screen*</td>
</tr>
</table>`,
                        `The *permanency* spell is also used in the fabrication of magical items (see the 6th-level spell *enchant an item*). In the fabrication process, Constitution is only 5% likely to be lost.`,
                        `The DM may allow other selected spells to be made permanent. Researching this possible application of a spell costs as much time and money as independently researching the selected spell. If the DM has already determined that the application is not possible, the research automatically fails. Note that the wizard never learns what is possible except by the success or failure of his research.`,
                        `**Notes:** Common spell (PHB).`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.DISPEL_MAGIC]
                },
            ],
        },
    ]
});

module.exports = WIZARDS_SPELL_COMPENDIUM_VOLUME_3;