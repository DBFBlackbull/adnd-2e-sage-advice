const {SOURCE, GAME_SYSTEM ,ATTRIBUTE} = require('../constants')

const THE_WILL_AND_THE_WAY = {
    publication_year: '1994',
    publication_month: 'June',
    publication_print: '',
    title: "The Will and the Way",
    shortTitle: "Will and the Way",
    id: 'will-and-the-way',
    sourceAttribute: SOURCE.THE_WILL_AND_THE_WAY,
    chapters: [],
};
THE_WILL_AND_THE_WAY.chapters.push({
    name: 'Chapter',
    number: 'Six',
    heading: 'The Disciplines',
    sections: [
        {
            id: 'clairsentience',
            heading: 'Clairsentience',
            sections: [
                {
                    id: 'clairsentient-powers',
                    heading: 'Clairsentient Powers',
                    entries: [
                        {
                            page_number: '40',
                            entry: [
                                `It is important to remember that clairaudience and clairvoyance can only be used on areas the psionicist has knowledge of. He cannot target his power on "wherever Uldan the mul is at this moment," or on "the sorcerer-king's throne room in Urik" if he has never been there.`,
                                `Places the psionicist knows include any place he has ever been to himself, any place within his sight now, or any place he can specify. He could use clairvoyance to peek behind a sand dune, since he can tell from where he is that the sand dune has another side. He could also scan a point "10 miles directly west" or "two miles north of the central square of Urik" if he had ever been to the square. Standing outside a tower, he can make a reasonable guess that there is a room or passageway behind any windows he can see, but he can't know the layout of the tower and use his powers against interior rooms.`,
                                `However, a psionicist with a lot of PSPs could "visit" an area with clairvoyance. Once inside the tower window with clairvoyance, he can see a small room with a door. Now he may look behind the door, since he knows it exists.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '40',
                            entry: [
                                `The devotions of feel sound and feel light are of limited usefulness, but see sound negates darkness-based combat penalties for the psionicist, as long as his opponents are making any normal amount of noise. (Incorporeal opponents such as spectres or ghosts don't make noise when they attack!)`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS, ATTRIBUTE.BLINDNESS]
                        },
                    ]
                }
            ]
        },
        {
            id: 'psychokinesis',
            heading: 'Psychokinesis',
            sections: [
                {
                    id: 'psychokinetic-powers',
                    heading: 'Psychokinetic Powers',
                    entries: [
                        {
                            page_number: '42',
                            entry: [
                                `**Special Note:** Two psionic powers appearing in Dragon Kings were placed in the wrong disciplines. Teleport object is not a Psychokinetic power; it's a Psychoportive devotion with teleport as a prerequisite. Return flight is not a Psychometabolic devotion; it belongs in the discipline of Psychokinesis.`,
                                `If existing characters have selected these powers, the DM can either ignore this retraction and allow the character to continue play as is or he may allow the psionicist to discard teleport object or return flight and select another power.`,
                                `You may own a copy of *The Complete Psionics Handbook* that has several important pieces of errata in it. The following Psychokinetic devotions do not require telekinesis as a prerequisite: animate shadow, control light, control sound, molecular agitation, and soften.`,
                                `Other difficult powers include the following.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '42',
                            entry: [
                                `**Detonate:** If used against an opponent's weapons or armor, it is reasonable to assign combat penalties to partially destroyed equipment. A -1 to attack rolls or Armor Class for each 10% destroyed is appropriate. If the item targeted by the psionicist is magical, it gains a saving throw versus disintegration to resist the detonation effect.`,
                                `Monsters composed of magically animated material, such as golems, are allowed a saving throw versus spells to resist being detonated. If they fail, lose a percentage of their hit points equal to the percentage of their mass that was destroyed by the attack. Creatures that don't get a saving throw (zombies, skeletons, and plant monsters, for example) against this attack take damage in the same way,`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '42',
                            entry: [
                                `**Disintegrate:** Some Athasian monsters are so huge that they can lose 8 cubic feet of their mass to disintegration and survive. These include the cloud ray, all drakes, the dune trapper, the megapede, and the sand vortex. If these monsters fail their save versus death magic, they are not killed outright but instead sustain 10d10+20 points of damage.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '42',
                            entry: [
                                `**Project Force:** No attack roll (other than the power check) is required with this power.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '42-43',
                            entry: [
                                `**Telekinesis:** It is possible to use telekinesis for very fine work such as sewing, writing, or picking a lock. The character attempting to perform the task must be capable of doing the work himself—sewing telekinetically doesn't help if you know nothing about sewing. The psionicist should make a second power check to successfully complete any fine work. In the case of picking a lock, this gives the character an opportunity to roll against his Open Locks percentage.`,
                                `If a character wants to engage in a tug-o'-war with someone (for example, trying to yank a sword out of a guard's hand) resolve the situation with the normal psychic contest rules, using the defender's Strength score against the psychokineticist's power score.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '43',
                            entry: [
                                `**Inertial Barrier:** The barrier affects missile fire and movement in both directions. It can stop a spell such as *fireball* or some breath weapons (a red dragon's flames, for example), causing the effect to splash off the surface of the barrier, but does nothing against pure energy attacks like a blue dragon's lightning breath or a *magic missile* spell. The inertial barrier protects against all forms of disintegration, not just psionic disintegration.
`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '43',
                            entry: [
                                `**Molecular Agitation:** Items are not required to make saving throws until they could actually be damaged. For example, a steel sword is not threatened until the fourth round of agitation, but a scroll must make a saving throw after only one round of molecular agitation.`,
                                `Molecular Manipulation and Soften can be used against body weaponry or flesh armor. However, the subject can negate the effects by allowing the power to drop and then re-initiating it later in the combat.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '43',
                            entry: [
                                `**Compact (from *Dragon Kings*):** Most creatures can easily tell if something they are about to eat or drink has been compacted. Even water is obvious, because it weighs 10 times what it should. Most animals will refuse to eat compacted material, since it doesn't feel right, but if they are extremely hungry they may let their appetite overcome their judgment. Sentient creatures may realize that "something's wrong with this pear," but the DM should be the judge of whether or not an NPC views it as a potential hazard.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                    ]
                }
            ]
        },
        {
            id: 'psychometabolism',
            heading: 'Psychometabolism',
            sections: [
                {
                    id: 'psychometabolic-powers',
                    heading: 'Psychometabolic Powers',
                    entries: [
                        {
                            page_number: '44',
                            entry: [
                                `**Note:** In the *Dragon Kings* hard cover game accessory, the devotion return flight is listed as a Psychometabolic power. It should be considered Psychokinetic. If a character has selected return flight as a Psychometabolic power, the DM may allow it to stand or let the player exchange it for another devotion.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '44-45',
                            entry: [
                                `**Animal Affinity:** Many of the creatures listed in the table that appears in *The Complete Psionics Handbook* (page 50) do not exist on Athas. Use the following table when rolling for an Athasian character's animal affinity.`,
                                `
<table>
<tr>
    <td colspan="4"><strong>Animal Affinity Table</strong></td>
</tr>
<tr>
    <td>1</td>
    <td>Anhkeg</td>
    <td>11</td>
    <td>Rasclinn</td>
</tr>
<tr>
    <td>2</td>
    <td>Cha'thrang</td>
    <td>12</td>
    <td>Razorwing</td>
</tr>
<tr>
    <td>3</td>
    <td>Erdland</td>
    <td>13</td>
    <td>Scorpion, giant</td>
</tr>
<tr>
    <td>4</td>
    <td>Flailer</td>
    <td>14</td>
    <td>Silkwyrm</td>
</tr>
<tr>
    <td>5</td>
    <td>Inix</td>
    <td>15</td>
    <td>Snake, giant&ast;</td>
</tr>
<tr>
    <td>6</td>
    <td>Kirre</td>
    <td>16</td>
    <td>Spider, giant</td>
</tr>
<tr>
    <td>7</td>
    <td>Lizard, minotaur</td>
    <td>17</td>
    <td>Tembo</td>
</tr>
<tr>
    <td>8</td>
    <td>Mekillot</td>
    <td>18</td>
    <td>Tigone</td>
</tr>
<tr>
    <td>9</td>
    <td>Pterrax</td>
    <td>19</td>
    <td>Wyvern</td>
</tr>
<tr>
    <td>10</td>
    <td>Pulp bee</td>
    <td>20</td>
    <td>Lion, spotted</td>
</tr>
<tr>
    <td colspan="4">&ast;Constrictor or Poison, player's choice.</td>
</tr>
</table>`,
                                `These monsters can all be found in the DARK SUN boxed set, DARK SUN MONSTROUS COMPENDIUM, or in the *Monstrous Manual*.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '45',
                            entry: [
                                `**Energy Containment:** This science is reflexive. Whenever subjected to an energy attack, the psionicist may try to make a power check to avoid the damage. He need not state that he is initiating the power before a round begins. If the psionicist has not yet taken his action in a round when he uses this power, he must abort his intended action to initiate this power.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '45',
                            entry: [
                                `**Metamorphosis:** Nonmagical movement powers are included, so a character who changes into a bird can fly, and one who changes into a thri-kreen can leap or dodge missiles. It doesn't confer special powers such as poison, gaze attacks, or weapon immunities. If a character metamorphs into another character race, he uses the generic monster description for that race.`,
                                `Some forms the character selects may have intrinsic advantages. Changing into a fish or a rock renders the character immune to drowning. The character does not retain any senses not normally associated with his new form, so if he changes into a rock, he won't be able to see or hear. (The character can always feel.) He can decide to keep eyes or ears when he transforms, so that he will be able to know what's going on around him. Of course, eyes or ears on a rock may give away the psionicist's position and may be vulnerable to attacks.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '46',
                            entry: [
                                `**Adrenalin Control:** If used to enhance Constitution, the character may gain temporary bonus hit points. Any damage he suffers is subtracted from these extra hit points first.`,
                                `When enhancing Strength, count each category of 18 as a point gained. A psionicist with a 16 Strength who rolls a 5 would increase to 17 18, 18/01, 18/51, and 18/76—not to 21.`,
                                `A character may exceed his racial maximums with this power, but takes a risk of injuring himself. When he stops maintaining adrenalin control, he must make a system shock check if he operated beyond the normal maximum for his race in any ability. If he fails, he suffers 1d6 damage from stress and fatigue.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '46',
                            entry: [
                                `**Body Control:** Use of this power allows a character to survive in a sandstorm or the Sea of Silt without damage.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '46',
                            entry: [
                                `**Body Equilibrium:** The psionicist can walk on silt.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '46',
                            entry: [
                                `**Cause Decay:** This can be used against an opponent's weapons or armor by making a touch attack roll.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS, ATTRIBUTE.TOUCH_SPELLS]
                        },
                        {
                            page_number: '46',
                            entry: [
                                `**Ectoplasmic Form:** A character using this devotion can be struck by magical weapons of a +1 or better enchantment, and by any monster of 4+1 Hit Dice or more. The psionicist's equipment must remain ectoplasmic as long as he does. An ectoplasmic character falls as if affected by a *feather fall* spell.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '46',
                            entry: [
                                `**Enhanced Strength:** A psionicist may enhance his Strength score to his racial maximum.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '46',
                            entry: [
                                `**Flesh Armor:** The base Armor Class granted by this power is not cumulative with armor worn—instead, use the better base Armor Class. Dexterity bonuses contribute to the character's new AC, as well as any magical protection that works in conjunction with regular armor, such as a *ring of protection*.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '46',
                            entry: [
                                `**Heightened Senses:** A character using this ability may reduce any darkness-based combat modifiers by 2.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS, ATTRIBUTE.BLINDNESS]
                        },
                        {
                            page_number: '46',
                            entry: [
                                `**Reduction:** The psionicist's gear is not affected.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '46',
                            entry: [
                                `**Forced Symmetry:** Generally, any character who has been injured has sustained 10 to 100% of that damage (d10x10) to one side of his body. For example, Frenla has 30 hit points and has taken 12 points of damage. A d10 roll shows she has sustained 80% to one side and 20% to the other, or 3 points and 3 points respectively. Her total damage can be increased to 18 or decreased to 6 with forced symmetry.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                    ]
                }
            ]
        },
        {
            id: 'psychoportation',
            heading: 'Psychoportation',
            sections: [
                {
                    id: 'psychoportive-powers',
                    heading: 'Psychoportive Powers',
                    entries: [
                        {
                            page_number: '47-48',
                            entry: [
                                `**Summon Planar Creature:** If the DM does not have access to *MC 8, The Outer Planes Appendix*, he is perfectly within his rights to require the psionicist to summon creatures from the elemental planes only. Possible elemental creature summonings would include:`,
                                `*Air:* Elemental (lesser, standard, or greater), invisible stalker, aerial servant, genie (djinn), sylph.`,
                                `*Earth:* Elemental, xorn, genie (dao), pech, sandling.`,
                                `*Fire:* Elemental, fire snake, salamander, genie (efreet).`,
                                `*Water:* Elemental, water weird, genie (marid).`,
                                `It's assumed that if the psionicist reaches one of the Outer Planes, he contacts either the Abyss, Baator (the Nine Hells), Limbo, a generic Lower Plane, or a generic Upper Plane. Note that planar powers can't be summoned with this science.`,
                                `An asterisk (&ast;) indicates a *Monstrous Manual* entry`,
                                `*The Abyss:* Bebilith, bodak, tanar'ri (alu-fiend, babau, balor&ast;, bar-igura, cambion, chasme, dretch, glabrezu, hezrou, manes, marilith&ast;, molydeus, nabassu, nalfeshnee, rutterkin, succubus, vrock).`,
                                `*Baator:* Baatezu (abishai&ast;, amnizu, barbazu, cornugon, erinyes, gelugon, hamatula, lemure, nupperibo, osyluth, pit fiend&ast;, spinagon).`,
                                `*Limbo:* Githzerai&ast;, slaad (red&ast;, blue&ast;, green, gray).`,
                                `*Upper Planes:* Aasimon (agathinon, astral deva, modanic deva, movanic deva, light, planetar), air sentinel, archon (hound, warden, sword, tome), bariaur, lammasu&ast;, adamantite dragon, enheriar, marut, moon dog, noctral, per, phoenix&ast;, warden beast, zoveri.`,
                                `*Lower Planes:* Gehreleth (farastu, kelubar, shator), hordling, maelephant, night hag&ast;, nightmare&ast;, vaporighu, yugoloth (arcanaloth, dergholoth, mezzoloth, nycaloth, piscoloth, ultroloth, yagnoloth).`,
                                `*Astral Plane:* Githyanki&ast;, aasimon (astral deva, movanic deva), slaad (gray), tanar'ri (nabassu. succubus, glabrezu, vrock), baatezu (amnizu, erinye), githzerai&ast;, lammasu,&ast; shedu&ast;, rakshasa&ast;.`,
                                `*Ethereal Plane:* Aasimon (monadic deva), gloomwing&ast;, tenebrous worm&ast;, lammasu&ast;, shedu&ast;, rakshasa&ast;, any elemental or genie.`,
                                `There are no guarantees with this power. The summoned creature is under no obligation to obey the psionicist and will probably be quite angry with him. The psionicist uses this power at his own risk.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '48',
                            entry: [
                                `**Dimensional Door:** One of the two portals created must appear in front of the psionicist, one to four feet from his body. The portal by the psionicist is oriented to his body, so that if he is lying on his back, the door is actually a horizontal plane hovering above him. If the psionicist is so close to something that the door must appear in a solid object, the power fails.`,
                                `A psionicist can only maintain one dimensional door at a time, so one character can't cage an opponent with such doors. However, two or more psionicists can cooperate to place their portals very close together. Remember, one of the portals will have to be right next to the initiating psionicist, so placing one next to an enemy may simply bring him right to you.`,
                                `If a psionicist tries to place a dimensional door in a position that will force another character to fall or step through it unwillingly, the victim gets a saving throw versus paralyzation to step around the portal and avoid the trip.`,
                                `The portal of a dimensional door has only one side. It has no thickness, and from its "back" side it does not exist. This means that a psionicist can't use the dimensional portal in front of him to screen missile attacks or to force an enemy in melee with him to be transported. The doorway works in both directions, but each portal only exists on one side.`,
                                `If the dimensional door is maintained over several rounds, both portals must remain in the exact spot where they first appeared. The psionicist can create a set of portals and then move away from the nearer one, as long as he continues to pay the maintenance cost. In a combat situation, up to five characters per round can pass through the door; if the party prepares by lining people up and going in order, as many as 10 per round can use the door.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                    ]
                }
            ]
        },
        {
            id: 'telepathy',
            heading: 'Telepathy',
            sections: [
                {
                    id: 'telepathic-powers',
                    heading: 'Telepathic Powers',
                    entries: [
                        {
                            page_number: '51-52',
                            entry: [
                                `The first printing of *The Complete Psionics Handbook* contained errata in the Telepathy chapter. First, none of the telepathic defense modes have a prerequisite. Second, mindlink is not a prerequisite for the following powers: empathy, ESP, identity penetration, incarnation awareness, psychic impersonation, and send thoughts. Psychic crush is actually a devotion, and psionic blast is a science. On page 75, the heading for Fate Link is missing. And lastly, ego whip and mind thrust both require contact as a prerequisite.`,
                                `Any telepathic power listing contact as a prerequisite or an initial cost will only work on a contacted mind. Remember, there are two ways to establish contact: by using the contact power directly or by getting three tangents with one of the telepathic attacks. Psionicists are immune to direct contact, and the attacks must be used to force contact with their minds.`,
                                `The telepathic attack modes can force contact with a nonpsionicist's mind, but it still requires three tangents. It is easier and more efficient to simply use contact on these foes instead.`,
                                `Mindless such as zombies or skeletons are immune to telepathic powers. On worlds other than Athas, all undead are immune to telepathic attacks, an extension of their immunity to *sleep* and *charm* effects. However, the unique undead of Athas are *not* immune to telepathic attacks unless it is specifically stated so. Many Athasian undead command formidable psionic powers and can defend themselves anyway.`,
                                `Characters asleep or unconscious can be affected by telepathic powers. A sleeping psionicist can defend himself with mind blank and will awaken within one round of the attack. Nonpsionicists awaken only if their attacker takes some action to make them wake up, such as dominating them and commanding them to wakefulness. Attacking characters in their sleep creates a unique role-playing opportunity, since the attacking telepathist will appear in his victim's dreamscape.`,
                                `In general, the telepath can decide if his target is aware of his contact. Powers such as invisibility or daydream would be useless if the victim realized his mind was being tampered with. If the psionicist chooses to announce his presence, the target realizes that someone is trying to reach him psionically.`,
                                `Each psionicist's mind has a distinct announcement that other psionicists can recognize, if they have been contacted by that psionicist before. A telepath cannot falsify his signature unless he uses psychic impersonation to mask his identity and win unguarded contact with his victim's mind. Nonpsionicists cannot distinguish between contacts of any kind.`,
                                `Specific abilities and explanations include the following.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '52',
                            entry: [
                                `**Fate Link:** The only two damaging effects that can pass through a fate link are the direct loss of hit points and death. Effects such as poisoning. paralyzation, stoning, disease, or unconsciousness cannot. However, if the effect causes a loss of hit points (poison that inflicted 20 points of damage, for example) the hit point loss would be conveyed to the other person.`,
                                `The fate link power is excellent as an insurance policy. If the psionicist wants to make sure that an NPC isn't sending him to his death, he can use fate link to take the NPC hostage.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '52',
                            entry: [
                                `**Mindwipe:** The telepath may use this power to seal off memories, instead of Intelligence or Wisdom. Memories are lost from most recent to most distant. The first round seals of the previous day, the second round the previous week, the third the previous month, the fourth the previous year, and the fifth and subsequent rounds 10 years each. The victim still loses one experience level for each round.`,
                                `At the psionicist's option, he can try to bar a specific memory or skill (like picking locks or a specific spell). Work of this precision requires a second power check. If the psionicist fails this precision power check, he blots out a month surrounding the event or the most recent use of the skill in question.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '52',
                            entry: [
                                `**Switch Personality:** Should one of the two bodies be killed, the personalities don't automatically switch back-the personality that is inhabiting the body which has died dies as well. The second personality will be doomed to eventual death as it weakens in the body that is not its own. Neither personality understands what is happening to its original body.`,
                                `This science is an excellent tool for espionage and infiltration, but the psionicist should take steps to prevent the possible abuse of his original body while he is inhabiting another.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '52',
                            entry: [
                                `**Contact:** As noted above, a telepath may state whether his target is aware or unaware of his contact. Psionicist targets are always aware of the fact that someone is trying to contact them.`,
                                `As insects, thri-kreen psionicists use a revised contact table based on life orders. A thri-kreen psionicist's modifiers are:`,
                                `
<table>
<tr>
    <td colspan="2"><strong>Thri-Kreen Contact Table</strong></td>
</tr>
<tr>
    <td><strong>Life Order</strong></td>
    <td><strong>Contact Score Modifier</strong></td>
</tr>
<tr>
    <td>Insect</td>
    <td>-1</td>
</tr>
<tr>
    <td>Other arthropod</td>
    <td>-2</td>
</tr>
<tr>
    <td>Fish</td>
    <td>-3</td>
</tr>
<tr>
    <td>Reptile, amphibian</td>
    <td>-4</td>
</tr>
<tr>
    <td>Bird</td>
    <td>-5</td>
</tr>
<tr>
    <td>Mammal (including human)</td>
    <td>-6</td>
</tr>
<tr>
    <td>Monster</td>
    <td>-7</td>
</tr>
<tr>
    <td>Plant</td>
    <td>-8</td>
</tr>
</table>`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '52',
                            entry: [
                                `**Id Insinuation:** Victims of this power can still defend themselves against physical attacks and suffer no Armor Class penalties while doing so. However, they can't move, cast spells, take cover, attack with a weapon, or initiate psionic powers.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '52',
                            entry: [
                                `**Post-Hypnotic Suggestion:** The effects of this psionic devotion are far less powerful than those of the 3rd-level wizard spell *suggestion*. The victim can't be convinced that her sword is a snake, or that her armor is covered with stinging scorpions. She *can* be convinced that a particular battle is very dangerous and that she should try to withdraw, or that she will require *lots* of water on her next journey. How the victim responds to an effective sugestion is up to
                                 the DM, but this shouldn't be an instant-kill power.`,
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '52',
                            entry: [
                                `**Psychic Impersonation:** The telepath who uses this power must have met or contacted his borrowed identity in order to be able to portray it realistically. He can use this ability when contacting another psionicist to announce himself as someone else and possibly trick his victim into lowering his mental defenses.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                    ]
                }
            ]
        },
        {
            id: 'metapsionics',
            heading: 'Metapsionics',
            sections: [
                {
                    id: 'metapsionic-powers',
                    heading: 'Metapsionic Powers',
                    entries: [
                        {
                            page_number: '54',
                            entry: [
                                `Several of the Metapsionic powers described in *The Complete Psionics Handbook* list "Telepathy" as a prerequisite. Mindlink fills this requirement.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '54',
                            entry: [
                                `**Empower:** It is possible to magically enchant a psionically empowered item. The item's creator must perform both actions, so a dual- or multiclassed psionicist/wizard of at least 10th/12th level is required. Sorcerer-kings and avangions would certainly qualify. The empowering and enchantment are completely independent of each other, so if one fails the other may still take effect.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '54',
                            entry: [
                                `**Psychic Surgery:** Some powers that can be permanently implanted in a character are: domination, fate link, attraction, aversion, awe, daydream, false sensory input, inflict pain, invincible foes, phobia amplification, post-hypnotic suggestion, repugnance, sight link, sound link, taste link, telempathic projection, acceptance, alignment stabilization, beast mastery, focus forgiveness, impossible task, hallucination, suppress fear, sensory suppression, amnesia, and passive contact.`,
                                `Note that some of these are major game effects—a permanent domination or acceptance is a serious problem for the victim, and PCs should never be allowed to use these on other PCs. The DM should watch for characters who abuse this power and apply appropriate alignment penalties.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '54',
                            entry: [
                                `**Split Personality:** If a psionicist has the PSPs to do it, his personalities can split again by initiating this power. This is handled separately for each personality. If the psionicist was maintaining a power or had a girded or spliced power in effect, he decides if one or both personalities inherit its effects.`,
                                `If a personality uses switch personality, the initiating personality will be transferred to the victim, taking full control, while the victim's personality becomes the second half of the psionicist's mind. They are in contact with each other. The victim can try to assert control over his new body, but must win a psychic contest against the psionicist. The psionicist uses his split personality power score, and the victim uses his level.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '54',
                            entry: [
                                `**Cannibalize:** A psionicist can cannibalize the body of a victim he has used switch personality on.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '55',
                            entry: [
                                `**Psychic Drain:** A victim of this power must have a combined Intelligence, Wisdom, and Constitution of 30 or greater. Subtract 30 from the combined scores to determine the psionic potential. The percentages described in *The Complete Psionics Handbook* apply to the victim's psionic potential loss. For example, a slave named Serak has an Intelligence of 13. a Wisdom of 15, and a Constitution of 14. The total is 42, so his psionic potential is a 12. Up to 6 points (a total of 60 PSPs) can be drained from Serak with no ill effects.`,
                                `The psionicist does not have to stop when he exhausts the creature's psionic potential. He can continue until his victim's scores are reduced to 0. The victim must save versus death each time a score is drained to 2 or less or die. Serak can be drained for 33 points, which exhausts 100% of his psionic potential and forces a saving throw versus death. Nine more points can be drained, but each point that reduces an ability to 2 or less forces Serak to make another saving throw.`,
                                `Humanoid creatures without scores may be drained at the DM's discretion. Good examples are gith, jozhal, silt runners, or b'rohgs. A monster's psionic potential equals its numerical Intelligence score -10, so a gith of average Intelligence (9-11, average 10) has a psionic potential of 0 and can't be drained.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                        {
                            page_number: '55',
                            entry: [
                                `**Receptacle:** The psionicist's potential is equal to the number of PSP he began with as a 1st-level character. Take note: an empowered receptacle can hold an enormous number of PSPs! Many high-level psionicists such as members of the Order or sorcerer-kings probably have receptacles of this nature on their person.`
                            ],
                            attributes: [GAME_SYSTEM.SECOND_EDITION, ATTRIBUTE.PSIONICS]
                        },
                    ]
                }
            ]
        },
    ]
});

module.exports = THE_WILL_AND_THE_WAY;