const {SOURCE, CURRENCY, SIZE, WEAPON_TYPE, HANDEDNESS, STRENGTH_BONUS} = require('../constants')

// const booksPriority = [
//     {book: 'PHB', print: 'First Printing May 2013'},
//     {book: 'The Complete Fighter's Handbook', print: '11th Printing, May 1996'},
//     {book: 'The Complete Thief's Handbook', print: 'November 1993'},
//     {book: 'The Complete Priest's Handbook', print: 'Seventh printing, October 1996'},
//     {book: 'The Complete Wizard's Handbook', print: '10th printing, March 1996'},
//     {book: 'The Complete Psionics Handbook', print: 'Ninth printing: October 1996'},
//     {book: 'Tome of Magic', print: 'Seventh Printing: March, 1996'},
//     {book: 'Arms and Equipment Guide', print: 'Fifth Printing: January 1994'},
//     {book: 'The Complete Book of Dwarves', print: 'November 1993'},
//     {book: 'The Complete Bard's Handbook', print: 'Fourth printing, November 1994'},
//     {book: 'The Complete Book of Elves', print: ''},
//     {book: 'The Complete Book of Humanoids', print: 'Sixth printing, March 1999'},
//     {book: 'The Complete Ranger's Handbook', print: 'Fifth printing, July 1995'},
//     {book: 'The Complete Paladin's Handbook', print: ''},
//     {book: 'The Complete Druid's Handbook', print: ''},
//     {book: 'The Complete Barbarian's Handbook', print: ''},
//     {book: 'The Complete Book of Necromancers', print: ''},
//     {book: 'The Complete Ninja's Handbook', print: '2nd printing, March 1996'},
//     {book: 'Player's Option: Combat & Tactics', print: ''},
//     {book: 'Player's Option: Skills & Powers', print: ''},
//     {book: 'Player's Option: Spells & Magic', print: ''},
// ];

class Range {
    constructor(short, medium, long, extreme) {
        this.short = short
        this.medium = medium
        this.long = long
        this.extreme = extreme
    }
}

class Damage {
    constructor(small_medium, large) {
        this.small_medium = small_medium
        this.large = large
    }
}

class Cost {
    constructor(amount, currency, quantity = 1) {
        this.amount = amount
        this.currency = currency
        this.quantity = quantity
    }

    string() {
        let displayString = `${this.amount} ${this.currency.id}`;
        if (this.amount) {
            displayString += `/${this.amount}`
        }
        return displayString;
    }
}

class Ammunition {
    constructor(
        {
            name,
            cost,
            weight_lbs,
            size,
            type,
            range,
            damage,
            pages,
            descriptions,
        }
    ) {
        this.name = name
        this.cost = cost
        this.weight_lbs = weight_lbs
        this.size = size
        this.type = type
        this.range = range
        this.damage = damage
        this.pages = pages
        this.descriptions = descriptions
    }
}

class ProficiencyGroup {
    constructor(tightGroup, boardGroup) {
        this.tightGroup = tightGroup
        this.boardGroup = boardGroup
    }
}

class ImplementationVariables {
    constructor(
        {
            proficiencyGroup,
            attackInMelee,
            strength,
            handedness,
        }
    ) {
        this.proficiencyGroup = proficiencyGroup
        this.attackInMelee = attackInMelee
        this.strength = strength
        this.handedness = handedness
    }
}

class Weapon {
    constructor(
        {
            name,
            sorting_group,
            cost,
            weight_lbs,
            size,
            type,
            speed,
            rate_of_fire,
            range,
            damage,
            pages,
            implementationVariables,
            descriptions
        }
    ) {
        this.name = name
        this.sorting_group = sorting_group
        this.cost = cost
        this.weight_lbs = weight_lbs
        this.size = size
        this.type = type
        this.speed = speed
        this.rate_of_fire = rate_of_fire
        this.range = range
        this.damage = damage
        this.pages = pages
        this.implmentationVariables = implementationVariables
        this.descriptions = descriptions
    }
}

const WEAPONS = {};
WEAPONS.Arquebus = {};
WEAPONS.Battle_axe = {};
WEAPONS.Belaying_pin = {};
WEAPONS.Blowgun = {
    ammunition: {
        Barbed_dart: {},
        Needle: {},
    }
};
WEAPONS.Bo_stick = {};
WEAPONS.Bolas = {};
WEAPONS.Short_bow = {
    ammunition: {
        Flight_arrow: {},
        Flight_arrow_stone: {},
    }
};
WEAPONS.Long_bow = {
    ammunition: {
        Flight_arrow: {},
        Flight_arrow_stone: {},
        Sheaf_arrow: {},
    }
};
WEAPONS.Composite_short_bow = {
    ammunition: {
        Flight_arrow: {},
        Flight_arrow_stone: {},
    }
};
WEAPONS.Composite_long_bow = {
    ammunition: {
        Flight_arrow: {},
        Flight_arrow_stone: {},
        Sheaf_arrow: {},
    }
};
WEAPONS.Cestus = {};
WEAPONS.Chain = {};
WEAPONS.Club = {};
WEAPONS.Daikyu = {
    ammunition: {
        Daikyu_arrow: {},
    }
};
WEAPONS.Hand_crossbow = {
    ammunition: {
        Hand_quarrel: {},
    }
};
WEAPONS.Light_crossbow = {
    ammunition: {
        Light_quarrel: {},
    }
};
WEAPONS.Heavy_crossbow = {
    ammunition: {
        Heavy_quarrel: {},
    }
};
WEAPONS.Dagger = {};
WEAPONS.Dagger_bone = {};
WEAPONS.Dagger_stone = {};
WEAPONS.Dirk = {};
WEAPONS.Dart = {};
WEAPONS.Footmans_flail = {};
WEAPONS.Footmans_mace = {};
WEAPONS.Footmans_pick = {};
WEAPONS.Gaff_hook_attached = {};
WEAPONS.Gaff_hook_held = {};
WEAPONS.Hand_axe = {};
WEAPONS.Throwing_axe = {};
WEAPONS.Harpoon = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
    }
};
WEAPONS.Horsemans_flail = {};
WEAPONS.Horsemans_mace = {};
WEAPONS.Horsemans_pick = {};
WEAPONS.Javelin = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
    }
};
WEAPONS.Javelin_stone = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
    }
};
WEAPONS.Knife = {};
WEAPONS.Knife_bone = {};
WEAPONS.Knife_stone = {};
WEAPONS.Heavy_horse_lance = {};
WEAPONS.Light_horse_lance = {};
WEAPONS.Jousting_lance = {};
WEAPONS.Medium_horse_lance = {};
WEAPONS.Main_gauche = {};
WEAPONS.Mancatcher = {};
WEAPONS.Morning_star = {};
WEAPONS.Net = {};
WEAPONS.Nunchaku = {};

