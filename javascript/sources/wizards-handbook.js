const {SOURCE, GAME_SYSTEM ,ATTRIBUTE} = require('../constants')

const THE_COMPLETE_WIZARDS_HANDBOOK = {
    publication_year: '1990',
    publication_month: 'June',
    publication_print: '10th printing, March 1996',
    title: "The Complete Wizard’s Handbook",
    shortTitle: "Wizards Handbook",
    id: 'wizards-handbook',
    sourceAttribute: SOURCE.WIZARDS_HANDBOOK,
    chapters: [],
};
THE_COMPLETE_WIZARDS_HANDBOOK.chapters.push({
    name: 'Chapter',
    number: '7',
    heading: 'Advanced Procedures',
    sections: [
        {
            heading: 'Spell Commentary',
            foreword: [
                `Part of the fun of playing a wizard is developing new applications for spells through experimentation and improvisation. However, the creative use of many spells may not be immediately obvious. If a wizard always uses his spells in the same old ways, he is not taking full advantage of them.`,
                `The following list features some unusual applications for a variety of spells from all levels. Players can also use these suggestions for inspiration when inventing new uses for other spells in their arsenals. Additionally, clarifications of several of the game's more esoteric spells are provided, which can be used by the DM to help adjudicate their effects.`
            ],
            sections: [
                {
                    id: '1st-level',
                    heading: '1st Level',
                    entries: [
                        {
                            page_number: '83',
                            entry: [
                                `**Cantrip**`,
                                `The simple effects created by cantrips have unlimited potential in the hands of a clever caster. Some examples:`,
                                `• A wizard is resting in an inn when he is awakened by the sound of a burglar entering through the window. The wizard casts *cantrip* to create wracking moans and cries emanating from inside a closet. Believing the room to be haunted, the terrified burglar may flee.`,
                                `• A wizard is searching a dark castle when he discovers a dusty book lying on a desk. He remembers that similar books were trapped to explode in a ball of fire when touched; such books were marked with a skull on the front cover. The wizard casts *cantrip*, creating a small breeze to blow the dust away from the book, revealing the skull on the cover.`,
                                `• A wizard traveling through a jungle is accosted by a band of cannibals. The wizard casts *cantrip* to create a puff of colored smoke. The intimidated cannibals, suspecting that the wizard wields powerful magic, decide to leave him alone.`,
                                `• The companion of a wizard is about to engage a dangerous opponent in a duel. The wizard casts *cantrip* to cause a slight itch on the opponent's face. The opponent is distracted, giving the wizard's companion a momentary advantage.`,
                                `• A menacing warrior stands before the party. The wizard casts *cantrip* to create a banana peel in front of the warrior. The warrior takes one step and falls on his face.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '83',
                            entry: [
                                `**Enlarge**`,
                                `Much is made in the spell description in the *Player's Handbook* of changing the size of creatures, but wizards often overlook the usefulness of *enlarge* to change the size of objects. For instance, if the party is being pursued through a narrow passage or hallway, casting *enlarge* on a stone or other object behind the party can effectively block the passage and prevent the enemy's advancement. Similarly, if the party is faced with a locked or stuck door, the reverse spell, *reduce*, might be able to shrink the door just enough to allow the party to get through.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '83',
                            entry: [
                                `**Mending**`,
                                `In addition to the uses for *mending* listed in the spell description, this spell can also be used to repair a leaky boat, a torn document, a broken wagon axle, or a cut rope (but it won't link the ends of two different ropes to make a single rope).`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },

                    ]
                },
                {
                    id: '2nd-level',
                    heading: '2nd Level',
                    entries: [
                        {
                            page_number: '83',
                            entry: [
                                `**Invisibility**`,
                                `Wizards should keep in mind that *invisibility* is an illusion, a condition of artificial reality—it's not an enchantment that causes the caster (or creature of the caster's choice) to literally disappear. As such, *invisibility* is subject to all of the advantages and limitations of illusionary magic. Following are the most pertinent points:`,
                                `• The invisible character can always see himself; in effect, he automatically disbelieves the illusion.`,
                                `• The caster cannot tell with certainty which observers have successfully disbelieved his illusion of *invisibility*; he can only be sure by observing their reactions.`,
                                `• All objects on the *invisible* subject's person are also *invisible*. However, the DM might wish to impose limitations, since it might not make sense for a 30-foot pole carried by an *invisible* character to also be entirely *invisible*. The DM might assume, for instance, that the illusion extends to a 1-foot or 2-foot radius around the affected subject; hence, all objects in contact with the subject that are within this area are also *invisible*. If such a limitation is imposed, then an object extending beyond this range (such as the 30-foot pole) is entirely visible; partially *invisible* objects aren't allowed.`,
                                `• Not every creature with fewer than 10 Hit Dice is excluded from noticing an *invisible* character. Creatures with excellent hearing or those with a sensitive sense of smell have a chance of detecting an *invisible* character. The DM should take such heightened senses into account when determining which creatures are allowed saving throws.`,
                                `• Opponents do not automatically get a chance to detect the presence of an *invisible* creature. They must first have reason to believe an *invisible* creature is among them. For instance, a creature might have abruptly disappeared, or the opponents might hear a mysterious sound or notice footprints in soft ground. If one opponent successfully sees an *invisible* creature, he can alert his companions to the creature's presence, at which time they are allowed saving throws to detect the creatures if they haven't made such throws already. (For more about the limits of illusions, see the "More About Adjudicating Illusions" section that follows.)`
                            ],
                            comment: [
                                `The first paragraph about the character being able to see himself is wrong as stated directly in Sage Advice #206.`,
                                `The fourth paragraph about creatures with fewer than 10 hit dice, matches the *DMG* description of a wolf using its superior sense of smell and hearing to notice a *invisible* character.`,
                                `The fifth paragraph about opponents not automatically getting a chance to detect also matches the *DMG*.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL, ATTRIBUTE.INVISIBILITY],
                        },
                        {
                            page_number: '83-84',
                            entry: [
                                `**Misdirection**`,
                                `This spell can be used to misdirect the results of non-weapon proficiencies that impart knowledge. Examples of non-weapon proficiencies affected by *misdirection* include Ancient History, Animal Lore, Appraising, Astrology, Direction Sense, and Herbalism. If the subject of *misdirection* fails his saving throw, he receives incorrect information from the use of his proficiency. For instance, *misdirected* Animal Lore will convince the subject that a vicious creature is harmless, while *misdirected* Appraising will convince him that a valuable gem is worthless.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `**Web**`,
                                `This spell can be used as a makeshift net to prevent damage to falling characters, assuming there are suitable projections or surfaces available to anchor the *web*. A *web* of at least 5 feet of thickness protects a falling character from damage regardless of the height from which he falls.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                    ]
                },
                {
                    id: '3rd-level',
                    heading: '3rd Level',
                    entries: [
                        {
                            page_number: '84',
                            entry: [
                                `**Hold Person**`,
                                `The name of this spell should not be taken literally. *Hold person* makes its victims rigid—if they're falling, for instance, it cannot "freeze" them in mid-fall and suspend them in the air. (However, see the *hold monster* entry below.)`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `**Item**`,
                                `Use this spell on a weapon if the party is on the verge of being captured. In its cloth-like state, the shrunken weapon can be concealed up the caster's sleeve or it can be tucked underneath his belt or in his trousers. The wizard can later use the enlarged weapon to surprise his captors or, if the wizard's hands are bound, he may be able to use the weapon to cut himself free. Similarly, the spell can be used to conceal a grappling hook or a thief's pick. (The wizard should be careful where he hides a shrunken weapon; if a shrunken long sword is tucked inside his pants and is enlarged before it is removed, the result could be extremely painful.)`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `**Melf's Minute Meteors**`,
                                `One of the most frequently overlooked functions of *Melf's minute meteors* (or any flame-producing spell, such as *fireball*) is its ability to ignite combustible materials. In the right situations, this ability is capable of producing a startling amount of damage, rivaling and often exceeding the damage caused by spells of much higher levels.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `**Tongues**`,
                                `This spell can be quite useful to the wizard for discreetly communicating with other characters, but only if he understands exactly how it works. *Tongues* acts as a selective translator, not as a universal translator—that is, not everyone in the spell's area of effect understands the translated language.`,
                                `For instance, imagine that a wizard can speak only common. All other members of his party also speak only common. The party encounters a group of two dwarves and one gnome; the dwarves speak only dwarvish, the gnome speaks only gnomish. The wizard casts *tongues* and speaks to the gnome; the gnome automatically understands what the wizard says, but the dwarves and the other party members do not—as far as they can tell, the wizard is speaking gnomish. Assuming the wizard is of sufficiently high level (he can speak one additional tongue for every three levels of experience) and the spell's duration has not yet expired, he can also address the dwarves. Both dwarves will understand the wizard, but the gnome and the rest of the party will not.`,
                                `If a dwarf and a gnome begin chattering at the wizard at the same time, and the wizard is of sufficiently high level and the spell's duration hasn't expired, the wizard can understand them both. The other party members, however, will hear nothing but babble.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                    ]
                },
                {
                    id: '4th-level',
                    heading: '4th Level',
                    entries: [
                        {
                            page_number: '84',
                            entry: [
                                `**Dig**`,
                                `This is a very helpful spell when dealing with large, uncontrollable fires that are spreading in a field or other open area. To stop the advance of a spreading fire, *dig* can be used to create a firebreak—a ditch of broken soil devoid of combustible material. A fire reaching a firebreak will stop advancing, eventually burning itself out.`,
                                `If the fire is too large to stop, the wizard can protect himself and his companions by using *dig* to surround themselves with a firebreak and remain inside it while the fire rages around them. The wizard must take care to make the firebreak large enough to protect himself and his companions from heat damage, which typically affects those within 5 feet of the flames.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '84',
                            entry: [
                                `**Fumble**`,
                                `This spell can cause a lot of grief to opponents in precarious positions. *Fumble* cast on a character clinging to the side of a cliff might cause him to fall. If cast on a character moving hand over hand across a rope bridge, the character might lose his grip and fall. If such a character fails his saving throw, he plunges from the cliff or releases the rope. If he succeeds in his saving throw, he hesitates, but doesn't fall.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '84-85',
                            entry: [
                                `**Otiluke's Resilient Sphere**`,
                                `The *sphere* is an intact bubble filled with air. Therefore, a creature or object enclosed in the *sphere* will bob like a cork on the surface of an ocean or other body of water.`,
                                `If the *sphere* contains more weight than air, the *sphere* will gradually sink, but it could be pushed or carried by water-breathing creatures with sufficient strength.`,
                                `If a water-breathing character wants to explore a dark, underwater cavern, the sphere could be cast around a burning fire. The protected fire could then be carried underwater and would continue to burn until the air supply in the *sphere* was exhausted. (The carrier should take precautions to prevent being burned—in most cases, heavy gloves would probably do the trick).`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                    ]
                },
                {
                    id: '5th-level',
                    heading: '5th Level',
                    entries: [
                        {
                            page_number: '85',
                            entry: [
                                `**Hold Monster**`,
                                `Since this spell immobilizes victims and prevents them from moving under their own power, it is a very effective way to bring down flying creatures. *Hold monster* cast on a creature hovering overhead will not only cause it to fall to the ground, it also might suffer a significant amount of damage when it hits (1d6 hit points of damage per every 10 feet fallen).`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                        {
                            page_number: '85',
                            entry: [
                                `**Telekinesis**`,
                                `This spell can be used to scoop up slimes, jellies, and other semiliquid creatures in jugs or similar containers. If the containers are sealed, *telekinesis* can be used to position the containers over an opponent's head, then tipped to dump their contents. Such containers could also be filled with poison, acid, or other damaging substances.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                    ]
                },
                {
                    id: '7th-level',
                    heading: '7th Level',
                    entries: [
                        {
                            page_number: '85',
                            entry: [
                                `**Limited Wish**`,
                                `As with *wish* (see the discussion below), the DM should decide the limitations of *limited wish* before his wizards have an opportunity to use it, preferably before the campaign begins. Here are some suggestions for what a *limited wish* can accomplish. The DM is free to alter these suggestions as he sees fit.`,
                                `• A *limited wish* can heal damage for the caster or any single character of the caster's choice. A good range is 20-35 hit points (5d4 + 15) of healing. If a *limited wish* is used to heal damage in this way, it cannot be used to restore life; that is, it cannot affect any creature who has been reduced to 0 hit points.`,
                                `• A *limited wish* can temporarily restore life to any creature or person who was reduced to 0 hit points or less within the previous 24 hours. The *limited wish* restores the subject to exactly 1 hit point. Success is not automatic; the subject is required to make a resurrection survival check. However, the effect lasts for only a limited time (1-4 hours is a good range). At the end of this time, the creature reverts to the number of hit points he had before the *limited wish* was cast (0 hit points or less).`,
                                `• A *limited wish* can inflict damage on any single character. A good range is 20-40 (5d4 + 15) hit points of damage. The victim can save vs. spell for half damage.`,
                                `• A *limited wish* can duplicate the effects of any spell of 7th-level of less.`,
                                `• A *limited wish* can change the outcome of any action the wizard took within the past 24 hours, as long as the change is reasonably minor. For instance, the wizard could *wish* to search the body of an opponent he defeated earlier that day, but he could not wish to single-handedly have fought and defeated an entire army.`,
                                `All of the general restrictions that apply to *wish* (see below) also apply to *limited wish*. The suggestions regarding the selection of appropriate durations, casting times, and areas of effect also apply.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                    ]
                },
                {
                    id: '8th-level',
                    heading: '8th Level',
                    entries: [
                        {
                            page_number: '85',
                            entry: [
                                `**Sink**`,
                                `This spell is a terrific way to help a character who is on the verge of falling off the edge of a cliff or losing his grip when hanging from the edge of a building. While the subject clings to the cliff, the wizard casts *sink*. If the spell is successfully cast, the subject becomes stuck to the cliff and won't fall. However, the spell expires in four turns, at which time the subject risks falling.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                    ]
                },
                {
                    id: '9th-level',
                    heading: '9th Level',
                    entries: [
                        {
                            page_number: '85-86',
                            entry: [
                                `**Wish**`,
                                `Since it can theoretically have any effect, no spell is more difficult for the DM to adjudicate than *wish*. The DM can save himself a lot of headaches if he decides the limits of *wish* before his campaign begins.`,
                                `The DM is not obligated to discuss the ramifications of *wishes* with his players before a campaign begins. In fairness, however, he should be willing to give his players a general idea of his approach. While it is impossible to anticipate every conceivable use of a *wish*, there are a few key areas the DM should consider:`,
                                `• How far can a *wish* move a character from one place to another? How many characters or creatures can be affected? Must the conjurer have firsthand knowledge of the destination?`,
                                `• What types of items can a *wish* create? How much treasure? Are such creations permanent?`,
                                `• How many creatures can a single *wish* bring back to life?`,
                                `• How many creatures can a single *wish* destroy? Could a *wish* automatically destroy, for instance, a 20th-level wizard? How about a dragon? Are there alternatives to eliminating creatures other than *wishing* them dead?`,
                                `Following are some guidelines for what *wishes* can accomplish. As always, the DM is free to alter these suggestions in any way he sees fit. Suggestions noted with an asterisk ( &ast; ) typically require a penalty for the caster. The nature of the penalty is up to the DM; possibilities include 2d4 days of bed rest, a temporary loss of 1-4 Strength points, a permanent loss of 1 Constitution point, damage of 2d10 hit points, or any combination of these penalties.`,
                                ``,
                                `• A *wish* can create a random amount of treasure for the caster. A good range is 1,000 - 10,000 gp (1d10 x 1,000). The treasure can include gold pieces, jewelry, gems, items, or any combination desired by the caster within the randomly determined monetary value. Magical items are excluded (they require a separate *wish*).`,
                                `• A *wish* can heal damage for the caster, his companions, or any characters or creatures of the caster's choice. A good range is 45-70 hit points (5d6 + 40) healed, These recovered hit points can be spread among as many characters as the caster desires; for instance, if a *wish* heals 50 hit points, the caster could heal 20 hit points of his own damage and heal 10 hit points for three of his companions. If a *wish* is used to heal damage in this way, it cannot be used to restore life; that is, it cannot affect any creature who has been reduced to 0 hit points.`,
                                `• &ast; A *wish* can restore life to any creature who was reduced to 0 hit points or less within the previous 24 hours. The *wish* restores the subject to exactly 1 hit point. Success is not automatic; the subject is required to make a resurrection survival check.`,
                                `• &ast; A *wish* can destroy any single creature of 10 HD or less, or any character of 10th level or less within the caster's visual range. The affected creature or character is allowed a saving throw vs. death magic; if the check is successful, the creature is unaffected. (Be careful with this—in many cases, it is a better idea to advance the spellcaster to a future time period in which the target creature no longer exists, as described on page 197 of the *Player's Handbook*).`,
                                `• A *wish* can *teleport without error* the caster and up to a dozen companions to any location. The caster must have been to the location previously. The location can be in any plane of existence.`,
                                `• &ast; A *wish* can permanently add one point to any ability score of the caster or any person of the caster's choice, as long as the score is not raised above 16. It takes 10 *wishes* to permanently raise any ability score each point beyond 16. (For instance, it takes 20 *wishes* to raise a character's Strength from 16 to 18.)`,
                                `• A *wish* can temporarily raise an ability to 18 for 1-6 hours.`,
                                `• A *wish* can duplicate the effects of any other spell.`,
                                ``,
                                `What can't a *wish* do? Aside from the restrictions above, a *wish* should never grant experience points or extra levels to a character. Nor should *wishes* be able to duplicate artifacts or create extremely potent magical items (a *potion of invisibility* might be acceptable, but a *sword +4* might not).`,
                                `The DM retains the right to disallow any *wish* he believes is too potent. He can also bestow an interpretation of the *wish* that follows the literal instructions of the wizard, and not the wizard's intended meaning (greed and gross manipulation of the rules should not be rewarded).`,
                                `Examples:`,
                                `• If the wizard *wishes* for an entire castle of his own, the DM might have the castle appear in mid-air, then crash to the ground in a heap of rubble.`,
                                `• If the wizard *wishes* "to never again suffer damage from bladed weapons," the DM might turn him into a stone statue.`,
                                `• If the wizard *wishes* for a dragon to vanish, the dragon might pop out of sight, then abruptly reappear in another location, perhaps a few yards from the dragon's original position.`,
                                `• If the wizard *wishes* for a fortune in gold, the DM might teleport this fortune from a king's private treasure vault. The king will then send his best men to arrest the thieving wizard.`,
                                ``,
                                `The DM is responsible for determining the components, duration, casting time, and area of effect each time a *wish* is to be cast. The DM should first determine what effect the wizard intends to achieve with his *wish*, then decide the components, casting time, and so forth, basing his decisions on his limitations for *wishes* in his campaign. The elements should be logical and reasonable. Here are some guidelines:`,
                                `**Components:** *Wishes* have only verbal components. Keep them simple. A short, spoken phrase is usually sufficient.`,
                                `**Duration:** In most cases, the effects of a *wish* will be permanent. The DM should decide in advance if there are any exceptions.`,
                                `**Casting Time:** If the *wish* mimics the function of another spell, use that spell's casting time as a guideline, perhaps making it a little longer if the *wish* effect is significantly more powerful than the mimicked spell. For instance, if a *wish* is used to teleport a party (as described above), note that the *teleport without error* spell has a casting time of 1. Since the *wish* has a more powerful effect, a casting time of 4 or 5 for a teleporting *wish* is appropriate. When in doubt, use the casting times for other 9th-level spells as guidelines, or use a casting time of 1 round.`,
                                `**Area of Effect:** In most cases, common sense will determine the area of effect. For instance, if a *wish* is to be used to heal damage, the affected persons should be within sight of the caster. The DM can be reasonably generous with areas of effect. If the caster *wishes* for 5,000 gp to be deposited in a chest 1,000 miles away, that is within reason.`,
                                `As an example of how all of these elements might be determined, imagine that the wizard *wishes* to teleport himself and his party to the wizard's home town. The DM determines the elements of the spell as follows:`,
                                `Verbal Component: Speak the name of the desired location.`,
                                `Duration: Instantaneous.`,
                                `Casting Time: 1 round.`,
                                `Area of Effect: All characters within a 20-yard radius of the caster.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.SPELL],
                        },
                    ]
                }
            ],
        }
    ],
});

module.exports = THE_COMPLETE_WIZARDS_HANDBOOK;