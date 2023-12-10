const {SOURCE, GAME_SYSTEM , ATTRIBUTE} = require('../constants')

const DUNGEON_MASTER_GUIDE = {
    publication_year: '1995',
    publication_month: 'April',
    publication_print: 'First Printing, May 2013',
    title: 'Dungeon Master Guide Revised',
    shortTitle: 'DMG',
    id: 'dmg',
    sourceAttribute: SOURCE.DMG,
    chapters: [],
};
DUNGEON_MASTER_GUIDE.chapters.push({
    name: 'Chapter',
    number: '9',
    heading: 'Combat',
    sections: [
        {
            id: 'special-attacks',
            heading: 'Special Attacks',
            sections: [
                {
                    id: 'charmed-creatures',
                    heading: 'Attacking with Charmed Creatures',
                    entries: [
                        {
                            page_number: '89-90',
                            entry: [
                                `There may be times when charmed creatures, perhaps even party members, will be compelled to fight their companions. When this happens, remember that the creature, NPC, or player character no longer has control over his decisions.`,
                                `If a charmed player character is compelled to attack his friends, he must do so in an effective manner. Grappling or punching is not acceptable if the character possesses a better method. At the same time, the charmed character need use only those abilities that are obvious to his new (and, one hopes, temporary) master.`,
                                `Thus, if a charmed fighter with a sword at his side is carrying a *javelin of lightning*, he fights with his sword unless specifically commanded to do otherwise. The master in this case could not command him to use the *javelin of lightning* unless he had some way of knowing the fighter carried one.`,
                                `Similarly, a wizard's master must know which spells his charmed spellcaster possesses, and which he has memorized. This is most commonly learned simply by asking. However, due to the charmed fellow's befuddled state, there is a 25 percent chance that he will unwittingly cast a spell harmful to himself and his master. Relying on charmed spellcasters can be a very risky business.`,
                                `<br>**Limits on Charmed Creatures**`,
                                `A charmed creature has two critical limitations on its actions. First, it cannot carry out commands requiring individual initiative. The master cannot say, "Fight with your most powerful magical item!" since this requires judgment on the part of the charmed character. Second, the charmed creature won't obey any command that would obviously lead to selfdestruction. Since combat is composed of many different variables, fighting in itself is not clearly self-destructive, even against hopeless-seeming odds.`,
                                `<br>**Degrees of Charm**`,
                                `There are two degrees of charm power in the AD&D game, that of monsters and that of characters.`,
                                `The charm power of monsters, such as vampires, makes verbal communication unnecessary. The charmed creature understands the monster's desires through mental command. A character charmed by this power obeys the commands of his master totally, at least within the limits of his ability and the guidelines above.`,
                                `The charm power of characters is more limited. The master must have some method of making himself understood to the charmed creature, preferably by speaking the same language. Otherwise, charmed creatures can attempt to follow their master's hand gestures. This can be a useful and entertaining spur to role-playing.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.CHARM],
                        },
                    ],
                }
            ],
        },
    ],
});
DUNGEON_MASTER_GUIDE.chapters.push({
    name: 'Chapter',
    number: '11',
    heading: 'Encounters',
    sections: [
        {
            id: 'surprise',
            heading: 'Surprise',
            entries: [
                {
                    page_number: '139-140',
                    entry: [
                        `Before an encounter begins, a check for surprise may be necessary. Given the right conditions, it is possible for either side in an encounter to surprise the other. In essence, the encounter is just as random for the monsters as it is for the player characters.`,
                        `As noted in the *Player's Handbook*, surprise is not always assured nor is the check always necessary. Light, excessive noise, and other types of prior warning can cancel the need for the check. Surprise isn't usually possible when no form of concealment is possible (as in the case of two ships at sea), though darkness, storms, and the like do act as concealment.`,
                        `In some cases, one side may be able to surprise the other without the other group having the same opportunity. This is particularly true when the player characters are using lanterns or torches and the monsters are not. Seeing the light, the monsters can try to sneak closer and get the jump on the player characters.`,
                        `When making a surprise roll, there are many factors that can increase or decrease the chance of surprise. Some of these are very exotic or very particular to a situation, but others can be anticipated. The more common modifiers are listed on Table 57. By comparing other situations to these modifiers, the DM has a guideline for making appropriate adjustments.`,
                        `
<table>
<tr>
    <td colspan="2" style="text-align: center;">Table 57:</td>
</tr>
<tr>
    <td colspan="2" style="text-align: center;"><strong>Surprise Modifiers</strong></td>
</tr>
<tr>
    <td style="vertical-align: bottom;"><strong>Other Party is:</strong></td>
    <td><strong>Group's<br>Modifier</strong></td>
</tr>
<tr>
    <td>&emsp; Silenced</td>
    <td style="text-align: center;">-2</td>
</tr>
<tr>
    <td>&emsp; Invisible</td>
    <td style="text-align: center;">-2</td>
</tr>
<tr>
    <td>&emsp; Distinctive odor<br>&emsp;&emsp;(smoke, powerful stench, etc.)</td>
    <td style="text-align: center; vertical-align: top;">+2</td>
</tr>
<tr>
    <td>&emsp; Every 10 members</td>
    <td style="text-align: center;">+1</td>
</tr>
<tr>
    <td>&emsp; Camouflaged</td>
    <td style="text-align: center;">-1 to -3</td>
</tr>
<tr>
    <td><strong>PC Party is:</strong></td>
</tr>
<tr>
    <td>&emsp; Fleeing</td>
    <td style="text-align: center;">-2</td>
</tr>
<tr>
    <td>&emsp; In poor light</td>
    <td style="text-align: center;">-1</td>
</tr>
<tr>
    <td>&emsp; In darkness</td>
    <td style="text-align: center;">-4</td>
</tr>
<tr>
    <td>&emsp; Panicked</td>
    <td style="text-align: center;">-2</td>
</tr>
<tr>
    <td>&emsp; Anticipating attack&ast;</td>
    <td style="text-align: center;">+2</td>
</tr>
<tr>
    <td>&emsp; Suspicious&ast;</td>
    <td style="text-align: center;">+2</td>
</tr>
<tr>
    <td><strong>Conditions are:</strong></td>
</tr>
<tr>
    <td>&emsp; Rainy</td>
    <td style="text-align: center;">-1</td>
</tr>
<tr>
    <td>&emsp; Heavy fog</td>
    <td style="text-align: center;">-2</td>
</tr>
<tr>
    <td>&emsp; Extremely still</td>
    <td style="text-align: center;">+2</td>
</tr>
</table>`,
                        `&ast; A party anticipates attack when they have good cause to suspect immediate danger and know the likely general direction of an attack. A suspicious party is one that has grounds to believe another group might try to make a hostile move against them.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SILENCE, ATTRIBUTE.INVISIBILITY, ATTRIBUTE.BLINDNESS, ATTRIBUTE.DEAFNESS],
                },
            ]
        },
    ],
});
DUNGEON_MASTER_GUIDE.chapters.push({
    name: 'Chapter',
    number: '13',
    heading: 'Vision and Light',
    sections: [
        {
            id: 'darkness',
            heading: 'Darkness',
            entries: [
                {
                    page_number: '160-161',
                    entry: [
                        `Sooner or later characters wind up blundering around in the dark. Normally they try to avoid this, but clever DMs and foolish players generally manage to bring it about. Perhaps the kobolds captured the player characters and stripped them of all their gear; perhaps the characters forgot to bring enough torches. Whatever the reason, those without infravision suffer both physical and psychological effects in the dark.`,
                        `For the purposes of this discussion, "darkness" means any time the characters suffer from limited visibility. Thus, the rules given here apply equally well when the characters are affected by a *darkness* spell, blundering about in pea-soup fog, out on a moonless night, or even blindfolded.`,
                        `Since one can't see anything in the dark, the safe movement rate of blinded characters is immediately slowed by ⅓ the normal amount. Faster movement requires a Dexterity check (see Chapter 14: Time and Movement). Characters also suffer a –4 penalty to attack rolls and saving throws. Their Armor Class is four worse than normal (to a limit of 10). Sight-related damage bonuses (backstabbing, etc.) are negated. However, darkness is not always absolute, and those DMs who wish to make distinctions between various levels of darkness can use Table 72.`,
                        `The blindfighting proficiency can lessen the effects of fighting in darkness as explained in the proficiency description in the *Player's Handbook*.`,
                        `
<table style="text-align: center;">
<tr>
    <td colspan="5" >Table 72:</td>
</tr>
<tr>
    <td colspan="5"><strong>Optional Degrees of Darkness</strong></td>
</tr>
<tr>
    <td style="vertical-align: bottom; text-align: left;"><strong>Condition</strong></td>
    <td><strong>Attack Roll<br>Penalty</strong></td>
    <td><strong>Damage<br>Bonus</strong></td>
    <td><strong>Saving<br>Throw</strong></td>
    <td><strong>AC<br>Penalty</strong></td>
</tr>
<tr>
    <td style="text-align: left;">Moonlight (Moderate fog)</td>
    <td>-1</td>
    <td>Normal</td>
    <td>-1&ast;</td>
    <td>-0</td>
</tr>
<tr>
    <td style="text-align: left;">Starlight (No moon or dense fog)</td>
    <td>-3</td>
    <td>Normal</td>
    <td>-3&ast;</td>
    <td>-2</td>
</tr>
<tr>
    <td style="text-align: left;">Total darkness (Spell, unlit dungeon or cave)</td>
    <td>-4</td>
    <td>Negated</td>
    <td>-4</td>
    <td>-4</td>
</tr>
</table>`,
                        `&ast; The saving throw modifier applies only to saving throws involving dodging and evasion in these cases.`
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.BLINDNESS],
                },
            ],
        },
        {
            id: 'invisibility',
            heading: 'Invisibility',
            entries: [
                {
                    page_number: '161',
                    entry: [
                        `Invisibility is a highly useful tool for both player characters and DMs. Handled well, it can create surprises and unexpected encounters. However, invisibility requires careful judgment on the part of the DM, lest situations occur that could unbalance a scenario or campaign.`,
                        `First, an invisible creature is invisible to everyone, including itself. This is normally not a great difficulty; most creatures are aware of their own bodies and don't need to see their feet to walk, etc. However, when attempting detailed actions (for example, picking a lock or threading a needle), invisible characters have serious problems, suffering a –3 (or –15%) penalty to their chance of success. This does not apply to spellcasting.`,
                        `Second, invisible characters are invisible to friend and foe. Unless care is exercised, it is easy for a visible person to blunder into an invisible companion. Imagine a fighter swinging his sword just as he realizes he doesn't know where good old invisible Merin is standing! The problem is even worse with a group of invisible characters—characters crash and tumble (invisibly) into one another, all because nobody can see anybody. It would be like having a roomful of people play pin-the-tail-on-the-donkey all at once!`,
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.INVISIBILITY],
                },
            ],
            sections: [
                {
                    id: 'detecting-invisibility',
                    heading: 'Detecting Invisible Creatures',
                    entries: [
                        {
                            page_number: '161',
                            entry: [
                                `Invisible creatures and things are not detectable by normal sight or by infravision. They do not create any significant distortion or haze pattern that can be noted. However, invisible creatures aren't completely undetectable. First, things still cling to them. Flour thrown into the air is useful for this purpose, although it can be easily covered, washed off, or brushed away. Second, they do not leave invisible footprints. Again, flour on the floor is a good way to spot the movement of invisible creatures.`,
                                `The effects of specific environments are more subtle. Fog and smoke do not reveal invisible creatures. Smoke and fog are filled with swirls and eddies, preventing the creature from being detected. Invisible creatures completely submerged in liquids are also concealed; there is no hollow space or "air bubble" to reveal the creature's presence. At the surface, an invisible swimmer may be noticed by the observant as an unusual distortion of the waves.`,
                                `Invisible creatures are not automatically silent. An invisible fighter in plate mail still clanks and rattles as he moves, a dead giveaway to most creatures. They still have scent, so creatures with keen noses can smell them. Indeed, blind, or nearly blind, creatures are unaffected by invisibility.`,
                                `A *detect magic* shows only the presence of something magical without pinpointing it exactly. Thus, it cannot be used as a substitute for a *detect invisible* spell. Furthermore, while an actual light source may be invisible, the light emanating from it is not. This can reveal the location of an invisible character.`,
                                `When the DM thinks there is minor but sufficient cause for a creature to detect an invisible character, a saving throw vs. spell should be made (secretly if the DM is checking for a player character). A minor cause might be a strange odor, small noise, an object that disappeared when it shouldn't have, or a strange reaction from another person (who has been pushed, kicked, poked, etc., by the invisible character). Such a saving throw should be allowed for each new event. A wolf would get a save when it detected a strange scent, then shortly after when it heard a stick break, and finally a last chance when the character drew his sword from his scabbard. Furthermore, the acuity of the creature's senses and its general intelligence can increase or decrease the frequency of checks, at the DM's discretion.`,
                                `If the suspicious creature or character rolls a successful saving throw, he detects some small sign of the invisible foe's presence. He knows its general location, but not its exact position. He can attack it with a –4 penalty on his chance to hit. If the check fails, the creature or character is unaware of the invisible opponent until it does something else that might reveal its presence.`,
                                `Of course, a revealing action (which could range from an attack to tripping over a pile of pots) immediately negates the need for a saving throw. In such cases, the character has a pretty good idea that something is not right and can take actions to deal with the situation.`,
                                `Finally, even if an invisible character is suspected, this does not mean the character will be instantly attacked. The result, especially for less intelligent creatures, may only be increased caution. Having scented the intruder, the wolf bristles and growls, protecting its cubs. The rattlesnake will give its warning rattle. Even the orcs may only circle about warily, alert for an ambush.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.INVISIBILITY, ATTRIBUTE.INTELLIGENCE_VS_ILLUSIONS],
                        }
                    ],
                },
            ]
        }
    ],
});
DUNGEON_MASTER_GUIDE.chapters.push({
    name: 'Appendix',
    number: '3',
    heading: 'Magical Item Descriptions',
    sections: [
        {
            id: 'armor-shields',
            heading: 'Armor and Shields',
            entries: [
                {
                    page_number: '240',
                    entry: [
                        `In this section, you will find descriptions of some very special kinds of armor and shields. Before adding these to your campaign, however, be sure you are fully familiar with the armor gradation system:`,
                        `For each +1 bonus to armor, regardless of the type of armor, the wearer's Armor Class moves downward (toward AC 2 ... to 1 ... to 0, –1, –2, and so on). A normal shield improves the armor class by one. A magical shield improves Armor Class like magical armor—toward –1, –2, etc. Note, however, that Armor Class can never be improved beyond –10.`,
                        `Thus, chain mail +1 is like ordinary chain mail (AC 5), but one category better (AC 4). A shield +1 is equal to Armor Class 8—two places better than no armor (+1 for bearing a shield, +1 for the magical bonus of the shield).`,
                        `When adding magical armor to the game, be aware of sizing problems: 65% of all armor (except elven chain mail) is man-sized, and 20% is elf-sized, 10% is dwarf-sized, and but 5% gnome- or halfling-sized. (Elven chain mail sizing is determined by the table found below.)`,
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.MAGIC_ITEM_SIZE],
                },
                {
                    page_number: '241',
                    entry: [
                        `**Elven Chain Mail:** This is magical armor so fine and light that it can be worn under normal clothing without revealing its presence. Its lightness and flexibility allow even bards and thieves to use it with few restrictions (see Chapter 3 in the PHB). Elven fighter/mages use it without restriction. However, it is rarely sized to fit anyone other than an elf or a half-elf. Roll percentile dice and consult the following table to ascertain what size character elven chain mail will fit:`,
                        `
<table>
<tr>
    <td colspan="2">***DMG*** p. 241 about Elven Chain Mail:</td>
</tr>
<tr>
    <td style="text-align: center;"><strong>D100 Roll</strong></td>
    <td><strong>Size of Elven Chain Mail</strong></td>
</tr>
<tr>
    <td style="text-align: center;">01–10</td>
    <td>gnome/halfling (hairfoot)</td>
</tr>
<tr>
    <td style="text-align: center;">11–15</td>
    <td>dwarf/halfling (Stout or Tallfellow)</td>
</tr>
<tr>
    <td style="text-align: center;">16–80</td>
    <td>gnome/halfling (hairfoot)</td>
</tr>
<tr>
    <td style="text-align: center;">81–95</td>
    <td>man-sized, normal (up to 6 feet, 200 lbs.)</td>
</tr>
<tr>
    <td style="text-align: center;">96–100</td>
    <td>man-sized, large (up to 6½ feet, 250 lbs.)</td>
</tr>
</table>`,
                    ],
                    attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.MAGIC_ITEM_SIZE, ATTRIBUTE.WIZARD_ELVEN_CHAIN]
                }
            ],
        },
    ],
});

module.exports = DUNGEON_MASTER_GUIDE;