// Polearms
WEAPONS.Awl_pike = {};
WEAPONS.Bardiche = {};
WEAPONS.Bec_de_corbin = {};
WEAPONS.Bill_guisarme = {};
WEAPONS.Fauchard = {};
WEAPONS.Fauchard_fork = {};
WEAPONS.Glaive = {};
WEAPONS.Glaive_guisarme = {};
WEAPONS.Guisarme = {};
WEAPONS.Guisarme_voulge = {};
WEAPONS.Halberd = {};
WEAPONS.Hook_fauchard = {};
WEAPONS.Lasso = {};
WEAPONS.Lucern_hammer = {};
WEAPONS.Lucern_hammer = {};
WEAPONS.Military_fork = {};
WEAPONS.Naginata = {};
WEAPONS.Partisan = {};
WEAPONS.Ranseur = {};
WEAPONS.Spetum = {};
WEAPONS.Tetsubo = {};
WEAPONS.Voulge = {};

WEAPONS.Quarterstaff = {};
WEAPONS.Sai = {};
WEAPONS.Scourge = {};
WEAPONS.Shuriken = {};
WEAPONS.Sickle = {};
WEAPONS.Sling = {
    ammunition: {
        Bullet: {},
        Stone: {},
    }
};
WEAPONS.Staff_sling = {
    ammunition: {
        Bullet: {},
        Stone: {},
    }
};
WEAPONS.Spear = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
    }
};
WEAPONS.Spear_stone = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
    }
};
WEAPONS.Long_spear = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
    }
};
WEAPONS.Stiletto = {};

// Swords
WEAPONS.Bastard_sword = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
    }
};
WEAPONS.Broad_sword = {};
WEAPONS.Cutlass = {};
WEAPONS.Drusus = {};
WEAPONS.Katana = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
    }
};
WEAPONS.Khopesh = {};
WEAPONS.Long_sword = {};
WEAPONS.Rapier = {};
WEAPONS.Sabre = {};
WEAPONS.Scimitar = {};
WEAPONS.Short_sword = {};
WEAPONS.Two_handed_sword = {};
WEAPONS.Wakizashi = {};

WEAPONS.Trident = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
    }
};
WEAPONS.Warhammer = {};
WEAPONS.Whip = {};

//#region PHB
const PHB_1_DOUBLE_DAMAGE_AGAINST_L_CHARGE = {
    pages: [95],
    text: [`1 This weapon inflicts double damage against charging creatures of L or greater size.`]
}
const PHB_2_DISMOUNT_RIDER = {
    pages: [95],
    text: [`2 This weapon can dismount a rider on a successful hit.`]
}
const PHB_3_ALLOWED_BY_DM = {
    pages: [95],
    text: ["3 This weapon available only if allowed by DM. One charge costs 5 sp."]
}
const PHB_4_DOUBLE_DAMAGE_CHARGING_MOUNT = {
    pages: [95],
    text: [`4 This weapon inflicts double damage when used from the back of a charging mount.`]
}
const PHB_5_DOUBLE_DAMAGE_RECEIVE_CHARGE = {
    pages: [95],
    text: [`5 This weapon inflicts double damage when firmly set to receive a charge.`]
}

WEAPONS.Arquebus[SOURCE.PHB.id] = new Weapon({
    name: "Arquebus",
    cost: new Cost(500, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 15,
    rate_of_fire: "1/3",
    range: new Range(50, 150, 210),
    damage: new Damage("1d10", "1d10"),
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.NONE,
            handedness: [HANDEDNESS.TWO_HANDED.id],
        }
    ),

    descriptions: [
        PHB_3_ALLOWED_BY_DM,
        {
            pages: [95],
            text: [`Arquebuses (if allowed) double all range modifiers.`]
        },
        {
            pages: [96],
            text: [
                `Arquebus: This weapon may be disallowed by your DM and you must check with him before you purchase it. An arquebus is an early form of the musket (a small hand-held cannon, really), almost as dangerous to its user as it is to the target. To use an arquebus, you must have a supply of powder and shot and a piece of slow-burning match or cord. These items may or may not be commonly available. (Powder is treated as a magical item in these rules.) The weapon can be fired only once every three rounds, and then only if the character is not attacked while loading. When firing an arquebus, all penalties for range are doubled.`,
                `If the attack roll for the arquebus is a 1 or 2, the weapon backfires, causing 1d6 points of damage to the firer. It is also fouled and cannot be used again until it has been cleaned, which takes about 30 minutes. When an arquebus scores a hit, it normally does 1 to 9 points of damage on 1d10. When a 10 is rolled, the die is rolled again and this amount is added to 10. Each time a 10 is rolled, the die is rolled again and added to the previous total. Thus, in a rare instance, a single shot could inflict 37 points, for example, if three consecutive 10s were rolled, followed by a 7. The damage caused by an arquebus is never modified for a high Strength score.`
            ]
        }
    ]
})

