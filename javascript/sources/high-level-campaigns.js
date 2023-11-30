const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const DUNGEON_MASTER_OPTION_HIGH_LEVEL_CAMPAIGNS = {
    publication_year: '1995',
    publication_month: 'August',
    publication_print: 'First Printing',
    title: 'DUNGEON MASTER® Option: High-Level Campaigns',
    shortTitle: 'DMGR:HLC',
    id: 'dmgr-hlc',
    sourceAttribute: SOURCE.HIGH_LEVEL_CAMPAIGNS,
    chapters: [],
};
DUNGEON_MASTER_OPTION_HIGH_LEVEL_CAMPAIGNS.chapters.push({
    number: '3',
    heading: 'Spells and Magical Items',
    sections: [
        {
            heading: 'Additional Comments on Spells and Magical Items',
            foreword: `This section contains new and updated information for adjudicating magic use in your campaign. Items marked with a ✝ are from the *Tome of Magic*, spells marked with a ‡ from *The Complete Wizard's Handbook*, and all other spells and items are from the *Player's Handbook*. Some of the entries contain optional material, presented in a separate paragraph on a gray background.`,
            sections: [
                {
                    id: 'wizard',
                    heading: 'Wizard Spells',
                    entries: [
                        {
                            page_number: '69',
                            entry: [
                                `***Abi-Dalzim's Horrid Wilting✝:*** The maximum damage is 16d8.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '69',
                            entry: [
                                `***Alacrity✝:*** This spell can be very useful for reducing spell casting times on low-magic worlds (see page 47). Apply the local multiplier to a spell's casting time before calculating the *alacrity* spell's effect`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '69',
                            entry: [
                                `***Antimagic Shell:*** This spell temporarily suppresses magic within its area of effect, but it does not destroy or dispel enchantments or kill magical creatures. The spell has no effect on golems, *simulacrums*, *clones*, or other constructs which are imbued with magic during their creation process and are thereafter self-supporting. Most undead creatures are likewise unaffected. Some of these creatures' special abilities may be temporarily nullified, however (see below). Any creature, including a golem or other construct, that is conjured, summoned or from another plane of existence is hedged out of an *antimagic shell*.`,
                                `An *antimagic shell* suppresses any spell or spell effect brought into or cast into the area of effect. A hasted character, for example, is not hasted while he remains in the area of effect. Permanent spells are not removed, but cannot be used to produce magical effects within the area of effect. For example, a character who has been resurrected is not harmed by an *antimagic shell*, but a character with a permanent *tongues* spell loses the ability to converse in an unknown language while within the area of effect.`,
                                `An *antimagic shell* suppresses special attacks and innate abilities that function over a distance, including breath weapons, gaze attacks, sonic attacks, and psionics, but not touch-delivered special attacks such as energy draining or the corrosive effects of green slime. A lich, for example, cannot employ spells within an *antimagic shell* and its ability to cause fear is suppressed, but its paralyzing touch is still effective. Note that holy water is not magical and is fully effective within an *antimagic shell*.`,
                                `An *antimagic shell* suppresses most potions and their effects; see the note at potions for details.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '69-70',
                            entry: [
                                `***Astral Spell:*** This spell sends a projection of the caster's body into the Astral Plane. If the caster elects to take other characters along, the spell creates projections of them, too. An astral traveler can enter other planes while projecting, but forms a new physical body, identical to the original, to do so.`,
                                `Only magical items are projected along with a traveler's body, but normal equipment can be rendered temporarily magical by casting *Nystul's magical aura*, *continual light*, and other spells that temporarily imbue objects with magical properties. See page 51 for a brief discussion of the effects planar travel has on magical items. (The *PLANESCAPE* boxed set contains more details.)`,
                                `A traveler's physical body falls into a deathlike trance and requires no food or water while the caster is projecting. The physical forms of projected magical items become inert on the Prime Material Plane. Damage to a traveler's physical body does not affect the projected form, but the character dies immediately if his physical body is killed. Projected equipment vanishes if its physical form is destroyed.`,
                                `Damage inflicted on an astral traveler's projected form affects the character normally. If a traveler is damaged when returning to his body the damage must be healed normally.`,
                                `If an astral traveler dies, the character must attempt a system shock roll. If the roll fails, the character dies and any items projected along with him dissolve into nothingness. If the roll succeeds, the traveler is drawn back to his original body and wakes up with one hit point. The process is debilitating and the character cannot cast or memorize spells. The character can move at half speed and fight and use proficiencies and other skills, but at a -4 penalty to dice rolls. The restrictions and penalties remain until the character regains at least half of his hit points.`,
                                `A successful *dispel magic* cast on a traveler's physical body ends the spell, drawing the traveler back to the Prime Material Plane without being otherwise harmed; any companions accompanying the caster are likewise forcibly returned.`,
                                `While traveling through the Astral Plane, a projected form can move by pure thought; a character's astral movement rate is 30 times his Intelligence/Reason score.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.DISPEL_MAGIC],
                        },
                        {
                            page_number: '70',
                            entry: [
                                `***Blink:*** Spellcasting is not possible while blinking.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '70',
                            entry: [
                                `***Clairvoyance:*** The spellcaster must describe where the sensor this spell creates is to appear. Once created, the sensor cannot be moved.`,
                                `When placing the sensor, the caster must be precise and state the location in terms he knows or are fairly obvious. For example, the caster cannot place the sensor six inches from Ren the wizard's left ear if he has no idea where Ren is at the moment. He can place the sensor in the exact center of Ren's laboratory if he has a reasonable idea where the laboratory is located. A general location for the sensor is permissible if the location is based on something known or obvious to the caster. For example, the caster could specify the exact center of the chamber beyond a closed door nearby.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '70',
                            entry: [
                                `***Clairaudience:*** The caster must describe where the sensor this spell creates is to appear, see the clairvoyance spell for details.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '70',
                            entry: [
                                `***Color Spray:*** The area of effect for this spell is a plane five feet wide at the caster's hand, 20 feet long, and 20 feet wide at the far end.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '70',
                            entry: [
                                `***Cone of Cold:*** The maximum damage from this spell is 10d4+10 points.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '70',
                            entry: [
                                `***Continual Light:*** This wizard spell is not reversible, though the priest's version is.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '70',
                            entry: [
                                `***Delayed Blast Fireball:*** This spell inflicts up to 15d6+15 points of damage.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '70',
                            entry: [
                                `***Dispel Magic:*** A *dispel magic* spell cast directly upon an unattended magical item automatically renders the item inoperable for 1d4 rounds. If *dispel magic* is cast upon an item that is in the possession of another creature, the item is unaffected by the dispelling attempt if the creature makes a successful saving throw versus spell. If the creature fails its saving throw, the item is rendered inert for 1d4 rounds.`,
                                `Temporary effects from potions can be dispelled, see the section on potions for details.`,
                                `Permanent spells must be individually targeted to be dispelled, requiring a separate *dispel magic* for each permanent effect. Unlike a magical item, a permanent spell is destroyed, not temporarily rendered nonoperational, by a successful *dispel magic*. A creature or item never gains a saving throw to avoid a dispelling attempt against its permanent effects, but the *dispel magic* is not automatically successful either. The caster of the *dispel magic* must still be of higher level than the caster of the *permanency* spell, and he must still make a successful dispelling roll. More detailed information is found at the *permanency* spell description.`,
                                `Casting *dispel magic* on a creature or object does not radiate an area of effect. Thus, spells such as *stoneskin*, *minor globe of invulnerability*, and *barkskin* could not be dispelled as the result of trying to negate the magic of a *wand of lightning*.`,
                                `Spells and potions whose basic durations are permanent cannot be dispelled. A *cure light wounds* spell or *potion of extra-healing*, cannot be dispelled after their healing properties have occurred. A *potion of heroism* could be negated while its effects were in operation, however.`,
                                `A successful *dispel magic* versus a 10th-level spell temporarily negates the spell's effect for 1d4 rounds. It has no effect against a permanent 10th-level spell cast on a creature.`
                            ],
                            comment: [
                                `The paragraph about "Permanent spells must be individually targeted to be dispelled", I believe should say "Spells made permanent with the *permanency* spell must be individually targeted to be dispelled" to rule out spells such as *continual light*. This matches the text later in the paragraph that goes further into detail on the matter and it is more in line with the description of the *permanency* spell on page 73.`,
                                `The line about "spell and potions whose basic duration are permanent", should say "spell and potions whose basic duration are **instantaneous**" to be consistent with the changes added in the *Wizard's Spell Compendium*`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.DISPEL_MAGIC],
                        },
                        {
                            page_number: '70-71',
                            entry: [
                                `***ESP:*** The caster perceives the subject's surface thoughts—that is, whatever the subject happens to be thinking about at the time. Note that close interrogation might bring buried thoughts to the surface, but wary individuals can fight off the probe and gain a saving throw against the spell. The subject's Wisdom bonus (or penalty) always applies to the saving throw, along with an additional bonus of up to +4, at the DM's option.`
                            ],
                            optional: [
                                `The bonus depends on how closely the subject wants to guard the sought-after information. In addition, even seemingly innocuous questions could reveal information that the target of the spell desires to keep secret. In cases where there is a conflict between the bonuses listed, always grant the higher bonus.`,
                                `Trivial matters merit no bonus. These include questions related to general knowledge (What flag flies over the keep? and personal questions whose answers are obvious (What color is your hair?).`,
                                `A +1 bonus to the saving throw is warranted when the subject dislikes the interrogator or if the questioner is asking non-threatening but potentially embarrassing requests. For example, the subject is being prompted to reveal a minor transgression, such as overcharging a customer, or admit a minor shortcoming, such as fear of a spouse or military commander.`,
                                `A bonus of +2 is warranted if the interrogator is hostile to the subject or is asking damaging questions, For example, the subject is prompted to reveal indirectly harmful information, such as where personal treasure is hidden, or is asked to betray a trust.`,
                                `A +3 bonus is granted if the interrogator has attacked the subject or is asking seriously damaging questions. For example, the subject is being prompted to reveal a secret vital to his future, such as military plans or trade secrets.`,
                                `A +4 bonus to the save is warranted if the interrogator has killed one of the subject's companions or is asking deeply personal or damaging questions. For example, the subject is being prompted to reveal information vital to himself or to someone important to him, such as the location of a family heirloom, an employer's daily routine, or a carefully guarded password.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '71',
                            entry: [
                                `***Feather Fall:*** This spell can be cast in reaction to a fall or a missile attack, provided the caster has not already made an attack or cast a spell in the current round. In the case of an attack, the caster must win initiative to complete the spell before the missile arrives; use the normal initiative procedure from the *Player's Handbook*. In the case of a fall, the caster can be assumed to automatically cast this spell at the beginning of any fall of 10 feet or more provided he is not prevented from casting spells (silenced, gagged, etc.).`,
                                `If the caster is falling an extreme distance (in excess of 120 feet/level), the caster can opt to delay the *feather fall* spell so that its duration does not expire before the caster lands. When in doubt about the caster's ability to complete the spell before impact, roll initiative. The caster makes a normal roll, adding +1 for the spell's casting time, and the DM rolls for the fall, adding +1 for each 120 feet of free fall. If the caster loses the initiative roll, impact occurs before the spell is completed.`,
                                `This spell does not provide any method by which the spellcaster can determine the length of a fall. Thus, a wizard falling into a lightless pit has no way to determine if the fall is going to be 10 feet or 1,000 feet.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '71',
                            entry: [
                                `***Fly:*** It is important to remember that this spell bestows Maneuverability Class B upon the recipient, which limits the user to turns totaling 180 degrees or less per round. This might make it difficult for the user to negotiate a twisting corridor at full speed. Once the flying character has completed his allowable turns, he must either finish the round flying in a straight line or stop.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '71',
                            entry: [
                                `***Fear:*** If made permanent, a *fear* spell causes the recipient to continually radiate a fear aura.`,
                                `When cast on an area, a permanent fear effect creates a cone as described in the spell description. The caster can orient the cone in any direction, but the direction cannot be changed thereafter. Creatures entering the cone must save vs. spells or flee for one round per level of the caster at the time the spell was cast.`,
                                `When cast on an object or creature, the recipient radiates a cone of fear that can be pointed in any direction the recipient desires once per round as though wielding a *wand of fear*. Even though this attack requires no casting time or command word, it still counts as an action for that round and has an initiative modifier of +3.`
                            ],
                            optional: [
                                `In the permanent version, the caster is granted a limited ability to shape the spell's parameters to suit his needs. For example, a creature with a permanent fear aura might be granted a gaze attack with a range of 10-60 feet, a touch, or a continuous globe of fear with a radius of 5 to 20 feet.`,
                                `An object with a fear aura might cause fear when handled, shed continuous fear in a 5- to 20-foot radius, or inspire fear when viewed clearly.`,
                                `Permanent *fear* on an area might affect creatures passing though a portal or opening up to 60 by 60 feet, a cube of up to 30 feet per side, a sphere with a radius of up to 20 feet, or a hemisphere with a radius of up to 25 feet. The shape and dimensions of this spell cannot be changed once set.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '71-72',
                            entry: [
                                `***Haste:*** A creature who has been subjected to two or more haste-type effects gains the benefit of only the best of the group. A *haste* spell never magnifies the effects of magical items, such as *boots of speed* or a *potion of speed*.`,
                                `The one year of magical aging inflicted upon the recipients of this spell requires the recipient to make a system shock roll (see *Player's Handbook*, Chapter 1); failure results in death. This magical aging only occurs during the first round of the spell's effect, and multiple *haste* spells do not cause additional aging unless their effects overlap. For example, casting an additional *haste* spell one round before an existing *haste* spell ends would cause another year of magical aging once the new spell took effect.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.MAGICAL_AGING],
                        },
                        {
                            page_number: '72',
                            entry: [
                                `***Identify:*** Characters seeking to purchase magical items might employ this spell to get some idea what they are buying. Remember that the spellcaster must spend the eight hours preceding the casting of this spell purifying the items to be identified. Most NPCs do not allow anyone to keep an item for that long; at least not without a substantial advance payment. Dishonest sellers might pocket the advance and disappear, leaving the PCs with a cursed or bogus item.`,
                                `The spell also requires the caster to handle the item, and a good way to keep magic under control in a campaign is to require the caster to actually wear or wield the item as it was intended. This requirement means some cursed items are going to affect the caster.`,
                                `Be sure to impose the eight-point temporary Constitution loss the spell inflicts (which provides enemies with an excellent opportunity to attack the weakened spellcaster). Note that there is a limit to the number different magical properties this spell can reveal during a single casting and that the exact number of charges and magical pluses are never revealed.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '72',
                            entry: [
                                `***Invisibility:*** If this spell is made permanent, the recipient gains the ability to become invisible and remain so indefinitely. Any attack breaks the invisibility, but the recipient can become invisible again during the next round. The return to invisibility has an initiative modifier of +3, and the recipient can take no action other than normal movement during a round in which he becomes invisible.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.INVISIBILITY],
                        },
                        {
                            page_number: '72',
                            entry: [
                                `***Light:*** The wizard's version of this spell is not reversible.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '72',
                            entry: [
                                `***Limited Wish:*** The magical aging inflicted by this spell is a function of the caster's natural life span. Typical aging is one year for a human, two years for a halfling or half-elf, three years for dwarf, four years for a gnome, and five years for an elf.`
                            ],
                            optional: [
                                `This spell functions as a *wish* spell in most respects, but it cannot produce wealth or magical items. A *limited wish* can mimic the function of most other spells of 7th level or less. If used to alter reality, the changes must be minor. For example, a single creature automatically hits on its next attack, all opponents currently attacking the caster's party suffer a -2 attack penalty for the duration of the encounter, a single creature regains 20-50% of lost hit points, or a single creature fails its next saving throw are all possible uses for the spell.`,
                                `Major changes in reality persist for a limited duration, such as a single creature regaining all lost hit points for 24 hours, a hostile creature becoming cooperative for an hour, or an alert sentry falling asleep at his post.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.MAGICAL_AGING],
                        },
                        {
                            page_number: '72',
                            entry: [
                                `***Magic Mirror:*** This spell creates an invisible sensor similar to the one created by a *clairvoyance* spell; the sensor has the same visual capabilities as a *clairvoyance* sensor, but the spellcaster can also employ other spells to enhance the effect (see spell description). As with the *clairvoyance* spell, the user must state where the sensor is to appear; however, the user is free to state the sensors location with respect to the subject without knowing the subject's exact location. No matter what the spell's actual duration, the user's knowledge of the subject limits how long this spell can be safely used; see the *crystal ball* description in the *DUNGEON MASTER Guide* for details.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '72',
                            entry: [
                                `***Magic Staff✝:*** Spells stored in the staff are unusable on worlds rated M4 or less (see page 47). A low-magic world does not dispel the stored spells, however, and the spells can be used again if the staff is taken to a world with a higher rating before the *magic staff* spell's duration ends.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '72',
                            entry: [
                                `***Otiluke's Dispelling Screen‡:*** This spell has no effect on permanent spells unless those effects are in operation at the time the individual walks through the screen. For example, a creature made permanently invisible would become visible when walking through the screen and then disappear again on the other side. The screen must still successfully *dispel magic* against the spell in order to even briefly negate it. Magical items are likewise unaffected by exposure to a dispelling screen.`,
                                `Since this spell cannot focus its *dispel magic* effect, it cannot destroy permanent spells or negate the powers of magical items.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.INVISIBILITY, ATTRIBUTE.DISPEL_MAGIC],
                        },
                        {
                            page_number: '73',
                            entry: [
                                `***Permanency:*** The caster can use this spell to make another spellcaster's spell permanent. The *permanency* must be cast simultaneously with the spell to be made permanent and the *permanency* caster must touch the other caster.`,
                                `A permanent spell cast upon the caster himself or upon a living creature can be dispelled only by a spellcaster of a level greater than the *permanency* caster at the time he cast the spell. Further, the dispel effect must be targeted solely upon the caster to be effective (see *dispel magic* spell description and the note on *dispel magic* in this section).`,
                                `The following spells can be made permanent if the caster uses the spell on himself`,
                                `
<table>
<tr>
<td>*comprehend languages*</td>
<td>*protection from evil*</td>
</tr>
<tr>
<td>*detect disease‡*</td>
<td>*protection form hunger and thirst‡*</td>
</tr>
<tr>
<td>*detect evil*</td>
<td>*protection from normal missiles*</td>
</tr>
<tr>
<td>*detect invisibility*</td>
<td>*protection from paralysis✝*</td>
</tr>
<tr>
<td>*detect life‡*</td>
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
<td>*past life✝*</td>
</tr>
<tr>
<td colspan="2"><br>&emsp;The following spells can be made permanent if cast on a creature other than the *permanency* caster:<br><br></td>
</tr>
<tr>
<td>*enlarge*</td>
<td>*invisibility&ast;*</td>
</tr>
<tr>
<td>*fear&ast;*</td>
</tr>
<tr>
<td colspan="2"><br>&emsp;The following spells can be made permanent if cast on an object or area:<br><br></td>
</tr>
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
<td>*stinking cloud&ast;*</td>
</tr>
<tr>
<td>*distance distortion*</td>
<td>*teleport&ast;*</td>
</tr>
<tr>
<td>*enlarge*</td>
<td>*Von Gasik's refusal✝*</td>
</tr>
<tr>
<td>*fear&ast;*</td>
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
<td>*Otiluke's dispelling screen‡&ast;*</td>
<td>*protection from evil*</td>
</tr>
</table>`,
                                `A permanent spell cast upon an object or area can be dispelled by any caster, but the dispel effect must be targeted solely upon the object or area carrying the permanent spell. A *dispel magic* cast against a permanent effect can only dispel one effect per casting. See the notes at the *dispel magic* entry for more information.`,
                                ``,
                                `&ast; See this section for further notes on this spell.`
                            ],
                            comment: `The requirement given about "making another caster's spell permanent and that the two casters must touch each other"  is rather strict. In the *Wizard's Spell Compendium*, Volume 3 (February 1998) p. 656 this limitation is lifted. Here the caster can cast the desired spell first and then follow it with a *permanency*.`,
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.DISPEL_MAGIC],
                        },
                        {
                            page_number: '73',
                            entry: [
                                `***Polymorph Any Object:*** The DM usually must determine how long this lasts. If employed as a simple *polymorph other* or *stone to flesh* spell, the duration is permanent. If employed to turn a creature into an object or an object into another object, the duration is measured in hours or turns, as noted in the spell description.`,
                                `Generally, the duration should not be less than two hours or turns. A change whose duration is measured in turns should not last more than a week, and a change whose duration is measured in hours will not last more than a day. The more radical the change, the shorter the duration. For example, turning a human into a teacup involves a change of kingdom (animal to mineral), plus a change in size and shape: This change might last 1d4+1 turns.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '73',
                            entry: [
                                `***Polymorph Other:*** This spell causes the target to assume the form of another creature of the caster's choosing. The caster cannot turn a creature into a plant or object. If the recipient fails the saving throw against the spell, there is an immediate system shock check to see if the creature survives the change. If the recipient survives, the creature gains all the new form's purely physical abilities, but no abilities based on magic, agility, or intelligence. If the recipient's mentality changes to match the new form, the creature gains all the form's abilities.`
                            ],
                            optional: [
                                `If the caster chooses a form that cannot survive under the local conditions, the recipient suffers 1d4 to 1d8 points of damage each day, hour, turn, or round it is exposed to such conditions. For example, a goldfish in a desert might suffer 1d8 points of damage every round from heat and dryness. The same goldfish might suffer 1d6 points of damage every turn on a dungeon floor or 1d4 points of damage every day in a frigid mountain pool. Some creatures might be immune to environmental damage as long as their mentality remains intact. For example, a mummy turned into a goldfish does not suffer from the desert heat.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '73-74',
                            entry: [
                                `***Polymorph Self:*** When the caster assumes a new form, the caster gains only the new form's normal mode of movement and breathing. The caster does not gain any special attacks or unusual abilities. The spell description uses the form of an owl as an example—the caster gains the ability to fly but not an owl's extraordinary night vision (which is a special ability).`,
                                `When deciding what abilities are gained, the DM can immediately rule out any ability that does not arise from the form's physical characteristics. For example, a quickling's speed comes from its magically accelerated metabolism and is not derived purely from its physical form.`,
                                `In general, the DM should consider any non-flying movement rate of greater than 24 or flying movement rate of greater than 36 as a special ability.`
                            ],
                            optional: [
                                `The caster can assume the forms of creatures he has personally seen. For example, a caster who has never seen an ochre jelly cannot change into one.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '74',
                            entry: [
                                `***Power Word, Stun***: Creatures affected by this spell are unable to take any meaningful actions. They cannot communicate, employ spells, use magical items, initiate psionic abilities, use spell-like abilities, fight, or move freely. Movement is limited to one third the creature's current movement rate, or a rate of 3, whichever is less. Attacks against stunned creatures gain a +4 bonus.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '74',
                            entry: [
                                `***Protection from Evil:*** Contrary to popular belief, this spell does not hedge out undead creatures (except ghouls, see the *MONSTROUS MANUAL* accessory) unless they have been brought to the scene by a conjuration/summoning spell (such as *monster summoning III*) or have come from another plane.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '74',
                            entry: [
                                `***Rope Trick:*** A *rope trick* can support about 1,000 pounds, but the DM is free to assign a higher or lower limit. A frayed or rotten rope might break before the spell's limit is exceeded.`,
                                `Placing another extradimensional space inside the area created by a *rope trick* spell has catastrophic effects, see the note at extradimensional spaces in the magical items section (page 80).`,
                                `This spell is ineffective in the Astral Plane and in any locale where extradimensional spaces are inaccessible or nonexistent (see page 56). Creatures within the space created by a *rope trick* can breathe normally for the duration of the spell.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '74',
                            entry: [
                                `***Shape Change:*** This spell functions in much the same way as a *polymorph self* spell except that the caster can assume non-animal forms and there are no size limitations. Unlike the *polymorph self* spell, the caster gains any ability the assumed form has provided the ability is not magical or mental in nature. For example, a character who changes into an owl gains its night vision, but changing into a cockatrice does not grant the monster's petrifying touch. The spell does not bestow magic resistance.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '74',
                            entry: [
                                `***Stinking Cloud:*** A permanent *stinking cloud* remains where it is created and generally is not disturbed by minor effects. If dispersed by a strong breeze or a gust of wind spell, the vapors return one round after the breeze or wind ceases. Even hurricane force winds cannot destroy the cloud, though the vapors are dispersed and ineffective while the winds last.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '74',
                            entry: [
                                `***Stoneskin:*** This spell is subject to considerable abuse by player characters. Multiple *stoneskins* placed on a single creature are not cumulative. If two or more *stoneskin* spells are cast on the same creature, roll normally for the number of attacks each spell protects against. If a new spell protects against more attacks than the present spell does, the recipient gets the benefit of the increased protection; otherwise there is no effect. The caster does not necessarily know how many attacks the spell can shield him from.`,
                                `*Stoneskin* protects only against blows, cuts, pokes, and slashes directed at the recipient. It does not protect against falls, magical attacks, touch-delivered special attacks (such as touch-delivered spells, energy draining, green slime, etc.), or nonmagical attacks that do not involve blows (such as flaming oil, ingested or inhaled poisons, acid, constriction, and suffocation). *Stoneskin* lasts for 24 hours or until the spell has absorbed its allotment of attacks.`
                            ],
                            comment: `The 24 hour limit is presented as a hard rule, as oppose to the Sage Advices #247 that present it as a suggestion. #270 `,
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.STONESKIN],
                        },
                        {
                            page_number: '74-75',
                            entry: [
                                `***Teleport:*** Regular use of this spell is very dangerous, as there is a slim chance that there can be an error even if the caster travels to well-known locations. Additional notes regarding the definition of a well-known location are found under the *teleport without error* listing.`,
                                `Even minor alterations to a site can affect the caster's knowledge of a location. For example, Rozmare has spent many hours in her study, and the DM allows her to use the "very familiar" category when determining how accurate her *teleport* spells are when her study is the destination. If a rival breaks in and rearranges the furniture, however, Rozmare's knowledge falls to "studied carefully" or worse because she is not as familiar with the way things are currently arranged. If the intruder removed all the furniture and filled the study with boulders, Rozmare's knowledge falls to the "never seen" category.`,
                                `Some players might attempt elaborate precautions to protect their characters from the disastrous effects of failed *teleport* spells; as the DM, you should not discourage such efforts, but keep the following in mind:`,
                                `A *teleport* spell requires a firm surface as a destination. The caster cannot choose to appear in the air or in a pool of water to avoid teleporting low. It is possible, however to *teleport* to a firm surface with a space or water under-neath. If a teleporting character arrives low, roll 1d100 to see how many yards below the surface the caster's feet land. Note that a low *teleport* is always fatal if the caster arrives within any solid object no matter how thin or flimsy the object is; teleporting low into a pile of feathers is just as deadly as teleporting into rock. Teleporting low into water is not immediately fatal, but the character still might drown if he can't hold his breath until he reaches the surface.`,
                                `A permanent *teleport* spell affects a single object with a volume of no more than 1,000 cubic feet (a 10-foot cube) or an area no larger than 400 square feet (20 feet square. The caster names the destination and rolls once for accuracy. The destination cannot be changed once set. The caster can assign a command word or non-verbal triggering device if he desires. This can be as simple or complex as the caster desires; see the *magic mouth* spell description in the *Player's Handbook* for limitations. If no command or trigger is set, anyone passing through the area or touching the object is teleported.`,
                                `Usually, only one creature can be teleported each round. It is possible to have several creatures teleport simultaneously provided they are touching the first creature to trigger the teleport and the additional creatures and their equipment do not exceed the spell's weight limit, which is the same as the caster's weight limit at the time the original spell was cast.`
                            ],
                            optional: [
                                `If a permanent *teleport* spell is inaccurate, both the *permanency* and the *teleport* spell fail, but the caster can attempt a system shock roll to avoid losing a point of Constitution. If this option is in play, the caster also might be allowed to set multiple destinations with the same permanent *teleport* spell. The caster must name a different trigger for each destination and roll for accuracy each time a trigger is set.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '75',
                            entry: [
                                `***Teleport Without Error:*** As with *teleport*, this spell only allows travel to known locations. To know a location, the caster must learn what the place looks like or must be able to surmise where it is. For example, if the caster has been blindfold, carried into a chamber, then allowed to look around, the character could use *teleport without error* to return to the chamber even though he has no idea where the chamber is. The caster also could *teleport without error* into the courtyard of a castle visible in the distance even if he had never seen the courtyard before. Note that in both cases the caster could employ a normal *teleport* spell, but the caster's lack of knowledge about the destination would make the attempt dangerous.`,
                                `A *teleport without error* spell has no chance for error if the destination lies in the same world as the caster. If the caster accidentally specifies a destination already occupied by a solid object, the character is automatically displaced a sufficient distance to allow for a safe arrival.`,
                                `*Teleport without error* also allows travel between world (planes, crystal spheres, and pocket dimensions) but there is a chance for error, see the spell description for details.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '75',
                            entry: [
                                `***Unseen Servant:*** The force this spell creates does not possess any senses or powers of reason. It is incapable of any action except following its instructions to the letter. For example, an *unseen servant* can be sent to the bottom of a pool to grab whatever objects it encounters, but it cannot be directed to grab any coins or gems that it finds.`,
                                `The permanent version of this spell creates an invisible servant that always hovers within 30 feet of the caster. If destroyed, it reforms in 2d10 rounds.`,
                            ],
                            optional: [
                                `A permanent *unseen servant* can be cast on an area and instructed to endlessly perform a single task, such as forever cleaning a room. Once a task is set, it cannot be changed.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '75',
                            entry: [
                                `***Web:*** *Webs* must be properly supported if they are to be made permanent. Permanent webbing remains where it is created, if torn away, new webs spring into existence to take its place. Chunks of webbing carried out of the area of effect dissolve in seconds. Creatures can break through the webbing at the rates given in the spell description, but the webs immediately fill in behind them. Creatures who blunder into permanent webbing (or who are thrown in) can be trapped and suffocated if they fail to save vs. spell just as they can if caught in normal webbing.`,
                                `Permanent *webs* can be burned away with fire, but they spring back into being one round after the flames die away.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '75-76',
                            entry: [
                                `***Wish:*** Most uses of this spell lower the caster's Strength/Stamina score by three points and force the caster to take to his bed for 2d4 days. Lost Strength/Stamina returns at the end of the rest period. If the caster's Strength score falls to 0 or less, he loses consciousness until he has rested.`,
                                `A *wish* essentially allows the user to change reality to suit his tastes. The alteration, however, can have unintended consequences, especially if the *wish* is poorly worded or the caster gets greedy. Generally, the more local and personal the effect, the less chance there is for complications. Adjudicating this spell is tricky, as the DM must be sure to give the players results that reflect the power of the *wish*, but not so much that the players come to rely on *wishes* to solve all their problems. A *wish* can always duplicate any spell of 9th level or less.`,
                                `To avoid the bed rest and Strength/Stamina loss associated with a *wish* spell, the caster must effect a change that does not leave him better off than before the events that preceded the *wish*. For example, if the wizard's party was defeated by a powerful monster, the caster could *wish* that they had never met the creature. This change in reality brings his companions back to life as if the encounter had never occurred. The caster ages five years, but he does not have to rest for 2d4 days from the *wish* since he is not in a better position than before the events occurred.`,
                                `If the caster wished for his party to return but the monster to remain dead, he would be subject to the debilitative effects, since the creature being dead is considered an advantage that the spellcaster did not have before the events occurred. Any time a *wish* creates an advantage for the caster the loss of Strength and the 2d4 days of bed rest occurs.`,
                                `The effective power of a *wish* is based upon the availability of money and magical items in your campaign world. If these are in abundance, the power of the *wish* is enhanced. Likewise, in a world where money and magical items are scarce, the power of a *wish* is reduced. As DM, you need to determine the relative power of a *wish* in your world. Here are a few guidelines for a world that has a moderate amount of wealth and magical items:`,
                                `A *wish* can produce a magical item but not an artifact. To avoid suffering bed rest and Strength loss, the caster should place a limit on the length of time the item is kept, typically about one hour. The item isn't actually created, it's just borrowed and goes back where it came from when the duration expires. If the item is particularly rare or valuable, or has been borrowed before, the true owner might resent the loan.`,
                                `A *wish* can bring the user wealth. The DM should decide how much a character can *wish* for without trouble. The amount gained should be significant but not so great as to disrupt the game. For most campaigns, a random amount of 5,000 to 40,000 gp (5d8×1,000) shouldn't cause problems.`,
                                `A *wish* can change a character's race permanently, allowing an elf to become a human and advance without level limitations. Alternatively, that same elf could *wish* to advance in level like a human, but he could at most gain one level per *wish*. Each time he wanted to advance in level, he would have to cast another *wish* to allow it to occur.`,
                                `A *wish* can usually negate or change events that the user finds undesirable—this is why *wishes* are part of the AD&D game. A *wish* used to alter a campaign's history should be immediate—made on the spot or very soon after the event to be altered took place. *Wishes* that allow player characters a second chance to achieve a goal after an unlucky failure or disastrous mistake should be allowed, as long as the terms of the *wish* don't guarantee success.`,
                                `When assigning consequences to poorly worded or inappropriate *wishes*, it is best to follow two guidelines: First, the errant *wish* should follow the player's wording to the letter. Second, the result should follow the path of least resistance; that is, the result should involve the simplest and least complex warping of reality. For example, a greedy character who tries to *wish* for a *staff of the magi* might very well find himself standing naked and alone, staff in hand, in front of the staff's former owner (perhaps a dragon or lich). Escaping from the former owner and returning home is the character's problem.`,
                                `As with *limited wish*, the unnatural aging caused by the spell is dependent upon the race of the caster; five years for a human, 10 years for a halfling or half-elf, 15 years for a dwarf, 20 years for a gnome, and 25 years for an elf. The aging requires a system shock roll, and failure results in death for the caster.`,
                                `Chapter 1 of the *DUNGEON MASTER Guide* discusses the effects of wishes on ability scores, and additional information can also be found in *The Complete Wizard's Handbook*.`
                            ],
                            comment: [
                                `*Wishing* to raise an ability score that is 21 or higher requires 20 *wishes* per point increase. This rule is only available in the original 2E *DMG* (the blue book) p. 12. It was erroneously dropped from the reprinted 2E *DMG* (the black book)`,
                                `*The Complete Wizard's Handbook* discusses wishes on page 85.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.MAGICAL_AGING],
                        },
                    ]
                },
                {
                    id: 'priest',
                    heading: 'Priest Spells',
                    entries: [
                        {
                            page_number: '76',
                            entry: [
                                `***Age Creature✝:*** The reverse of this spell, *restore youth*, negates most sorts of magical aging, provided the aging is the magic's primary effect. It negates aging from *age creature* spells, *staffs of withering*, and attacks by ghosts. It does not reverse incidental aging effects, such as those inflicted by casting a *wish* or receiving a *haste* spell.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.MAGICAL_AGING],
                        },
                        {
                            page_number: '76',
                            entry: [
                                `***Breath of Life✝:*** The reverse of this spell, *breath of death*, produces a nonmagical disease that *breath of life* can cure.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '76',
                            entry: [
                                `***Combine:*** The central priest gains a boost to the spells and granted abilities he already has. The central priest gains no extra spells or granted abilities from this spell.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '76',
                            entry: [
                                `***Dispel Evil:*** In addition to driving away evil extra-planar and summoned creatures, this spell is effective against evil enchantment/charm spells and all forms of domination and possession.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '76',
                            entry: [
                                `***Dispel Magic:*** Refer to the wizard's version of this spell.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.DISPEL_MAGIC],
                        },
                        {
                            page_number: '76',
                            entry: [
                                `***Dragonbane✝:*** This spell can be the subject of a site focus✝.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '76',
                            entry: [
                                `***Draw Upon Holy Might✝:*** This spell cannot increase an ability score beyond 25.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '76',
                            entry: [
                                `***Extradimensional Pocket✝:*** The extradimensional space created by this spell functions as a *bag of holding* in all respects while its duration lasts.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '77',
                            entry: [
                                `***Imbue with Spell Ability:*** If the recipient dies before the imbued spells are cast, the imbue with spell ability caster regains the ability to cast the imbued spells.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '77',
                            entry: [
                                `***Know Time✝:*** This spell reveals the correct local time in terms the caster can most readily understand. If the caster has just arrived on a new world where he is unfamiliar with the names of hours, days, months, and years, the spell reveals a generic result that might not be immediately useful until the caster gets more information. For example, the spell might reveal that it is the 10th hour of the 23rd day of the 7th month in the 2,345th year. The hour is always given in relation to local midnight.`,
                                `If the world where the *know time* spell is cast has a time flow different from that of the base campaign, this spell has a 2% chance per caster level of giving an estimation of the difference. The caster can learn if time flows faster or slower and the general degree of difference; great, moderate, or minor. When using table 2 (page 46), ratings of 2-4 and 18-20 are great; ratings of 5-7 and 15-17 are moderate, and ratings of 8-9 and 13-14 are minor.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '77',
                            entry: [
                                `***Magic Font:*** This spell requires a specially prepared font for creating holy water (see page 96). The spell's maximum duration depends on the font's capacity, but the actual time the caster can scry depends on the caster's knowledge of the subject, as given in the *crystal ball* description in the *DUNGEON MASTER Guide*. For example, a *magic font* spell cast on a basin with a capacity of 60 vials remains active for one hour, but the actual time the caster can safely use the font is 30 minutes if the subject being viewed is known slightly.`,
                                `Several other spells can make a *magic font* more useful, see the *crystal ball* description in the *DMG* for the list. See the notes on the *magic mirror* and *clairvoyance* spells for more information on scrying.`
                            ],
                            comment: `Font for creating holy water is described on page 86-87, not 96. Skip Williams is as accurate as ever.`,
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '77',
                            entry: [
                                `***Mind Read✝:*** This spell functions just like the wizard spell *ESP* in most respects. Each time a *mind read* spell is cast, however, the priest can conduct a deep probe of a single creature, possibly gaining additional information as detailed in the spell description.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '77',
                            entry: [
                                `***Mistaken Missive✝:*** This spell can affect any document written in ink. For purposes of the spell, ink is any substance that is artificially compounded or altered to render it suitable for use in writing. Documents written with substances that have not been artificially prepared are not subject to this spell. For example, a note written in chalk cannot be altered by this spell, neither can a letter or agreement written in blood.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '77',
                            entry: [
                                `***Music of the Spheres✝:*** A successful saving throw against this spell negates only the entrancing effect. An opponent who successfully saves is free to attack the caster but still suffers the -3 penalty to charm-based saving throws for as long as he can hear the music.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '77',
                            entry: [
                                `***Nap✝:*** This spell does not reduce the study time (10 minutes per spell level) required to memorize spells. The spell has no effect if the recipient is unwilling or has received a *nap* spell in the previous 18 hours.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '77+79',
                            entry: [
                                `***Plane Shift:*** This spell sends the caster and up to seven other creatures on a one-way trip to another plane. This spell also allows travel between crystal spheres on the Prime Material Plane (though conditions within a particular sphere might prevent the spell from working). Each sphere requires a unique forked rod made of metal, just as each plane or dimension does. The travelers can return home via a second *plane shift* spell if they have a rod attuned to their home plane or world.`
                            ],
                            optional: [
                                `Two-way travel is possible with a single *plane shift* spell if the DM chooses to allow it. To return home without a second spell, the travelers need the same rod that was used in the original spell, and they must be on the same plane as their original destination. For example, a group of travelers who *plane shift* to the Outlands and then pass through a gate to the Abyss cannot use the original rod to return home unless they return to the Outlands first. They also cannot return home without another spell if they lose the original rod.`,
                                `*Acquiring rods:* When a priest gains access to this spell, he usually discovers the type of rod required to reach his home world and to reach the plane where his deity resides. The DM must decide how easy or difficult it is to discover additional rods. The surest way to obtain a rod attuned to a specific plane is to find a priest who has been there before. Otherwise, the priest must conduct his own research to discover what sort of rod is required to reach a particular place. The table of suggested costs assumes that planar travel is intended to be fairly rare, but not unknown. The DM should adjust costs up or down as appropriate.`,
                                `The priest must be in good heath and refrain from adventuring while researching a rod. If the priest has access to *commune* spells, the required research time is reduced one step (one year of research time is reduced to one month), but costs are not reduced. At the end of the research time, the priest must attempt a Wisdom/Intuition check. If failed, the research is unsuccessful but may be conducted again. If the check succeeds, the priest discovers the type of rod required to reach the plane he was researching; the priest knows the rod's shape and what materials are required to make it. Finding the materials and a craftsman to make the rod are another problem.`,
                                `The DM is free to decide what rods look like (there are many possible objects that can be described as forked rods). See volume two of the *ENCYCLOPEDIA MAGiCA* for examples.`,
                                `
<table>
<tr>
    <td colspan="4"><strong>Research Time and Costs</strong></td>
</tr>
<tr>
    <td><strong>Plane Type<sup>1</sup></strong></td>
    <td><strong>Research Cost<sup>2</sup></strong></td>
    <td><strong>Research Time<sup>2</sup></strong></td>
    <td><strong>Rod Cost<sup>3</sup></strong></td>
</tr>
<tr>
    <td>Inner Plane</td>
    <td>500/1,500</td>
    <td>1 Week/6 Weeks</td>
    <td>100</td>
</tr>
<tr>
    <td>Outer Plane</td>
    <td>1,000/3,000</td>
    <td>2 Week/3 Months</td>
    <td>300</td>
</tr>
<tr>
    <td>Demiplane</td>
    <td>5,000/15,000</td>
    <td>2 Months/1 Year</td>
    <td>400</td>
</tr>
<tr>
    <td>Pocket Dimension<sup>4</sup></td>
    <td>+2,000</td>
    <td>+1 Month</td>
    <td>—</td>
</tr>
<tr>
    <td>Prime Material World</td>
    <td>750/3,000</td>
    <td>3 Week/9 Weeks</td>
    <td>250</td>
</tr>
</table>`,
                                `¹ The Astral and Ethereal Planes are treated as known Inner Planes for purposes of research.`,
                                `² The numbers before the slashes are the cost and time requirements for planes that are generally known by the campaign's spellcasters. The numbers after the slash are the cost and time requirements for destinations about which little is known in the home campaign. All prices are in gold pieces.`,
                                `³ The number is the typical cost in gold pieces for constructing one rod, provided that the proper materials are available. Rods made of extremely rare materials can cost considerably more.`,
                                `⁴ Add these modifiers to the type of plane the Pocket Dimension is attached to. For example, researching a Pocket Dimension that is attached to the Ethereal Plane would cost 2,500 gp and take five weeks. The cost for the rod would remain 100 gp.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '79',
                            entry: [
                                `***Protection from Evil:*** Refer to the wizard version of this spell.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '79',
                            entry: [
                                `***Reflecting Pool:*** This spell requires a natural pool—a small body of water fed by a natural water source and contained in a setting generally free of artificial constructions. A naturally occurring puddle of rainwater could be considered a pool if it lies in a meadow but not if it lies in a city street.`,
                                `See the notes on the wizard spells *magic mirror* and *clairvoyance* for more information on how this spell functions.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '79',
                            entry: [
                                `***Speak With Dead:*** This spell has a range of one yard The dead do not lie, but they can be evasive, misleading, or obtusely literal if they answer the caster's questions at all (some creatures are allowed saving throws, see the spell description).`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '79',
                            entry: [
                                `***Unceasing Vigilance of the Holy Sentinel✝:*** A priest recovering from this spell must rest unless compelled to act by some external cause. Generally, the priest cannot respond to threats that he cannot perceive (though the priest always perceives a threat to himself if he suffers damage). A *nap* spell grants the priest 48 turns of rest.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '79',
                            entry: [
                                `***Weighty Chest:*** The weight increase created by this spell is activated only when a creature other than the caster attempts to move or lift the protected chest. It is not possible to use a *weighty chest* as a weapon. For example, the caster cannot cast this spell on a small coffer and then toss it at an opponent, hoping the foe will be bowled over or unbalanced by the coffer's great weight. Note, however, that a foe could be tricked into attempting to lift or move the chest.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                    ]
                },
                {
                    id: 'magical-items',
                    heading: 'Magical Items',
                    entries: [
                        {
                            page_number: '79-80',
                            entry: [
                                `***Amulet of Life Protection:*** A character whose psyche is held in the amulet does not truly die until seven days have passed. Until that time, any healing the character receives revives the character as long as the healing is sufficient to give the character a positive hit point total.`,
                                `The wearer can be raised or resurrected no matter how the character died. The *raise dead* or *resurrection* spells can be cast upon the amulet if the character's body has been destroyed.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '80',
                            entry: [
                                `***Bag of Holding:*** Living creatures can be placed within a bag of holding provided they don't exceed the bag's volume and weight restrictions. If the bag is left open, living creatures kept inside can breathe normally. The space inside a *bag of holding* is airtight, and if the bag is sealed the air inside runs out quickly. It is possible to carry water in a *bag of holding*. See the general note under extradimensional spaces for more information.`,
                                `
<table>
<tr>
    <td><strong>Bag Capacity</strong></td>
    <td><strong>Air&ast;</strong></td>
    <td><strong>Water&ast;&ast;</strong></td>
</tr>
<tr>
    <td>250 lbs.</td>
    <td>4 minutes</td>
    <td>30 gallons</td>
</tr>
<tr>
    <td>500 lbs.</td>
    <td>6 minutes</td>
    <td>60 gallons</td>
</tr>
<tr>
    <td>1,000 lbs.</td>
    <td>8 minutes</td>
    <td>120 gallons</td>
</tr>
<tr>
    <td>1,500 lbs.</td>
    <td>10 minutes</td>
    <td>180 gallons</td>
</tr>
</table>`,
                                `&ast; This is the amount of time a single creature in a sealed bag remains comfortable. After the listed time, the air becomes foul and the creature begins gasping; a -2 penalty applies to all attack rolls and ability checks until the creature gets fresh air. If the creature remains in the bag for twice the listed time, it must save vs. poison or fall unconscious until the creature gets fresh air. The save must be repeated each turn. Unconscious creatures also must save vs. poison every turn, and they die if they fail a second time.`,
                                `&ast;&ast; This shows the amount of water the bag can hold. Note that water is heavy and a bag carrying the listed amount of water only appears to be about 10% full as far as its cubic capacity is concerned. This makes it very easy to exceed the bag's weight limit and destroy it.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '80',
                            entry: [
                                `***Books/Tomes:*** The baneful effects from all books, tomes, manuals, and librams are triggered by perusing even a small passage. Magical books cannot be distinguished from other types of normal or magical books.`,
                                `A character who studies a book to find out what's in it triggers the book's effects. Magical books always vanish once they bestow a beneficial effect but usually remain behind if they inflict a harmful effect. Multi-classed characters get only the best possible result—other helpful results (and harmful ones) are ignored. For example, an elf fighter/mage/thief glances at a *manual of puissant skill at arms*, a book that is normally harmful to wizards. Because the elf is a fighter, he can ignore the harmful effect and gain one fighter level instead.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '80',
                            entry: [
                                `***Cloak of Displacement:*** The cloak's displacement power is ineffective against creatures or devices that cannot see the cloak's wearer. For example, an invisible character does not receive the cloak's power to make opponents miss their initial attack or the cloak's armor class bonus; likewise, most traps never "see" their targets and displacement does not foil them.`,
                                `Displacement is not effective against attacks that are not aimed, such as an avalanche or cave-in, and does not affect aimed attacks that cover an area, such as catapult shots or dragon tail slaps.`,
                                `Displacement is only partially effective against spell attacks. If a spell actually requires an attack roll, such as any touch-delivered spell, the cloak works normally and can cause the spell attack to miss if it is the first attack in an encounter. If the attacking spell does not require an attack roll, it can never be caused to "miss," though the cloak's +2 saving throw bonus applies.`,
                                `For example a *fireball* spell never misses, but the cloak wearer gains a +2 saving throw bonus. If a spell allows no saving throw, displacement has no effect on it; for example, a *magic missile* or *death spell* is never affected by displacement.`,
                                `Under normal conditions, the first melee or missile attack against a displaced creature automatically misses. The opponent is assumed to note the displaced creature's correct position and can keep track of it thereafter. If an opponent has multiple attacks, only the first one automatically misses. If there are multiple opponents, only the first attack by the first creature automatically misses. The remaining opponents are assumed to observe the failed attack and make the appropriate adjustments. If the DM determines that one or more creatures did not observe the initial attack, their first attacks automatically miss, too. Note that intelligent opponents who have reason to suspect a character is displaced might launch some type of probing attack to test the character's defenses, such as hurling a rock. Such attacks count as a combat action for the creatures attempting them.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.INVISIBILITY],
                        },
                        {
                            page_number: '80',
                            entry: [
                                `***Contract of Nepthas:*** A *mistaken missive* spell alters the words written on the a *contract of Nepthas* but does not free characters who have signed the contract from their obligations.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '80',
                            entry: [
                                `***Crystal Balls:*** See the notes under the *magic mirror* and *clairaudience* spells.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '80',
                            entry: [
                                `***Daern's Instant Fortress:*** A creature attacking the fortress's walls with a magical weapon inflicts one point of damage for every three rounds spent attacking the walls. If the escalade rules from the *PLAYER'S OPTION: Combat and Tactics* book are in play, the fortress can be attacked by bombardment engines or sapped by attackers equipped with magical weapons. In either case, all damage is subtracted from the fortress's total hit points.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '81',
                            entry: [
                                `***Deck of Many Things:*** Baneful effects from this item cannot be removed through *wishes* or lesser means, although a *wish* might indirectly help the PCs in dealing with the difficulties the cards inflict. For example, a *wish* can reveal where a victim of the void or the donjon is imprisoned. A *wish* also could reveal the identity of an enemy produced by the flames or the rogue.`,
                                `10th-level magic is effective against a *deck of many things* in the same way a *wish* is, but there are certain exceptions. 10th-level divination spells cannot be used to determine the identity of a particular card nor can magical wards negate a card's effects, but they can reveal the location of a creature trapped by the void or donjon card. There is no way to shield a creature from the harmful effects of the *deck of many things* while allowing the benefits to occur by using 10th-level spells.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '81',
                            entry: [
                                `***Extradimensional Spaces:*** These items tend to produce spectacular effects when one is placed within another. The following items contain extradimensional spaces: *bag of holding*, *bag of transmuting*, *flatbox*, *girdle of many pouches*, *Heward's handy haversack*, *portable hole*, and *pouch of accessibility*. The following spells produce extradimensional spaces: *extradimensional pocket*✝, *Mordenkainen's magnificent mansion*, and *rope trick*.`,
                                `In most instances, placing one extradimensional space inside another opens a rift to the Astral Plane, casting both the items and their contents through the rift. The items and anything contained within them are scattered randomly in the infinite depths of the Astral Plane. A *wish* can recover the contents of the extradimensional spaces, and it is possible that creatures held in the items might eventually find their way off the Astral Plane. Since all objects within the extradimensional space are scattered randomly, a creature cast into the Astral Plane through a rift does not have any better chance of recovering lost items than any other creature. A creature carried to the Astral Plane through a rift retains its possessions, but other loose items within the extradimensional space are randomly scattered.`,
                                `For example, a party of adventurers decides to cast a *rope trick* spell to create a safe haven where they can rest and sort a huge pile of coins they have found. Unfortunately, one of the characters has a *bag of holding* which contains several pieces of equipment and treasure. When the *bag of holding* enters the *rope trick*, both spaces are sucked into the Astral Plane. The characters occupying the *rope trick* are dumped in random locations in the Astral Plane (if the DM is feeling kind, they might arrive within sight of each other). The *bag of holding* is torn from its holder's grasp and its contents are spewed randomly across astral space.`,
                                `*Portable holes* can produce more dramatic effects. If another extradimensional space is placed within a *portable hole*, an astral rift opens, as described above. However, if a *portable hole* is placed within another extradimensional space, a gate to a random plane opens and all creatures within a 10-foot radius are drawn through it, no saving throw. The process destroys the *portable hole* and the other extradimensional space.`,
                                `*Flatboxes* are notoriously unstable. If a *flatbox* contacts any other extradimensional space it explodes, see the item description for details. The other item is sucked into the Astral Plane. A *portable hole* reacts as detailed above.`,
                                `Most extradimensional spaces contain only a finite amount of air, which limits how long living creatures can be kept inside. Refer to the *bag of holding* entry for the amount of air contained within these items.`
                            ],
                            optional: [
                                `Creatures drawn through the gate created by a *portable hole* arrive in a random location and fall in a heap within a 10-foot radius. Items in the extradimensional spaces are either lost on the Astral Plane (50%) or scattered randomly about the circle where the creatures land (50%). The DM makes the roll and can decide to check the items singly or in groups.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '81',
                            entry: [
                                `***Flatbox:*** The box can hold 60 gallons of water. A creature inside one of these items can breathe normally for six minutes if the lid is closed. Additional information can be found at the *bag of holding* and extradimensional spaces entries.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '81-82',
                            entry: [
                                `***Flight Items:*** Characters using magical items that grant flight have a daily movement rate in miles equal to twice the item's flight speed. For example, characters aboard a 4-person *carpet of flying* travel 48 miles a day in clear weather.`,
                                `The daily movement rate assumes 10 hours of flying time with ample rest stops; it is not an altogether pleasant experience to fly (consider the effects of rough air, unsteady seating, awkward body positioning, and exposure to weather). Characters in a hurry can eliminate most rest periods and stay aloft longer, spending 18-20 hours in the air and doubling the daily movement rate, but this subjects the riders to the effects of a forced march (see *Player's Handbook*, Chapter 14). Riders who stay aloft for 24 hours a day move at 2 ½ times their normal daily rate and suffer double force march penalties.`,
                                `When a party has access to magical items that grant flight, the DM should take special care to plan adventures that take this capability into account. Flying characters can easily evade most land-based encounters, so the adventure should include encounters with flying creatures or those that entice the characters to land. The DM should also determine the prevailing weather conditions in advance, as they affect both flying conditions and the party's ability to see and be seen while aloft.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '82',
                            entry: [
                                `***Gem of Insight:*** A character can benefit from one of these items only once, no matter how many gems are found over the course of the character's lifetime or how long a single *gem of insight* is kept.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '82',
                            entry: [
                                `***Girdle of Many Pouches:*** Though intended to hold equipment, this item's small pouches can hold about one gallon of water or a single tiny creature. If belted around a character's waist, the pouches are sealed and the creatures inside them have about four minutes of air. Additional information can be found at the *bag of holding* and extradimensional spaces entries.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '82',
                            entry: [
                                `***Heward's Handy Haversack:*** Though intended to hold equipment, this item's compartments can hold water or creatures. The side pouches can hold two gallons of water or one tiny creature each. The central compartment can hold eight gallons of water or a single small creature. If strapped around a character's back and closed, creatures inside the haversack have about four minutes of air. Additional information can be found at the *bag of holding* and extradimensional spaces entries.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '82',
                            entry: [
                                `***Iron Bands of Bilarro:*** There is no saving throw against this item, though the user must make a successful attack roll to trap a target. A failed attack roll never entraps a creature. An entrapped victim's companions can attempt a bend bars/lift gates roll to break the bands if the victim cannot get free. Spells such as *free action*, *wraithform*, *antimagic shell*, and *duo-dimension* are all effective means of escape, but teleportation magic merely transports the trapped creature from one place to another with the bands still trapping him. Magical items such as a *potion of slipperiness* or *ring of free action* are also effective against the magic of the bands.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '82',
                            entry: [
                                `***Javelin of Lightning:*** This item has a maximum range of 90 yards. The lightning created is a single bolt that extends from the target toward the thrower. Thus, a *javelin of lightning* should not be used if the target is within 30 feet.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '82',
                            entry: [
                                `***Librams and Manuals:*** See note at books.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '82',
                            entry: [
                                `***Medallion of ESP:*** Refer to the wizard spell *ESP*.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '82',
                            entry: [
                                `***Mirror of Mental Prowess:*** This item's thought-reading power works just like the wizard spell *ESP*. See the notes at the wizard spells *clairvoyance*, *clairaudience*, and *magic mirror* for information on the mirror's scrying powers.`,
                                `Travel through the portal created by the mirror is instantaneous. A *detect invisibility* or *true seeing* spell reveals the portal.`,
                                `The mirror's power to answer a question each week is similar to the priest spell *commune* in most respects, but the user is limited to questions about a creature whose reflection is being cast in the mirror.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '82',
                            entry: [
                                `***Periapt of Proof Against Poison:*** This item has three basic functions, but only one can be active at any given time. First, the periapt can allow a saving throw against poisons that normally do not allow one. The required number for the saving throw varies with the periapt's strength as shown in the *DUNGEON MASTER Guide*. Other magical protections are added to the roll. For example, a character with a *periapt of proof against poison +1* and a *ring of protection +1* would gain a saving throw of 18 against a toxin that normally allows no saving throw. The bonus for the periapt does not apply in cases where no saving throw is normally allowed.`,
                                `Second, the periapt negates any penalty a particularly strong toxin might impose. Note that the penalty is entirely negated, not merely subtracted from the periapt's bonus. For example, a particularly virulent poison might have a -4 penalty to all saving throws. Even a *periapt of proof against poison +1* completely negates the penalty. Likewise, a poison with a -1 penalty to saving throws completely negates the bonus of a +4 periapt.`,
                                `Third, the periapt grants a general bonus to normal saving throws against poisons. The bonuses are cumulative with other magical protections (but see the automatic failure rule on page 142).`
                            ],
                            comment: `The automatic failures on page 142 are a revised rule. The standard / core rule (which is missing from the *PHB* and *DMG*) only have failures on a natural 1.`,
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '82',
                            entry: [
                                `***Portable Hole:*** This item has a capacity of about 280 cubic feet. It has no weight limit, and about 2,100 gallons of water or 100,000 standard coins can be held inside. A creature in a *portable hole* has enough air for 10 minutes. See the note at *bag of holding* for the effects of depleted air, and see the general note on extradimensional spaces for more information.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '82-83',
                            entry: [
                                `***Potions:*** Once a potion, elixir, oil, or ointment takes effect on a creature, any effects that apply only to the imbiber cannot be removed unless a *dispel magic* is targeted directly at the creature. If the potion's effects extend to other creatures (such as the various potions of control) it can be dispelled normally. All potion effects are treated as magic cast at 12th level for purposes of dispelling.`,
                                `Potions consumed within an *antimagic shell* do not activate until they leave the area of effect. If a potion has been consumed, an *antimagic shell* suppresses its effects unless they are permanent in nature (such as a *potion of healing*). Temporary effects made permanent by a roll on the potion compatibility table from the *DMG* can be suppressed by an *antimagic shell*.`,
                                `Tasting a potion gives the character a minor clue as to the potion's effects. For example, a *potion of levitation* or a *potion of flying* might make the character feel light. Often the effect from tasting a potion is not immediately obvious, and the character must attempt some action before any effects are revealed. In the previous example, the taster might feel nothing initially but might walk with a bouncing gait or feel light-footed when walking. A potion's taste, smell, and texture might help identify it, but this tends to be unreliable because potions with identical effects can look, feel, smell, and taste differently if they were made in different laboratories or concocted at different times.`
                            ],
                            comment: `"potions that are permanent in nature" again should be changed to "potions that are instantaneous in nature" to be consistent with the Wizard's Spell Compendium.`,
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.DISPEL_MAGIC],
                        },
                        {
                            page_number: '83',
                            entry: [
                                `***Potion of Vitality:*** A character drinking this potion increases his body's natural healing ability to the rate of one hit point recovered every four hours. Damage that cannot be healed by magical means—such as from a sword of wounding—is restored. Damage that can be healed only by magical means—such as wounds from a chasme tanar'ri's claws or the fists of a clay golem—is not restored.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '83',
                            entry: [
                                `***Pouch o f Accessibility:*** Though intended to hold equipment, this item's internal pouches can hold about one gallon of water or a single tiny creature. Closing the pouch seals all the internal compartments, and the creatures inside them have about four minutes of air. See the note at *bag of holding* for the effects of depleted air, and refer to extradimensional spaces for more information.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '83',
                            entry: [
                                `***Quiver of Ehlonna:*** Only long, thin objects such as arrows, javelins, and bows can be placed in this item. Creatures cannot be placed inside, nor does the quiver hold water.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '83',
                            entry: [
                                `***Ring of Blinking:*** See note at the wizard spell *blink*.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '83-84',
                            entry: [
                                `***Ring of Contrariness:*** This cursed item always makes the wearer do things that run counter to what others desire. The wearer does not necessarily do the exact opposite of what is suggested. For example, if someone says "keep that ring on," the wearer wholeheartedly agrees. He might also suddenly become fearful that others desire the ring and attack the speaker. The ring's enchantment makes the wearer difficult to be around, always selecting the response that is most troublesome.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `***Ring of Regeneration:*** Wearers killed by fire, acid, disintegration, or death magic cannot regenerate back to life. However, damage inflicted by such attacks can be regenerated if the wearer survives the attack.`,
                                `A *ring of regeneration* only repairs damage inflicted on the wearer after the character puts on the ring. Damage inflicted before the character wore the ring is not regenerated, so placing a *ring of regeneration* on a dead or unconscious character has no effect.`,
                                `A *ring of regeneration* does not remove the need to eat, sleep, or breathe, nor does it prevent natural or unnatural aging.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `***Rod of Absorption:*** Spell levels stored in the rod can be used to power spells on low-magic worlds, even when local conditions would not normally allow the spell to be cast. For example, if the rod-wielder had a *wall of force* spell memorized, the character could use five levels of stored energy even on an M4 world, where 5th level spells normally don't work (see page 47).`,
                                `When used to absorb spells, the rod can absorb any spells directed at the wielder for the entire round, as selected by the rod-wielder. Absorbing spells counts as an action for the character, but initiative has no bearing on when a spell can be absorbed. The wielder can never absorb a spell that is not targeted specifically at him.`,
                                `For example, if the wielder is caught in the blast of a *fireball*, the rod cannot be used to absorb the spell because the wielder was not the target—the actual target was a point in space. If, however, the *fireball* was set to detonate directly on the wielder, it could be absorbed. Some spells, such as *hold person* and *slow*, are individually targeted on multiple creatures within an area. If the rod-wielder is one of those targets, he can absorb the entire spell.`,
                                `Absorbed spells have no effect whatsoever; their power has been stored in the rod. Thus, if a *hold person* is directed at the rod-wielder, the magic is totally negated—even for other targets. 10th-level spells cannot be absorbed.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `***Rod of Beguiling:*** The beguiling effect has a 20-foot radius. There is no saving throw, though magic resistance applies, as does resistance to mental attacks or control. Racial resistances to charm effects also apply. Affected creatures remain beguiled for the full one-turn duration even if they leave the radius.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.ELVEN_RESISTANCE],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `***Rod of Resurrection:*** Specialty priests require two charges instead of the usual one charge when resurrected. The racial charge requirement remains unchanged.`
                            ],
                            optional: [
                                `Specialty priests dedicated to deities of healing, protection, warfare, endurance, and similar areas of influence require only one charge to resurrect.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `***Rod of Rulership:*** Creatures being ruled need not remain within the rod's 150-foot radius once they have been affected. Most creatures get no saving throw, but magic resistance and resistance to mental attack or control applies. Racial resistances to charm effects also apply.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.ELVEN_RESISTANCE],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `***Rod of Security:*** This item transports creatures into a pocket dimension (see page 45) attached to the world where the rod was activated.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `***Rope of Entanglement:*** Use of this item does not require an attack roll. In addition to the size limitations included in the item description, all the rope's targets must fit within a single area of 200 square feet or less (eight 5-foot squares in any contiguous configuration). Targets who save vs. breath weapon can move 10 feet each round and can attack nearby creatures (but not the *rope of entanglement*).`,
                                `If other creatures fail their saving throw versus the rope, those who succeeded in their save can only move if the combined weight of those who failed is less than their maximum press. For instance, a fighter wearing a *girdle of hill giant strength* could drag up to 640 lbs. of weight along with him. Of course, groups of creatures must move generally the same direction to initiate an attack.`,
                                `Entwined creatures suffer a +2 initiative penalty and attacks against them are at +2. Targets who fail the save are held completely immobile and cannot perform any actions that require movement; attacks against immobile creatures are made with a +4 bonus.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '84-85',
                            entry: [
                                `***Spell Scrolls:*** A scroll is a temporary magical writing that stores spell energy in a portable form; it is essentially a precast spell waiting to be triggered. The level at which a priest spell read from scroll functions is never diminished due to planar distances (see page 49), but all scroll spells are subject to local conditions. For example, a *fireball* read from a scroll is ineffective on the Plane of Elemental Water—the spell creates a harmless bubble of vapor and the writing fades. Scrolls become inert if taken to a world rated M2 (see page 47) or lower, but are not otherwise harmed.`,
                                `Spell scrolls come in two types, priest and wizard. Priests cannot use wizard scrolls and vice versa. High-level thieves and bards have a chance to employ either type. A character who can use spell scrolls can read any spell of the appropriate type regardless of other restrictions. For example, an illusionist, who is normally barred from casting abjuration spells, can read a *dispel magic* spell from a scroll. Likewise, a priest can read priest spells from spheres normally unavailable. Note that the reader could still suffer the effects of spell failure by attempting to cast a spell that is too high a level (see *DUNGEON MASTER Guide*, Appendix 3).`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SCROLL],
                        },
                        {
                            page_number: '85',
                            entry: [
                                `***Sphere of Annihilation:*** A wizard's maximum chance to control a *sphere of annihilation* without the aid of a *talisman of the sphere* is 92% for a wizard of 21st level and an 18 Intelligence/Reason. There are no additional bonuses for being higher level or having an Intelligence/Reason score grater than 18.`,
                                `A *talisman of the sphere* doubles a wizard's Intelligence bonus for controlling the sphere. Adjusted control scores of 100% or more indicate automatic success, but other wizards trying to usurp control reduce the control chance; see the *sphere of annihilation* in the *DMG* description for details.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '85',
                            entry: [
                                `***Staff of the Magi:*** The staff's plane travel ability is similar to the priest spell *plane shift*, but no forked rod is required. The staff-wielder must be generally familiar with the destination plane either by making a previous visit or having information about the plane from a traveler who has been there. If a character wishes to research details on an unknown plane, refer to the note at *plane shift* for cost and time requirements.`,
                                `The absorption power of the staff works just like that of the *rod of absorption* except that the level of absorbed spell is not communicated to the staff-wielder. The decision to absorb must be made based on the appearance of the magic or, in the case of invisible effects, blind luck.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '85',
                            entry: [
                                `***Staff of Withering:*** The withering effect from this item makes one of the victim's limbs shriveled and useless; it has no effect on a creature's head or body. The withering effect requires three charges from the staff and must be announced at the beginning of the round. If the staff hits, roll randomly to see which limb is struck.`,
                                `If the victim is humanoid, roll 1d4 to determine which limb is struck: 1=right arm, 2=left arm, 3=right leg, and 4=left leg. A shriveled arm cannot wield a weapon or shield or be used to make unarmed attacks. The character suffers a -2 penalty to Dexterity for each shriveled arm. A humanoid cannot stand up or walk without a crutch if even one leg is shriveled. The character is reduced to a crawl and cannot make any physical attacks. The character suffers a -6 penalty to Dexterity. Getting two legs shriveled has no appreciable additional effect.`,
                                `If the target is a quadruped, the staff-wielder can usually reach only two of the opponent's limbs. Roll 1d6 to see which one is hit: 1-3=right, 4-6=left. Quadrupeds with one shriveled leg move at ⅔ their normal rate and cannot make attacks with the shriveled limb. A quadruped with two shriveled limbs cannot move or physically attack.`,
                                `Insectoid or multi-limbed creatures should be handled like quadrupeds, but their movement is unaffected as long as they have at least two functioning limbs on each side of the body.`,
                                `Attacks on flying creatures can hit the wings. For example, roll 1d6 to determine which limb on a flying humanoid is struck: 1=right arm, 2-left arm, 3=right leg, 4-left leg, 5=right wing, and 6=left wing. Creatures with even one shriveled wing cannot fly.`,
                                `Limbless creatures have no appendages to be withered and suffer no ill effects from withering except damage and aging.`,
                                `If the staff-wielder chooses to make a called shot and succeeds, do not make a random roll; the staff hits the selected area instead.`,
                                `If the critical hit rules from *PLAYER'S OPTION: Combat and Tactics* are in use, ignore all of the foregoing and use the hit location system from that book. The area struck suffers a "destroyed" result if the saving throw fails, even if it is not a limb (do not roll for severity). The staff-wielder does not need to score a critical hit to roll for hit location. If the staff-wielder does score a critical hit, the target suffers double damage and must roll saving throws vs. both the withering and the critical hit.`,
                                `There are several ways to repair withered limbs, but *regenerate* and *restoration* are the most common methods. Creatures that regenerate (through an innate ability or magical item) regain the use of a shriveled limb after regenerating the equivalent of 20 points of damage. For example, a character wearing a *ring of regeneration* would recover from a shriveled limb in 20 turns, and a troll would recover in seven rounds.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '85',
                            entry: [
                                `***Stone of Good Luck:*** The stone's +1 (or +5%) bonus applies whenever dice are rolled to see if the character (not the character's equipment) avoids an adverse happening. The bonus applies to saving throws, ability checks used as saving throws, system shock rolls, resurrection survival rolls, and any other event in which chance, not skill, is the determining factor. The bonus does not apply to spell failure, magical item creation, learning spells, or to most proficiency checks.`,
                                `The character's good luck applies to rolls for party treasure distribution and to proficiency checks involving luck or dodging, such as gaming and tumbling.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                        {
                            page_number: '85',
                            entry: [
                                `***Wand of Negation:*** The wand temporary renders magical devices unable to create spell-like effects. When a device's spell-like function is negated, any charges expended to produce the effect are lost, but the device is not otherwise harmed. A *wand of negation* has no effect on cast spells or a creature's spell-like abilities. The wand has an initiative modifier of +1.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION],
                        },
                    ]
                }
            ]
        }
    ],
});
DUNGEON_MASTER_OPTION_HIGH_LEVEL_CAMPAIGNS.chapters.push({
    number: '4',
    heading: 'Creating Magical Items',
    sections: [
        {
            id: 'holy-water',
            heading: 'Holy Water',
            entries: [
                {
                    page_number: '86-87',
                    entry: [
                        `*The Complete Priest's Handbook* gives rules for creating holy water. This section contains more detailed rules for high-level campaigns.`,
                        `Any cleric or specialty priest with access to the required spells can create holy water once a week, provided a suitable font is available. The required spells are: *create water*, *purify food & drink&ast;*, *bless&ast;*, *chant*, and *prayer*. The spells marked with an asterisk are used in reversed form to create unholy water.`,
                        `The priest must spend at least eight hours praying and meditating before casting the spells in the listed order. Any delay between finishing the casting of one spell and starting the next ruins the ceremony. The character must maintain the *chant* spell for one turn. Afterward, the cleric must rest at least eight hours before casting any spells. If forced into combat during this time, the character suffers a -4 penalty to all attack rolls, saving throws, and ability checks.`,
                        `A font is a specially blessed (or cursed) basin made of precious metals contained inside an elaborate case or pedestal fitted with a cover. A particular font can be used only once a week, and a temple or other religious building can contain only one font. Particularly large buildings might contain one font per wing or floor, at the DM's option.`,
                        `A font's maximum capacity for creating holy water depends on its cost—the more rare and expensive the font, the more favorably the deity to which it is dedicated looks upon it.`,
                        `The *create water* spell normally produces more water than a basin can hold; the extra water is either channeled away or assumed to be magically dissipated.`,
                        `
<table>
<tr>
    <td colspan="3"><strong>Holy Water Font Costs</strong></td>
</tr>
<tr>
    <td><strong>Capacity</strong></td>
    <td><strong>Basin</strong></td>
    <td style="text-align: right;"><strong>Pedestal</strong></td>
</tr>
<tr>
    <td>6 vials</td>
    <td>1d6×10+120 gp</td>
    <td style="text-align: right;">200 gp</td>
</tr>
<tr>
    <td>8 vials</td>
    <td>1d6×50+1000 gp</td>
    <td style="text-align: right;">350 gp</td>
</tr>
<tr>
    <td>10 vials</td>
    <td>1d6×100+1,800 gp</td>
    <td style="text-align: right;">500 gp</td>
</tr>
<tr>
    <td>14 vials</td>
    <td>1d4×500+5,200 gp</td>
    <td style="text-align: right;">750 gp</td>
</tr>
<tr>
    <td>18 vials</td>
    <td>1d4×1000+8,000 gp</td>
    <td style="text-align: right;">1,000 gp</td>
</tr>
<tr>
    <td>24 vials</td>
    <td>1d4×1000+15,000 gp</td>
    <td style="text-align: right;">1,250 gp</td>
</tr>
<tr>
    <td>32 vials</td>
    <td>1d4×1000+18,000 gp</td>
    <td style="text-align: right;">1,500 gp</td>
</tr>
<tr>
    <td>40 vials</td>
    <td>1d6×10,000+50,000 gp</td>
    <td style="text-align: right;">1,750 gp</td>
</tr>
<tr>
    <td>50 vials</td>
    <td>1d10×10,000+100,000 gp</td>
    <td style="text-align: right;">2,000 gp</td>
</tr>
</table>`,
                        `The basin and pedestal must be specially designed and fashioned; the process requires 2d4+2 weeks.`,
                        `Holy water loses its potency if removed from the font for more than one turn unless it is placed in a specially blessed crystal or leaded glass vial. Each vial holds a quarter pint of liquid and costs 5 gp. (Copper-pinching characters can sell empty vials on the open market for 1d4+1 gp each.)`,
                        `A font can be defiled and made useless for creating holy water (and for *magic font* spells) by touching it and casting a *curse* spell. Fonts can be nonmagically defiled by placing anything repugnant to the deity to which the font is dedicated to within its confines.`,
                        `A defiled font must be entirely remade. The font cannot be cleansed or restored, except by a *wish*, though the materials in the basin can be recycled and used in a new basin for 1d4+1×10% of the original cost. For example, Delsenora's temple has a font that can hold 32 vials of holy water. The initial cost was 21,000 gp for the basin plus 1,500 gp for the pedestal. If the font is defiled, the replacement cost is 1,500 gp for the pedestal and 20-50% of the original basin cost. Delsenora rolls a 2 and must pay 30% of the original cost—6,300 gp.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION],
                }
            ]
        }
    ]
});

module.exports = DUNGEON_MASTER_OPTION_HIGH_LEVEL_CAMPAIGNS;