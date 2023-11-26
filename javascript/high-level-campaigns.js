const DUNGEON_MASTER_OPTION_HIGH_LEVEL_CAMPAIGNS = {
    publication_year: '1995',
    publication_month: 'August',
    publication_print: 'First Printing',
    chapter: 'Additional Comments on Spells and Magical Items',
    foreword: `This section contains new and updated information for adjudicating magic use in your campaign. Items marked with a ✝ are from the *Tome of Magic*, spells marked with a ‡ from *The Complete Wizard's Handbook*, and all other spells and items are from the *Player's Handbook*. Some of the entries contain optional material, presented in a separate paragraph on a gray background.`
}
DUNGEON_MASTER_OPTION_HIGH_LEVEL_CAMPAIGNS.wizard_spells = [
    {
        page_number: '69',
        entry: [
            `***Abi-Dalzim's Horrid Wilting✝:*** The maximum damage is 16d8.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '69',
        entry: [
            `***Alacrity✝:*** This spell can be very useful for reducing spell casting times on low-magic worlds (see page 47). Apply the local multiplier to a spell's casting time before calculating the *alacrity* spell's effect`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '69',
        entry: [
            `***Antimagic Shell:*** This spell temporarily suppresses magic within its area of effect, but it does not destroy or dispel enchantments or kill magical creatures. The spell has no effect on golems, *simulacrums*, *clones*, or other constructs which are imbued with magic during their creation process and are thereafter self-supporting. Most undead creatures are likewise unaffected. Some of these creatures' special abilities may be temporarily nullified, however (see below). Any creature, including a golem or other construct, that is conjured, summoned or from another plane of existence is hedged out of an *antimagic shell*.`,
            `An *antimagic shell* suppresses any spell or spell effect brought into or cast into the area of effect. A hasted character, for example, is not hasted while he remains in the area of effect. Permanent spells are not removed, but cannot be used to produce magical effects within the area of effect. For example, a character who has been resurrected is not harmed by an *antimagic shell*, but a character with a permanent *tongues* spell loses the ability to converse in an unknown language while within the area of effect.`,
            `An *antimagic shell* suppresses special attacks and innate abilities that function over a distance, including breath weapons, gaze attacks, sonic attacks, and psionics, but not touch-delivered special attacks such as energy draining or the corrosive effects of green slime. A lich, for example, cannot employ spells within an *antimagic shell* and its ability to cause fear is suppressed, but its paralyzing touch is still effective. Note that holy water is not magical and is fully effective within an *antimagic shell*.`,
            `An *antimagic shell* suppresses most potions and their effects; see the note at potions for details.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
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
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL, ATTRIBUTE_DISPEL_MAGIC],
    },
    {
        page_number: '70',
        entry: [
            `***Blink:*** Spellcasting is not possible while blinking.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '70',
        entry: [
            `***Clairvoyance:*** The spellcaster must describe where the sensor this spell creates is to appear. Once created, the sensor cannot be moved.`,
            `When placing the sensor, the caster must be precise and state the location in terms he knows or are fairly obvious. For example, the caster cannot place the sensor six inches from Ren the wizard's left ear if he has no idea where Ren is at the moment. He can place the sensor in the exact center of Ren's laboratory if he has a reasonable idea where the laboratory is located. A general location for the sensor is permissible if the location is based on something known or obvious to the caster. For example, the caster could specify the exact center of the chamber beyond a closed door nearby.`,
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '70',
        entry: [
            `***Clairaudience:*** The caster must describe where the sensor this spell creates is to appear, see the clairvoyance spell for details.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '70',
        entry: [
            `***Color Spray:*** The area of effect for this spell is a plane five feet wide at the caster's hand, 20 feet long, and 20 feet wide at the far end.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '70',
        entry: [
            `***Cone of Cold:*** The maximum damage from this spell is 10d4+10 points.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '70',
        entry: [
            `***Continual Light:*** This wizard spell is not reversible, though the priest's version is.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '70',
        entry: [
            `***Delayed Blast Fireball:*** This spell inflicts up to 15d6+15 points of damage.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
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
            `The paragraph about "Permanent spells must be individually targeted to be dispelled", I believe should say "Spells made permanent with the *permanency* spell must be individually targeted to be dispelled" to rule out spells such as *continual light*. This matches the text later in the paragraph that goes further into detail on the matter and it is more in line with the description of the *permanency* spell on page 73.`
            `The line about "spell and potions whose basic duration are permanent", should say "spell and potions whose basic duration are **instantaneous**" to be consistent with the changes added in the *Wizard's Spell Compendium*`,
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL, ATTRIBUTE_DISPEL_MAGIC],
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
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '71',
        entry: [
            `***Feather Fall:*** This spell can be cast in reaction to a fall or a missile attack, provided the caster has not already made an attack or cast a spell in the current round. In the case of an attack, the caster must win initiative to complete the spell before the missile arrives; use the normal initiative procedure from the *Player's Handbook*. In the case of a fall, the caster can be assumed to automatically cast this spell at the beginning of any fall of 10 feet or more provided he is not prevented from casting spells (silenced, gagged, etc.).`,
            `If the caster is falling an extreme distance (in excess of 120 feet/level), the caster can opt to delay the *feather fall* spell so that its duration does not expire before the caster lands. When in doubt about the caster's ability to complete the spell before impact, roll initiative. The caster makes a normal roll, adding +1 for the spell's casting time, and the DM rolls for the fall, adding +1 for each 120 feet of free fall. If the caster loses the initiative roll, impact occurs before the spell is completed.`,
            `This spell does not provide any method by which the spellcaster can determine the length of a fall. Thus, a wizard falling into a lightless pit has no way to determine if the fall is going to be 10 feet or 1,000 feet.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '71',
        entry: [
            `***Fly:*** It is important to remember that this spell bestows Maneuverability Class B upon the recipient, which limits the user to turns totaling 180 degrees or less per round. This might make it difficult for the user to negotiate a twisting corridor at full speed. Once the flying character has completed his allowable turns, he must either finish the round flying in a straight line or stop.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '71',
        entry: [
            `Fear: If made permanent, a *fear* spell causes the recipient to continually radiate a fear aura.`,
            `When cast on an area, a permanent fear effect creates a cone as described in the spell description. The caster can orient the cone in any direction, but the direction cannot be changed thereafter. Creatures entering the cone must save vs. spells or flee for one round per level of the caster at the time the spell was cast.`,
            `When cast on an object or creature, the recipient radiates a cone of fear that can be pointed in any direction the recipient desires once per round as though wielding a *wand of fear*. Even though this attack requires no casting time or command word, it still counts as an action for that round and has an initiative modifier of +3.`
        ],
        optional: [
            `In the permanent version, the caster is granted a limited ability to shape the spell's parameters to suit his needs. For example, a creature with a permanent fear aura might be granted a gaze attack with a range of 10-60 feet, a touch, or a continuous globe of fear with a radius of 5 to 20 feet.`,
            `An object with a fear aura might cause fear when handled, shed continuous fear in a 5- to 20-foot radius, or inspire fear when viewed clearly.`,
            `Permanent *fear* on an area might affect creatures passing though a portal or opening up to 60 by 60 feet, a cube of up to 30 feet per side, a sphere with a radius of up to 20 feet, or a hemisphere with a radius of up to 25 feet. The shape and dimensions of this spell cannot be changed once set.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '71-72',
        entry: [
            `***Haste:*** A creature who has been subjected to two or more haste-type effects gains the benefit of only the best of the group. A *haste* spell never magnifies the effects of magical items, such as *boots of speed* or a *potion of speed*.`,
            `The one year of magical aging inflicted upon the recipients of this spell requires the recipient to make a system shock roll (see *Player's Handbook*, Chapter 1); failure results in death. This magical aging only occurs during the first round of the spell's effect, and multiple *haste* spells do not cause additional aging unless their effects overlap. For example, casting an additional *haste* spell one round before an existing *haste* spell ends would cause another year of magical aging once the new spell took effect.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL, ATTRIBUTE_MAGICAL_AGING],
    },
    {
        page_number: '72',
        entry: [
            `***Identify:*** Characters seeking to purchase magical items might employ this spell to get some idea what they are buying. Remember that the spellcaster must spend the eight hours preceding the casting of this spell purifying the items to be identified. Most NPCs do not allow anyone to keep an item for that long; at least not without a substantial advance payment. Dishonest sellers might pocket the advance and disappear, leaving the PCs with a cursed or bogus item.`,
            `The spell also requires the caster to handle the item, and a good way to keep magic under control in a campaign is to require the caster to actually wear or wield the item as it was intended. This requirement means some cursed items are going to affect the caster.`,
            `Be sure to impose the eight-point temporary Constitution loss the spell inflicts (which provides enemies with an excellent opportunity to attack the weakened spellcaster). Note that there is a limit to the number different magical properties this spell can reveal during a single casting and that the exact number of charges and magical pluses are never revealed.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '72',
        entry: [
            `***Invisibility:*** If this spell is made permanent, the recipient gains the ability to become invisible and remain so indefinitely. Any attack breaks the invisibility, but the recipient can become invisible again during the next round. The return to invisibility has an initiative modifier of +3, and the recipient can take no action other than normal movement during a round in which he becomes invisible.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL, ATTRIBUTE_INVISIBILITY],
    },
    {
        page_number: '72',
        entry: [
            `***Light:*** The wizard's version of this spell is not reversible.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
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
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL, ATTRIBUTE_MAGICAL_AGING],
    },
    {
        page_number: '72',
        entry: [
            `***Magic Mirror:*** This spell creates an invisible sensor similar to the one created by a *clairvoyance* spell; the sensor has the same visual capabilities as a *clairvoyance* sensor, but the spellcaster can also employ other spells to enhance the effect (see spell description). As with the *clairvoyance* spell, the user must state where the sensor is to appear; however, the user is free to state the sensors location with respect to the subject without knowing the subject's exact location. No matter what the spell's actual duration, the user's knowledge of the subject limits how long this spell can be safely used; see the *crystal ball* description in the *DUNGEON MASTER Guide* for details.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '72',
        entry: [
            `***Magic Staff✝:*** Spells stored in the staff are unusable on worlds rated M4 or less (see page 47). A low-magic world does not dispel the stored spells, however, and the spells can be used again if the staff is taken to a world with a higher rating before the *magic staff* spell's duration ends.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '72',
        entry: [
            `***Otiluke's Dispelling Screen‡:*** This spell has no effect on permanent spells unless those effects are in operation at the time the individual walks through the screen. For example, a creature made permanently invisible would become visible when walking through the screen and then disappear again on the other side. The screen must still successfully *dispel magic* against the spell in order to even briefly negate it. Magical items are likewise unaffected by exposure to a dispelling screen.`,
            `Since this spell cannot focus its *dispel magic* effect, it cannot destroy permanent spells or negate the powers of magical items.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL, ATTRIBUTE_INVISIBILITY, ATTRIBUTE_DISPEL_MAGIC],
    },
    {
        page_number: '73',
        entry: [
            `Permanency: The caster can use this spell to make an- other spellcaster's spell permanent. The permonency must be cast simultaneously with the spell to be made permanent and the permanency caster must touch the other caster.`,
            `A permanent spell cast upon the caster himself or upon a living creature can be dispelled only by a spell- caster of a level greater than the permanency caster at the time he cast the spell. Further, the dispel effect must be targeted solely upon the caster to be effective (see dispel magic spell description and the note on dispel magic in this section).`,
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
</table>`,
            `The following spells can be made permanent if cast on a creature other than the *permanency* caster:`,
            `
<table>
<tr>
    <td>*enlarge*</td>
    <td>*invisibility&ast;*</td>
</tr>
<tr>
    <td>*fear&ast;*</td>
</tr>
</table>`,
            `The following spells can be made permanent if cast on an object or area:`,
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
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL, ATTRIBUTE_DISPEL_MAGIC],
    },
    {
        page_number: '73',
        entry: [
            `***Polymorph Any Object:*** The DM usually must determine how long this lasts. If employed as a simple *polymorph other* or *stone to flesh* spell, the duration is permanent. If employed to turn a creature into an object or an object into another object, the duration is measured in hours or turns, as noted in the spell description.`,
            `Generally, the duration should not be less than two hours or turns. A change whose duration is measured in turns should not last more than a week, and a change whose duration is measured in hours will not last more than a day. The more radical the change, the shorter the duration. For example, turning a human into a teacup involves a change of kingdom (animal to mineral), plus a change in size and shape: This change might last 1d4+1 turns.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '73',
        entry: [
            `***Polymorph Other:*** This spell causes the target to assume the form of another creature of the caster's choosing. The caster cannot turn a creature into a plant or object. If the recipient fails the saving throw against the spell, there is an immediate system shock check to see if the creature survives the change. If the recipient survives, the creature gains all the new form's purely physical abilities, but no abilities based on magic, agility, or intelligence. If the recipient's mentality changes to match the new form, the creature gains all the form's abilities.`
        ],
        optional: [
            `If the caster chooses a form that cannot survive under the local conditions, the recipient suffers 1d4 to 1d8 points of damage each day, hour, turn, or round it is exposed to such conditions. For example, a goldfish in a desert might suffer 1d8 points of damage every round from heat and dryness. The same goldfish might suffer 1d6 points of damage every turn on a dungeon floor or 1d4 points of damage every day in a frigid mountain pool. Some creatures might be immune to environmental damage as long as their mentality remains intact. For example, a mummy turned into a goldfish does not suffer from the desert heat.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
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
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '74',
        entry: [
            `***Power Word, Stun***: Creatures affected by this spell are unable to take any meaningful actions. They cannot communicate, employ spells, use magical items, initiate psionic abilities, use spell-like abilities, fight, or move freely. Movement is limited to one third the creature's current movement rate, or a rate of 3, whichever is less. Attacks against stunned creatures gain a +4 bonus.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '74',
        entry: [
            `***Protection from Evil:*** Contrary to popular belief, this spell does not hedge out undead creatures (except ghouls, see the *MONSTROUS MANUAL* accessory) unless they have been brought to the scene by a conjuration/summoning spell (such as *monster summoning III*) or have come from another plane.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '74',
        entry: [
            `***Rope Trick:*** A *rope trick* can support about 1,000 pounds, but the DM is free to assign a higher or lower limit. A frayed or rotten rope might break before the spell's limit is exceeded.`,
            `Placing another extradimensional space inside the area created by a *rope trick* spell has catastrophic effects, see the note at extradimensional spaces in the magical items section (page 80).`,
            `This spell is ineffective in the Astral Plane and in any locale where extradimensional spaces are inaccessible or nonexistent (see page 56). Creatures within the space created by a *rope trick* can breathe normally for the duration of the spell.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '74',
        entry: [
            `***Shape Change:*** This spell functions in much the same way as a *polymorph self* spell except that the caster can assume non-animal forms and there are no size limitations. Unlike the *polymorph self* spell, the caster gains any ability the assumed form has provided the ability is not magical or mental in nature. For example, a character who changes into an owl gains its night vision, but changing into a cockatrice does not grant the monster's petrifying touch. The spell does not bestow magic resistance.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '74',
        entry: [
            `***Stinking Cloud:*** A permanent *stinking cloud* remains where it is created and generally is not disturbed by minor effects. If dispersed by a strong breeze or a gust of wind spell, the vapors return one round after the breeze or wind ceases. Even hurricane force winds cannot destroy the cloud, though the vapors are dispersed and ineffective while the winds last.`
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
    {
        page_number: '74',
        entry: [
            `***Stoneskin:*** This spell is subject to considerable abuse by player characters. Multiple *stoneskins* placed on a single creature are not cumulative. If two or more *stoneskin* spells are cast on the same creature, roll normally for the number of attacks each spell protects against. If a new spell protects against more attacks than the present spell does, the recipient gets the benefit of the increased protection; otherwise there is no effect. The caster does not necessarily know how many attacks the spell can shield him from.`,
            `*Stoneskin* protects only against blows, cuts, pokes, and slashes directed at the recipient. It does not protect against falls, magical attacks, touch-delivered special attacks (such as touch-delivered spells, energy draining, green slime, etc.), or nonmagical attacks that do not involve blows (such as flaming oil, ingested or inhaled poisons, acid, constriction, and suffocation). *Stoneskin* lasts for 24 hours or until the spell has absorbed its allotment of attacks.`
        ],
        comment: `The 24 hour limit is presented as a hard rule, as oppose to the Sage Advices #247 that present it as a suggestion. #270 `,
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL, ATTRIBUTE_STONESKIN],
    },
    {
        page_number: '74',
        entry: [
            `***Teleport:*** Regular use of this spell is very dangerous, as there is a slim chance that there can be an error even if the caster travels to well-known locations. Additional notes regarding the definition of a well-known location are found under the teleport without error listing.`,
            `Even minor alterations to a site can affect the caster's knowledge of a location. For example, Rozmare has spent many hours in her study, and the DM allows her to use the "very familiar" category when determining how accurate her teleport spells are when her study is the destina-tion. If a rival breaks in and rearranges the furniture, how-ever, Rozmare's knowledge falls to "studied carefully" or worse because she is not as familiar with the way things are currently arranged. If the intruder removed all the furniture and filled the study with boulders, Rozmare's knowledge falls to the "never seen" category.`,
            `Some players might attempt elaborate precautions to protect their characters from the disastrous effects of failed teleport spells; as the DM, you should not discourage such efforts, but keep the following in mind:`,
            `A teleport spell requires a firm surface as a destination. The caster cannot choose to appear in the air or in a pool of water to avoid teleporting low. It is possible, however to teleport to a firm surface with a space or water under-neath. If a teleporting character arrives low, roll 1d100 to see how many yards below the surface the caster's feet land. Note that a low teleport is always fatal if the caster arrives within any solid object no matter how thin or flimsy the object is; teleporting low into a pile of feathers is just as deadly as teleporting into rock. Teleporting low into water is not immediately fatal, but the character still might drown if he can't hold his breath until he reaches the surface.`,
            `A permanent teleport spell affects a single object with a volume of no more than 1,000 cubic feet (a 10-foot cube) or an area no larger than 400 square feet (20 feet square. The caster names the destination and rolls once for accuracy. The destination cannot be changed once set. The caster can assign a command word or non-verbal triggering device if he desires. This can be as simple or complex as the caster desires; see the magic mouth spell description in the Player's Handbook for limitations. If no command or trigger is set, anyone passing through the area or touching the object is teleported.`,
            `Usually, only one creature can be teleported each round. It is possible to have several creatures teleport simultaneously provided they are touching the first creature to trigger the teleport and the additional creatures and their equipment do not exceed the spell's weight limit, which is the same as the caster's weight limit at the time the original spell was cast.`
        ],
        optional: [
            `If a permanent teleport spell is inaccurate, both the permanency and the teleport spell fail, but the caster can attempt a system shock roll to avoid losing a point of Constitution. If this option is in play, the caster also might be allowed to set multiple destinations with the same permanent teleport spell. The caster must name a different trigger for each destination and roll for accuracy each time a trigger is set.`,
        ],
        attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
    },
];