WEAPONS.Battle_axe[SOURCE.PHB.id] = new Weapon({
    name: "Battle axe",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 7,
    damage: new Damage("1d8", "1d8"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Blowgun[SOURCE.PHB.id] = new Weapon({
    name: "Blowgun",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.L,
    speed: 5,
    rate_of_fire: "2/1",
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.NONE,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),
})
WEAPONS.Blowgun.ammunition.Barbed_dart[SOURCE.PHB.id] = new Ammunition({
    name: "Barbed Dart",
    cost: new Cost(1, CURRENCY.SP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    range: new Range(10, 20, 30),
    damage: new Damage("1d3", "1d2",),

    pages: [94, 95],
})
WEAPONS.Blowgun.ammunition.Needle[SOURCE.PHB.id] = new Ammunition({
    name: "Needle",
    cost: new Cost(2, CURRENCY.CP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    range: new Range(10, 20, 30),
    damage: new Damage("1", "1",),

    pages: [94, 95]
})

const PHB_BOW_DESCRIPTION = [
    {
        pages: [96],
        text: [
            `Bows: Bows come in various shapes and sizes. The power of a bow is measured by its pull. The greater the pull, the more Strength needed to work the bow. Thus, it is possible for characters to have bows that grant them damage bonuses for high Strength (it is assumed the character has chosen a bow that has a greater pull). Likewise, characters with low Strengths suffer their usual penalties when using a bow (they are forced to use weaker bows or simply cannot draw back as far). The pull of a bow seldom prevents a character from using the weapon, only from gaining the full effect. The true test of a character’s Strength comes in stringing a bow—the bow of a strong hero may simply be un string able by a lesser man (as was Odysseus’s).`,
            `Heavier pull bows are not normally any more expensive than standard bows. The exceptions to this are those bows that enable the fighter to gain bonuses for exceptional Strength (18/01 or greater). These bows must be custom crafted and cost three to five times the normal price. These bows are also difficult to string or use effectively for those without exceptional Strength. These characters must roll a successful bend bars/lift gates roll to string or use such weapons (again, think of the test of the suitors in Odysseus’s household).`
        ]
    }
]

const PHB_LONG_BOW_ARROW_DESCRIPTION = [
    {
        pages: [96],
        text: [
            `Arrows for long bows of all types are divided between lightweight flight arrows and heavier sheaf arrows. Flight arrows have longer ranges and are normally used in hunting. Sheaf arrows have a stronger metal head but a reduced range. They are often used in times of war.`
        ]
    }
]

WEAPONS.Short_bow[SOURCE.PHB.id] = new Weapon({
    name: "Short bow",
    sorting_group: "Bow",
    cost: new Cost(30, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.M,
    speed: 7,
    rate_of_fire: "2/1",
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.BOW,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),

    descriptions: [
        PHB_BOW_DESCRIPTION
    ]
})
WEAPONS.Short_bow.ammunition.Flight_arrow[SOURCE.PHB.id] = new Ammunition({
    name: "Flight arrow",
    cost: new Cost(3, CURRENCY.SP, 12),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    range: new Range(50, 100, 150),
    damage: new Damage("1d6", "1d6",),
    pages: [94],
})

WEAPONS.Long_bow[SOURCE.PHB.id] = new Weapon({
    name: "Long bow",
    sorting_group: "Bow",
    cost: new Cost(75, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.L,
    speed: 8,
    rate_of_fire: "2/1",
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.BOW,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),

    descriptions: [
        PHB_BOW_DESCRIPTION
    ]
})

WEAPONS.Long_bow.ammunition.Flight_arrow[SOURCE.PHB.id] = new Ammunition({
    name: "Flight arrow",
    cost: new Cost(3, CURRENCY.SP, 12),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    range: new Range(70, 140, 210),
    damage: new Damage("1d6", "1d6",),

    pages: [94, 95],

    descriptions: [
        PHB_LONG_BOW_ARROW_DESCRIPTION
    ]
})

WEAPONS.Long_bow.ammunition.Sheaf_arrow[SOURCE.PHB.id] = new Ammunition({
    name: "Sheaf arrow",
    cost: new Cost(3, CURRENCY.SP, 6),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    range: new Range(50, 100, 170),
    damage: new Damage("1d8", "1d8",),

    pages: [94, 95],

    descriptions: [
        PHB_LONG_BOW_ARROW_DESCRIPTION
    ]
})

WEAPONS.Composite_short_bow[SOURCE.PHB.id] = new Weapon({
    name: "Composite short bow",
    sorting_group: "Bow",
    cost: new Cost(75, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.M,
    speed: 6,
    rate_of_fire: "2/1",
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.BOW,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),

    descriptions: [
        PHB_BOW_DESCRIPTION
    ]
})

WEAPONS.Composite_short_bow.ammunition.Flight_arrow[SOURCE.PHB.id] = new Ammunition({
    name: "Flight arrow",
    cost: new Cost(3, CURRENCY.SP, 12),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    range: new Range(50, 100, 180),
    damage: new Damage("1d6", "1d6",),

    pages: [94],
})

WEAPONS.Composite_long_bow[SOURCE.PHB.id] = new Weapon({
    name: "Composite long bow",
    sorting_group: "Bow",
    cost: new Cost(100, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.L,
    speed: 7,
    rate_of_fire: "2/1",
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.BOW,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),

    descriptions: [
        PHB_BOW_DESCRIPTION
    ]
})

WEAPONS.Composite_long_bow.ammunition.Flight_arrow[SOURCE.PHB.id] = new Ammunition({
    name: "Flight arrow",
    cost: new Cost(3, CURRENCY.SP, 12),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    range: new Range(60, 120, 210),
    damage: new Damage("1d6", "1d6",),

    pages: [94, 95],

    descriptions: [
        PHB_LONG_BOW_ARROW_DESCRIPTION
    ]
})
WEAPONS.Composite_long_bow.ammunition.Sheaf_arrow[SOURCE.PHB.id] = new Ammunition({
    name: "Sheaf arrow",
    cost: new Cost(3, CURRENCY.SP, 6),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    range: new Range(40, 80, 170),
    damage: new Damage("1d8", "1d8",),

    pages: [94, 95],

    descriptions: [
        PHB_LONG_BOW_ARROW_DESCRIPTION
    ]
})

WEAPONS.Club[SOURCE.PHB.id] = new Weapon({
    name: "Club",
    cost: new Cost(0, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 4,
    rate_of_fire: "1",
    range: new Range(10, 20, 30),
    damage: new Damage("1d6", "1d3"),
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            attackInMelee: true,
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Hand_crossbow[SOURCE.PHB.id] = new Weapon({
    name: "Hand crossbow",
    sorting_group: "Crossbow",
    cost: new Cost(300, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.S,
    speed: 5,
    rate_of_fire: "1",
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.NONE,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),
})

WEAPONS.Hand_crossbow.ammunition.Hand_quarrel[SOURCE.PHB.id] = new Ammunition({
    name: "Hand quarrel",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    range: new Range(20, 40, 60),
    damage: new Damage("1d3", "1d2",),

    pages: [94, 95],
})

WEAPONS.Light_crossbow[SOURCE.PHB.id] = new Weapon({
    name: "Light crossbow",
    sorting_group: "Crossbow",
    cost: new Cost(35, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.M,
    speed: 7,
    rate_of_fire: "1",
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.NONE,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),
})

WEAPONS.Light_crossbow.ammunition.Light_quarrel[SOURCE.PHB.id] = new Ammunition({
    name: "Light quarrel",
    cost: new Cost(1, CURRENCY.SP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    range: new Range(60, 120, 180),
    damage: new Damage("1d4", "1d4",),
    pages: [94, 95],
})

WEAPONS.Heavy_crossbow[SOURCE.PHB.id] = new Weapon({
    name: "Heavy crossbow",
    sorting_group: "Crossbow",
    cost: new Cost(50, CURRENCY.GP),
    weight_lbs: 14,
    size: SIZE.M,
    speed: 10,
    rate_of_fire: "1/2",
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.NONE,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),
})

WEAPONS.Heavy_crossbow.ammunition.Heavy_quarrel[SOURCE.PHB.id] = new Ammunition({
    name: "Heavy quarrel",
    cost: new Cost(2, CURRENCY.SP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    range: new Range(80, 160, 240),
    damage: new Damage("1d4+1", "1d6+1",),
    pages: [94, 95],
})

WEAPONS.Dagger[SOURCE.PHB.id] = new Weapon({
    name: "Dagger",
    cost: new Cost(2, CURRENCY.GP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(10, 20, 30),
    damage: new Damage("1d4", "1d3"),
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            attackInMelee: true,
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Dirk[SOURCE.PHB.id] = new Weapon({
    name: "Dirk",
    cost: new Cost(2, CURRENCY.GP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(10, 20, 30),
    damage: new Damage("1d4", "1d3"),
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            attackInMelee: true,
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Dart[SOURCE.PHB.id] = new Weapon({
    name: "Dart",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "3/1",
    range: new Range(10, 20, 40),
    damage: new Damage("1d3", "1d2"),
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),
})

WEAPONS.Footmans_flail[SOURCE.PHB.id] = new Weapon({
    name: "Footman's flail",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 7,
    damage: new Damage("1d6+1", "2d4"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Footmans_mace[SOURCE.PHB.id] = new Weapon({
    name: "Footman's mace",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 7,
    damage: new Damage("1d6+1", "1d46"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Footmans_pick[SOURCE.PHB.id] = new Weapon({
    name: "Footman's pick",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 6,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d6+1", "2d4"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Hand_axe[SOURCE.PHB.id] = new Weapon({
    name: "Hand axe",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 4,
    rate_of_fire: "1",
    range: new Range(10, 20, 30),
    damage: new Damage("1d6", "1d4"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            attackInMelee: true,
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Throwing_axe[SOURCE.PHB.id] = new Weapon({
    name: "Throwing axe",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 4,
    rate_of_fire: "1",
    range: new Range(10, 20, 30),
    damage: new Damage("1d6", "1d4"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            attackInMelee: true,
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Harpoon[SOURCE.PHB.id] = new Weapon({
    name: "Harpoon",
    cost: new Cost(20, CURRENCY.GP),
    weight_lbs: 6,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    rate_of_fire: "1",
    range: new Range(10, 20, 30),
    damage: new Damage("2d4", "2d6"),
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            attackInMelee: true,
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Horsemans_flail[SOURCE.PHB.id] = new Weapon({
    name: "Horseman's flail",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 6,
    damage: new Damage("1d4+1", "1d4+1"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Horsemans_mace[SOURCE.PHB.id] = new Weapon({
    name: "Horseman's mace",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 6,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 6,
    damage: new Damage("1d6", "1d4"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Horsemans_pick[SOURCE.PHB.id] = new Weapon({
    name: "Horseman's pick",
    cost: new Cost(7, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 5,
    damage: new Damage("1d4+1", "1d4"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Javelin[SOURCE.PHB.id] = new Weapon({
    name: "Javelin",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 4,
    rate_of_fire: "1",
    range: new Range(20, 40, 60,),
    damage: new Damage("1d6", "1d6"),
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            attackInMelee: true,
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Knife[SOURCE.PHB.id] = new Weapon({
    name: "Knife",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(10, 20, 30,),
    damage: new Damage("1d3", "1d2"),
    pages: [94, 95],

    implementationVariables: new ImplementationVariables(
        {
            attackInMelee: true,
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

const PBH_LANCE_DESCRIPTION = {
    pages: [96, 97],
    text: [
        `Lance: The different lances are rated according to size and sturdiness. Each type can be used only if the rider is on the same type of horse or a greater one. A man on a light war horse could not use a heavy horse lance, if only because the impact would bowl him and the horse right over! Further- more, the heavy and jousting lances require that the rider is firmly in a saddle and using stirrups. The jousting lance is a heavy horse lance modified for use in tournaments, in which the desire is not to kill the opponent. The end of the lance is fitted with a special blunted tip intended to lessen the chance of wounds. Of course, good intentions often go awry, so there is still a chance of injury during a joust.`
    ]
}

WEAPONS.Heavy_horse_lance[SOURCE.PHB.id] = new Weapon({
    name: "Heavy horse lance",
    sorting_group: "Lance",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    damage: new Damage("1d8+1", "3d6"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.LANCE]
        }
    ),

    descriptions: [
        PHB_4_DOUBLE_DAMAGE_CHARGING_MOUNT,
        PBH_LANCE_DESCRIPTION,
    ],
})

WEAPONS.Light_horse_lance[SOURCE.PHB.id] = new Weapon({
    name: "Light horse lance",
    sorting_group: "Lance",
    cost: new Cost(6, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 6,
    damage: new Damage("1d6", "1d8"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.LANCE]
        }
    ),

    descriptions: [
        PHB_4_DOUBLE_DAMAGE_CHARGING_MOUNT,
        PBH_LANCE_DESCRIPTION,
    ],
})

WEAPONS.Jousting_lance[SOURCE.PHB.id] = new Weapon({
    name: "Jousting lance",
    sorting_group: "Lance",
    cost: new Cost(20, CURRENCY.GP),
    weight_lbs: 20,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 10,
    damage: new Damage("1d3-1", "1d2-1"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.LANCE]
        }
    ),

    descriptions: [
        PHB_4_DOUBLE_DAMAGE_CHARGING_MOUNT,
        PBH_LANCE_DESCRIPTION,
    ],
})

WEAPONS.Medium_horse_lance[SOURCE.PHB.id] = new Weapon({
    name: "Medium horse lance",
    sorting_group: "Lance",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d6+1", "2d6"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.LANCE]
        }
    ),

    descriptions: [
        PHB_4_DOUBLE_DAMAGE_CHARGING_MOUNT,
        PBH_LANCE_DESCRIPTION,
    ],
})

WEAPONS.Mancatcher[SOURCE.PHB.id] = new Weapon({
    name: "Mancatcher",
    cost: new Cost(30, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [],
    speed: 7,
    damage: new Damage(null, null),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.NONE,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_2_DISMOUNT_RIDER,
        {
            pages: [97],
            text: [
                `Mancatcher: This item is a highly specialized type of polearm designed to capture without killing a victim. It consists of a long pole with a spring-loaded set of sharpened jaws at the end. The victim is caught between the arms, which then snap shut. The mancatcher is effective only on man-sized creatures. The target is always treated as AC 10, modified for Dexterity. If a hit is scored, the character is caught. The caught victim loses all shield and Dexterity bonuses and can be pushed and pulled about. This causes an automatic 1d2 points of damage per round and gives a 25% chance of pulling the victim to the ground. The victim can escape on a successful bend bars/lift gates roll, although this results in 1d2 points more damage. A common tactic is to use the weapon to pull horsemen off their mounts, then pin them to the ground.`
            ]
        }
    ]
})

WEAPONS.Morning_star[SOURCE.PHB.id] = new Weapon({
    name: "Morning star",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 12,
    size: SIZE.M,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 7,
    damage: new Damage("2d4", "1d6+1"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Awl_pike[SOURCE.PHB.id] = new Weapon({
    name: "Awl pike",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 12,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 13,
    damage: new Damage("1d6", "1d12"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_5_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        {
            pages: [97, 98],
            text: [`Awl Pike: Essentially this is a long spear 12 to 20 feet long ending in a spike point or tapered spear head. It was a popular weapon during the Renaissance. Since the pike stuck out in front, men could be packed side-by-side in dense formations, and several rows of men could fight. Large blocks of pikemen made formidable troops. However, once the pikemen engaged in close combat, they normally dropped their clumsy awl pikes and fought hand-to-hand with short swords.`]
        }
    ]
})

WEAPONS.Bardiche[SOURCE.PHB.id] = new Weapon({
    name: "Bardiche",
    sorting_group: "Polearm",
    cost: new Cost(7, CURRENCY.GP),
    weight_lbs: 12,
    size: SIZE.L,
    type: [WEAPON_TYPE.S],
    speed: 9,
    damage: new Damage("2d4", "2d6"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [98],
            text: [`Bardiche: One of the simplest of polearms, the bardiche is an elongated battle axe. A large curving axe-head is mounted on the end of a shaft 5 to 8 feet long. It probably grew out of common peasant tools and was popular with them. One relative disadvantage is that the bardiche required more space to wield than a pike or a spear.`]
        }
    ]
})

WEAPONS.Bec_de_corbin[SOURCE.PHB.id] = new Weapon({
    name: "Bec de corbin",
    sorting_group: "Polearm",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 9,
    damage: new Damage("1d8", "1d6"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [98],
            text: [`Bec de corbin: This was a highly specialized weapon of the upper classes during the Late Middle Ages and the early Renaissance. It is an early can-opener designed specifically to deal with plate armor. The pick or beak is made to punch through plate, while the hammer side can be used to give a stiff blow. The end is fitted with a short blade for dealing with unarmored or helpless foes. The weapon is about 8 feet long. Since the weapon relies on impact, a great deal of swinging space is needed.`]
        }
    ]
})

WEAPONS.Bill_guisarme[SOURCE.PHB.id] = new Weapon({
    name: "Bill-guisarme",
    sorting_group: "Polearm",
    cost: new Cost(7, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 10,
    damage: new Damage("2d4", "1d10"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [98],
            text: [`Bill-guisarme: A particularly bizarre-looking combination weapon, the bill-guisarme is an outgrowth of the common bill hook. Mounted on a 7 to 8-foot-long pole, it has a combination of a heavy cleaver blade, a jutting back spike, and a hook or spike on the end. Thus, it can be used in several different ways. Like most polearms, it requires lots of room to use.`]
        }
    ]
})

WEAPONS.Fauchard[SOURCE.PHB.id] = new Weapon({
    name: "Fauchard",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 8,
    damage: new Damage("1d6", "1d8"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [98],
            text: [`Fauchard: An outgrowth of the sickle and scythe, the fauchard is a long, inward curving blade mounted on a shaft 6 to 8 feet long. It can slash or thrust, although the inward curving point makes thrusting rather ineffective. Its advantage is that a peasant can easily convert his common scythe into this weapon of war.`]
        }
    ]
})

WEAPONS.Fauchard_fork[SOURCE.PHB.id] = new Weapon({
    name: "Fauchard-fork",
    sorting_group: "Polearm",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 9,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 8,
    damage: new Damage("1d8", "1d10"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [98],
            text: [`Fauchard: An outgrowth of the sickle and scythe, the fauchard is a long, inward curving blade mounted on a shaft 6 to 8 feet long. It can slash or thrust, although the inward curving point makes thrusting rather ineffective. Its advantage is that a peasant can easily convert his common scythe into this weapon of war.`]
        }
    ]
})

WEAPONS.Glaive[SOURCE.PHB.id] = new Weapon({
    name: "Glaive",
    sorting_group: "Polearm",
    cost: new Cost(6, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.S],
    speed: 8,
    damage: new Damage("1d6", "1d10"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_1_DOUBLE_DAMAGE_AGAINST_L_CHARGE,
        {
            pages: [98],
            text: [`Glaive: One of the most basic polearms, the glaive is a sin gle-edged blade mounted on an 8 to 10-foot-long shaft. While not the most efficient weapon, it is relatively easy to make and use. Normally the blade turns outward to increase the cutting area until it almost resembles a cleaver or axe.`]
        }
    ]
})

WEAPONS.Glaive_guisarme[SOURCE.PHB.id] = new Weapon({
    name: "Glaive-guisarme",
    sorting_group: "Polearm",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 9,
    damage: new Damage("2d4", "2d6"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_1_DOUBLE_DAMAGE_AGAINST_L_CHARGE,
        {
            pages: [98],
            text: [`Glaive-guisarme: Another combination weapon, this one takes the basic glaive and adds a spike or hook to the back of the blade. In theory, this increases the usefulness of the weapon although its actual application is somewhat questionable.`]
        }
    ]
})

WEAPONS.Guisarme[SOURCE.PHB.id] = new Weapon({
    name: "Guisarme",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.S],
    speed: 8,
    damage: new Damage("2d4", "1d8"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [98],
            text: [`Guisarme: Thought to have derived from a pruning hook, this is an elaborately curved heavy blade. While convenient and handy, it is not very effective.`]
        }
    ]
})

WEAPONS.Guisarme_voulge[SOURCE.PHB.id] = new Weapon({
    name: "Guisarme-voulge",
    sorting_group: "Polearm",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 10,
    damage: new Damage("2d4", "2d4"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [98, 99],
            text: [`Guisarme-voulge: This weapon has a modified axe blade mounted on an 8-foot-long shaft. The end of the blade tapers to a point for thrusting and a back spike is fitted for punching through armor. Sometimes this spike is replaced by a sharpened hook for dismounting riders.`]
        }
    ]
})

WEAPONS.Halberd[SOURCE.PHB.id] = new Weapon({
    name: "Halberd",
    sorting_group: "Polearm",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 9,
    damage: new Damage("1d10", "2d6"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [99],
            text: [`Halberd: After the awl pike and the bill, this was one of the most popular weapons of the Middle Ages. Fixed on a shaft 5 to 8 feet long is a large axe blade, angled for maximum impact. The end of the blade tapers to a long spear point or awl pike. On the back is a hook for attacking armor or dismounting riders. Originally intended to defeat cavalry, it is not tremendously successful in that role since it lacks the reach of the pike and needs considerable room to swing. It found new life against blocks of pikemen. Should the advance of the main attack stall, halberdiers issue out of the formation and attack the flanks of the enemy. The pikemen with their overlong weapons are nearly defenseless in such close combat.`]
        }
    ]
})

WEAPONS.Hook_fauchard[SOURCE.PHB.id] = new Weapon({
    name: "Hook fauchard",
    sorting_group: "Polearm",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 9,
    damage: new Damage("1d4", "1d4"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [99],
            text: [`Hook fauchard: This combination weapon is another attempted improvement to the fauchard. A back hook is fitted to the back of the blade, supposedly to dismount horsemen. Like the fauchard, this is not a tremendously successful weapon.`]
        }
    ]
})

WEAPONS.Lucern_hammer[SOURCE.PHB.id] = new Weapon({
    name: "Lucern hammer",
    sorting_group: "Polearm",
    cost: new Cost(7, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 9,
    damage: new Damage("2d4", "1d6"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [99],
            text: [`Lucern hammer: This weapon is similar to the bec de corbin. Fitted with a shaft up to 10 feet long, it is usually found in the hands of the common soldier. Like the bec de corbin, its main purpose is to punch through armor. The end is fitted with the long point of an awl pike to hold off enemy cavalry.`]
        }
    ]
})

WEAPONS.Lucern_hammer[SOURCE.PHB.id] = new Weapon({
    name: "Lucern hammer",
    sorting_group: "Polearm",
    cost: new Cost(7, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 9,
    damage: new Damage("2d4", "1d6"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_5_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        {
            pages: [99],
            text: [`Lucern hammer: This weapon is similar to the bec de corbin. Fitted with a shaft up to 10 feet long, it is usually found in the hands of the common soldier. Like the bec de corbin, its main purpose is to punch through armor. The end is fitted with the long point of an awl pike to hold off enemy cavalry.`]
        }
    ]
})

WEAPONS.Military_fork[SOURCE.PHB.id] = new Weapon({
    name: "Military fork",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d8", "2d4"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_1_DOUBLE_DAMAGE_AGAINST_L_CHARGE,
        {
            pages: [99],
            text: [`Military fork: This is one of the simplest modifications of a peasant’s tool since it is little more than a pitchfork fixed to a longer shaft. With tines strengthened and straightened, the military fork serves well. The need for cutting and cleaving eventually often results in combining the fork with other weapons.`]
        }
    ]
})

WEAPONS.Partisan[SOURCE.PHB.id] = new Weapon({
    name: "Partisan",
    sorting_group: "Polearm",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 9,
    damage: new Damage("1d6", "1d6+1"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_5_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        {
            pages: [99],
            text: [`Partisan: Shorter than the awl pike but longer than the spear, the partisan is a broad spear-head mounted on an 8-foot-long shaft. Two smaller blades project out from the base of the main blade, just to increase damage and trap weapons. Since it is a thrusting weapon, it can be used in closely packed formations.`]
        }
    ]
})

WEAPONS.Ranseur[SOURCE.PHB.id] = new Weapon({
    name: "Ranseur",
    sorting_group: "Polearm",
    cost: new Cost(6, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    damage: new Damage("2d4", "2d4"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_5_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        {
            pages: [99],
            text: [`Ranseur: Very much like the partisan, the ranseur differs in that the main blade is thinner and the projecting blades extended more like tines of a fork. These can trap a weapon and sometimes punch through armor.`]
        }
    ]
})

WEAPONS.Spetum[SOURCE.PHB.id] = new Weapon({
    name: "Spetum",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    damage: new Damage("1d6+1", "2d6"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_5_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        {
            pages: [99],
            text: [`Spetum: The spetum is a modification of the normal spear. The shaft increases to 8 to 10 feet and side blades are added. Some have blades that angle back, increasing the damage when pulling the weapon out of a wound. These blades can also trap and block weapons or catch and hold an opponent.`]
        }
    ]
})

WEAPONS.Voulge[SOURCE.PHB.id] = new Weapon({
    name: "Voulge",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 12,
    size: SIZE.L,
    type: [WEAPON_TYPE.S],
    speed: 10,
    damage: new Damage("2d4", "2d4"),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [99],
            text: [`Voulge: The voulge, like the bardiche, is a variation on the axe and the cleaver. The voulge is little more than a cleaver on the end of a long (7 to 8-foot) pole. It is a popular weapon, easy to make and simple to learn. It is also called the Lochaber axe.`]
        }
    ]
})

WEAPONS.Quarterstaff[SOURCE.PHB.id] = new Weapon({
    name: "Quarterstaff",
    weight_lbs: 4,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 4,
    damage: new Damage("1d6", "1d6"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Scourge[SOURCE.PHB.id] = new Weapon({
    name: "Scourge",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.S,
    speed: 5,
    damage: new Damage("1d4", "1d2"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [99],
            text: [`Scourge: This wicked weapon is a short whip with several thongs or tails. Each thong is studded with metal barbs, resulting in a terrible lash. It is sometimes used as an instrument of execution.`]
        }
    ]
})

WEAPONS.Sickle[SOURCE.PHB.id] = new Weapon({
    name: "Sickle",
    cost: new Cost(6, CURRENCY.SP),
    weight_lbs: 3,
    size: SIZE.S,
    type: [WEAPON_TYPE.S],
    speed: 4,
    damage: new Damage("1d4+1", "1d4"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: []
})

WEAPONS.Sling[SOURCE.PHB.id] = new Weapon({
    name: "Sling",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 0.1,
    size: SIZE.S,
    speed: 6,
    rate_of_fire: "1",
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),

    descriptions: []
})

WEAPONS.Sling.ammunition.Bullet[SOURCE.PHB.id] = new Ammunition({
    name: "Sling bullet",
    cost: new Cost(1, CURRENCY.CP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    range: new Range(50, 100, 200),
    damage: new Damage("1d4+1", "1d6+1"),
    pages: [95],
})
WEAPONS.Sling.ammunition.Stone[SOURCE.PHB.id] = new Ammunition({
    name: "Sling stone",
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    range: new Range(40, 80, 160),
    damage: new Damage("1d4", "1d4"),
    pages: [95],
})

WEAPONS.Spear[SOURCE.PHB.id] = new Weapon({
    name: "Spear",
    cost: new Cost(8, CURRENCY.SP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 6,
    rate_of_fire: "1",
    range: new Range(10, 20, 30),
    damage: new Damage("1d6", "1d8"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            attackInMelee: true,
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: []
})

WEAPONS.Staff_sling[SOURCE.PHB.id] = new Weapon({
    name: "Staff sling",
    cost: new Cost(2, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.M,
    speed: 11,
    rate_of_fire: "2/1",
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [],
})

WEAPONS.Staff_sling.ammunition.Bullet[SOURCE.PHB.id] = new Ammunition({
    name: "Staff sling bullet",
    cost: new Cost(1, CURRENCY.CP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    range: new Range(null, "30-60", 90),
    damage: new Damage("1d4+1", "1d6+1"),

    comment: `No explicit ammunition damage is given for Staff sling in the PHB, so using the same as Sling.`
})
WEAPONS.Staff_sling.ammunition.Stone[SOURCE.PHB.id] = new Ammunition({
    name: "Staff sling stone",
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    range: new Range(null, "30-60", 90),
    damage: new Damage("1d4+1", "1d6+1"),

    comment: `No explicit ammunition damage is given for Staff sling in the PHB, so using the same as Sling.`
})

WEAPONS.Bastard_sword[SOURCE.PHB.id] = new Weapon({
    name: "Bastard sword",
    sorting_group: "Sword",
    cost: new Cost(25, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        {
            pages: [99],
            text: [`Sword, Bastard: This sword is similar to a long sword in size and weight, but has a longer hilt. It can be used one- or two-handed. Use the speed factor and damage appropriate to the grip. If it is used two-handed, your character cannot employ a shield. Proficiency allows both uses.`]
        }
    ]
})

WEAPONS.Bastard_sword.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.PHB.id] = {
    name: "One-handed",
    speed: 6,
    damage: new Damage("1d8", "1d12"),
}
WEAPONS.Bastard_sword.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.PHB.id] = {
    name: "Two-handed",
    speed: 8,
    damage: new Damage("2d4", "2d8"),
}

WEAPONS.Broad_sword[SOURCE.PHB.id] = new Weapon({
    name: "Broad sword",
    sorting_group: "Sword",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 5,
    damage: new Damage("2d4", "1d6+1"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    )
})

WEAPONS.Khopesh[SOURCE.PHB.id] = new Weapon({
    name: "Khopesh",
    sorting_group: "Sword",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 8,
    damage: new Damage("2d4", "1d6"),
    pages: [95],

    descriptions: [
        {
            pages: [99],
            text: [`Sword, Khopesh: This is an Egyptian weapon. A khopesh has about 6 inches of handle and quillons. Its blade is then straight from the quillons for about 2 feet. The blade becomes sickle-shaped at this point, being about 2 additional feet long but effectively extending the overall length of the sword by only 1 ½ feet. This makes the khopesh both heavy and unwieldy, difficult to employ properly, and slow to recover, particularly after a badly missed blow. Its sickle-like portion can snag an opponent or an opposing weapon.`]
        }
    ],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    )
})

WEAPONS.Long_sword[SOURCE.PHB.id] = new Weapon({
    name: "Long sword",
    sorting_group: "Sword",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 5,
    damage: new Damage("1d8", "1d12"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    )
})

WEAPONS.Scimitar[SOURCE.PHB.id] = new Weapon({
    name: "Scimitar",
    sorting_group: "Sword",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 5,
    damage: new Damage("1d8", "1d8"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    )
})

WEAPONS.Short_sword[SOURCE.PHB.id] = new Weapon({
    name: "Short sword",
    sorting_group: "Sword",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 3,
    damage: new Damage("1d6", "1d8"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    )
})

WEAPONS.Two_handed_sword[SOURCE.PHB.id] = new Weapon({
    name: "Two-handed sword",
    sorting_group: "Sword",
    cost: new Cost(50, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.S],
    speed: 10,
    damage: new Damage("1d10", "3d6"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    )
})

WEAPONS.Trident[SOURCE.PHB.id] = new Weapon({
    name: "Trident",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d6+1", "3d4"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    )
})

WEAPONS.Warhammer[SOURCE.PHB.id] = new Weapon({
    name: "Warhammer",
    cost: new Cost(2, CURRENCY.GP),
    weight_lbs: 6,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 4,
    rate_of_fire: "1",
    range: new Range(10, 20, 30),
    damage: new Damage("1d4+1", "1d4"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    )
})

WEAPONS.Whip[SOURCE.PHB.id] = new Weapon({
    name: "Whip",
    cost: new Cost(1, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.M,
    speed: 8,
    damage: new Damage("1d2", "1"),
    pages: [95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    )
})

//#endregion PHB

//#region Fighter's Handbook
const FIGHTERS_HANDBOOK_CHAIN_LASSO_NET = {
    pages: [94],
    text: [`The chain, lasso and net are included in the table above because their use, in combat, is much like a missile weapon. They have ranges related to the length of the chain, the lasso or the net's trailing rope.`]
}

const FIGHTERS_HANDBOOK_ASTRIX_ROF_SPECIAL = {
    pages: [94],
    text: [`The "*" means the weapon doesn't precisely have a rate of fire; it may be used as often as the character's level (and perhaps specialization) dictates for a melee weapon.`]
}

const FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY = {
    pages: [95],
    text: [`! This weapon is intended for one-handed use, and may not be used two-handed.`]
}

const FIGHTERS_HANDBOOK_DOLLAR_ONE_HANDED_OPTIONALLY_TWO_HANDED = {
    pages: [95],
    text: [`$ This weapon is intended for one-handed use, but may be used two-handed (see the rules for Two-Hander Style Specialization in the Combat chapter).`]
}

const FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED = {
    pages: [95],
    text: [`% This weapon is intended for one-handed or two-handed use.`]
}

const FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY = {
    pages: [95],
    text: [`& This weapon is intended for two-handed use only.`]
}

const FIGHTERS_HANDBOOK_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE = {
    pages: [95],
    text: [`# This weapon inflicts double damage when firmly set to receive a charge.`]
}

const FIGHTERS_HANDBOOK_STONE_WEAPONS = {
    pages: [103],
    text: [
        `Stone weapons are used just like their modern counterparts, but are worth less money, do less damage, and are more prone to shattering.`,
        `The damages and costs (should some ever be sold on the market) for these weapons are given on the chart above.`,
        `Stone weapons have a chance of breaking every time they hit and do damage. Every time a stone weapon successfully hits a target, the player must roll 1d6. Regardless of the roll, this attack does its full damage, but on a roll of 1 on the 1d6, the weapon or weapon-head shatters and is useless.`
    ]
}

const FIGHTERS_HANDBOOK_BONE_WEAPONS = {
    pages: [103],
    text: [
        `Bone weapons are likewise used like their modern counterparts, but are worth even less money, can only be used with small stabbing weapons (knives and daggers), and shatter even more readily—on a roll of 1 or 2 on 1d6.`
    ]
}


WEAPONS.Harpoon[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Harpoon",
    cost: new Cost(20, CURRENCY.GP),
    weight_lbs: 6,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    pages: [93],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Harpoon.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    damage: new Damage("1d4+1", "1d6+1")
}
WEAPONS.Harpoon.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    damage: new Damage("2d4", "2d6")
}

WEAPONS.Javelin[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Javelin",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 4,
    pages: [93],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Javelin.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    damage: new Damage("1d4", "1d4")
}
WEAPONS.Javelin.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    damage: new Damage("1d6", "1d6")
}

WEAPONS.Spear[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Spear",
    cost: new Cost(8, CURRENCY.SP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 6,
    pages: [93],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Spear.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    damage: new Damage("1d6", "1d8")
}
WEAPONS.Spear.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    damage: new Damage("1d8+1", "2d6"),

    descriptions: [
        FIGHTERS_HANDBOOK_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE
    ]
}

WEAPONS.Long_spear[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Spear, Long",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    pages: [93,95],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Long_spear.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    damage: new Damage("1d8", "1d8+1")
}
WEAPONS.Long_spear.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    damage: new Damage("2d6", "3d6"),

    descriptions: [
        FIGHTERS_HANDBOOK_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE
    ]
}

WEAPONS.Trident[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Trident",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    pages: [93],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Trident.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    rate_of_fire: "1",
    range: new Range(0, 1, 2),
    damage: new Damage("1d6+1", "3d4")
}
WEAPONS.Trident.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    damage: new Damage("1d8+1", "3d4")
}

WEAPONS.Short_bow.ammunition.Flight_arrow_stone[SOURCE.FIGHTERS_HANDBOOK.id] =
    WEAPONS.Long_bow.ammunition.Flight_arrow_stone[SOURCE.FIGHTERS_HANDBOOK.id] =
        WEAPONS.Composite_short_bow.ammunition.Flight_arrow_stone[SOURCE.FIGHTERS_HANDBOOK.id] =
            WEAPONS.Composite_long_bow.ammunition.Flight_arrow_stone[SOURCE.FIGHTERS_HANDBOOK.id] = new Ammunition({
                name: "Arrows, Stone Flight",
                cost: new Cost(3, CURRENCY.CP, 12),
                weight_lbs: 0.1,
                size: SIZE.M,
                type: [WEAPON_TYPE.P],
                damage: new Damage("1d4", "1d4"),
                pages: [95],

                descriptions: [
                    FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
                    FIGHTERS_HANDBOOK_STONE_WEAPONS,
                ]
            })

WEAPONS.Belaying_pin[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Belaying pin",
    cost: new Cost(2, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    speed: 4,
    damage: new Damage("1d3", "1d3"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Bo_stick[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Bo stick",
    cost: new Cost(2, CURRENCY.CP),
    weight_lbs: 4,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 4,
    damage: new Damage("1d6", "1d4"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY
    ]
})

WEAPONS.Bolas[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Bolas",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 8,
    rate_of_fire: "1",
    range: new Range(3, 6, 9),
    damage: new Damage("1d3", "1d2"),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Cestus[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Cestus",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.S],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Chain[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Chain",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 3,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 5,
    rate_of_fire: "*",
    range: new Range("1/2", 1, 2),
    damage: new Damage("1d4+1", "1d4"),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
        FIGHTERS_HANDBOOK_ASTRIX_ROF_SPECIAL,
        FIGHTERS_HANDBOOK_CHAIN_LASSO_NET,
    ]
})

WEAPONS.Dagger_bone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Dagger Bone",
    cost: new Cost(1, CURRENCY.SP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d2", "1d2"),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        FIGHTERS_HANDBOOK_BONE_WEAPONS
    ]
})

WEAPONS.Dagger_stone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Dagger Stone",
    cost: new Cost(2, CURRENCY.SP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d3", "1d2"),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        FIGHTERS_HANDBOOK_STONE_WEAPONS
    ]
})

WEAPONS.Daikyu[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Daikyu",
    cost: new Cost(100, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.L,
    speed: 7,
    rate_of_fire: "2/1",
    range: new Range(7, 14, 21),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY
    ]
})

WEAPONS.Daikyu.ammunition.Daikyu_arrow[SOURCE.FIGHTERS_HANDBOOK.id] = new Ammunition({
    name: "Daikyu arrow",
    cost: new Cost(3, CURRENCY.SP, 6),
    weight_lbs: 1,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    range: new Range(7, 14, 21),
    damage: new Damage("1d8", "1d6"),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY
    ]
})

WEAPONS.Gaff_hook_attached[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Gaff/Hook Attached",
    cost: new Cost(2, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Gaff_hook_held[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Gaff/Hook Held",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Javelin_stone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Javelin, Stone",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 4,
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
        FIGHTERS_HANDBOOK_STONE_WEAPONS,
    ]
})
WEAPONS.Javelin_stone.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    rate_of_fire: "1",
    range: new Range(2, 4, 6),
    damage: new Damage("1d4", "1d4")
}
WEAPONS.Javelin_stone.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    damage: new Damage("1d4+1", "1d6")
}

WEAPONS.Knife_bone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Knife Bone",
    cost: new Cost(3, CURRENCY.CP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d2", "1d2"),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        FIGHTERS_HANDBOOK_BONE_WEAPONS
    ]
})

WEAPONS.Knife_stone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Knife Stone",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d2", "1d2"),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        FIGHTERS_HANDBOOK_STONE_WEAPONS
    ]
})

WEAPONS.Lasso[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Lasso",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 3,
    size: SIZE.L,
    speed: 10,
    rate_of_fire: "*",
    range: new Range(1, 2, 3),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
        FIGHTERS_HANDBOOK_ASTRIX_ROF_SPECIAL,
        FIGHTERS_HANDBOOK_CHAIN_LASSO_NET,
        // TODO write all the Lasso stuff
    ]
})

WEAPONS.Main_gauche[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Main-gauche",
    cost: new Cost(3, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Net[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Net",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    speed: 10,
    rate_of_fire: "*",
    range: new Range(1, 2, 3),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
        FIGHTERS_HANDBOOK_ASTRIX_ROF_SPECIAL,
        FIGHTERS_HANDBOOK_CHAIN_LASSO_NET,
    ]
})

WEAPONS.Nunchaku[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Nunchaku",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 3,
    damage: new Damage("1d6", "1d6"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Naginata[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Naginata",
    sorting_group: "Polearm",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d8", "1d10"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
        FIGHTERS_HANDBOOK_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE,
    ]
})

WEAPONS.Tetsubo[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Tetsubo",
    sorting_group: "Polearm",
    cost: new Cost(2, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 7,
    damage: new Damage("1d8", "1d8"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY
    ]
})

WEAPONS.Sai[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Sai",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 2,
    damage: new Damage("1d4", "1d2"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Shuriken[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Shuriken",
    cost: new Cost(3, CURRENCY.SP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(2, 4, 6),
    damage: new Damage("1d4", "1d4"),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Spear_stone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Spear, Stone",
    cost: new Cost(8, CURRENCY.CP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 6,
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
        FIGHTERS_HANDBOOK_STONE_WEAPONS
    ]
})
WEAPONS.Spear_stone.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    rate_of_fire: "1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d4", "1d6")
}
WEAPONS.Spear_stone.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Handed",
    damage: new Damage("1d6", "2d4")
}

WEAPONS.Stiletto[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Stiletto",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d3", "1d2"),
    pages: [94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Cutlass[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Cutlass",
    sorting_group: "Sword",
    cost: new Cost(12, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 5,
    damage: new Damage("1d6", "1d8"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Drusus[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Drusus",
    sorting_group: "Sword",
    cost: new Cost(50, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 3,
    damage: new Damage("1d6+1", "1d8+1"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Katana[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Katana",
    sorting_group: "Sword",
    cost: new Cost(100, CURRENCY.GP),
    weight_lbs: 6,
    size: SIZE.M,
    type: [WEAPON_TYPE.S, WEAPON_TYPE.P],
    speed: 4,
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED
    ]
})
WEAPONS.Katana.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    damage: new Damage("1d10", "1d12")
}
WEAPONS.Katana.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    damage: new Damage("2d6", "2d6")
}

WEAPONS.Rapier[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Rapier",
    sorting_group: "Sword",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 4,
    damage: new Damage("1d6+1", "1d8+1"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Sabre[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Sabre",
    sorting_group: "Sword",
    cost: new Cost(17, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 4,
    damage: new Damage("1d6+1", "1d8+1"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY
    ]
})

WEAPONS.Wakizashi[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Wakizashi",
    sorting_group: "Sword",
    cost: new Cost(50, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.S, WEAPON_TYPE.P],
    speed: 3,
    damage: new Damage("1d8", "1d8"),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_DOLLAR_ONE_HANDED_OPTIONALLY_TWO_HANDED
    ]
})

//#endregion Fighter's Handbook

module.exports = WEAPONS;