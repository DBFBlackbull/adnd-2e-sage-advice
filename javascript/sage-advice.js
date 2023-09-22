const ATTRIBUTE_1E = '1E';
const ATTRIBUTE_2E = '2E';
const ATTRIBUTE_SPELL = 'spell';
const ATTRIBUTE_RACE = 'race';
const ATTRIBUTE_CLASS = 'class';
const ATTRIBUTE_WEAPON = 'weapon';

const ATTRIBUTE_TURN_UNDEAD = 'turn undead';
const ATTRIBUTE_INVISIBILITY = 'invisibility';
const ATTRIBUTE_BLINDNESS = 'blindness';
const ATTRIBUTE_DEAFNESS = 'deafness';
const ATTRIBUTE_DISPEL_MAGIC = 'dispel magic';

const SUBSTITUDES = [
    ['elf', 'elves'],
    ['dwarf', 'dwarves'],
    ['multiclass', 'multi-class'],
    ['dualclass', 'dual-class'],
    ['player\'s handbook', 'players handbook', 'phb'],
    ['dungeon master\'s guide', 'dungeon master guide', 'dmg'],
];

const DRAGON_MAGAZINES = [];
DRAGON_MAGAZINES.push({
    issue_number: '148',
    publication_year: '1989',
    publication_month: 'August',
    foreword: `And now, for a special edition of Sage Advice! The AD&D® 2nd Edition game has arrived, and the sage is here with an in-depth look at the 2nd Edition ***Player's Handbook***. All page numbers herein refer to the 2nd Edition text alone, unless otherwise stated.`,
    sage_advice: [
        {
            page_number: '10',
            question: `How long does a ***produce flame*** spell last? How many flames can the caster hurl?`,
            answer: [
                `***Produce flame*** lasts one round per caster level. The caster can throw a maximum of one flame per level, but no more than one flame per round.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '10',
            question: `How do you determine how many square feet of ***faerie fire*** is required to cover a creature?`,
            answer: [
                `Just assume the caster can cover one man-size creature per level. Assume small creatures equal one-half a man, and large creatures equal one-and-a-half men.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '10',
            question: `Can halflings become clerics? Also, where are the advancement limits for demihuman characters?`,
            answer: [
                `Yes, halflings can become clerics. See the upcoming 2nd Edition ***Dungeon Master's Guide*** (page 15) for advancement limits for halfling clerics and other demihuman characters.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_RACE, ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `Can a thief character take the mountaineering proficiency and improve his climbing chance?`,
            answer: [
                `Yes, but the character's climbing chance cannot be made better than 95%.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `Are you supposed to multiply strength bonuses to damage in a successful backstab, as described on page 40, or are you supposed to add strength bonuses after the multiplier, as explained on page 104?`,
            answer: [
                `The text on page 104 is correct.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `What penalties does a bard suffer by using thief abilities when wearing normal chain mail?`,
            answer: [
                `Use the Elven Chain column in Table 29 but add another - 5% to the column's values.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `Are multiclassed bards allowed? The text on page 45 mentions multi-classed bards, but the chart on page 44 does not.`,
            answer: [
                `Page 44 is correct; page 45 is wrong.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `According to page 13, any warrior with a strength score of 16 or more gets a 10% bonus to experience. But later on, in the descriptions of the paladin and ranger, the rules say that members of these classes must have other high ability scores to get the bonus. Which is correct?`,
            answer: [
                `The text on page 13 is a misprint. Fighters get the 10% for a strength score of 16 or better; paladins and rangers must have additional high ability scores.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `What happened to the fighter's ability to double specialize with a weapon?`,
            answer: [
                `It has been dropped.`
            ],
            comment: `Reintroduced by Player's Option: Combat & Tactics`,
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `Can a fighter specialize with more than one weapon?`,
            answer: [
                `No, but he can "save" additional slots as he earns them and specialize with a weapon later in his career if he doesn't fill those slots at the start.`
            ],
            comment: `Added in The Complete Fighter's Handbook`,
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `Do demihuman fighters get to roll for extraordinary strength?`,
            answer: [
                `Yes; all warrior characters are entitled to exceptional strength rolls if they have strength scores of 18.`
            ],
            comment: `Halflings to not roll for exceptional strength. Corrected in Sage Advice #`,
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '10+12',
            question: `Does armor interfere with the new ranger's ***animal empathy*** ability? What is that ability's range? Why don't druids have this ability?`,
            answer: [
                `A ranger can wear any type of armor and still use ***animal empathy***. The ranger must be close enough to the animal to attract the animals undivided attention (about 10 yards in a wilderness setting less, if the setting is something like a crowded marketplace that provides distractions). Individual DMs may give druids ***animal empathy*** if they wish. The rules don't give the druid this ability because a druids focus is on nature as a whole, not just on animals.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `Isn't the new ranger too limited in spells? Can a ranger pick more than one type of creature for an enemy?`,
            answer: [
                `The ranger's two spheres give him plenty of spells. However, individual DMs might want to add a sphere or two; one campaign I am familiar with allows rangers to use healing spells. The DM has to decide what constitutes a valid enemy. Since the rules mention giants, it is probably acceptable to choose a class of creatures. Thus, a ranger from the FORGOTTEN REALMS™ setting might be allowed to choose the goblin races (see ***Cyclopedia of the Realms***, page 46) as an enemy. A ranger can never choose two or more entirely different creatures as enemies.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `Can rangers wear elven chain mail and still use the special abilities described on page 28?`,
            answer: [
                `Elven chain mail interferes with a ranger's special abilities; refer to Table 29 (page 39) for a list of penalties. Elven chain mail also negates the ranger's ability to use two weapons without penalty.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `Does the ranger's + 4 attack bonus vs. a specific type of adversary apply to both attack and damage rolls?`,
            answer: [
                `The bonus applies only to attack rolls; see page 29.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `Can paladins become dual-classed characters?`,
            answer: [
                `As clearly stated on page 44, there are no restrictions on the class combinations allowed to dual-classed characters, provided that alignment restrictions are respected. Most DMs, however, do not allow characters to combine subclasses (e.g., no bard/thieves, paladin/rangers, etc.).`
            ],
            comment: `Revised Player's Handbook (black book) made it a hard rule that you cannot dual/multi-class in the same group. The Complete Bard's Handbook reintroduced it for bard multi-classes.`,
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `With the large increase in the number of wizard spells, why wasn't there an increase in the minimum and maximum number of spells a wizard can learn? A wizard with an 18 intelligence can learn a maximum of 18 spells a level; that's less than half the number of first-level spells!`,
            answer: [
                `The AD&D® game is one of choices. The additional spells are intended to create a greater variety of mage characters, not more powerful mages.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `Table 22 (page 31) shows the minimum ability scores required for specialist wizards. What is the minimum intelligence score required for a specialist wizard?`,
            answer: [
                `Specialist wizards must have an intelligence score of at least 9, just like a normal wizard.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `What happened to the write spell?`,
            answer: [
                `It isn't needed anymore. The primary function of the write spell was to allow a mage to add a spell to his books after he had failed his chance to know roll for that spell. In the 2nd Edition game, a mage can attempt a new chance to know roll each time he gains a new level. (See "Spelling It Out," in DRAGON® issue #147, for more information.)`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `What is the material component for the ***spectral hand*** spell?`,
            answer: [
                `There is none. The "M" in the components' line is a typographical error.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `Does casting the first version of a ***flame arrow*** spell break invisibility?`,
            answer: [
                `No, because this is not an attack.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `Does the ***delayed blast fireball*** spell have a damage limit?`,
            answer: [
                `Yes. The limit is l0d6 + 10 hp damage.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `Several spells are missing from Appendix 5.`,
            answer: [
                `Here are the schools for the omitted spells (at least the ones I know about): ***irritation deafness***, ***fabricate*** and ***slow*** are alteration spells (***fabricate*** is also an enchantment); ***Melf's minute meteors***, evocation and alteration; ***locate object*** and ***know alignment***, divination; ***geas***, enchantment/charm.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `In Table 22 (page 31), the races allowed entry for diviners is any. Does this mean that a character of any PC race can be a diviner?`,
            answer: [
                `No. Only races eligible for the mage class (humans, elves, and half elves) can become diviners.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `What happened to cantrips?`,
            answer: [
                `Cantrips are still in the game. Just use the first-level ***cantrip*** spell. If you need help figuring out what kind of cantrips to cast, use your copy of ***Unearthed Arcana*** as a guide. Actually, things are better now for cantrip-using mages because they no longer need to waste spell book space on cantrips, and they are no longer limited to the few cantrips in their books.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `Since mages start the game with the ability to read spell books and to write in them, do they also have the ability to read and write their native languages?`,
            answer: [
                `No. Magic is written in a special language.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `The new rules mention the possibility of ***fireballs*** detonating early and ***lightning bolts*** rebounding because of hitting an obstruction. My group and I thought these spells always hit, just as a ***magic missile*** spell does. If these spell do not always hit, how does the mage hit his opponent?`,
            answer: [
                `The spells do always hit, after a fashion. In the case of a ***fireball***, the missile bursts at the designated range unless it strikes an object before it gets there. Since the missile flies in a straight line between the caster and the target, it can be blocked by invisible barriers (such as ***walls of force***) or by a bend in a passage obscured by an illusion or mirror.`,
                `A ***lightning bolt*** is similar to a ***fireball*** in that the spell begins at a designated height and range, extending directly away from the caster. A ***lightning bolt*** is always either 40' or 80' long, and the caster must decide which when he casts the spell. If caster miscalculates and casts this spell into an area too small to contain it, the lightning bolt grows to its full length (as measured from the point where it strikes a barrier), heading back at the caster unless it smashes through the barrier (see page 151). Some readers have misread the example on page 151; ***lightning bolts*** do not bend or fold over when hitting a barrier. The 80' bolt in the example starts 40' away from the caster, travels 10', and strikes a barrier; the bolt must maintain its full length, however, so the opposite end of the bolt (starting from the point of origin) instantly grows out in the direction toward the spell-caster, extending 70' from its point of origin. Thus, the bolt's final length is SO'. A victim caught between the point of origin and the wall behind him is not struck twice by the bolt. The use of the word rebound in the spell's description seems to be the confusing element.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `The text under the new ***identify*** spell says a fully charged ***ring of three wishes*** radiates only faint magic. Is this an error?`,
            answer: [
                `There is no error in the spell's description, but you have made an erroneous statement. The ***identify*** spell does not detect magic or its strength; it reveals an item's functions and charges. A ***ring of three wishes*** has only three charges, so it is faintly charged. Smart wizards use a ***detect magic*** spell, which can determine magical strength and type, before casting ***identify***.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
    ],
});
DRAGON_MAGAZINES.push({
    issue_number: '149',
    publication_year: '1989',
    publication_month: 'September',
    foreword: `We present part two of our special edition of "Sage Advice" (continued from DRAGON issue #148), with an in-depth look at the AD&D® 2nd Edition ***Player’s Handbook***. All page numbers herein refer to the 2nd Edition text alone, unless otherwise stated.`,
    sage_advice: [
        {
            page_number: '10',
            question: `Does a character need to spend two proficiencies in bastard sword use—one for one-handed use and one for two-handed use?`,
            answer: [
                `This is up to the DM, but I suggest that two slots be required. One campaign I am familiar with allows characters with long sword or two-handed sword proficiency to use the bastard sword in its corresponding mode (in other words, a character who can use a long sword can use a bastard sword one-handed without penalty).`
            ],
            comment: `The Complete Fighter's Handbook suggest indicates that only 1 proficiency slot is needed`,
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `How can a sling bullet do the same damage as a heavy crossbow and more damage than a light or hand crossbow? Why would anyone bother with a crossbow when a sling has a better rate of fire, the same or better damage, a lower cost, and a lower weight?`,
            answer: [
                `Slings are very effective weapons and are often underrated. The bullets are heavy, have excellent aerodynamic qualities, and are hurled with a great deal of force. Why doesn't everybody use a sling? Well, try to swing a sling underwater, while hiding in dense undergrowth, or from around a corner. Also, bow and crossbow specialists get a point-blank range category and the ability to fire before the initiative roll in some cases.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `The new rules (on page 106) say a character must make a system shock roll to be raised from the dead. If so, what are resurrection survival scores used for?`,
            answer: [
                `This is a typographical error. System shock rolls are made when characters are exposed to magical aging, polymorphing, or petrification. Resurrection survival rolls are used when bringing slain characters to life again.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `How much does a wooden staff cost?`,
            answer: [
                `Any character can cut and trim his own staff. Prepared staves cost 1 sp each.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `Can characters use missile weapons when fighting toe-to-toe with an opponent?`,
            answer: [
                `Characters cannot aim and fire bows, use slings, or hurl hand-held weapons while in melee. Loaded and cocked crossbows can be fired in melee but cannot be reloaded. Since light and heavy crossbows are too large to be very handy, the DM might rule that they can be fired only when the user has initiative.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `How much damage does an arrow fired from a short bow do? Can flight or sheaf arrows be fired from short bows?`,
            answer: [
                `Short bow arrows do 1-6 hp damage to targets of all sizes. No matter what sort of arrow is fired from a short bow, it does damage as a flight arrow (1d6/1d6).`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `The charging rules say that a spear set vs. a charge does double damage, but this in not mentioned in the equipment list.`,
            answer: [
                `Any weapon that can be set vs. a charge does double damage when so employed.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `Can a character attack while with- drawing?`,
            answer: [
                `This is up to the DM, but I suggest not. If you do allow fighting withdrawals, the character making the withdrawal should get an attack only if there is an opponent following him. Even then, the character should attack last and with a -2 penalty to his attack roll.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10+12',
            question: `The rules mention nets, lassos, and mauls as possible weapons for clerics (page 34), but these weapons do not appear in the weapons charts (pages 68-69).`,
            answer: [
                `A maul is a warhammer; see the Weapons Table on pages 68-69. Lassos and nets are not part of the 2nd Edition game and were mentioned in error. However, a typical war net is made from woven hemp cords and has small lead weights sewn into the edges. It is 5' across, weighs 6 lbs., and costs 12 sp. It takes two hands and 6' of clear space to throw a net, and the effective range is 30'. Any target hit by the net must save vs. breath weapon or become entangled. Entangled victims cannot fight or move, and defend at -2. Entangled victims wriggle free if they make a successful wrestling attack vs. AC 2; they can make one attempt to get free each round. When used as a melee weapon, treat a net as a scourge. A lasso is simply a rope with an adjustable loop. A successful hit with a lasso puts the loop around part of the target creature's body, but this does not necessarily immobilize the creature; the DM has to decide where the loop is (around the neck, a limb, the upper body, etc.) and assess the appropriate penalty. Since the lasso's wielder can pull the loop tight, the only way to escape, short of killing the wielder or getting the rope away from him, is to cut or break the rope.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `A broad sword is mentioned as a thief's weapon (page 38), but the broad sword is not described.`,
            answer: [
                `Use these statistics for that weapon: cost 10 gp; weight 4 lbs.; size M; type S; speed factor 5; damage 2d4 (S-M)/1d6 + 1 (L).`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `What is the rate of fire for a high-level fighter using an arquebus?`,
            answer: [
                `The rate of fire for any missile weapon stays the same for all users regardless of level, except for specialized users (see Table 35, page 52).`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `How can a character become proficient with an arquebus? Wouldn't this require a large or even unlimited supply of powder and shot? If the character chooses to specialize, what would the rate of fire be?`,
            answer: [
                `This is up to the DM, but your suggestion regarding gunpowder supplies sounds reasonable because the character would have to practice with the weapon. Arquebus specialists rates of fire are: 1st-6th level, 1/3; 7th-12th level, 1⁄2; 13th level and up, 1/1.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `Can a fighter attack with a long sword in each hand?`,
            answer: [
                `No; two-weapon attacks are limited to one medium and one small weapon, or to two small weapons.`
            ],
            comment: `This was added in The Complete Fighter's Handbook with Two-weapon style specialization.`,
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `Can a fighter who is specialized with two weapons use them both at the same time and get the damage bonus and multiple attacks for each hand? Does a fighter get a strength bonus for each hand?`,
            answer: [
                `Fighters can specialize with only one weapon. Any character attacking with two weapons gets one—and only one—extra attack per round; the character gets the full number of attacks for the primary weapon and one attack from the secondary weapon. The DM can allow strength bonuses for each hand, but I do not recommend it. Limit strength bonuses to one weapon or the other, or allow the character to split the bonus between weapons.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `How large are light crossbow quarrels and short swords?`,
            answer: [
                `Light quarrels and short swords are small weapons. To preserve game balance, you might want to disallow the use of short swords as secondary weapons in two-handed attacks.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `What happened to weapons' space requirements?`,
            answer: [
                `Space required for melee weapons can be inferred from their sizes and types. Bludgeoning or slashing weapons generally require as much clear space for use as their lengths. Piercing weapons and most missile weapons generally require 1' of clear space.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `Why can't blunt melee weapons be used in nonlethal combat? It seems to me that a weapon like a mace would be better for knocking out a creature than a sword would be.`,
            answer: [
                `As explained on page 98, a mace has no "flat" side that can be used at less than full effect. Still, since using a weapon in nonlethal combat carries a -4 attack roll penalty, you could assume that the mace wielder could "pull the blow" and inflict reduced, temporary damage.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `On page 101, the section on saving-throw priority says Table 60 is set up in order of priority. But the example given contradicts this.`,
            answer: [
                `Table 60 is correct; the example is wrong.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '12',
            question: `What is the conversion rate be- tween the 1st Edition monetary system and the 2nd Edition monetary system?`,
            answer: [
                `The new system is close enough to the old one so that you need not convert treasures or prices. (Prices in the 2nd Edition game tend to be higher, but this reflects adjustments in the relative values of some items, not a decline in the value of currency.) The only real difference is that silver and copper pieces have doubled in value with respect to gold (compare page 35 of the 1st Edition ***Players Handbook*** with page 66 of the 2nd Edition ***Player's Handbook***). If you are a stickler, cut the number of copper and silver coins in any 1st Edition module's horde by half to reflect the new values of those coins.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '12',
            question: `When setting prices for items not listed in the 2nd Edition game, what is the conversion rate between U.S. dollars and gold pieces?`,
            answer: [
                `An AD&D game gold piece is worth approximately $20 when comparing buying power. Note that if a group of AD&D game adventurers found themselves in a modern setting, their gold pieces would be next to worthless as legal tender, but very valuable for their gold content.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '12',
            question: `Can the various subclasses be used in multiclassed combinations (e.g., a half-elf ranger/thief, or an elf mage/bard)?`,
            answer: [
                `No; only the classes listed on page 44 can be used in multiclassed combinations.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '12',
            question: `Do multiclassed characters still divide their experience points among classes?`,
            answer: [
                `Yes; see page 44.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `When a character temporarily loses one point of constitution from long-distance swimming, does he also lose bonus hit points gained from that point of constitution?`,
            answer: [
                `Yes; any constitution loss strips bonus hit points gained from the lost points. Temporary constitution losses thus produce temporary hit-point losses.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '12',
            question: `What happened to weapons' space requirements?`,
            answer: [
                `Space required for melee weapons can be inferred from their sizes and types. Bludgeoning or slashing weapons generally require as much clear space for use as their lengths. Piercing weapons and most missile weapons generally require 1' of clear space.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '12',
            question: `Are alignment languages used?`,
            answer: [
                `Alignment languages are not part of the 2nd Edition game.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '12',
            question: `Do drow and deep gnome PCs still have the abilities attributed to them in ***Unearthed Arcana***?`,
            answer: [
                `All subraces in the 2nd Edition game are treated just like members of the appropriate main race. However, individual DMs are free to retain ***Unearthed Arcana*** attributes for drow and deep gnomes.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '12',
            question: `What are the size classes of each of the PC races?`,
            answer: [
                `Halflings, dwarves, and gnomes are small creatures. Humans, half-elves, and elves are medium (man-size) creatures.`
            ],
            comment: `Dwarves are generally considered man-sized when handling weapons, i.e. a dwarf can carry a M-sized weapon in 1 hand. This is corrected in Sage Advice #174`,
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '12',
            question: `What happened to weapons' space requirements?`,
            answer: [
                `Space required for melee weapons can be inferred from their sizes and types. Bludgeoning or slashing weapons generally require as much clear space for use as their lengths. Piercing weapons and most missile weapons generally require 1' of clear space.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '12',
            question: `What good is the healing proficiency if a character can regain the hit points just by resting for a day?`,
            answer: [
                `First, the healing proficiency restores lost hit points to characters who do not or cannot spend an entire day resting. Second, the two forms of healing are cumulative, so that a character who rests an entire day and receives treatment from a character with healing skill regains 1d3 + 3 hp/day. Note that a character who tends wounded characters is not considered to be resting.`
            ],
            comment: `The bonus healing from the Healing proficiency is a flat rate of 1,2 or 3 (with Herbalism). The random 1d3 healing is for immediate care after someone has taken damage.`,
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `According to Table 65 (page 122), unskilled characters have a base climbing chance of 40%. The same table notes that a character who spends one slot for the mountaineering proficiency also has a 40% climbing chance. Is this an error, or do characters have to spend two slots before they are better climbers than unskilled characters?`,
            answer: [
                `Yes, there is an error. The base climbing chance improves 10% for each slot spent on mountaineering; thus, a character with one proficiency slot in this skill has a 50% base climbing chance.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `According to Table 67 (page 123), it is impossible to climb a "dry" ice wall, but a character can climb a slippery ice wall at one-fourth the normal climbing rate. Is this an error?`,
            answer: [
                `This is not really an error. All ice walls qualify as slippery surfaces—there are no dry or slightly slippery ice walls.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `Chapter 7 says a character can try to disbelieve an illusion just by spending a round doing so. Furthermore, if the player can give a good reason why the character is disbelieving, the DM can give a bonus to the saving throw. But Appendix 2 says a reason must be given for any disbelief attempt to succeed. Which is correct?`,
            answer: [
                `Chapter 7 is correct. Appendix 2 is intended to remind players that disbelief is never automatic; disbelief must be active. In other words, do not check for disbelief unless a player says his character is disbelieving; if the character has a very good reason to disbelieve and if the player can explain this reason to the DM; a bonus to the disbelief roll might be awarded. The text in Appendix 2 is also intended to convey to players that they cannot avoid illusions by having their characters disbelieve everything that comes along. The DM need not quiz the player about the exact reasons for disbelief, but the DM should be convinced that the character has some legitimate reason for disbelieving an illusion before he allows a saving throw.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `Do full and field plate armor still absorb damage?`,
            answer: [
                `No, they don't.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `What good is a helmet? Does any suit of armor come with one?`,
            answer: [
                `Helmets protect the head and are important to any character with a humanoid body. Every suit of armor is assumed to include a helmet whose construction is similar to the armor. If an armored character wears no helmet, he loses one armor class (for example, AC 4 becomes AC 5).`
            ],
            comment: `Further expansions on the rules for helmets are in The Complete Fighter's Handbook and Player's Option: Combat & Tactics`,
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `I was shocked to see that TSR, Inc. condones the killing of baby drag- ons (as graphically illustrated by the color plate on page 7).`,
            answer: [
                `With the new information on dragons given in the first ***Monstrous Compendium*** (TSR product #2102), available in July, PCs are going to have to catch dragons while they are small if they are going to have any chance to kill them at all (see also "The New Ecology of the Dragons," in DRAGON issue #146, for more information).`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `If the proficiency system is used, do demihuman characters have to spend a slot to learn the common tongue since they begin with their native tongue only?`,
            answer: [
                `Strictly speaking, demihumans must spend a slot to know Common. However, DMs should feel free to give Common to demihuman characters for "free." It can be fun to role-play characters who cannot speak with each other, but this kind of play can bog down the game and usually gets boring after a few sessions.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `Can the running nonweapon proficiency be used with the jogging/running rule? Are the two cumulative?`,
            answer: [
                `A character using the running proficiency cannot use the jogging rule (he is already moving as quickly as the jogging rule allows). He can, however, use the running rule to increase his speed. If the character fails one of the ability checks for continued running, he must follow the rules on page 120, and has finished using his running proficiency for the day.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `According to Table 65 (page 122), unskilled characters have a base climbing chance of 40%. The same table notes that a character who spends one slot for the mountaineering proficiency also has a 40% climbing chance. Is this an error, or do characters have to spend two slots before they are better climbers than unskilled characters?`,
            answer: [
                `Yes, there is an error. The base climbing chance improves 10% for each slot spent on mountaineering; thus, a character with one proficiency slot in this skill has a 50% base climbing chance.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `Page 45 says a dual-classed character who loses a level to an energy drainer will lose his highest level; if drained again, he loses the level that is hardest to replace. However, the example shows a character losing one level in each class to a wight. What is the correct procedure?`,
            answer: [
                `A dual-classed (or multiclassed) character who loses a single level to an energy drain always loses his highest level, no matter how many times he is drained. If his levels are equal, he loses the level that takes the most experience to regain. The example on page 45 is correct only if the character loses two levels at once. In this case, the dual-classed character loses one level from each class, just as in the 1st Edition AD&D game.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `I thought falling damage was cumulative per 10', reaching 20d6 at 60'. What happened?`,
            answer: [
                `The controversy over falling damage has been settled. Falling damage is 1d6 for each 10' (or fraction of 10') fallen. The reasons are thoroughly explained on page 104. Individual DMs are free to plague their players with any variant falling damage systems they can devise.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `Does a character take falling damage if he deliberately jumps?`,
            answer: [
                `In most cases, yes. If the DM wants to simulate short jumps, I suggest calling for a dexterity check. If the check succeeds, subtract 10' from the jump's height—that is, a 10' jump inflicts no damage, a 20' jump inflicts 1d6, and so on. Failure results in a normal fall.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '13',
            question: `Are the nonweapon proficiency modifiers shown in Table 37 (page 54) applied to the die roll or to the ability score?`,
            answer: [
                `The adjustments are made to the character's ability score.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '150',
    publication_year: '1989',
    publication_month: 'October',
    foreword: [
        `Combat and melee in the AD&D® 1st Edition game make up this month's topic, with special advice on fighting hydras. All references to the ***Dungeon Masters Guide*** and ***Players Handbook*** in this article are to the 1st Edition versions of those volumes. In all cases, the information in the AD&D 2nd Edition volumes takes precedence where there is a contradiction between those rules and this column.`,
        `But first, a special word from the sage, then one from the editor.`
    ],
    sage_advice: [
        {
            page_number: '8',
            question: `Why haven't you answered my 27 letters, each with 57 questions on my favorite game system? You said you would reply if I sent an SASE with each letter. Why don't you give a seminar at the GEN CON® game fair? If I come to Lake Geneva, can I meet you and ask you questions?`,
            answer: [
                `Although the "Sage Advice" in DRAGON issue #121 said the sage would make personal replies, I receive so many letters that I cannot answer every one. (However, if you don't enclose an SASE, I cannot reply at all.) Usually I reply only to letters that have questions I can use in the column, so that all the readers get the benefit of my time. Needless to say, I don't give extended private interviews in Lake Geneva or anywhere else.`,
                `If you want to increase your chances of getting a personal reply, do the following:`,
                `1. Look through your books for your answers, and be sure to consult the indexes (if the books have them). Often, with a little extra effort, you'll find rules that have eluded you.`,
                `2. Keep your letter short. Decide what you really need to know, and stick to the most important questions. As I've stressed before, role-playing games involve choices and decisions; don't be afraid to make some on your own.`,
                `3. Include the title of the book and the page number that contains the rule you are asking about; this saves me a lot of page flipping.`,
                `My work with the RPGA™ Network keeps me busy at almost every game convention I attend, and seminars are not the best place to answer rules questions. I'm not an encyclopedia of game knowledge. I rely on a big library and a large network of personal contacts to find answers, and few people would be entertained by watching me flip through my books and consult my files while I struggle with a tricky question. Still, I do answer some questions at conventions; just keep them short, and don't interrupt me while I'm running a game. Also, some conventions I attend collect written questions for me so that I can use them in the column or work on them during the show and discuss the results with anyone who is interested.`,
                `Skip Williams`
            ],
            attributes: [],
        },
        {
            page_number: '8',
            question: `Why are you still running questions for the AD&D 1st Edition game now that the AD&D 2nd Edition game is on the market?`,
            answer: [
                `DRAGON Magazine will continue to use material specifically for the AD&D 1st Edition game simply because so many people use that edition. The 2nd Edition has only been out for six months, but the 1st Edition game has been available for over a decade. (Remember, too, that material for one edition can usually be used with the other with ease.) As time goes on, we expect that more players will switch to the 2nd Edition game, and our coverage of that system will increase. We want to offer the most useful material to the largest number of gamers.`,
                `Roger E. Moore`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '8-9',
            question: `What is the proper way to handle a fight with a hydra? Does the creature's effective hit dice drop as it loses heads? Will damage to the creature's body kill it? How do area-effect spells such as ***fireball*** effect the heads? How does one determine when a lernaean hydra's regeneration ability is stopped?`,
            answer: [
                `Hydras do pose a few problems, especially when magic is involved. I suggest the following rules for handling combat with a hydra.`,
                `A hydra's effective hit dice do not drop as the creature loses heads. With respect to melee, each of a hydra's heads is treated as a separate creature. Each head dies when it reaches zero hit points, and excess damage does not carry over to another head. When all heads are reduced to zero hit points, the creature dies immediately. Hits to a hydra's body will kill it; the body has as many hit points as the total hit points of its starting heads. When the body is reduced to zero hit points, however, the creature continues to fight as long as it has at least one living head. It will then fight for an additional 2-8 rounds or until the body is reduced to -20 hp.`,
                `A lernaean hydra's regeneration ability makes it a tougher nut to crack. The individual heads can be slain in the normal manner; however, a fire source must be applied to each slain head or it will regenerate. ***Burning hands*** is the easiest way to scorch the stumps or sundered heads. A torch, flask of oil,. or ***flame tongue*** sword will stop a single head's regeneration if applied in time. Any successful hit on the slain head will stop regeneration. A lernaean hydra stays alive as long as it has one living or regenerating head (hits to the creature's body not withstanding).`,
                `When any hydra is affected by an area spell such as ***fireball*** or ***lightning bolt***, the heads are treated as a single entities, with the damage distributed as evenly as possible among the heads. Although the heads are separate melee targets, they are still part of the same creature. The creature's body suffers as much damage as the heads took in total (i.e., the hydra gets one saving throw, but the heads and the body each take damage).`,
                `Spells that can kill a creature outright such as ***death spell***, ***power word kill***, or ***disintegrate*** kill the creature only if it fails its saving throw (if applicable). When determining a hydra's resistance to such spells, its effective hit dice are equal to its starting number of heads (or peak number, in the case of a lernaean hydra), and its effective hit points are equal to the total hit points of all the heads (damage to the body notwithstanding).`,
                `A spell that affects one creature or a limited area (such as ***magic missile*** or ***burning hands***) must be directed either at the body or at one or more heads of the hydra, according to the limitations of the spell. Spells such as ***charm monster***, ***hold monster***; or ***slow*** affect the entire creature, as the beast effectively has only one brain—perhaps at the base of the necks inside the body.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `What happens if a magic-user uses a sword when in desperate need?`,
            answer: [
                `If a character's need is truly great, the DM can allow any class of character to use a weapon prohibited to his class. The normal nonproficiency penalty applies (perhaps with an additional - 1 to hit). If a player falls into the habit of declaring his characters in desperate need too often, however, the DM should either disallow the use of the prohibited weapon or give the character no experience award for completing the adventure.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `What are the effects of blindness and deafness on spell-casting?`,
            answer: [
                `Blinded creatures are unable to cast any spell that requires a target, but spells that can be cast on an area (such as ***fireball***) or delivered by touch (such as ***cure light wounds***) may still be used. Deafness can cause spells with verbal components to be miscast and fail. The failure chance is up to you, but it shouldn't exceed 20% (less for spells with short casting times). The cleric spell ***holy word*** has a deafness effect that causes spells to fail 50% of the time; this is due mostly to the extreme power of the holy word, not merely the deafness.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `What is the significance of weapon speed factors?`,
            answer: [
                `Weapon speed factors allow for comparison among weapons. The lower the speed factor, the quicker the weapon. Their most common use (and the only use mentioned in the rules) is for breaking ties on initiative. When a tie occurs, compare weapon speed factors; the lowest factor goes first. However, on the first round of a melee, when the opponents are closing, the longer weapons have the advantage. The advantage is also with mounted opponents attacking or defending against unmounted opponents and with characters who are defending or attacking from above. Spellcasting time is equivalent to the weapon speed factor. That is, a weapon with a speed factor of 3 is as slow as a three- segment spell for purposes of tie breaking.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `How do you use the weapon to-hit adjustment tables in the ***Players Handbook*** (page 38) and ***Unearthed Arcana*** (page 27)? I don't understand what they mean.`,
            answer: [
                `The tables list the bonus or penalty given to a weapon against the basic armor types. For example, the line for Axe, Hand reads: -5, -4, -3, etc., for AC 0, AC 1, AC 2, etc., respectively. Full plate armor and shield gives AC 0, so a hand axe has a -5 to hit vs. full plate armor and shield. If the target were wearing full plate armor + 1 and using no shield, the adjustment is still AC 0. However, full plate armor alone is AC 1, so you use the AC 1 column regardless of magical bonuses, and the hand axe has a -4 to hit. The same holds true for dexterity bonuses. These tables are for attacking humans, demi-humans, and humanoids—never for attacking monsters. Use of the tables is strictly optional; they were included in the game mainly to satisfy the real history buffs who know that certain weapons were much more effective than others on the medieval battlefield.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `What do the following weapons look like: bardiche, spetum, voulge, guisarme, halberd, and scimitar?`,
            answer: [
                `Some of the less-known weapons in the AD&D game are pictured and described in ***Unearthed Arcana***, pages 123-128. The weapons depicted on these pages include everything on your list except the scimitar. A scimitar is simply a curved broad sword used by Arabs and Saracens. If you've seen any movies depicting the Middle East during the crusades, you've seen scimitars.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `What is a morning star?`,
            answer: [
                `A morning star looks like a long, thin club with spikes or flanges at the business end. The morning star in the AD&D game is similar to a mace but is longer and heavier. Some books on weapons identify a ball and chain as a morning star, but this combination is considered to be a flail in the AD&D game.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `Why did ***Unearthed Arcana*** take shields away from assassins? It seems a high price to pay for the option of having a good alignment.`,
            answer: [
                `***Unearthed Arcana*** is in error. Assassins may use shields but not during a melee round in which the character is engaged in the act of assassination. The alignment expansion was not an error.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `Can a character with a ***girdle of giant strength*** throw a halberd? When one of my players tried to do this I allowed it, but with a big to-hit penalty.`,
            answer: [
                `You were correct. Pole arms are not intended to be thrown, no matter what the thrower's strength. Anything, however, can be thrown with some chance of success. For throwing a pole arm, we suggest a to-hit penalty of -4 at short range (10' or less), -6 at medium range (11-20'), and -9 at long range (21-30'). We also suggest that you use these ranges outdoors where other missiles have ranges measured in yards. A pole arm is far too long for a human-sized creature to throw like a hand axe (so that the weapon spins or tumbles), no matter how much strength is available. Spear-type throws are possible, but hits can inflict damage only if the pole arm that is thrown has a spear point. Use spear damage (1-6) in this case, not pole-arm damage.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `What are the effects of total dark- ness on combat? When last faced with this problem, I simply ruled that everything within the darkness was invisible, and I applied the -4 to-hit penalty.`,
            answer: [
                `You handled the situation correctly. More information on the effects of darkness is given on page 32 of the ***Dungeoneer's Survival Guide***.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `What does the space requirement listed for each weapon mean?`,
            answer: [
                `The space requirement is exactly that: the minimum space a character must have in order to use a weapon. For example, a fighter must be standing in a space at least 4' wide to use a battle axe. Space requirements are cumulative; therefore, two fighters using battle axes side-by-side would require 8' of space.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `Can creatures with at-will abilities use such abilities while attacking? Can they use several abilities in the same round, say one per segment?`,
            answer: [
                `Creatures that have at-will abilities may use one such ability, once per round, in addition to normal movement or attacks.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9-10',
            question: `Can magic-users move during a round when they cast spells?`,
            answer: [
                `A magic-user must remain stationary only as long as the casting time of the spell. After casting a spell, the mage can move during the remainder of the round. For example, a ***fireball*** takes three segments; therefore, the mage casting it could have seven segments worth of movement after casting the spell. See page 102 of the ***Players Handbook*** for per-segment movement rates.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '10',
            question: `Is it possible for a character to leave a melee without exposing his back?`,
            answer: [
                `The DM might allow a character to back out of a melee at half speed so that the opponent's free attack would be frontal. Some campaigns allow a friendly character to cover for a retreating character so that the extra attack is resolved normally against the the character who is covering.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '10',
            question: `Can fighters with multiple attacks attack more than one opponent per round?`,
            answer: [
                `Yes; so can monsters and the members of other character classes that get multiple attacks.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '10',
            question: `How long does paralyzation last? Is it permanent until cured? What cures paralyzation? What is paralyzation, really?`,
            answer: [
                `In medical terms, paralyzation is the loss of sensation in part of the body as the victim's brain, for one reason or another, no longer controls the body. The uncontrolled muscles relax, and the victim goes limp. Autonomic muscles, such as the heart and lungs, are unaffected. Some kinds of paralysis in the AD&D game (paralysis caused by ghouls and ghasts, for example) cause the victim to become rigid and immobile. In either case, paralysis affects only the body, not the mind. The victim can still think and use psionics or any form of movement that does not require muscular effort. For example, if a character becomes paralyzed while using a ***fly*** spell, he can still fly until the spell runs out.`,
                `Paralyzation is not permanent. It can last anywhere from several rounds or turns to as much as a day. It can be removed with a ***remove paralysis*** spell (which removes paralysis of all types) or by a ***cure disease***, ***neutralize poison***, or ***dispel magic*** spell, depending on what caused the paralysis. Paralysis caused by undead creatures is disease- or fear-based; paralysis caused by living creatures is poison-based; paralysis caused by a ***glyph of warding*** or the illusionist spell ***paralyzation*** is magic-based. The AD&D 2nd Edition ***Monstrous Compendium***, Volume 1, lists the duration for ghoul paralysis as 3-8 rounds and ghast paralysis as 5-10 rounds. Paralysis caused by more powerful creatures lasts longer; lich paralysis, for example, lasts until dispelled.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_2E],
        },
        {
            page_number: '10',
            question: `Can a character with a bastard-sword proficiency also use long swords and two-handed swords, or does the character instead, require a proficiency in both long and two-handed swords?`,
            answer: [
                `Each weapon on the weapons lists requires a separate proficiency Although a bastard sword can be used one-handed with the same effect as a long sword, its larger size requires different handling. Likewise, the bastard sword requires different handling than the longer and heavier two-handed sword. However, if a character is proficient in bastard sword, he may use that sword either way.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '10',
            question: `What is a bastard sword's space requirement and speed factor when used one-handed?`,
            answer: [
                `The same as when it is used two-handed.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '10',
            question: `If a fighter is specialized (or double specialized) in a bastard sword, does he get the specialization bonuses when using the sword two-handed and one-handed?`,
            answer: [
                `A bastard sword is primarily a two-handed weapon. For purposes of game balance, it is best to limit specialization bonuses to two-handed use (or let the player choose).`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '10+36',
            question: `When a character gains proficiency with a multipurpose weapon (such as a kusari-gama in Oriental Adventures), does the character automatically gain proficiency with the weapons that correspond with each function (in this case, with chain and kama)?`,
            answer: [
                `The situation is analogous to that of the bastard sword described previously. Knowledge of the combination weapon does not necessarily allow use of its component weapons. The techniques required to use each of the weapons you mentioned are different. The governing principle in both of these cases is the no-free-lunch rule: You can't get two or more proficiencies for the price of one simply by selecting a multipurpose weapon.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '36',
            question: `When do charging characters attack? What are the effects of a charge?`,
            answer: [
                `Charging monsters or characters may attack normally at the end of their charge; exactly when depends on the reach of the weapons being used (longer weapons attack first). The charge movement, initiative, and affects chance to hit. See the ***DMG***, page 66, for more details on charging.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '36',
            question: `How do high dexterity scores or a ***short sword of quickness*** affect initiative?`,
            answer: [
                `High dexterity never affects initiative; it affects only surprise. A ***short sword of quickness*** allows the wielder to attack first. This is not the same has having the initiative; a thief-acrobat (for example) cannot automatically evade each round simply because he has a ***short sword of quickness***. He must win the die roll before he can evade.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '36',
            question: `Can missile weapons, other than hurled melee weapons, he used in melee?`,
            answer: [
                `No, missiles cannot be fired or hurled when the firing character is in melee. Furthermore, bows and arrows are not melee weapons and cannot normally be used in hand-to-hand combat. A bow or crossbow could, however, be used for pummeling (see ***Unearthed Arcana***, page 107).`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '36',
            question: `Can a character fire a missile into a melee without hitting friendly characters? If not, what is the chance of hitting an ally?`,
            answer: [
                `This depends on the situation. When firing into a melee, use the following procedure:`,
                `The character firing the missile declares which creature he is targeting. (Any of the character's allies who are fighting with the target creatures are potential targets for the missile.) Randomly determine which target will actually be in the path of the missile. If the figures in the melee are about the same size (e.g., human vs. hu- man, elf vs. dwarf), there is an equal chance that either the enemy or an ally could be the missile's actual target. If the die roll indicates that an ally will be the actual target and there are multiple allies fighting the intended target, randomly determine which ally is the actual target.`,
                `Roll the to-hit number. If the appropriate number for the target's armor class is rolled, then the target is hit whether or not the character firing the missile wanted to hit that target. If the creatures in the melee are of different sizes, the larger creatures are more likely to be hit. I sug- gest a two-thirds chance (1-4 on 1d61 to hit the larger target when the height difference is 2-3' (ignore height differences of less than 2'). If the height difference is more than 3', allow the missile to hit the larger target automatically if the firer wishes; otherwise, the chance to hit the larger target is 5 in 6.`,
                `Many campaigns exempt the ***magic missiles*** spell from this rule. ***Magic missiles*** are assumed to unerringly strike their targets.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '36',
            question: `Is it possible to use an object for nonlethal combat? How much dam- age would a chair or bar stool do?`,
            answer: [
                `Yes, you can use odd objects for nonlethal combat. The amount of damage such objects can do depends on their hardness and mass. See ***Unearthed Arcana***, page 107.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '36',
            question: `How far can objects be tossed or thrown?`,
            answer: [
                `The maximum range for any tossed object is 5" (a stone) or 3" (a flask of oil or a vial of holy water), as long as the object is reasonably compact. Large, bulky objects have a maximum range of 2" or less, depending on the situation.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '36',
            question: `How do you handle gaze attacks?`,
            answer: [
                `A creature with a gaze weapon may use it on one opponent per round in addition to any physical attacks. If the creature is unintelligent, this will be a random opponent. Intelligent creatures may pick their victims. Any opponent who can see the creature can be subject to the attack. The opponent who is subjected to the gaze attack must save vs. petrification. Some campaigns allow opponents to avert their eyes and become immune to the gaze attack, but such opponents attack and defend at a -4 penalty, and the decision to avert the eyes must be made prior to both the initiative roll and anyone knowing where the gaze will be directed. Some DMs may rule that if an entire party is surprised, all must save against the gaze during the first surprise segment of the encounter (several party members could accidentally meet the creature's gaze during the confusion of the surprise segment).`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '36+38',
            question: `I seem to recall some rule about a penalty when a character makes more than one attack in a round. Is there such a rule?`,
            answer: [
                `We can refer to page 70 of the ***DMG*** for this answer. The reference states that a character may use a second weapon instead of a shield, provided that the second weapon is a dagger or hand axe. Otherwise, there is no penalty for multiple attacks.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '38',
            question: `Is there any way to prevent a ***vorpal weapon*** from severing the neck if the attack roll is high enough?`,
            answer: [
                `No. However, the DM might choose to introduce some kind of protective magic that would do this. Note the limitations given on page 166 of the ***DMG***. The DM might choose to introduce some additional limitations; for example, it would be impossible for a human to sever a cloud giant's neck unless the giant was bent over or the human was flying or levitating.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '38',
            question: `Will unholy water harm a paladin?`,
            answer: [
                `Yes. It is created by an evil ritual and is harmful to paladins and good creatures of extraplanar origin such as devas and solars.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '38',
            question: `Can a cleric turn undead, then attack, run away, or cast a spell in the same round? Or does he stand there for a whole round, give up shield and dexterity adjustments to armor class, and hope that the turning works?`,
            answer: [
                `Turning undead is a separate activity. A cleric who turns undead may not fire missiles, melee, or cast spells in the same round as he turns undead, although he defends normally and may be able to move (DM's option).`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_TURN_UNDEAD],
        },
        {
            page_number: '38',
            question: `The monk ability ***quivering palm*** does not work on creatures that are struck only by magical weapons. Looking at the ***DMG***, I see that creatures that are themselves immune to normal weapons can hit other creatures that are immune to nor- mal weapons. Does the reverse hold true? That is to say, are those creatures that can hit creatures immune to normal weapons immune to normal weapons themselves? Specifically, are high-level barbarians immune to normal weapons and ***quivering palm***?`,
            answer: [
                `The barbarian's ability to hit those creatures that are normally hit only by magic weapons does not protect him from nonmagical weapons or a monks ***quivering palm***.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '38',
            question: `Can a torch be used as a weapon? How far can a torch be thrown? There are some instances when it is desirable to use a torch as a second- ary weapon; is this allowed?`,
            answer: [
                `Torches can be used as primary weapons; treat them as clubs for all purposes—even when throwing and inflicting damage, assuming that the torch is lit and the target is not immune to fire. A torch may be used as a secondary weapon if the DM thinks the situation warrants it. Apply the "Attacks With Two Weapons" rule on page 70 of the ***DMG***. If players attempt to abuse the privilege, the DM might have a character set fire to himself or his equipment. Have the torch either save vs. normal blow as thin wood, or break. The fire has a 10% chance of going out per blow.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '38',
            question: `How long does it take to draw a weapon?`,
            answer: [
                `Any weapon can be drawn in one segment (this effectively adds one segment to the weapon's speed factor). Common sense, however, dictates that a character who draws a weapon during a melee will lose initiative to a character who has already drawn his weapon, unless the character with the drawn weapon must use the segment that is required for the draw in order to close to melee range. Note that sheathing a weapon takes a bit longer; changing weapons carefully takes a full round (see ***Oriental Adventures***, page 54).`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '38-39',
            question: `How come a low-level character gets only one attack per round? A one-minute melee round certainly allows time for several attacks, especially if the character uses a light weapon such as a dagger.`,
            answer: [
                `A single melee attack in the AD&D game **assumes** the exchange of several blows. The player's single attack roll represents the result of a series of attacks by the character, not just a Single blow. See the ***DMG***, page 61, for more details. High-level characters who are allowed multiple attacks do not actually strike more blows; their greater experience merely allows them to strike a larger percentage of ***telling*** blows.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '39',
            question: `***Unearthed Arcana*** (page 78) says that a sap will stun an opponent if it hits him in the head when the head is uncovered. Since there are no hit location tables in the AD&D game, how do you determine if the sap hit the opponent's head?`,
            answer: [
                `The ***DMG*** has a rule that says an intelligent creature can aim a blow at an opponent's head half the time (1-3 on 1d6). While this rule (see page 46) encourages characters to wear helmets, I think it's a bit excessive. Try any of the following for adjudicating attacks with a sap:`,
                `Any attack roll four or more over the minimum score needed to hit the target strikes the head. Strength bonuses don't count when determining the minimum score to hit, but bonuses for rear attacks (including a thief's back-attack bonus) and attacks on prone opponents do count.`,
                `Treat the sap as a pummeling implement, and use the rules on page 107 of ***Unearthed Arcana***. The sap does no damage unless a stun is scored. It has the chance of a large and hard object to stun, and does normal sap damage (1-2) when a stun is scored. A sap is a weapon and negates the initiative penalty for pummeling attacks. Roll a 1d6 before each attack; a one indicates that the attack will strike the head if the sap hits.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '38',
            question: `The ***DMG*** gives a procedure on page 70 for attacking magically sleeping opponents, but what about normally sleeping opponents?`,
            answer: [
                `The to-hit bonus vs. normally sleeping opponents is +4.`
            ],
            comment: 'This clarification is what have been left out in 2E and is what is referenced in Sage Advice #265',
            attributes: [ATTRIBUTE_1E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '151',
    publication_year: '1989',
    publication_month: 'November',
    foreword: `This month, "Sage Advice" looks at the AD&D® Oriental Adventures volume. Page numbers cited herein refer to that game volume by David "Zeb" Cook.`,
    sage_advice: [
        {
            page_number: '8',
            question: `What do the birth ranks generated on table 38 (page 31) really mean?`,
            answer: [
                `As explained on page 31, the exact circumstances of a character's birth are up to the DM. The higher the initial die roll, the better off the character's family is. A first rank character, for example, probably comes from a well-to-do family with clear connections to the imperial family, or perhaps the character belongs to the imperial family (he might be a distant cousin). Upper-class families are skilled artisans, scribes, or wealthy merchants.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '8',
            question: `I don't understand the birthright rules on page 34. How do you use birth rank in order to modify the chances for a birthright? If you subtract birth rank from the number of rolls on table 40, then characters with low ranks never receive birth- rights, right?. Also, not all the results on the birth rank table (table 38, page 31) have numerical values.`,
            answer: [
                `The term "birth rank" is used incorrectly on page 34. The term that should be used here is "birth order" (see ***Unearthed Arcana***, page 83). An only child has a birth order of zero. A character born late in the birth order might not receive any birth- right even in a wealthy family.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '8',
            question: `How frequently are the generals of the animal kings encountered?`,
            answer: [
                `The "frequency" listing does not apply to these beings, as they appear only when their kings send them on errands. The DM must decide where and when they appear. If you wish to include them on a special random encounter table, assuming that PCs might encounter a general while it is abroad on some errand. Their frequency should be very rare at best.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '8',
            question: `Can samurai PCs become daimyos? If so, at what level?`,
            answer: [
                `Samurai characters can become daimyos but not simply by virtue of level. The character must first gain control of a province, either by conquest or by imperial decree (or both). Once control is firmly established, the character becomes a daimyo. The character must be at least 10th level in order to have the hierarchy of followers described on page 22 of the ***Oriental Adventures*** tome.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '8',
            question: `Can Oriental characters have psionic abilities?`,
            answer: [
                `Psionics are optional in an Oriental setting using the AD&D 1st Edition rules, just as they are in non-Oriental settings.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '8',
            question: `How do you determine the value of gems found during an Oriental adventure?`,
            answer: [
                `Use the gem section of the 1st Edition ***Dungeon Masters Guide*** (pages 25-26) or the 2nd Edition ***DMG*** (page 134) to determine values and properties of gems.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '8',
            question: `Why hasn't TSR published ***Oriental Adventures*** character sheets?`,
            answer: [
                `The newest AD&D character sheets (TSR product number 9264) are designed to work with Oriental characters.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '8',
            question: `Several character classes must have the calligraphy proficiency. The class descriptions seem to indicate that calligraphy costs one slot, but table 61 says it costs two slots.`,
            answer: [
                `Calligraphy requires two slots.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '8',
            question: `How many proficiencies do monks and yakuza get?`,
            answer: [
                `The following additions/changes apply to table 56 (page 51):`
            ],
            image: 'sage_advice_150_q10.png',
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '8',
            question: `Can the explanation of the wu jen's chance to know a spell on page 25 be used in non-Oriental campaigns?`,
            answer: [
                `The method described on page 25 is the same as the method described in the 1st Edition ***Players Handbook***, so there is no harm in using the ***Oriental Adventures*** explanation in non-Oriental campaigns based on the 1st Edition books. However, the 2nd Edition ***Player’s Handbook*** does not allow a chance-to-learn check for a spell until it is found (see page 16 of that volume).`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '8-9',
            question: `How do Oriental characters gain levels? Do they have to train? When do wu jen get new spells?`,
            answer: [
                `Oriental characters gain levels by accumulating experience and training. They must pay training costs (see page 86 of the 1st Edition ***DMG*** or page 49 of the 2nd Edition ***DMG***). Wu jen should gain new spells whenever they gain the ability to cast them and have access to such spells. For example, at 3rd level, a wu jen gains the ability to cast a second-level spell; he can do so if he finds a written copy of such a spell, learns it from someone else, or researches it himself *and* makes his chance-to-know roll (see page 25).`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '9',
            question: `Why isn't the battle axe listed as a two-handed weapon on table 49? Battle axes were used with two hands, at least sometimes. Perhaps the battle axe should be treated like a bastard sword, with two sets of statistics.`,
            answer: [
                `A battle axe is not a two-handed weapon. It is true that battle axes were often used with two hands, but this was because a man without a shield did not have anything better to do with his free hand and the axe's long haft provided space for the additional grip. If you want to experiment with statistics for two-handed use, improve the speed factor and AC adjustment for all armor types by + 1 and increase the damage inflicted to 3-9 (2d4 + 1). Weight, length, and space required are unchanged. The improvements reflect the extra muscle the wielder gains from using two hands.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `Can gajin characters learn Oriental languages, and can Oriental characters learn gajin Common? What about characters who already have a "full load" of languages?`,
            answer: [
                `Any character can learn a new language if his intelligence score permits. The DM might permit a character to forget a language that has not been used for a length of time in order to allow the character to acquire a new one. Racial and alignment tongues can never be forgotten in this manner. The time required to learn the new language is up to the DM; one local campaign uses 48 weeks minus the sum of the character's intelligence and wisdom.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `Is there any limit to the number of martial-arts styles a character can learn?`,
            answer: [
                `Theoretically, a character could have as many different martial arts styles as he had weapon proficiencies, but this would be a waste. The character would do much better to use the slots to learn weapons or special maneuvers.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `The calendar on page 107 is about two weeks short. Where did the extra time go?`,
            answer: [
                `The Kara-Tur calendar is 356 days long, making it nine days short when compared with the calendar of the FORGOTTEN REALMS™ setting on the very same planet. "Just Making Time," an article in DRAGON® issue #123, provides a quick solution for this problem. A nine-day festival is held between the consecutive months of Tu and Tsou, belonging to no month, which can be extended for one day every four years by imperial decree (accounting for leap years). The Kara-Tur zodiac has a celestial space unclaimed by any other constellation, matching this gap in the calendar.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `Where is the random encounter table for dungeon adventures?`,
            answer: [
                `Create your own random dungeon encounter table if you wish. The monsters' section of ***Oriental Adventures*** (starting on page 115) and the notes on page 138 of ***Monster Manual II*** will get you started.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `Can gajin characters use Oriental spells? Can Oriental characters use non-Oriental spells?`,
            answer: [
                `Page 130 of ***Oriental Adventures*** says that 5% of scrolls will contain gajin spells and that these may be used by Oriental characters; if you wish, you can reverse this for non-Oriental games.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `At what level can a wu jen research new spells? What about manufacturing scrolls or other items?`,
            answer: [
                `Spells can be researched at any level, so long as such spells are appropriate to the researcher's level; see the 1st Edition ***DMG*** (pages 115-116) or 2nd Edition ***DMG*** (pages 43-44) for more information. The required level for making magical items varies; see the 1st Edition ***DMG*** (pages 116-118) or the 2nd Edition ***DMG*** (pages 84-88). Wu jen levels equal magic-user levels for this purpose.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `The rules say that a character must learn a martial-arts style's special maneuvers in order. Yet the common styles on page 101 skip some maneuvers; tae kwon do, for instance, skips all the movement maneuvers and goes straight to number five. Please resolve this conflict.`,
            answer: [
                `There is no conflict at all. Any style's special maneuvers are learned in numerical order, no matter what groups they are from. In tae kwon do, for example, Movement 5 is the last maneuver learned. The character does not have to (and cannot) learn Movements 1-4 because they are not part of his style.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `Do bushi-ninja get strength bonuses in combat? Can wu jen-ninja use spells while armored? When can a ninja use the ki powers from his other class? Does a ninja character get experience only when he's acting like a ninja?`,
            answer: [
                `It would be helpful for you to think of a ninja as a type of dual-classed character. Ninja is not an independent class; a ninja may draw upon either of his classes at any time. Bushi-ninja do get strength bonuses. Any ninja can use the skills, spells, and ki powers of his other class within the restrictions given (e.g., a wu jen-ninja cannot cast spells while wearing armor). The DM must decide when a ninja is "acting like a ninja." The determination does not have to be exact, since it affects only experience. Generally, experience is split evenly between both classes if the ninja makes use of his ninja abilities during an adventure.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `Are scale and chain mail armor both considered metallic armors, or can ninja move silently while wearing these armor types?`,
            answer: [
                `Metal scale and chain are both metallic armors. Leather scale is not, and so can be used for silent movement by ninja.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `How do you determine which special maneuvers can be used with a created martial-arts style?`,
            answer: [
                `The form of the style determines which special maneuvers can be used with it. Each special maneuver on table 70 (page 103) is labeled for use with one of the forms. A special maneuver labeled *hard* is used primarily with hard styles, *hard/soft* maneuvers can be used with any style, and soft maneuvers are used primarily with *soft* styles. The special maneuvers listed under mental and physical training are labeled with the most compatible forms but may be used with any style; all other special maneuvers should be restricted to their primary style—no more than one "out of form" maneuver per style is a good rule of thumb.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '9',
            question: `How long are turns, rounds, and segments in an Oriental campaign?`,
            answer: [
                `The lengths of a turn, a melee round, and a segment are the same as in non-Oriental adventures; see the 1st Edition *Players Handbook* (page 31) or the 2nd Edition *Player’s Handbook* (page 91; note that segments are not used in the AD&D 2nd Edition rules).`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '9',
            question: `The rules say that the chance to perform a peaceful skill "can never be less than a 3 on 1d20" (page 52). Does this mean that a character must roll under the number given for the proficiency in order to succeed? How does a charter get bonuses to his roll? Do high ability scores help? How can a character ever roll more than a 20 on 1d20?`,
            answer: [
                `The character must roll the number listed or better on 1d20. Three is the lowest adjusted chance for success. That is, no matter how good the character is, he will always fail on a roll of 1 or 2. Scores greater than 20 can be achieved by adding bonuses from extra slots spent in the proficiency (see page 52) or from a magical item (or both). Ability modifiers do not apply to peaceful skills.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `I have a book that says long needles were sometimes used in assassinations. What are the statistics for needles?`,
            answer: [
                `Treat them as chopsticks.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `What kind of property does a samurai get at 9th level? How much property does a jito get?`,
            answer: [
                `Samurai do not get property at 9th level; they get the great kiai and followers. They are offered stewardship, not ownership, of various properties at earlier levels. A jito (the stewardship offered to a 7th-level samurai) generally manages one to three villages for his daimyo.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `How much does Oriental equipment weigh? How large and heavy are grenades?`,
            answer: [
                `Use the figures for the nearest equivalent from the regular AD&D rules or real life. Rope or clothing, for example, weighs the same no matter where it is made. Grenades are about the size and weight of a flask of oil.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `If a character loses a family heirloom or weapon, is he obligated obligation to regain it or die in the attempt? Must he commit suicide if regaining the item is impossible?`,
            answer: [
                `The character simply loses 5 points of honor (or 10 points if he is a samurai). The character is under no particular obligation to regain the item. The DM might choose to assess a further honor loss (2 points for refusing a challenge) if the character does not attempt to regain the item, or the DM might make an honor award (5 points for accomplishing a great deed) if the character successfully regains the item. No character is ever obligated to commit suicide due to loss of honor, though any character with a negative honor score is immediately removed from play (see *Oriental Adventures*, page 35).`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `In "Sage Advice" in issue #122, you said that the to-hit roll required for the special martial-arts maneuver Leap should be made against AC 10. Does this apply to to-hit rolls required for other maneuvers, such as Weapon Catch?`,
            answer: [
                `No. In general, combat special maneuvers require a to-hit roll vs. the armor class of the target character. The target character in a Weapon Catch is the character holding the weapon that is to be caught.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `There is a large honor penalty for a ninja who allows his true identity to be discovered. Is there any penalty for a ninja who allows the fact that he is a ninja to be discovered?`,
            answer: [
                `No. A ninja always uses an alias and keeps his real name and the details of his family history secret. Ninja should try to conceal the fact that they are ninja, but this is not a necessity. Hiding a ninja's true character class is very difficult in a campaign. It is not impossible, however, so the DM may assign a minor penalty if it leaks out; - 1 honor point is plenty.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `At the very bottom of page 50, there appears to be an introduction to a table. What happened to the table?`,
            answer: [
                `The text at the bottom of page 50 refers to table 55, which is located immediately above the text.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `Isn't a lajatang a two-handed weapon?`,
            answer: [
                `Yes, the lajatang entry in table 49 (page 41) should be boldfaced.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `What is the conversion rate between non-Oriental gold pieces and Oriental tael and ch'ien? What about copper, silver, electrum, and platinum pieces?`,
            answer: [
                `Table 46 (page 38) gives conversion rates. Gold, electrum, and platinum are not accepted as currency in Kara-Tur, so these coins must be sold for the market value of the metal in them. The market value of one gold piece is 2-7 (1d6 + 1) tael (see page 38). Extrapolating, a platinum piece is worth 11-30 (1d20 + 20) tael. The market price of gold and platinum varies independently, so it is possible for the price of platinum to be low while the price of gold is high. Electrum is mostly gold, so its price varies with the price of gold: an electrum piece is worth half the current value of a gold piece.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `A ninja-to can have a secret compartment in the hilt. How much can be held in the compartment?`,
            answer: [
                `The compartment is very small; it can hold one dose of poison or an item the size of a finger ring or coin.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `What are the rules for Oriental characters fighting with a weapon in each hand? What is the limit of the kensai two-weapon ability? Obviously, a kensai can't use two katanas—or can he?`,
            answer: [
                `The rules are the same as those for non- Oriental characters; see the 1st Edition ***DMG*** (page 70) or the 2nd Edition *Player’s Handbook* (page 96). Any Oriental weapon that is the equivalent of a dagger or hand axe can be used as a second weapon (see *Oriental Adventures*, table 48, page 41). A kensai's second weapon must be a dagger or hand axe (or an equivalent).`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `Can a character with high dexterity spend extra slots on fighting with two weapons and avoid the two-weapon penalty?`,
            answer: [
                `No. Only kensai of 7th level and above have the ability to fight with two weapons at no penalty.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `Page 8 says that a ninja gains a 10% bonus for high dexterity, but page 19 says he does not. Which is correct?`,
            answer: [
                `Page 19 is correct.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `Table 13 (page 14) says that ninja can use any weapon, but a footnote says that they must learn only ninja- preferred weapons. What happens when a high-level ninja has learned all the ninja weapons?`,
            answer: [
                `A ninja can learn nonninja weapons in two ways. First, he can use slots from his other class. Second, once he is proficient with all ninja weapons, he can choose any weapon.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `What are the statistics for a badger hengeyokai (mentioned on page 13)?`,
            answer: [
                `A badger is a "raccoon dog" in Oriental parlance. The raccoon dog is listed on table 11 (page 12).`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '58',
            question: `What is the initiative modifier for a character who knows iaijutsu?`,
            answer: [
                `There is none. The character simply has the ability to draw or change the weapon at no penalty. The character also has a better chance to surprise opponents under certain circumstances. See *Oriental Adventures*, page 99.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '152',
    publication_year: '1989',
    publication_month: 'December',
    foreword: `The sage makes another tour of the AD&D® 2nd Edition game, focusing on the new ***Player’s Handbook (PHB)*** and ***Dungeon Master’s Guide (DMG)***.`,
    sage_advice: [
        {
            page_number: '8',
            question: `The rules on page 97 of the ***PHB*** say that polearms and spears do double damage vs. charging opponents, but the tables on pages 68 and 69 say only a few polearms can do this. Which is correct?`,
            answer: [
                `Those polearms marked with a "#" and all spears do double damage when set vs. a charge. Polearms marked with a "*" do double damage vs. charging opponents that are larger than man size.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '8',
            question: `Both of the AD&D game 2nd Edition rule books say that magical rings "radiate" magic. Does this mean they glow with a magical aura all the time? Can you tell an item is magical just by looking at it?`,
            answer: [
                `The term "radiates" indicates there is a magical aura which cannot be seen, touched, tasted, or smelled but can be detected with the proper divination; a ring can radiate magic, a dragon can radiate evil, and so on. While the DM might rule that an aura might be detectable without magical aid, magical items usually are found only with ***detect magic*** spells or by experimenting with them to test for unusual properties.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '8',
            question: `If an identify spell will not tell you the exact number of charges or pluses an item has, how do you find out? Can a sage tell?`,
            answer: [
                `The best way to get an item's exact charges or pluses is to start with an ***identify*** spell to determine the approximate number, then use a ***contact other plane*** or ***commune*** spell to get the exact number. The DM has to decide what sages can do in his campaign, but giving a sage a chance to determine an item's exact pluses is reasonable. Sages have no way to determine charges; a wand with one charge looks exactly like a wand with 99 charges. If the item was first studied with ***detect magic*** and ***identify*** spells, a sage could study the item for additional clues about who made and enchanted it and stand a good chance of guessing its powers. This would require a sage with knowledge of folklore, history, or both.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '8',
            question: `Can a player who finds a potion taste it and immediately find out exactly what it is?`,
            answer: [
                `First, ***players*** cannot test potions, but player ***characters*** can. When a character tastes a potion, the DM should give some hint or clue about its properties (see the ***DMG***, page 141).`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '8',
            question: `Is there a reason why all the character-class experience charts stop at level 20?`,
            answer: [
                `In the AD&D 2nd edition game, 20th level is the intended stopping point for all character advancement. This is because the designers and editors believe (and I agree) that the AD&D game system begins to break down around level 20. After level 20, continued advancement becomes almost meaningless, adventures are hard to design, and campaigns are hard to maintain. An expansion for character levels 21 and up has been discussed, but there are no current plans for such a product. Players and DMs who want to use megalevel characters are on their own.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '8',
            question: `Does a cleric's ability to turn un- dead really stop getting better at level 14, as table 61 (page 103) in the ***PHB*** suggests?`,
            answer: [
                `Yes, the progression does stop at level 14, at least for now. In game terms, this is the limit of power that deities can (or will) "lend" to clerics to fight undead. In design terms, this keeps high-level clerics from blowing away liches and other powerful undead with a simple die roll.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '8',
            question: `Dow come the "death at - 10 hp" rule was dropped from the game?`,
            answer: [
                `It hasn't been dropped. See the "Hovering on Death's Door" optional rule in the ***DMG***, page 75.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '8',
            question: `Should characters who put on a ***cloak of poisonousness*** be allowed a save vs. poison or a save vs. death?`,
            answer: [
                `Neither. Characters who don the cloak die.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '8',
            question: `"Does attacking dispel the ***invisibility*** given to the attacker by a ***ring of invisibility*** or a ***cloak of elvenkind***? If so, who long must the attacker remain visible?`,
            answer: [
                `Offensive actions break the ***invisibility***. The wearer must remain visible at least until the beginning of the next melee round.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_INVISIBILITY],
        },
        {
            page_number: '14',
            question: `Can a cleric use an ***amulet vs. undead***? Can a druid?`,
            answer: [
                `Clerics whose power to turn undead is equal to or better than the amulet's get no benefit from it; all other characters turn undead at the amulet's level regardless of class or alignment.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_TURN_UNDEAD],
        },
        {
            page_number: '14',
            question: `The table for the ***staff-spear*** (***DMG***, page 154) says a roll of 20 indicates a + 3 weapon. Shouldn't this be + 6?`,
            answer: [
                `A roll of "20" indicates the ranseur version of the ***staff-spear***; the asterisk should have been placed by the "+3" figure in the bottom line.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `The description of a ***helm of teleportation*** mentions a risk for non-wizards when teleporting. What is the risk?`,
            answer: [
                `The "risk" is the same for all characters; see the wizard spell, ***teleport***, in the ***PHB***, page 172.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `At what level is a wizard character allowed to specialize?`,
            answer: [
                `Wizard specialties should be chosen when the character is created. If a character does not meet the ability score requirements for his desired specialty, the DM might allow him to specialize later in his career if the deficiency is resolved and the character does not have spells from a prohibited school in his spell books.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Can a nonwarrior have a strength greater than 18? If so, does the character get exceptional strength or does he proceed straight to 19?`,
            answer: [
                `Strength ratings over 18 are possible through the use of ***wishes*** or magical items. Generally, an increase in an ability score. that is higher than 16 and less than 20 comes in increments of one-tenth of a point (see the ***DMG***, pages 11-12). A non-warrior with a strength greater than 18 but less than 19 gets no special benefits; treat the character's strength as an unremarkable 18.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Do halflings get any combat modifiers due to their small size?`,
            answer: [
                `Halflings get no combat modifiers due to size in the core rules, but this could change in a future supplement.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Can a character with a strength of 1 wear clothes? The chart on page 14 of the PHB says the PC's maximum press is 3 lbs., but the text on page 75 says clothes weigh 5 lbs.`,
            answer: [
                `The character's maximum press has nothing to do with what he can carry. The character cannot raise the clothes above his head, but he can wear or carry them. Clothes, however, would encumber the character.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `If the minimum wisdom score for a cleric is 9, why does table 5 list spell failure chances for wisdoms of less than 9?`,
            answer: [
                `A cleric must begin play with a wisdom score of 9 or higher, but the score might drop temporarily (or permanently) during play; most DMs allow PCs to continue in their classes, even if their ability scores fall below the minimum requirements.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Can nonelven characters find secret or concealed doors?`,
            answer: [
                `Yes. Generally, the chance for them to do so is one in six, only if the character is actively searching a 10' section of a surface.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Do gnomes get a constitution-based saving throw bonus vs. poison like dwarves do?`,
            answer: [
                `No; gnomes have no special resistance to poison.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Does fighting with two weapons require a special weapon slot? If so, do rangers have to spend a weapon proficiency on it?`,
            answer: [
                `This is up to the DM. If a slot is required, rangers get it free.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Is there a range limit on the clerical undead turning ability?`,
            answer: [
                `A cleric can turn undead if he can see and recognize them as undead, and if they can see and recognize him as a cleric. The range indoors is limited by the size of the area and the available light. The absolute limit outdoors is about 240 yards, less in poor light or through concealment.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_TURN_UNDEAD],
        },
        {
            page_number: '14',
            question: `How long does it take a druid to change form when ***shape changing***? How long do changes in form take with a ***polymorph self*** or ***shape change*** spell? Do protective items like rings or bracers work with druid's new form? Are protective items like bracers or rings considered clothing, since only clothing and one item held in each hand changes along with the druid?`,
            answer: [
                `Generally, assuming a new form counts as an action and takes three segments (+ 3 initiative modifier). The first change in form is usually considered part of the casting time for ***polymorph self*** and ***shape change*** spells. Most DMs allow protective devices to work even on ***polymorphed*** or ***shape changed*** creatures, and most DMs I know ignore the clothing-and-two-items restriction for druids and allow all the druids equipment to change with him.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_TURN_UNDEAD],
        },
        {
            page_number: '14',
            question: `The set snares proficiency is available to both rogues and warriors. However, table 37 (***PHB***, pages 54-55) says this requires a dexterity check for rogues and an intelligence check for warriors. Are these really different skills or is there an error?`,
            answer: [
                `Check dexterity in either case.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Will 90% soft cover, such as a tapestry or overturned table, protect a character from spells, or does only hard cover do this?`,
            answer: [
                `DMs must resolve this on a case-by-case basis. When in doubt, have the cover make an item saving throw; if this succeeds, characters behind it take one-half or no damage.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Can monsters use breath weapons or innate spell abilities during the "free" round they get when they achieve surprise?`,
            answer: [
                `You bet. Any creature who surprises another can use any attack it has, but it cannot cast a spell.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Does a PC's lifetime limit on the number of henchmen apply to henchmen who leave because they equal or surpass the PC's level? I assume not. Henchmen achieve high levels with help from PCs. If "graduating" henchmen did count, it would be in the player's best interest to see that none of his character's henchmen ever became high level.`,
            answer: [
                `This is up to the DM, but your argument is very persuasive.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Can a wizard or priest pick the number of people affected by a ***hold person*** spell?`,
            answer: [
                `Yes, the number of creatures effected by a ***hold person*** spell is under the caster's control.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '14',
            question: `How much does one day's amount of common meals weigh?`,
            answer: [
                `The weight of a day's common meals varies with the locale, season, and cuisine, but 2-5 lbs. per person is a good rule of thumb. This weight includes bones, skins and other inedibles. Common meals, however, are rarely carried anywhere, so their weights don't matter much. A week's dry rations generally weigh 7-10 lbs., all of which is edible.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Can specialist wizards use scroll spells from opposition schools? Can clerics use scroll spells from out- side their spheres?`,
            answer: [
                `A character who can use spells can use a scroll if it matches his class, so priests can use scroll spells from outside their spheres and wizards can use scroll spells from outside their schools.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Table 56 in the ***PHB*** (page 94) says that a scroll's initiative modifier is the same as the spell on the scroll. What is the modifier for a protection scroll?`,
            answer: [
                `Unless stated otherwise in the scroll's description, a protection scroll has an initiative modifier of + 3.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '59',
            question: `My DM says that a specialist wizard gets one bonus first-level spell for each level of experience he has. Is this correct?`,
            answer: [
                `No. A specialist wizard gets one bonus spell for each level of spells he can cast. For example, a 5th-level wizard can cast four first-, two second-, and one third-level spells; if he is a specialist, he gets three extra spells, one of each level.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '59',
            question: `There seems to be an error in the description for the second-level wizard spell, ***fool's gold***. Shouldn't the creature viewing the gold subtract one from its saving-throw roll for every level of the caster?`,
            answer: [
                `Yes, but the creature' s wisdom adjustment (if any) applies to the save.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '59',
            question: `Do bards have to spend a proficiency slot on a musical instrument? What happens to their ability to influence reactions if they do not?`,
            answer: [
                `That is entirely up to the DM. If the DM decides a musical instrument is necessary to influence reactions, I suggest bards either learn an instrument for "free" or that they be required to automatically spend a proficiency on an instrument. On the other hand, a bard might very well be able to sing or speak well enough to influence reactions without an instrument; this is a common practice in the real world.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '59',
            question: `Can a ranger (or other character) who uses two weapons parry with one and attack with the other? Would the character get a better armor-class modifier is he parried with both weapons?`,
            answer: [
                `The only way to parry in the AD&D game is to forfeit all attacks, whether the character is using two weapons or one.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '59',
            question: `The description of the wizard spell, ***animal growth***, suggests that a ***tongues*** spell can be used to converse with animals—but the description of the ***tongues*** spell says it cannot.`,
            answer: [
                `A ***tongues*** spell allows the caster to communicate only with creatures that have language. The reference to the ***tongues*** spell in the description of the ***animal growth*** spell is an error.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '59',
            question: `How close must a creature come to an object with an ***attraction*** spell (the reverse of an ***avoidance*** spell) cast on it before the object moves toward him? Does the object move quickly enough to inflict damage if it strikes the creature?`,
            answer: [
                `The object moves when the creature comes within 1'. The object moves quickly but does not inflict damage when it strikes the creature.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '59',
            question: `If a ***light*** spell is cast upon a piece of chalk, can the chalk be used to write glowing messages? If the spell is cast on a rock, can you break the rock in half and have two half-strength ***light*** effects? If the spell is cast on a vial of water, will the water glow?`,
            answer: [
                `No, no, and no. A ***light*** spell illuminates a 20' radius. Casting it on an object simply makes the effect mobile. The spell has one and only one center of effect; if the object the spell has been cast upon is broken, spilled, or worn away, the spell stays with one portion of the object or becomes immobile, fixed in space. It might be possible to transfer the spell from one object to another by casting it on a mutable object. For example, if the spell is cast on an open vial of water, the spell will be transferred to the vial if the water is allowed to evaporate away.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
    ],
})
DRAGON_MAGAZINES.push({
    issue_number: '153',
    publication_year: '1990',
    publication_month: 'January',
    foreword: `The spells for clerics and druids in the AD&D® 1st Edition game are explored in this column. All references to the ***Dungeon Masters Guide*** and ***Players Handbook*** in this article are to the 1st Edition versions of those volumes. In all cases, the information in the AD&D 2nd Edition volumes takes precedence where there is a contradiction between those rules and this column.`,
    sage_advice: [
        {
            page_number: '6',
            question: `How does one determine which spells a cleric can cast?`,
            answer: [
                `A cleric always has access to the full list of clerical spells (limited, of course, by that character's level). Clerics have no spell books, and their spell lists are not limit as are magic-users'.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '6',
            question: `What does a ***bless*** spell do, and how is it different from the ***chant*** and ***prayer*** spells? Also, are the ***chant*** spell's damage bonuses and penalties counted per attack or per die of damage? Do the areas of effect of these spells move with their casters?`,
            answer: [
                `Here's what each spell does: A ***bless*** gives friendly creatures +1 on morale "to hit" rolls; if reversed (as a ***curse***), it gives enemies a -1 on those rolls. A ***chant*** spell gives friendly creatures +1 on "to hit," damage, and saving-throw rolls; at the same time, enemies receive a -1 on the same rolls. A ***prayer*** spell gives friendly creatures +1 on "to hit" and saving-throw rolls, and enemies -1 on the same rolls. ***Prayer*** does not affect damage, and neither ***prayer*** nor ***chant*** affect morale. The areas of effect for each spell are fixed and do not move with their casters. ***Bless*** affects creatures in its area of effect at the time of casting only; ***chant*** and ***prayer*** affect all creatures in the area of effect, even those who enter after the spells are completed. Damage modifiers from ***chant*** are per attack, not per die of damage.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '6',
            question: `The duration of a ***bless*** spell is given as "6 melee rounds." Does this mean that the bless spell lasts for six total rounds of melee, possibly with days between?`,
            answer: [
                `No. The duration of a ***bless*** spell is six consecutive rounds from when it is cast.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '6',
            question: `What happens when a ***bless*** spell is cast upon a cursed item?`,
            answer: [
                `Nothing. A ***bless*** spell will not "fix" a cursed item, but a ***remove curse*** spell might (see individual item descriptions).`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '6',
            question: `What is the effect of casting bless on a sword or other weapon?`,
            answer: [
                `***Bless*** spells are cast on creatures, not objects, with the only exception being crossbow bolts that are used to slay rakshasas. In the latter case, the spell is cast directly upon a single bolt, and the effect lasts until the bolt is used (whether the bolt hits its target or misses).`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '6',
            question: `How do blindness (such as from ***cause blindness***) and deafness each affect spell-casting?`,
            answer: [
                `Blinded creatures are unable to cast any spell that requires a visible target (such as ***magic missile***). Spells that can be cast on an area (such as ***fireball***) or delivered by touch (such as ***cure light wounds***) are still usable.`,
                `Deafness can cause spells with verbal components to be miscast and fail. The failure chance is up to the DM, but it shouldn't exceed 20% (less for spells with short casting times). A 2% cumulative failure chance per segment of spell-casting is suggested. The spell ***holy word*** has a deafening effect that causes spells to fail 50% of the time. This is due mostly to the extreme power of the ***holy word***, not merely the condition of deafness.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL,ATTRIBUTE_BLINDNESS,ATTRIBUTE_DEAFNESS],
        },
        {
            page_number: '7',
            question: `Can a ***command*** be combined with an attempt to turn undead?`,
            answer: [
                `***Command*** is a spell; the cleric may not fire missiles, engage in melee, or turn undead in the same round as he casts a spell.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Is there a period of disability for characters revived with a death's door spell?`,
            answer: [
                `Death’ s door doesn't revive characters; it maintains characters at zero hit points until the spell wears off or until the character is revived with a cure wounds spell. Characters revived in this manner can resume activity immediately.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can a ***glyph of warding*** be cast upon a portable object such as a sword or sling bullet and used offensively?`,
            answer: [
                `No. A ***glyph*** is a magical ward used to protect an object. A glyph can be cast upon a weapon, but it will be triggered only when a creature touches the weapon, not when the weapon strikes a creature.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Are creatures affected by one of the ***hold*** spells held immobile or simply paralyzed?`,
            answer: [
                `***Hold*** spells are similar to paralysis except that the effect is mental, not physical. A ***held*** creature cannot move, fight, or communicate in any way. The creature can, however, be moved by others.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can a ***light*** or ***continual light*** spell be used to negate the darkness ability of a demon or devil?`,
            answer: [
                `Yes, on all counts. Each of these spells can negate darkness of any sort, though a ***light*** spell will "go out" immediately after negating such darkness, while the ***continual light*** spell will last. ***Light*** or ***continual light*** spell will negate only one darkness effect at a time; thus, if there are two darkness effects in the same area, the area remains dark until two light effects are used.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `The spells' areas of effect listed in the ***Players Handbook*** have got to be incorrect. The ***lower water*** spell, for example, has an area of effect of a 1" × 1" square per level of the caster. Surely a cleric can affect more water than one square inch.`,
            answer: [
                `The area is measured in scale inches. One *scale* inch equals 10', and one scale square inch equals 100 square feet. Remember that the areas of spell effects never get larger outdoors, although ranges do get larger (see page 39 in the ***Players Handbook***).`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Does the circle of protection from a ***protection from evil, 10' radius*** spell move with the caster?`,
            answer: [
                `Yes, both versions of the ***protection from evil*** spell move with the caster.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `If a character is killed and receives a ***raise dead*** spell, how long must he rest and how many hit points will he have?`,
            answer: [
                `*Raised* characters must rest for the amount of time they have been dead. The minimum rest period is one day. *Raised* characters have from 3-17 hp (2d8 + 1), though this value is reduced if the PC's maximum number of hit points is less than the value rolled.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `What are the statistics for rocks animated with the spell ***animate rock***? Would they be similar to the boulders animated by the galeb duhr in the ***Monster Manual II***?`,
            answer: [
                `A 24-cubic-foot boulder has the following statistics: AC 0; MV 3"; HD 10; #AT 1; Dmg 5-30. The spell's effect is slightly better than the galeb duhr's ability. A statue of the same size with a human shape would have the same armor class and hit dice, but would move at 9" on its legs and strike twice per round for 2-16 hp damage per blow. Neither of the above "rocks" is as good offensively as the elemental a druid could get with a ***conjure earth elemental*** spell at the same level, but the animated rocks are not balked by water nor dismissed by a ***holy word*** spell.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can ***call lightning*** be used against submerged creatures?`,
            answer: [
                `The bolt from a ***call lightning*** spell ends at the water's surface, but its 1" radius of effect extends below the surface and has its full effect on any submerged creature therein.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `What are the effects of the disabilities inflicted upon appendages by the ***heat metal*** and ***chill metal*** spells?`,
            answer: [
                `I recommend that you drop the disability effects of the ***heat metal*** spell and its reverse. The damage inflicted alone is sufficient for a 2nd-level spell.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can a ***wall of fire*** be formed into a circle around a target so that the hot side faces in toward the target?`,
            answer: [
                `Yes, it can.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
    ]
})
DRAGON_MAGAZINES.push({
    issue_number: '154',
    publication_year: '1990',
    publication_month: 'February',
    foreword: `The spells and abilities of magic-users and illusionists in the AD&D® 1st Edition game are explored this month. All references to the ***Dungeon Masters Guide*** and ***Players Handbook*** in this article are to the 1st Edition versions of those volumes. In all cases, the information in the AD&D 2nd Edition volumes takes precedence where there is a contradiction between those rules and this column.`,
    sage_advice: [
        {
            page_number: '6',
            question: `Will a creature under a ***fear*** effect return attacks made upon it?`,
            answer: [
                `A creature affected by ***fear*** ignores any attacks made upon it unless it is cornered and cannot flee. The creature fights at no penalty, although it might still drop items it carries (see the ***PHB***, page 76). If the creature is in flight, attacks upon it are made against its rear armor class (no dexterity or shield bonuses).`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '6',
            question: `Can a ***lightning bolt*** spell be cast vertically or at right angles to the caster, or must it be cast in line with the caster?`,
            answer: [
                `A ***lightning bolt*** spell must be cast so that the bolt is in line with the caster and his target. The bolt may be cast in any direction, including straight up, as space permits.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '6',
            question: `How do you handle the effects of a ***stinking cloud*** spell? How can any creature move out of the cloud if it is rendered helpless?`,
            answer: [
                `A successful save vs. poison indicates that the creature moves out of the cloud immediately and is helpless for a full round afterward. A failed save indicates that the creature is helpless for 2-5 rounds before leaving the cloud, remaining helpless for one round after it emerges.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '6',
            question: `Can a creature's throat or mouth be sealed with a ***hold portal*** or ***wizard lock*** spell?`,
            answer: [
                `No. A closure to be sealed by a ***hold portal*** or ***wizard lock*** spell must be of wood, metal, or stone.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '6-7',
            question: `Does the caster of a ***dispel magic*** spell have to check to see if his own spells are ***dispelled***? Will a minor ***globe of invulnerability*** prevent a ***dispel magic*** spell from working?`,
            answer: [
                `A ***dispel magic*** spell automatically works on the caster's own spells; a die roll is required to determine its success on all other magics. The two ***globe of invulnerability*** spells can be dispelled; note also that they are visible. If any ***globe of invulnerability*** is dispelled, then all other magical effects in the ***dispel magic*** spell's area of effect are subject to its effects. If a ***globe of invulnerability*** is not dispelled, it protects all magic effects within its area of effect. There are some spells that cannot be dispelled; ***anti-magic*** shell and ***wall of force*** are two examples.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `I don't understand what the area of the first-level illusionist spell ***phantasmal force*** should he.`,
            answer: [
                `The base area for a ***phantasmal force*** spell is four (scale) square inches, meaning 10' × 40' (400 square feet) or any set of dimensions not exceeding 400 square feet. The area increases by one (scale) square inch (100 square feet) per level.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `What is the area of a ***cone of cold*** spell?`,
            answer: [
                `The cone is ½" wide at its origin, 2" wide at its terminus, and ½" long per level of the caster. As noted in the previous question, these are scale inches, such that 1" = 10'. Thus, the cone is 5' wide at its origin, 20' wide at its terminus, and 5' long per level of its caster.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can ***unseen servants*** fly? How fast do they move?`,
            answer: [
                `***Unseen servants*** may move in all three dimensions at a rate of 12") subject to the spell's 3" radius. Thus a ***servant*** can move along with its caster at normal walking speeds.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can a spell-caster still cast spells if he is ***polymorphed*** or ***reincarnated***?`,
            answer: [
                `Yes, probably. ***Polymorph self*** allows spell-casting if the new form has prehensile digits and is capable of speech. Note, however, that all equipment carried ***polymorphs*** with the caster, so spell components won't always be available. If a ***polymorph other*** spell was used, the victim might "lose" his components as above, and he will lose all memories and abilities if he assumes the mentality of his new form. What happens when a character is ***reincarnated*** is up to the DM. Generally, the character can still use his professional skills if his new form will physically allow it, although further advancement is not always possible.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `When a ***Mordenkainen's disjunction*** spell is cast, how do you determine the effects on magical items? Will an ***anti-magic shell*** or ***wall of force*** keep the effects of the ***disjunction*** out? What if only part of a spell's area of effect overlaps the area of the ***disjunction***?`,
            answer: [
                `Items in the possession of the spellcaster are immune to the spell's effects. Items in the possession of other creatures gain their possessors' saving throws vs. spells, with all adjustments. Items that are by themselves can be ***disjoined*** using the ***dispel magic*** spell's system (comparing the caster's level vs. the level at which the magical item was created). Potions and scrolls are treated as if created by 8th-level magic-users; permanent magical items are treated as if created by 12th-level magic-users.`,
                `If any portion of a spell's area of effect overlaps the area of the ***disjunction***, the entire spell is ***disjoined***. A ***wall of force*** can be so ***disjoined***, and it will have no effect on the ***disjunction*** spell. Treat the chance for ***disjoining*** an ***anti-magic shell*** as that for an artifact, but with no chance for attracting the attention of a powerful being (see ***Unearthed Arcana***, page 65). If an ***anti-magic shell*** is unaffected, it protects all magic within its area; if the ***anti-magic shell*** is ***disjoined***, all magical spells, effects, and items within the area of the ***disjunction*** are subject to its effects.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `How do you determine the effect of a ***sleep*** spell on a group of mixed creature types?`,
            answer: [
                `This is up to the DM. He may rule that weaker creatures are affected first, or he may allow the caster to choose whether the more powerful creatures or the weaker creatures are affected first. He may also rule that creatures closest to the center of the spell's area of effect are affected first. The DM can choose any of these methods as long as he uses the same method all of the time.`,
                `If weaker creatures are affected first, the DM should roll to see how many of them are put to sleep and apply the effects. If all of the weaker creatures were put to sleep by the spell, and if the number of potential victims rolled was greater than the number actually affected, the DM may then take half of that difference (dropping fractions) and apply that to the next most powerful group of victims. For example, a magic-user faces a group of six 1—1-HD creatures, two 1-HD creatures, and one 3-HD creature. The DM rolls 4d4 and gets a 10. The six 1—1-HD creatures fall asleep, leaving a difference of 4. Half of 4 is two, so the two 1-HD creatures fall asleep, leaving the 3-HD creature unaffected., In another example, the magic-user faces four 1-HD creatures and one 4 + 1-HD creature. The DM rolls 2d4 and gets a 5. Four 1-HD creatures fall asleep; the difference is 1, but nothing remains after 1 is reduced by half and all fractions are dropped. Even if the result of the 2d4 roll had been an 8, the 4 + 1-HD creature would not be affected (8 - 4 = 4, 1⁄2 x 4 = 2, but no monsters were present in the 2 + 1 to 3-HD category). The PC should not have everything his own way!`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `How does an ***anti-magic shell*** work? Does it destroy any spell with which it comes in contact? Can the caster cast spells through the ***anti-magic shell***?`,
            answer: [
                `An ***anti-magic shell*** negates all magic within its area of effect. The caster's spells (which originate within the shell) are also negated, although they may remain after the shell's duration expires if their own durations are long enough. Note also that the shell causes magical items within its area of effect to cease functioning. In any case, the shell does not function like a ***dispel magic*** spell. Magical items are not destroyed by the shell; they merely cease to function while within it. If their duration permits, magical effects will still function when they are taken away from the shell or when the shell's duration expires. For example, a ***continual light*** spell cast upon a rock will be negated only as long as that rock is within the shell; the ***continual light*** spell functions normally afterward. If part of a magical effect's area extends into the shell, only the portion within the shell is negated; the effect functions normally outside the shell. However, if a spell with an instantaneous duration is cast so that its center is within the radius of the shell, the spell is *completely* negated. For example, if a ***fireball*** were cast so that it would detonate inside an ***anti-magic shell***, there would be no effect. If a ***fireball*** were cast so that it would detonate outside the ***shell***, however, only the portion of the ***fireball*** crossing into the shell would be negated.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Will a ***haste*** spell double the movement rate of a character with a ***fly*** spell or broom of flying? Will it double the movement rate of a character who is under the effect of a ***potion of speed***?`,
            answer: [
                `***Haste*** spells do not increase the movement rate of a ***fly*** spell or of a conveyance, such as a ***broom*** or ***carpet of flying***. ***Haste*** will double the speed of other creature-affecting magics such as a ***potion of speed*** or ***boots of speed***. Two or more ***haste*** spells are not cumulative. Remember that ***haste*** and ***potions of speed*** cause magical aging.`
            ],
            comment: 'The last part of this answer is intended for 1E. In the 2E Dungeon Master Option: High-Level Campaigns p. 72, ***haste*** is clarified to not work with magical items, such as ***boots of speed*** or ***potion of speed***',
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Isn't the seventh-level illusionist spell ***weird*** overpowered? A spell that is capable of producing Hades or Hastur is a bit unfair.`,
            answer: [
                `It is unlikely that Hades or Hastur will be conjured by a ***weird*** spell, as deities of this power are almost never the personal nemeses of mere mortals. (Of course, if the spell were cast at a deity-class creature, it might produce such opponents.) If the spell is cast against an orc, it's likely to produce a hobgoblin or a gnoll at most. It is up to the DM to adjudicate any use of this spell reasonably and fairly (see ***Unearthed Arcana***, page 71).`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Is there a chance that a ***magic missile*** will miss its target?`,
            answer: [
                `No; a ***magic missile*** always hit its target unless it is protected by certain magics (a ***shield*** spell or a ***brooch of shielding***, to name a few).`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '7+94',
            question: `Will a ***stoneskin*** spell protect a creature from the hailstones produced by an ***ice storm*** spell?`,
            answer: [
                `An ***ice storm*** will affect a creature protected by a ***stoneskin*** spell. Although the hailstones are projectiles of sorts, they are a magical attack just as are ***magic missiles***. An ***ice storm*** or other attack that damages the protected creature does not end the ***stoneskin*** spell, as the dweomer lasts until it foils a physical attack (see ***Unearthed Arcana*** page 57).`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `How can damage to a ***simulacrum*** be repaired? Will ***cure wounds***, ***raise dead***, or ***resurrection*** spells work? If a simulacrum is slain, does it return to a pile of snow?`,
            answer: [
                `The various ***cure wounds*** spells will not work on a ***simulacrum***; ***raise dead*** and ***resurrection*** will not work either, as the ***simulacrum*** was never alive. Whether or not a slain ***simulacrum*** crumbles into a pile of snow when killed is up to the DM—we recommend yes. Damage to a simulacrum might be repairable if the DM allows it. We suggest a new seventh-level spell for this purpose (or a recasting of the ***simulacrum*** spell strictly for purposes of repair) or perhaps a magical tome. The costs of repair should be from 300 to 500 gp per hit point in any case.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `Can a magic-user use ***magic jar*** to transfer his own essence into a ***simulacrum***?`,
            answer: [
                `Yes, but only after the ***simulacrum*** has been given a vital force with a ***resurrection*** spell. The attempt at ***magic jar*** is then resolved normally.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `Can a magic-user complete only the somatic component of a spell, leave the material component behind, then trigger the spell with ***magic mouth***?`,
            answer: [
                `No. All the components of any spell must be completed together; withholding or interrupting any of them ruins the spell. And, ***magic mouth*** cannot be used to cast any spell—not even a purely verbal one.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `Can two different spell-casters ***charm*** the same creature, or will the two spells cancel each other out?`,
            answer: [
                `There is no limit to the number of times that a creature can be ***charmed***. If multiple ***charms*** are cast upon the same creature, each caster will be able to influence the subject. The DM will have to decide what the creature will do in the face of conflicting instructions. It's likely that the ***charmed*** creature, being "best friends" with both casters, will try to reconcile any arguments between them.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `Can the recipient of the second-level magic-user spell ***invisibility*** see himself? Does an object dropped by the recipient become visible? Does an object picked up by the recipient become invisible? The book says that any attack will end the ***invisibility***; does this include the casting of any spell or just attack spells?`,
            answer: [
                `The recipient of an ***invisibility*** spell is invisible even to himself. Any equipment carried by a creature at the time the spell is cast becomes invisible with the creature. If the creature puts an item down, the item becomes visible, but if an invisible creature picks up a visible object, the object stays visible. Nondamaging spells will not make the recipient visible, but any action intended to harm another creature will.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL,ATTRIBUTE_INVISIBILITY],
        },
        {
            page_number: '94',
            question: `Is there a limit to the altitude attainable with a ***levitate*** spell?`,
            answer: [
                `The only limit is the spell's duration and 20'/round movement rate (or 10'/round if cast on another creature). Smart players will make sure that their PCs leave enough unused duration to get safely back to the ground.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `How many spells does a 1st-level magic-user have in his book? The ***DMG*** (page 39) says four, while the ***PHB*** (page 10) sets a minimum and maximum according to intelligence. When does the magic-user add spells to his book?`,
            answer: [
                `For a beginning character, ignore the minimum number of spells on Intelligence Table II in the PHB (page 10). A 1st-level magic-user has a book of four spells, as per the DMG, page 39. He does not roll his "chance to know" for these spells.`,
                `As the magic-user gains levels, he gains new spells as part of his training. It is best to simply give the magic-user a new spell for his book each time he gains the ability to cast an additional spell. For example, a 1st-level magic-user can cast one first-level spell. When the magic-user reaches 2nd level, he can cast two first-level spells, and he gains an additional first-level spell for his book. His intelligence still determines the maximum number of spells of each level he can have in his book, and his chance of successfully writing any given spell into his book.`,
                `The DM should select the new spell, and the magic-user must successfully make his "chance to know" roll in order to gain it. If the roll fails, the DM should assign an- other spell. To allow magic-user PCs more options when choosing spells, you might give each such PC an extra 2nd, 3rd, 4th, or 5th-level spell when the magic-user first gains the ability to cast it (this will occur at 3rd, 5th, 7th, and 9th level, respectively).`,
                `The magic-user can also try to add spells to his book when he finds them on scrolls or in captured spell books. The magic-user rolls his "chance to know" and, if successful, may add the spell to his book. The spell disappears from the scroll or book when the magic-user adds it to his book.`,
                `If, during the course of play, the magic-user has tried every spell of a given level but has fewer spells of that level than the minimum for his intelligence score, he can go back and try to learn one or more spells a second time.`,
                `For more information, see "Spelling It Out," in DRAGON issue #147.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '94',
            question: `Do spells end when their casters are killed?`,
            answer: [
                `This is up to the DM. There are two schools of thought here. One holds that a spell is a discrete, independent event involving a fixed amount of magical energy. Once the event begins, it runs like clockwork; only anti-magic in some form (***dispel magic***, ***anti-magic shell***, etc.) will keep it from running its full course. The other school holds that the caster must be alive to act as a channel for the energy the spell requires. No matter which school you follow, there will be some exceptions. For example, any spell requiring concentration from the caster will end if the caster dies. Spells that are permanent will remain after the caster dies.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '94',
            question: `Many AD&D game spells require the caster to touch the recipient. Once the spell is cast, how long does the caster have to deliver it? Is there a limit on how many touch attempts the caster can make?`,
            answer: [
                `Some campaigns allow a caster to hold a spell "on hands" indefinitely, provided that the caster does not attempt to cast another spell. The spell "on hands" is discharged when the caster next touches someone or something. Some DMs rule that the spell remains only as long as the caster concentrates on touching a recipient—the spell is lost if the caster abandons the touch at- tempt for any reason.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '94',
            question: `Page 40 of the DMG refers to "various chances for spell malfunction." What are these chances, and where can they be found?`,
            answer: [
                `There is no spell malfunction table, but the AD&D 1st Edition game is liberally peppered with spell malfunction chances. Saving throws can partially or completely negate a spell, low wisdom scores can affect clerical spell-casting, casting a spell from a scroll is not a sure thing if the caster's knowledge is incomplete, and magic resistance can play havoc with spells. Page 40 refers to these miscellaneous rules.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '94',
            question: `How often can a character go to sleep and then regain his spells? Does a character who goes to sleep retain any uncast spells?`,
            answer: [
                `A spell-caster can go to sleep at any time (after the proper study or prayer) and regain his spells, even if it isn't "bedtime." We suppose that insomnia could strike a character who sleeps too often, but this is up to the DM. Sleeping does not cause a spell-caster to forget his spells.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
    ]
})

module.exports = DRAGON_MAGAZINES;