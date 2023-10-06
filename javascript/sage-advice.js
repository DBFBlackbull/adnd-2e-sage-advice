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
const ATTRIBUTE_STONESKIN = "stoneskin";
const ATTRBUTE_DOT = "continuing damage"

const ATTRIBUTE_APRIL_FOOLS = 'april fools';

const SYNONYMS = [
    ['elf', 'elves'],
    ['dwarf', 'dwarves'],
    ['demihuman', 'demi-human'],
    ['multiclass', 'multi-class'],
    ['dualclass', 'dual-class'],
    ['player\'s handbook', 'players handbook', 'phb'],
    ['dungeon master\'s guide', 'dungeon master guide', 'dmg'],
    ['system shock', 'system-shock'],
    ['at-will', 'at will'],
    ['saving throw', 'saving-throw'],
    ['spellbook', 'spell book'],
    ['levitate', 'levitation', 'levitating'],
    ['magic-resistance', 'magic resistance', 'magic-resistant', 'magic resistant'],
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
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '10',
            question: `How do you determine how many square feet of ***faerie fire*** is required to cover a creature?`,
            answer: [
                `Just assume the caster can cover one man-size creature per level. Assume small creatures equal one-half a man, and large creatures equal one-and-a-half men.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '10',
            question: `Can halflings become clerics? Also, where are the advancement limits for demihuman characters?`,
            answer: [
                `Yes, halflings can become clerics. See the upcoming 2nd Edition ***Dungeon Master's Guide*** (page 15) for advancement limits for halfling clerics and other demihuman characters.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_RACE, ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `Can a thief character take the mountaineering proficiency and improve his climbing chance?`,
            answer: [
                `Yes, but the character's climbing chance cannot be made better than 95%.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `Are you supposed to multiply strength bonuses to damage in a successful backstab, as described on page 40, or are you supposed to add strength bonuses after the multiplier, as explained on page 104?`,
            answer: [
                `The text on page 104 is correct.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `What penalties does a bard suffer by using thief abilities when wearing normal chain mail?`,
            answer: [
                `Use the Elven Chain column in Table 29 but add another - 5% to the column's values.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `Are multiclassed bards allowed? The text on page 45 mentions multi-classed bards, but the chart on page 44 does not.`,
            answer: [
                `Page 44 is correct; page 45 is wrong.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `According to page 13, any warrior with a strength score of 16 or more gets a 10% bonus to experience. But later on, in the descriptions of the paladin and ranger, the rules say that members of these classes must have other high ability scores to get the bonus. Which is correct?`,
            answer: [
                `The text on page 13 is a misprint. Fighters get the 10% for a strength score of 16 or better; paladins and rangers must have additional high ability scores.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `What happened to the fighter's ability to double specialize with a weapon?`,
            answer: [
                `It has been dropped.`
            ],
            comment: `Reintroduced by Player's Option: Combat & Tactics`,
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `Can a fighter specialize with more than one weapon?`,
            answer: [
                `No, but he can "save" additional slots as he earns them and specialize with a weapon later in his career if he doesn't fill those slots at the start.`
            ],
            comment: `Added in The Complete Fighter's Handbook`,
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '10',
            question: `Do demihuman fighters get to roll for extraordinary strength?`,
            answer: [
                `Yes; all warrior characters are entitled to exceptional strength rolls if they have strength scores of 18.`
            ],
            comment: `Halflings to not roll for exceptional strength. Corrected in Sage Advice #156 p. 57`,
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '10+12',
            question: `Does armor interfere with the new ranger's ***animal empathy*** ability? What is that ability's range? Why don't druids have this ability?`,
            answer: [
                `A ranger can wear any type of armor and still use ***animal empathy***. The ranger must be close enough to the animal to attract the animals undivided attention (about 10 yards in a wilderness setting less, if the setting is something like a crowded marketplace that provides distractions). Individual DMs may give druids ***animal empathy*** if they wish. The rules don't give the druid this ability because a druids focus is on nature as a whole, not just on animals.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `Isn't the new ranger too limited in spells? Can a ranger pick more than one type of creature for an enemy?`,
            answer: [
                `The ranger's two spheres give him plenty of spells. However, individual DMs might want to add a sphere or two; one campaign I am familiar with allows rangers to use healing spells. The DM has to decide what constitutes a valid enemy. Since the rules mention giants, it is probably acceptable to choose a class of creatures. Thus, a ranger from the FORGOTTEN REALMS™ setting might be allowed to choose the goblin races (see ***Cyclopedia of the Realms***, page 46) as an enemy. A ranger can never choose two or more entirely different creatures as enemies.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `Can rangers wear elven chain mail and still use the special abilities described on page 28?`,
            answer: [
                `Elven chain mail interferes with a ranger's special abilities; refer to Table 29 (page 39) for a list of penalties. Elven chain mail also negates the ranger's ability to use two weapons without penalty.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `Does the ranger's + 4 attack bonus vs. a specific type of adversary apply to both attack and damage rolls?`,
            answer: [
                `The bonus applies only to attack rolls; see page 29.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `Can paladins become dual-classed characters?`,
            answer: [
                `As clearly stated on page 44, there are no restrictions on the class combinations allowed to dual-classed characters, provided that alignment restrictions are respected. Most DMs, however, do not allow characters to combine subclasses (e.g., no bard/thieves, paladin/rangers, etc.).`
            ],
            comment: `Revised Player's Handbook (black book) made it a hard rule that you cannot dual/multi-class in the same group. The Complete Bard's Handbook reintroduced it for bard multi-classes.`,
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `With the large increase in the number of wizard spells, why wasn't there an increase in the minimum and maximum number of spells a wizard can learn? A wizard with an 18 intelligence can learn a maximum of 18 spells a level; that's less than half the number of first-level spells!`,
            answer: [
                `The AD&D® game is one of choices. The additional spells are intended to create a greater variety of mage characters, not more powerful mages.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `Table 22 (page 31) shows the minimum ability scores required for specialist wizards. What is the minimum intelligence score required for a specialist wizard?`,
            answer: [
                `Specialist wizards must have an intelligence score of at least 9, just like a normal wizard.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `What happened to the write spell?`,
            answer: [
                `It isn't needed anymore. The primary function of the write spell was to allow a mage to add a spell to his books after he had failed his chance to know roll for that spell. In the 2nd Edition game, a mage can attempt a new chance to know roll each time he gains a new level. (See "Spelling It Out," in DRAGON® issue #147, for more information.)`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `What is the material component for the ***spectral hand*** spell?`,
            answer: [
                `There is none. The "M" in the components' line is a typographical error.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `Does casting the first version of a ***flame arrow*** spell break invisibility?`,
            answer: [
                `No, because this is not an attack.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `Does the ***delayed blast fireball*** spell have a damage limit?`,
            answer: [
                `Yes. The limit is l0d6 + 10 hp damage.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `Several spells are missing from Appendix 5.`,
            answer: [
                `Here are the schools for the omitted spells (at least the ones I know about): ***irritation deafness***, ***fabricate*** and ***slow*** are alteration spells (***fabricate*** is also an enchantment); ***Melf's minute meteors***, evocation and alteration; ***locate object*** and ***know alignment***, divination; ***geas***, enchantment/charm.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `In Table 22 (page 31), the races allowed entry for diviners is any. Does this mean that a character of any PC race can be a diviner?`,
            answer: [
                `No. Only races eligible for the mage class (humans, elves, and half elves) can become diviners.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `What happened to cantrips?`,
            answer: [
                `Cantrips are still in the game. Just use the first-level ***cantrip*** spell. If you need help figuring out what kind of cantrips to cast, use your copy of ***Unearthed Arcana*** as a guide. Actually, things are better now for cantrip-using mages because they no longer need to waste spell book space on cantrips, and they are no longer limited to the few cantrips in their books.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `Since mages start the game with the ability to read spell books and to write in them, do they also have the ability to read and write their native languages?`,
            answer: [
                `No. Magic is written in a special language.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '12',
            question: `The new rules mention the possibility of ***fireballs*** detonating early and ***lightning bolts*** rebounding because of hitting an obstruction. My group and I thought these spells always hit, just as a ***magic missile*** spell does. If these spell do not always hit, how does the mage hit his opponent?`,
            answer: [
                `The spells do always hit, after a fashion. In the case of a ***fireball***, the missile bursts at the designated range unless it strikes an object before it gets there. Since the missile flies in a straight line between the caster and the target, it can be blocked by invisible barriers (such as ***walls of force***) or by a bend in a passage obscured by an illusion or mirror.`,
                `A ***lightning bolt*** is similar to a ***fireball*** in that the spell begins at a designated height and range, extending directly away from the caster. A ***lightning bolt*** is always either 40' or 80' long, and the caster must decide which when he casts the spell. If caster miscalculates and casts this spell into an area too small to contain it, the lightning bolt grows to its full length (as measured from the point where it strikes a barrier), heading back at the caster unless it smashes through the barrier (see page 151). Some readers have misread the example on page 151; ***lightning bolts*** do not bend or fold over when hitting a barrier. The 80' bolt in the example starts 40' away from the caster, travels 10', and strikes a barrier; the bolt must maintain its full length, however, so the opposite end of the bolt (starting from the point of origin) instantly grows out in the direction toward the spell-caster, extending 70' from its point of origin. Thus, the bolt's final length is SO'. A victim caught between the point of origin and the wall behind him is not struck twice by the bolt. The use of the word rebound in the spell's description seems to be the confusing element.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '12',
            question: `The text under the new ***identify*** spell says a fully charged ***ring of three wishes*** radiates only faint magic. Is this an error?`,
            answer: [
                `There is no error in the spell's description, but you have made an erroneous statement. The ***identify*** spell does not detect magic or its strength; it reveals an item's functions and charges. A ***ring of three wishes*** has only three charges, so it is faintly charged. Smart wizards use a ***detect magic*** spell, which can determine magical strength and type, before casting ***identify***.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
    ],
});
DRAGON_MAGAZINES.push({
    issue_number: '149',
    publication_year: '1989',
    publication_month: 'September',
    foreword: `We present part two of our special edition of "Sage Advice" (continued from DRAGON issue #148), with an in-depth look at the AD&D® 2nd Edition ***Player's Handbook***. All page numbers herein refer to the 2nd Edition text alone, unless otherwise stated.`,
    sage_advice: [
        {
            page_number: '10',
            question: `Does a character need to spend two proficiencies in bastard sword use—one for one-handed use and one for two-handed use?`,
            answer: [
                `This is up to the DM, but I suggest that two slots be required. One campaign I am familiar with allows characters with long sword or two-handed sword proficiency to use the bastard sword in its corresponding mode (in other words, a character who can use a long sword can use a bastard sword one-handed without penalty).`
            ],
            comment: `The Complete Fighter's Handbook suggest indicates that only 1 proficiency slot is needed`,
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `How can a sling bullet do the same damage as a heavy crossbow and more damage than a light or hand crossbow? Why would anyone bother with a crossbow when a sling has a better rate of fire, the same or better damage, a lower cost, and a lower weight?`,
            answer: [
                `Slings are very effective weapons and are often underrated. The bullets are heavy, have excellent aerodynamic qualities, and are hurled with a great deal of force. Why doesn't everybody use a sling? Well, try to swing a sling underwater, while hiding in dense undergrowth, or from around a corner. Also, bow and crossbow specialists get a point-blank range category and the ability to fire before the initiative roll in some cases.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `The new rules (on page 106) say a character must make a system shock roll to be raised from the dead. If so, what are resurrection survival scores used for?`,
            answer: [
                `This is a typographical error. System shock rolls are made when characters are exposed to magical aging, polymorphing, or petrification. Resurrection survival rolls are used when bringing slain characters to life again.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `How much does a wooden staff cost?`,
            answer: [
                `Any character can cut and trim his own staff. Prepared staves cost 1 sp each.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `Can characters use missile weapons when fighting toe-to-toe with an opponent?`,
            answer: [
                `Characters cannot aim and fire bows, use slings, or hurl hand-held weapons while in melee. Loaded and cocked crossbows can be fired in melee but cannot be reloaded. Since light and heavy crossbows are too large to be very handy, the DM might rule that they can be fired only when the user has initiative.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `How much damage does an arrow fired from a short bow do? Can flight or sheaf arrows be fired from short bows?`,
            answer: [
                `Short bow arrows do 1-6 hp damage to targets of all sizes. No matter what sort of arrow is fired from a short bow, it does damage as a flight arrow (1d6/1d6).`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `The charging rules say that a spear set vs. a charge does double damage, but this in not mentioned in the equipment list.`,
            answer: [
                `Any weapon that can be set vs. a charge does double damage when so employed.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10',
            question: `Can a character attack while with- drawing?`,
            answer: [
                `This is up to the DM, but I suggest not. If you do allow fighting withdrawals, the character making the withdrawal should get an attack only if there is an opponent following him. Even then, the character should attack last and with a -2 penalty to his attack roll.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '10+12',
            question: `The rules mention nets, lassos, and mauls as possible weapons for clerics (page 34), but these weapons do not appear in the weapons charts (pages 68-69).`,
            answer: [
                `A maul is a warhammer; see the Weapons Table on pages 68-69. Lassos and nets are not part of the 2nd Edition game and were mentioned in error. However, a typical war net is made from woven hemp cords and has small lead weights sewn into the edges. It is 5' across, weighs 6 lbs., and costs 12 sp. It takes two hands and 6' of clear space to throw a net, and the effective range is 30'. Any target hit by the net must save vs. breath weapon or become entangled. Entangled victims cannot fight or move, and defend at -2. Entangled victims wriggle free if they make a successful wrestling attack vs. AC 2; they can make one attempt to get free each round. When used as a melee weapon, treat a net as a scourge. A lasso is simply a rope with an adjustable loop. A successful hit with a lasso puts the loop around part of the target creature's body, but this does not necessarily immobilize the creature; the DM has to decide where the loop is (around the neck, a limb, the upper body, etc.) and assess the appropriate penalty. Since the lasso's wielder can pull the loop tight, the only way to escape, short of killing the wielder or getting the rope away from him, is to cut or break the rope.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `A broad sword is mentioned as a thief's weapon (page 38), but the broad sword is not described.`,
            answer: [
                `Use these statistics for that weapon: cost 10 gp; weight 4 lbs.; size M; type S; speed factor 5; damage 2d4 (S-M)/1d6 + 1 (L).`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `What is the rate of fire for a high-level fighter using an arquebus?`,
            answer: [
                `The rate of fire for any missile weapon stays the same for all users regardless of level, except for specialized users (see Table 35, page 52).`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `How can a character become proficient with an arquebus? Wouldn't this require a large or even unlimited supply of powder and shot? If the character chooses to specialize, what would the rate of fire be?`,
            answer: [
                `This is up to the DM, but your suggestion regarding gunpowder supplies sounds reasonable because the character would have to practice with the weapon. Arquebus specialists rates of fire are: 1st-6th level, 1/3; 7th-12th level, 1⁄2; 13th level and up, 1/1.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `Can a fighter attack with a long sword in each hand?`,
            answer: [
                `No; two-weapon attacks are limited to one medium and one small weapon, or to two small weapons.`
            ],
            comment: `This was added in The Complete Fighter's Handbook with Two-weapon style specialization.`,
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `Can a fighter who is specialized with two weapons use them both at the same time and get the damage bonus and multiple attacks for each hand? Does a fighter get a strength bonus for each hand?`,
            answer: [
                `Fighters can specialize with only one weapon. Any character attacking with two weapons gets one—and only one—extra attack per round; the character gets the full number of attacks for the primary weapon and one attack from the secondary weapon. The DM can allow strength bonuses for each hand, but I do not recommend it. Limit strength bonuses to one weapon or the other, or allow the character to split the bonus between weapons.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `How large are light crossbow quarrels and short swords?`,
            answer: [
                `Light quarrels and short swords are small weapons. To preserve game balance, you might want to disallow the use of short swords as secondary weapons in two-handed attacks.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `What happened to weapons' space requirements?`,
            answer: [
                `Space required for melee weapons can be inferred from their sizes and types. Bludgeoning or slashing weapons generally require as much clear space for use as their lengths. Piercing weapons and most missile weapons generally require 1' of clear space.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
        },
        {
            page_number: '12',
            question: `Why can't blunt melee weapons be used in nonlethal combat? It seems to me that a weapon like a mace would be better for knocking out a creature than a sword would be.`,
            answer: [
                `As explained on page 98, a mace has no "flat" side that can be used at less than full effect. Still, since using a weapon in nonlethal combat carries a -4 attack roll penalty, you could assume that the mace wielder could "pull the blow" and inflict reduced, temporary damage.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_WEAPON],
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
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
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
            comment: `Dwarves are suggested to be considered man-sized when handling weapons, i.e. a dwarf can carry a M-sized weapon in 1 hand. This is suggested in Sage Advice #174`,
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
                `Weapon speed factors allow for comparison among weapons. The lower the speed factor, the quicker the weapon. Their most common use (and the only use mentioned in the rules) is for breaking ties on initiative. When a tie occurs, compare weapon speed factors; the lowest factor goes first. However, on the first round of a melee, when the opponents are closing, the longer weapons have the advantage. The advantage is also with mounted opponents attacking or defending against unmounted opponents and with characters who are defending or attacking from above. Spellcasting time is equivalent to the weapon speed factor. That is, a weapon with a speed factor of 3 is as slow as a three-segment spell for purposes of tie breaking.`
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
                `The method described on page 25 is the same as the method described in the 1st Edition ***Players Handbook***, so there is no harm in using the ***Oriental Adventures*** explanation in non-Oriental campaigns based on the 1st Edition books. However, the 2nd Edition ***Player's Handbook*** does not allow a chance-to-learn check for a spell until it is found (see page 16 of that volume).`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_2E],
        },
        {
            page_number: '8-9',
            question: `How do Oriental characters gain levels? Do they have to train? When do wu jen get new spells?`,
            answer: [
                `Oriental characters gain levels by accumulating experience and training. They must pay training costs (see page 86 of the 1st Edition ***DMG*** or page 49 of the 2nd Edition ***DMG***). Wu jen should gain new spells whenever they gain the ability to cast them and have access to such spells. For example, at 3rd level, a wu jen gains the ability to cast a second-level spell; he can do so if he finds a written copy of such a spell, learns it from someone else, or researches it himself *and* makes his chance-to-know roll (see page 25).`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_2E],
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
                `The lengths of a turn, a melee round, and a segment are the same as in non-Oriental adventures; see the 1st Edition *Players Handbook* (page 31) or the 2nd Edition *Player's Handbook* (page 91; note that segments are not used in the AD&D 2nd Edition rules).`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_2E],
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
                `The rules are the same as those for non- Oriental characters; see the 1st Edition ***DMG*** (page 70) or the 2nd Edition *Player's Handbook* (page 96). Any Oriental weapon that is the equivalent of a dagger or hand axe can be used as a second weapon (see *Oriental Adventures*, table 48, page 41). A kensai's second weapon must be a dagger or hand axe (or an equivalent).`
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
    foreword: `The sage makes another tour of the AD&D® 2nd Edition game, focusing on the new ***Player's Handbook (PHB)*** and ***Dungeon Master's Guide (DMG)***.`,
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
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_INVISIBILITY],
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
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
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
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
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
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
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
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
    ],
});
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
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '6',
            question: `What does a ***bless*** spell do, and how is it different from the ***chant*** and ***prayer*** spells? Also, are the ***chant*** spell's damage bonuses and penalties counted per attack or per die of damage? Do the areas of effect of these spells move with their casters?`,
            answer: [
                `Here's what each spell does: A ***bless*** gives friendly creatures +1 on morale "to hit" rolls; if reversed (as a ***curse***), it gives enemies a -1 on those rolls. A ***chant*** spell gives friendly creatures +1 on "to hit," damage, and saving-throw rolls; at the same time, enemies receive a -1 on the same rolls. A ***prayer*** spell gives friendly creatures +1 on "to hit" and saving-throw rolls, and enemies -1 on the same rolls. ***Prayer*** does not affect damage, and neither ***prayer*** nor ***chant*** affect morale. The areas of effect for each spell are fixed and do not move with their casters. ***Bless*** affects creatures in its area of effect at the time of casting only; ***chant*** and ***prayer*** affect all creatures in the area of effect, even those who enter after the spells are completed. Damage modifiers from ***chant*** are per attack, not per die of damage.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '6',
            question: `The duration of a ***bless*** spell is given as "6 melee rounds." Does this mean that the bless spell lasts for six total rounds of melee, possibly with days between?`,
            answer: [
                `No. The duration of a ***bless*** spell is six consecutive rounds from when it is cast.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
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
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '6',
            question: `How do blindness (such as from ***cause blindness***) and deafness each affect spell-casting?`,
            answer: [
                `Blinded creatures are unable to cast any spell that requires a visible target (such as ***magic missile***). Spells that can be cast on an area (such as ***fireball***) or delivered by touch (such as ***cure light wounds***) are still usable.`,
                `Deafness can cause spells with verbal components to be miscast and fail. The failure chance is up to the DM, but it shouldn't exceed 20% (less for spells with short casting times). A 2% cumulative failure chance per segment of spell-casting is suggested. The spell ***holy word*** has a deafening effect that causes spells to fail 50% of the time. This is due mostly to the extreme power of the ***holy word***, not merely the condition of deafness.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL, ATTRIBUTE_BLINDNESS, ATTRIBUTE_DEAFNESS],
        },
        {
            page_number: '7',
            question: `Can a ***command*** be combined with an attempt to turn undead?`,
            answer: [
                `***Command*** is a spell; the cleric may not fire missiles, engage in melee, or turn undead in the same round as he casts a spell.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Is there a period of disability for characters revived with a death's door spell?`,
            answer: [
                `Death's door doesn't revive characters; it maintains characters at zero hit points until the spell wears off or until the character is revived with a cure wounds spell. Characters revived in this manner can resume activity immediately.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can a ***glyph of warding*** be cast upon a portable object such as a sword or sling bullet and used offensively?`,
            answer: [
                `No. A ***glyph*** is a magical ward used to protect an object. A glyph can be cast upon a weapon, but it will be triggered only when a creature touches the weapon, not when the weapon strikes a creature.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Are creatures affected by one of the ***hold*** spells held immobile or simply paralyzed?`,
            answer: [
                `***Hold*** spells are similar to paralysis except that the effect is mental, not physical. A ***held*** creature cannot move, fight, or communicate in any way. The creature can, however, be moved by others.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can a ***light*** or ***continual light*** spell be used to negate the darkness ability of a demon or devil?`,
            answer: [
                `Yes, on all counts. Each of these spells can negate darkness of any sort, though a ***light*** spell will "go out" immediately after negating such darkness, while the ***continual light*** spell will last. ***Light*** or ***continual light*** spell will negate only one darkness effect at a time; thus, if there are two darkness effects in the same area, the area remains dark until two light effects are used.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `The spells' areas of effect listed in the ***Players Handbook*** have got to be incorrect. The ***lower water*** spell, for example, has an area of effect of a 1" × 1" square per level of the caster. Surely a cleric can affect more water than one square inch.`,
            answer: [
                `The area is measured in scale inches. One *scale* inch equals 10', and one scale square inch equals 100 square feet. Remember that the areas of spell effects never get larger outdoors, although ranges do get larger (see page 39 in the ***Players Handbook***).`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Does the circle of protection from a ***protection from evil, 10' radius*** spell move with the caster?`,
            answer: [
                `Yes, both versions of the ***protection from evil*** spell move with the caster.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `If a character is killed and receives a ***raise dead*** spell, how long must he rest and how many hit points will he have?`,
            answer: [
                `*Raised* characters must rest for the amount of time they have been dead. The minimum rest period is one day. *Raised* characters have from 3-17 hp (2d8 + 1), though this value is reduced if the PC's maximum number of hit points is less than the value rolled.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `What are the statistics for rocks animated with the spell ***animate rock***? Would they be similar to the boulders animated by the galeb duhr in the ***Monster Manual II***?`,
            answer: [
                `A 24-cubic-foot boulder has the following statistics: AC 0; MV 3"; HD 10; #AT 1; Dmg 5-30. The spell's effect is slightly better than the galeb duhr's ability. A statue of the same size with a human shape would have the same armor class and hit dice, but would move at 9" on its legs and strike twice per round for 2-16 hp damage per blow. Neither of the above "rocks" is as good offensively as the elemental a druid could get with a ***conjure earth elemental*** spell at the same level, but the animated rocks are not balked by water nor dismissed by a ***holy word*** spell.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can ***call lightning*** be used against submerged creatures?`,
            answer: [
                `The bolt from a ***call lightning*** spell ends at the water's surface, but its 1" radius of effect extends below the surface and has its full effect on any submerged creature therein.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `What are the effects of the disabilities inflicted upon appendages by the ***heat metal*** and ***chill metal*** spells?`,
            answer: [
                `I recommend that you drop the disability effects of the ***heat metal*** spell and its reverse. The damage inflicted alone is sufficient for a 2nd-level spell.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can a ***wall of fire*** be formed into a circle around a target so that the hot side faces in toward the target?`,
            answer: [
                `Yes, it can.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
    ]
});
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
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '6',
            question: `How do you handle the effects of a ***stinking cloud*** spell? How can any creature move out of the cloud if it is rendered helpless?`,
            answer: [
                `A successful save vs. poison indicates that the creature moves out of the cloud immediately and is helpless for a full round afterward. A failed save indicates that the creature is helpless for 2-5 rounds before leaving the cloud, remaining helpless for one round after it emerges.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '6',
            question: `Can a creature's throat or mouth be sealed with a ***hold portal*** or ***wizard lock*** spell?`,
            answer: [
                `No. A closure to be sealed by a ***hold portal*** or ***wizard lock*** spell must be of wood, metal, or stone.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '6-7',
            question: `Does the caster of a ***dispel magic*** spell have to check to see if his own spells are ***dispelled***? Will a minor ***globe of invulnerability*** prevent a ***dispel magic*** spell from working?`,
            answer: [
                `A ***dispel magic*** spell automatically works on the caster's own spells; a die roll is required to determine its success on all other magics. The two ***globe of invulnerability*** spells can be dispelled; note also that they are visible. If any ***globe of invulnerability*** is dispelled, then all other magical effects in the ***dispel magic*** spell's area of effect are subject to its effects. If a ***globe of invulnerability*** is not dispelled, it protects all magic effects within its area of effect. There are some spells that cannot be dispelled; ***anti-magic shell*** and ***wall of force*** are two examples.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `I don't understand what the area of the first-level illusionist spell ***phantasmal force*** should he.`,
            answer: [
                `The base area for a ***phantasmal force*** spell is four (scale) square inches, meaning 10' × 40' (400 square feet) or any set of dimensions not exceeding 400 square feet. The area increases by one (scale) square inch (100 square feet) per level.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `What is the area of a ***cone of cold*** spell?`,
            answer: [
                `The cone is ½" wide at its origin, 2" wide at its terminus, and ½" long per level of the caster. As noted in the previous question, these are scale inches, such that 1" = 10'. Thus, the cone is 5' wide at its origin, 20' wide at its terminus, and 5' long per level of its caster.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can ***unseen servants*** fly? How fast do they move?`,
            answer: [
                `***Unseen servants*** may move in all three dimensions at a rate of 12") subject to the spell's 3" radius. Thus a ***servant*** can move along with its caster at normal walking speeds.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Can a spell-caster still cast spells if he is ***polymorphed*** or ***reincarnated***?`,
            answer: [
                `Yes, probably. ***Polymorph self*** allows spell-casting if the new form has prehensile digits and is capable of speech. Note, however, that all equipment carried ***polymorphs*** with the caster, so spell components won't always be available. If a ***polymorph other*** spell was used, the victim might "lose" his components as above, and he will lose all memories and abilities if he assumes the mentality of his new form. What happens when a character is ***reincarnated*** is up to the DM. Generally, the character can still use his professional skills if his new form will physically allow it, although further advancement is not always possible.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `When a ***Mordenkainen's disjunction*** spell is cast, how do you determine the effects on magical items? Will an ***anti-magic shell*** or ***wall of force*** keep the effects of the ***disjunction*** out? What if only part of a spell's area of effect overlaps the area of the ***disjunction***?`,
            answer: [
                `Items in the possession of the spellcaster are immune to the spell's effects. Items in the possession of other creatures gain their possessors' saving throws vs. spells, with all adjustments. Items that are by themselves can be ***disjoined*** using the ***dispel magic*** spell's system (comparing the caster's level vs. the level at which the magical item was created). Potions and scrolls are treated as if created by 8th-level magic-users; permanent magical items are treated as if created by 12th-level magic-users.`,
                `If any portion of a spell's area of effect overlaps the area of the ***disjunction***, the entire spell is ***disjoined***. A ***wall of force*** can be so ***disjoined***, and it will have no effect on the ***disjunction*** spell. Treat the chance for ***disjoining*** an ***anti-magic shell*** as that for an artifact, but with no chance for attracting the attention of a powerful being (see ***Unearthed Arcana***, page 65). If an ***anti-magic shell*** is unaffected, it protects all magic within its area; if the ***anti-magic shell*** is ***disjoined***, all magical spells, effects, and items within the area of the ***disjunction*** are subject to its effects.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `How do you determine the effect of a ***sleep*** spell on a group of mixed creature types?`,
            answer: [
                `This is up to the DM. He may rule that weaker creatures are affected first, or he may allow the caster to choose whether the more powerful creatures or the weaker creatures are affected first. He may also rule that creatures closest to the center of the spell's area of effect are affected first. The DM can choose any of these methods as long as he uses the same method all of the time.`,
                `If weaker creatures are affected first, the DM should roll to see how many of them are put to sleep and apply the effects. If all of the weaker creatures were put to sleep by the spell, and if the number of potential victims rolled was greater than the number actually affected, the DM may then take half of that difference (dropping fractions) and apply that to the next most powerful group of victims. For example, a magic-user faces a group of six 1—1-HD creatures, two 1-HD creatures, and one 3-HD creature. The DM rolls 4d4 and gets a 10. The six 1—1-HD creatures fall asleep, leaving a difference of 4. Half of 4 is two, so the two 1-HD creatures fall asleep, leaving the 3-HD creature unaffected., In another example, the magic-user faces four 1-HD creatures and one 4 + 1-HD creature. The DM rolls 2d4 and gets a 5. Four 1-HD creatures fall asleep; the difference is 1, but nothing remains after 1 is reduced by half and all fractions are dropped. Even if the result of the 2d4 roll had been an 8, the 4 + 1-HD creature would not be affected (8 - 4 = 4, 1⁄2 x 4 = 2, but no monsters were present in the 2 + 1 to 3-HD category). The PC should not have everything his own way!`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `How does an ***anti-magic shell*** work? Does it destroy any spell with which it comes in contact? Can the caster cast spells through the ***anti-magic shell***?`,
            answer: [
                `An ***anti-magic shell*** negates all magic within its area of effect. The caster's spells (which originate within the shell) are also negated, although they may remain after the shell's duration expires if their own durations are long enough. Note also that the shell causes magical items within its area of effect to cease functioning. In any case, the shell does not function like a ***dispel magic*** spell. Magical items are not destroyed by the shell; they merely cease to function while within it. If their duration permits, magical effects will still function when they are taken away from the shell or when the shell's duration expires. For example, a ***continual light*** spell cast upon a rock will be negated only as long as that rock is within the shell; the ***continual light*** spell functions normally afterward. If part of a magical effect's area extends into the shell, only the portion within the shell is negated; the effect functions normally outside the shell. However, if a spell with an instantaneous duration is cast so that its center is within the radius of the shell, the spell is *completely* negated. For example, if a ***fireball*** were cast so that it would detonate inside an ***anti-magic shell***, there would be no effect. If a ***fireball*** were cast so that it would detonate outside the ***shell***, however, only the portion of the ***fireball*** crossing into the shell would be negated.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Will a ***haste*** spell double the movement rate of a character with a ***fly*** spell or ***broom of flying***? Will it double the movement rate of a character who is under the effect of a ***potion of speed***?`,
            answer: [
                `***Haste*** spells do not increase the movement rate of a ***fly*** spell or of a conveyance, such as a ***broom*** or ***carpet of flying***. ***Haste*** will double the speed of other creature-affecting magics such as a ***potion of speed*** or ***boots of speed***. Two or more ***haste*** spells are not cumulative. Remember that ***haste*** and ***potions of speed*** cause magical aging.`
            ],
            comment: 'The last part of this answer is intended for 1E. In the 2E Dungeon Master Option: High-Level Campaigns p. 72, ***haste*** is clarified to not work with magical items, such as ***boots of speed*** or ***potion of speed***',
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Isn't the seventh-level illusionist spell ***weird*** overpowered? A spell that is capable of producing Hades or Hastur is a bit unfair.`,
            answer: [
                `It is unlikely that Hades or Hastur will be conjured by a ***weird*** spell, as deities of this power are almost never the personal nemeses of mere mortals. (Of course, if the spell were cast at a deity-class creature, it might produce such opponents.) If the spell is cast against an orc, it's likely to produce a hobgoblin or a gnoll at most. It is up to the DM to adjudicate any use of this spell reasonably and fairly (see ***Unearthed Arcana***, page 71).`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7',
            question: `Is there a chance that a ***magic missile*** will miss its target?`,
            answer: [
                `No; a ***magic missile*** always hit its target unless it is protected by certain magics (a ***shield*** spell or a ***brooch of shielding***, to name a few).`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '7+94',
            question: `Will a ***stoneskin*** spell protect a creature from the hailstones produced by an ***ice storm*** spell?`,
            answer: [
                `An ***ice storm*** will affect a creature protected by a ***stoneskin*** spell. Although the hailstones are projectiles of sorts, they are a magical attack just as are ***magic missiles***. An ***ice storm*** or other attack that damages the protected creature does not end the ***stoneskin*** spell, as the dweomer lasts until it foils a physical attack (see ***Unearthed Arcana*** page 57).`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `How can damage to a ***simulacrum*** be repaired? Will ***cure wounds***, ***raise dead***, or ***resurrection*** spells work? If a simulacrum is slain, does it return to a pile of snow?`,
            answer: [
                `The various ***cure wounds*** spells will not work on a ***simulacrum***; ***raise dead*** and ***resurrection*** will not work either, as the ***simulacrum*** was never alive. Whether or not a slain ***simulacrum*** crumbles into a pile of snow when killed is up to the DM—we recommend yes. Damage to a simulacrum might be repairable if the DM allows it. We suggest a new seventh-level spell for this purpose (or a recasting of the ***simulacrum*** spell strictly for purposes of repair) or perhaps a magical tome. The costs of repair should be from 300 to 500 gp per hit point in any case.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `Can a magic-user use ***magic jar*** to transfer his own essence into a ***simulacrum***?`,
            answer: [
                `Yes, but only after the ***simulacrum*** has been given a vital force with a ***resurrection*** spell. The attempt at ***magic jar*** is then resolved normally.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `Can a magic-user complete only the somatic component of a spell, leave the material component behind, then trigger the spell with ***magic mouth***?`,
            answer: [
                `No. All the components of any spell must be completed together; withholding or interrupting any of them ruins the spell. And, ***magic mouth*** cannot be used to cast any spell—not even a purely verbal one.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `Can two different spell-casters ***charm*** the same creature, or will the two spells cancel each other out?`,
            answer: [
                `There is no limit to the number of times that a creature can be ***charmed***. If multiple ***charms*** are cast upon the same creature, each caster will be able to influence the subject. The DM will have to decide what the creature will do in the face of conflicting instructions. It's likely that the ***charmed*** creature, being "best friends" with both casters, will try to reconcile any arguments between them.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `Can the recipient of the second-level magic-user spell ***invisibility*** see himself? Does an object dropped by the recipient become visible? Does an object picked up by the recipient become invisible? The book says that any attack will end the ***invisibility***; does this include the casting of any spell or just attack spells?`,
            answer: [
                `The recipient of an ***invisibility*** spell is invisible even to himself. Any equipment carried by a creature at the time the spell is cast becomes invisible with the creature. If the creature puts an item down, the item becomes visible, but if an invisible creature picks up a visible object, the object stays visible. Nondamaging spells will not make the recipient visible, but any action intended to harm another creature will.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL, ATTRIBUTE_INVISIBILITY],
        },
        {
            page_number: '94',
            question: `Is there a limit to the altitude attainable with a ***levitate*** spell?`,
            answer: [
                `The only limit is the spell's duration and 20'/round movement rate (or 10'/round if cast on another creature). Smart players will make sure that their PCs leave enough unused duration to get safely back to the ground.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_SPELL],
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
});
DRAGON_MAGAZINES.push({
    issue_number: '155',
    publication_year: '1990',
    publication_month: 'March',
    foreword: `This month, "Sage Advice" looks at what ails the denizens of the AD&D® 2nd Edition Monstrous Compendium, then offers more advice on the AD&D 2nd (and 1st) Edition rules.`,
    sage_advice: [
        {
            page_number: '6',
            question: `After purchasing the first two volumes of the ***Monstrous Compendium***, I cannot help but have the sneaking suspicion that devils and demons are not going to appear in any of the new monster tomes. I, for one, would be disappointed if these most villainous of villains are to be excluded from the AD&D game. In short, are devils and demons going to appear in any AD&D 2nd Edition reference books, or has society reared its ugly head once more to thwart creativity and enjoyment?`,
            answer: [
                `The answer, in short, is at present there are no plans to include devils, demons, and similar creatures in the AD&D 2nd Edition game. Society has not reared its "ugly head." In fact, society is the source of creativity and enjoyment—gamers, game producers, and game columnists are part of society. Society as a whole is not down on gamers; some people I know who make it a hobby to study the anti-role-playing movement tell me the whole brouhaha is the work of less than a dozen people, most of them in the United States, who were well known for their questionable religious dogmas long before the D&D® and AD&D games came on the scene. No major religious sect or denomination officially opposes the D&D game or any other role-playing game. These few individuals have been able to fool a lot of people into believing their propaganda by pointing to a few items in the old AD&D game books and saying, "This is a satanic game." The unsuspecting public, being uninformed about role-playing and disinclined to actually read the books themselves, started buying this vituperation.`,
                `The demons and devils in the old ***Monster Manuals*** were a prime weapon in the campaign of misinformation directed against gaming, so they were dropped from the new edition. It's possible that demons and devils will be revised into a format that preserves their usefulness in adventure design and does not give the game's detractors cheap ammunition, but that format hasn't been found yet. In the meantime, the revamped dragons and giants—which have been given a tremendous boost in the ***Monstrous Compendium***—should do a nice job of filling the role of ultimate adversary.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '6',
            question: `Do monster shamans who cast clerical spells get bonus spells for high wisdom? How does one calculate a monster's wisdom score?`,
            answer: [
                `This answer is up to the DM, but only true clerics should get bonus spells. For example, creatures such as dragons that have the ability to cast clerical spells do not receive bonus spells due to high wisdom because they are not members of the cleric class. Generally, a creature's wisdom score falls into the same range as its intelligence score; see the introductory section of the ***Monstrous Compendium, Volume I***.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '6+86',
            question: `May I have permission to photocopy the sheets in my ***Monstrous Compendium, volume I***, because they are badly misdrilled? Also, aren't there supposed to be two different pages in the vampire's description?`,
            answer: [
                `You can photocopy TSR's game products if you are doing it for your own use and not for sale. You can also get a replacement booklet by returning the misdrilled copy and requesting a new one. Send it to: The Mail Order Hobby Shop, c/o TSR, Inc., P.O. Box 756, Lake Geneva WI 53147, U.S.A. Put the words "defective product" somewhere on the package. Enclose a letter giving your name and address, and state where and when you bought the product. Note that a replacement "vampire" page was run in DRAGON issue #150; you can also get one by writing the address above.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `There seem to be several problems with the new dragon descriptions. Does the combat modifier really apply to both attack and damage rolls? If so, how can a really big dragon ever miss? How much damage do black dragons really do with their breath weapons? What does the "MT" column mean on the black dragon's statistics table? Why are separate body and tail lengths given for each dragon type? What is the correct tail length entry for great wyrm bronze dragons? How many times can a dragon use its breath weapon each day? The text on dragons seems to imply that dragons have no limit on how often they can use breath weapons, but the dragon turtle's description strongly implies that the limit is three times per day.`,
            answer: [
                `A dragon's combat modifier applies only to its damage rolls; the reference to attack rolls is left over from an earlier version of the manuscript. From age category five on, one digit has been dropped from the black dragon's breath weapon rating; starting from age category one, the column should read: 2d4+1, 4d4+2, 6d4+3, 8d4+4, 10d4+5, 12d4+6, 14d4+7, 16d4+8, 18d4+9, 20d4+10, 22d4+11, and 24d4+12. The "MT" is a typo; it should read "MR" for magic resistance. Only a dragon's body length is considered when calculating a dragon's size rating, since the tail is very thin. Also, damage to a dragon's tail does not really harm the dragon; only hits on the body and wings are telling enough to reduce the dragon's hit points. This makes dragons a little less vulnerable to mob tactics. A great wyrm bronze dragon's tail is 100-110' long. In the core AD&D 2nd Edition rules, a dragon can use its breath weapon three times a day, once every three rounds. To make fighting dragons less of a certain thing, however, I suggest you make the interval between breath weapons variable (roll 1d3 for the number of interval rounds). An alternate method for determining the number of a dragon's breath weapons used each day is discussed in "The New Ecology of the Dragons," in DRAGON issue #146.`
            ],
            comment: 'Dragons do not have a 3 breaths per day limit, only once per 3 rounds. This is corrected in #162',
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `Will statistics for Tiamat and Baha- mut be given in future volumes?`,
            answer: [
                `To my knowledge, Tiamat and Bahamut, the Chromatic and Platinum dragons, are not scheduled to appear in any volumes of the ***Monstrous Compendium***. They might, however, appear in the revised ***Legends & Lore*** tome.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `What kinds of materials can a bur- rowing dragon dig through?`,
            answer: [
                `Generally, a burrowing dragon can burrow only through things found in its home terrain. Thus, a white dragon can burrow through ice and snow, and a brass dragon can burrow through sand. Note that all dragons can dig, but only burrowing dragons do it fast enough to be given a movement rating for doing so.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `How is the age category of a randomly encountered dragon generated?`,
            answer: [
                `I suggest rolling 2d4. This keeps hatchlings safely at home and restricts the really powerful older dragons to set encounters placed by the DM, probably close to their lairs, which they tend to guard jealously.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `How come dragons are allowed armor classes better than -10 when the ***DMG*** limits characters to -10?`,
            answer: [
                `Dragons aren't characters; they're among the most powerful beings on the Prime Material plane. If your campaign allows PCs to live and grow for more than a millennium, as dragons do, go ahead and let them break the AC -10 barrier after they've adventured for 1,000 years.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `What is the spell ***detect gems***, and why do gold dragons have it?`,
            answer: [
                `There is no such spell. The gold dragon's ability is explained in the monster's description. Precisely why gold dragons have this ability is unrevealed.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `What does an alignment of "nil" mean? Just neutral?`,
            answer: [
                `The "nil" alignment rating is a holdover from an early draft of the ***Monstrous Compendium*** material. Originally, a rating of "nil" indicated that a creature was not intelligent enough to have an alignment at all. However, the "nil" rating was dropped during rewriting and should have been replaced with the neutral alignment.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `Do ***fireballs*** or other heat-related attacks do any additional damage to creatures such as frost giants or white dragons?`,
            answer: [
                `No. Unless a creature's description lists a special vulnerability, or unless an attack form's description lists a special damage bonus, assume the target of any magical attack is affected normally.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '86',
            question: `How can a fire giant be totally immune to red dragon breath, which can do up to 24d10+12 hp damage, and still be vulnerable to ***fireballs***, which do a relatively paltry maximum of 10d6 hp damage?`,
            answer: [
                `This was the subject of heated discussion during the game's production. Ultimately, the winning argument had two points. First, dragon breath is not magical fire; the flame produced inside a dragon is not the same as the fire in a ***fireball*** or ***wall of fire*** spell. Second, making fire giants immune to fire would imbalance the game because so many attack spells are based on fire. Still, there are plenty of nonfiery attack spells, so your campaign isn't likely to suffer if you decide to make your fire giants completely fire resistant.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `Will wolverines, whales, and sharks be included in future volumes of the ***Monstrous Compendium***?`,
            answer: [
                `Yes. Sharks and wolverines are included in volume 2 (TSR product #2103), which is available now. (Sharks and wolverines are not listed in volume 2's alphabetical index, but the information is there.) Whales are included in volume 3 (TSR product #2104), which is also available.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `What is a werebear's intelligence rating? The listing says exceptional, but the number rating is given as (11-12) while the introduction says the range for exceptional intelligence is 15-16.`,
            answer: [
                `The numbers in the werebear's statistics are wrong. Werebears are exceptionally intelligent (15-16).`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `What is the experience-point value for a noble genie? How are experience-point values figured, anyway?`,
            answer: [
                `A noble genie is worth 6,000 xp; the number is listed but in the wrong column. Complete experience-point tables are given in the 2nd Edition ***Dungeon Master's Guide***, page 47.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `Shouldn't liches have 10 + HD now that wizards are limited to 10 HD? Isn't 7,000 xp a bit low for a high-level lich?`,
            answer: [
                `You can give a lich 10 hit dice, or you can assume it picks up an extra hit die in the process, of becoming a lich. According to my calculations, an 11-HD lich should be worth 12,000 xp (base 2,000; AC 0, +1; high intelligence, +1; immunity to any spell, +1; hit only by magical weapons, +1; level 3 or greater spells, +2; paralysis, +2; fear, +2). Liches that possess and use magical items against the party are worth an extra 1,000 xp, and high-level liches should be worth an extra 1,000 xp per level over 11th.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86',
            question: `Shouldn't soldiers have more than 1 hp? After all, farmers have 1-6 hp.`,
            answer: [
                `Common soldiers are usually militiamen or part-time soldiers, so they have 1-6 hp, just like the farmers they actually are when they aren't fighting. Professional and veteran soldiers have 1-10 hp per level.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '86-87',
            question: `Why was the huecuva renamed? Can creatures with infravision automatically recognize these creatures for what they are?`,
            answer: [
                `The creature was accidentally renamed "heucuva" while volume 2 was in production. Since it is impractical to reprint most of volume 2 to get the correctly spelled "huecuva" in proper alphabetical order, the creature has been officially renamed. Heucuva (the name is the same in singular and plural forms) appear to be common skeletons when viewed with infravision, no matter what guise they have adopted using ***polymorph***; a party using infravision will simply not be able to distinguish them from regular skeletons. Note that torch or lantern light, which is necessary for making maps, spoils infravision and keeps all characters with infravision from seeing a heucuva's skeletal form. (The shadow cast by a ***polymorphed*** heucuva will be that of the shape it has assumed, not that of a skeleton.)`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '87',
            question: `How much damage does a korred do? The number range is given as 3-6 hp damage, while the damage-dice type is given as 1d2+4.`,
            answer: [
                `A melee hit from a korred does 5-6 (1d2+4) hp damage.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '87',
            question: `There seem to be a few errors in the rear-claw damage ratings for the various great cats.`,
            answer: [
                `There are. The correct (single claw) ratings are: cheetah, 1-2; jaguar, 2-5, (1d4+1); leopard, 1-4; common lion, 2-7 (1d6+1); mountain lion, 1-4; spotted lion, 2-8 (2d4); giant lynx, 1-3; tiger 2-8 (2d4); smilodon 2-8 (2d4).`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '87',
            question: `Aren't one leader and three assist- ants for every three orcs simply too many leaders and assistants?`,
            answer: [
                `Yes. The correct number is one leader and three assistants for every 30 orcs.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '87',
            question: `Can a ***rope trick*** spell be cast downward or sideways, so that the caster has to climb down or across to get into the extradimensional space? How big is the extradimensional space? Can the spell be cast underwater to form an air pocket?`,
            answer: [
                `The rope must always be cast upward. The extradimensional space is big enough to hold eight man-size creatures and is about 10' high, 10' long, and 20' wide. The spell can be cast anywhere there is enough space to allow the rope to rise the required 5-30'. However, if the spell is cast underwater, the extradimensional space will fill with water.`
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_SPELL],
        },
        {
            page_number: '87',
            question: `How many pinches of ***dust of disappearance*** are commonly found at one time?`,
            answer: [
                `Five to 50 (5d10), just like ***dust of appearance***.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '87',
            question: `Will a wish to increase an ability score subject the wizard casting the spell to a three-point penalty to strength even if he is increasing his strength by one point?`,
            answer: [
                `Yes. The wizard suffers the penalty if he raises an ability score (his own or anybody else's). In the unusual case you pose, the temporary subtraction comes from the wizards new strength score.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '87',
            question: `How does spell-casting affect melee? Is there a bonus for attacking a spell-caster while he is casting a spell?`,
            answer: [
                `A spell-caster may not attack during any round in which he casts a spell, and he may not use his dexterity bonus to benefit his armor class in order to avoid an attack while casting that spell (he'll ruin his spell if he does so). The spell-caster is not otherwise impaired, however, and attacks against him are made normally.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '87-88',
            question: `Can a spell-caster use the same spell more than once per day by memorizing it more than once?`,
            answer: [
                `Yes, but each spell memorized fills one "slot." For example, a wizard who can memorize three first-level spells could memorize a ***magic missile*** spell three times, but could take no other first-level spells.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `I understand that a magic-user can cast only the spells in his book, but how often can a spell in a book be cast? A friend told me that a 1st-level magic-user can cast only one spell per day, but the ***DMG*** says that a 1st-level magic-user has a book of four spells.`,
            answer: [
                `You seem to be confused by the difference between the number of spells a magic-user can have memorized at any given time and the number of spells that he can have written in his spell book.`,
                `The number of spells that any magic-user can have memorized at any one time is given on the Spells Usable By Class And Level chart in the ***PHB*** (page 26). To use the chart, find the level of the spell-caster (first column). The total number of spells his brain can hold is given to the right of his level. For example, the "Magic-users Spell Level" line for a 4th-level magic-user reads: 3 2. This means that a 4th-level magic-user can memorize up to three first-level spells and two second-level spells.`,
                `When a magic-user prepares for an adventure, he studies his books and commits spells to memory, up to his "full load." When he casts one of these spells, the memory of it goes away (as explained on page 40 of the ***PHB***), and he must memorize it again before he can cast it again. The number of spells a magic-user can have in his spell book is determined by his intelligence score.`,
                `There are two ways, however, that the magic-user could cast a spell without memorizing it first. The first is by using a scroll—a temporary magical writing. Any time after a magic-user has studied a scroll while using a ***read magic*** spell, he can read that scroll aloud and cast the spell written on it, whether or not he has that spell memorized. A spell written on a scroll can be cast once only; the writing disappears when the spell is cast. (See pages 100-101 of the 1st Edition ***PHB*** and pages 127-128 of the 1st Edition ***DMG*** for more information on the use of scrolls.) The second is to read the spell directly out of the spell book. This causes the spell to disappear from the book (so that the magic-user cannot memorize it again until he can write it into the book again) and may also cause other spells to disappear from the book (see page 80 of ***Unearthed Arcana*** for more details on casting spells directly from books).`
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '88',
            question: `The information on spell books on page 79 of ***Unearthed Arcana*** does not match the information as originally presented in DRAGON issue #62. Is this an error or an editorial change?`,
            answer: [
                `The information in ***Unearthed Arcana*** is correct and applies to ***all*** spell books. This was an editorial change based on playtesting results.`
            ],
            attributes: [ATTRIBUTE_1E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '156',
    publication_year: '1990',
    publication_month: 'April',
    foreword: [
        `This month, "Sage Advice" considers AD&D® game queries that most readers probably haven't considered before, then reconsiders some old advice.`,
        ``,
        `"Unusual stuff"`,
        `Sheesh! What kind of games do you people play, anyhow? Do you really encounter these problems in play, or do you just sit around thinking of strange questions to send me? Here we go:`
    ],
    sage_advice: [
        {
            page_number: '55',
            question: `If a wizard cast an ***anti-magic shell*** spell on himself at the same time a beholder aimed its ***anti-magic ray*** at him, which effect would prevail?`,
            answer: [
                `**Anti-anti-magic:** The question is moot since both effects produce the same results: the temporary suppression (not dispelling) of all magic. (Artifacts function, but any spell-like effects they produce are suppressed.) Both effects work normally, even in the area of overlap.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '55-56',
            question: `My 9th-level ranger was changed into a glass of water by a powerful mage using a ***wish*** spell. After killing the rest of the party, the mage drank my character. The DM said my character is dead, but I say my character's essence has mingled with the mage's. Who is right?`,
            answer: [
                `**Watery ranger:** I have my doubts about the validity of the wish. Since it was used against a character directly, I'd treat it as a permanent ***polymorph any object*** spell. Such a wish could be dispelled so long as the water-character stayed intact. Once the water is spilled, evaporated, or consumed, the character's "essence" is scattered or destroyed, and only another ***wish*** will restore the character.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '55-56',
            question: `Can a human be cleanly killed, ***enlarged***, have ***permanency*** cast on him, then be ***raised*** or ***animated*** without the caster of the ***permanency*** losing a constitution point? How about ***animating*** the corpse, then ***enlarging*** it and making it permanent—would the caster of the ***permanency*** spell lose a constitution point then?`,
            answer: [
                `**Enlarged corpse:** A corpse is an object. Use the rules for non-living objects when adjudicating the results of ***enlarge*** or ***permanency*** spells. A zombie, however, is a creature (even if it is biologically dead). In the AD&D® 1st Edition rules, a mage who ***enlarged*** a corpse and cast ***permanency*** on it would have only a 5% chance to lose point of constitution (see the 1st Edition ***DMG***, page 46), because he was working with an object. The AD&D 2nd Edition game does not make a distinction between permanent effects on objects or creatures, but I think it's safe to assume this is an oversight. In either game, the ***enlarged*** corpse could be animated as a huge, 1-HD zombie.`
            ],
            comment: '2nd Edition ***permanency*** on objects costing 1 constitution, is not an oversight. It is clarified in Sage Advice #273 p. 114-115',
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_2E, ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '55-56',
            question: `How far can three bozak draconians (which are described in the ***DRAGONLANCE® Adventures*** book) be hurled from a catapult if they were bound together and had their wings amputated? What would be the range if they were launched singly? Would the ranges for other draconians be similar?`,
            answer: [
                `**Catapulted draconians:** Light catapults hurl rocks that weigh 8-10 lbs. Heavy catapults hurl rocks that weigh 20-25 lbs. Even a single draconian of any species placed on a catapult would overload the machine so much that the catapult wouldn't fire at all. Trebuchets, however, have a much larger load capacity, hurling rocks that weigh about 500 lbs., which is probably about right for three draconians. Rocks, however, are a bit more aerodynamic than any three wingless draconians tied together, so a draconian-firing trebuchet's range should be halved, for a maxi- mum range of 240 yards and a minimum of 120 yards.`,
                `A single draconian fired from a trebuchet is grossly underweight as well as unaerodynamic, producing an effect akin to trying to hurl a slightly underinflated beach ball. Use the scatter diagram on page 63 of the 2nd Edition ***DMG***. Treat the point labeled "intended target" as the trebuchet; a roll of 1 indicates that the draconian is hurled straight up into the air and lands right on the trebuchet (or on top of its operators, at the DM's option). Any other roll indicates that the draconian flies wildly off in the given direction. Roll 8d4 × 10 for the total distance in yards that the draconian "flies."`,
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_2E, ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '55-56',
            question: `My character was recently ***polymorphed*** into a worm. Another character cut my character in half. If the two halves were allowed to grow into two worms, would I have two characters if the ***polymorph*** spell was dispelled? Wouldn't the two characters be identical and friendly toward each other (not prone to kill each other as two clones would)?`,
            answer: [
                `**Wormy PC:** Characters retain their hit points and intellect when subjected to ***polymorphing***, so your character should have been the worlds smartest and toughest worm, at least until he failed an intelligence check and assumed a worm's mentality (if a worm can be said to have a mentality). Your character would be dead if chopped in half while still mentally a "person" If the character reverted to worm mentality before being cut in half, it still would be one tough worm (having your PC's hit points), but it might very well survive being chopped in half if anyone were persistent enough to actually do it. Many DMs, however, would rule that the ***polymorph*** spell could no longer be dispelled once the change in personality took place. If the magic on either or both halves of the worm were dispelled, you'd have one or two halves of a dead character. Each "new" worm still is only half a character, even if allowed to grow into a whole worm.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '55-56',
            question: `My deep gnome character lost both his legs on an adventure. The party's paladin graciously carried my gnome in a jury-rigged papoose-type backpack. Could the paladin or my character engage in melee using this arrangement? How much would a legless gnome weigh?`,
            answer: [
                `**Legless gnome:** The character carrying the gnome is going to be encumbered, even if he can handle the weight, because of the gnome's bulk. This means he'll suffer at least a -1 penalty to his to-hit rolls (see the 2nd Edition ***Player's Handbook***, page 79); the penalty will be worse if the gnome weighs enough to reduce the carrier's movement. The DM might also add an initiative penalty equal to the combat penalty. The gnome could fight if his arms were free. I suggest a -4 penalty to his to-hit roll and a +3 penalty to his initiative.`,
                `Human, elf, half-elf, and halfling anatomy generally follows the so-called Rule of Nines: The head takes up 9% of the body's weight, each arm 9%, the chest 18%, the abdomen 18%, and each leg 18%. The missing 1% is ignored. Gnomes and dwarves are stocky and carry less mass in their limbs. The distribution of their weight might be: head 9%; each arm 8%, chest 21%, abdomen 21%, and each leg 16%.`,
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_2E, ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '55-56',
            question: `If a ***bastard sword +6***, defender was trampled by a triceratops, and the roll on the item saving-throw table was a 1 on 1d20, would the item fail because the roll was a 1 or would it make the save because it needs a 6 to save and its pluses make up the difference? If the sword did break, could it be remade with all its pluses? Would a ***wish*** completely restore the broken sword?`,
            answer: [
                `**Dinosaur vs. magical item:** In either edition of the AD&D game, a roll of 1 always fails a saving throw, weapons' bonuses notwithstanding. Someone is bound to write to me and point out that the item saving-throw table in the 1st Edition ***DMG***, page 80, lists the numbers 1 and 0 in several places. When an item has a saving throw of 1, a roll of 1 still fails; however, if the DM assigns a circumstantial penalty, any adjusted roll of 1 or more is a successful save. For example, a book falling 15' onto a hard surface has a modifier of -2 (-1 for every 5' beyond the first 5'1; if a 3 were rolled as a save, the save would be successful (3 - 2 = 1, still good). Items that have a save of 0 are immune to the listed attack form; for example, liquids are immune to blows, even if their containers are not.`,
                `A ***wish*** certainly could restore the sword if all its pieces were present. Whether or not the sword could simply be remade is up to the DM. I suggest that most enchanted items be rendered nonmagical if broken, though I can think of one or two classic fantasy stories in which broken magical items were remade. If the item is very powerful (with a bonus of +4 or better), it might be remade if it is simply broken—not ***disintegrated*** or reduced to ash or slag—and if it rolls a second save of 20. The item should get a bonus of +1 for every two magical bonuses the item has (artifacts receive a +4 bonus to their saves). If the item fails the second save, it no longer radiates magic; characters smart enough to use ***detect magic*** will know an attempt to repair the item is a waste of time. If the save is successful, the repair should be made using the best possible materials and a master craftsman of unequaled skill; finding either of these should be an adventure in itself. If the DM really wants to prolong the player's agony, he can require the being who will repair the item to make a successful proficiency check and maybe even make a save vs. spells to be successful.`,
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_2E, ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '55-57',
            question: `The rules say a ***fireball*** detonates at a point designated by the caster or when it strikes a solid object. What is the chance of an archer hitting the ***fireball*** with an arrow and causing it to detonate while in flight?`,
            answer: [
                `**Shooting down a *fireball*:** I repeated this question to one of my regular playing groups and got in return five bemused grins and the following straight-faced comment: "Gee, you'll also need rules for [shooting down ***fireballs*** with] ***magic missiles*** and things like that, too." For the record, hitting a ***fireball*** or similar missile with another missile, magical or not, is about as likely as every creature on a world taking a step at the same instant, thereby creating cataclysmic vibrations that shake the planet apart. That is, it's possible in theory but gosh darn well near impossible in practice.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '55-57',
            question: `Can a ***ring of regeneration*** restore a female character's maidenhood? Could this be done well enough to fool a unicorn?`,
            answer: [
                `** *Regenerating* maidenhood:** Sorry, unicorns know their maidens too well to be fooled. Under certain circumstances, a ***ring of regeneration*** can restore the—ahem—physical aspects of a lady's maidenhood. A ***ring of regeneration*** can restore any damage or appendage loss if it occurs while the ring is worn. For example, if a character wearing a ***ring of regeneration*** loses a finger, the ring will eventually restore the finger. However, if the character loses the finger and then dons the ring, the finger isn't regrown. In a similar vein, a ***ring of regeneration*** can't be passed from character to character to provide a party with cheap healing. Damage that exists before the ring is put on is not restored. Note that a clerical ***regenerate*** spell can restore a lost limb at any time. In any case, maidenhood is a state of being. Once it is lost, it is lost forever, ***regeneration*** notwithstanding.`
            ],
            attributes: [ATTRIBUTE_1E, ATTRIBUTE_2E, ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '57',
            question: `In DRAGON issue #148, you said elven chain mail negates a ranger's ability to fight two-handed without penalty. Why is this? Armor made from elven steel has one-half the normal encumbrance value, according to the 2nd Edition ***DMG***. So elven chain mail weighs 20 lbs., or 5 lbs. less than studded leather, which is the "heaviest" armor a ranger can wear and still avoid the penalty.`,
            answer: [
                `Chain mail armor isn't all metal. Chain mail is a shirt of metal links worn over a padded garment; this is necessary to keep the links from being driven into the wearer's body when a blow strikes. The padding weighs about 10 lbs., giving elven chain mail a weight of 25 lbs., the same as studded leather. Second, weight alone is not the only factor. The armor's thickness, stiffness, weight distribution, and general protective value also must be considered. While elven chain mail weighs about as much as studded leather, it is still "heavier." Generally, any armor type whose base armor class (before magical or dexterity adjustments) is AC 6 or better is "heavier" than studded leather, even if it actually weighs less than 25 lbs. due to materials or enchantments, or both.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '57',
            question: `In issue #138, you said that ***protection from evil*** effects do not keep undead at bay, except for ghouls. Come on! Since all undead are magically created, they're all enchanted monsters and all are thwarted by ***protection from evil***. While we're at it, you also said that banshees turn as specials, if they can be turned at all. Come on again! The rules say that clerics have power over the undead, not some undead.`,
            answer: [
                `Chain mail armor isn't all metal. Chain mail is a shirt of metal links worn over a padded garment; this is necessary to keep the links from being driven into the wearer's body when a blow strikes. The padding weighs about 10 lbs., giving elven chain mail a weight of 25 lbs., the same as studded leather. Second, weight alone is not the only factor. The armor's thickness, stiffness, weight distribution, and general protective value also must be considered. While elven chain mail weighs about as much as studded leather, it is still "heavier." Generally, any armor type whose base armor class (before magical or dexterity adjustments) is AC 6 or better is "heavier" than studded leather, even if it actually weighs less than 25 lbs. due to materials or enchantments, or both.`,
                `The only undead that are magically created are skeletons and zombies, which are created with the ***animate dead*** spell. However, enchanted monsters are those brought into being with conjuration/ summoning spells, and ***animate dead*** is necromantic. Ghouls are hedged out because their descriptions in the 1st Edition ***Monster Manual*** and 2nd Edition ***Monstrous Compendium*** say they are. Still, the DM could rule that the normal undead-creation process (in which a being killed by certain undead beings becomes an undead creature, too) is magical. Expanding the list in this fashion logically would include lycanthropes (which suffer from a quasi-magical curse), golems (which are ritually created), creatures such as owlbears and bulettes (commonly known to be magical crossbreeds), and gargoyles (which have "magical natures")—and the list goes on. It's much better to draw the line early on.`,
                `The rules don't say that clerics have power over *all* undead. Banshees were left off the clerics vs. undead table in the AD&D 1st Edition ***DMG*** because they couldn't be turned in those rules (see the 1st Edition ***Monster Manual***, "Groaning Spirit"). Currently, banshees can be turned as "special" undead (see "Groaning Spirit," ***Monstrous Compendium***, Volume 2).`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '57',
            question: `In issue #148, you said all warrior characters are entitled to exceptional strength scores, but a footnote on page 20 of the 2nd Edition ***Player's Handbook*** says halfling fighters do not roll for exceptional strength.`,
            answer: [
                `You are correct. Score one for footnotes and for people who read them.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '57',
            question: `In an earlier issue, you said a paladin's ***detect evil*** ability works just like a ***detect evil*** spell, and that it could detect evil characters. Isn't there a section in the rules that says ***detect evil*** spells don't work on evil characters?`,
            answer: [
                `There sure is. Check out the 1st Edition ***DMG***, page 60. Evil characters don't always radiate evil. Just for the record, I didn't actually say that; one of my editors did *[It was me.—Roger]*. While my editors are fine people whose timely interventions have more than once caught my errors before I embarrassed myself in print, the shoe was on the other foot this time.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '57',
            question: `Why does a paladin's immunity to disease protect him from attack by green slime, violet fungi, and other plant monsters?`,
            answer: [
                `In my opinion, it doesn't. My editor *[me again]* assumed that since green slime can be killed with a ***cure disease*** spell, paladins must be immune to its effects. However, green slime is a monster with the ability to destroy flesh, wood, and metal. A disease is a malady caused by a pathogenic organism; a paladin's immunity to disease does not protect him or his equipment from a green slime's attack, its susceptibility to ***cure disease*** spells notwithstanding. Similarly, a violet fungi's flesh-destroying attack works on paladins, even though ***cure disease*** spells halt its effects. Furthermore, paladins can get infected wounds (if your campaign considers them), as these are not diseases per se; ***cure disease*** spells also remove such infections.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '57',
            question: `In issue #146, you discussed the ***enchant an item*** spell and said that a magical weapon's bonus was not a spell effect. What about the ***enchanted weapon*** spell?`,
            answer: [
                `As described in the AD&D 1st Edition game, the fourth-level spell ***enchanted weapon*** did not produce a true "plus." The spell allowed the recipient weapon to harm creatures hit only by magical weapons, but it did not bestow any bonuses whatsoever. Consequently, I tread lightly around the subject in the column. The new ***enchanted weapon*** spell, however, does bestow a true bonus and is useful for enchanting most weapons, as described in the 2nd Edition ***PHB***, page 157.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
    ],
});
DRAGON_MAGAZINES.push({
    issue_number: '157',
    publication_year: '1990',
    publication_month: 'May',
    foreword: `This month, the sage continues his tour of the AD&D® 2nd Edition game, with special attention on the 2nd Edition ***Player's Handbook (PHB)***.`,
    sage_advice: [
        {
            page_number: '24',
            question: `Can a ***simulacrum*** be healed with a ***cure light wounds*** spell? How would a spell such as ***enlarge*** affect a ***simulacrum***? Can a character detect a ***simulacrum*** just by talking to it awhile? How do spells like ***dispel magic*** and ***anti-magic shell*** affect ***simulacrums***? Since ***simulacrums*** are made of snow, are they especially susceptible to fire or heat?`,
            answer: [
                `A ***simulacrum***, once completed, is a creature—not an object—made of nonliving matter; it's a construct something like a golem. Most spells that affect creatures also affect ***simulacrums***. Spells like ***magic missile, ray of enfeeblement, haste***, and ***protection from normal missiles***, which affect only creatures, also work on ***simulacrums***. So do spells like ***charms*** and ***holds***, if the creature that the ***simulacrum*** duplicates can be affected by those spells.`,
                `A ***simulacrum*** is composed entirely of nonliving matter and is not truly alive. Consequently, curative spells do not work on ***simulacrums***, and repairing damage done to them is a difficult and costly process (see the ***PHB***, page 186). (In the AD&D 1st Edition game, a ***simulacrum*** could be ***enlarged*** or ***reduced*** at the lower, nonliving matter rate.) ***Simulacrums*** do not need to breathe or eat, through they usually do so to avoid detection.`,
                `Once completed, a ***simulacrum*** cannot be ***dispelled*** or rendered nonfunctional by a ***dispel magic*** spell. ***Anti-magic shells*** keep ***simulacrums*** and other magically created creatures at bay (see the ***PHB***, page 173), but ***protection from evil*** in any form does not. A ***Mordenkainen's disjunction*** spell can destroy ***simulacrums*** just as it can destroy magical items; the creature's chance to resist the ***disjunction*** is based on its creator's level (or on level 14, if the creator's level is unknown).`,
                `***Simulacrums*** usually cannot be detected by nonmagical means, since each one is a functioning replica of some creature; however, the replica's degree of accuracy is variable (see the ***PHB***, page 186), and the DM might give players subtle clues as to the creature's actual nature. Very poor ***simulacrums*** (having less than 55% of the original's hit points and knowledge) probably shy away from flame or intense heat, and they might speak in monotones. Characters who are quite familiar with the original creature should have no problem finding gaps in the ***simulacrum's*** knowledge, as even the best ***simulacrum*** has only 65% of the copied creature's knowledge and personality, but all such clues to the creature's true nature should be provided through role-playing. For example, a ***simulacrum*** of a character might lack the original's zest for apple cider, lack an unusual nonweapon proficiency, and lack the original's distaste for undercooked meat. Only very perceptive players should be able to detect a ***simulacrum*** in this manner.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E,ATTRIBUTE_SPELL,ATTRIBUTE_DISPEL_MAGIC],
        },
        {
            page_number: '24',
            question: `On the Thieving Skill Armor Adjustments table in the ***PHB*** (table 29, page 39), is the "Elven Chain" column for magical or nonmagical elven chain mail?`,
            answer: [
                `The information in the "Elven Chain" column applies to both magical and nonmagical armor. Though enchanted armor is easier to wear than nonmagical armor (see the encumbrance rules, ***PHB***, page 79), enchantment doesn't reduce the armor's effect on thieving abilities.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '24',
            question: `Does a spell-caster who is casting a spell in melee have to concentrate so hard that he loses his dexterity bonus to armor class? Do attackers get a to-hit bonus vs. a spell-caster who is casting a spell? Can a mage cast more than one spell in a melee round?`,
            answer: [
                `Spell-casting requires considerable—but not total—concentration. Spell-casting negates dexterity bonuses to armor class, but does not otherwise make the caster easier to hit. Most DMs allow spell-casters to defend normally after a spell is completed, so that the caster can use his dexterity bonus (if any) against any attacks made then. It usually isn't possible for any kind of spell-caster to cast two or more spells in the same melee round, even if the caster is using a ***haste*** spell or ***potion of speed***.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '24-25',
            question: `If a mage gets a magical item, such as an ***ioun stone*** that increases his intelligence, does his chance to learn new spells and maximum number of spells per level increase? Does he immediately get to try learning spells he has "missed" before? What happens to his spell books if he loses the item? Does a mage have to delete spells from his book if an item, creature, or curse lowers his intelligence score?`,
            answer: [
                `Even temporary increases in a magic user's intelligence score increase the character's chance to learn spells. (The increase provided by an ***ioun stone*** is temporary because it lasts only as long as the character keeps and uses the item.) The character cannot immediately try to relearn spells he has failed to learn before, but he can try them again at his increased success chance when he gains a new experience level (see the ***PHB***, page 16). The maximum spells per level rule is optional. If your campaign uses it, the character's spell limit increases along with his intelligence. If the character manages to learn a new spell and write it into his book while his intelligence score is temporarily raised, it stays there even if his intelligence subsequently drops. Intelligence losses of any kind do not affect spell books. However, the DM could rule that not every spell could be replaced if the character's spell book is lost or destroyed and had to be reconstructed.`,
            ],
            attributes: [ATTRIBUTE_2E, ATTRIBUTE_CLASS],
        },
        {
            page_number: '25',
            question: `Can thieves use shields? Bards are specifically prohibited from using shields on page 41 of the ***PHB***, but no such restriction is listed with the thief armor information on page 38. I notice that table 38, Thieving Skill Armor Adjustments, has no entry for shields.`,
            answer: [
                `Thieves cannot use shields; only leather, studded leather, padded leather, or elven chain armor is acceptable.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '25',
            question: `If a spell-caster decides to cast a spell, but then loses initiative and is hit in combat, his spell fizzles. Are such spells lost until the caster can memorize them again? What if the caster is using a magical item? Can spell-casters who have their spells ruined attack the same round as the spells were lost?`,
            answer: [
                `Spells and scrolls are used up and lost if they are disrupted during casting. Some magical items require a "casting" procedure that can also be disrupted; these include wands, staves, and rods if the command word optional rule is in effect. (This assumes that the "command word" is actually a phrase or rhyme; perhaps the wielder must actually accompany the speaking of the phrase or rhyme with some kind of somatic gestures.) If wand, stave, or rod use is disrupted, the appropriate charges are expended and lost. Rings, weapons, armor, and miscellaneous magical items generally have very short command words or sequences (if they have any at all) and usually cannot be disrupted. Some wands, staves, and rods that are usable by non-spell-casters, such as the ***rod of lordly might*** and ***wand of secret door and trap location***, tend to have very simple command words or sequences and also cannot be disrupted. Spell-casting and magical-item use count as actions. A character cannot perform a second action in the same round even if the spell or item's effect is disrupted.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '25',
            question: `The rules in both editions of the AD&D game say that paladin must give 10% of his income to a charitable institution. What defines income? My DM says income is all money and wealth the paladin has, so my paladin tithes part of the same money again and again. Would nonmonetary wealth (such as a mount, property, or armor) be included in income?`,
            answer: [
                `Income is, literally, incoming or "new" wealth. Savings, equipment, and property are not income. As explained in the AD&D 2nd Edition rules, however, tithing is not the limit of a paladin's largess (see the ***PHB***, page 28). The 10% tithe is paid immediately before the paladin does *anything* else with his income. After his tithes and expenses are paid, a paladin is obligated to donate the rest to a worthy cause.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '25',
            question: `Can the armor class bestowed by a ***shield*** spell be enhanced with ***rings of protection***, ***bracers of defense***, or other protective items?`,
            answer: [
                `No. The caster gets the armor class bestowed by the spell, or his own current armor class as modified by magic and dexterity, whichever is better vs. any given attack. However, the spell's saving-throw bonus is cumulative with dexterity and magic.`,
            ],
            comment: `This is contradicted / redefined in Sage Advice #193 where it is said that items that give an additive bonus, such as ***ring of protection*** does stack, while items that give a flat base AC such as ***bracers of defense*** does not stack.`,
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '25',
            question: `Can a mage use a ***teleport*** spell to travel into and out of a castle built on a drifting cloud? Or would the cloud's motion make ***teleporting*** impossible?`,
            answer: [
                `Unless there is some outside force preventing it (see the ***PHB***, page 172), a character can ***teleport*** from anywhere. Particularly strict DMs might rule that any momentum the ***teleporting*** character has will carry over after the ***teleport*** is complete. For example, if a wizard ***teleports*** out of a runaway mine car, he still might be in for a whopping impact at his destination. Unless the DM decides that the magic needed to keep a cloud castle aloft blocks ***teleportation***, it is possible to ***teleport*** to that castle. Motion is not a factor in determining what constitutes a viable destination for a teleport spell. In a sun-centered solar system, every piece of a planet's surface constantly undergoes complex motions as the planet rotates, revolves around its star, and hurtles through space with the rest of the system (not to mention any tectonic motions in the planet's crust). Nevertheless, one can ***teleport*** to any place on the planet. The key word is "place." A piece of ground, an asteroid, and a castle are all places and thus can be the destinations of a ***teleport*** spell even if they are in motion. Any other place that can provide a substantial surface as required in the spell description will also serve. Stability goes hand in hand with substance in this case; a constantly changing surface such as a flowing stream, patch of quicksand, or heaving ship's deck cannot be a destination for a ***teleport*** spell. Note that carts, wagons, ships, and other conveyances are objects, not "places." A character can ***teleport*** from such locations, but not to them.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '25',
            question: `Can normal aging raise a character's ability scorse above the character's racial maximum? Can it raise a score from 18 to 19?`,
            answer: [
                `The rules on ability-score minimums and maximums (see the ***PHB***, page 20) make it clear that the limits apply only to characters when they are being created. So if a character actually lives long enough to get an intelligence or wisdom boost (these are the only ability scores that *increase* with age), I see no reason why he shouldn't get the full benefit. Note that magical aging does not improve intelligence and wisdom; only actual life experience does that.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '25',
            question: `What is the use of taking two or more days to write a scroll into a spellbook when a wizard can just memorize the spell from the scroll?`,
            answer: [
                `Scrolls are temporary magical writings good for one—and only one—use. I suppose a wizard could memorize a spell from a scroll, but doing so would use up the scroll, as would writing the scrolls spell into a book. This being the case, I should think the advantage of taking the time to make a permanent record of the spell in a book is obvious.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '25',
            question: `How much water is created by a reversed ***transmute water to dust*** spell?`,
            answer: [
                `The reversed spell changes dust, dirt, or mud into water. A wizard can create a 10' cube of water per caster level, provided that enough material is on hand to be transmuted. A priest converts one cubic yard (a cube 3' across each side) per caster level.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '25',
            question: `Can the caster of the fifth-level priest spell ***rainbow*** choose a specific arrow even if it is not the "next" in order? What is the order?`,
            answer: [
                `Yes, the caster can always choose which arrow to fire, provided it hasn't already been used. The "next" arrow appears automatically only when the caster fails to request a specific color or when he requests a color that has been already used. The arrow-color order is just as listed in the spell description: red, orange, yellow, green, blue, indigo, and violet.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '25',
            question: `Is magic resistance in the AD&D 2nd Edition game affected at all by the spell-caster's level?`,
            answer: [
                `No, not anymore.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '158',
    publication_year: '1990',
    publication_month: 'June',
    foreword: `This month, the sage continues his tour of the AD&D® 2nd Edition game. ***DMG*** is the 2nd Edition ***Dungeon Master's Guide***, and ***PHB*** is the 2nd Edition ***Player's Handbook (PHB)***.`,
    sage_advice: [
        {
            page_number: '71',
            question: `What are-the size, speed factor, and other statistics for the scythe wielded by the minor death produced by a deck of many things (see the ***DMG***, page 166-167)?`,
            answer: [
                `Speed factor is irrelevant in the case of the minor death; it always strikes first. In a character's hands, a scythe makes a cumbersome weapon at best. I suggest the following statistics: cost 5 gp; weight 7 lbs.; size L; type P/S (the blade has both a curved cutting edge and a sharp point); speed factor 10; damage 2d4 (S-M)/1dG (L).`,
            ],
            comment: `1dG is clearly wrong and maybe should be 1d10. Size L contradicts Priest's, Druid's, Ranger's Handbook. Combat & Tactics agree on the size.`,
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '71',
            question: `Where is the table for determining what kind of coins can be found in a ***Bucknard's everful purse***? How long can the purse be empty before it becomes nonmagical? I know the book says "a few minutes," but what does that really mean?`,
            answer: [
                `The table was accidentally printed on page 160 of the ***DMG***, under the heading ***"BAG OF TRANSMUTING."*** Individual DMs are free to define "a few minutes," but I suppose 2-5 minutes is a good base value. The real intent behind the "few minutes" comment is to say that a character is free to empty the purse and get his daily crop of coins, but must put at least one coin back in before he goes off and does anything else. Most DMs rule that a coin of each type must be present to get the full effect; for example, if a purse could produce silver, electrum, and gold, then leaving just one silver piece inside would keep it functioning—but the next day it would produce only silver pieces.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '71',
            question: `How come chain mail costs less than armor that doesn't protect as the wearer well? Chain mail, for instance, costs 75 gp, vs. 120 gp for scale mail. This is a misprint, right?`,
            answer: [
                `No misprint. Scale mail costs more to make than chain mail, but its older, less efficient design makes it inferior to chain mail. The same goes for ring mail (cost 100 gp). People who know how to make chain mail needn't bother with scale or ring mail. What kind of armor is available in any given campaign depends on the time period in which the game is set (see the ***DMG***, page 35).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '71',
            question: `Can a ***ring of spell storing*** containing a ***find familiar*** spell enable a nonwizard character to summon a familiar? How long would it take to cast ***find familiar*** from a ***ring of spell storing***? How does the "one attempt per year" rule apply to characters using a ***ring of spell storing***?`,
            answer: [
                `It is perfectly reasonable to say that only wizards have the mental training to maintain the empathic link between master and familiar. It also is perfectly reasonable to say that a ***ring of spell storing*** is powerful enough to make any spell stored within it work for the ring's owner. Individual DMs must decide on their own which is the case. Any spell cast from a ***ring of spell storing*** has a casting time of five. The character who puts the spell into the ring, however, must go through the spell's normal casting procedure. In this case, the wizard must fire up the brazier full of incense and spend up to 24 hours casting. Note that this makes it very unlikely that ***find familiar*** will be found in a ***ring of spell storing*** and even more unlikely that NPC spell-casters can be hired to restore it to the ring. The "one attempt per year" limit applies to both the ring and the owner; that is, only one attempt can be made each year with any given ring, and a character who has two rings cannot try to summon a familiar twice in the same year by using each ring once.`,
            ],
            comment: `Rings have a general initiative modifier of +3. ***Ring of spell storing*** is specifically mentions a cast time of 5. From the description it sounds like the spells cast via the ring can be interrupted.`,
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '71',
            question: `My wife and I have a continuing argument over the properties of the ***vorpal blade***. She insists that strength bonuses are considered when determining whether the weapon severs a victim's neck. I point out that the footnote on page 186 of the ***DMG*** says only the sword's +3 bonus affects the score required to sever.`,
            answer: [
                `This is probably the first time I've been asked to settle a domestic argument. Bonuses for strength, specialization, spells (such as ***bless*** or ***prayer***), situation (opponent surprised, prone, etc.), or the like do not affect the score needed to sever. Thus, it is quite possible to solidly hit an opponent, due to a good roll and high bonuses, but not sever his neck. In fact, the table could—and probably should—read as follows (the same table can be used for the ***sword of sharpness***):`,
            ],
            image: 'sage_advice_158_q05.png',
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '71',
            question: `The ***PHB*** says that rogues can have a maximum score of 95% in each of their special abilities, but the ***DMG*** has a table on page 23 that shows scores of 99%. However, the same table in the ***Dungeon Master's Screen*** shows no score above 95%.`,
            answer: [
                `The maximum score is 95%. The table in the ***Dungeon Master's Screen*** corrects Table 19 in the ***DMG***.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '71',
            question: `Will a ***girdle of dwarvenkind*** allow a nondwarf to get full benefits from a ***hammer, +3 dwarven thrower***?`,
            answer: [
                `No; nor will the wearer suffer magical item malfunctions as dwarves do (see the ***PHB***, page 21).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '71',
            question: `What is the correct formula for a fighter's individual experience awards, as listed in the ***DMG***, page 48? Does the fighter's level change the award? Is the award given for every monster the party defeats?`,
            answer: [
                `The formula is the monster's hit dice multiplied by 10. The word "level" is a misprint. All individual awards are just that; they are awarded to characters who do things without help from other characters. For fighters, the individual award for defeating a monster is made after a one-on-one contest.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '71+74',
            question: `How come red dragons in the ***Monstrous Compendium*** have fewer hit dice than blue dragons and no more hit dice than green dragons? What does the red dragon's THAC0 entry, "7 (at 9 HD)," mean? Also, the example in the general information section says that a black dragon's base hit dice is 10, but the black dragon's description says the base is 12 HD.`,
            answer: [
                `There is a typo in the red dragon's statistics. A red dragon's base hit dice is 15; a black dragon's base hit dice is 12 (the example is wrong). All dragons' THAC0s are determined by their adjusted hit dice, so a hatchling red dragon (9 HD) has a THAC0 of 11.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '74',
            question: `Is there some mistake in the horse listing in the ***Monstrous Compendium***? I mean, simple riding horses have more hit dice and a better THAC0 than light or medium war horses, and they move a lot faster than medium war horses.`,
            answer: [
                `There sure seems to be an error. If you want to cut riding horses down to size, just treat them as light war horses with one attack (a bite) for 1-2 hp damage. Regardless of statistics, non-war horses are nervous creatures that are more likely to flee than to fight.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '74',
            question: `What do the "juvenile" entries in the ***Monstrous Compendium's*** giant experience-point value entries mean? Why are young giants treated like adult giants of different species? Shouldn't young giants have abilities that reflect those of adults of their own race? If young giants are treated as adult members of other races, shouldn't you use those races' experience values? Just how tall are young giants?`,
            answer: [
                `Those mysterious experience-point values are part of an aborted attempt to do just what you suggest—extrapolate juvenile abilities from adult abilities. However, this was dropped during the editing process to keep things simple and to keep the revised giants more compatible with the ones in the AD&D 1st Edition game. The juvenile experience-point values were printed in error and should be ignored; use the experience values from the appropriate race when making experience awards for juvenile giants.`,
                `If you want to derive young giants' abilities from adult members of the race, here's the discarded system: To determine an immature giant's age randomly, roll 1d4 A roll of 4 indicates an infant with no combat abilities and -4 hit points per die (minimum 1 hp/HD). Other rolls indicate juveniles with penalties to hit points, attack rolls, and damage done equal to the die roll. Juveniles in the -3 category also do one less die of damage per blow. For example, a -1 hill giant juvenile would have -1 hp/HD (with a minimum of 1 hp/ HD) and a THAC0 of 10, and would do 1d6 - 1 hp damage with its fists or 2d6 + 6 with a club. A -3 hill giant has -3 hp/HD, a THAC0 of 12, does 1d6 -3 hp damage with its fist or 1d6 +4 with a club. Juveniles can hurl rocks; their minimum range is the same as an adult's, and the maximum range is equal to the adult maximum minus a value equal to 10 yards times the juvenile's combat penalty; the combat penalty also is subtracted from each die of damage that the rock does (minimum of 1 hp/damage die). For example, a -1 juvenile hill giant can hurl a rock from three to 190 yards for 2d8 - 2 hp damage.`,
                `Infant giants are less than one-quarter the height of an adult, but are usually not less than one-sixth adult height. Juveniles are anywhere from one-quarter adult height to full adult height; a -3 juvenile would be from one-quarter to one-half adult height, a -2 juvenile would be from one-half to three-quarters adult height, and so on.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '74',
            question: `Can you play the FRE-series Avatar modules alter reading the books?`,
            answer: [
                `According to Avatar project coordinator Jim Lowder, the story as told in the three, Avatar books—***Shadowdale***, ***Tantras***, and ***Waterdeep***—does not compromise play of the modules at all. The books tell the story of a group of fallen deities struggling to regain their powers. The modules deal with the mortals who help them.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '159',
    publication_year: '1990',
    publication_month: 'July',
    foreword: `Once again, the sage tours the AD&D® 2nd Edition game, with some scenic stops in unusual areas. ***DMG*** is the 2nd Edition ***Dungeon Master's Guide***.`,
    sage_advice: [
        {
            page_number: '39',
            question: `The description of the troll in the ***Monstrous Compendium*** says that any hit with a "natural" 20 severs a limb. Does this apply to attacks against other creatures? If not, why does the game have the seventh- level priest spell ***regenerate***?`,
            answer: [
                `Trolls are thin and rubbery, and are prone to being hacked apart, although hacking apart a troll doesn't do much good. Unless the DM creates his own critical-hit system, it's not possible to hack limbs off other creatures in combat. However, ***swords of sharpness***, monsters such as green slime, crude forms of medieval justice, and many other hazards in the game can lead to the loss of limbs—hence the ***regenerate*** spell.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '39',
            question: `The ***Monstrous Compendium***, Volume One lists statistics for greater rakshasas, but gives no experience-point values for them.`,
            answer: [
                `Greater rakshasas are the Rhuks, Rajahs, and Maharajahs.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '39',
            question: `One of my players wants to run an ultimist character from POLYHEDRON™ Newszine issue #23. This is a powerful class. Is it intended for PC use or just for NPCs?`,
            answer: [
                `Neither. The ultimist is a piece of satire. In this case, the mockery is directed at players who insist on having characters who can do anything and everything. Try not to laugh too hard if you player asks about playing an ultimist again.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '39',
            question: `When can we expect to see rules for psionics in the AD&D 2nd Edition game?`,
            answer: [
                `A handbook on psionics is tentatively scheduled for release in early 1991. Stay tuned for further developments.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '39',
            question: `How much does it cost to build a castle, tower, or other fortification? I couldn't find this information in the ***DMG***.`,
            answer: [
                `This information is presented in DMGR2 ***The Castle Guide*** (TSR Product #2114), available now.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '39',
            question: `Can a ***spellfire*** wielder (from FR7 ***Hall of Heroes***, pages 49-50) ever return to his original class? Can a ***spellfire*** wielder absorb clerical spell energy? If so, is this voluntary or involuntary? What happens to ***spellfire*** wielders who absorb more energy than their limit? How do you determine if a character can have ***spellfire*** ability?`,
            answer: [
                `A character with ***spellfire*** powers never actually leaves his original class. However, to gain experience in his original class, the character must refrain from using any ***spellfire*** abilities during an adventure. If the character does use a ***spellfire*** ability, all experience earned during that adven- ture goes toward the character's ***spellfire*** level, except for individual experience awards for the character's original class (see the ***DMG***, page 48), which are lost.`,
                `***Spellfire*** wielders can absorb magical energy from almost any source: spells of all types, breath weapons, gaze attacks, and just about anything else. At the 1st level of ***spellfire*** ability, absorption is involuntary; the character drains any magic with which he comes in contact, including useful magical items and healing spells (only rest or nonmagical healing can heal damage to the character). Absorption is strictly voluntary at 2nd level and above.`,
                `Exactly what happens if the character exceeds his limit is unrevealed. I suggest that either the character becomes unable to absorb more energy once he reaches the limit and consequentially is affected normally by any magic with which he comes in contact while "full," or he absorbs the excess and automatically releases one level of energy each segment (10 times per round), suffering 1-6 hp damage each time, until his total energy falls back into the "10 x constitution" category.`,
                `***Spellfire*** is a variant type of magic created by Ed Greenwood in his novel of the same name. Only the DM can decide if a particular character can have the ability. It seems likely that only one ***spellfire*** wielder can be alive at a time on any given world, and that the ability is hereditary.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '39',
            question: `Why can't halflings be rangers? Halflings can be clerics, and rangers have a few clerical spells. Why can't gnomes be bards? Gnomes are known for their sense of humor and should have access to some kind of jester-type abilities. Why can't [my favorite race] become [my favorite class], since [several dozen good reasons why this race/class combination is justified exist]?`,
            answer: [
                `Game logic and game balance require that demihumans have limited character-class options. According to game logic, halflings don't become rangers because they aren't inclined to be. Halflings who really like the outdoors and nature become druids. Halflings who are nimble and good at hiding become thieves; that's just the way halflings are. Gnomes who feel roguish become thieves themselves. Those who tend toward flashy expositions become illusionists. (Illusionists, by the way, have an almost infinite capacity for vivid storytelling and practical jokes, as even a quick look at the spells in the illusion/ phantasm spell school will show.)`,
                `Only humans have the ability to become any class they want to be (ability scores permitting), and they can advance all the way to level 20. That's what makes humans unique. Demihumans have completely different psychological, physical, and spiritual makeups from humans; that's what makes each demihuman race unique. Overall, demihumans are not nearly so versatile or adaptable as are humans, because all have special skills and limitations derived from their heredity and culture that simply close some doors to them when they seek professions. Game balance requires that each race in the game be equally playable. If demihumans—with their infravision, special resistances, and special abilities—could freely choose from every character class in the game, there wouldn't be much reason to play a human character. As I've said before, the D&D® and AD&D games are games of choices; to get something, you've got to give up something else. Good players make the right choices most of the time and know how to capitalize on their characters' strengths while finding ways to circumvent their weaknesses. While changing the rules to eliminate character weaknesses is one way to circumvent them, it isn't a clever or heroic one.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '160',
    publication_year: '1990',
    publication_month: 'August',
    foreword: `This edition of "Sage Advice" looks at the major fantasy settings for the AD&D® game. Note that some of the older materials for these settings were designed for the AD&D 1st Edition game (e.g., ***DRAGONLANCE® Adventures***, herein known as ***DLA***).`,
    sage_advice: [
        {
            page_number: '32',
            question: `In issue 143, you said that Raistlin Majere's vision shows the effects of time only on living things. But in "Raistlin's Daughter," (in *Love and War*, page 286), Raistlin sees rocks crumbling to dust.`,
            answer: [
                `First, there are subtle differences between Krynn as described in the novels and Krynn as described in the game products. This is inevitable, since game materials have to be both self-consistent ***and*** playable. So, when you're playing a game set in Krynn, Abeir-Toril, or Oerth, follow the details given in the game products—if they differ from the books, it's probably for a good reason.`,
                `Second, if you reread that page carefully, you'll find that Raistlin isn't actually seeing rocks crumble; he just says he sees rocks crumble. Raistlin wouldn't be above bending the truth now and again if it suited his purposes.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `"Love and War" also includes a brief encounter with a half-orc. Are there orcs on Krynn?`,
            answer: [
                `Krynn has no orcs. The reference is due to an error in the narrative; the character in question probably had some ogre or goblin blood.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `Please give the height, weight, average lifespan, and base movement rate for each of the 13 major races on Krynn, including the irda and the minotaurs.`,
            answer: [
                `Complete information on each race is given in the DRAGONLANCE Appendix to the ***Monstrous Compendium*** (MC4, volume 4, TSR product #2105). To randomly generate height, weight, and maximum age, use the information given on page 24 of the 2nd Edition ***Players Handbook*** unless MC4 directly contradicts it. For irda, I suggest the following: base height 62", variable 2d10"; base weight 120 lbs., variable 6d10 lbs.; base starting age 100 years, variable 3d12 years; base maximum age 400 years, variable 2d100 years. For minotaurs, I suggest: base height 74", variable 2d10"; base weight 300 lbs., variable 8d10 lbs.; base starting age 18 years, variable 1d4 years; base maximum age 105 years, variable 2d20 years.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `I'm having trouble the Character Racial Minimum & Maximum Table on page 117 of ***DLA***. In the "Accepted Classes" column, what do the letters mean?`,
            answer: [
                `These are abbreviations for character-class names. The abbreviations and their meanings are from the Character Class Master Statistics Range Table, also on page 117. Note that the barbarian and acrobat classes have been removed from the AD&D 2nd Edition game; if you want them, either use the rules from the 1st Edition game or assign the character the appropriate kit from the ***Complete Fighter's Handbook*** or ***Complete Thief's Handbook***.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `Which class's combat chart do tinker gnomes use? How quickly do tinker gnomes gain proficiencies? ***DLA*** contradicts itself on this point. Also, do tinker gnomes have any alignment restrictions?`,
            answer: [
                `A tinker gnome with enough common sense to fight with a simple weapon in- stead of an outrageous gnomish device uses the magic-user THAC0 chart (see the Rule Book of Taladas, pages 3-4, from the ***Time of the Dragon*** boxed set). Tinker gnomes gain one weapon and two non- weapon proficiencies every three levels, as indicated in ***DLA***, page 117. Most tinker gnomes are lawful good or neutral good, though any nonevil, nonchaotic alignment is acceptable.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `Which weapons, armor, and magical items can tinker gnomes use? Can they use proficiencies from the AD&D 2nd Edition game? If so, which ones?`,
            answer: [
                `Tinker gnomes can become proficient in any weapon that creatures their size could use, but they wear no armor. Generally they disdain magic, but PC tinkers can use any magical item except those usable only by bards, wizards, clerics, or their sub-classes. When using proficiencies from the AD&D 2nd Edition game, tinkers can choose proficiencies from the following groups: general, priest, and wizard. Rogue and warrior skills can be selected at double-normal cost.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `How many draconians can be produced from a single dragon's egg? Is there a process that produces different kinds of draconians from evil dragon eggs?`,
            answer: [
                `One egg produces multiple draconians (***DLA***, page 73). DL9 ***Dragons of Deceit***, page 41, area L23, includes a scene in which 4d12 sivak draconians are hatched from a single silver dragon egg. It might be possible to produce new races of draconians from evil dragon eggs, but neither the good nor the evil dragons, nor their deities or servants, have been inclined to look for such a way.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `***DLA*** says that Krynn has no assassins or monks, yet the deity Majere is said to be a patron of monks. Also, kender are specifically prohibited from being assassins; why would a prohibition be necessary unless there was an assassin class?`,
            answer: [
                `There are no monk or assassin character classes on Krynn. However there are cloistered religious orders of clerics dedicated to the gods, and these clerics may be labeled "monks" in the historical sense of the word. Beings who kill other beings for pay are generally known as assassins; note also that the assassin kit from the ***Complete Thief's Handbook*** is available for Krynn campaigns.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '32-33',
            question: `I've noticed that although wizards of the Red Robes are allowed to cast invocation spells, the rule books list no wizard spells of this type; its use seems to be restricted to clerical spells. Also, the spell ***kiss of night's guardian*** is listed as an evocation spell; does this mean that only wizards of the White Robes can cast it?`,
            answer: [
                `As shown in the Krynn spell summary (see ***DLA***, page 126), invocation and evocation spells are part of the same group. Spells that create something out of virtually nothing or that release raw power fall into this category. Generally, "invocation" implies that the effect comes as the result of a petition to a greater power, while "evocation" implies the effect was compelled. This is why most clerical invocation/evocations are listed as invocations. The fact that the order of the Red Robes calls its invocation/evocation spells "invocations" could give a clue to its basic approach to magic, or it could be just a clever use of names.`,
                `Exactly who can cast ***kiss of night's guardian*** is unrevealed. It seems to be the personal prerogative of the master of the Tower of High Sorcery at Palanthus.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `Do the minotaur and irda races get racial modifiers for thieving skills? Do the other races on Krynn get such modifiers for their corresponding races?`,
            answer: [
                `Minotaurs cannot become thieves. Irda have no racial adjustments to thieving skills. The other races and their subraces get the standard racial modifiers as described in the 2nd Edition ***Players'Handbook***, page 39; kender use the halfling modifiers, all subraces of elves use the elf modifiers, and so on.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `Please give the weapon statistics for the kender hoopak.`,
            answer: [
                `A hoopak is a cross between a bo staff and a staff sling. When used as a staff, its statistics are: type B; speed factor 4; damage 1d6/1d4. As a sling, the statistics are: type B; speed factor 11; damage 1d4 + 1/ 1d6 + 1; rate of fire 2/1; range 3-6 (medium), 6-9 (long). (The hoopak has no short-range category and cannot be used against targets closer than 30 yards.) Hoopaks weigh two pounds. They usually cannot be purchased; a relative or friend gives an adventuring kender his first hoopak. If found and sold, a hoopak might bring as much a one steel piece; kender themselves are not prone to purchase hoopaks from nonkender, and they always arrange to "pick up" any hoopak they see in nonkender hands.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `Isn't there an error in the River of Time section on pages 86-87 of ***DLA***? According to this chronology, Huma defeated the evil dragons in 2645 PC, but the Knights of Solamnia weren't founded until 1225 PC. Since Huma was a Knight of Solamnia, wasn't he 1,400 years too early?`,
            answer: [
                `Actually, the River of time puts Vinas Solamnus, founder of the Knights of So- lamnia, 1,400 years too late. The order was founded in 2692 PC. The year 1225 PC is erroneously reported as the year of founding probably because the order's oath and measure were either written or extensively revised that year.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `Do clerics of the Holy Orders of the Stars get bonus spells for high wisdom scores? Do clerics of Solinari, Lunitari, and Nuitari get bo- nus spells? Do they also get magic-user spells?`,
            answer: [
                `Clerics of the Holy Orders of the Stars do get bonus spells for high wisdom scores. Solinari, Lunitari, and Nuitari have no clerics.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `Where can I get detailed information about the Valley of the Mage?`,
            answer: [
                `The last word on the Valley of the Mage can be found in module WG12 ***Vale of the Mage*** (TSR Product #9270).`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `Can zero-level characters, as described in Appendix 1 of the book ***GREYHAWK® Adventures***, retain and use abilities from other classes once they choose a class? Once they pick a class, can they use unspent attribute points for additional abilities?`,
            answer: [
                `Once a zero-level character chooses a class, he can keep abilities from other classes only so long as he pays the experience penalty from the table on page 125, ***and*** so long as he practices the skill between levels. If the character gains a new level for ***any*** reason without practicing the skill at least once, the skill is lost. All unspent attribute points are immediately converted to experience points, at the rate of 10 xp per ap, when the character chooses a class. Once these remaining attribute points are converted, the character cannot gain new skills from other character classes.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `How can zero-level characters accumulate so many hit points, then abruptly lose them when advancing to first level? Are the experience penalties on page 125 cumulative? If so, what happens to a character who has penalties totalling more than 100%? What constitutes practicing a skill?`,
            answer: [
                `Zero-level characters are untried, enthusiastic, and flexible; this gives them leave to obtain a whole range of abilities that less callow adventurers can't get (as explained on pages 117-118). However, the shortcuts, blind stabs, and side explorations beginners make ***must*** be abandoned if they are ever to become really skilled at anything. Thus characters have to do a little backstepping when they reach first level. The experience penalties ***are*** cumulative, but optional. A character can drop a skill and avoid the experience penalty at any time. In the case of penalties totalling more than 100%, the character ***must*** abandon skills until the penalties total 100% or less. DMs are free to set their own standards for skill practice. I suggest the characters practice their skills during nonadventuring time according to the rules on page 119. The character must accumulate as many study points as originally required to learn the skill, and retains the knowledge for three months per study point earned. If a character successfully uses a skill one or more times during an adventure, extend his knowledge one month.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `The beginning of the deities section in ***GREYHAWK Adventures*** says that clerics get their special powers "during times of special need." What defines a time of special need?`,
            answer: [
                `Clerics of Greyhawk deities get their special abilities when they fulfil the requirements for getting them as described in the section on each deity. However, the ***head*** cleric at a temple always can, in time of need, call on spell-like powers granted by the deity—even if the cleric is of insufficient level to have the ability and even if the cleric has "used up" his daily allotment of the ability. The DM must decide what events are times of special need as they arise, but they always should include times when the temple is being invaded and any time the deity's power is in question and the cleric must—or should— demonstrate it.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `What deity or deities are venerated by the elves in Celene (including Enstad) and in the Duchy of Ulek?`,
            answer: [
                `Ehlonna is the primary deity among the elves in Ulek and Celene, and she has a strong following among elves everywhere else on Oerth.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `Who allies with Celene and Ulek against the humanoids in the Pomarj?`,
            answer: [
                `Usually Veluna and Furyondy do so.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `Are the population figures given for Duchy of Ulek and its capital, Tringlee, for humans or elves?`,
            answer: [
                `In any entry, the figure given for population is the area's ***human*** population. When actual numbers are given for demihumans or humanoids, these are in addition to the human population. Numbers given for city populations are the total number of beings (human, demihuman, etc.) living there; unless noted otherwise, the distribution of races is the same for the country as a whole. In the case of Tringlee, the population is about 55% elvish and 45% human with a smattering of gnomes.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '33',
            question: `What race is Lewenn, Count Palatine of Ulek?`,
            answer: [
                `Lewenn is probably human. Generally it is safe to assume that a country's ruler is human unless his description says otherwise.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '161',
    publication_year: '1990',
    publication_month: 'September',
    foreword: `This edition of "Sage Advice" continues to examine the major fantasy settings for the AD&D® game. Krynn and Oerth were covered last month; this month we visit Abeir-Toril.`,
    sage_advice: [
        {
            page_number: '88',
            question: `Which of TSR's modules are set in the FORGOTTEN REALMS setting?`,
            answer: [
                `Only products with the FORGOTTEN REALMS banner on the front cover are actually intended for use in this setting. A complete product bibliography (good up to March 1990) appears on page 154 of the AD&D 2nd Edition hardbound volume ***FORGOTTEN REALMS Adventures***. Of course, a clever DM could place almost any adventure in one of the many unexplored corners of the Realms.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `Where is the game information on the magical book, ***The Tome of the Unicorn***, described? The table at the back of FR4 ***The Magister*** says information is given on page 41 of the DM's ***Sourcebook of the Realms***, but the information given there is pretty spotty.`,
            answer: [
                `Full details on ***The Tome of the Unicorn*** are given in the DM's ***Sourcebook of the Realms***, pages 92-93.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `Where can I find a full description of the ***greenstone amulets*** worn by the Flaming Fist mercenary com- pany? I understand these items can recharge themselves; how often can they do this?`,
            answer: [
                `A description of the ***greenstone amulet*** is included in FR4 ***The Magister*** (TSR product #9229). A ***greenstone amulet*** automatically begins recharging itself whenever its charges drop to zero. The amulet spends 1d4 x 11 turns recharging itself, gaining one charge each turn. It remains nonfunctional during recharging.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `There are several wands and staves described in FR4 that can explode if broken accidentally. Will they also explode if broken deliberately, even by nonwizards?`,
            answer: [
                `These items are *extremely* unstable and will indeed explode if broken deliberately, even by nonwizards. Note that this is not the case with normal items. Most wands and staves do not explode when broken in any fashion. The more powerful items, such as the ***staff of the magi***, explode only when held and broken by a wizard who deliberately calls for a retributive strike.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `Volume 1 of the ***Kara-Tur*** boxed set mentions a new scholar character class (on page 18). Where can I find information on this class?`,
            answer: [
                `The "class" mentioned on page 18 is that of the mandarins, which is a *social* class in Shou Lung, not a character class. Check out the section on the mandarinate on page 7 for details.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `There is at least one character in the FORGOTTEN REALMS novels who fights with a scimitar in each hand. How is this possible, since a scimitar is a size M weapon?`,
            answer: [
                `The character you are thinking of is Drizzt, from the Icewind Dale trilogy. In this particular case, there is a game rule that covers the use of a medium-size weapon in each hand. See the notes on the two-weapon style in the fighting styles section of the ***Complete Fighter' s Handbook***, pages 61-64.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `Will there be a FORGOTTEN REALMS atlas?`,
            answer: [
                `*Yes*. The ***FORGOTTEN REALMS Atlas*** (TSR product #8442) is due for release this August and will cost $15.95/£10.95.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `We all know that Elminster does a lot of traveling. Has he ever been to Oerth or Krynn?`,
            answer: [
                `Perhaps, but he's not saying.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `When reading the sourcebook FR1 ***Waterdeep and the North***, I had trouble finding some of the features mentioned in chapter one on the maps provided with the boxed set.`,
            answer: [
                `Check out TM4 ***City of Waterdeep Trail Map*** (TSR Product #9401) or the map showing Waterdeep in FR5 ***The Savage Frontier*** (TSR Product #9233). Also see "Welcome to Waterdeep," in DRAGON issue #128, which has a map and other materials that were dropped from FR1.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `Exactly what kind of landscape is indicated by "clear" terrain areas on the various Realms maps?`,
            answer: [
                `Clear terrain is rolling and open, and generally free from major obstacles such as impenetrable forests, mountains, etc. Most clear terrain is plains or farmland, but there also can be low hills, solitary trees, clumps of woodland, and gullies.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `To what scale are the various city maps found in the ***Cyclopedia of the Realms*** (from the ***FORGOTTEN REALMS*** boxed set) drawn?`,
            answer: [
                `The scales vary from map to map because cities of different sizes were presented in the same-size spaces. You can get a rough idea of the scale for each map by looking at the narrow sides of the buildings shown; most are about 20' long.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88',
            question: `What are the scales of the various FORGOTTEN REALMS maps sup- posed to be? I have them all, and some of the scales seem to be at odds with the others.`,
            answer: [
                `The two continental maps in the boxed campaign set are drawn at 1" = 90 miles. The area detail maps in the boxed set and in the modules are 1" = 30 miles. The keys on the trail maps show the scale as 1" = 90 miles, but this is a misprint. The scale-of-miles bar at the upper right-hand corner indicates that 1" = about 142 miles, a scale that works quite well when you compare distances between major landmarks shown on both the trail maps and the continental maps.
`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '88-89',
            question: `When will the replacement maps for the boxed campaign set be available?`,
            answer: [
                `New maps are already available. However, the only difference between them and the maps in the early print runs of the boxed set are the colors. The current maps have colors that match the map colors in the modules and in the ***Kara-Tur*** boxed set. If you have older maps (ones with pale blue oceans and light beige clear areas), you can get color-corrected maps by sending $5.00 to the Mail Order Hobby Shop and requesting replacement maps for product number TSR1031. The address is:`,
                `The Mail Order Hobby Shop`,
                `P.O. Box 756`,
                `Lake Geneva WI 53147`,
                `U.S.A.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '89',
            question: `I'm having a lot of trouble fitting the ***City of Waterdeep Trail Map*** with the ***Kara-Tur Trail Map***. The closest match I can get leaves a big gap near the Great Sea and a rather abrupt end to the Dust Desert.`,
            answer: [
                `Here's how things were explained to me: The Waterdeep map is drawn from a western perspective. The farther east you go, the less accurate it gets because westerners don't know a lot about the East. Likewise, the Kara-Tur map is drawn from an eastern perspective and gets less accurate the farther west you go. In any event, remember that the boxed sets are meant to be campaign settings. Each DM's campaign is going to be a little different. An area where even the published information is uncertain provides the DM with at least one mysterious place where only he knows what's going on (at least until PCs actually explore it).`,
                `It sounds to me like you're going about fitting the maps together in the right way. The maps match pretty well if you just line up the borders, but you have to adjust a little to match the city of Solon (which is shown on both maps) and the southern and northern coastlines. When overlapping the maps, I suggest putting the ***Kara-Tur*** map on top, as the mountains east of Solon really are there. Individual DMs will have to decide where the Dust Desert really ends—the edges would vary with the annual weather anyhow. The empty gap in the south is unexplored territory, but there has been some discussion of filling it in with an Arabian land.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '89',
            question: `What is the polar circumference of Abeir-Toril?`,
            answer: [
                `Abeir-Toril's exact dimensions are unrevealed, but the planet is roughly Earth's size. This would make its equatorial circumference about 25,000 miles. The polar circumference would be slightly less, about 24,900 miles.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '89',
            question: `How can a PC become a Red Wizard of Thay?`,
            answer: [
                `The Red Wizards are nasty, reprehensible, and generally subject to the whims of their superiors. This makes them unsuitable for use as PCs in most campaigns. However, ***FORGOTTEN REALMS Adventures*** (TSR product #2106) contains basic information on the Red Wizards, including how to get in (see page 127).`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '89',
            question: `Would it be accurate to assume Chult is an African setting?`,
            answer: [
                `No. Chult is more akin to Conan Doyle's ***Lost World***, complete with dinosaurs, lost tribes, etc.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '89',
            question: `Can PCs who travel from Faerun to Kara-Tur learn martial arts or other Oriental proficiencies? Can western races adopt Oriental classes? For example, can there be elven samurai?`,
            answer: [
                `Western (gajin) characters can learn Oriental proficiencies if they can find Oriental masters to teach them. Finding such masters should require lots of good fortune, skillful role-playing or both. Since there are spirit folk samurai, I see no reason why elves couldn't also become samurai (maximum level 12) with proper sponsorship. However, the samurai are a social class as well as a character class, and first-generation gajin samurai of any race would be rare indeed.
`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '89',
            question: `The maps to module N5 ***Under Illefarn*** have many numbered rooms that aren't described anywhere in the text. Is there dropped text, or are these rooms simply empty? Where do the stairways on maps 14 and 15 (areas G and H) lead?`,
            answer: [
                `The undocumented areas have no fixed contents. There can be random encounters, such as patrols, in these rooms, or individual DMs can populate them as they see fit. The westernmost stairway in map 14 (room 113) leads up to map 16, room 121. The north stairway (off the central corridor) leads up to map 15, room 114. The south stairway leads up to map 17, room 124. The central stairway on map 15 leads down to map 14, as already described. The eastern stairway leads up to map 16, room 118.
`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '89',
            question: `What lies on the other side of The Spine of the World mountains? A friend told me it's the WORLD OF GREYHAWK® setting.`,
            answer: [
                `All of what lies to the north of The Spine of the World is unrevealed, though the ***City of Waterdeep Trail Map*** indicates that the southern edge of the Endless Ice Sea begins there. However, the WORLD OF GREYHAWK setting lies on another planet, Oerth. The SPELLJAMMER™ supplement contains rules for traveling between Oerth, Abeir-Toril, and other fantasy worlds. Of course, DMs are free to construct their campaigns as they see fit, and there's nothing wrong with lumping the two settings together on one world.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '89',
            question: `I remember seeing something about flying ships in the Realms. Are these spelljammers?`,
            answer: [
                `No, they are not, though many of the rules governing spelljammers also would apply to them. The only details ever re- vealed about these ships were published in the article "Sailors on the Sea of Air," in DRAGON issue #124.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '89',
            question: `It seems to me that there are no libraries in the Realms. Candlekeep charges an outrageous fee just to browse, but shouldn't there be some place where a character can go to improve his knowledge?`,
            answer: [
                `Modern-style libraries where visitors have free access to the books are unknown in the Realms. There are, however, plenty of libraries. Sages, guilds, and governments keep extensive collections of books and scrolls, but access to them is on a need-to-know basis (or pay-as-you-go, in the case of sages). For example, any large and prosperous shipwrights' guild would have a library with volumes on ship design and construction, carpentry, forestry, logging, blacksmithing, rope making, weaving, sewing, and a host of other subjects, both practical and esoteric, related to shipbuilding. Members would use the library as a resource for training new members and for answering difficult or unforeseen questions that might come up during day-to-day business. The guild also would jealously guard its library to prevent competitors in other cities from learning its professional secrets and to prevent those people who are not guild members—like adventurers—from learning how to build their own ships and putting dues-paying guild members out of work. Though literacy is more common in the Realms than it was in the historical medieval world, the people of the Realms understand that knowledge is power and they do not share it readily.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '89',
            question: `I would like to use the rental villas in Waterdeep (as described in the ***City System*** boxed set) in my campaign. How big are they and how much do they cost to rent?`,
            answer: [
                `According to Jeff Grubb, each villa has 9 to 12 rooms on two or three floors, plus a basement. The cost to rent one depends on the building's size and condition; 400-600 gp per month is a good range.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
        {
            page_number: '89',
            question: `Some of the Street Scenes tables in the ***City System*** set are missing the numbers 81-88. Other tables have two entries numbered 105. How do you get around those flaws when using the tables in play? Also, each table goes up to number 120. This is fine, but the instructions on page 15 say to roll percentile dice and add or subtract one or more modifiers also given on page 15. The highest total modifier is +6, so how can you get a total of 120? What do you do if a negative modifier gives you a result of less than one?`,
            answer: [
                `The missing and duplicated numbers are probably typos. Treat a result of 81-88 as either an 80 or an 89, as you wish. Likewise, just pick one of the two listed entries on a result of 105. The text on page 15 says to add +20 to the roll for all encounters that take place after dark, though this is not shown on the table. (The correct modifier for Night scenes is +20. The modifier for Witching Hour scenes is +19). Treat any negative result as a 1, and treat any result of 121 or more as 120.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '162',
    publication_year: '1990',
    publication_month: 'October',
    foreword: `Once again, the sage looks back to re- consider some old advice. Page numbers refer to rulebooks for the AD&D® 2nd Edition game.`,
    sage_advice: [
        {
            page_number: '32',
            question: `I could not believe my eyes when I read your answer to the question about the cost of chain mail in issue #158. I, too, thought the prices had been misprinted. Your response that scale mail costs more to make than chain mail is idiotic and grossly unhistorical. Chain mail is made of wire (itself difficult and expensive to make) that is formed into links that are interlocked, then soldered or welded together. In the fourth and fifth centuries A.D., a Roman armorer, using techniques that remained essentially unchanged throughout the Middle Ages, could make four or five suits of chain mail a year. By contrast, scale mail uses metal plates—not wire—that are simply sewn onto a leather shirt.`,
            answer: [
                `To reiterate, the base cost of chain mail in the AD&D 2nd Edition game is 75 gp, and the base cost of scale mail is 120 gp. Itemized breakdowns of the costs of manufacture for each type of armor are given on page 6 of the ***Complete Fighter's Handbook***. Your estimate of the construction time for chain mail agrees with the table in the ***Complete Fighter's Handbook***, where an unsupervised apprentice working in a properly equipped shop can make a suit of chain mail in 10 weeks (5.2 suits a year). However, *two* apprentices working under the same conditions take eight weeks to make a suit of scale mail (16 man-weeks in all). Scale mail requires more raw materials (60 gp worth) than does chain mail (38 gp worth); chain mail's rings require less labor and metal than scale mail's plates.`,
                `Note, however, that chain mail and scale mail come from two different historical periods. (See the ***Dungeon Master's Guide***, page 35, for a discussion of time periods in the AD&D game and their associated technology.) Scale mail, an ancient armor type, had all but disappeared by the time chain mail came into common use during the Middle Ages. Obviously, if you have a campaign set right on the borderline between the end of the Ancient period (when the ***DMG*** says chain mail doesn't exist at all) and the beginnings of the Dark Ages, about 1100 A.D. or so, chain mail is going to be very expensive. There are several reasons for this. First, chain mail would represent the newest and best concept in body armor—keeping up with the latest developments is always costly. Second, the manufacturing techniques and advanced metallurgy that made chain mail economical to manufacture during the Middle Ages would not yet have been invented. Third, from a campaign standpoint, chain mail *should* be more expensive than scale mail; you can kiss your play balance goodbye if the best armor available isn't also the most costly. You are free to set your own cost for chain mail in such a setting, but I recommend at least double (150 gp) and triple (225 gp) normal prices would not be unreasonable. Furthermore, chain mail in this setting probably would be made of iron, not steel, as the equipment list in the ***Player's Handbook*** assumes. Such chain mail would weigh 50 lbs. instead of the listed 40 lbs., or 25% more (see ***DMG***, page 38).`,
                `Speaking of the "unhistorical": One does not have to have wire to make chain mail. The Romans used rings cut, punched, or drilled from sheets of metal. The Romans and ancient Chinese probably also had access to cast rings. Wire was pretty rare in medieval Europe, and most wire was gold, silver, or copper for use in jewelry and adornments. Medieval armorers almost certainly made their chain mail from rods that they forged themselves from ingots or bars; this is not as difficult as it sounds, especially when the armorer knew what he was doing and had his whole life to practice the skill. (Note that making a rod from a chunk of raw metal takes a lot less hammering than what would be required to make a flat plate out of the same piece of metal.) Furthermore, the chain mail currently preserved in museums and private collections is not soldered or welded, but riveted; in most cases, however, the rivets were hammered so carefully that the links *appear* to be welded. Finally, not all chain mail had its links fastened. Ancient armorers often simply linked the rings, as did their successors when they were in a hurry or wanted to cut costs. This generally made inferior armor, but Oriental armorers often made very good unriveted chain mail (as good as riveted mail) by using a superior alloy and by making each ring from two or three coils of rod.`,
                `For readers who are interested in learning more about the manufacture of chain mail and other types of armor, I recommend ***A Glossary of the Construction, Decoration, and Use of Arms and Armor***, by George Cameron Stone. The book is uncommon but is available at better used book stores and at large libraries.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `I really enjoyed your "April Fools" column back in issue #156. Did anybody help you think up the questions?`,
            answer: [
                `The questions in #156 were real; readers really sent them in. I am not clever enough to think up questions like that. I suppose I could get together with a few colleagues and think up a few questions that would be pretty wild, but that would be a waste considering what the mailbag holds every month.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '32-33',
            question: `To answer your question in issue #156 (page 55, third column): Yes, those questions do arise during play. Now that you know this, perhaps you'd reconsider your answer to the "watery ranger" question. Where I'm from, characters get wished into glasses of water all the time (the idea originated in a fanzine), and your suggestion that such characters can be killed simply by drinking them is tough on PCs.`,
            answer: [
                `First, if ***wishes*** are so common in your campaigns that they are used for anything "all the time," you've got too many ***wishes*** floating around; cut back. Note that a ***wish*** is the only magic in the core AD&D rules that can turn a character into a glass of water. ***Polymorph any object*** can turn organic matter into inorganic matter, but into only one kind of matter at a time; a successful spell could turn a character into a glass, or into water, but not both.`,
                `Second, ***wishes*** are *not* intended to be used as direct attacks on creatures. Such ***wishes*** fall into the grossly unfair category (see ***PHB***, page 197), and the DM should actively subvert the intent of such spells whenever they are used, even when they are used by NPCs. Thus, if an evil wizard ***wishes*** a PC "into a glass of water." a huge glass containing the PC and many gallons of water should appear; rest assured that at least one novel twist exists for each possible wording of this ***wish***.`,
                `Third, this ***wish*** should allow a saving throw, since it is being used as a high-powered ***polymorph any object*** spell.`,
                `Fourth, any ***polymorphed*** character retains his hit points. Drinking the character will cause harm just as surely as eating the character would, but if the character has 100 hp, drinking the character is going to be a long and difficult process. Water in a glass has no armor class (it just sits there), but the most damage a human can do by drinking is 1-2 hp per round. Note that big, nasty teeth have no real effect on water, but a large tongue does, so a dragon or cow might be able to "drink" 1-12 hp each round. Also, as TSR editor Jon Pickens points out, if a character is turned into a *glass* of water, a few of his hit points will be held in the glass (say 10-20% of the total), and the glass must be smashed before the character can be killed; this, too, is easier said than done if the victim has a lot of hit points.`,
                `Finally, although evaporation or spillage can "kill" the character, death won't be instantaneous. An evaporated character is effectively in gaseous form until his molecules are thoroughly dispersed in the atmosphere; a kind DM might rule that the gaseous state lasts indefinitely. Similarly, a watery character poured into the dirt and allowed to soak in can be considered melded into stone and not truly dead.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '33',
            question: `Back in issue #121, you said that non-yakuza ninja do not have the ability to pick pockets. However, the same issue of DRAGON® Magazine contained a new Oriental character class, the geisya. This class is sup- posed to have a pick pockets ability that is the same as a ninja of the same level. Furthermore, ***Oriental Adventures*** itself says that a yakuza has a chance to pick pockets equal to that of a ninja of the same level. What gives?`,
            answer: [
                `This column was right; ninja do not have a pick pockets ability unless they are ninja-yakuza. Until an official correction comes along, assume a 1st-level yakuza has a 30% chance to pick pockets. This ability increases by 5% per level to a maximum of 99% at level 15. Allow the geisya to pick pockets as a yakuza (not a ninja) of equal level.`,
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '33',
            question: `A couple of issues ago, you said that the new dragons can breathe only three times a day. What's wrong with allowing them to breathe once every three rounds with no limit on the number of times per day?`,
            answer: [
                `Nothing's wrong with that. In fact, that's the way dragon breath is supposed to work with the new dragons (my error).`,
            ],
            comment: 'Corrects #155 regarding dragon breath weapons',
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '163',
    publication_year: '1990',
    publication_month: 'November',
    foreword: `This month, the sage considers a few magical enigmas. Page numbers refer to the AD&D® 2nd Edition game books unless otherwise stated (one question refers to the D&D® Immortals set).`,
    sage_advice: [
        {
            page_number: '104',
            question: `One of my characters was recently tricked into donning a ***girdle of femininity/masculinity***. What options do I have for getting the character back to normal? If the character finds another such girdle and puts it on, will this change him back? My DM says this won't work because the item's description says a ***wish*** has only a 50% chance of restoring the character's original sex. Obviously, a ***polymorph other*** spell could restore the character, but I'm leery of ***dispel magic*** and ***anti-magic shell*** spells.`,
            answer: [
                `It isn't often that I get a question with so many ... possibilities.`,
                `What a ***wish*** will do is irrelevant in this case; the ***girdle's*** absolute power to change the character's gender is stronger than the ***wish's*** general power to remove misfortune. (Several powerful miscellaneous magical items are more potent within their limited portfolios than ***wishes*** are.) If the character dons a second girdle, he might have his gender restored, or he might lose all gender—and your DM might rule that this is more likely than the standard 10% chance (***DMG***, page 170), since the character is fiddling around with things best left alone. But your character's gender *will* be altered if he puts on a second ***girdle***, as these items are quite potent.`,
                `There is nothing in the ***polymorph other*** spell listing to suggest that secondary characteristics like age or gender can be altered by the spell. Individual DMs are free to include the ability to change gender along with form, but players shouldn't count on it without consulting the DM. Furthermore, assuming that your DM does allow ***polymorph other*** to change gender, there would be at least a 50% chance that the attempt would fail. A ***wish*** certainly is more powerful than the 4th-level ***polymorph other***. If the character was ***polymorphed*** back to his original gender, a system-shock roll would be required. A successful ***dispel magic*** would change the character back to the "wrong" gender and would require another system-shock roll.`,
                `You are quite right to be worried about ***anti-magic shells***, but note that an ***anti-magic shell*** cannot permanently dispel a long-term effect such as ***polymorph other***. The effect temporarily dampens magic, it does not dispel it. If the ***polymorphed*** character entered an ***anti-magic shell***, he would be forced back into the "wrong" form, and this would require a system-shock roll. Upon leaving the ***anti-magic shell***, the character immediately would resume the "correct" form, and another system-shock roll would be in order.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '104',
            question: `How is each spell's school chosen? Also please explain how the various pairs of opposing schools of magic were chosen. What is the nature of the opposition? Why do illusionists have to contend with an extra opposition school?`,
            answer: [
                `Generally, spells are grouped into schools according to the types of effects they produce and, by extension, the type of power used to produce their effects. Abjuration blocks, dispels, or protects; alteration produces changes in its target; conjuration/summoning brings material from some other place; enchantment/ charm grants its users or targets special abilities; greater divination reveals information; illusion/phantasm causes perceived changes that are not real; invocation/evocation creates matter or energy; and necromancy provides or removes the energy of life. See ***The Complete Wizard's Handbook*** for detailed explanations of each school.`,
                `No two schools of magic are mutually hostile due to their natures; opposition arises from how the spells are learned and used. Specialist wizards employ methods of study and mental discipline that enhance their abilities to use certain types of magic and erode their aptitudes for others. This is why generalists can freely use magic from opposing schools while specialists cannot. Specific pairs of opposed schools were selected according to common sense and game balance. For example, if invokers spend a lot of time learning how to bring things into being from nothing, they probably neglect to learn how to call things from one place to another. Illusionists, who spend their time trying to create believable unrealities, have a hard time casting magic that produces and channels real energies; there are three such schools: invocation/evocation, necromancy, and abjuration.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '104',
            question: `I've noticed that a few spells are parts of two opposing schools of magic. For example, the ***limited wish*** spell is both conjuration/ summoning and invocation/evocation. Can specialist wizards from either school use such spells? That is, can conjurers or invokers use ***limited wish***? How is it that a spell can be from two opposing schools anyway?`,
            answer: [
                `A specialist wizard can use any spell that falls within the schools allowed to him, even if the spell in question also falls under an opposing school. Certain effects, such as ***limited wishes***, can be produced in more than one way; in this case, what is ***wished*** for can be plucked from some other place and delivered, or it can simply be created to order.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '104-105',
            question: `How do you calculate a multi-classed or dual-classed character's personality score or chance to detect scrying?`,
            answer: [
                `For a multiclassed character, use either the character's highest level or the level of the pertinent class. For example, a fighter/ wizard would use his fighter level when calculating his personality score in a conflict with an egotistical magical weapon, but would use his wizard level to determine his chance to detect scrying. The DM should decide which method to use, then use it consistently. Dual-classed characters use the level of the class in which they are currently active. If the character has more experience in the previous class, he can use the higher level but must pay the experience penalty for reverting to that class (***PHB***, page 45).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '105',
            question: `Will a ***spider climb*** spell negate the effects of a ***grease*** spell?`,
            answer: [
                `This is up to the DM, but I suggest not. The coating from the ***grease*** spell would keep a ***spider climbing*** creature from adhering to a surface if that creature failed a save vs. spells, as per the ***grease*** spell description. A ***spider climbing*** creature (or any other creature normally able to climb sheer surfaces or ceilings) can still traverse ***greased*** surfaces; however, if they fail their saves, they fall.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '105',
            question: `There is a contradiction in the ***D&D® Immortals*** rules regarding the effects of mortal magic on Immortals. Page 6 of the ***Players' Guide to Immortals*** says that Immortal minds are immune to mortal magic, but their corporeal forms are not. But page 16 says mortal magic is ineffective against Immortals in any form.`,
            answer: [
                `Page 6 is right. The second sentence under the heading "Limits on Use" on page 16 should be deleted.`,
            ],
            attributes: [ATTRIBUTE_1E],
        },
        {
            page_number: '105',
            question: `I'm confused by the castle construction section of ***The Castle Guide***. When using smaller work forces (page 60), is the savings calculated once per project, or more often? The "Larger Work Forces" section on the same page suggests that the savings be calculated per week, but if that's the case a character could get a castle for free just by cutting the work force in half and waiting patiently through the increased construction time. Also, if a character is feeling frugal but still is in a hurry, what's to keep him from reducing the work force but keeping it above 75% of normal, thus gaining substantial savings and not extending construction time?`,
            answer: [
                `The savings from reduced work forces is calculated per week, so dropping one worker saves 520 gp each year. However, ***The Castle Guide*** editor Bill Connors says there is some dropped copy in the "Smaller Work Forces" section. The last sentence in the second paragraph should read: "No reduction below 50% in the work force or cost is possible." While a castle builder can reduce labor and administration costs, he can't get them for free and must still pay for materials. Smart castle builders will adjust their work forces to get some savings, but I can think of two ways to discourage this if the referee thinks the practice is getting out of hand. First, an accident or misfortune (such as a raid or marauding monster) might deplete a reduced work force even further and cause a construction delay. Second, morale in the reduced work force might deteriorate. Workers who believe they are being asked to do the impossible tend to be resentful. This might prompt the referee to recalculate the Production Modifier in mid-project and declare a "cost overrun" for the castle.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '164',
    publication_year: '1990',
    publication_month: 'December',
    foreword: `This month, the sage takes another quick spin around the AD&D® 2nd Edition game. All rule book references are taken from the 2nd Edition versions.`,
    sage_advice: [
        {
            page_number: '32',
            question: `Will magic resistance stop gaze attacks? Can magic resistance stop ***protection from evil*** spells? How would magic resistance affect a paladin's ***protection from evil*** ability?`,
            answer: [
                `Magic resistance applies only to spells and spell-like powers that directly affect the magic-resistant creature. Consequential effects, such as collapsing masonry resulting from an earthquake spell, ignore magic resistance. Magic resistance applies to any effect created through the memorization and casting of a spell, and to spell-like effects from wands, staves, rods, rings, and miscellaneous magical items. It does *not* apply to breath weapons, gaze attacks, energy draining, psionic abilities, and similar special attack forms; nor does it apply to effects that are intrinsic to an item, such as the magical "pluses" on an enchanted weapon or piece of armor. There are many cases where effects fall into a gray area, and the DM must rule on these as they come up. When in doubt, treat any effect that behaves like a spell (i.e., that operates when the user does something special to create it—concentrates, expends a charge from an item, etc.) as a spell.`,
                `Magic resistance can work against ***protection from evil*** spells; see the section on "in place" spells in the ***DMG***, page 67, and in the ***PHB***, page 102. However, many DMs rule that ***protection from evil*** is a special case, especially in campaigns where ***protection from evil*** is the only readily available defense against magic-resistant creatures. This is perfectly acceptable, since the power of ***protection from evil*** can be considered a consequential effect of a spell. A paladin's ***protection from evil*** power probably should be considered a special ability not subject to magic resistance, but it could be treated as a permanent magical effect (also see the ***DMG***, page 67, and the ***PHB***, page 102).`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '32',
            question: `If the last charge in a ***staff of the magi*** is used, are those powers that don't require charges still operative?`,
            answer: [
                `No, the staff becomes completely nonfunctional. If you interpret the rules governing magical staves (see the ***DMG***, page 153) strictly, once a staff is drained of charges it becomes permanently nonmagical. However, some DMs allow even totally drained ***staves of the magi*** to regain charges by absorbing spells.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `The rules on scrolls in the ***DMG*** (page 145) say that a ***read magic*** spell must be used to discover a scroll's contents. According to this rule, even a map is unintelligible until a ***comprehend languages*** spell is used to decipher it. Since priests have neither ***read magic*** nor ***comprehend languages*** in their spell lists, how do priests discover what's on a scroll?`,
            answer: [
                `You seem to have found a genuine "hole" in the rules. The DM can handle it in several ways:`,
                `1. Assume that the ***read magic*** and ***comprehend languages*** spells can be bestowed upon the item itself. The caster touches the writing, and any single creature who can read (in the case of maps) or cast the type of spell written on the scroll can decipher the writing. Alternately, the caster can copy the map or simply explain the spell to another caster, who can then read the writing himself.`,
                `2. Assume that a ***tongues*** spell can be used by priests to decipher scrolls, one scroll per spell.`,
                `3. Introduce clerical versions of ***read magic*** and ***comprehend languages*** spells into your campaign. I recommend that you make them both first-level spells in the All sphere.`,
                `4. Assume that all priests have a limited ability to decipher priestly scrolls on their own. A priest who does nothing else during a day might have a chance to petition his deity for help in deciphering one or more scrolls, provided he can read and write.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '32',
            question: `Where can I get information on herbs for the herbalism proficiency? Just what can a character do with this proficiency? How strong are the poisons and medicines the herbalist makes?`,
            answer: [
                `Check out the article "Wounds and Weeds" in DRAGON issue #82 for a quick description of several herbs with fantasygame applications. The reference section of your local library should also help. Herbalism mainly is used to identify plants and fungi. A successful proficiency check might reveal a plant's most common names and whether or not it is edible, poisonous, or medicinal. A successful proficiency check might also allow the herbalist to know where a certain plant grows and to find it if any are growing nearby. The DM must decide how powerful an herbal concoction is. In normal circumstances, I suggest that the herbalist be limited to mild poisons and weak healing balms. Mild poisons include types A, G, K, and O (see the ***DMG***, page 73). Herbal healing balms might include poultices that heal 1 hp damage when applied to wounds, salves that allow a resting character to gain one extra hit point each day, and the like; characters with the healing proficiency might be able to use these products with greater effect, say to heal 1-4 hp damage or gain an extra 1-4 hp per day of rest. Of course, if the herbalist has access to extraordinary plants (such as those found in rain forests), he would be able to produce more potent concoctions.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '32+34',
            question: `There is a player character in my campaign who has spent several years of game time and thousands of gold pieces learning everything there is to know about poisons. What skills would he have? How many proficiency slots would he have to use? (I don't think the character should have to give up all his nonweapon proficiency slots after all that effort.) How would you simulate this skill in a game where the original AD&D game rules are used?`,
            answer: [
                `The DM should have been thinking about this while the PC was busy doing all his research. Since the game does not contain a poison-manufacturing proficiency *per se* (herbalism gives an incidental understanding of plant poisons, but many poisons are derived from animals or minerals), you'd have to create a new proficiency.`,
                `Such a proficiency might require two proficiency slots and be based on Intelligence -2. Depending on the campaign, this proficiency would fall under one or more of the following categories: wizard, priest, rogue. The character would have to expend at least two slots to get the skill; the time and effort the character is devoting to learning all about poisons is not going to be available for learning languages or other skills. However, you might allow the character to purchase extra slots for improving the proficiency once it has been bought, but only if the character has no other slots available and the proficiency score is not raised above 16. The proficiency might allow the character to do one or more of the following, at the DM's option: concoct any poison on the DMG's poison table (see previous question); create entirely new poisons; prepare poison antidotes; recognize the "poison potential" in any plant, animal, or mineral encountered; recognize a poison by its effect on a victim.`,
                `The DM must control such a proficiency very carefully to maintain play balance. Manufacturing poisons should be a long and difficult process (check the section on potion manufacture in the ***DMG***, page 87). Making poison under field conditions should require a substantial penalty, and failure under any circumstances should result in at least a chance for the poison maker to poison himself ("Ouch! I've just nicked myself with the knife I used to skin that tree frog."). Many poisons, particularly the very potent ones, should have a "shelf life" and would thus lose potency over time. They also might be destroyed when exposed to heat, cold, light, or electricity. Note that poisons are very dangerous to store ("Fine, your thief is carrying that batch of puffer-fish venom in a leather bladder on his belt. But did he remember to wash his hands before eating?").`,
                `The current proficiency system works fine with the original AD&D game rules. You can use this new proficiency, and any other one, with no modifications at all.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '34',
            question: `What abilities does the caster of a ***polymorph self*** spell gain when he assumes a new form? I understand that the spell-caster gets the new form's movement but not its attacks. What about extraordinary movement such as tunneling or phasing? What about types of movement that might double as attacks? For instance, can a wizard ***polymorphed*** into a giant frog leap onto an opponent?`,
            answer: [
                `Basically, the ***polymorph self*** spell grants the caster the adopted form's shape an ordinary locomotion. The spell does not grant the adopted form's special attacks, senses, or magical abilities. The caster is not granted enough strength to perform extraordinary maneuvers, and the DM must decide where to draw the line when deciding what abilities the caster does get. In your example, a caster who assumed the form of a giant frog would be able to swim and hop about, but would not have a frog's all-around vision or full use of the creature's remarkable tongue. It is reasonable to deny the caster the ability to make spectacular leaps, as the spell description specifically limits the caster to "normal" movement. However, a frog's form is well suited to jumping, and the occasional long hop isn't out of the ordinary for a frog. The caster could jump, but he probably wouldn't have the strength or coordination to make very long jumps (a reduction of one-half or one-third would be about right—60-90' for a person ***polymorphed*** into a 50-lb. giant frog) or to make several leaps in succession. The caster certainly can belly flop onto opponents; resolve such attacks using the wrestling table (see the ***DMG***, page 59). Similarly, a caster who changed into an umber hulk would have a very limited ability to burrow through solid rock. A caster who took the form of a phase spider would get the ability to crawl along webs, but not the ability to shift phase or to spin webs of his own.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '165',
    publication_year: '1991',
    publication_month: 'January',
    foreword: `This month, "Sage Advice" splits some hairs regarding spell-casting and combat in the 2nd Edition AD&D® game and examines a few other fantastic mysteries.`,
    sage_advice: [
        {
            page_number: '91',
            question: `If a wizard casts a ***stoneskin*** spell on himself, then is struck in melee while casting another spell, is the second spell disrupted or is the wizard able to maintain concentration because the ***stoneskin's*** protection negates damage?`,
            answer: [
                `The second spell is disrupted, as a successful hit ruins a spell in progress (***Player's Handbook***, page 85). Note that a successful attack—not damage—is the critical factor here. Game logic assumes that even a nondamaging hit can disrupt concentration. It's tough to keep your mind focused on something as complex as a spell when someone's using your head for batting practice, even if the blows aren't hurting you. Many kinds of nondamaging hits can disrupt spell-casting: a hand clamped over the mouth, an armlock, or just being knocked down. However, damage always breaks concentration. If, for example, a spell-caster takes damage from a ***fireball*** or breath weapon, any spell in progress is lost even if the caster made his saving throw and took only half damage.`,
                `These distinctions also are important to game balance. Spell-casters are *intended* to be vulnerable to physical attacks during spell-casting, and their opponents *must* be given a chance to anticipate the spell and disrupt it before it goes off. Spell-casters can't get around this limitation by using spells such as ***stoneskin***. Likewise, spell-casting monsters that are immune to normal weapons (such as liches and vampires with character abilities) can have their spells ruined by any successful attacker. Some DMs even allow "attack" bonuses when characters make attacks specifically to disrupt a spell. The reasoning here is that a nondamaging jostle or cross block is easier to make than a potentially lethal blow. While this sort of ruling tends to be an equalizer when the target spell-caster is a high-level evil patriarch with an armor class in the negative numbers, it can be unreasonably tough on a 1st-level wizard with AC 10. Apply such bonuses carefully, if at all. I suggest that bonuses be limited to +4 or less, and you might consider applying them to the target's armor class rather than to the "to hit" roll. If you use the armor-class adjustment method, do not allow an armor class to be adjusted to worse than 10.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL,ATTRIBUTE_STONESKIN],
        },
        {
            page_number: '91',
            question: `Will the damage inflicted from round to round by a ***Melf's acid arrow*** spell prevent spell-casting?`,
            answer: [
                `Yes. Damage makes the concentration required for spell-casting impossible. This is one thing that makes ***Melf's acid arrow*** a useful spell. However, the acid can be washed off before the duration expires.`,
            ],
            comment: [
                `Matches how the spell was originally intended. https://youtu.be/tenOqLK2sEw?t=275.`,
                `This ruling is loosened a bit in #198 and reiterated in #206`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL,ATTRBUTE_DOT],
        },
        {
            page_number: '91',
            question: `How are infravision and ultravision supposed to work? Do they work like infrared goggles that detect heat, or like "starlight" optics that simply gather large amounts of light?`,
            answer: [
                `Strictly speaking, infravision is the ability to "see" infrared light or heat. The exact game effects of infravision depend on the rules your DM is using; see pages 118 and 119 of the ***Dungeon Master's Guide*** for the rules governing this kind of vision. Ultravision is a bit harder to describe, but generally it is considered to be quite a bit like "starlight" optics. Creatures with ultravision have eyes that can gather large amounts of-light and can also detect ultraviolet light and use it to enhance the available normal light. Ultravision generally is useful only outdoors at night.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '91',
            question: `What happened to psionic abilities? I seem to remember reading something about an upcoming psionic rules supplement.`,
            answer: [
                `A new rule book, ***The Complete Psionicist*** is due in early 1991, This book will feature a boatload of new psionic abilities, a detailed combat system, a new psionicist character class, and other goodies.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '91',
            question: `How many attacks would a specialist with a two-weapon fighting style (from ***The Complete Fighter's Handbook***) get each round?`,
            answer: [
                `The specialist gets the one or more attacks each round with the weapon in his "good" hand; this varies with his class, level, and weapon specialization. The specialist gets *one* attack each round with the weapon in his "off" hand, regardless of level, class, or specialization.`,
                `Game logic assumes that no one is coordinated enough to launch multiple attacks with each hand; there's a limit to how much activity a person's brain can direct in a single round of melee. Game balance also requires such a limitation, as warriors are not intended to be walking *blade barriers*.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '91',
            question: `Specialization in the two-weapon fighting style from ***The Complete Fighter's Handbook*** reduces the penalty for attacking with two weapons. Can the specialist further reduce the penalty to nothing if he has a high dexterity score?`,
            answer: [
                `Yes. The rules on page 96 of the ***PHB*** apply to the character, except where modified on page ***64*** of ***The Complete Fighter's Handbook***. Note that high dexterity scores cannot turn the penalty into a bonus, no matter which rules you are using.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '91-92',
            question: `How many punches can a character throw in one melee round? Does fist fighting require a weapon proficiency?`,
            answer: [
                `This is entirely up to the DM. Contrary to popular belief, fist fighting is not universal and was unknown in several pregunpowder cultures; American Indians, for example, generally resorted to wrestling in unarmed combat, so DMs have great latitude here.`,
                `I suggest allowing any character to make one attack on the punching/wrestling table (***PHB***, page 91; or ***DMG***, page 59) without penalty each round. Since the punching/ wrestling table allows for single-blow knockouts, I suggest that this kind of combat be treated as a special case that falls outside the normal weapons rules. However, fist fighting and wrestling *can* be treated just like any other weapons that require proficiencies. If this is the case, the proficiency should be available to any character class. If a character spends a weapon proficiency on punching, he should get the extra melee attacks listed on Table 15, ***PHB***, page 26, if he is a high-level warrior. Punching specialists would use Table 35, ***PHB***, page 52.) Any character (under any punching system) attacking with both fists would use the attacking with two-weapons rule (***PHB***, page 96). Note that wrestling generally requires two hands.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `The punching/wrestling table allows for results on an attack roll of 1. Don't 1s always miss?`,
            answer: [
                `A roll of 1 always misses in normal combat. However, punching and wrestling are not normal combat, and 1s can hit. This is an exception to the general rule.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `Is it acceptable for a character to ***wish*** for special abilities, such as thieving or spell-casting abilities? If granted, would these abilities be permanent or temporary? Would such a ***wish*** turn the character into something that had the desired power?`,
            answer: [
                `This is entirely up to the DM. You've listed a couple of reasonable approaches to the problem. If wishes are fairly are in the campaign, and the DM feels that the need is justified, a special ability such as lock picking might be granted for a limited time, say as much as a month (but more likely a few turns or hours). If ***wishes*** are true rarities or if the DM really approves of high-powered player characters, it's fine to make the ability permanent, but I suggest that the ability be low powered, about one-third to one-half of what the average player character in the campaign might have. It's also a good idea to make the level of power fixed, not subject to improvement though experience. It certainly is acceptable to twist such wishes by changing the character into some creature that has the desired ability; such changes might be permanent or temporary. It also is fine to have a creature possessing the desired ability appear and serve the character for a short time.`,
                `"Sage Advice" has discussed ***wishes*** before; check out this column in issues #133 and #162 for general information.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `What armor class do the various ***Bigby's Hand*** spells have?`,
            answer: [
                `Each "hand" has AC 0, in either version of the AD&D game.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `How can a ***necklace of adaptation*** allow a character to exist in airless space? Wouldn't a character in a vacuum just explode?`,
            answer: [
                `In a fantasy game, being thrust into a vacuum does not necessarily cause catastrophic decompression. The AD&D SPELLJAMMER™ rules, for example, assume that anything in space carries its own atmosphere. In any case, the necklace has the power to sustain the character in airless space for as much as seven days. What happens to the character at seven days plus one second is up to the DM.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `Can a wizard with a ***Zagyg's spell component case*** (from the ***Unearthed Arcana*** tome) pull components for nonwizard spells from it?`,
            answer: [
                `The wizard can get the components for any spell he knows from the case. If he is a multi- or dual-classed character, he can get nonwizard spell components. If the wizard does not know a certain spell, he cannot "think of" the proper components and cannot get them from the case.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '166',
    publication_year: '1991',
    publication_month: 'February',
    foreword: `This month, the sage considers a few problems that have stymied AD&D® game referees and players. All page references herein refer to the AD&D 2nd Edition volumes.`,
    sage_advice: [
        {
            page_number: '72',
            question: `In what order do the volume of the ***Monstrous Compendium*** go?`,
            answer: [
                `In any order you want. Volumes I and II contain "basic" monsters, ones you'd find in just about any campaign. The remaining volumes contain creatures that are primarily associated with specific settings, such as the WORLD OF GREYHAWK® campaign or the ***Oriental Adventures*** lands. Some or all the monsters in these volumes might be found in other settings. The ***Monstrous Compendium's*** loose-leaf format is intended to allow DMs to organize the creatures in any way they see fit.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '72',
            question: `What happens to characters who are thrown into a state of shock because of some ghastly happening? How would you use ability checks or saving throws to determine if a character would be subject to such a state in the first place?`,
            answer: [
                `This is up to the DM. The simplest way to handle this would be to have the affected character save vs. paralyzation, adjusted for wisdom. The effects of a failed save would vary with the situation, but the morale rules in the ***Dungeon Master's Guide*** (pages 69-72) should give you a few ideas. The RAVENLOFT™ boxed set (TSR product #1053) contains complete rules for dealing with fear and horror; see chapter 4 of the RAVENLOFT booklet.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '72',
            question: `In the RAVENLOFT adventure RA1 ***Feast of Goblyns***, the scale on the Harmonia map is listed as 1" equals 250 miles, making a trip from one side of town to the other a long jour- ney indeed. Likewise, the detail maps of Homlack and Skald are scaled at 125 miles per inch and 300 miles per inch, respectively. What are the real scales?`,
            answer: [
                `The scales for each map should be measured in *feet*, not miles.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '72',
            question: `Would a ***ring of free action*** negate thieving penalties for wearing heavy armor? Would it allow a wizard to cast spells while wearing armor? Would it allow an armored character to move at full (12) rate? Can the wearer swim?`,
            answer: [
                `A ***ring of free action*** protects its wearer from magical effects that hinder or immobilize, and allows the wearer to function underwater without hindrance due to water resistance. It does not negate encumbrance penalties, nor does it allow characters to ignore armor restrictions due to character class (not even thieves). It is important to note that magic in the AD&D game is specific and specialized; collateral effects, even those suggested by logic, usually do not occur. While a character wearing a ***ring of free action*** can ignore the effects of an ***entangle*** spell, the wearer is not granted the ability to freely move through underbrush as can a druid. Likewise, there is no reason to assume that the wearer cannot float or swim in water. (On the other hand, individual DMs might rule that this is the case, and thus give the character a new problem to think about while adventuring in or near the water.) The wearer of a ***ring of free action*** would be immune to attacks from a ***rope of entanglement***, but could be physically restrained and bound with any normal rope. Note that the ring also does not empower the wearer to ignore barriers such as normal walls or a ***forcecage*** spell.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '72',
            question: `Is there a limit to the thickness and strength of the welds or rivets a ***knock*** spell can break? Could the spell break a welded link of a massive chain holding up a bridge? Could it pop a rivet out of a battleship?`,
            answer: [
                `A ***knock*** spell cannot do either of the things you have described. The spell opens closures; it does not destroy structures. If a closure that can be opened by a ***knock*** spell (doors, lids; shackles, etc.) is sealed with a weld or rivet, the spell will break the weld or rivet, provided that the closure is not larger than the spells area of effect. For example, a pair of handcuffs riveted shut *will* pop open when ***knocked***. Note that the spell description (see the ***Player's Handbook***, page 143) does not specifically mention rivets, but these should not be allowed to provide an easy way around ***knock*** spells. However, a single rivet is one "means of preventing egress." A single ***knock*** spell pops two rivets sealing an opening.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '72',
            question: `Does a dual-classed character receive a new set of initial proficiencies when switching to a new class?`,
            answer: [
                `This is up to the DM, but I suggest not. A character's initial proficiencies reflect what he has learned during his nonadventuring career. Switching to a new class does not bring about a fresh wave of knowledge. Also, since the rules allow a character to switch classes multiple times if he qualifies (see the ***PHB***, page 45), you will begin to encounter game balance problems as characters gain multiple "loads" of initial proficiencies. Dual-classed characters do, however, have to learn a new way of doing things when embarking on a new class, and should be given at least one new weapon proficiency (and one nonweapon proficiency if the campaign uses them) when starting the new class. Otherwise, the character is quite likely to be miserably unprepared to pursue his new vocation.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '72',
            question: `I've heard rumors of a Harpers Trilogy as part of the FORGOTTEN REALMS™ book series. What do you know about it?`,
            answer: [
                `There will indeed be a Harpers series, with at least three books. The first book, *Parched Sea* by Troy Denning, will be released in July 1991; the second book, *Elf Shadow* by Elaine Cunningham, is scheduled for October 1991; and the third book, *Red Magic* by Jean Rabe, is scheduled for November 1991.`,
            ],
            attributes: [],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '167',
    publication_year: '1991',
    publication_month: 'March',
    foreword: `This month, the sage considers a few problems that have stymied AD&D® game referees and players. All page references herein *refer* to the AD&D 2nd Edition volumes.`,
    sage_advice: [
        {
            page_number: '56',
            question: `Are creatures that are immune to normal weapons also immune to "natural" damage such as falling? If not, how much damage equals one "plus"? Is a creature that is immune to normal weapons also immune to normal fire?`,
            answer: [
                `Table 48 in the ***Dungeon Master's Guide*** (page 69) implies that weapon immunities are not absolute. Until official word comes along, you have several options:`,
                `1. You might apply Table 48 directly. That is, a fall of 50' or more can hurt a creature hit by only +1 or better weapons because it inflicts five dice of damage, and such creature can be harmed by any creature with 4 + 1 or more hit dice.`,
                `2. You can assume that gravity and im- pact with the unforgiving earth are more powerful than any weapon, and allow falls of any length to harm any creature.`,
                `Although some DMs rule otherwise, immunity to normal fire is a special defense all by itself. Unless a creature's description specifically lists an immunity to fire or other form of energy, it is safe to assume that the creature is vulnerable to various energy attacks, magical or not.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '56',
            question: `Can a ***vorpal weapon*** sever the neck even if the attack cannot reach the neck? For instance, can a dwarf with a ***vorpal short sword*** sever a storm giant's neck? What happens if the attacker gets a roll good enough to sever hut not good enough attack the target's armor class?`,
            answer: [
                `If the DM rules that an attack cannot reach the neck, then the neck cannot be severed. However, there is no reason to assume that a foe's neck always is out of reach just because he is taller than the weapon wielder. During the course of a melee round, a very tall opponent might bend over to get a good swipe at his shorter opponent. Individual DMs must adjudicate these situations as they arise. A ***vorpal weapon*** or a ***weapon of sharpness*** must score a hit to sever anything. If the die roll is high enough to sever but not high enough to hit, the attack fails and nothing is severed.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '56',
            question: `According to the ***Monstrous Compendium***, Volume II, a shambling mound grows by 1 HD every time it is subjected to a lightning attack. A wizard in my campaign has just ***charmed*** a shambling mound and has been busy dumping ***lightning bolts*** into it. When I wrote this letter, the shambling mound was up to 30 HD, and it probably will be up to 100 HD by the time you publish this. What should I do?`,
            answer: [
                `Gamesmanship such as you have described is fine in small doses; however, the DM must intervene when rules-bending threatens to send the campaign out of control. What should you do? Get creative.`,
                `A shambling mound gains 1 HD and grows 1' with every lightning attack. Ever hear of growing pains? Anything that causes pain can be construed as a hostile act (the wizard in your example hardly has the shambler's best interests in mind), and attacks on the subject of a ***charm*** by the caster break the effect. Or, assume that the growth effect is only temporary—perhaps the shambler can maintain the extra growth for only a few turns or hours. Afterward, the shambler might shrink or the new growth might just die off. If you're feeling especially cruel, you might rule that once the shambler reaches 16 dice, it splits off and forms two 8-HD shamblers. Of course, the new shamblers wouldn't be ***charmed***. Note that unless the wizard in your example is using the ***charm plants*** spell, communication with the ***charmed*** shambler isn't possible without a ***speak with plants*** spell.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '56',
            question: `If a specialist wizard loses enough ability-score points to put him below the minimums for his specialty, what happens? Does he simply become a generalist or is his loss more catastrophic?`,
            answer: [
                `The specialist suffers no ill effects at all; ability score reductions of any kind are painful enough. As this column has explained before. ability-score requirements for class and race are *initial* requirements only! Once a character becomes a member of a certain class or specialty, he stays a member unless he violates an alignment requirement or similar restriction placed on the class.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '56',
            question: `A couple of issues ago, you said that spells from a combined school are available to any specialist who has access to at least one of the schools. Therefore, a conjurer can cast evocation spells, because he is barred only from greater divinations and invocations. Right?`,
            answer: [
                `Wrong. Invocation/Evocation is a single school; the "Invocation" entry in the conjurer's opposition school list is a typo. Note also that the proper name for the Greater Divination school is Lesser/Greater Divination. Conjurers are barred from learning divination spells of all kinds, not (as one reader suggested) just divination spells of 4th level and above.`,
            ],
            comment: [
                `This was corrected in #182. Conjuration/Summoning specialists have minor access to Divination. The same is also written in The Complete Wizard's Handbook.`,
                `This makes absolutely no sense, as it blocks them from learning Read Magic, Detect Magic, which is needed to read scrolls! This has to be wrong and contradicts the PHB that says that lesser divination is available to ALL wizards`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '56',
            question: `How can I find a gaming club?`,
            answer: [
                `Many local game stores sponsor clubs. If the store doesn't have a club, the management probably will let you post a notice asking about clubs. When looking for a club, be ready to form your own if there isn't one in your area; it's quite likely that other gamers in your area also would like to join a club.`,
                `The worlds largest role-playing club, the RPGA™ Network, has members in every region in the United States and in about 17 other countries. For more information about the RPGA Network, write: RPGA Network, P.O. Box 515, Lake Geneva WI 53147, U.S.A. Although the RPGA Network is a large, centralized organization, it currently has about 40 smaller, local game clubs affiliated with it, and it is getting ready to accept game retailers as members. RPGA Network members have access to a staff of volunteers who help members locate individual gamers or clubs in their local areas. Members can place free classified advertisements in POLYHEDRON™ Newszine, the Networks bimonthly newsletter, which is scheduled to become monthly in May 1991.`
            ],
            attributes: [],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '168',
    publication_year: '1991',
    publication_month: 'April',
    foreword: `This issue, the Sage continues his look at spells in the AD&D® 2nd Edition game, then turns his attention to the often sticky subject of character alignment.`,
    sage_advice: [
        {
            page_number: '56',
            question: `How much weight can a wizard carry when using a ***fly*** spell?`,
            answer: [
                `This is up to the DM. Most campaigns allow the recipient to ***fly*** with as much weight as he normally could carry. Some campaigns apply the standard encumbrance rules (see the ***PHB***, page 76-79) and cut flying speed according to the weight carried. Other campaigns allow flying only when the recipient is lightly encumbered.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '56',
            question: `What's all this about copying a spell into a spell book from a scroll (from DRAGON issue #157, page 25)? According the ***DMG***, page 41, spells can be researched using scrolls, but not just copied.`,
            answer: [
                `Page 41 gives the specific time requirements and costs for getting a spell found on a scroll into a spell book. Technically, the wizard does not copy the spell but reinvents it, using the scroll as a guide, then records the "invention" into his book. It amounts to the same thing.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '56',
            question: `How does the ***invisibility*** spell work? Does it make the recipient transparent? If so, why isn't it an alteration spell? If ***invisibility*** is illusory, who decides what a creature sees when looking through an ***invisible*** creature? (Since the subject is "removed" from the scene, something's got to replace it.) Why does attacking make the subject visible? Why doesn't the spell make objects the subject picks up disappear?`,
            answer: [
                `***Invisibility*** is illusory, and no one decides what a creature sees when gazing through an ***invisible*** creature. The recipient isn't removed; it is rendered visually undetectable. In campaigns in Lake Geneva, most people assume the spell bends light so it passes around the recipient rather than bouncing off the recipient or being blocked altogether. "Bent" light affects a creature's eyes in exactly the same way unbent light does, though very intelligent or powerful creatures have a chance to notice the bent light and get a saving throw against the effect (see the ***PHB***, page 142). There probably are many other workable explanations of the spells mechanics; for example, the retinas of a viewing creature's eyes might be rendered completely insensitive to the recipient's image. In any case, the spells effect is strictly limited to a live recipient (the spell description lists "creature touched" as the area of effect), and the spell has absolutely no power to change the way the subject's surroundings look.`,
                `If you take another look at the spell description, you'll see that items the subject picks up do become ***invisible***. For the purposes of this spell, anything the recipient can tuck into his clothing is considered part of the recipient. Attacks break the spell because the dweomer isn't powerful enough to continue hiding the recipient from creatures under attack. The instinct for self preservation sharpens the victims' perceptions, and the spell unravels.`,
                `Apparently, quite a few folks think ***invisibility*** ought to fall into the alteration school; if you are one of them, by all means go ahead and run it that way. However, one also can argue that ***invisibility*** is an enchantment because it grants the recipient the "power" to disappear—and to make objects disappear, too. ***Invisibility*** is called as an illusion because the spells primary effect is to change the way other creatures perceive the recipient (i.e., they have no visual perception of the recipient at all). As such, the spell is more akin to other perception-altering spells such as ***phantasmal force*** and ***blindness*** than to any other class of spell. (One also could argue that ***blindness*** is an alteration, since it "removes" sight, but the loss of sight is a change in the way the recipient perceives things, so the spell is classed as an illusion.)`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL,ATTRIBUTE_INVISIBILITY],
        },
        {
            page_number: '56',
            question: `Why can't psionicists be chaotic? After all, chaotic creatures tend to be self centered, and self knowledge is important to psionicists. Can chaotic characters have wild talents? Can a psionicist who has lost his abilities because he has become chaotic develop a wild talent?`,
            answer: [
                `It is very hard to answer this question any better than ***The Complete Psionics Handbook*** already does (see page 10), but here it goes: A broad range of psionic powers can be developed only through long hours of patient and intense meditation conducted according to strict rules. Chaotic characters are too impatient to meditate and too free thinking to accept the rules; therefore they cannot become psionicists. Many chaotic creatures have natural psionic abilities, but these creatures are not psionicists *per se*. Only chaotic-evil characters are terribly self centered; chaotic neutrals tend not to care about much of anything except for spreading chaos, and chaotic-good characters generally are concerned about other individuals' basic well being and freedom from oppression. In any event, to be self centered is not the same thing as being self aware or having true self knowledge.`,
                `Any character can manifest a wild talent—even a "fallen" psionicist.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '56',
            question: `The ***PHB*** says druids must be "neutral." Does this mean druids have to be true neutral, or do they just have to have an alignment with a neutral component?`,
            answer: [
                `Druids must be true neutral, as defined in the ***PHB***, page 47.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '56-57',
            question: [
                `Would a true-neutral druid be obligated to do something to balance out everything his party does? If a true-neutral druid does something that promotes one alignment, does he have to perform actions that promote each of the other major alignments? Would a druid who finds himself in a party of lawfulgood characters be obligated to work at cross purposes with his companions?`,
                `Can a thief who is lawful good pick pockets?`,
                `Could a paladin intimidate or harm a prisoner to get information? Does the prisoner's own alignment make a difference in this case?`,
                `Why does the AD&D game have alignments? Why can't players just decide how their characters act rather then trying to force them into a prefabricated mold?`
            ],
            answer: [
                `The people asking these questions all seem to share the same misconceptions about alignment. If questions similar to these have occurred to you, I suggest you carefully reread the section on alignments in the ***PHB***, starting on page 46. Pay special attention to the second paragraph on page 46, particularly the last sentence.`,
                `Alignments in the AD&D game are the cornerstones of characters' personalities. They help each player decide what a character's attitudes and values are, but they are guidelines, not absolute rules. The game's designers and editors do not assume that the entire spectrum of morality, ethics, and philosophy can neatly be categorized into nine strict divisions, and you shouldn't either. When picking an alignment for a player character, I suggest you spend some time thinking about what the character's disposition, principles, and sentiments are; then choose an alignment that fits the character.`,
                `Alignment is not defined by a single act. A good thief might indeed pick a pocket, and he might do so for any of many different reasons. He could lift a few coppers from an ostentatious fop to help feed a starving waif; he could filch the spell components from an opposing wizard during a combat encounter; or he might steal something outright, temporarily succumbing to greed (any character is entitled to commit the occasional slip). Note that, in the core AD&D 2nd Edition game, there are no lawful-good thieves (see ***PHB***, page 38).`,
                `I occasionally see a letter from a person who thinks of lawful-good characters as ruthless, heartless folk who relentlessly impress their own views on others, but that's the lawful-evil formula for living. "Good" implies altruism, kindness, and the ability to see that serving the welfare of others can promote one's own self interests. On the other hand, I get too many letters from people who think good characters, and lawful-good characters particularly, are doormats who'll always allow evil creatures take advantage of their nobler instincts. Not so. Lawful-good characters, especially paladins, usually have very definite ideas about what has to be done to promote goodness, and they are free to try all manner of things to achieve their goals. Torture usually is considered evil because helpless people are capriciously harmed; however, a lawful-good creature might very well use bluff, intimidation, or even stronger measures to get vital information from a captive in order to better protect the innocent or confound a great evil. One severe interrogation, administered at the right time and for the right reason, does not make an inquisition.`,
                `I get a lot of letters from people having trouble with the druidical ethos. Druids in the AD&D game believe in a "natural order" in which good, evil, law, and chaos play equally important roles. The first two paragraphs under the "ethos" heading on page 37 of the ***PHB*** explain the major elements of druidical doctrine.`,
                `Contrary to popular belief, maintaining "balance," especially on a personal scale, is not a druidical priority. According to the druidical view, there is a universal cycle that constantly shifts the cosmic balance between the eight "extreme" alignments. Even major shifts in the balance don't bother druids, since any one alignment's ascendancy is as temporary as fine summer weather. Druids are, however, on the lookout for anything that might cause the balance to "stick." In the druidical view, a universe permanently turned good or evil would either be unproductive, like a world caught in eternal summer where the harvest never comes, or sterile, like a world gripped by endless winter. However, most parties' actions are insignificant when measured on a universal scale. Even heroic adventurers don't often get the chance the affect the whole cosmos, and very few mortals ever get the opportunity to affect the balance in a way that would concern a druid.`,
                `Druids do not deliberately change their actions to reflect first one alignment, then another. Such shifts would make a druid's actions totally unpredictable, which in turn would tend to promote chaos. Druids believe that each of the eight alignments is equally valid, so it doesn't much matter to a druid which alignment his recent behavior tends to favor; any alignment will do over the short run. Druids do tend to be nonjudgemental about good, evil, law, and chaos; and they try to remain flexible and uncommitted to any single moral, legal, or philosophical system. However, druids regard interalignment struggles as part of nature, and druids serve nature. Since druids regard conflict between alignments as necessary, they do not seek to prevent their parties from continuing the struggle, nor do they resent being pulled into it themselves. Staying completely aloof or blocking their companions involvement would be as "unnatural" as trying to keep the leaves from falling in the autumn. Also, druids aren't stupid. Most parties won't take kindly to having their efforts continually stymied by a contrary druid (remember, alignment does not make characters into doormats). Being nonjudgmental, druids tend to go along with whatever their party chooses to do unless the party's actions threaten trees, crops, wild plants, and other things the druid is pledged to protect.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '169',
    publication_year: '1991',
    publication_month: 'May',
    foreword: `This month, the sage looks at the theory and practice behind the skills, spells, and equipment in the AD&D® 2nd Edition game.`,
    sage_advice: [
        {
            page_number: '98',
            question: `Is the survival nonweapon proficiency useful only for extreme climates such as tundra or tropical jungle, or can it also be used for the temperate forests where most AD&D game campaigns are set?`,
            answer: [
                `The survival proficiency can be applied to any combination of terrain and climate. It is entirely possible for a ranger or druid to starve in the woods if the character is lost in unfamiliar terrain at the wrong time of the year. For example, food and water can be pretty tough to find in a deep forest in high summer when very few nuts and berries are ripe. On the other hand, even an unskilled character could do very well at the right time in familiar terrain.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '98',
            question: `Is a character illiterate in his native tongue if he does not have the reading/writing proficiency? If this is so, isn't reading/writing absolutely required for wizards and priests?`,
            answer: [
                `If you're following the rules strictly, one proficiency "slot" must be spent for every language to be read or written. All wizards learn how to read magical notation, which is a highly specialized symbolic language, something like musical notation. This does not necessarily mean the character can read and write in other languages. Likewise, priests learn to recite prayers, catechisms, and the like; they might never learn to read anything. Individual DMs may hand out a few free reading/writing proficiencies to characters who might need them.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '98',
            question: `Is the seamanship proficiency required to operate a small boat such as a canoe or kayak? How much do kayaks cost, anyway?`,
            answer: [
                `Seamanship includes the ability to handle small boats and serve as a crewman on larger craft. Whether or not seamanship is absolutely required to use a small boat is up to the DM (see the next question). The DM might also choose to limit seamanship to large craft and create a new proficiency, boating, to cover small craft. Kayaks, when available at all, cost about the same as canoes of similar size, 30-50 gp.`,
            ],
            comment: `A *Boating* proficiency is introduced in The Complete Thief's, Ranger's, Barbarian's, and Dwarves Handbook`,
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '98',
            question: `Isn't it silly to require a proficiency check every time a character wants to do something unusual or complex? Doesn't everybody have at least a slight chance to succeed at anything? How would such chances be calculated?`,
            answer: [
                `It would indeed be silly to roll the dice every time a character attempts a task. However, nobody can try to do everything and succeed all the time. To stay between these two extremes, the DM must decide how difficult a task is and decide what skills are necessary to complete it. There are some things just about anybody could do; for example, it doesn't take the rope use skill to tie one's shoes, nor does it take the carpentry skill to nail two boards together. However, some skills *look* a lot easier than they really are. Canoes, for example, have a nasty habit of moving in circles when improperly paddled. Likewise, rowboats also are fond of orbiting or not moving at all when an inexperienced oarsman tries his hand. While a character with seamanship probably shouldn't have to roll to control a boat or canoe on a calm lake, unskilled characters are in for a hard time even under such favorable conditions. Also, there are some tasks that unskilled characters cannot complete. Only a carpenter has enough knowledge to build an entire house, and only a seaman can hope to control a boat or canoe through a dangerous rapids or during a windstorm.`,
                `When adjudicating attempts that fall into the middle ground, the DM should decide how difficult the task is and how much specialized knowledge is needed for success. A skilled character probably can automatically complete an absurdly simple task even under poor conditions (perhaps failing only on a roll of 20), while an unskilled character might have to try harder. For example, a character with rope use might be able to tie his shoes with one hand or while hopping on one foot, while an unskilled character might have to make a roll. A good rule of thumb in such cases is to use the normal proficiency score reduced to one half or one quarter (round fractions down); the more difficult the task, the less chance there is for success. Consider the circumstances carefully. The world-record long jump currently is 29'2½", but this does not mean that every adventurer can leap a 10' pit with ease; encumbrance, damage, footing, lighting, even ceiling height will affect any attempt to jump. The DM should decide on a case-by-case basis using common sense. The DM should try to avoid making the campaign a slave to the proficiency system, but making the players *think* their characters out of a predicament is better than allowing them to extricate themselves by calling on skills the characters don't have.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '98',
            question: `I have a dual-classed fighter/thief whose thief level finally has exceed- ed his fighter level. If he uses two weapons, can he still get weapon specialization bonuses? Can he use weapon specialization bonuses while backstabbing? Which saving throw chart does he use?`,
            answer: [
                `A character can use a specialized weapon with another weapon; see the "twoweapon style" question in "Sage Advice," issue #165, page 91 for details. Neither dual-classed nor multiclassed characters can combine class abilities. If your fighter/thief backstabs, he must use his rogue THAC0 and must forgo specialization bonuses; he can, however, use his warrior strength bonuses. Strength and magical bonuses to a thief's damage are applied *after* the backstab multiplier. A multiclassed character (and a dual-classed character whose active class level has surpassed his original class level) uses the best applicable saving throw.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '98',
            question: `Can a spell caster have two ***mirror image*** spells running at the same time? If so, is there a limit to the total number of images the caster can have at one time?`,
            answer: [
                `I can't think of a reason why multiple ***mirror image*** spells cannot be used, but note that each additional spell creates 2-8 additional images of the caster, not of the caster and all previously existing images. I strongly suggest that you limit the total number of images to eight. If an additional spell would bring the total to nine or more ***images***, the excess ***images*** from the new spell are lost.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '98-99',
            question: `According to the ***magic jar*** spell description, the host life force is held captive in the receptacle if the spell caster gains possession of a body. What happens to the host life force if the receptacle is destroyed while the caster is still in the host body?`,
            answer: [
                `***Magic jar*** creates all kinds difficulties for DMs. Here's an answer to tide you over until something official comes along: Any life force held in a ***magic jar*** receptacle is slain if the receptacle is destroyed (see the ***Player's Handbook***, page 170). However, unwilling victims of ***magic jar*** spells are not irrevocably slain as the caster would be if the receptacle is destroyed, as the captive life force is not an integral part of the spell as the caster's is. Note that the caster's life force must return to the receptacle before returning to his own body. If the DM feels the need to discourage player characters from using ***magic jar*** as a cheap way to slay opponents, it's fine to set a high value on the crystal or gem required for the receptacle, to prohibit the caster from replacing receptacles when they are destroyed (thus trapping the caster in the host body), or both.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '99',
            question: `How are the fiery bolts created by the second version of the third-level ***flame arrow*** spell used? Can the caster hurl them all at once? Does he have to roll to hit his targets? Will the bolts affect creatures harmed only by magic weapons?`,
            answer: [
                `The caster need not hurl all the bolts on the round of casting, but unused bolts are lost when the spell's duration expires at the end of the round. The caster must make a to-hit roll for each bolt; range modifiers do not apply to the roll, but dexterity adjustments do. The DM might wish to allow an additional +2 to-hit bonus as in the ***Melf's minute meteors*** spell. The fiery bolts are a magical attack and can affect just about any creature. Note that the bolts inflict minor piercing damage (1d6) and fire damage (4d6, save for half); creatures that are immune to only one of these forms of damage still suffer the other form of damage if struck. If the caster directs one or more bolts at a magic-resistant creature, the creature makes one magic resistance roll for the volley; if it succeeds, the entire volley is negated. Bolts from multiple casters constitute separate volleys.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '99',
            question: `What happens to creatures that are partially or completely submerged in mud when a ***mud to rock*** spell is cast in the vicinity?`,
            answer: [
                `A creature completely submerged in mud will be trapped in the resulting rock. Creatures walking or wallowing on the surface might escape entrapment if they save vs. breath weapon.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '99',
            question: `Will a ***wall of iron*** stand up on its own, or does it always tip one way or another? Will it tip if placed directly against an existing wall, or will it insert itself into the wall and reinforce that wall?`,
            answer: [
                `An unsupported ***wall of iron*** will fall over unless it can insert itself into adjacent nonliving material. The wall can be placed face-to-face with another nonliving surface to reinforce it. Note that a ***wall of iron*** is always created vertical. Also, a ***wall of iron*** is very heavy, and the DM might rule that even a supported ***wall*** will tip if the adjoining material is very weak (such as a thin wooden or plaster wall). In such cases the magical wall probably will bring the supporting material tumbling down with it.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '99-100',
            question: `Are undead, constructed beings, or plants affected by the ***polymorph other*** spell or a ***wand of polymorphing***? Why or why not?`,
            answer: [
                `Most creatures, including undead and simulacra, can be ***polymorphed*** with the fourth-level ***polymorph other*** spell or a ***wand of polymorphing***. (As a side note, golems are creatures, but all of them are immune to ***polymorph*** spells.) Generally speaking, a creature is an entity that can move and react without outside aid. A creature need not be alive. On the other hand, magically controlled creatures still are creatures even when not acting independently. Animated nonliving objects (excluding skeletons and zombies) are not creatures, whether magically or mechanically animated. If the DM uses science-fiction monsters such as sentient robots or androids, he should decide when they are introduced whether to treat such entities as objects or creatures. Nonsentient plants probably should not be considered creatures for purposes of low-level ***polymorph*** magicks. Note that animals cannot be turned into plants by ***polymorph other*** spells or a ***wand of polymorphing***; the eight-level ***polymorph any object*** spell is required for such transformations.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '100',
            question: `Why do the potions of ***heroism*** and ***super heroism*** work only on warriors?`,
            answer: [
                `There are several magical items that work only for specific classes. In each case, game logic and game balance play a role. Game logic in this case is unclear, but it probably goes something like this: The potions enhance, not create, the warrior potential in a character. Zero-level characters and warriors have the potential to be enhanced, but members of other classes do not. The latter have abandoned or suppressed any warrior potential while training to become members of their own classes. Game balance demands that there be distinct differences between classes. Class specialization in the AD&D game helps to insure that all characters are not near-clones trying to achieve the same menu of skills and abilities. Clearly defined character classes also make teamwork necessary, since one or two characters cannot do everything that might be required for successful adventures. This also promotes role-playing and campaign longevity. Most magical items that duplicate class abilities are class specific. Otherwise, class distinctions would disappear and a typical party would become a homogeneous mix of wizards turned healers, wand-toting fighters, sword-swinging priests, and scrying rogues.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '100',
            question: `When using Table 8 (on exceeding level limits) from the ***DMG***, which ability score is the prime requisite for a ranger?`,
            answer: [
                `The prime requisites for a ranger are strength, dexterity, and wisdom. The prime requisite for each character class is listed at the beginning of the class description in the ***PHB***, immediately after the class's ability requirements.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '100',
            question: `How should ability score checks be handled for monsters with no defined abilities? For example, how do I determine the dexterity score for a horse or a hill giant?`,
            answer: [
                `If the question comes up during play, it's best to decide quickly. Keeping the game moving is more important than making a precise calculation. I suggest that you assume that any monster has average ability scores (about 10). Just roll a 1d20 for ability checks; if the result is 10 or less, assume the creature passes the check.`,
                `If the roll is higher, start figuring: Roll 1d3 to get the base ability score. In the case of dexterity, add one or two to the base score if the creature is described as agile, quick, or sure footed (subtract one or two for clumsy creatures). You might add a point for a high movement rate and one point for every multiple of three that the land or water movement rate rises above 12 or every multiple of six for air movement above 18 (you can subtract points at the same rate for exceptionally slow creatures). Generally, creatures with multiple legs are more sure footed than bipedal creatures, allowing one point for each pair of legs after the first two. The situation will exclude some modifiers; a horse might get modifiers for speed and legs when determining if it can jump a fence, but it might get none for deciding if it slides down a rocky slope. On the other hand, a basilisk probably couldn't jump over a matchbox but would get credit for its eight legs when negotiating slopes. Giants are notoriously clumsy, but their sheer size allows them to simply ignore most obstacles.`,
                `When calculating other ability scores, consider the following: Strength generally equates to size; tiny creatures might receive a -2, small creatures a -1, man-sized creatures no modifier, large creatures a +1, and so on. Creatures especially noted for strength, such as draft horses, might get an extra point or two. If a creature has any damage modifiers from strength, use Table 1 in the ***PHB*** to estimate its strength score. Wisdom generally equates to intelligence, with an extra point or two if the creature has priest spells or is noted for its cunning or guile. Most monsters have higher than normal constitutions (say 11-13), modified for size as per strength. Most monsters have low charismas (say 8-10) with extra points added for high intelligence and times when a creature deals with other monsters of the same alignment. Needless to say, it's always better to go through this process *before* play begins when possible.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '100',
            question: `The description for the wall of sand spell in ***FORGOTTEN REALMS® Adventures*** implies that the wall is always 12' high, no matter what the caster's level. Is this the case?`,
            answer: [
                `Judging from the descriptions of other ***wall*** spells, I suggest that a ***wall of sand*** be no thicker than 4' per caster level, up to 12' high per caster level, and up to 4' long per caster level.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '100',
            question: `The ***spectral wings*** spell from ***FORGOTTEN REALMS Adventures*** creates two 12' wings with a wingspan of 26'. Doesn't 12+12 = 24? Also, the ***spectral wing's*** will follow their last instruction if the caster is slain. How aggressively will they follow an order such as "kill those creatures that are attacking me"?`,
            answer: [
                `The spell creates a ghostly steed with 12' wings; the extra 2' come from the thickness of the mount itself. the steed has no intelligence and acts only at the caster's command. It is utterly incapable of following complex orders. The DM might allow the steed to make overbearing or pummeling attacks, but the caster must think out such attacks action by action, as though performing the attack himself. If, for example, the caster orders the steed to swoop own and attack a foe, but the caster is slain before he gets there, the steed follows the last command—to swoop—and probably will smack the ground at a high rate of speed as there is nobody to stop its dive. In this case, the steed tries hard to drive itself right into the earth until its duration expires.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '170',
    publication_year: '1991',
    publication_month: 'June',
    foreword: `This month, the sage again looks at the theory and practice behind the spells in the AD&D® 2nd Edition game—among other things.`,
    sage_advice: [
        {
            page_number: '95',
            question: `Can the victim of a ***maze*** spell choose to remain inside longer than his intelligence would allow, or must he escape immediately? What about a held, unconscious, or slain victim? Would a blind victim require more time to escape than his intelligence would indicate? Can the victim do anything while in the ***maze*** except try to escape? That is, can he cast a spell, drink a potion, scry, lay on hands, etc.? Can a ***teleport without error*** spell be used to escape the ***maze***, since it allows the caster to "jump" planes?`,
            answer: [
                `The spirit of the spell description suggests that the nature of the labyrinth created by the maze spell prompts the victim to escape as soon as possible, and that no actions other than escape are possible while a victim is within. The victim can try a spell to get out, but he cannot do anything that does not contribute directly to escape. A slain victim is no longer a creature and is not subject to the spell, which affects only creatures. A ***held*** victim cannot begin to escape until the ***hold*** spell wears off, but the maze spell's duration can never exceed eight turns. Likewise, an unconscious victim will emerge from the labyrinth when its duration expires 2d4 turns later. Note that the victim's intelligence, not speed, is the primary factor in escape; a slowed victim does not spend additional time in the labyrinth. If the labyrinth's "shifting planes of force" are similiar to ***walls of force***, sighted victims would have to feel or sound the way out, as the planes would be invisible. In any case, the spell description implies that the labyrinth is a visually confusing place, so blind victims should have no extra difficulty escaping and creatures well adapted to blindness might escape more easily at the DM's option. Local conditions can make ***teleportation*** of any kind impossible, and the labyrinth would seem to be one of those places.
`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '95',
            question: `Will an ***anti-magic shell*** spell negate innate magic resistance? What about magic resistance from a magical item?`,
            answer: [
                `Magic resistance comes into play only when the ***anti-magic shell*** spell could directly affect the resistant creature. A conjured or summoned magic-resistant creature would be hedged out by an ***anti-magic shell***, and its magic resistance, regardless of its source, would come into play. If the magic-resistance roll succeeds, the ***anti-magic shell*** collapses, as would any other in-place spell (see the ***DMG***, page 67). If the magic-resistant creature is not conjured or summoned, it is not hedged out, but its magic and magical items cease functioning while within the ***anti-magic shell***. If a conjured or summoned creature fails its magic resistance roll, it is hedged out by the ***anti-magic shell*** and all its abilities and items work normally. However, the ***anti-magic shell*** continues to negate any of the creature's magical effects that are cast into it. In no case does magic resistance allow nonartifact magical items to continue functioning inside an intact ***anti-magic shell***. Note that a magic-resistant creature inside an ***anti-magic shell*** still is magic resistant, but this usually is irrelevant as no mortal magic works within that spell.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '95',
            question: `What should be considered when calculating the damage inflicted on an attacker by a ***fire shield*** spell? If a man-sized creature attacks a large creature with a weapon, does the attacker suffer damage at the weapon's larger-than-man-size rating or at the man-size rating? What if the target is immune to the attack?`,
            answer: [
                `A ***fire shield*** returns the actual damage inflicted on the protected creature. If an attack delivers **10** hp damage, then the attacker suffers **10** hp damage even if the weapon used couldn't do **10** hp damage if employed against the attacker. If the attack fails to deliver any damage to the victim, the attacker suffers no damage.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '95',
            question: `The ranges of the two ***globe of invulnerability*** spells are 0. Since this means the spell is automatically cast on the wizard, why can't these spells move with the caster?`,
            answer: [
                `The two effects are immobile. In this case, the effect appears at the caster's location and remains behind when he moves.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '95',
            question: `Can a creature's innate abilities be foiled as spell-casting can?`,
            answer: [
                `Generally not. Using an innate ability can cause an initiative delay (see the ***PHB***, page 94) but does not require a significant amount of concentration.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '95',
            question: `In an AD&D SPELLJAMMER™ campaign, do personal air envelopes exist on planetary bodies? For example, is a mountain climber at extreme altitude able to breathe in his air envelope, or is the envelope absent until the character leaves the atmosphere completely?`,
            answer: [
                `I suggest you allow personal air envelopes to exist only in wildspace or the phlogiston. However, DMs are free to decide exactly where an atmosphere ends and wildspace begins, and they may even vary it from planetary body to planetary body. Some planets might have a sharply defined boundary between the two; in such systems, a traveler either is in the atmosphere or in space. Other planets might have an indefinite boundary; travelers in the atmosphere near the boundary might have difficulty breathing until they cross into wildspace and carry away enough atmosphere to form a breathable envelope. The boundary between space and atmosphere needn't be uniform. Such a boundary might exist at different altitudes at different spots on one planet, and a planet might have mountains that poke through the atmosphere into space.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '171',
    publication_year: '1991',
    publication_month: 'July',
    foreword: `This month, the sage shares more insights on the workings of spells in the AD&D® 2nd Edition game and takes a look into the realms of siege warfare, psionics, and the AD&D SPELLJAMMER™ setting.`,
    sage_advice: [
        {
            page_number: '90',
            question: `Recently, one of my players wanted to have his character use a ***phantasmal force*** spell to create illusory duplicates of his entire party. I've always assumed that ***phantasmal force*** can create only one image, so I said no. Was I correct? Can a ***phantasmal force*** spell be used to hide people? Can it make a party on a road look like just a road?`,
            answer: [
                `The spell description supports your view. The first sentence says the spell can create the illusion of "any object, creature, or force." All the terms are singular, and this probably isn't an accident. On the other hand, one can play around a bit with the word "force." The term "force" indicates things that are not physical objects but that have physical effects, such as lightning—but a group of beings organized into a military unit or for other purposes also is a "force." I once saw an interesting compromise between these two views: The DM allowed ***phantasmal*** units of creatures, but only if all the creatures in a unit were identical and only if they all moved and acted together. It also isn't contrary to the spirit of the rules to allow ***phantasmal*** cave-ins or avalanches. If you interpret the description narrowly, these are out of the question because they are made up of many small objects; however, the individual objects *are* part of a larger whole. Note that anything created by a ***phantasmal force*** spell (and its cousins, the ***improved phantasmal force***, ***spectral force***, and ***advanced illusion spells***) is strictly limited to the spells immobile area of effect. A ***phantasmal*** creature, for example, can move but must remain entirely within the area of effect.`,
                `The ***phantasmal force*** spell and its cousins create images of things. These spells do not cause things to disappear or to appear to change their forms; that's what the ***invisibility***, ***massmorph***, and ***veil*** spells are for. A ***phantasmal force*** spell can create a wall or boulder behind which the party can hide, but it can't make the party disappear or look like something else.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '90',
            question: `I've encountered a DM who insists that the wizard spell ***fly*** ends if the recipient lands, which in effect makes the spell good for only one "hop." Is this really the case?`,
            answer: [
                `This sounds like a workable house rule, but there is nothing in the spell description (in either edition of the AD&D game) that even begins to suggest that this is the case. Note that clever ***fly*** spell users can get around this rule just by hovering a few inches off the ground instead of actually landing.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '90',
            question: `Do "at will" abilities happen instantaneously? For example, can a creature that can become *invisible* at will first attack, then become *invisible* before any opponents can return the attack? If there is a delay before the creature can become *invisible*, does the delay last as long as the casting time for a spell? Can "at will" abilities be combined with spells or melee attacks?`,
            answer: [
                `Innate, spell-like abilities use most of the rules for spell-casting *except* casting time. They require only a fleeting mental command; however, they cannot be combined with spell-casting or physical attacks, and they are not instantaneous (there is an initiative penalty of + 3). See the combat section in the ***Dungeon Master' s Guide***, page 64, for more details.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '90',
            question: `In psionic combat, are the values listed in ***The Complete Psionics Handbook***, Table 14, page 26, added to the character's relevant attribute (wisdom) to get the score needed for a successful attack, or are they added to the power score? Also, why is ***psychic crush*** such a lousy attack mode? There are more effective attacks for every defense on the table.`,
            answer: [
                `The modifier is added to the power score, not the ability score. Whether or not ***psychic crush*** is a "lousy attack" is a matter of opinion. It is true that the other attack forms will probably yield contact against a closed mind more quickly than ***psychic crush*** can, but ***psychic crush*** has a respectable range (short, but the power score doesn't drop at the extreme end of the range), and it can do real damage.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '90',
            question: `What does the term "X Mult" mean under the PSP entry in the duergar and yuan-ti listings in ***The Complete Psionics Handbook's*** "Monstrous Update" section?`,
            answer: [
                `"Mult" means multiplier, which is the same as the creature's hit dice. The more hit dice, the more psychic power points the creature has.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '90-91',
            question: `How much do siege engines cost? ***The Castle Guide*** gives rules for their use, but not their costs.`,
            answer: [
                `Here's an unofficial price list to hold you until something better comes along:`,
            ],
            image: 'sage_advice_171_q06.png',
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '91',
            question: `When designing a custom spelljamming vessel, how do you define the ship's tonnage, maneuverability class, and crew requirements? How much does it cost to build a spelljammer from scratch?`,
            answer: [
                `This is a topic is too complex to deal with here. Until something official comes along, which may happen in 1992, individual DMs must make these decisions on a case-by-case basis by comparing ships designed for their campaigns with the ship statistics given on pages 28-33 of the ***Concordance of Arcane Space***, from the SPELLJAMMER boxed set. Here are a few unofficial suggestions for determining statistics and costs for new types of spelljammers:`,
                `A quick way to estimate a new ship's tonnage is to multiply its beam length by its keel length, then divide by 120 or 125. This works well only for the oblong hull types such as hammerships. Generally, a ship can carry one person per ton of displacement, and it requires one crew member per three tons of displacement. Converted groundling ships and large, blocky ships, such as neogi deathspiders and dwarven citadels, have poor maneuverability ratings (E or F). Compact, barrel-shaped ships, such as squid ships and hammerships, have midrange ratings (C or D), and light ships with lots of sail area have high ratings (A or B). Judging from the repair rules on page 70 of the ***Concordance***, building a ship from scratch is much more expensive than buying one "as is!" About 1,000 gp per ton seems to be an accurate figure for medium-sized, fairly maneuverable ships (30-60 tons, maneuverability class D) made of thick wood. This cost does not include large weapons or motive power, though the builder might offer the purchaser a package deal. Highly maneuverable ships, or ships made of metal or ceramics, would cost more per ton. The 1,000 gp/ton figure is significantly lower than the repair costs, but I assume the listed repair costs reflect quite a bit of haste and desperation.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '91',
            question: `Who is the "attacker" if two spelljammers declare head-on rams against each other? It stands to reason that the ship with the initiative is the attacker, but what happens if they roll simultaneous initiative?`,
            answer: [
                `Designating the ship with the initiative as the attacker seems to be a good ruling to me. I suggest re-rolling a simultaneous initiative right before the ramming attempts take place. Keep re-rolling ties until one ship wins, then follow the rules on page 65 of the ***Concordance***.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '91',
            question: `Where are the new proficiencies in the SPELLJAMMER boxed set? I can't find them anywhere.`,
            answer: [
                `I can't either (they were dropped from the rules; see "Awash In Phlogiston," in DRAGON issue #153). The module SJRl ***Lost Ships*** (TSR product #9280) has a few space proficiencies, and there will be a host of new proficiencies in one or both of the SPELLJAMMER rules supplements scheduled for release next year: the ***War Captain's Companion*** boxed set (tentatively scheduled for March 1992) and ***The Complete Spacer's Handbook*** (tentatively scheduled for October 1992).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '91-92',
            question: `The THAC0 listings for large weapons, on pages *40-42* of the ***Concordance of Arcane Space***, conflict with the listings on page 57. Which ones are correct? The book says large weapons ranges are reduced inside of atmospheres, but by how much?`,
            answer: [
                `The table on page 57 has the correct THAC0s; this table also is included in the ***SPELLJAMMER Dungeon Master's Screen***. Actually, the ranges given in the ***Concordance*** are for long-range combat, which is impossible in an atmosphere. To conduct combat with large weapons inside an atmosphere, use the siege rules in ***The Castle Guide*** or the BATTLESYSTEM™ rules. Note that spelljammers have tremendous speeds, even in atmospheres (see the ***Concordance***, page 51), and two spelljammers will have little time to exchange missile fire if they are approaching each other.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `What happens if a spelljammer enters a planet's gravity well? Does it retain its own gravity until it touches the surface, or does the planet's gravity immediately take over? Is there a minimum size for a planet?`,
            answer: [
                `The ship retains its own gravity until it touches the planet's surface; see page 14 of the ***Concordance*** for details. Note that the ship immediately drops out of spelljamming speed as soon as it enters the planet's gravity. A "planet" is here considered to be anything that displaces at least 10 tons. Note also that when two objects touch, the larger object's gravity is dominant. For example, a 50-ton ship touching a 20-ton asteroid imposes *its* gravity on the asteroid. Individual DMs might rule that certain planets immediately override a ship's gravity when the ship enters their gravity wells. This might be due to those planets' sheer size (each being, say, 100 times the ship's displacement), or it could simply be those planets' inherent properties, regardless of relative size.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `How long does it take for a spell-caster to regain spells after using a spelljamming helm? Does the helmsman actually forget his spells during and after spelljamming?`,
            answer: [
                `How long a helmsman must rest before casting spells is up to the DM. The helmsman must rest for as long as normal for him to regain the spells he currently has memorized; spelljamming does not erase the spells' patterns from the helmsman's brain, but it does disrupt the flow of magical energies within it (see page 34 of the ***Concordance***). The minimum time required to regain spell-casting ability is "a restful night's sleep" (see the 2nd Edition ***Player's Handbook***, page 81). For spelljamming purposes, this probably should be eight hours, though it may be slightly shorter or longer if the DM assigns a rest requirement that varies with the level or type of spells to be cast. In any case, the helmsman does not have to study his spells unless he wants to change them.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `Can an iron golem or green dragon in wildspace poison itself by using its breath weapon inside an air envelope?`,
            answer: [
                `No, in both cases. Golems require no air, so an iron golem's poison gas cannot harm it. However, if the air envelope is small enough (created by an object of 10 tons displacement or less), the air is immediately fouled if it wasn't already, which might cause problems for living creatures who depend on the air envelope. Poison-gas breath weapons from dragons, such as those of green and gold dragons, immediately foul air envelopes unless their tonnage is more than five times the dragon's hit dice. However, green and gold dragons are immune to gas attacks and are unharmed by air that has been fouled by such attacks, including ***stinking clouds***, ***cloudkills***, and similar spells; as far as the dragon is concerned air made foul by such attacks still is fresh, and it remains fresh for the normal period of time.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '172',
    publication_year: '1991',
    publication_month: 'July',
    foreword: `Join the sage this month as he looks at spells and magical items in the AD&D® 2nd Edition game.`,
    sage_advice: [
        {
            page_number: '90',
            question: `Just how quickly will a ***continual light*** spell consume an object it's cast on? If cast on a creature, will it cause harm if left in place long enough? If so, how quickly? Does the spell run out when it consumes the object it's cast on?`,
            answer: [
                `This is up to the DM, but the process takes hundreds of years for soft materials such as wood, and thousands of years for hard substances such as gemstones. Perishable materials, such as most foodstuffs, will rot normally long before a ***continual light*** spell can affect them. Likewise, most creatures will be dust before the spell will hurt them. If an object is consumed by this spell, the spell ceases to function.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '90',
            question: `What is the duration of the second-level ***ghoul touch*** spell from page 98 of ***The Complete Wizard's Handhook***? The summary at the beginning says one round per level, but the text says 3-8 rounds.`,
            answer: [
                `The caster's ability to use ***ghoul touch*** lasts one round per level. Victims who are touched and fail their saves vs. paralyzation exude a carrion stench and remain paralyzed for 3-8 (1d6+2) rounds.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '90',
            question: `Can an ***anti-magic shell*** be cast on a building in conjunction with ***permanency***? If so, could spells be cast inside the building? Could spells be cast from inside at targets outside?`,
            answer: [
                `***Anti-magic shell*** cannot be made permanent. (***Permanency*** affects very few spells; see the ***Player's Handbook***, pages 190-191.) In any case, ***anti-magic shell*** has a spherical area of effect; it does not conform to the shape of the area where it is cast. No spell can pass into, through, or out of an ***anti-magic shell***.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '90',
            question: `What happens to a character when he co-exists with his ***clone***? Does a character suffer damage if his ***clone*** is hurt? Can the ***clone*** automatically pass for the character? Could the ***clone*** steal a dragon's egg and frame the character for the deed?`,
            answer: [
                `There is a link between a ***clone*** and its original; this unfailingly alerts each creature to the other's existence, but it does not transfer damage between the two or provide any additional information, such as how far apart the two beings are. The ***clone*** is almost indistinguishable from the original, as it has all the original's memories and abilities. A particularly clever ***clone*** might try to make mischief by committing crimes in the originals name, but note that the ***clone's*** prime motivation is to slay the original before insanity sets in, which usually takes a week. Note also that beings who know the original quite well might be able to detect the ***clone***, as the original invariably has at least 2-8 months' worth of recent knowledge that the ***clone*** does not. (The ***clone*** has the originals abilities and memories at the time the flesh sample was taken; once this is done, it takes 2-8 months to grow the ***clone***. The gap in knowledge might be even longer if the ***clone*** wasn't started immediately after the flesh sample was taken.)`,
                `Finally, note that dragons are pretty hard to fool and even harder to steal from. A ***clone*** would have to be exceptionally clever and lucky to successfully make off with a dragon's egg, and a dragon hunting for a stolen egg isn't very likely to attack the wrong suspect. Very smart dragons, however, might try to force or convince the original to join the hunt for the egg and confront the ***clone***.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '90-91',
            question: `Is the ***sunray*** power of a ***sun blade*** the same as the seventh-level priest spell of the same name? Can the wielder attack while using the ***sunray*** power?`,
            answer: [
                `This question sparked quite a bit of debate among my colleagues at TSR, Inc. However, the consensus is the swords ***sunray*** power works exactly as described in the swords description (see the ***Dungeon Master's Guide***, page 185), not like the ***sunray*** spell. DMs are free to decide if the swords ***sunray*** power can be used while attacking; it's reasonable to assume the vigorous overhead swinging required to evoke the ***sunray*** would preclude attacks. On the other hand, the rules aren't precise about what vigorous overhead swinging really is, so it's not unreasonable to assume that the wielder can't just add an overhead flourish or two while attacking. If you decide to allow attacks while maintaining the ***sunray***, you might want to impose a to-hit or initiative penalty (say, -2), or both. Note that a dim glow persists for one turn after the swinging stops, no matter which option you choose.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '91',
            question: `What are the dimensions of the beams created by the ***sunray*** spell? Is the caster continually surrounded by a sunny glow while the spell lasts? If not, does the caster know when the spell will end?`,
            answer: [
                `This question sparked only slightly less spirited arguments that the previous one. The "beams" are spherical bursts of light with a 5' radius. No glow surrounds the caster, but the caster can create one burst each round (unless he is attacking or performing some other action other than movement) anywhere within the spell's range. I can't think of any overwhelming reason to assume that the caster should know how long the spell will last. How-ever, an unknown and variable duration might make casting this high-level spell far too chancy for some campaigns. A reasonable compromise might be to keep the total duration secret from the caster, but tell him if the spell has ended before he declares his actions for the round (see the ***PHB***, page 93).`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '91',
            question: `The description for the ***ring of spell storing*** says a "character of appropriate class and level" can restore spells cast from the ***ring***. Does this mean the ring can be recharged without using an ***enchant an item*** spell? Or is the ***enchant an item*** spell required, as stated in the rules about recharging magical items on page 88 of the ***DMG***?`,
            answer: [
                `One of the unique properties of the ***ring of spell storing*** is that it can be recharged easily. ***Any*** spell-caster who can memorize the appropriate spell can recharge the ring. This is an exception to the general rules on recharging magical items.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '91',
            question: `When an ***enchant an item*** spell is used to prepare an item for recharging, does the item have to make a saving throw for each spell cast into it? If the save fails and the item's enchantment is disturbed, can the item be reenchanted?`,
            answer: [
                `An item to be recharged must make one saving throw when the ***enchant an item*** spell is cast at the beginning of the process. If the save fails, the item is destroyed (it crumbles to dust). If the save succeeds, no more saves are required, as charges replaced in the item are not "new" spells cast into it.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '91',
            question: `Can a ***vorpal*** weapon be used to sever an extremity, such as a tentacle from the ***Evard's black tentacles*** spell or a dragon's tail, if the wielder is attacking the dragon from behind? Can a weapon of ***sharpness*** sever a head or neck, or only extremities such as arms, legs, tails, and tentacles?`,
            answer: [
                `***Vorpal*** weapons sever only heads and necks; if the DM decides the wielder cannot reach the neck, nothing is severed. Weapons of ***sharpness*** can sever all types of extremities except for heads. Whether or not the tentacles from ***Evard's black tentacles*** qualify as extremities in this case is up to the DM. Since the **tentacles can be** damaged by weapons, they probably should be treated as part of a creature, vulnerable to severing by weapons of ***sharpness*** and precisely targeted spells such as ***magic missile***.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '91-92',
            question: `How does the gender change caused by a ***girdle of femininity/masculinity*** change the victim's ability scores? What if the victim changes to neuter gender?`,
            answer: [
                `There's nothing in the ***girdle's*** item description to suggest that the victim's ability scores change at all. Only the victim's gender changes. Note that the AD&D 2nd Edition game assumes gender has no measurable affect on a character's ability scores.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `Can magical gauntlets be worn over magical gloves? Can magical bracers be worn with magical gauntlets? Can two different types of magical bracers be worn at the same time (e.g., ***bracers of defense*** and ***bracers of archery***)? Can two different girdles be worn at the same time (e.g., a ***girdle of many pouches*** and a ***girdle of giant strength***)? Can magical cloaks be worn with magical robes? Can magical boots be worn over magical slippers?`,
            answer: [
                `First, let's define a few terms for gaming purposes: A ***bracer*** is a forearm protector. It can be as compact as a very wide bracelet or large enough to cover the whole forearm; bracers are made of metal, leather, or heavy cloth. A ***gauntlet*** is a hand protector that covers at least the wrist and back of the hand, although it might also cover the fingers and most of the forearm; gauntlets are made of metal, leather and metal, leather, or heavy cloth. A glove at least covers the palm and back of the hand, though it can go from the fingers all the way above the elbow. A ***girdle*** is a belt, simple or elaborate, worn about the waist or hips. A ***robe*** is a garment fitted to the body and usually worn over other clothing; minimally, a robe covers the torso from the neck to the waist, but usually is longer. A robe may or may not have sleeves. Any garment that covers the body, from a shirt to a dress, might be called a robe. A ***cloak***, ***cape***, or ***mantle*** is a loose, usually sleeveless outer garment hung from the shoulders and worn over other clothing. Generally, a cloak is long and full, covering the body from the neck to below the knees and sometimes to the ankles. A cape is shorter and narrower than a cloak, covering the back from the neck to the waist. but sometimes longer. A mantle covers the shoulders, front and back. Cloaks, mantles, and robes can be hooded, but capes are not. Boots are sturdy, close-fitting garments that cover the foot from toe to ankle and sometimes the entire leg as well. ***Slippers*** are lightweight and cover the soles of the feet, toes, and heels, but might cover the ankles as well.`,
                `Generally, two or more items can be worn together if they cover different parts of the body. There are both logical and game-balance reasons for this. Obviously, a character wearing two or more cloaks is going to be just as overly powered as a character wearing three or more rings. Furthermore, game logic assumes a magical garment must fit reasonably well to function. The items cease to function if a character layers them on until he looks like a walking laundry basket.`,
                `Some garments do overlap in normal use. A robe can be worn with a cape, mantle, or cloak, but a character can wear only one robe and one cape, mantle, or cloak. Bracers can be worn with gloves or gauntlets. Some gauntlets are made to be worn over gloves; indeed, there is no reason why a campaign can't have some gauntlets that fit over gloves and some that do not. Many people in the Middle Ages wore two belts; one was high on the waist to hold up breeches or hose and to hold pouches and tools, and one rode on the hips, usually to support a sword or other large weapon. Sometimes people wore two belts crossed over the hips and a third on the waist. I suggest that two magical belts or girdles be the absolute limit, and only if they have different functions (e.g., one that augments ability scores or skills, such as a ***girdle of giant strength***, and one for carrying equipment, such as a ***girdle of many pouches***). A character can wear only one set of outer footgear. Any garment thin enough to be worn inside a pair of shoes or boots would be called a sock, not a slipper.`
            ],
            attributes: [ATTRIBUTE_2E],
        },

    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '173',
    publication_year: '1991',
    publication_month: 'September',
    foreword: `This month, the sage shares more insights into the workings of the gods in the AD&D® 2nd Edition game—and the workings of more mundane beings, such as player characters and monsters.`,
    sage_advice: [
        {
            page_number: '62',
            question: `The introduction to the 2nd Edition ***Legends & Lore*** tome says deities are unable to visit the Prime Material plane, yet the Aztec deities are described as living on the Prime Material plane. Are they exceptions to the rule? Are these deities restricted to their home planets? If so, how can Quetzalcoatl keep his vow to return to the valley of Mexico? How can Ometeotl be barred from going anywhere if he's the embodiment of the universe? How can an omnipotent deity such as this have such limits, and why would such a deity need an avatar? Tezcatlipoca is said to he unable to visit this Prime Material plane; isn't this another contradiction?`,
            answer: [
                `First, a careful rereading of page 6 of ***Legends & Lore*** will show that deities are not unable to visit the Prime Material plane, but they never do; this is because doing so automatically would draw the attention and ire of the other deities. No deity is inclined to risk destruction at the hands if his or her divine peers.`,
                `The Aztec deities section does seem to be a bit muddy, but less so if you assume the words "Prime Material Plane" actually mean "the planet where the campaign takes place" or "the valley of Mexico." Like beings in other pantheons, the Aztec deities are quite interested in mortal affairs and won't tolerate direct divine interference in them. Exactly how Quetzalcoatl will keep his vow is up to the DM. Perhaps the other deities will respect it and allow him to return, or perhaps Quetzalcoatl expects his followers to pave the way for him in such a way as the other deities ***cannot*** object.`,
                `If you carefully reread Ometeotl's section, you'll find he is the embodiment of the universe only in a sense, not literally. In any case, no deity in ***Legends & Lore*** is omnipotent, not even in its own area of control. All deities share the limelight with other deity-class creatures who have the power to confound or even kill them. Avatars are handy for any deity, as an avatar can go places where the deity itself cannot go without recriminations. Also, note that deities can have multiple avatars working at different locations at the same time (10 avatars at once for a greater deity). Likewise, Tezcatlipoca is not ***barred*** from the mortal world any more than any other deity. He is in the habit of using his true form—rather than an avatar—to accomplish various tasks. However, he doesn't use his true form to visit the mortal world.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '62-63',
            question: `If deities never visit the Prime Material plane, how can the cambion Iuz live on Oerth (in the WORLD OF GREYHAWK® setting)? I run a campaign based in Oerth, and Iuz is a major villain. With the appearance of the new ***Legends & Lore*** tome, do I remove Iuz from Oerth and from the game, or leave the demigod free to ravage the place? Do the new rules have information on cambions? Where do I find rules on Iuz's assassin abilities, or do they just disappear now that the new rules have come along?`,
            answer: [
                `Statistics for cambions are located in the ***Monstrous Compendium***, Outer Planes appendix, under the heading "Tanar'ri." If you decide to treat Iuz like any other deity and restrict his true form to another plane, you hardly remove him from play. As a demigod, he can have his worshipers or even his avatar do his dirty work. (Yes, I'm aware that the ***GREYHAWK® Adventures*** hardback says Iuz has no avatars, but if you're going to kick him off the Prime Material plane because of what ***Legends & Lore*** says, there's no reason you can't give him an avatar.) Note also that the ***Legends & Lore*** tome does not necessarily consider the way things work on Oerth; it is a general work describing how deity-class creatures fit into most campaigns. I can't think of a single reason why you can't have Iuz continue to prowl about the Flanaess, causing as much trouble as ever. Also, since Iuz is pretty weak as most demigods go, he probably can be slain by mortal attacks, unlike the more powerful demigods described in ***Legends & Lore***.`,
                `You have several options when dealing with Iuz's assassin abilities: 1) You can continue to use the AD&D 1st Edition game's rules in Iuz's case; 2) you can give Iuz thief abilities instead; 3) you can treat Iuz as a thief using the assassin kit from the ***Complete Thief's Handbook***; or, 4) you can just drop the abilities altogether.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '63',
            question: `How do the various deities from the ***Legends & Lore*** tome achieve such high damage scores, such as Ares's sword (3-30 hp) and spear (5-50 hp) without having titanic size and strength?`,
            answer: [
                `As explained in the "Avatars" section (pages 4-5), a deity and its avatars ignore mortal restrictions. The hefty damage inflicted by a deity's weapons is a direct manifestation of the deity's power. In the case of a war deity such as Ares, this power is quite potent.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '63',
            question: `The ***Player's Handbook***, on pages 26 and 52, makes it clear that only single-classed fighters—not paladins and rangers—can use weapon specialization. However, the ***Complete Fighter's Handbook***, on page 58, pretty clearly implies that all warriors (fighters, paladins, and rangers) can specialize. Did the rules change when the ***Complete Fighter's Handbook*** hit the shelves? If so, why would anyone want to play a simple fighter?`,
            answer: [
                `According to a short conversation I had with TSR, Inc.'s Dave "Zeb" Cook a while ago, the rules in the ***Player's Handbook*** and ***Dungeon Master's Guide*** are intended to serve as the fundamental basis for the AD&D® 2nd Edition game and are supposed to remain unchanged until that far-off day when a new version of the game comes along. (There are ***no*** plans for another edition currently in the works, but no set of game rules stays current forever.) While there is a continuous stream of new material planned for the game, all of it is intended to ***supplement*** the core rules, not replace them. All of the rules in the ***Complete Fighter's Handbook*** are optional, but the phrase giving weapon specialization to all warriors is an error.`,
            ],
            comment: `This was corrected in a later printing of ***The Complete Fighter's Handbook***. The newest, 11th printing of the book, correctly states that only single class fighters can specialize.`,
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '63',
            question: `With how many weapons can a fighter specialize? Is it possible to specialize in both a fighting style (from the ***Complete Fighter's Handbook***) and a weapon or combination of weapons? How do you use weapon specialization if you also are using weapon groups from the ***Complete Fighter's Handbook***? Is it possible to double specialize? If so, how do you get it and what bonuses do you get for it?`,
            answer: [
                `In the core rules, a single-classed fighter—and only a fighter—can specialize in exactly ***one*** particular weapon. If you're using weapon groups, the fighter must pick one weapon within the group as a specialty. If you're using the rules in the ***Complete Fighter's Handbook***, you can allow fighters to take more than one weapon specialization, but they still must choose their specializations one weapon at a time.`,
                `Style specialization is actually just a weapon proficiency available to warriors, rogues, and priests. Don't let the name confuse you; a style specialization is a general set of tricks for fighting a certain way, not an intensive study of one particular weapon. It is possible for a character to have more than one style specialization.`,
                `There are no rules for double specializations in the current version of the AD&D game. However, if you play a variant game and allow ***all*** warriors (including rangers and paladins) to take weapon specialization, you might allow fighters only to spend two extra proficiency slots on one weapon (and one weapon only) and become double specialized. The effect of a double specialization is up to the DM, but increasing the specialization bonus to +2 "to hit" and +3 damage seems most reasonable. If you use this unofficial optional rule, be prepared to start adjusting your campaign's play balance, because your poor monsters are going to have a hard time going toe-to-toe with your campaign's fighters.`
            ],
            comment: `The suggested double specialization almost matches the later ***Player's Option: Combat & Tactics*** that gives +3/+3 when double specialized.`,
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '63',
            question: `I have a DRAGONLANCE® campaign mage of levels 3/8/19, of robes white/red/black. How many proficiencies does he have?`,
            answer: [
                `The character has only the proficiencies due to a 19th-level wizard. When a Krynn mage changes orders, he loses two levels and becomes either a student wizard (if his reduced level is three or less) or a member of the new order. The character ***does not*** retain spells, spheres, or levels from the old order. Furthermore, Krynn's deities remove all player characters of greater than 18th level from the world (see ***DRAGONLANCE Adventures***, page 13). Your mage is now an anomaly and a renegade, and is doomed to "disappear" very soon unless he has managed to es- cape from Krynn, perhaps on a spelljammer. Note also that your mage has no special magical powers—such as those gained from Krynn's moons—while away from Krynn.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '63',
            question: `What is the speed factor of a touch attack?`,
            answer: [
                `If you wish to assign a speed factor to a touch attack of any kind, I suggest you use the rule on page 94 of the ***PHB***, where a "natural" attacks speed factor depends on the attacker's size. For a man-sized creature, the speed factor is 3.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '63',
            question: `Can a beholder's gaze attacks be reflected by a mirror?`,
            answer: [
                `Beholders don't have gaze attacks. They have various magical rays that are generated from their eyes, which is not the same thing as a gaze attack at all. A beholder's eye-beam attacks, and most other magical effects, cannot be reflected by a mirror.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '63',
            question: `Do liches retain racial abilities, such as drow infravision? How does magical aging, such as the casting of ***wish*** spells, affect liches?`,
            answer: [
                `All liches have very good infravision, or its equivalent (see the ***Monstrous Compendium***, Volume I). DMs are free to have liches retain other racial abilities. Liches do age, though their "lifespans" last for centuries. When subject to magical aging, such as casting a ***wish*** spell, a lich must make a system-shock roll just as any other spell caster does. The DM is free to set the lich's constitution score at any appropriate value for this purpose (18 or even higher is not unreasonable). However, if the lich fails, its body is ripped apart by the force of the spell and the creature "dies."`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '63-64',
            question: `On page 30 of the ***Player's Handbook***, it says that mages cannot wear any armor, but page 182 of the ***Dungeon Master's Guide*** says magic-users can wear magical elven chain mail. Which is correct? Can mages wear other types of armor made from elven steel?`,
            answer: [
                `If you carefully reread page 182 of the ***Dungeon Master's Guide***, you'll find it says that elven fighter/mages can wear elven chain mail without restriction; this is the only case in which magic-users can wear this armor. This rule also is included in the ***Player's Handbook***, page 45. Single-classed mages cannot wear any armor at all. It probably will not cause play-balance problems if the DM allows other multiclassed (but not dual-classed) warrior/mages to wear other types of armor made from elven steel; details on these armors must be invented by the DM (using the ***DMG***, pages 37-38).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '64',
            question: `On page 69, the ***Player's Handbook*** says the rate of fire for thrown daggers is two per round, but page 99 says the rate of fire is three per round.`,
            answer: [
                `You seem to have a first-printing ***Player's Handbook***, which was in error. The word "daggers" at the top of the second column should read "darts," which it does in the second and subsequent printings.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '64',
            question: `Can a thief who has been observed by an enemy successfully backstab that enemy if the enemy ignores the thief and attacks the thief's party instead? The rules say only humanoid creatures can be backstabbed. Does this exclude animals such as bears or wolves?`,
            answer: [
                `A successful backstab requires an element of surprise. If an opponent spots a thief maneuvering for a back attack, the opponent will not be caught unaware and cannot be backstabbed. Interpreting the rules strictly, ***only*** humanoid creatures—bipedal, one head, two arms, two legs, tail optional—can be backstabbed. Game balance probably won't suffer if the DM also allows common, four-legged animals to be backstabbed, but note that many animals have good senses and are pretty hard to sneak up on. Note also that the thief must be able to locate and strike a vital spot to get the damage multiplier from a backstab. A creature the thief has never studied or encountered before probably cannot be backstabbed, and neither can very large creatures, such as dragons and dinosaurs, or amorphous creatures, such as slimes and jellies.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '64',
            question: `According to the rules, an ***invisible*** and ***silenced*** elf sneaking up on an opponent whose dexterity is 15 or lower can gain surprise on an 11in-10 chance. (The normal chance of surprise is 3-in-10 with a -4 modifier for being an elf without metallic armor, a -2 modifier for being ***invisible***, and a -2 modifier for being ***silenced***.) Is this really fair?`,
            answer: [
                `What is fair is up to the DM. However, if you have the common sense to realize this situation is unfair, it shouldn't be too hard to figure out what to do about it. The -4 modifier for being a lone elf not in metallic armor already assumes the character is moving silently (see ***PHB***, page 22), so I suggest dropping the -2 modifier for silence in this case (you can't be doubly silent). Generally, surprise chances shouldn't be greater than 9-in-10 except in extraordinary circumstances, such as if a thief sneaks up on a sleeping drunk.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_INVISIBILITY],
        },
        {
            page_number: '64',
            question: `I just finished reading most of the DRAGONLANCE® saga paperbacks and I really like kender! Are there rules for playing this race in the AD&D game?`,
            answer: [
                `Indeed there are. Ask your game or book dealer for the ***DRAGONLANCE Adventures*** hardback (TSR product #2021). This tome is crammed full of information for playing campaigns set in the world of Krynn. It was written for use with the AD&D 1st Edition rules, so you'll have to apply a little common sense here and there to make everything work. There also is information on kender and all other major Krynn races in the ***Monstrous Compendium***, DRAGONLANCE Appendix (TSR product #2104). You might also want to check out "All About the Kender," in DRAGON issue #101.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '174',
    publication_year: '1991',
    publication_month: 'October',
    foreword: `This month, the sage takes a short look at some enchanted items from the AD&D® 2nd Edition game.`,
    sage_advice: [
        {
            page_number: '14',
            question: `Can a ***wand of negation*** be used to dispel spells with a duration, such as ***fly*** or ***continual light***, or does it work only on effects generated from wands, staves, and rods?`,
            answer: [
                `A ***wand of negation*** prevents devices from generating magical effects. A ***wand of negation*** does not affect creatures or existing magical effects, though many readers have gotten confused while reading the wands description (see the ***Dungeon Master's Guide***, page 157) and concluded otherwise. (The third sentence seems to be the major stumbling block, as it easily can be misread to indicate that the wand can negate spells from any source.) Note that the ***wand of negation*** need not be pointed directly at the item to be negated; it suffices to point the wand at the individual employing the item. The DM must decide what constitutes a "spell-like effect"; magical bonuses cannot be negated, nor can most other functions that affect only the item's user, such as ***necklaces of adaptation*** or ***brooms of flying***. Devices that create offensive magical effects such as ***fireballs***, ***lightning bolts***, ***shooting stars***, ***polymorph other***, and so on can be negated. Devices that have charges lose the appropriate number of charges if one of their effects is negated.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Can a portable hole be draped across a character's back to prevent him from being back-stabbed?`,
            answer: [
                `While a ***portable hole*** can be spread out over any surface to form its extra-dimensional space, a creature is not a surface. Creatures cannot make themselves insubstantial—and therefore immune to attack—by wrapping themselves in ***portable holes***.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `What happens to items or creatures inside a ***portable hole*** or ***bag of holding*** when a reverse ***time*** spell (from ***Tome of Magic***, page 103) is cast?`,
            answer: [
                `This is up to the DM, but I strongly suggest that if the hole or bag is closed, the contents should be unaffected by most spells, as their areas of effect cannot extend into extradimensional spaces any more than they can cross planar boundaries. If the items are open (or are opened inside the area of effect), all their contents are affected normally. In this case, opening the item creates a portal through which objects, creatures, and magical effects can pass.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '14',
            question: `Can a ***carpet of flying*** be used underwater?`,
            answer: [
                `I can't think of any overwhelming reason why magical flight of any kind won't work under water, especially spells such as ***levitate*** and ***fly*** Some DMs, however, might rule that items such as ***brooms of flying*** and ***carpets of flying*** are too bulky or too dependent on an extraplanar connection to the plane of elemental Air to work while submerged. Alternately, the DM might rule that submarine movement is possible at one-half or one-third the aerial rate, due to increased resistance or other factors.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `Can ***gauntlets of dexterity*** raise a character's dexterity score above 18?`,
            answer: [
                `There's nothing in the rules that says scores over 18 are impossible. Some DMs, however, might want to set some maximum value for a dexterity score augmented by these gauntlets or similar items. In such cases, the upper limit (for the total score) probably should be set somewhere in the 18-20 range.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '14',
            question: `My group has been toying around with the rule on page 73 of the ***Player's Handbook*** that says size-S creatures can use only size-S weapons with one hand. If we create smaller versions of size-M weapons, such as a hand axe made for a dwarf, what would its statistics be? Also, what is the proper size class for a short sword? The weapons table says it's size M, but page 96 ("Attacking with Two Weapons") seems to indicate that it's size S.`,
            answer: [
                `First, I suggest that you treat player-character dwarves as size-M creatures. About half of them should be more than 4' tall and qualify as size-M creatures without the benefit of a house rule anyway.`,
                `As this column has pointed out before, short swords are size-S weapons; the M listing in the weapons table (***Player's Handbook***, pages 68-69) is in error.`,
                `There really isn't any clean, neat method for generating statistics for scaled-down weapons, but a good rule of thumb might be to subtract one point of speed factor, two or three pounds of weight, and one "step" of damage die per size category reduced; thus, a weapon that does 1d6 hp damage would do 1d4 hp after downsizing. Obviously, you'll get some pretty strange results if you try to use this suggestion without making some common-sense adjustments on a case-by-case basis. Note that size-S creatures can use size M weapons with two hands.`,
            ],
            comment: 'Follow up on Sage Advice #149 about dwarves sizes.',
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '175',
    publication_year: '1991',
    publication_month: 'November',
    foreword: `Join the sage as he turns his attention to a few problems confronting Dungeon Masters and their AD&D® 2nd Edition campaigns.`,
    sage_advice: [
        {
            page_number: '75',
            question: `The various SPELLJAMMER™ rules hooks say that weapons can he add- ed to a ship at the cost of one ton of cargo space per weapon, to a maxi- mum number of weapons equal to half the ship's tonnage. Since cargo space also is equal to half the ship's tonnage, this means that all the ship's cargo space can be used up by extra weapons. I have two problems with this: First, what do cargo space and weapons have to do with each other? Second, the rule allows a ridiculously large number of weapons to be mounted on ships. A hammership, for example, at 60 tons, can mount 30 additional weapons!`,
            answer: [
                `The maximum number of additional weapons a ship can carry ***is*** one per two tons of displacement (***Concordance of Arcane Space***, pages 26-27). However, this is a theoretical number based on a ship's gross hauling capacity. Even a quick look at the deck plans in the SPELLJAMMER boxed set reveals that cramming a spelljammer with its maximum load of weapons would take *all* the ship's deck space. Of course, a truly warlike spelljammer captain might build a "double-topped" ship with fighting decks above and below the plane of gravity, but woe to the weapons' crews if the gravity plane shifts.`,
                `Speaking of crews, general-purpose spelljammers, such as most PCs would use, don't have the quarters or air necessary to sustain a huge number of weapons crews; this tends to lower the practical limit on the number of weapons a ship is likely to have. (On the other hand, a "monitor"-type ship dedicated to defending a planet, base, or section of wildspace might be packed to its crow's nest with weaponry, and ships crewed by undead would have no breathing-air restrictions.) Also, don't forget that weapons aren't free and are not available in unlimited quantities.`,
                `Extra weapons eat up cargo space for a variety of reasons. First, a ship's cargo capacity is an abstract figure that reflects both its interior volume and its ability to carry weight. A weapons-heavy ship might have empty space in its hull, but if overloaded with cargo it would probably maneuver like a wounded duck and have a nasty tendency to split open like a wet cardboard box in combat or when landing. Also, large weapons can't just be bolted onto a ship's deck; their mounts must be braced and supported so the weapons don't break loose when fired. This extra structure not only reduces the ship's payload, it also tends to make the ship less efficient as a cargo carrier (the extra posts and beams prevent the crew from packing cargo tightly, and they otherwise waste space). Also, don't forget that large weapons need ammunition, and some of the ship's cargo space has to be allocated to its storage.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '75',
            question: `Can hit points lost to a *death helm* (from the SPELLJAMMER module SJR1 Lost *Ships*) be healed, or are they permanently lost?`,
            answer: [
                `A *death helm's* hit-point drain functions exactly like a *lifejammer's* hit-point drain (***Concordance of Arcane Space***, pages 38-39). That is, hit points lost to the *death helm* can be healed, but only after the victim is separated from the helm.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '75',
            question: `How do the crystal spheres of the SPELLJAMMER rules relate to the planar organization as described in the ***Dungeon Master's Guide*** and ***Manual of the Planes***? In particular, what about the many alternate Prime Material planes, and the astral wormholes that connect them to the outer planes?`,
            answer: [
                `This matter is left up to the DM. The most straightforward reading of the SPELLJAMMER material suggests to me that all the crystal spheres and the phlogiston that connects them are part of a *single* Prime Material plane, which makes the planar universe a very big place indeed. However, there is no reason why you can't assume that each crystal sphere is itself a *separate* Prime Material Plane, with all the variable properties described in the ***Manual of the Planes***. Note that if this is true, spelljammers would visit some spheres at their own peril. In a campaign with such a planar setup, astral and ethereal travel might very well be a workable alternative to spelljamming. With a little work, you could merge the SPELLJAMMER setting into the ***DMG's*** planar setup, treating each crystal sphere as a Prime Material plane and making the phlogiston part of the Astral or Ethereal plane, or eliminate the phlogiston and replace it with the Astral or Ethereal plane.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '75-76',
            question: `Can a character use the extra proficiency slots gained from a high intelligence score to get more weapon proficiencies? The text that goes along with intelligence table in the ***Player's Handbook*** is not specific about which kind of proficiencies are gained. And, while the proficiency section mentions extra nonweapon proficiencies, it doesn't say the extra proficiencies cannot be used for extra weapons.
`,
            answer: [
                `The arrangement of material in the ***PHB's*** proficiencies section (starting on page 50) make it clear to me that weapon proficiencies are based solely on class and level, not intelligence. Each character is automatically entitled to as many weapon proficiencies as his professional studies and knowledge allow. Nonprofessional skills—nonweapon proficiencies—are only partially dependent on a character's professional acumen, and very intelligent characters get more of them. Many DMs limit extra proficiency slots from intelligence to languages or language skills (such as reading and writing).`,
            ],
            comment: `***The Complete Fighter's Handbook*** allow for the extra proficiency slots to be used for weapons.`,
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '76',
            question: `Since the appearance of the ***Tome of Magic***, two players have been pestering me to let them turn their necromancers into necromancer/wild mages. I think wild magic is a field of study all by itself, but these guys won't let up!`,
            answer: [
                `You are correct; a character cannot be both a wild mage and a specialist wizard at the same time. Wild mages are too wrapped up in trying to understand the tangled skeins of wild magic to also understand the complexities of a particular school of spells and enjoy the benefits a devotee of a single school gets. In fact, intense and disciplined study of a single school of magic is anathema to a wild mage. So tell your two players to stop pestering you.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '76',
            question: `When a character uses ***Nahal's reckless dweomer*** (from the ***Tome of Magic***), what kind of description must the caster supply? Is he free to attempt anything he can dream up? Why even bother with a description in the first place, since the spell isn't likely to provide what the caster wants anyway?`,
            answer: [
                `As the spell description clearly states (***TOM***, page 20), the mage can attempt only spells that are written in his spell books; the mage cannot try spells he doesn't know, nor can he create new effects at the spur of the moment. The reason why the caster must say what spell he is trying to recreate with the ***reckless dweomer*** is pretty obvious (and I've seen it pointed out once on the GEnie computer networks "TSR RoundTable"). The ***reckless dweomer*** uses the Wild Surge Results table (***TOM***, page 7) to determine what happens. When rolling on this table, it's possible for the spell to function exactly as intended, or to function with enhanced or diminished effects; results such as #56 (half range, duration, area of effect, and damage) are pretty hard to adjudicate without knowing what the intended spell was.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '76',
            question: `My group has been considering what would be required to bless and dedicate a new temple or shrine—that is, to dedicate it to a deity, not to cast a spell on it. The ***focus*** spell from the ***Tome of Magic*** (pages 76-80) seems to be a step in the right direction, but doesn't seem to hit the spot. Also, are the spells listed in the ***Tome of Magic*** the only ones that can be focused, or can others be focused?`,
            answer: [
                `Since a ***focus*** spell captures and redirects "devotional" energy, I'm inclined to think that a ***site-focused bless*** spell is exactly what you want. In maintaining the ***focus***, the congregation regularly renews its ties with the divine, which should please the deity greatly. I suppose a ***prayer*** spell could be cast once in conjunction with a ***focus*** to permanently consecrate the site. Such a spell would have no lasting effects (unless the DM rules otherwise), but it certainly would get the deity's attention briefly. Officially, the spells listed in Table 3, pages 79-80 of the ***TOM***, are the only spells that can be ***focused***. However, DMs should feel free to add new spells to the list if they'll enhance the campaign. Most spells that can be ***focused*** are ones that provide immediate aid to the caster, establish the caster's (and the deity's) authority in the community, or create the proper atmosphere to worship a deity.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '76',
            question: `I've noticed that certain spells were designed to affect a given number of levels or hit dice of creatures. How do you decide what the "level" of a multiclassed character is? For example, how many hit dice or levels does an elven 7/6/5 thief/ fighter/mage have?`,
            answer: [
                `In this case, use the highest level the character has. The character in your example counts as a 7-HD creature.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '76',
            question: `I understand that magic resistance can protect a creature against natural effects such as the hailstones of an ***ice storm***. Can it also protect a creature from the effects of a ***Nystul's radiant baton*** (***GREYHAWK® Adventures***, page 60), which creates a natural effect drawn from the quasi-elemental plane of Radiance? What about the spell's ability to automatically strike a creature that has struck the caster during a round?`,
            answer: [
                `Whether or not an effect is natural has no bearing on whether or not it is subject to magic resistance. Magically created effects ignore magic resistance only if they are consequential. The rules governing magic resistance (***PHB***, page 102, or ***DMG***, page 66) use crevices created by an ***earthquake*** spell as an example. The spell ***earthquake*** does not create crevices; it creates tremors that in turn create crevices. As another example, lightning is a natural effect on the Prime Material plane and elsewhere. Nevertheless, a ***lightning bolt*** is an area-effect spell subject to magic resistance.`,
                `Magic resistance, however, cannot protect a creature against a huge stalactite or weakened wall broken loose by a ***lightning bolt***. Nor can it protect an exposed creature from random lighting strikes generated from a thunderstorm created by ***control weather*** or ***weather summoning*** spells. These last two spells do not create or control lightning; they change and agitate the atmosphere in such a way as to make lightning possible. Note that ***call lightning*** creates and directs lightning on demand, and that each stroke called is an area effect subject to magic resistance. The spell ***ice storm*** can create damage-inflicting missiles that are subject to magic resistance, as is any other area of effect spell. However, a magic-resistant creature still is blinded, slowed, and vulnerable to slipping and falling if subjected to the sleet version of an ***ice storm***, because these are consequential effects.`,
                `A ***Nystul's radiant baton*** is an "in place" magical effect subject to magic resistance. If the spell's baton strikes a magic-resistant creature and the magic-resistance roll succeeds, the baton collapses. Magic resistance never comes into play until a spell or spell-like effect comes into contact with a resistant creature, so spell effects that automatically hit, such as ***magic missiles***, still hit, though they do no damage if the magic-resistance roll succeeds.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '76-77',
            question: `The new ***PHB*** (page 22) says half-elves can be druid/rangers, but the table on page 44 does not mention this combination. What are the armor and weapon restrictions and alignment requirements for this multiclassed combination?`,
            answer: [
                `In the core AD&D 2nd Edition game, there are no druid/rangers. The reference to them on page 22 is an error, and that is why they don't appear in the table on page 44. In practice, however, druid/rangers work very well in play, offering a good mix of skills and lots of role-playing possibilities.`,
                `To determine the weapons and armor allowed to druid/rangers (if the DM decides to allow these characters at all), follow the rules on page 45 of the ***PHB***. Since a warrior priest must abide by the weapon restrictions of his mythos, the druid/ranger's weapons are limited to: club, sickle, dart, spear, dagger, scimitar, sling, and staff. The druid/ranger also must observe the druids special armor restrictions, thus being limited to leather armor and wooden shields. Since rangers must be good and druids must be neutral, alignment is a problem. I suggest that a druid/ranger's alignment be limited to neutral good.`,
                `Note that the rules on page 45—especially the weapons restrictions—tend to discourage multiclassed priests except for characters dedicated to the appropriate deities. For example warrior priests who follow war deities might have access to a useful selection of warrior armor and weapons (***PHB***, page 34) and will be far more effective as warriors than, say warrior clerics, who are limited to blunt weapons. Since the original rationale behind druid/rangers is that these two woodland professions have enough common interests to generate at least a few multiclassed characters, and since the druid/ranger by necessity already violates the druid's alignment restriction, the DM might wish to bend the rules a bit to allow druid/rangers to function more effectively as rangers. The best way to do this is to expand the weapons list to include at least one kind of bow and maybe the warrior's mainstay, the long sword. The DM also might consider lifting or altering the armor restriction. This might be easier if the character in question were actually dedicated to a specific woodland or elven deity (see next question).`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '77',
            question: `Who or what, exactly, do druids worship? Do they simply venerate and gain their powers though some personification of nature, or do they worship specific deities, such as those from the Celtic mythos?`,
            answer: [
                `This is entirely up to the DM. Both the FORGOTTEN REALMS® and WORLD OF GREYHAWK® fantasy settings include deities who have druids as followers, and certainly many of the deities described in the ***Legends & Lore*** tome have portfolios that would attract druidical worshipers. On the other hand, its sensible to assume that druids are directly dedicated to nature, either personified in some being or as an impersonal force that they can tap by virtue of their singular devotion. Indeed, I see no reason why a campaign cannot have both kinds of druids.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '77',
            question: `Does the druidical resistance to ***charms*** cast by woodland creatures protect only against innate abilities or against enchantment/charm spells in general? What constitutes a woodland creature, anyway? Is a druid immune to ***charm person*** spells cast by any creature that lives near a tree?`,
            answer: [
                `The intent behind this ability clearly is to make the druid immune to the innate ***charm*** abilities possessed by fantastic creatures who live permanently in the forest. This keeps the druids status as master and protector of the forest from being undermined by capricious ***charm*** attempts from sylvan creatures who can't be counted on to use their abilities with common sense. The druid gains this ability because he taps into the same base of power that grants sylvan creatures their ***charm*** abilities. The immunity does not protect the druid from spells such as ***charm person*** or ***charm person or mammal***, even when cast by other druids or woodland creatures such as green dragons; their power comes from a different source.`,
                `A woodland creature is any creature normally associated with a sylvan setting, such as a dryad, hamadryad, or nymph. When in doubt, check the creature's "Climate/Terrain" heading in the ***Monstrous Compendium***. Creatures that typically live in nonforested terrain, such as vampires, can ***charm*** druids normally.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '77',
            question: `In the original AD&D game, a magic-user had to know and use the ***read magic*** spell before he could read any spell written by another magic-user, whether it was in a scroll or book. Is this true in the new game? If so, do wizards and bards automatically get the ***read magic*** spell?`,
            answer: [
                `In the core AD&D 2nd Edition game, the ***read magic*** spell is required to decipher magical scrolls but not spell books. While all wizards and bards have access to the ***read magic*** spell, nobody gets it automatically unless the DM says so. Note also that the DM is free to place restrictions on reading spell books. One campaign I know assumes that every wizard uses his or her own system for entering spells into books and requires ***read magic*** to read all spells in books, even ones the reader already knows. In such campaigns, prospective casters of wizard spells would be severely handicapped without access to the ***read magic*** spell, and ethical tutors would not allow their students to go into the world without knowing it. Of course, this still doesn't guarantee that every spell-caster will know ***read magic***, as most fantasy worlds should have a large supply of unethical people and self-instructed students of the art.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS,ATTRIBUTE_SPELL],
        },
        {
            page_number: '77-78',
            question: `The ***shadow monsters*** and ***demi-shadow monsters*** spells are listed under the illusion/phantasm school, but their descriptions say they draw matter from the plane of Shadow to create illusions of one or more monsters. Doesn't this make these spells conjuration/summonings or evocation/invocations? What happens if the caster isn't connected with the plane of Shadow at all? I suppose the spell might be partially successful even in this case if it were truly an illusion. Also, what is the difference between an illusion and a phantasm?`,
            answer: [
                `The spells in question are illusion/phantasms because their primary function is to make their victims believe in something that doesn't really exist. The inclusion of a small amount of extraplanar material make these spells very potent illusions (it is because of this trace of "real" material that they can inflict damage even if successfully disbelieved), but it does not make them conjuration/summonings. A full-blown conjuration/summoning or evocation/invocation brings forth a "real" object or creature, not one whose existence is diminished by active disbelief. If local conditions make a connection between the caster and the plane of Shadow impossible, then casting either of these spells also is impossible; it's all or nothing.`,
                `In game terms, there is very little difference between an illusion and a phantasm, which is why the two words usually are used together. Technically speaking, however, an phantasm exists only in the victim's mind (e.g., ***phantasmal killer***), whereas an illusion is a sensory impression that any being might perceive if close enough. The various ***phantasmal force*** spells are true illusions, in spite of the name. The distinction usua lly is immaterial in campaign play and should be ignored in most cases.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '78',
            question: `One of my character's party rivals is an invoker (invocation/evocation specialist). One of his favorite spells is ***wall of fog***, which is quite effective in our campaign, and he causes a lot of trouble with it. Is this spell really an invocation/evocation spell, or is this a misprint?`,
            answer: [
                `Like all the other "wall" spells, ***wall of fog*** is an evocation. It is so classed because it brings into being something that wasn't there before the spell was cast.`,
                `A great deal of game logic and concern for game balance underlies the schools as they presently are constructed, and I don't recommend fiddling with them, especially if you are using specialist wizards. The team who revised the game carefully considered the number of spells in each school and the kinds of adventuring "niches" each specialist would tend to fill, which is why spells with similar effects tend to fall into the same school even if the mechanics behind them don't seem to match at first glance. I also suggest that trying to second guess the game's designers is not the best way to role-play dealing with a rival. Having your character slip a raw egg into the rival character's boot is much more likely to produce an entertaining result than trying to tinker with the rules. If there's one thing more annoying than a rules lawyer, it's a rules lawyer who wants to change the rules.`,
                `For readers who are interested in how spells are grouped together in schools, check out page 81 of the ***PHB*** or pages 6-29 of ***The Complete Wizard's Handbook***. Doing so will help you understand how and why the spells are supposed to work, and makes it easier to adjudicate sticky situations involving spell effects.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '78',
            question: `Why aren't halfling warriors allowed to roll for exceptional strength?`,
            answer: [
                `Game logic assumes that halflings are just too small to have truly exceptional strength scores. As "Sage Advice" has explained before, there are plethora of reasons why demihumans have their various limitations. Game balance requires them. Halflings are not known to be legendary warriors, so they pay for their many advantages (high dexterity, increased thief-skill percentages, infravision, and others) by being having a limited choice of professions, being limited in the level of experience they can achieve within some of those professions, and being limited to normal strength scores.`,
            ],
            comment: `Soft followup on Sage Advice #156`,
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '78',
            question: `How many attacks does a character get each round when employing the various forms of nonlethal, weaponless combat? In particular, does a character who is punching get two attacks, one for each fist? Can a character fight with two fists using the rules for attacking with two weapons?`,
            answer: [
                `Generally, a character can make the same number of nonlethal attacks each round as he would be allowed to make in normal melee. I can't see any reason why a character couldn't get an extra punching attack each round by using the rules for attacking with two weapons (***PHB***, page 96), but remember to apply the appropriate penalties. A character has to use pretty much his whole body to wrestle or overbear, so you can't use the rules for attacking with two weapons to get an extra overbearing or wrestling attack each round. However, a high-level warrior who is allowed two attacks in a round *could* make two overbearing or wrestling attacks. In the case of overbearing, the warrior could knock down an opponent, then try to pin him. In the case of wrestling, the warrior could make two attempts to gain a hold, but if he gets a hold that can be maintained, damage from round to round accrues normally, not at a doubled rate.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '78',
            question: `How long will a ***simulacrum*** live after the spell-caster who created it dies? How long will it live after the original being from whom it was copied dies? Can a ***simulacrum*** use magical items, such a ***pale green ioun stone***, to boost its experience levels? If the original used a ***hat of difference*** (***Unearthed Arcana***, page 100) to gain a new class, could his ***simulacrum*** also use the ***hat***?`,
            answer: [
                `Once created, a ***simulacrum*** is completely independent of the original and its creator, except that it must obey commands from its creator. Damage to the original or the original's premature death do not affect the ***simulacrum*** in the least. The ***simulacrum*** also ignores damage to the creator, and the only effect that the creator's death has is that the ***simulacrum*** no longer has someone that it must obey. *Since* a ***simulacrum*** is a fairly accurate replica of the original, its natural lifespan will be about as long as the original's; I suggest that it be exactly the same 40%-65% of the time. If not the same, the lifespan could be shorter or longer at the DM's option. Note that the ***simulacrum*** is created at the same "age" as the original.`,
                `While a ***simulacrum*** cannot earn experience, I suggest that magical tomes and other powerful magical items that increase the user's level also work on a ***simulacrum***. Since a ***simulacrum*** cannot earn experience, it cannot make use of a ***hat of difference***, except to gain 1st-level abilities. If the original was using a ***hat of difference*** at the time the ***simulacrum*** was made, the ***simulacrum*** still cannot gain access to the originals extra experience levels, as these levels are contained in (or channeled through) the hat and are bestowed only on its owner. The ***simulacrum***, no matter how accurate a replica, is *not* the original (the same holds true for ***clones***).`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '78',
            question: `The ***DMG*** says how long it takes a wizard to copy a spell into a book (1-2 days per spell level; page 42) but not how long it takes to make the book in the first place.`,
            answer: [
                `Unless the wizard has a nonweapon proficiency in bookbinding, which is not currently in the game, he can't make his own spell books. Given proper materials (paper or vellum for the pages and endpapers, leather for the covers, and assorted other materials for the binding), I suppose a bookbinder could assemble a volume the size of a spellbook in only a few hours, maybe less.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '78',
            question: `My books do not have casting times for two spells: ***moonbeam*** and ***Nchaser's glowing globe*** (from ***FORGOTTEN REALMS Adventures***, page 49).`,
            answer: [
                `The casting times are: ***moonbeam—7***, ***Nchaser's glowing globe—3***.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '78',
            question: `Three out of the four ***PHB's*** in our group list the area of effect of a ***wyvern watch*** spell as a 10'-radius sphere. The fourth book lists the sphere's radius as 5'. Why?`,
            answer: [
                `The correct radius is 10'. Your fourth book probably is a first-printing volume. The official errata list for the second and later printings of the ***PHB*** is quite long, so you probably want to use the more recent books as your official campaign books—but keep your older book in good condition, as it might become a collectable.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '78',
            question: `Will an elven ranger from Krynn retain his unlimited level advancement if he goes to the Forgotten Realms?`,
            answer: [
                `No. The world of Krynn has many unique features, and native characters who leave it lose the special benefits they gain from living there. However, a high-level demihuman character does not lose any levels when leaving Krynn; he just loses the ability to advance further.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '176',
    publication_year: '1991',
    publication_month: 'December',
    foreword: `Join the sage as he takes a quick look at psionics in the AD&D® 2nd Edition game, considers some hard facts about illusions, and splits a few magical hairs.`,
    sage_advice: [
        {
            page_number: '93',
            question: `Will an ***anti-magic shell*** stop psionic powers or attacks? Why?`,
            answer: [
                `According to page 110 of ***The Complete Psionics Handbook***, an ***anti-magic shell*** has no effect at all on psionics. The game logic behind this rule is that magic—which includes such special attacks such as breath and gaze weapons—and psionics are two different things. In terms of game balance, it is desirable to draw a firm line between magic use and psionics use. Psionics, the reasoning goes, is a type of power completely different from magic in all its various forms.`,
                `However, my colleagues at TSR, Inc. have made it clear to me that *all* the rules in the various handbooks are optional. Considering that ***anti-magic shells*** can stop things like gaze attacks, sonic attacks, and breath weapons—all of which ignore magic resistance—I don't think you'd be stretching things too far if you assumed the field created by an ***anti-magic shell*** stopped all preternatural effects of nondivine, nonartifact origin. Both magic and psionics involve the transfer and manipulation of some kind of power, and an ***anti-magic shell*** can be assumed to prevent the passage of such power.`,
                `Nevertheless, I suggest you tread carefully when mixing magic and psionics. Psionic powers are potent and must be adjudicated carefully even if you follow all the rules scrupulously. For example, if you blur the line between magic and psionics by introducing magical items that augment or bestow psionic powers, characters who accumulate a few of them can quickly become psionic juggernauts.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '93',
            question: `A ***hasted*** spell-caster cannot cast two spells each round because ***haste*** cannot speed up magic, but can a ***hasted*** psionicist or possessor of a wild psionic talent use psionics twice each round? After all psionics aren't magic.`,
            answer: [
                `Both magical and psionic power "flows" through and around characters at fixed rates. A ***hasted*** psionicist or wild talent wielder cannot use psionic powers any faster than can a character who is not ***hasted***.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '93',
            question: `If the second-level wizard spell ***invisibility*** uses light to create an illusion that makes the user invisible ("Sage Advice," issue #168), does the spell work at night? How can the user see? Will infravision detect the user?`,
            answer: [
                `The ***invisibility*** spell actually makes the user invisible—that is, impervious to visual detection. The effect is classed as an illusion because the viewer's perception of the spell-user is changed. The spell works in any light condition, though it's usually redundant in total darkness. The spell defeats most types of vision, including infravision, as the spell description plainly states (***Player's Handbook***, page 142). Exactly how the user is rendered invisible is left up to the DM. In any case, however, the spell-user can see normally, perhaps through "gaps" in whatever effect the spell uses to conceal the user, which might explain why the user can occasionally be detected by creatures with superior perception (see spell description).`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL,ATTRIBUTE_INVISIBILITY],
        },
        {
            page_number: '93-94',
            question: `Can creatures viewing a ***mirror image*** spell disbelieve the effect? If they can, it seems to me that it's a lousy spell; on the other hand, it's an illusion. Can an ***invisibility*** spell be disbelieved?`,
            answer: [
                `Far too many players and DMs try to overextend certain character abilities and game rules. For example, take the fellow in issue #175 who wondered if druids were immune to all enchantment/charm spells. Not all illusion/phantasm spells can be disbelieved; ***mirror image*** and ***invisibility*** are just two examples.`,
                `The rules for disbelieving illusions in the ***PHB***, (pages 82-84 and 130) apply only to those illusion/phantasms in which the caster creates an image with details supplied from his own mind. Spells that have fixed effects, such as ***invisibility***, ***mirror image***, ***hypnotic pattern***, ***phantasmal killer***, et al. are not illusions in the sense of the term used in those rules. If you're feeling obstinate on this point, consider single-purpose illusion/phantasms (such as ***invisibility***) to fall into the "automatic belief" category.`,
                `There are many cases where illusion/phantasm spells don't use the standard disbelief rules. ***Phantasmal killer***, for example, requires victims to use an intelligence check to disbelieve it. Whenever the rules give such rules for determining resistance to or detection of an illusion/phantasm, use them—not the disbelief rules. Finally, note that some illusion/phantasm spells have normal saving throws (fear, for example); victims need not make disbelieve attempts vs. any spell whose save is listed as "Neg." In such cases, the saving-throw rules apply, not the disbelief rules. Note also that several illusion/phantasms, such as ***mirror image*** have no save at all. Such spells work automatically—disbelief not withstanding—unless the victim is immune to them (perhaps because of a high Wisdom score or other ability).`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL,ATTRIBUTE_INVISIBILITY],
        },
        {
            page_number: '94',
            question: `If a ***polymorph any object*** spell is used to transform a magical weapon into another kind of weapon—say, a *long sword +3* into a katana—will the weapon lose its magical bonus?`,
            answer: [
                `This is up to the DM, but I see no reason why something as simple as a general enchantment should be lost in this case. Abilities that might depend on the weapon's size and weight probably *should* be lost. The spell description (***PHB***, page 191) uses a ***vorpal sword***, ***polymorphed*** into a dagger, as an example; since daggers are not really suited to chopping and severing, the sword loses its ***vorpal*** ability. On the other hand, a ***vorpal sword*** that has been ***polymorphed*** into a bardiche probably would keep its ability to sever necks. Very intelligent magical weapons changed into any form probably should lose some of their abilities when in ***polymorphed*** form even if these abilities have nothing to do with the weapon's size or configuration. Such weapons are the result of a long and intricate process, and even subtle changes in the weapon's form can disrupt the enchantment. DMs must decide what happens on a case-by-case basis, but the more abilities the weapons has, the more likely that even a small change in form will cause one or more of the abilities to become inactive; of course, large changes will disrupt even more of the weapon's powers.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '94',
            question: `If a wizard wants to create a ***wand of magic missiles*** with 80 charges, does he have to cast 80 ***magic missile*** spells into it? As it takes 2-8 hours to cast each spell level into the item, it would take 160-640 hours, or 20-80 days at just eight hours a day; if the item had to make a saving throw for each spell the process would take a lot longer. Is a saving throw required for each charge?`,
            answer: [
                `In healthy campaigns, magical-item creation is a long and arduous process; if it were not so, player characters wouldn't have much reason to risk life and limb on adventures. However, a little common sense and a careful rereading of the rules should shorten the time to create the ***wand of magic missiles*** in your example. First, the item's creator must gather the proper materials. This could take days, weeks, or months of game time, depending on how rare the DM decides to make the materials and how intelligently the character goes about gathering them. Since the quest for materials helps move the campaign along, the actual time required here really is irrelevant.`,
                `Once the character has gathered and prepared the materials (***Dungeon Master's Guide***, pages 87-88), he must cast ***enchant an item***, which takes 1d8 + 2 days (at eight hours a day). Then the item makes a saving throw, and the initial spell is cast on it, which takes 2-8 hours per spell level. A ***permanency*** spell is then required to fix the enchantment and prepare the item to receive charges. Once this is done, I suggest you use the rules for recharging magical items (***DMG***, pages 88-89). Each charge requires a separate spell with the normal casting time. As suggested in issue #172, the item needn't make a saving throw each time a charge is added, but the item does need to make a saving throw when “recharging” starts, and the creator is still limited to eight hours of work a day (or a full “load” of spells dumped into the item, whichever is less). During the whole time, the caster must stringently follow the requirements of the ***enchant an item*** spell (***PHB***, page 176).`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '177',
    publication_year: '1992',
    publication_month: 'January',
    foreword: `Join the sage this month as he tours the planet Athas, the world of the new DARK SUN® campaign setting. The Rules Book and Wanderer's Journal are found within the DARK SUN boxed set. A second DARK SUN "Sage Advice" column will appear next month.`,
    sage_advice: [
        {
            page_number: '52',
            question: `Are DARK SUN specialist mages restricted to being illusionists-only, or are the Rules Rook sections on illusionists intended only as examples?`,
            answer: [
                `The text on page 26 of the Rules Book, under the "Defiler" heading, and similar text on page 28, under the "Preserver" heading, make it clear that Athasian mages are free to specialize in any school they wish. Illusionists receive their own sub- headings because that's the way they're treated in the ***Player's Handbook*** (which uses them as a general example for all specialist mages).`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '52',
            question: `The Rules Book (page 59) says that the dragon of Tyr's defiler magic harms animal life. Does this also extend to monsters and characters? If so, how does this work, and how does the dragon "store" magical energy?`,
            answer: [
                `The dragon's defiler magic is baneful to all life. Exactly how this power might affect characters will be revealed in the ***Dragon Kings*** hardbound, to be released this spring. An appearance by the dragon is a major disaster on Athas, and no DM should be tempted to use the dragon lightly. Here are some unofficial suggestions until official rules arrive:`,
                `Use the Defiler Magical Destruction Table in the Rules Book, page 60. All plants and plantlike creatures in the area of effect perish, getting no saving throw. All other creatures having less than 4+2 HD ***or*** an intelligence of 4 or less also perish. For example, a mekillot has 11 HD but only animal intelligence (1), so it automatically dies. Creatures with at least 4+2 HD ***and*** an intelligence of 5 or better save vs. breath weapon or perish as well. Even if the save succeeds, the affected creatures still suffers an initiative penalty (Rules Book, page 61, "Effects on Living Creatures"). If there are no plants in the area and all the animals save, the dragon gains no spell energy but can use stored energy instead.`,
                `Details on how the dragon of Tyr stores energy will be revealed in the ***Dragon Kings*** hardbound.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '52',
            question: `To which spheres do clerics and druids receive access?`,
            answer: [
                `Clerics receive major access to their elemental sphere of worship and minor access to the Sphere of the Cosmos (as stated on pages 29 and 59 of the Rules Book). Many additional priest spells will be presented in the ***Dragon Kings*** hardbound, along with rules for incorporating all ***Tome of Magic*** spells into the DARK SUN spheres. For now, I suggest you allow a priest major access to his elemental sphere, plus major access to the Sphere of the Cosmos; if you don't, no priest will ever get to cast a curative spell better than ***cure light wounds*** (as one reader pointed out), and priests of earth will get no fourth-level spells at all (as another reader pointed out). However, if incorporating all the spells from ***Dragon Kings*** and ***Tome of Magic***, only allow clerics to have minor access to the Sphere of the Cosmos.`,
                `Page 59 of the Rules Book is in error regarding druids. Druids receive major access to the Sphere of the Cosmos. A druid should receive major access to one elemental sphere, plus major access to the Sphere of the Cosmos, and perhaps minor access to a second elemental sphere also associated with his guarded lands; this gives druids a level of power that matches their reputation in the Wanderer's Journal.`,
                `Templars have, according the rules, major access to all spheres. Templars are the only priestly spell-casters who have a connection to anything than even re- motely resembles a deity, and their spell selection should be accordingly great.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '52',
            question: `Do templars gain bonus spells for high wisdom scores, or is this at the whim of the sorcerer-king? What kinds of weapons can templars use?`,
            answer: [
                `Templars gain bonus spells for high wisdom scores, just as any priestly spell- caster does. The sorcerer-king, however, always has the option to deny some or all spells to a templar who has offended him.`,
                `Templars as a character class have no weapon restrictions (Rules Book, pages 33- 34). However, a sorcerer-king might de- cree restrictions of his own, and these might change from time to time.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '52',
            question: `Does a sorcerer-king know his templars' thoughts when granting them spells? In other words, can a templar be an undiscovered traitor and still receive spells?`,
            answer: [
                `The exact extent of the sorcerer-kings' power over their templars is unrevealed, but I don't find anything in the rules that implies that they know what's on all their templars' minds all the time, or that the act of granting spells allows the sorcerer-king to know all a templar's thoughts. Since all sorcerer-kings are accomplished psionicists, however, they would carefully examine the thoughts of at least their higher-level templars; this makes it unlikely that "moles" exist in any city's templar hierarchy. Likewise, a city-state's totalitarian government, the general populace's hatred and distrust of the templars, the sorcerer-king's shrewdness, and the obvious rewards available to any templar who embarrasses a superior or crushes a misbehaving subordinate make it pretty unlikely that any disloyal templar will survive for long. Finally, consider that all templars are either neutral or evil, and that the quickest way a templar can become wealthy and powerful is to remain loyal but corrupt. I don't think there would be undiscovered traitors in the templar ranks even if there could be.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '52',
            question: `What is the maximum range over which a sorcerer-king can grant spells?`,
            answer: [
                `A sorcerer-king can grant spells over an effectively unlimited range on the world of Athas.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '52+54',
            question: `Are characters with wild psionic talents allowed to have attack and defense modes?`,
            answer: [
                `Yes, but very rarely, First, understand that each attack and defense mode is a psionic power all by itself, and it functions in the game just like any other psionic power, Characters with wild talents roll once each on Table 12 in ***The Complete Psionics Handbook*** (pages 20-21) to determine their powers. Since all the attack and defense modes are telepathic sciences or devotions that are not listed on Table 12, the character can get them only if he rolls a 90 and gets to pick any two devotions, or rolls 91-00 and gets to roll on Table 13 (if he's very lucky and rolls a 00, he can pick a devotion and roll on Table 13). Since attack and defense modes also are not included on Table 13, the character can get them only if he continues to be lucky and rolls one of the "choose any" results on Table 13. Barring such good die rolls or some type of DM intervention, characters with wild talents don't get attack and defense modes.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '54',
            question: `Can a ***sleep*** or ***hold person*** spell affect a thri-kreen? A half-giant? A mul? Since half-giants get to double their hit dice, are their hit dice dou- bled with respect to spell effects governed by hit dice, such as ***sleep***, cloudkill, etc.?`,
            answer: [
                `A ***sleep*** spell can affect any creature that falls within the spell's hit-die limits, unless the creature's description specifically makes it immune. Athasian thri-kreen don't sleep, but they are not immune to any sort of magically or psionically induced sleep. As the Rules Book clearly states, all character races except thri-kreen are subject to the ***hold person*** spell (see spell description, page 95). Half-giants receive double hit points from their hit dice, not double hit dice; a third-level half-giant, for example, easily could have 60 hp or more but still is subject to ***sleep*** spells.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '54',
            question: `Are Athasian halflings really limited to a 16 strength? Since characters must meet their ability requirements before applying racial adjustments, this appears to be the case.`,
            answer: [
                `You have read the rules correctly. A character must refer to the Racial Ability Requirements table (actually Table 1; Rules Book, page 3) before applying the modifiers from Table 2 (also on page 3). Athasian halflings, however, probably should be at least as strong as halflings on other worlds, and maybe stronger. It's not unreasonable to give Athasian halflings a final strength limit of 18; however, Athasian halflings with 18 strength still do not roll for extraordinary strength, as their small bodies just don't carry enough muscle.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '54',
            question: `Since many nonwarrior characters on Athas can have strength scores of 19 or higher, how do you treat the extraordinary strength roll for an 18 strength on Athas?`,
            answer: [
                `Strictly speaking, you treat extraordinary strength exactly the way you do on any other world. That is, warriors with strengths of 18 roll on the extraordinary-strength portion of Table 1 in the ***PHB*** (page 14), and other characters don't. While a nonwarrior on Athas might be blessed with a great strength score, he doesn't have the training or discipline that allows a warrior to develop a strength score of 18 into something outstanding.`,
                `I know of one non-Athasian campaign that dispenses with extraordinary strength altogether. Under this house rule, a warrior with a 13 strength gets the benefits of an 18 strength, a warrior with a 14 strength gets the benefits of an 18/01 strength, and so on up to strength 18. The DM I met who used this rule claimed it made having that elusive 18 strength score less vital to the warrior. Nonwarriors, who have less physical training, used the regular strength table. Even if you adopt this rule, however, you'll still have a situation where a nonwarrior with a 19 or better strength score has vastly better combat modifiers than characters—even warriors—who have strength scores of 18 or less.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '54',
            question: `Can thri-kreen use sign language, or do their nonhuman hands make this impossible? Why can't thri-kreen be thieves or templars? If they can, what are their level limits and thief skill adjustments?`,
            answer: [
                `A thri-kreen's hands and arms can certainly perform sign language of some kind. Since the Athasian sign language is the closest thing to a planet-wide tongue that Athas has, it's probably safe to assume that sign language takes into account and adjusts for differences between human and thri-kreen hands. (Even with all the differences described in the rules, there would literally be millions of gestures that both thri-kreen and human hands could preform.) The DM, however, might decide that the thri-kreen have their own version of sign language or that the physical differences in hands cause an ability-check penalty when humans or demi-humans use sign language to communicate with thri-kreen.`,
                `I'll spare my regular readers the standard sermon about racial-class and level restrictions and why they are necessary for game balance, and I'll plunge directly into a discussion about why thri-kreen don't become thieves or templars:`,
                `Thri-kreen are born hunters and warriors. Those thri-kreen who have a talent or liking for stealth and concealment become rangers, not thieves. Skulking about and playing with locks, traps, poisons, and other nefarious devices just doesn't suit this race. Thri-kreen also are hive creatures who are very dedicated and loyal to their group, even if there are non-thri-kreen in it and even if the individual thri-kreen in question is evil. The deceit, corruption, disdain for underlings, and disrespect for superiors displayed by the templars is completely alien to the thri-kreen.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '178',
    publication_year: '1992',
    publication_month: 'February',
    foreword: `Join the sage for the second in his two-part travelogue on Athas, the world of the new DARK SUN™ campaign setting. The Rules Book and the Wanderer's Journal are found in the DARK SUN boxed set.`,
    sage_advice: [
        {
            page_number: '92',
            question: `The Ranger's Followers table in the Rules Book, pages 25-26, does not give levels or races for followers with character classes. What are they?`,
            answer: [
                `I suggest rolling 1d3+1 for level. The DM should pick races according to Table 3 (Rules Book, page 4). For random generation, I suggest: Preservers must be human, elf, or half-elf (roll 1d3). Thieves should be human, dwarf, elf, or half-elf (roll 1d4). Druids should be human, half-elf or thri-kreen; roll 1d3. Independent muls are exslaves and not inclined to become followers. Halflings are distrustful and generally not trusted; they make suitable followers only for other halflings. Likewise, it seems to me that nobody but a halfling or an adventurous human would follow a halfling.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '92',
            question: `Are the character kits from the various Complete Handbooks available to characters on Athas?`,
            answer: [
                `The material in the Handbooks is all optional and available in any campaign where the DM thinks it will be useful. Not all the character kits, optional rules, and new equipment will fit into DARK SUN campaigns, but some surely will. The DM, however, has final say.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `Does the water-find proficiency work in any terrain? If not, what is the difference between it and the survival proficiency? Can a character use both proficiencies in the same area?`,
            answer: [
                `The water-find proficiency works in any terrain, but yields only water. Survival works in only one type of terrain, but it yields both food and water. If a character with both of these proficiencies tries one and fails, the DM probably should allow the character to try the other one; failing the check doesn't necessarily mean there is no food or water to be found in the area, just that the character can't find it; using a different approach often is the best way to solve a difficult problem. However, if the character succeeds with one proficiency the DM would be quite right to rule that the second fails or has a hefty penalty; there's only so much food and water in the wilderness.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `Do a half-giant's weapons do an extra die of damage like a giant's weapons do? Half-giant equipment costs twice as much as a human's; does a half-giant's food and water cost twice as much as a human's?`,
            answer: [
                `Some of the giants described in the Monstrous Compendium gain an extra damage die, sometimes two extra dice, for their oversize weapons. Athasian half-giants don't have this ability.`,
                `An Athasian half-giant needs the same sort of food and water as any human, but he has to buy twice as much as a human or demi-human does.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `Considering a thri-kreen's four claw attacks, can a thri-kreen use four melee weapons, one in each hand, or two two-handed weapons? Can they use four-handed weapons? What are the game statistics for four-handed versions of common weapons?`,
            answer: [
                `An armed thri-kreen can use at most one two-handed weapon, or two one-handed weapons, just as a human or demi-human can. Just because a thri-kreen can attack with four claws does not mean it can coordinate four weapons at once. Before somebody writes and asks: No, this does not mean thri-kreen cannot hurl more than two missiles each round; they get the full rate of fire listed in the rules for darts and similar hand-hurled missiles (but they can't use their extra hands to get a rate of fire better than that listed in the rules). Statistics on four-handed weapons are up to the DM; however, I suggest that limits on thri-kreen strength and coordination make such weapons no more effective than two-handed weapons. Note also that thri-kreen can bite while wielding weap- ons, but they cannot claw while doing so. I suppose a kind DM might allow a thri- kreen to use a claw as a secondary weap- on under the "Attacking with Two Weapons" rule in the ***PHB***, page 96.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `What advancement table do gladiators use?`,
            answer: [
                `They use the paladin/ranger table.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '92',
            question: `Can bards backstab?`,
            answer: [
                `No. Bards don't have time for the anatomical studies that allow thieves to use their backstab ability.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '92',
            question: `Do the inactive characters on a character tree get an extra die of ceramic pieces when they advance a level?`,
            answer: [
                `This is up to the DM, but giving high-level characters a little extra cash is a darn good idea unless you want a lot of experienced but poor adventurers coming into the campaign at critical points in the story line. Generous but fiscally conservative DMs might want to add an extra +1 to the roll, rather than a full die for each extra level gained.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92',
            question: `Wood, obsidian, and bone weapons have a percentage chance of breaking. Are enchanted weapons made from these less likely to break, or are they immune to the breakage rule?`,
            answer: [
                `Are we reading the same set of rules here? The "breaking weapons" section in the Rules Book (page 51) doesn't use percentages at all. Considering how unlikely breakage is—a 1-in-20 chance when a hit does maximum damage—I can't see any clean, workable way to give enchanted weapons a bonus. The DM might decide to make enchanted weapons immune to breakage, or he might give an enchanted weapon a chance to resist breakage by making a save vs. crushing blow (***Dungeon Master's Guide***, page 38-39) instead of breaking automatically when the dreaded roll of 1 comes up.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92-93',
            question: `How much damage does a person caught in a sandstorm take? How long will it take a person buried by sand or dust to suffocate?`,
            answer: [
                `Only extraordinary sandstorms actually cause damage. The worst effects of blowing sand are reduced visibility (Rules Book, page 84) and the fact that sand tends to get into everything, like clothing, armor, equipment, and provisions. Athas, however, probably has more than its share of extraordinary sandstorms. The DM will have to handle these on a case-by-case basis. I suggest that characters escape damage altogether if they have shelter of any sort (a tent or the lee side of any barrier such as a boulder, hill, or stand of cactus). Characters exposed to the full force of the wind might suffer 1-2 six-sided dice of damage per hour, turn, or minute, depending on how ferocious the storm is. Blowing dust might force characters to save vs. poison or suffer minor damage if they don't breathe through a cloth or filter.`,
                `According to the Wanderer's Journal, a character buried in the dust of the Sea of Silt can stay alive for about four minutes (see page 40, "Wading"). To determine survival time more accurately, use the rules on "Holding Your Breath" in the ***PHB***, page 122.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '93',
            question: `Since the "normal" animals on Athas would be considered pretty nasty monsters on most other worlds, how useful on Athas are ***speak with animals*** and the various spells that can affect or summon animals? Will they also work on most "monsters"?`,
            answer: [
                `In the strictest terms, a ***speak with animals*** spell won't work on many of the most common Athasian "animals," as these really are fantastic creatures. Nevertheless, Athas does have small lizards, snakes, mammals, and birds that are true animals. Athas also has great cats, bats, and an assortment of other mundane animals—enough normal fauna to make the various animal-affecting spells worthwhile. ***Speak with animals*** also works on commonly domesticated creatures of Athas, such as mekillots, inix, kanks, and erdlus.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '93',
            question: `Why are there so few creatures included in the DARK SUN world? The list in the rules, even when augmented by a ***Monstrous Compendium*** many times larger than the volumes TSR has been putting out recently, is pretty small for players and DMs accustomed to the hundreds of creatures available in the regular AD&D game. Is such a volume coming out?`,
            answer: [
                `Athas has very few species because it's a site of a worldwide ecological disaster. A dying ecology means lots of extinctions and very few surviving species.`,
                `There is a DARK SUN ***Monstrous Compendium*** in the works. Look for it in February 1992; it will be 96 pages long.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '93',
            question: `Why are the psionically powerful mind flayers absent from Athas? What about beholders?`,
            answer: [
                `I can't think of one good reason why any sane mind flayer would remain on the surface of Athas when it could escape by ***plane shifting*** or travelling astrally. The scorching heat alone would be enough to discourage a mind flayer, not to mention that fact that almost everything that moves has psionics, something that tends to render the mind flayer's psionic abilities indifferent. As for beholders, I can think of at least three reasons why they aren't listed in the rules: 1) They're all dead, because Athas is a tough place; 2) They never were there in the first place; not every world boasts all the species de- scribed in the ***Monstrous Compendium***; 3) They are around, all right, but are very rare and still lurking deep underground, waiting for a few unlucky Athasians to show up for dinner. (Maybe the mind flayers are lurking down there with them.)`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '93',
            question: `How does Athas fit into the SPELLJAMMER universe?`,
            answer: [
                `The official TSR position is that Athas lies within a closed crystal sphere; it can- not be reached by spelljammers.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '93',
            question: `Does Athas have the equivalent of Oerth's or Toril's Underdark?`,
            answer: [
                `This is unrevealed but unlikely. There are dungeons and subterranean ruins on Athas, but the vast majority of the action takes place on the surface.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '93',
            question: `How much do thieves' picks and tools cost on Athas?`,
            answer: [
                `Good thieves' tools are primarily metallic and sell for the listed price on Athas (30 gp). Less-durable tools cobbled together from cactus spines, bone, and other mate- rials sell for 3 sp; however, these probably need frequent replacement. Hard-minded DMs might apply the breakage rule on page 51 of the Rules Book whenever a rogue fails to pick a lock or remove a trap using cheap tools.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '93',
            question: `How many attacks can a character wearing wrist razors deliver each round? Can a thief wearing wrist razors on each arm attempt two backstabbing attacks in one round?`,
            answer: [
                `The normal melee rules apply to wrist razors. A character wearing one set gets his normal allotment of melee attacks. A character wearing two sets gets his nor- mal attacks, plus one extra attack for the second set (see "Attacking with Two Weapons," ***PHB***, page 96). A thief wearing two sets of wrist razors can attempt a backstab ***only*** with his first attack.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '93',
            question: `Is there a reason why the old ***DMG*** table for naturally detecting invisibility (page 60) was omitted from the AD&D 2nd Edition rules?`,
            answer: [
                `You'll find a streamlined set of rules covering this situation in the description for the ***invisibility*** spell in the new ***PHB***, page 142.`,
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E,ATTRIBUTE_INVISIBILITY],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '179',
    publication_year: '1992',
    publication_month: 'March',
    foreword: `The sage joins our exploration of magical treasures this month with a look at some magical spells and items from the AD&D® game. Page references refer to the AD&D 2nd Edition game's volumes.`,
    sage_advice: [
        {
            page_number: '95',
            question: `Why can't druids in the AD&D 2nd Edition game cast the fourth-level spell ***call woodland beings*** and the fifth-level spell ***commune with nature*** as they could in the AD&D 1st Edition game?`,
            answer: [
                `They can't because these spells accidentally were assigned to only one sphere each. At least as far as druids are concerned, ***call woodland beings*** should be included in the Animal sphere and ***commune with nature*** should be included in the Elemental sphere. TSR's Steve Winter pointed out this bit of official errata way back in POLYHEDRON™ Newszine #49 (September 1989), but various mishaps and oversights have kept it from appearing elsewhere until now.`,
            ],
            comment: `***Commune with nature*** is included in the Elemental sphere in the Revised (black) ***Player's Handbook***. ****Call woodland beings*** is included in the Animal sphere by using the optional sphere extension from ***The Complete Druid's Handbook***.`,
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL,ATTRIBUTE_CLASS],
        },
        {
            page_number: '95',
            question: `Does a saving throw or magic resistance apply to a ***warp marble's*** various effects? Can a creature trapped in the marble be freed by a ***dispel magic*** spell?`,
            answer: [
                `According to the item description (see ***Tome of Magic***, page 148) a saving throw applies only when the marble is set as a trap using the third command word and hurled at a creature. If the marble hits, the victim gets a save. If the item is set as a trap with the third command word, any creature touching it is trapped, with no saving throw. Likewise, the creature closest to the marble is automatically trapped when the first command word is spoken. The DM easily can prevent abuse of this ability by making the command word effective only at a very short range (I suggest 10'-20') and by introducing opponents who are inclined to crush untended marbles or hurl or kick them toward the owner or his party-in the latter case, the marble might trap the owner or one of his allies if the initiative roll turns out well. Likewise, I suggest that ***warp marbles*** develop a bad habit of bouncing around unpredictably when thrown, thus encouraging owners to use the third command word when handling them (since a bad bounce might inadvertantly trap a character employing the first command word). Note also that ***warp marbles*** can be safely manipulated with spears, other long implements, ***unseen servants***, and ***gusts of wind***, and in numerous other ways.`,
                `I suggest you treat the effects of a ***warp marble*** as an individually targeted effect subject to magic resistance (see the ***Player's Handbook***, page 102, or the ***Dungeon Master's Guide***, page 67).`,
                `Since the extradimensional space created by a ***warp marble*** is fragile enough to be disturbed by ***teleportation*** and similar effects, I suggest that ***dispel magic*** can free a creature trapped inside, or expel a creature trapped voluntarily, if the spell succeeds (see the next question).`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL,ATTRIBUTE_DISPEL_MAGIC],
        },
        {
            page_number: '95',
            question: `How do you decide if a magical item resists a ***dispel magic*** spell? A ***rod of cancellation***? A ***Mordenkainen's disjunction*** spell? What modifiers apply?`,
            answer: [
                `According to the spell description (see the ***PHB***, pages 148 and 210), a ***dispel magic*** spell cast directly against an item automatically causes the item to cease functioning for 1d4 rounds *unless* the item is in a creature's possession; in that case, the creature is allowed a normal saving throw vs. spells to determine if the item ceases to work. I suggest you apply magical and racial bonuses to the save, but not dexterity bonuses. Most DMs define "possession" as holding, carrying, or using the item. For example, a mage riding a ***carpet of flying*** has possession of the carpet, but the same mage does not have possession if he rolls up the carpet and puts it on a table while studying spells. Note that ***dispel magic*** has no effect on a permanent magical item at all unless it is actually targeted on the item, and artifacts are always immune; however, spell-like effects produced by any item can be dispelled just as spells can be.`,
                `A ***rod of cancellation*** requires a successful melee to-hit roll before it can drain an item. If the rod's wielder scores a hit, use the table on page 152 of the ***DMG*** to determine if the item saves. Generally, no modifiers apply to this save except in extraordinary circumstances that the DM must adjudicate on a case-by-case basis. For example, a ***stone of good luck*** might affect the save, since losing a magical item is bad luck indeed (or perhaps good luck, if the item is *cursed*). Situational modifiers that affect the attacker, such as bad footing or reduced visibility, reduce the to-hit roll and do not improve the defender's chances. Likewise, circumstances that hinder the defender increase the to-hit roll and do not make the item more vulnerable once a hit is scored.`,
                `***Mordenkainen's disjunction*** automatically disenchants all magical items within 30' unless they are in a creature's possession. In that case, the creature makes one save vs. spells; if the save fails, all the creature's magical items are ***disjoined***.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL,ATTRIBUTE_DISPEL_MAGIC],
        },
        {
            page_number: '95',
            question: `What is the effect on a spelljamming ship's ship's rating (SR) if the spelljammer is a wizard wearing a ***ring of wizardry***?`,
            answer: [
                `Generally, there is no effect at all, as a ship's SR depends on the type of helm it has and the spelljammer's level. A ***ring of wizardry*** does not actually boost the character's level. However, I don't see anything wrong with assuming that any spells cast prior to spelljamming are taken from the bonus spells provided by the ring first; this might allow the character to remain "fresh" and be entitled to his full SR even after casting some spells. Note that if the character casts a spell of a spell level not enhanced by the ring, he cannot claim this benefit.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '95',
            question: `The section on bards in the revised ***PHB*** does not mention any limits on magical items. What kinds of magic can they use?`,
            answer: [
                `Bards are rogues, and since their subsection does not specifically mention magical-item restrictions, they use exactly the same types of items other rogues can. Many DMs, however, regard bards as true dilettantes and allow them to use any type of magic. I do not recommend this approach unless your campaign is particularly magic-poor, as a bard who can duplicate too many different class abilities through his magical items can quickly upset the play balance and become tedious to boot.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '95-96',
            question: `In a campaign world set in a period resembling the Renaissance, could magical scrolls be produced in a printing press given the proper inks and other materials?`,
            answer: [
                `No; at least not unless the printing press is actually a magical artifact (see the ***DMG***, pages 89-93). Only fresh writing implements can be used to create scrolls; once a quill or printing plate is used to create a scroll, the residual magical energies remaining on it will spoil all future attempts (see the ***DMG***, page 86). Furthermore, inscribing a spell onto a scroll requires the creator to know the spell (if he's a wizard, that means having it in his spell books) and to expend the appropriate material component and suffer any normal penalties (such as unnatural aging) associated with the spell. While this latter requirement is not mentioned on page 86, it is implied on page 145 (see "Casting Scroll Effects"); it also is necessary for game balance, as PCs otherwise would avoid paying for expensive material components and avoid nasty side effects by writing scrolls instead of casting spells directly.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '96',
            question: `Is it possible to rescue the victim of a ***bag of devouring*** by turning the bag inside out?`,
            answer: [
                `No. A ***bag of devouring*** is an extradimensional monster's "mouth." Turning the bag inside out closes the portal to the mouth but does not make the monster spit out the victim. Generally speaking, characters snagged by a ***bag of devouring*** are beyond help, short of ***wishes*** or heroics inspired enough to really impress the DM.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '96',
            question: `Is it possible to use a ***wand of conjuration*** to summon seventh-through ninth-level monsters if the wielder is high-enough level and expends the appropriate number of charges?`,
            answer: [
                `A ***wand of conjuration*** can release only six charges at once, and therefore is limited to summoning a sixth-level monster or several lesser creatures (see ***DMG***, page 156). Of course, the DM can create nonstandard ***wands of conjuration*** that can summon more powerful creatures, but such devices would more properly be classed as staves (for summoning eighth-level monsters), or rods (for ninth-level or more powerful monsters).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '96',
            question: `When, if ever, do you feel the full weight of the contents of a ***bag of holding***? For example, could you overload a structure or vehicle just by opening a bag if it's fully loaded?`,
            answer: [
                `A ***bag of holding*** is a permanent extradimensional space. Open or closed, items within the bag weigh less than they do outside the bag. An item "regains" its normal weight only when removed from the extradimensional space.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '96',
            question: `Will a ***cloak of displacement*** protect the wearer from a ***magic missile*** spell? Would the protection negate an entire volley of ***magic missiles*** or just the first such missile?`,
            answer: [
                `A ***cloak of displacement*** causes first-time missile and melee attacks to miss. The only effect a ***cloak of displacement*** has on spell attacks is a +2 saving throw bonus. ***Magic missile***, in spite of its name, is a spell effect with no save at all; consequentially, the cloak has no effect at all on ***magic missile*** attacks. I suppose, however, that as a house rule you could allow the cloak's wearer a saving throw of 18 or better to avoid the first ***magic missile*** in a volley. Whether the first ***magic missile*** hits, the rest of the volley automatically hits.`,
                `A ***cloak of displacement*** causes first-time missile and melee attacks to miss. The only effect a ***cloak of displacement*** has on spell attacks is a +2 saving throw bonus. ***Magic missile***, in spite of its name, is a spell effect with no save at all; consequentially, the cloak has no effect at all on ***magic missile*** attacks. I suppose, however, that as a house rule you could allow the cloak's wearer a saving throw of 18 or better to avoid the first ***magic missile*** in a volley. Whether the first ***magic missile*** hits, the rest of the volley automatically hits.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '96',
            question: `Is it possible for a dwarf who suffers a magical-item malfunction to get a partially useful or mildly detrimental effect from the item?`,
            answer: [
                `As TSR's Andria Hayday recently pointed out to me during a discussion concerning the ***AD&D® Trivia Game***, a "malfunction" does not have to be a total failure. Still, I think the spirit of this rule (see the ***PHB***, page 21) is to subject dwarves to occasional complete but benign magical-item failures. I suggest that any partial failure still render the item completely ineffective; the ***AD&D Trivia Game*** uses a ***ring of invisibility*** that makes a dwarfs legs disappear as an example. Likewise, a dwarf who has a ***broom of flying*** fail should not be able to limp away a slow flying speed. On the other hand, malfunctions probably should not actually cause harm; a malfunctioning ***ring of invisibility*** shouldn't partially disintegrate a dwarf, and a ***broom of flying*** shouldn't eject a dwarf while in the air or beat him the way a ***broom of animated attack*** does. Note that most magical fighting gear and clerical items are not subject to such malfunctions.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '180',
    publication_year: '1992',
    publication_month: 'April',
    foreword: `What's the most unusual question the sage has ever been asked? It might be here in this month's column on the AD&D® game. Just in case any readers are wondering, I have reason to suspect the sincerity of only one of the following questions, and that's because I know the two guys who sent it in. The rest are as legitimate as any other question "Sage Advice" gets. First, two questions get "re-saged"; then we'll try to make some sense out of the prattle.`,
    sage_advice: [
        {
            page_number: '77',
            question: `A few issues ago, you said only elven fighter/mages can wear elven chain mail without restriction. However, if you look under elven chain mail in the ***Dungeon Master's Guide*** (page 182), it says, "Its lightness and flexibility allow even magic users and thieves to use it with few restrictions... Elven fighter/mages use it without restriction." What are the few restrictions for mages?`,
            answer: [
                `This is a misprint. The line should read: "Its lightness and flexibility allow even bards and thieves to use it with few restrictions." This official correction has already appeared in more recent printings of the ***DMG***.`,
                `In the core AD&D 2nd Edition rules, mages cannot wear armor unless they are elven fighter/mages. However, it seems to me that half-elven cleric/mages, fighter/mages, and fighter/mage/clerics also could function while wearing elven chain mail. Mage/thieves and fighter/mage/thieves could probably also wear elven chain mail since straight thieves can—but don't forget to apply the penalties to thieving abilities from Table 29, page 39, in the ***Player's Handbook***.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '77',
            question: `In "Sage Advice" in issue #156, you said a heavy catapult and a trebuchet were two different things. However, the SPELLJAMMER™ boxed set's ***Concordance of Arcane Space*** (page 40) says that a heavy catapult is a trebuchet. Also, if trebuchets can hurl rocks weighting 500 lbs., how can they be fitted onto spelljammers? If a trebuchet is a separate item, how much does it cost? How big would a ship have to be to have one? What are this weapon's other statistics?`,
            answer: [
                `I didn't actually say that catapults and trebuchets were different in issue 156, but they are according to the histories I've read. Technically, a catapult is a torsion-powered siege engine. A catapult's torsion (twisting or springing) power was usually provided by either tightly wrapped skeins of horsehair or layers of green boards arranged like the leaf springs on an automobile's suspension.`,
                `To get an idea of how a twisted-skein catapult worked, stretch a rubber band between your thumb and forefinger. Now take a *capped* ballpoint pen or unsharpened pencil and stick it between the two strands of rubber. If you flip the pen end over end a few times like an airplane propeller, you'll twist and tighten the rubber band; you'll have to slide the pen in and out a bit (because your hand will be in the way) to rotate the pen fully. When you've got the rubber band really tight (and aimed away from your face), let go. The rubber band will flip the pen over quite forcefully. The catapult's skeins were tightened by men on either side of the catapult who turned cranks connected to the skeins, tightening them up without moving the catapult arm, which was held back. Once the arm was released, the torsion in the twisted skeins flung the arm in an arc that was stopped by a crosspiece on the machine itself; the ammunition, which had been placed in a cup on the end of the arm, was then hurled away.`,
                `The leaf-spring catapult worked just like a big crossbow. In fact, the only difference between this kind of siege engine and a ballista (which worked exactly like a big crossbow) was that a catapult had a long arm with a cup or pouch at one end for throwing stones in a high arc; in place of the arm, a ballista had a slide that hurled a rock or large bolt in a flat arc.`,
                `A trebuchet, however, was powered by a counterweight. A long beam was placed on a pivot, with one end of the beam a lot closer to the pivot than the other. A heavy weight was hung at the beam's short end, and a pouch for holding rocks was hung on the other, then tied down; the whole weight of the short end was always far greater than the entire weight of the long end and its ammunition. When a loaded trebuchet was fired by releasing the long end, the weight snapped the long end upward, and the rock in the pouch was hurled away. If you've ever seen a troupe of acrobats working with a seesaw, you've got the idea.`,
                `In historical terms, the SPELLJAMMER setting's light catapult probably is similar to the historical onager, a small twisted-skein torsion engine that hurled a rock that weighed about 10 lbs. The medium catapult probably is similar to a larger skein- or leaf-spring torsion engine that hurled a 25-lb. rock (in landsman's terms, this would be a heavy catapult; the SPELLJAMMER setting has adopted its own terminology). The spacefarers heavy catapult, or "trebuchet," would be a very large torsion engine hurling a 40- or 50-lb. rock; page 40 of the ***Concordance*** defines catapults as "large, stone-throwing devices operated by springs, cranks, or flywheels." I doubt that very large counterweight engines could be used on spelljammers at all, except on dwarven citadels and other massive bodies of 300 tons or more. If you want to introduce such weapons into your campaign, you're on your own.`,
                `As a general rule of thumb, I suggest that doubling the weight of the missile should increase the hull damage to the next higher step. For example, a weapon hurling an 80-lb. rock would do 2d6 hull points. Each increment of increased damage should cost an extra 300-400 gp, reduce the THAC0 by one (20 maximum), take one extra crew, reduce the rate of fire by one, and increase the weapon's "count" by one. So, our "80-pounder" would cost 1,300-1,400 gp, require five or six crewmen, have a THAC0 of 19, have a rate of fire of 1/3 or 1/4, and would count as three large weapons installed. I suggest that you do not allow the critical-hit numbers and crew-damage ratings to increase beyond the heavy catapult's 18-20 and 3d10 values.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '77-78',
            question: `I have a 6"-tall dual-classed fighter-monk. When he was a fighter, he was permanently ***hasted***, then he was shrunk. To make up for his limited choice of weapons due to his size, I made him a monk. At 5th level, ***haste*** and ***slow*** spells don't affect monks. Since the character was ***hasted*** as a fighter, will the effect remain? If so, will ***boots of speed*** improve his movement rate, if he can find a pair that will fit?`,
            answer: [
                `If you think a 6"-tall character can't do much damage with a fighter's traditional weapons, you're right—especially if he fights any foe larger than a cockroach. However, diminutive swords, battle axes, and the like still do more damage than tiny fists and feet. (I suppose a 6" monk wearing a ***girdle of giant strength*** might be able to do some interesting things with judo throws; a cartoon character called Atom Ant comes to mind.)`,
                `Strictly speaking, the ***haste*** effect ends as soon as the character becomes a 5th-level monk; the discipline and control the monk imposes on his body forces it to return to its normal (non-***hasted*** or non-***slowed***) state. Also, most campaigns disallow permanent ***haste*** effects, as they tend to unbalance play. Furthermore, this combination tends to burn out characters, as it magically ages the character in either edition of the AD&D game. In the original game, a ***haste*** recipient not only ages a year, but also must make a *system shock* roll or perish. In either edition of the game, I recommend that the permanently ***hasted*** character reroll for system shock periodically, like every day, week, or month; a character's body can take only so much abuse. Note also that the character should age at least twice the normal rate, and the DM would not be out of line to rule that the character actually ages an extra year every hour, week, or month.`,
                `Generally speaking, similar magical effects are not cumulative in either edition of the AD&D game. A second ***haste*** spell will not affect a ***hasted*** character in either edition, nor can a ***hasted*** character benefit from a ***potion of speed***. Likewise, ***boots of speed*** bestow a base movement rate (subject to encumbrance penalties) of 24. If the wearer already moves that fast or faster, he gets no benefit from the boots no matter where the superior movement rate comes from. As it happens, your 5th-level monk has a movement rate of 19, which the boots can boost to 24, no higher.`
            ],
            comment: 'The line about similar magic not being cumulative in either edition is at odds with Sage Advice #154 that states that for 1E ***haste*** is cumulative with ***potion of speed***.',
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E,ATTRIBUTE_CLASS,ATTRIBUTE_SPELL],
        },
        {
            page_number: '78-79',
            question: `Can you ***shape change*** a tarrasque into a little bunny, then eat it for dinner? If a human was ***polymorphed*** into a bunny and some of the bunny's fur was taken, then the bunny was ***polymorphed*** back into a human, would the fur sample turn back into human hair or would it stay bunny fur? In other words, will a ***lightning bolt*** spell blow up in my wizard's face if he uses the bunny fur as a material component?`,
            answer: [
                `First, in either edition of the AD&D game, the tarrasque is a unique creature. A DM can decide that a whole race of tarrasques populates the world, but there are more original ways to challenge player characters. Second, ***shape change*** works only on the caster/user, so no one can use it like a ***polymorph other*** spell; if ***shape change*** could be used on creatures other than the caster, it would give the recipient the ability to change its shape and all such changes would be under the recipient's control, not the caster's, I'm not sure what form a tarrasque would choose if it could ***shape change*** itself, but it wouldn't be likely to bring any joy to the spell-caster, whatever that shape happened to be.`,
                `Of course, even a tarrasque might fall victim to a ***polymorph other*** or ***polymorph any object*** spell. In either edition of the AD&D game and in the D&D game, a ***polymorphed*** creature keeps its hit points, natural armor class, and possibly other purely physical abilities; in the tarrasque's case this includes regeneration and maybe even its limb-severing bite. So, your tarrasque/bunny still is one tough customer: A 300-hp bunny with AC -3, at least two attacks (bite and kick), and a legendary regeneration ability. Even if one managed to eat this creature, you'd still need a ***wish*** to keep it dead (see the tarrasque's description in the ***Monstrous Compendium***, volume 2).`,
                `Since ***polymorphed*** creatures assume their normal shape when killed, I suggest that any pieces cut from them change back, too. After all, being separated from the rest of the creature is a "death" of a sort. In the case of the tarrasque/bunny, the creature would change back when reduced to -30 hp, or perhaps any time after being reduced to below zero hit points if the DM so decides. This method clears up esoteric questions such as, "Can I use ***polymorphed*** human hair as a material component for a ***lightning bolt*** spell?" It also keeps player characters from using ***polymorph*** magic as a cheap shortcut when creating scrolls, potions, and other magical items.`
            ],
            attributes: [ATTRIBUTE_1E,ATTRIBUTE_2E,ATTRIBUTE_SPELL,ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '79',
            question: `Suppose an explosive ***dimensional mine*** is thrown into an extradimensional ***flatbox*** at the exact instant the ***disintegration chamber*** it inhabits is activated. The resulting confluence of dimensions destroys the contents of the ***flatbox*** and opens a rift to the Astral plane. Now, the real question is: Do the magically shrunk, mated pair of immortal astral dragons that were sleeping inside the ***flatbox*** instantly recover all their lost hit points (because they are immortal), and if so where do the dragons wind up after the explosion and rift formation?`,
            answer: [
                `You're definitely misreading the descriptions of the magical items involved here (all three are from the ***Tome of Magic***, pages 136-137). ***Dimensional mines*** are inert until placed inside extradimensional spaces. Even then, a ***dimensional mine*** does not explode; it ruptures the extradimensional space, and any matter inside the space is spewed into the Astral plane. The effect does not damage the contents of the space. ***Flatboxes*** don't inhibit magic at all, though by their very nature they cannot be illuminated. A ***disintegration chamber*** produces no spectacular effects when brought into an extradimensional space, and it cannot destroy anything that is not inside it (even then, nothing happens until somebody pushes the button).`,
                `In the situation you describe, the ***flatbox*** could explode when the ***dimensional mine*** was tossed inside, as the ***flatbox*** is an extradimensional space that has a bad habit of exploding when it's disturbed. However, it does not have to explode; it could just be ruptured. The ***disintegration chamber*** would be utterly destroyed in such an explosion, and the dragons would survive and get sucked through the rift and tossed onto the Astral plane. Whether the dragons were inside the ***disintegration chamber*** when it was activated is irrelevant, as their immortality (see their description in the ***Monstrous Compendium***, DRAGONLANCE® appendix) allows them to survive being simultaneously "destroyed" and ***disintegrated***.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_APRIL_FOOLS],
        },
        {
            page_number: '79-80',
            question: `If a thief lost an arm just below the elbow, would he still be able to wear a magical bracer on the stump? Could he wear a bracer over a prosthesis? What effect would the loss have on the character's thief abilities? If he originally weighed 115 lbs., what would his new weight be?`,
            answer: [
                `Bracers are made to be worn on the wrist or forearm. Individual DMs are free to decide if amputee characters can use bracers (and other items that must be worn) by wearing them on stumps or prostheses. Check out "Sage Advice" in issue #172 for a discussion of where various types of magical equipment are normally worn.`,
                `The DM must decide whether the loss of a limb or appendage will affect thieving abilities at all. There's no reason to assume that the character cannot simply adapt and go on performing just as before. If the DM isn't feeling this generous, I suggest a penalty of 5-25 on all applicable percentile thieving abilities. For example, the one-handed thief mentioned above will suffer no penalties to his ability to hear noise, move silently, or hide in shadows, as he doesn't need to use his arms and hands to do these things. The character might suffer a penalty to pick pockets or find and remove traps. The DM could decide that this one-handed character has fewer options when picking pockets, and he could assess a -5 penalty to his percentile chance for success. The DM also might decide that rogues don't use their hands much when finding traps, but that two hands are helpful when removing traps, and so assigns no penalty to "find" and a -10 to "remove." Finally, the DM might decide to assign a -15 penalty to climb walls, since the character's remaining three appendages are going to be very busy when the character is climbing. If penalties are assessed, I strongly suggest that the DM give the character an opportunity to acquire some adaptive equipment and a chance to practice using it. The easiest way to simulate this is to use the "Training" optional rule (see the ***Dungeon Master's Guide***, page 49).`,
                `As to the loss of weight, the character should lose about 4% of his total weight (4.6 lbs., in this case) for losing roughly half an arm. "Sage Advice" discussed this calculation in issue #156 (see the "legless gnome" question).`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '80',
            question: `Exactly how many gnomes can an adult griffon carry without losing its speed or altitude, physical attacks or fearsome temperament?`,
            answer: [
                `A typical gnome, without equipment, weighs about 82.5 lbs., but this figure can be as little as 73 lbs. or as much as 92 lbs. (***Player's Handbook***, page 24, Table 10). Carrying capacities for most flying creatures that can be used as mounts are conspicuous by their absence from the creatures' descriptions in the various ***Monstrous Compendium*** volumes. For the sake of game balance, I suggest that the most common flying mounts—pegasi, griffons, and hippogriffs—have the same carrying capacity. The Pegasus description in MC1 lists this as the same as a medium war horse: 220 lbs. at full speed, 330 lbs. at half speed, and 440 lbs. at one-third speed. As a general rule, a flying mount loses one maneuverability class when carrying a rider. I suggest that a winged mount loaded to the one-third movement class be unable to fly at all. Note that there is no reason a DM could not apply the movement rate and carrying capacity modifiers from the horse quality rules (***DMG***, pages 36-37) to flying mounts, too.`,
                `As to the question of a loaded griffon's temperament: Griffons are infamous for their nasty dispositions, and carrying loads doesn't make them any happier. Except for reductions to its maneuverability and movement, a griffon carrying a load still can fight normally. However, I suspect a griffon would strongly resent carrying multiple riders or being overloaded. Such a beast probably will try to shed—or even eat—excess riders.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '80',
            question: `Where can a wizard put a ***sphere of annihilation*** when he is not using it?`,
            answer: [
                `You can "put" a ***sphere of annihilation*** anywhere you want when you are not using it, just by commanding it to stop. Of course, somebody else could set it in motion again by trying to control it, so it behooves the owner to park his ***sphere of annihilation*** in a safe place, like a locked vault. (For an example of a creative use of a ***sphere of annihilation*** stored in this way, see "The Living City" in POLYHEDRON™ Newszine issue #52.)`,
                `Since the effect a ***sphere of annihilation*** will have on its surroundings can vary widely from campaign to campaign, it might be useful to discuss this item's properties in some detail. Simply put, a ***sphere of annihilation*** is a hole in the fabric of the multiverse. Like other holes, a ***sphere of annihilation*** is benign until something falls into it.`,
                `However, the strictest possible interpretation of a sphere's powers (***DMG***, page 180) yields a pretty terrifying point. Since anything that contacts the sphere is instantly sucked into the void and utterly destroyed, a ***sphere of annihilation*** moving through the air might be accompanied by a continuous rumble of thunder as the air it encounters is annihilated and more air rushes in to fill the vacuum. Even at rest, a ***sphere of annihilation*** might eventually strip a planet of its atmosphere as it annihilates each and every gas molecule that touches it. A single such sphere could drain oceans and maybe even gobble up stars and planets; if one does not place a size limit on what the sphere can annihilate, it could suck in the whole earth instantly just by touching the ground. The only way to safely store a sphere under these conditions would be to seal it into an airtight vault, where it eventually would annihilate the air around it and create a perfect vacuum. Nevertheless, a more responsible approach would be to destroy the sphere with a ***rod of cancellation*** as quickly as possible.`,
                `I think it's far more reasonable to assume that fluid matter, such as a body of water or an atmosphere, will tend to flow around the sphere rather than contacting it and being annihilated. Of course, air or water could be fanned or ladled into the sphere, where it would be annihilated. This effect is similar to what would happen if a ***portable hole*** was spread out on a sand beach. The hole displaces the sand without otherwise affecting it, and no sand falls into the hole unless it is pushed inside. I also suggest that a ***sphere of annihilation*** be unable to utterly destroy anything bigger than it is. If, for example, the character controlling the sphere plunges it into the earth or into a castle wall, the sphere bores a 2' hole instead of sucking the entire "object" into oblivion. Likewise, small, man-sized, and large creatures might survive touching a sphere unless they fall completely into it. (See the previous question on "amputee thief" for possible consequences of misadventures with ***spheres of annihilation***.) Tiny creatures probably don't have enough strength or mass to resist being sucked into a sphere if they are unfortunate enough to touch it.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '181',
    publication_year: '1992',
    publication_month: 'May',
    foreword: `This month, we continue our look at some of the more unusual-and controversial-questions that our sage has received.`,
    sage_advice: [
        {
            page_number: '99',
            question: `The paragraph in the ***PHB*** that describes the Artistic Ability nonweapon proficiency (page 57) says that the artistic character is "naturally accomplished in various forms of the arts." The description goes on to say that if the character fails a proficiency check, he "has created something aesthetically unpleasing or just plain bad." Being something of an artist myself, I can tell you that beauty is in the eye of the beholder. I think characters viewing the work should be the ones to make the proficiency check to determine if they can perceive some value in it. After all, if the character has natural talent, he would not waste time working on something inferior. In the case of an architect or engineer, I can see checking to see if the creative character produced a work with flaws, but in the case of a painter, sculptor, poet, or musician, what is good or bad should be relative to the individual or group sampling the work.`,
            answer: [
                `You're putting too much emphasis on the "naturally accomplished" phrase. The proficiency description's second sentence explains what being "natural accomplished" means: The character understands color, form, space, flow, tone, pitch, and rhythm. While these are the fundamental building blocks of artistic expression, not every character understands them to the same extent, and not every character can consistently translate this knowledge into a successful work of art. Everywhere, there are marginally talented authors and artists who believe they'd be famous if only the public could appreciate them, but that's putting the cart before the horse. When an artist botches the job and produces a piece of junk, it's the artist who has failed, not the viewer.`,
                `I suppose a DM could assume that abstract art has made its appearance in the world. While it is true that only people who understand the "language" of such art can fully appreciate it, the artist still must successfully apply his knowledge to create a high-quality, aesthetically pleasing work. In this case, the viewer might indeed have to make an ability check to understand the work, but this does not free the artist from his obligation to do a good job in the first place.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '99-100',
            question: `I am so disgusted with all the good represented in the AD&D game. Why is there no place in any of the various worlds for evil characters? Even the RAVENLOFT™ setting doesn't really allow for evil player characters. The staff at TSR really needs to realize that the Demiplane of Dread is not the kind of place where paladins and their moms bring PCs glasses of cold milk and plates of warm brownies! The AD&D game's melodramatic theme has made me sick one too many times. Can we look forward to a change soon?`,
            answer: [
                `TSR's products assume the PCs will be the good guys, so you are mostly correct when you point out that there is no place in any of the published worlds for evil PCs. You're "almost" correct, because any AD&D game world needs evil nonplayer characters to provide threat and conflict for the PCs. Completely safe worlds are pretty boring, as you can't have heroic player characters without suitably nasty villains to oppose them.`,
                `I also assure you that nobody at TSR, Inc. believes that paladins in the RAVENLOFT setting have time to serve cookies and brownies. They're far too busy trying to keep the various lords from obliterating the innocent and snatching unsuspecting travelers off their home planes.`,
                `Your simplistic view of good people as superficial wimps is curiously similar to the attitude most 20th-century megalomaniacs have shown to the world. In the 1930s, the Fascists in Germany and Italy and the Militarists in Japan had exactly this view of the western democracies. By 1945, however, everybody understood just how tough those democracies really were.`,
                `The struggle between good and evil is what drives the AD&D game. It is possible for the PCs to be the bad guys; however, TSR products assume the PCs will be good for several reasons. First, the game's basic structure requires PCs to work together as a group; each character class has inherent strengths and weaknesses that make them very well prepared to handle some situations but unprepared to handle other kinds of problems. The only way to overcome these gaps in capability is to work with other characters who have different sets of skills. The staff at TSR knows from experience that it is much easier-and a lot more fun-to put together an effective party of good and neutral characters than to try and hold together a group of evil characters.`,
                `A party of good characters will share a commitment to a common moral or ethical precept. Evil characters, on the other hand, tend to be concerned with preserving themselves. This concept of self varies with the character's actual alignment. The self could be an entity free to do exactly what it wants regardless of the larger consequences (chaotic evil); it could be, an entity uniquely qualified to survive the rigors of existence (neutral evil); or it could be a part of a larger structure that defines all existence (lawful evil). Nonetheless, each character's primary motivation is essentially selfish.`,
                `Consequently, the types of bonds that hold these groups together are vastly different. Good guys depend on friendship, trust, and altruism to keep themselves going. This helps keep campaigns going, too, since each players share in the group's successes. Since role-playing is a social activity, it helps when all the players and their characters are at least civil to each other. Evil groups stay together mainly through intimidation and deceit. This tends to destroy campaigns because players get tired of being fooled or bullied. Success, if there is any at all, belongs only to the player who comes out on top in each session.`,
                `In the short term, both types of groups can get by; in the long term, good groups develop common goals and accomplish great things together. Evil groups stay focused on the short-term goal of survival and don't get anywhere. If you do manage to reach a point of equilibrium where a powerful evil PC can control the other PCs, you'll find that the other players quickly will lose interest—nobody likes to play the fool or the doormat for long. Also, players can keep their game feelings separated from their real feelings for only so long. Sooner or later, the hostilities that arise between evil characters are going to arise between the players, and good-bye campaign. The only way I know to avoid this when your PCs are evil is to structure your games like skirmish war games, not heroic quests. This is fine if skirmish war games are what you want to play. You certainly could play a long-term campaign in the RAVENLOFT setting where each evil PC controls his own domain. Again, this type game of will become a long-term political and military campaign, not a role-playing campaign.`,
                `In a role-playing campaign, good guys tend to make a lot more interesting characters than bad guys. Bad guys don't struggle with the larger issues, and they remain unconcerned with the ethical implications of what they're doing. As a result, the player has less to think about and just plain less to do if he has an evil character. Bad guys don't last as long as good guys. When the party gets lost in the wilderness and food runs out, a good party pools its resources and tries to figure out how to feed everybody; a group of starving bad guys eventually begins stealing each other's food or even goes to work deciding how best to eat each other. The party infighting that arises among evil characters also increase the PC mortality rate. Not only will evil characters occasionally kill each other, but they often will allow their comrades to die unnecessarily. Such losses impair the group's ability to withstand further adversity. Of course, an evil character can disingenuously choose to use others to help him survive; however, this parasitic approach doesn't work in a role-playing campaign. If the character doesn't succumb to greed and turn predatory, the PCs he's taking advantage of eventually will notice what's really happening. In real life, people trapped in an evil person's orbit might not be able to break free, but players in a game always can just quit (and they often do).`,
                `An AD&D campaign with good PCs doesn't have to be melodramatic. Characters, at least occasionally, should have to labor long and hard to conclude an adventure. Along the way, they can face a few thorny ethical problems and be forced to choose between unpleasant alternatives. If the action in your games is sappy, it's because there's not enough creative energy going into the storytelling, not because the PCs are good. Be very careful when considering evil PCs. Many DMs, especially younger ones, don't have a clear idea of what evil is and what being evil costs. Evil, by definition, is that which causes ruin, injury, or pain. The good and evil alignments in the AD&D game are not rival clubs or gangs. Good people stick together because they have a moral and ethical inclination to do so. Evil characters don't hang together. Unlike good characters, they don't have a common point of reference. They also don't have to observe proprieties or sacrifice their own desires for the sake of goodness. They pay for these privileges by losing the trust and confidence of their companions and the ability to trust others. To an evil being, everyone and everything is a potential enemy, even after a peaceable meeting.`,
                `Since good characters tend to promote healthy, long-running campaigns, and evil characters tend to break up gaming groups, you can expect TSR's products to continue casting the good guys at center stage. If you decide to ignore all of the foregoing and try evil PCs, I wish you luck. At worst, you'll give up the game in disgust. At best, you'll learn a little bit about what makes the game tick. Either way, you'll get an education.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '100',
            question: `The first sentence in the ***Concordance of Arcane Space*** in the SPELLJAMMER boxed set says, "Everything you know about space is wrong." Does this mean that characters can shout from ship to ship and still be heard if the ships' air envelopes aren't overlapping? Does this also mean that a ship moving at maximum speed in wildspace will stop immediately if the helmsman leaves the helm, inertia not withstanding?`,
            answer: [
                `Obviously, not everything you know about space is wrong. Sound does not carry though the void, and inertia, of a sort, still applies to spelljammers. Generally, if a helmsman vacates his post or becomes disabled, the spelljammer's SR falls to zero. Such a ship cannot change direction or speed and will continue to move in a straight line until either it is brought under control or it encounters a gravity well. Check out the "Power Sources" section of the ***Concordance of Arcane Space*** (pages 33-39, especially page 35) and the sections in Chapter 4 on movement (especially pages 55 and 60) for details.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '100',
            question: `During an argument about the rules, one of my friends said she called TSR, Inc. and was told both that the rules shouldn't be followed if they impede play and that you never should listen to a rules lawyer. Is this true?`,
            answer: [
                `I'm not surprised that one of my colleagues gave that kind of answer to your friend over the phone. Too many players and DMs spend their time and energy worrying about getting the rules "right" and not nearly enough time on telling an entertaining story, presenting and responding to intellectual challenges, and creating believable characters that players care about. People who call TSR to settle local rules disputes deserve what they get. Like everything else in a well-run campaign, the DM and players can hurt the game by applying the rules too loosely or too stringently. Campaigns that ignore the rules quickly spin out of control; player characters get too much power or can't get enough power. Either case makes adventuring a futile exercise. Likewise, the DM and players cannot make intelligent game decisions unless they have some idea of what the results of some particular action will be. The rules are there as a tool for channeling the action in a creative and entertaining direction. On the other hand, the rules are supposed to promote play, not restrict it; a role-playing game is supposed to be a heroic adventure, not an exercise in legal argument.`,
                `Generally speaking, any rule is fine so long as it does not impede or disrupt play. When someone points out a different way of looking at the rules, the group ought to consider the following: Will doing things this way bring the game to a grinding halt? Does this new way of reading the rules grant a PC or monster a world-beating way to use a spell or bit of equipment? Is this particular choice of skills and equipment obviously superior to all other combinations of powers available in the game? Will this new rule place a PC or monster in the kind of ridiculous position that only a complete fool would get into? If the answer to any of these questions is "yes," consider another interpretation of the rules, at least until the current adventure is over.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '182',
    publication_year: '1992',
    publication_month: 'June',
    foreword: `This month, our sage addresses more AD&D® DARK SUN™ campaign questions, then "re-sages" two past questions.`,
    sage_advice: [
        {
            page_number: '29',
            question: `Were templars, gladiators, rangers, bards, and psionicists deliberately left off the multiclassed character table? If a multiclassed demihuman were a gladiator/ranger, would he add the extra weapon attacks he gets from his gladiator level and weapon specialization to the two attacks he gets each round as a ranger?`,
            answer: [
                `Take a closer look at the rules and table on pages 38-39 of the DARK SUN Rules Book. Several psionicist combinations are listed there. If you check the notes immediately following the multiclassed table on page 39, you'll see that the templar, ranger, and bard can be substituted for the cleric, fighter, and thief, respectively, in most cases. Gladiators cannot be part of a multiclass combination. No fighter/fighter combinations exist; no combinations list a major class more than once, because no character in any AD&D game setting can use subclasses of the same class in a multi- or dual-classed combination.`,
                `If you have a taste for really far-out variants, fine, but don't bring the problems they create to "Sage Advice." However, since you've gotten me started, note that rangers don't get two attacks a round. What rangers get is the ability to use a secondary weapon without penalty. A secondary weapon gives a character exactly *one* extra attack each round. Multiple attacks from level or specialization apply only to the primary weapon. Of course, a haste spell and similar magicks do grant double the normal number of attacks. In this case, the character gets two attacks with the secondary weapon and twice his normal allotment of attacks with the primary weapon.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '29',
            question: `Can templars cast quest spells? Can defilers and preservers opt to become wild mages? How are the new clerical spheres from the ***Tome of Magic*** used on Athas?`,
            answer: [
                `Under the right circumstances, templars, druids, and elemental priests can get quest spells. The section on quest spells in the ***Tome of Magic*** (pages 10-13) gives guidelines for helping the DM decide what the right circumstances are.`,
                `Both preservers and defilers can become wild mages.`,
                `The newly released ***Dragon Kings*** hardbound book for the DARK SUN campaign contains complete information on integrating the ***Tome of Magic's*** new spheres into DARK SUN campaigns.`
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '29',
            question: `What do priests on Athas use for holy symbols?`,
            answer: [
                `This is up to the DM. Templars probably use their badge of office or their sorcerer-king's seal. Elemental priests might use the Athasian symbol for their element; Tim Brown, one of the designers of the DARK SUN boxed set, points out that the rules for turning undead on Athas (*Rules Book*, page 70) seem to suggest that a small quantity of the priest's element might suffice as a holy symbol. Druids might use pieces of foliage, chunks of stone, or handfuls of dirt from their guarded lands.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '29',
            question: `Can Athasian psionicists have wild talents?`,
            answer: [
                `No. Nor can psionicists on any other AD&D game world. Psionicists enjoy the full range of their profession's psychic powers instead of having wild talents.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '29',
            question: `Why can't thri-kreen wear magical rings and cloaks? Can they wear magical boots and gauntlets?`,
            answer: [
                `Thri-kreen can wear rings, cloaks, boots, and gauntlets, but only if the items are made to fit thri-kreen; see the *Rules Book*, page 16. Items made for humans or demihumans just don't fit thri-kreen, as such items either are too small or are entirely the wrong shape.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '29',
            question: `The Racial Ability Requirements table (*Rules Book*, page 3) allows no scores lower than 5 or higher than 20. However, the Racial Ability Adjustments section (same page) says no adjusted score can be lower than 3 or higher than 24. Can racial adjustments alter the initial limits?`,
            answer: [
                `The "limits" on Athas are a minimum of 3 and a maximum of 24. The Racial Ability Requirements table does not denote limits. A new character must have scores that fall within the listed range of the Racial Ability Requirements table before any racial adjustments are applied (*Rules Book*, page 3, last line under the heading "Minimum and Maximum Ability Scores" and note the word "before" in boldface type).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '29',
            question: `What are the per-round movement rates for the various Athasian races? The *Rules Book* only gives overland movement rates.`,
            answer: [
                `The rates are as follows: human, 12; dwarf, 6; elf 12, half-elf, 12, half-giant 15, halfling, 6; mul, 12; thri-kreen, 18.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '29',
            question: `How far can a mul or thri-kreen move in a 20-hour marching day?`,
            answer: [
                `These races get double movement points if they go the full 20 hours (for muls, 48 or 60 on a forced march; for thri-kreen, 72 or 90 on a forced march). Check out the overland movement rules in the *Rules Book*, pages 87-88, for details.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '29',
            question: `Do Athasian elves automatically receive the Running proficiency?`,
            answer: [
                `No, but they can add their constitution scores to their daily overland movement rates. It is this ability, not a universal running proficiency, that accounts for their legendary overland speed. Note that this ability is generally safer and more reliable than the Running proficiency because it does not require a proficiency check or impose a combat penalty (***Player's Handbook***, page 63).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '29',
            question: `Do Athasian dwarves have infravision? I can't find a reference to it anywhere in the DARK SUN rules.`,
            answer: [
                `I can't find it either. This was an oversight due to some lost text. Athasian elves do have infravision (*Rules Book*, page 6). I suggest giving 60' infravision to Athasian dwarves, half-elves, and halflings.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '29-30',
            question: `When you first build a character tree, are all the characters third level?`,
            answer: [
                `Yes. At the start of play, all single-classed PCs are 3rd level and multiclassed PCs are 2nd level in the most "expensive" class. However, inactive characters added to a tree to replace slain characters always start at 1st level. Note that any inactive character on a tree can gain levels according to the rules on page 41 of the *Rules Book*. The point of having a character tree is to give the player a stable of replacement characters who are better than 1st level, not to take *all* the sting out of character death. Smart players will manage their character trees so their inactive characters reach 3rd level as quickly as possible.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '30',
            question: `I have a player who's constantly after me to allow his character to acquire a chemistry or alchemy proficiency. This seems pretty high-brow to me, especially on a planet where a magnifying glass is regarded as a mysterious type of magic. What would a chemistry or alchemy proficiency do on an AD&D game world, anyway?`,
            answer: [
                `Generally, Athasians are a pretty sharp lot. While the introductory tale "A Little Knowledge" (by Jerry Oltion) includes a character who is mystified by a chunk of glass, this is far from the norm. As Tim Brown (Lake Geneva's DARK SUN world martinet) points out, most Athasians, with their exposure to elemental priestly magic and their survival skills, have more knowledge about the way their world works than common folk in most places.`,
                `Still, exact sciences such as chemistry are all but unknown in the magical worlds of the AD&D game. Chemistry is replaced by alchemy, which is a complex and esoteric art that is much better suited to sages (***Dungeon Master's Guide***, pages 106-108) than to adventurers who spend their time and intellectual energy learning character-class abilities. In any case, alchemy is too complex to be covered in a single proficiency. I suppose a true alchemist might have nonweapon proficiencies in Brewing, Astrology, Herbalism, Mineralogy, Spellcraft, Engineering, and, optionally, Pottery or Glassblowing (a previously undescribed proficiency). The character would have to use his combined knowledge of all these subjects to tackle any particular problem.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '30',
            question: `Does the Water Find proficiency allow a half-giant to locate four gallons of water? Can a thri-kreen give the water he finds with the Water Find proficiency to other characters?`,
            answer: [
                `No character who successfully uses the Water Find proficiency suffers a constitution loss due to dehydration (*Rules Book*, page 46). This does not necessarily mean that the character actually finds his full daily requirement of water, which varies according to the character's race, armor, and level of activity. In fact, since Water Find does not allow a character to rehydrate, it's pretty clear that the character usually finds something less than a full day's supply. As for giving away any water found, there's no reason to assume the character actually finds drinkable water; the proficiency might yield just a trickle of liquid water and several mouthfuls of soggy cactus pulp. While half-giants and thri-kreen might be able to choke down many different forms of nonliquid water, not every character can. I suggest that you place some limit on the amount of water actually available for sharing, say 1d4 + 1 pints. Note also that thri-kreen usually have better things to do with their nonweapon proficiency slots that spend them on Water Find, since they need so little water (DARK SUN *Rules Book*, page 86).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '30',
            question: `Do merchant houses do any buy ing or selling at their headquarters? Are goods and coins the only forms of payment accepted at merchant emporiums?`,
            answer: [
                `Only members or agents of a merchant house are allowed to enter a house's headquarters; this precludes normal transactions between the house and ordinary customers. I suppose that very special deals with other houses or special customers might be negotiated inside the headquarters, but only if extra security is necessary to keep rival merchant houses from getting wind of the deal and only if no city laws are being broken (no merchant house would ever run the risk of having its headquarters raided by the local templars).`,
                `As far as methods of payment go, nothing beats cash or bartered goods in the hand, especially on Athas, where it is very easy to go into the desert and either deliberately disappear to avoid a debt or accidentally fall victim to the planet's many dangers. Either way, the merchant is out his goods and probably will become a laughing stock to boot. Some merchants might be willing to grant credit or accept services in lieu of cash or goods on the spot, but only if the terms are very favorable to the merchant and the buyer is either extremely famous or a trusted, long-time customer.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '30',
            question: `I don't understand the weapons chart on page 53 of the *Rules Book*. It looks like the column headings should be moved over one space, but if you do that, where does the "Damage" heading go?`,
            answer: [
                `This is the kind of typo that gives rules editors ulcers. Most of the column headers are one column too far left and should be shifted one column to the right. The "Damage" heading actually goes above the last two columns, which are "S-M" and "L" for the damage done by weapons to beings of different sizes. The columns should read: Weapon name [no heading actually used], Cost, Wt [weight in pounds], Size, Type, Speed [for modifying initiative rolls; see ***PH***, page 94], [Damage] S-M, and [Damage] L.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '30',
            question: `What are the range categories and rate of fire for the chatkcha?`,
            answer: [
                `Generally, the AD&D game divides missile ranges into thirds, so short range for the chatkcha (with a maximum range of 90 yards) should be 30 yards or less, medium 31-60 yards, and long 61-90 yards. I suggest the rate of fire be one each round, the same as a hand axe.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '30',
            question: `I pretty much understand how to calculate how many Psionic Strength Points a character with a wild talent gets. But how many PSPs does a character with more than one wild psionic talent have? And what do you do with talents where the PSP cost to establish or maintain the power varies?`,
            answer: [
                `To assign PSPs to a character with a wild psionic talent, use the procedure de- scribed on page 20 of ***The Complete Psionics Handbook***. When a power has a variable PSP cost, the character gets PSPs equal to the minimum cost to establish and maintain the power. For example, a character with the wild talent of Domination gets 27 PSPs for that power (3 PSPs is the minimum cost to use the power once, plus the minimum maintenance cost of 6 PSPs, times four). If the character has more than one power, he gets the full allotment of PSPs for *each* power. That is, determine how many PSPs the character would get for each power, then add them together to get the character's actual PSP total. Note that a character with multiple wild talents still gets only four extra PSPs for each experience level gained.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '30',
            question: `What do you do with talents that have prerequisites? Are these like college courses in that you must have all the prerequisites before you can have the talent in question?`,
            answer: [
                `To get a power with prerequisites, a character must have all the prerequisites before gaining the power. In college, you sometimes can get the prerequisites waived; that never happens for PCs. However, characters frequently can be granted all a power's prerequisites along with the power. This is always the case with newly gained wild talents. For instance, the character with Domination in the previous example automatically would have both Mindlink and Contact (the character also would get extra PSPs for those prerequisite powers).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '30-31',
            question: `What happens when a DARK SUN character has ability scores so high that the character's psionic power scores are 20 or higher—for example, a character with a wisdom of 22 using the ***contact*** power (where the power score is equal to the character's wisdom score)?`,
            answer: [
                `A roll of 20 is always a failure when using a psionic power (***TCPH***, page 11), and it might also carry other penalties. In theory, a character with a power score of more than 20 cannot take advantage of the "skill score" optional rule (***TCPH***, page 11, and page 28, "Optional Results") since you can't roll an unmodified 21 or higher on 1d20. Kind referees might allow such characters to have an effective score of 19 for purposes of using the "skill score" rule.`,
            ],
            comment: `The first option, of removing the "skill score" result was made a rule in the DARK SUN Boxed set, along with removing the penalty for rolling a 1. The suggestion to get a "skill score" on a 19 was made into a hard rule in ***The Will and the Way***.`,
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '31',
            question: `Some of the animals listed on the chart for the Animal Affinity psionic power (***TCPH***, page 50) don't fit the DARK SUN setting. How many sharks, barracuda, or crocodiles are there on Athas? How about an alternate table?`,
            answer: [
                `There are no sharks, barracuda, or crocodiles on Athas. (According to Tim Brown, there never were any on Athas; the planet's flora and fauna are vastly different from what is found on other AD&D game worlds.) Still, there probably were creatures like them on Athas at one time or another, and I don't see any real problem with using the table just as it is. If you want to give this power a true Athasian flavor, get out your ***Wanderer's Journal*** and your ***Monstrous Compendium*** DARK SUN Appendix and make a few substitutions. Here's an unofficial list: rasclinn for barracuda, kank or wild kank soldier for crocodile, athasian sloth for elephant, jozhal for percheron (draft horse), and megapede for shark. I'll stop there and assume the other animals have Athasian equivalents.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '31',
            question: `Since thri-kreen don't sleep, how do they regain PSPs or spells?`,
            answer: [
                `In pretty much the same way other characters do. To regain spells, a thri-kreen must be at rest, as inactive as a sleeping character would be, and must maintain this state for as long as any other spell-caster would have to sleep. Thri-kreen regain PSPs at the rates given in the ***TCPH***, page 14, Table 6. To regain PSPs at the sleeping rate, a thri-kreen must be completely inactive as described above. Note that the psionicist's Rejuvenation proficiency isn't particularly useful to thri-kreen.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '31',
            question: `Since defiler magic is easier to use than preserver magic, can a preserver opt to use it in appropriate circumstances, such as while standing in a sorcerer-king's garden? Since defiler magic is a simpler, cruder form of magic, is alignment the only thing that keeps a preserver from using it?`,
            answer: [
                `Defiler magic is not available to preservers under any circumstances. A preserver learns to craft spells so the energy they require is replaced rather than simply being drained from the land. This element of balance is integral to all a preserver's spells and cannot be deliberately omitted. I suppose a preserver could switch to defiler magic; in such cases, however, the character would have to effectively switch classes so that all subsequent spells would be of the defiler type. How such a switch might be accomplished—if it is possible at all—is entirely up to the DM.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '31',
            question: `The rules describe the preserver and defiler classes in just about every detail except one: spell progression. The rules say that defilers g e t spells more quickly that preservers, but nowhere do the rules give a spell progression table for either class!`,
            answer: [
                `Both classes use the spell progression table for wizards in the ***Players Handbook***, page 30. The rules do not say that defilers get spells faster than preservers, but page 26 of the *Rules Book* does point out that defilers advance through the levels very quickly. A comparison of the defiler experience table from page 27 of the *Rules Book* with the standard wizard experience table (***PH***, page 30), which preservers use, will bear this out.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '31',
            question: `If an Athasian wizard has his spell books destroyed or taken away, can he get new ones?`,
            answer: [
                `Yes. The minimum cost of doing this is listed in the spell books section of the ***DMG*** (page 42). The DM might also assign additional costs and time requirements. Check out the following sections of the ***DMG*** for guidelines: spell research (pages 43-44), scroll research (page 41), and scroll creation (pages 85-87). Note that all sorcerer-kings consider magic treasonous, which makes recreating spell books inside cities pretty dangerous. Being a member of a veiled alliance would be a great boon to a wizard attempting to recreate lost spell books.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '31-32',
            question: `When, exactly, does a half-giant change alignment? The section on half-giants on pages 9-11 of the *Rules Book* says a half-giant must choose an alignment each morning (page 10). The section on half-giants and alignment on page 42 also starts out saying half-giants must choose an alignment each morning, but in the same paragraph it also says a half-giant may change alignment each morning, but change isn't mandatory.`,
            answer: [
                `I'll admit that there's a bit of a semantic trap in the rules governing the shifting alignments of half-giants. While half-giants truly must choose an alignment each morning, they are free to "choose" the same alignment they have been following. A change in alignment is optional and occurs only when the DM and the player agree that the prevailing circumstances make it possible. In other words, a player with a half-giant character should consider what has happened to the character each day and decide if the character's alignment should shift. If, for example, the predominately good party the character has been adventuring with falls into a squabble over water or treasure, the DM and the player might decide it's time to shift the half-giant's alignment toward the chaotic or evil end of the spectrum. Remember, half-giants are inveterate imitators; they follow where their companions and neighbors lead, but their alignments don't shift without reason.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `Exactly how long does a piece of land remain barren after a defiler turns it to ash?`,
            answer: [
                `Nothing will grow in the area for at least one full year, but it usually takes much more time than that, perhaps decades, for the area to fully recover; some areas never recover (*Rules Book*, page 61). Exact recovery time is up to the DM.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `On the experience table (*Rules Book*, page 63), do fighters get 10 XP per level, per hit die, per creature, per battle, or per their own level for opponents defeated? What do thieves get?`,
            answer: [
                `All characters get experience for defeating opponents according to the rules in the ***DMG***, pages 46-47. When a fighter single-handedly defeats an opponent, the DM might decide to award extra experience under the Individual Experience Awards optional rule (***DMG***, page 48). The award for fighters is 10 XP times the defeated opponent's level or hit dice, times the fighter's level. The award for bards is only 5 XP times the defeated opponent's level or hit dice.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '32',
            question: `What is the terrain cost for roads on Athas?`,
            answer: [
                `This depends on the individual roads construction and present condition. I suggest you use the terrain modifier for the prevailing terrain × ½, with a minimum cost of 1. For example, using a road to traverse stony barrens is 1; using a road to cross salt flats also is 1, as the surface on any road on Athas isn't going to be much smoother than a salt flat. Note that you can't get lost while traveling on a road (even if you aren't exactly sure where you're going).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `How many globs of honey will a kank produce each day?`,
            answer: [
                `This is up to the DM, but I recommend that a well-fed, food-producing, domestic kank secrete no more than one glob each day. Note that not all kanks are food producers. The rules don't give ratios, but I suggest that only half of any group of kanks be food producers. Of the remainder, one will be the brood queen and the rest will be soldiers, none of which produce honey. Note also that brooding kanks produce honey for their offspring, and the young kanks will eat a substantial portion of the honey, say 20%-60%, before characters can harvest it. Characters who try to keep the young kanks from the honey are likely to have a fight on their hands, the domestic kank's reputation for docility notwithstanding.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `I am formulating plans to have my spelljamming group touch down on Athas. How would Athasians react to the appearance of a spelljammer? Would "normal" wizards cast preserver or defiler magic?`,
            answer: [
                `As "Sage Advice" pointed out in issue #178, spelljammers cannot reach Athas. Exactly why this is so is unrevealed, but the prevailing theory is that Athas is not located inside a crystal sphere but on an alternate Prime Material plane where spelljamming devices don't work.`,
                `I suspect that wildspacefaring characters would not find Athas a welcoming place at any rate. While common folk might not be any more suspicious of spacefarers than they are of any other strangers, sorcerer-kings are a different matter. Once these tyrants realize what spelljamming is and what it can do, they're going to ruthlessly attack, not giving up until the spacefarers flee the planet or are killed or enslaved. (Of course, such an attack could begin disguised as a friendly overture.) A single spelljamming ship, even at atmospheric speeds, would be an invaluable fighting and exploration platform on Athas. No sorcerer-king would allow one to exist unless it was firmly under his control.`,
                `Since preserver magic uses the same rules as "normal" magic, I think it's safe to assume that a plane-hopping wizard who finds himself on Athas would have preserver spells. I suppose such a wizard could learn the local "shortcuts" and become a defiler, but that's up to the DM.`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `**Re-saging:** I have received several letters about an answer that appeared in issue #175. AD&D® 2nd. Edition game characters gain bonus proficiency slots if they have high intelligence scores, and a reader asked if these bonus slots could be assigned to both weapon and nonweapon proficiencies. I said I believed the extra slots can be assigned only to nonweapon proficiencies.`,
            answer: [
                `A number of readers have correctly pointed out that ***The Complete Fighter's Handbook*** contains a passage that clearly states the extra slots can be assigned to both types of proficiencies (page 58). However, when I answered the question, I assumed the reader who asked it didn't have ***The Complete Fighter's Handbook***. Note that everything in the various Complete Handbooks is strictly optional; generally speaking, I recommend that you do not allow bonus proficiency slots to be used for weapon proficiencies. On the other hand, if you have ***The Complete Fighter's Handbook*** and want to make full use of all the goodies therein, you probably *do* want to let warriors use their bonus slots on weapon proficiencies. I strongly recommend that you limit this ability to warriors only, unless you're prepared to deal with 1st-level wizards who want proficiency in eight weapons (or more than eight if you've got a campaign set in the DARK SUN world).`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '32',
            question: `**Re-saging:** I have also recently received a letter regarding this column in issue #167, in which I flatly said all spells of the Divination school were off-limits to conjurers (wizards specializing in the Conjuration/Summoning school).`,
            answer: [
                `I goofed. The section on spell schools in the ***Player's Handbook*** (page 31, top of the third column) makes it clear that first- through fourth-level Divinations are available to all wizards. This gives conjurers access to such vital spells as ***read magic***.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
    ]
});
DRAGON_MAGAZINES.push({
    issue_number: '183',
    publication_year: '1992',
    publication_month: 'July',
    foreword: `This month, the sage explores the limits of a powerful AD&D® game magical item, takes an in-depth look at magic resistance, and considers a few complaints from a dissatisfied reader.`,
    sage_advice: [
        {
            page_number: '92',
            question: `What exactly does a ***rope of entanglement*** do? Are victims automatically ensnared and rendered helpless until freed or killed? Is an attack roll required? Does the victim get a saving throw? What is the rope's maximum area of effect?`,
            answer: [
                `The current rules seem to leave the exact effects up in the air, as the description in the AD&D 2nd Edition ***Dungeon Master's Guide*** (page 179) does not mention any game effects at all. The AD&D 1st Edition ***DMG*** isn't much more helpful, but it does include the phase "entangle and tie fast" (page 153). It's pretty clear to me that the intent behind this item is to allow the wielder to at least immobilize opponents and probably to restrict their attacks.`,
                `Judging from the description in the 1st Edition ***DMG***, I'm inclined to think that a ***rope of entanglement*** prevents its victims from moving normally (i.e., no walking, running, jumping, burrowing, or flying with wings) but does not prevent magical movement such as ***levitation*** or ***fly*** spells. Humans and demihumans who use their limbs to swim are immobilized and will sink if ensnared in the rope; however, fish and similar creatures probably still could swim through open water at half or two-thirds speed, as their streamlined bodies and tiny fins really can't be effectively tangled. On the other hand, even a fish or ***levitating*** creature can be held in place if there are weeds or other suitable objects the rope can grab along with the victim. For example, a wizard flying through a forest might be immobilized when the rope wraps him up along with the branch- es of an oak tree.`,
                `For purposes of game balance, I suggest that a creature entwined in a ***rope of entanglement*** be allowed to make melee attacks at a -4 penalty, but only against the rope or opponents who are directly adjacent to the entwined victim. Missile attacks are generally not possible while entwined, but the DM might allow them under special circumstances; a manticore's tail spikes might still be effective, for example, as might a giant porcupine's quills. An entwined victim might manage to fire a loaded and cocked crossbow that was already pointed at a target when the rope struck. Such attacks also should suffer the same -4 penalty to attack rolls that melee attacks get.`,
                `In any case, no attack rolls are required to use this item. The wielder can direct the rope at any opponent within range (20' horizontally and 10' vertically). The targets are automatically entwined in the rope, with no saving throw allowed, provided they fit within the size limits specified in the item's description. Common sense suggests that the rope's "downward' range (the distance within which it can be used if it is dropped from a height) could be more than 10', but probably not more than 20'.`,
                `Common sense also suggests that the rope cannot affect creatures in a total area more than about 40' long by 5' deep (this is the distance a line of eight man-sized creatures will occupy if they line up shoulder-to-shoulder with enough space between to allow for normal melee). In other words, the rope's maximum area of effect is 200 square feet, and its maximum "length of effect" 40'. Note that I'm assuming a ***rope of entanglement*** is 50' long, as this is the "standard" length for a rope in the AD&D game and it seems to jive with the rope's basic "capacity" of eight man-sized creatures (the "missing" 10' of the rope's length is used up as it coils around its victims).`
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92+94',
            question: `Please clarify the effects of magic resistance in the following situations: 1) Someone casts a ***wall of stone*** spell so that it falls on top of the magic-resistant creature; 2) A drow (an elven race that has magic resistance and suffers various penalties in bright light) is enveloped in a ***light*** or ***continual light*** spell; and 3) A magic-resistant marine creature that breathes only water finds itself within an ***airy water*** spell.`,
            answer: [
                `"Sage Advice" discussed magic resistance in issue #175 (page 76), but it seems to be time to study the subject in more detail. Most of these answers are pretty straightforward; a little common sense and a careful rereading of the magic-resistance rules (***PH***, pages 102-103; ***DMG***, page 66-67) should put these matters to rest. When adjudicating the effects, if any, of magic resistance, the DM has to consider two factors. First, what type of magic is involved? The rules make four distinctions: individually targeted spells, area-effect spells, in-place spells, and permanent spells. Second, does the "incoming" magic directly affect the magic-resistant creature, or is the effect on the creature merely a consequence of the magic being there? Unfortunately, there are no hard and fast rules (beyond what's already printed in the books) to decide which conditions apply. Here's my reasoning:`,
                `1) A ***wall of stone*** is a permanent magical effect (its duration is so listed in the spell description). Furthermore, magical "wall" spells are evocations, which directly bring forth or create their effects. When the ***wall of stone*** falls on top of a magic-resistant creature, or even if the creature tries to walk through a stationary wall, the magical effect is acting directly on the creature. Magic resistance applies; if the magic-resistance roll succeeds, the creature passes harmlessly through the wall. Since the ***wall of stone*** is permanent, there is no effect on it; that is, the wall is not dispelled or pierced with a hole that other creatures can pass through.`,
                `2) ***Light*** and ***continual light*** spells are a little harder to figure out. Both are in-place effects, operating continuously in a particular place or on a particular item. However, ***continual light*** also is permanent, and both spells can be cast directly against a creature to blind it. When used to blind a creature, either of these spells is treated as an individually targeted effect, and magic-resistance applies. Since the caster is targeting a single creature only when trying to blind an opponent with either spell, the effect is completely negated if the magic-resistance roll succeeds (as it is for any area-effect spell targeted solely at the magic-resistant creature).`,
                `However, an entirely different set of circumstances prevails when a magic-resistant creature moves into or otherwise finds itself inside either spells area of effect. Both spells are alterations, magic that works a change on a creature, area, or object, and this change produces the spells effects. In the case of ***light*** and ***continual light***, these spells change an area or object so that it emits light. One explanation of how this works is that the atoms in the area of effect are excited so that they emit visible light. The light has a central focus (so the light can be hidden by an opaque container), but it is the target object or area that emits the light, not the spell. Since the magic affects the area and not the creature, magic resistance does not apply (the light is a consequence of the spell). The same holds true for the reverse of these spells; a creature might be very badly affected by ***darkness*** or ***continual darkness***, but, since the magic doesn't directly affect the creature, magic resistance is irrelevant.`,
                `3. ***Airy water*** also is an in-place spell, but it is also an alteration that affects an area, not the creatures within the area.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '92+96',
            question: [
                `As anything published by TSR, Inc. is considered by a great many gamers to be canon, your column is more than just a source of advice. In the past, you have always known what you were talking about, and the written rules supported what appeared in "Sage Advice." However, from the time you ruled on which THAC0 a fighter/thief uses when backstabbing, to the effects of a ***cloak of displacement*** on ***magic missiles***, to the abilities of the tarrasque ***polymorphed*** into a bunny, you have not followed the rules. In the past, you have mentioned that other people sometimes help you write the rulings, but your name is on the column, so I'll assume you are responsible.`,
                `We have long enjoyed your column and hope you can tell us why these three—and possibly other—errors occurred.`
            ],
            answer: [
                `First, I (Skip Williams) do write "Sage Advice." Of course, I get lots of help, but ultimately I put fingers to keyboard and am responsible for what appears here.`,
                `Regarding "Sage Advice" and what it's really all about: relax. This column is not the tip of an insidious conspiracy to change the face of the AD&D game. It's a place where a harried DM or player can go to get advice on how to muddle through the tough spots so the game can go on. If getting everybody to agree on what rules to use is a tough situation for you, "Sage Advice" is as good a court of final appeal as you're likely to find. But I'm just a regular guy doing a job here, not the keeper of the canon. In fact, the closest thing to canon in the AD&D game is David "Zeb" Cooks simple statement: "If you don't know the answer, make it up."`,
                `I think the rules are vital in making campaigns believable and playable, which is what they must be if the game is to be enjoyable. Fun is what gaming is all about. When writing my answers, I try to avoid making simple rules interpretations and instead try to explain how I arrive at the answers. I hope longtime readers of "Sage Advice" are using the information presented here to figure things out for themselves and keep their games running smoothly. The next time you reach for this column to settle an argument, first try to follow the advice I gave regarding rules disputes in issue #181, then look at the column. You'll have a much better time playing the game if you develop your own feel for the way it works.`,
            ],
            attributes: [ATTRIBUTE_2E],
        },
        {
            page_number: '92+96',
            question: `In issue #169, you said a fighter/thief must use his thief
            THAC0 and cannot get specialization bonuses when backstabbing. But the ***PH***, page 45 says: "A multi-classed warrior can use all of his abilities without restriction. The warrior abilities form the base for other character classes." Page 45 also says multiclassed characters can combine class abilities, in direct contradiction to what "Sage Advice" said in issue #169. Did you make a brainographical error (to quote game designer Aaron Allston) or are you playing the "Skip's AD&D" game, in which DM interpretations override rules? If so, my friends and I will ignore your column in the future and ask DRAGON Magazine to run a disclaimer stating that your column does not follow the books.`,
            answer: [
                `Regarding "combining" multi-classed abilities: The word "combine," as used on page 45 of the ***PH***, is meant to convey the fact that the character can freely use his abilities during a single encounter or adventure without penalty, as opposed to dual-classed characters, who can suffer experience penalties if they fall back on their old class abilities too soon. It is not meant to convey that a multi-classed character can use abilities from two or more classes simultaneously.`,
                `Regarding fighter/thief backstabs: The TSR house ruling—not the "Skip" ruling—on this matter is that the character must use his thief THAC0. You have quoted page 45 accurately, but the rules contradict themselves here. Two of a fighter's most important "abilities" are unrestricted weapon and armor use, and these are severely curtailed in several multi-classed combinations: fighter/wizards are prohibited from wearing most metal armor, fighter/clerics can't use edged weapons, and fighter/thieves can't wear metal armor without reductions to thief abilities. This is hardly unrestricted use of fighter abilities. The TSR staff's concern here is for game balance. The thief's backstab ability can do pretty darn hefty damage, and generally it is best for the campaign if a backstab attempt fails once in awhile.`,
                `Still, the letter of the rules supports your view. So does game logic; if thieves carefully study anatomy and learn to place their attacks so as to inflict maximum damage, it stands to reason that fighter abilities might allow them to hit an opponent's "soft spots" more easily. This particular conundrum won't be officially cleared up until that far-off day when an AD&D 3rd Edition comes out. Until then, I suggest you either follow the advice given in issue #169 or allow fighter/thieves to use their fighter THAC0 when backstabbing, but only with the standard +2 rear attack bonus. For purposes of game balance, the +4 bonus and fighter THAC0 is just too tough a combination for the campaign's bad-guy NPCs to withstand. From the standpoint of game logic, the training in precise blows a thief learns while perfecting the backstab (a highly favorable situation for the attacker) overlaps the fighter's generally superior training in the use of weapons in all situations.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_CLASS],
        },
        {
            page_number: '94+96',
            question: `In issue #179, you said that ***magic missile*** was a spell attack, and that the only effect a ***cloak of displacement*** had on spell attacks is a saving throw bonus. Since ***magic missile*** has no save, you said, there is no effect. Well, the spell description says that the spell produces "missiles" and that the target must be seen or detected to be hit. A displaced creature is really somewhere other than where a viewer thinks it is. When a spell caster targets a displaced creature, he's really just aiming at empty air. The creature wearing the cloak is actually unseen, as the cloak creates a sort of ***mirror image*** that is some distance from the wearer's actual location. Since ***magic missile*** doesn't work on inanimate objects, it is wasted in this case.`,
            answer: [
                `Regarding ***cloaks of displacement*** and ***magic missiles***: I stand by my answer in issue #179. A ***magic missile*** is a spell attack (the number of times the word "missile" appears in the spell description notwithstanding) that always hits, *displaced* target or no. A *displaced* creature is neither invisible nor replaced by an illusory double. The cloak distorts other creatures' visual perceptions of the wearer's location. A wizard may very well be "aiming at empty air" when casting ***magic missiles*** at a *displaced* creature, but the spell compensates for the error and hits anyway. The spell description does require that the caster see the target, and a *displaced* creature is still visible, even if the viewer isn't sure exactly where the creature is.`,
                `The situation is analogous to what happens when you look at an object underwater from above the surface. The physical refraction (bending) of light as it passes from air to water makes the object appear to be in a different place. In the case of a displaced creature, the margin of error is 1'-2'. In either case, the viewer sees the object. The visual distortion caused by a ***cloak of displacement*** does not make the cloaks wearer immune to spells. For example, ***charm person*** and ***charm monster*** spells also cannot affect objects, but when cast at a *displaced* creature these spells don't dissipate into "empty air." The *displaced* target gets a +2 saving-throw bonus but still is vulnerable to the spell cast at him.`,
                `As an aside, a colleague of mine at TSR also considered my reply on this question in issue #179, and his comment was that I was being too generous when I suggested that a ***cloak of displacement*** might grant a save against ***magic missiles***. In his view, a ***cloak of displacement*** has no effect on ***magic missiles*** at all. TSR's Jon Pickens did point out, however, that the cloaks saving-throw bonus would be cumulative with a ***scarab of protection***, which does grant a save vs. spells such as ***magic missile***, which normally allow no save.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
        {
            page_number: '94+96',
            question: `In issue #180, you said *polymorphed* creatures keep their hit points, natural armor class, and possibly other purely physical abilities. This directly contradicts the ***polymorph other*** spell description, which clearly states that the creature gains the natural armor class and "purely physical" abilities of the assumed form. You also suggest that the tarrasque could keep the sharpness ability of its bite. While this is a magical ability, a bunny's skeletal structure is hardly the same as that of the *un-polymorphed* tarrasque. In short, the tarrasque would be a 300-hp bunny with the saving throws of a 70-HD monster, and that's all.`,
            answer: [
                `Regarding *polymorphing* the tarrasque into a bunny: The victim of a ***polymorph other*** spell is stuck with the natural armor class of the new form; I goofed on this one. Nevertheless, the tarrasque is legendarily tough and keeps its armor class even when *polymorphed* into a bunny, amoeba, or anything else that doesn't have an armor class better than -3. The point I was trying to make in issue #180 is that the tarrasque is a near-deity-class creature that is all but invulnerable in any form. Note that regeneration is not dependent on a creature's outer form and *any* naturally regenerating creature—whether a tarrasque, troll, vampire, or whatever—still regenerates when *polymorphed*. Other forms of the tarrasque's special defenses-including immunity to heat and fire, and returning to life unless reduced to -30 hp and ***wished*** dead, remain when it is in bunny form. However, I forgot to mention in issue #180 that the tarrasque's ability to reflect beams and rays specifically depends on the creature's carapace, and this ability disappears if the creature is in "bunny form."`,
                `Regarding the tarrasque's ***teeth of sharpness***: There are two things you obviously haven't seen: the size and sharpness of a large rabbit's front incisors, which can do nasty things to errant fingers, and the movie *Monty Python and the Holy Grail*, in which a vorpal bunny wreaks havoc on King Arthur and his knights. The movie isn't part of the game, but I couldn't help thinking of the vorpal bunny scene when I was writing the column. You have a good point in that bunny teeth really aren't the limb-severing type. Still, the tarrasque is a power unto itself. I encourage DMs to ride herd on any group of PCs foolish enough to tackle the tarrasque, and limb-severing tarrasque/bunny bites are fine with me so long as they are fine with the DM.`,
            ],
            attributes: [ATTRIBUTE_2E,ATTRIBUTE_SPELL],
        },
    ]
});

module.exports = DRAGON_MAGAZINES;