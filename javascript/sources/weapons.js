const {SOURCE, CURRENCY, SIZE, WEAPON_TYPE, HANDEDNESS, STRENGTH_BONUS} = require('../constants')

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
}

class Proficiencies {
    constructor({single, related, tight, broad}) {
        this.single = single
        this.related = related
        this.tight = tight // related / tight / familiar
        this.broad = broad
    }
}

class Ammunition {
    constructor(
        {
            name,
            footnote_marker,
            cost,
            weight_lbs,
            size,
            type,
            range,
            damage,
            pages,
            descriptions,
            comment,
        }
    ) {
        this.name = name
        this.footnote_marker = footnote_marker
        this.cost = cost
        this.weight_lbs = weight_lbs
        this.size = size
        this.type = type
        this.range = range
        this.damage = damage
        this.pages = pages
        this.descriptions = descriptions
        this.comment = comment
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
            footnote_marker,
            sorting_group,
            cost,
            weight_lbs,
            size,
            type,
            speed,
            rate_of_fire,
            range,
            damage,
            proficiencies,
            pages,
            implementationVariables,
            descriptions,
            comment
        }
    ) {
        this.name = name
        this.footnote_marker = footnote_marker
        this.sorting_group = sorting_group
        this.cost = cost
        this.weight_lbs = weight_lbs
        this.size = size
        this.type = type
        this.speed = speed
        this.rate_of_fire = rate_of_fire
        this.range = range
        this.damage = damage
        this.proficiencies = proficiencies
        this.pages = pages
        // this.implmentationVariables = implementationVariables
        this.descriptions = descriptions
        this.comment = comment
    }
}

const WEAPONS = {};
WEAPONS.Arquebus = {};
WEAPONS.Battle_axe = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Belaying_pin = {};
WEAPONS.Blowgun = {
    ammunition: {
        Barbed_dart: {},
        Needle: {},
    }
};
WEAPONS.Bo_stick = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
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
WEAPONS.Club = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
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
WEAPONS.Dart = {};
WEAPONS.Footmans_flail = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Footmans_mace = {};
WEAPONS.Footmans_pick = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Gaff_hook_attached = {};
WEAPONS.Gaff_hook_held = {};
WEAPONS.Hand_axe = {};
//WEAPONS.Throwing_axe = {};
WEAPONS.Harpoon = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Horsemans_flail = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Horsemans_mace = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Horsemans_pick = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Javelin = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Javelin_stone = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
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
WEAPONS.Mancatcher = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Morning_star = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Net = {};
WEAPONS.Nunchaku = {};

// Polearms
WEAPONS.Awl_pike = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Bardiche = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Bec_de_corbin = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Bill_guisarme = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Fauchard = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Fauchard_fork = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Glaive = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Glaive_guisarme = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Guisarme = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Guisarme_voulge = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Halberd = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Hook_fauchard = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Lasso = {};
WEAPONS.Lucern_hammer = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Military_fork = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Naginata = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Partisan = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Ranseur = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Spetum = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Tetsubo = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Voulge = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};

WEAPONS.Quarterstaff = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
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
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Spear_stone = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Long_spear = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Stiletto = {};

// Swords
WEAPONS.Bastard_sword = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Broad_sword = {};
WEAPONS.Cutlass = {};
WEAPONS.Drusus = {};
WEAPONS.Katana = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Khopesh = {};
WEAPONS.Long_sword = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Rapier = {};
WEAPONS.Sabre = {};
WEAPONS.Scimitar = {};
WEAPONS.Short_sword = {};
WEAPONS.Two_handed_sword = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Wakizashi = {};

WEAPONS.Trident = {
    grip: {
        [HANDEDNESS.ONE_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED.id]: {},
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Warhammer = {
    grip: {
        [HANDEDNESS.TWO_HANDED_SPECIALIZATION.id]: {}
    }
};
WEAPONS.Whip = {};

for (const [key, weapon] of Object.entries(WEAPONS))
    Object.defineProperty(weapon, 'id', {value: key, enumerable: false})

const PROFICIENCIES = {};

//#region PHB
PROFICIENCIES.PHB = {
    AXES: ["hand axe", "battle axe"],
    BOWS: ["short bow", "long bow", "composite bow"],
    CROSSBOWS: ["heavy and light crossbows"],
    DAGGERS: ["dagger", "knife"],
    GLAIVES: ["glaive", "halberd", "bardiche", "voulge", "guisarme", "glaive-guisarme", "glaive-voulge"],
    SPEARS: ["harpoon", "spear", "trident", "javelin"],
    MACES: ["footman's mace", "horseman's mace", "morning star", "flail", "hammer", "club"],
    POLEARMS: ["military fork", "ranseur", "spetum", "partisan"],
    SWORDS: ["scimitar", "bastard sword", "long sword", "broad sword"],
    SLINGS: ["sling", "staff sling"],
}


const PHB_1_DOUBLE_DAMAGE_AGAINST_L_CHARGE = {
    pages: [95],
    text: [`¹ This weapon inflicts double damage against charging creatures of L or greater size.`]
}
const PHB_2_DISMOUNT_RIDER = {
    pages: [95],
    text: [`² This weapon can dismount a rider on a successful hit.`]
}
const PHB_3_ALLOWED_BY_DM = {
    pages: [95],
    text: ["³ This weapon available only if allowed by DM. One charge costs 5 sp."]
}
const PHB_4_DOUBLE_DAMAGE_CHARGING_MOUNT = {
    pages: [95],
    text: [`⁴ This weapon inflicts double damage when used from the back of a charging mount.`]
}
const PHB_5_DOUBLE_DAMAGE_RECEIVE_CHARGE = {
    pages: [95],
    text: [`⁵ This weapon inflicts double damage when firmly set to receive a charge.`]
}

const PHB_RELATED_WEAPONS = {
    pages: [73],
    text: [`Specific decisions about which weapons are related are left to the DM. Some likely categories are:`]
}

WEAPONS.Arquebus[SOURCE.PHB.id] = new Weapon({
    name: "Arquebus",
    footnote_marker: "³",
    cost: new Cost(500, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 15,
    rate_of_fire: "1/3",
    range: new Range(50, 150, 210),
    damage: new Damage("1d10", "1d10"),
    proficiencies: new Proficiencies({single: "Arquebus"}),
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
                `**Arquebus:** This weapon may be disallowed by your DM and you must check with him before you purchase it. An arquebus is an early form of the musket (a small hand-held cannon, really), almost as dangerous to its user as it is to the target. To use an arquebus, you must have a supply of powder and shot and a piece of slow-burning match or cord. These items may or may not be commonly available. (Powder is treated as a magical item in these rules.) The weapon can be fired only once every three rounds, and then only if the character is not attacked while loading. When firing an arquebus, all penalties for range are doubled.`,
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
    proficiencies: new Proficiencies({single: "Battle axe", related: PROFICIENCIES.PHB.AXES}),
    pages: [73, 94],

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

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
    proficiencies: new Proficiencies({single: "Blowgun"}),
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

const PHB_BOW_DESCRIPTION = {
    pages: [96],
    text: [
        `**Bows:** Bows come in various shapes and sizes. The power of a bow is measured by its pull. The greater the pull, the more Strength needed to work the bow. Thus, it is possible for characters to have bows that grant them damage bonuses for high Strength (it is assumed the character has chosen a bow that has a greater pull). Likewise, characters with low Strengths suffer their usual penalties when using a bow (they are forced to use weaker bows or simply cannot draw back as far). The pull of a bow seldom prevents a character from using the weapon, only from gaining the full effect. The true test of a character’s Strength comes in stringing a bow—the bow of a strong hero may simply be un string able by a lesser man (as was Odysseus’s).`,
        `Heavier pull bows are not normally any more expensive than standard bows. The exceptions to this are those bows that enable the fighter to gain bonuses for exceptional Strength (18/01 or greater). These bows must be custom crafted and cost three to five times the normal price. These bows are also difficult to string or use effectively for those without exceptional Strength. These characters must roll a successful bend bars/lift gates roll to string or use such weapons (again, think of the test of the suitors in Odysseus’s household).`
    ]
}

const PHB_CROSSBOW_DESCRIPTION = {
    pages: [96],
    text: [
        `**Crossbow:** Strength bonuses or penalties do not apply to crossbows, since these are purely mechanical devices. The hand crossbow is easily held in one hand and cocked with the other. The light crossbow, also called latches, must be braced against an object to be cocked with a lever mounted on the stock. The heavy crossbow, also called arbalest, has a powerful pull and must be cocked with a cranequin (a simple winch or lever) that comes with the weapon. One foot is placed in a stirrup at the end of the crossbow while the cranequin is worked. All crossbows fire quarrels or bolts and the correct size must be used with each weapon.`
    ]
}


const PHB_LONG_BOW_ARROW_DESCRIPTION = {
    pages: [96],
    text: [
        `Arrows for long bows of all types are divided between lightweight flight arrows and heavier sheaf arrows. Flight arrows have longer ranges and are normally used in hunting. Sheaf arrows have a stronger metal head but a reduced range. They are often used in times of war.`
    ]
}

WEAPONS.Short_bow[SOURCE.PHB.id] = new Weapon({
    name: "Short bow",
    sorting_group: "Bow",
    cost: new Cost(30, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.M,
    speed: 7,
    rate_of_fire: "2/1",
    proficiencies: new Proficiencies({single: "Short bow", related: PROFICIENCIES.PHB.BOWS}),
    pages: [73, 94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.BOW,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),

    descriptions: [
        PHB_RELATED_WEAPONS,
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
    proficiencies: new Proficiencies({single: "Long bow", related: PROFICIENCIES.PHB.BOWS}),
    pages: [73, 94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.BOW,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),

    descriptions: [
        PHB_RELATED_WEAPONS,
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
    proficiencies: new Proficiencies({single: "Composite short bow", related: PROFICIENCIES.PHB.BOWS}),
    pages: [73, 94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.BOW,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),

    descriptions: [
        PHB_RELATED_WEAPONS,
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
    proficiencies: new Proficiencies({single: "Composite long bow", related: PROFICIENCIES.PHB.BOWS}),
    pages: [73, 94, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.BOW,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),

    descriptions: [
        PHB_RELATED_WEAPONS,
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
    proficiencies: new Proficiencies({single: "Club", related: PROFICIENCIES.PHB.MACES}),
    pages: [73, 94, 95],

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

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
    proficiencies: new Proficiencies({single: "Hand crossbow"}),
    pages: [94, 95],

    descriptions: [
        PHB_CROSSBOW_DESCRIPTION
    ],

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
    proficiencies: new Proficiencies({single: "Light crossbow", related: PROFICIENCIES.PHB.CROSSBOWS}),
    pages: [73, 94, 95],

    descriptions: [
        PHB_RELATED_WEAPONS,
        PHB_CROSSBOW_DESCRIPTION
    ],

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
    pages: [73, 94, 95],
    proficiencies: new Proficiencies({single: "Heavy crossbow", related: PROFICIENCIES.PHB.CROSSBOWS}),

    descriptions: [
        PHB_RELATED_WEAPONS,
        PHB_CROSSBOW_DESCRIPTION
    ],

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
    name: "Dagger/Dirk",
    cost: new Cost(2, CURRENCY.GP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(10, 20, 30),
    damage: new Damage("1d4", "1d3"),
    proficiencies: new Proficiencies({single: "Dagger/Dirk", related: PROFICIENCIES.PHB.DAGGERS}),
    pages: [73, 94, 95],

    descriptions: [PHB_RELATED_WEAPONS],

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
    proficiencies: new Proficiencies({single: "Dart"}),
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
    proficiencies: new Proficiencies({single: "Footman's flail", related: PROFICIENCIES.PHB.MACES}),
    pages: [73, 94],

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

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
    proficiencies: new Proficiencies({single: "Footman's mace", related: PROFICIENCIES.PHB.MACES}),
    pages: [73, 94],

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

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
    proficiencies: new Proficiencies({single: "Footman's pick"}),
    pages: [94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Hand_axe[SOURCE.PHB.id] = new Weapon({
    name: "Hand or throwing axe",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 4,
    rate_of_fire: "1",
    range: new Range(10, 20, 30),
    damage: new Damage("1d6", "1d4"),
    proficiencies: new Proficiencies({single: "Hand axe", related: PROFICIENCIES.PHB.AXES}),
    pages: [73, 94],

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

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
    proficiencies: new Proficiencies({single: "Harpoon", related: PROFICIENCIES.PHB.SPEARS}),
    pages: [73, 94, 95],

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

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
    proficiencies: new Proficiencies({single: "Horseman's flail", related: PROFICIENCIES.PHB.MACES}),
    pages: [73, 94],

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

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
    proficiencies: new Proficiencies({single: "Horseman's mace", related: PROFICIENCIES.PHB.MACES}),
    pages: [73, 94],

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

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
    proficiencies: new Proficiencies({single: "Horseman's pick", related: PROFICIENCIES.PHB.MACES}),
    pages: [73, 94],

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

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
    proficiencies: new Proficiencies({single: "Javelin", related: PROFICIENCIES.PHB.SPEARS}),
    pages: [73, 94, 95],

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

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
    proficiencies: new Proficiencies({single: "Knife", related: PROFICIENCIES.PHB.DAGGERS}),
    pages: [73, 94, 95],

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

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
        `**Lance:** The different lances are rated according to size and sturdiness. Each type can be used only if the rider is on the same type of horse or a greater one. A man on a light war horse could not use a heavy horse lance, if only because the impact would bowl him and the horse right over! Further- more, the heavy and jousting lances require that the rider is firmly in a saddle and using stirrups. The jousting lance is a heavy horse lance modified for use in tournaments, in which the desire is not to kill the opponent. The end of the lance is fitted with a special blunted tip intended to lessen the chance of wounds. Of course, good intentions often go awry, so there is still a chance of injury during a joust.`
    ]
}

WEAPONS.Heavy_horse_lance[SOURCE.PHB.id] = new Weapon({
    name: "Heavy horse lance",
    footnote_marker: "⁴",
    sorting_group: "Lance",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    damage: new Damage("1d8+1", "3d6"),
    proficiencies: new Proficiencies({single: "Heavy horse lance"}),
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
    footnote_marker: "⁴",
    sorting_group: "Lance",
    cost: new Cost(6, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 6,
    damage: new Damage("1d6", "1d8"),
    proficiencies: new Proficiencies({single: "Light horse lance"}),
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
    footnote_marker: "⁴",
    sorting_group: "Lance",
    cost: new Cost(20, CURRENCY.GP),
    weight_lbs: 20,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 10,
    damage: new Damage("1d3-1", "1d2-1"),
    proficiencies: new Proficiencies({single: "Jousting lance"}),
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
    footnote_marker: "⁴",
    sorting_group: "Lance",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d6+1", "2d6"),
    proficiencies: new Proficiencies({single: "Medium horse lance"}),
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
    footnote_marker: "²",
    cost: new Cost(30, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [],
    speed: 7,
    damage: new Damage(null, null),
    proficiencies: new Proficiencies({single: "Mancatcher"}),
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
                `**Mancatcher:** This item is a highly specialized type of polearm designed to capture without killing a victim. It consists of a long pole with a spring-loaded set of sharpened jaws at the end. The victim is caught between the arms, which then snap shut. The mancatcher is effective only on man-sized creatures. The target is always treated as AC 10, modified for Dexterity. If a hit is scored, the character is caught. The caught victim loses all shield and Dexterity bonuses and can be pushed and pulled about. This causes an automatic 1d2 points of damage per round and gives a 25% chance of pulling the victim to the ground. The victim can escape on a successful bend bars/lift gates roll, although this results in 1d2 points more damage. A common tactic is to use the weapon to pull horsemen off their mounts, then pin them to the ground.`
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
    proficiencies: new Proficiencies({single: "Morning star", related: PROFICIENCIES.PHB.MACES}),
    pages: [73, 94],

    descriptions: [PHB_RELATED_WEAPONS],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),
})

WEAPONS.Awl_pike[SOURCE.PHB.id] = new Weapon({
    name: "Awl pike",
    footnote_marker: "⁵",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 12,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 13,
    damage: new Damage("1d6", "1d12"),
    proficiencies: new Proficiencies({single: "Awl pike"}),
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
            text: [`**Awl Pike:** Essentially this is a long spear 12 to 20 feet long ending in a spike point or tapered spear head. It was a popular weapon during the Renaissance. Since the pike stuck out in front, men could be packed side-by-side in dense formations, and several rows of men could fight. Large blocks of pikemen made formidable troops. However, once the pikemen engaged in close combat, they normally dropped their clumsy awl pikes and fought hand-to-hand with short swords.`]
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
    proficiencies: new Proficiencies({single: "Bardiche", related: PROFICIENCIES.PHB.GLAIVES}),
    pages: [73, 94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_RELATED_WEAPONS,
        {
            pages: [98],
            text: [`**Bardiche:** One of the simplest of polearms, the bardiche is an elongated battle axe. A large curving axe-head is mounted on the end of a shaft 5 to 8 feet long. It probably grew out of common peasant tools and was popular with them. One relative disadvantage is that the bardiche required more space to wield than a pike or a spear.`]
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
    proficiencies: new Proficiencies({single: "Bec de corbin"}),
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
            text: [`**Bec de corbin:** This was a highly specialized weapon of the upper classes during the Late Middle Ages and the early Renaissance. It is an early can-opener designed specifically to deal with plate armor. The pick or beak is made to punch through plate, while the hammer side can be used to give a stiff blow. The end is fitted with a short blade for dealing with unarmored or helpless foes. The weapon is about 8 feet long. Since the weapon relies on impact, a great deal of swinging space is needed.`]
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
    proficiencies: new Proficiencies({single: "Bill-guisarme"}),
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
            text: [`**Bill-guisarme:** A particularly bizarre-looking combination weapon, the bill-guisarme is an outgrowth of the common bill hook. Mounted on a 7 to 8-foot-long pole, it has a combination of a heavy cleaver blade, a jutting back spike, and a hook or spike on the end. Thus, it can be used in several different ways. Like most polearms, it requires lots of room to use.`]
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
    proficiencies: new Proficiencies({single: "Fauchard"}),
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
            text: [`**Fauchard:** An outgrowth of the sickle and scythe, the fauchard is a long, inward curving blade mounted on a shaft 6 to 8 feet long. It can slash or thrust, although the inward curving point makes thrusting rather ineffective. Its advantage is that a peasant can easily convert his common scythe into this weapon of war.`]
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
    proficiencies: new Proficiencies({single: "Fauchard-fork"}),
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
            text: [`**Fauchard:** An outgrowth of the sickle and scythe, the fauchard is a long, inward curving blade mounted on a shaft 6 to 8 feet long. It can slash or thrust, although the inward curving point makes thrusting rather ineffective. Its advantage is that a peasant can easily convert his common scythe into this weapon of war.`]
        }
    ]
})

WEAPONS.Glaive[SOURCE.PHB.id] = new Weapon({
    name: "Glaive",
    footnote_marker: "¹",
    sorting_group: "Polearm",
    cost: new Cost(6, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.S],
    speed: 8,
    damage: new Damage("1d6", "1d10"),
    proficiencies: new Proficiencies({single: "Glaive", related: PROFICIENCIES.PHB.GLAIVES}),
    pages: [73, 94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_1_DOUBLE_DAMAGE_AGAINST_L_CHARGE,
        PHB_RELATED_WEAPONS,
        {
            pages: [98],
            text: [`**Glaive:** One of the most basic polearms, the glaive is a sin gle-edged blade mounted on an 8 to 10-foot-long shaft. While not the most efficient weapon, it is relatively easy to make and use. Normally the blade turns outward to increase the cutting area until it almost resembles a cleaver or axe.`]
        }
    ]
})

WEAPONS.Glaive_guisarme[SOURCE.PHB.id] = new Weapon({
    name: "Glaive-guisarme",
    footnote_marker: "¹",
    sorting_group: "Polearm",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 9,
    damage: new Damage("2d4", "2d6"),
    proficiencies: new Proficiencies({single: "Glaive-guisarme", related: PROFICIENCIES.PHB.GLAIVES}),
    pages: [73, 94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_1_DOUBLE_DAMAGE_AGAINST_L_CHARGE,
        PHB_RELATED_WEAPONS,
        {
            pages: [98],
            text: [`**Glaive-guisarme:** Another combination weapon, this one takes the basic glaive and adds a spike or hook to the back of the blade. In theory, this increases the usefulness of the weapon although its actual application is somewhat questionable.`]
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
    proficiencies: new Proficiencies({single: "Guisarme", related: PROFICIENCIES.PHB.GLAIVES}),
    pages: [73, 94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_RELATED_WEAPONS,
        {
            pages: [98],
            text: [`**Guisarme:** Thought to have derived from a pruning hook, this is an elaborately curved heavy blade. While convenient and handy, it is not very effective.`]
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
    proficiencies: new Proficiencies({single: "Guisarme-voulge", related: PROFICIENCIES.PHB.GLAIVES}),
    pages: [73, 94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_RELATED_WEAPONS,
        {
            pages: [98, 99],
            text: [`**Guisarme-voulge:** This weapon has a modified axe blade mounted on an 8-foot-long shaft. The end of the blade tapers to a point for thrusting and a back spike is fitted for punching through armor. Sometimes this spike is replaced by a sharpened hook for dismounting riders.`]
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
    proficiencies: new Proficiencies({single: "Halberd", related: PROFICIENCIES.PHB.GLAIVES}),
    pages: [73, 94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_RELATED_WEAPONS,
        {
            pages: [99],
            text: [`**Halberd:** After the awl pike and the bill, this was one of the most popular weapons of the Middle Ages. Fixed on a shaft 5 to 8 feet long is a large axe blade, angled for maximum impact. The end of the blade tapers to a long spear point or awl pike. On the back is a hook for attacking armor or dismounting riders. Originally intended to defeat cavalry, it is not tremendously successful in that role since it lacks the reach of the pike and needs considerable room to swing. It found new life against blocks of pikemen. Should the advance of the main attack stall, halberdiers issue out of the formation and attack the flanks of the enemy. The pikemen with their overlong weapons are nearly defenseless in such close combat.`]
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
    proficiencies: new Proficiencies({single: "Hook fauchard"}),
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
            text: [`**Hook fauchard:** This combination weapon is another attempted improvement to the fauchard. A back hook is fitted to the back of the blade, supposedly to dismount horsemen. Like the fauchard, this is not a tremendously successful weapon.`]
        }
    ]
})

WEAPONS.Lucern_hammer[SOURCE.PHB.id] = new Weapon({
    name: "Lucern hammer",
    footnote_marker: "⁵",
    sorting_group: "Polearm",
    cost: new Cost(7, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 9,
    damage: new Damage("2d4", "1d6"),
    proficiencies: new Proficiencies({single: "Lucern hammer"}),
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
            text: [`**Lucern hammer:** This weapon is similar to the bec de corbin. Fitted with a shaft up to 10 feet long, it is usually found in the hands of the common soldier. Like the bec de corbin, its main purpose is to punch through armor. The end is fitted with the long point of an awl pike to hold off enemy cavalry.`]
        }
    ]
})

WEAPONS.Military_fork[SOURCE.PHB.id] = new Weapon({
    name: "Military fork",
    footnote_marker: "¹",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d8", "2d4"),
    proficiencies: new Proficiencies({single: "Military fork", related: PROFICIENCIES.PHB.POLEARMS}),
    pages: [73, 94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_1_DOUBLE_DAMAGE_AGAINST_L_CHARGE,
        PHB_RELATED_WEAPONS,
        {
            pages: [99],
            text: [`**Military fork:** This is one of the simplest modifications of a peasant’s tool since it is little more than a pitchfork fixed to a longer shaft. With tines strengthened and straightened, the military fork serves well. The need for cutting and cleaving eventually often results in combining the fork with other weapons.`]
        }
    ]
})

WEAPONS.Partisan[SOURCE.PHB.id] = new Weapon({
    name: "Partisan",
    footnote_marker: "⁵",
    sorting_group: "Polearm",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 9,
    damage: new Damage("1d6", "1d6+1"),
    proficiencies: new Proficiencies({single: "Partisan", related: PROFICIENCIES.PHB.POLEARMS}),
    pages: [73, 94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_5_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        PHB_RELATED_WEAPONS,
        {
            pages: [99],
            text: [`**Partisan:** Shorter than the awl pike but longer than the spear, the partisan is a broad spear-head mounted on an 8-foot-long shaft. Two smaller blades project out from the base of the main blade, just to increase damage and trap weapons. Since it is a thrusting weapon, it can be used in closely packed formations.`]
        }
    ]
})

WEAPONS.Ranseur[SOURCE.PHB.id] = new Weapon({
    name: "Ranseur",
    footnote_marker: "⁵",
    sorting_group: "Polearm",
    cost: new Cost(6, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    damage: new Damage("2d4", "2d4"),
    proficiencies: new Proficiencies({single: "Ranseur", related: PROFICIENCIES.PHB.POLEARMS}),
    pages: [73, 94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_5_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        PHB_RELATED_WEAPONS,
        {
            pages: [99],
            text: [`**Ranseur:** Very much like the partisan, the ranseur differs in that the main blade is thinner and the projecting blades extended more like tines of a fork. These can trap a weapon and sometimes punch through armor.`]
        }
    ]
})

WEAPONS.Spetum[SOURCE.PHB.id] = new Weapon({
    name: "Spetum",
    footnote_marker: "⁵",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    damage: new Damage("1d6+1", "2d6"),
    proficiencies: new Proficiencies({single: "Spetum", related: PROFICIENCIES.PHB.POLEARMS}),
    pages: [73, 94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_5_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        PHB_RELATED_WEAPONS,
        {
            pages: [99],
            text: [`**Spetum:** The spetum is a modification of the normal spear. The shaft increases to 8 to 10 feet and side blades are added. Some have blades that angle back, increasing the damage when pulling the weapon out of a wound. These blades can also trap and block weapons or catch and hold an opponent.`]
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
    proficiencies: new Proficiencies({single: "Voulge", related: PROFICIENCIES.PHB.GLAIVES}),
    pages: [73, 94],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_RELATED_WEAPONS,
        {
            pages: [99],
            text: [`**Voulge:** The voulge, like the bardiche, is a variation on the axe and the cleaver. The voulge is little more than a cleaver on the end of a long (7 to 8-foot) pole. It is a popular weapon, easy to make and simple to learn. It is also called the Lochaber axe.`]
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
    proficiencies: new Proficiencies({single: "Quarterstaff"}),
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
    proficiencies: new Proficiencies({single: "Scourge"}),
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
            text: [`**Scourge:** This wicked weapon is a short whip with several thongs or tails. Each thong is studded with metal barbs, resulting in a terrible lash. It is sometimes used as an instrument of execution.`]
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
    proficiencies: new Proficiencies({single: "Sickle"}),
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
    proficiencies: new Proficiencies({single: "Sling", related: PROFICIENCIES.PHB.SLINGS}),
    pages: [73, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.TWO_HANDED.id]
        }
    ),

    descriptions: [PHB_RELATED_WEAPONS]
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
    proficiencies: new Proficiencies({single: "Spear", related: PROFICIENCIES.PHB.SPEARS}),
    pages: [73, 95],

    implementationVariables: new ImplementationVariables(
        {
            attackInMelee: true,
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [PHB_RELATED_WEAPONS]
})

WEAPONS.Staff_sling[SOURCE.PHB.id] = new Weapon({
    name: "Staff sling",
    cost: new Cost(2, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.M,
    speed: 11,
    rate_of_fire: "2/1",
    proficiencies: new Proficiencies({single: "Staff sling", related: PROFICIENCIES.PHB.SLINGS}),
    pages: [73, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [PHB_RELATED_WEAPONS],
})

WEAPONS.Staff_sling.ammunition.Bullet[SOURCE.PHB.id] = new Ammunition({
    name: "Staff sling bullet",
    cost: new Cost(1, CURRENCY.CP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    range: new Range(null, "30-60", 90),
    damage: new Damage("1d4+1", "1d6+1"),
    pages: [95],

    comment: `No explicit ammunition damage is given for Staff sling in the PHB, so using the same as Sling.`
})
WEAPONS.Staff_sling.ammunition.Stone[SOURCE.PHB.id] = new Ammunition({
    name: "Staff sling stone",
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    range: new Range(null, "30-60", 90),
    damage: new Damage("1d4", "1d6"),
    pages: [95],

    comment: `No explicit ammunition damage is given for Staff sling in the PHB, so using the same as Sling.`
})

WEAPONS.Bastard_sword[SOURCE.PHB.id] = new Weapon({
    name: "Bastard sword",
    sorting_group: "Sword",
    cost: new Cost(25, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    proficiencies: new Proficiencies({single: "Bastard sword", related: PROFICIENCIES.PHB.SWORDS}),
    pages: [73, 95],

    implementationVariables: new ImplementationVariables(
        {
            strength: STRENGTH_BONUS.FULL,
            handedness: [HANDEDNESS.BY_SIZE]
        }
    ),

    descriptions: [
        PHB_RELATED_WEAPONS,
        {
            pages: [99],
            text: [`**Sword, Bastard:** This sword is similar to a long sword in size and weight, but has a longer hilt. It can be used one- or two-handed. Use the speed factor and damage appropriate to the grip. If it is used two-handed, your character cannot employ a shield. Proficiency allows both uses.`]
        }
    ]
})

WEAPONS.Bastard_sword.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.PHB.id] = {
    name: "One-handed",
    speed: 6,
    damage: new Damage("1d8", "1d12"),
    pages: [95],
}
WEAPONS.Bastard_sword.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.PHB.id] = {
    name: "Two-handed",
    speed: 8,
    damage: new Damage("2d4", "2d8"),
    pages: [95],
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
    proficiencies: new Proficiencies({single: "Broad sword", related: PROFICIENCIES.PHB.SWORDS}),
    pages: [73, 95],

    descriptions: [PHB_RELATED_WEAPONS],

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
    proficiencies: new Proficiencies({single: "Khopesh"}),
    pages: [95],

    descriptions: [
        {
            pages: [99],
            text: [`**Sword, Khopesh:** This is an Egyptian weapon. A khopesh has about 6 inches of handle and quillons. Its blade is then straight from the quillons for about 2 feet. The blade becomes sickle-shaped at this point, being about 2 additional feet long but effectively extending the overall length of the sword by only 1 ½ feet. This makes the khopesh both heavy and unwieldy, difficult to employ properly, and slow to recover, particularly after a badly missed blow. Its sickle-like portion can snag an opponent or an opposing weapon.`]
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
    proficiencies: new Proficiencies({single: "Long sword", related: PROFICIENCIES.PHB.SWORDS}),
    pages: [73, 95],

    descriptions: [PHB_RELATED_WEAPONS],

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
    proficiencies: new Proficiencies({single: "Scimitar", related: PROFICIENCIES.PHB.SWORDS}),
    pages: [73, 95],

    descriptions: [PHB_RELATED_WEAPONS],

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
    proficiencies: new Proficiencies({single: "Short sword"}),
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
    proficiencies: new Proficiencies({single: "Two-handed sword"}),
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
    proficiencies: new Proficiencies({single: "Trident", related: PROFICIENCIES.PHB.SPEARS}),
    pages: [73, 95],

    descriptions: [PHB_RELATED_WEAPONS],

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
    proficiencies: new Proficiencies({single: "Warhammer", related: PROFICIENCIES.PHB.MACES}),
    pages: [73, 95],

    descriptions: [PHB_RELATED_WEAPONS],

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
    proficiencies: new Proficiencies({single: "Whip"}),
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
PROFICIENCIES.FIGHTERS = {
    TIGHT: {
        AXES: {
            name: "Axes",
            weapons: ["Battle axe", "Hand/throwing axe"]
        },
        BOWS: {
            name: "Bows",
            weapons: ["Composite long bow", "Composite short bow", "Daikyu", "Long bow", "Short bow"]
        },
        CLUBBING: {
            name: "Clubbing Weapons",
            weapons: ["Belaying pin", "Club", "Footman's mace", "Horseman's mace", "Morning Star", "Warhammer"],
        },
        CROSSBOWS: {
            name: "Crossbows",
            weapon: ["Hand crossbow", "Heavy crossbow", "Light crossbow"]
        },
        FENCING_BLADES: {
            name: "Fencing Blades",
            weapons: ["Dagger/Drik", "Knife/Stiletto", "Main-gauche", "Rapier", "Sabre"]
        },
        FLAILS: {
            name: "Flails",
            weapons: ["Footman's flail", "Horseman's flail"]
        },
        LANCES: {
            name: "Lances",
            weapons: ["Heavy horse lance", "Light horse lance", "Jousting lance", "Medium horse lance"]
        },
        LONG_BLADES: {
            name: "Long Blades",
            weapons: ["Bastard sword", "Katana", "Long sword", "Scimitar", "Two-handed sword"]
        },
        MEDIUM_BLADES: {
            name: "Medium Blades",
            weapons: ["Cutlass", "Khopesh", "Wakizashi"]
        },
        PICKS: {
            name: "Picks",
            weapons: ["Footman's pick", "Horseman's pick"]
        },
        POLEARMS: {
            name: "Polearms",
            weapons: ["Awl pike", "Bardiche", "Bar de corbin", "Bill-guisarme", "Fauchard", "Fauchard-fork", "Glaive", "Glaive-guisarme", "Guisarme", "Guisarme-voulge", "Halberd", "Hook fauchard", "Lucern hammer", "Mancatcher", "Military fork", "Naginata", "Partisan", "Ranseur", "Spetum", "Tetsubo", "Voulge"]
        },
        SHORT_BLADES: {
            name: "Short Blades",
            weapons: ["Dagger/Dirk", "Knife/Stiletto", "Main-gauche", "Short sword/Drusus"]
        },
        SLINGS: {
            name: "Slings",
            weapons: ["Sling", "Staff Sling"]
        },
        SPEARS: {
            name: "Spears",
            weapons: ["Harpoon", "Javelin", "Long Spear", "Spear", "Trident"]
        },
        WHIPS: {
            name: "Whips",
            weapons: ["Scourge", "Whip"]
        }
    },
    BROAD: {
        BLADES: {
            name: "Blades",
            weapons: ["Bastard sword", "Cutlass", "Dagger/Dirk", "Katana", "Khopesh", "Knife/Stiletto", "Long sword", "Main-gauche", "Rapier", "Sabre", "Scimitar", "Short sword/Drusus", "Two-handed sword", "Wakizashi"]
        },
        CLEAVING_CRUSHING: {
            name: "Cleaving/Crushing Weapons",
            weapons: ["Battle axe", "Belaying Pin", "Club", "Footman's mace", "Footman's pick", "Hand/throwing axe", "Horseman's mace", "Horseman's pick", "Morning star", "Warhammer"]
        },
        POLE_WEAPONS: {
            name: "Pole Weapons",
            weapons: ["Awl pike", "Bardiche", "Bar de corbin", "Bill-guisarme", "Fauchard-fork", "Glaive", "Glaive-guisarme", "Guisarme", "Guisarme-voulge", "Halberd", "Harpoon", "Hook fauchard", "Javelin", "Lucern hammer", "Long Spear", "Mancatcher", "Military fork", "Naginata", "Partisan", "Ranseur", "Spear", "Spetum", "Tetsubo", "Trident", "Voulge"]
        },
        SMALL_THROWING: {
            name: "Small Throwing Weapons",
            weapons: ["Dagger/Dirk", "Dart", "Hand/throwing axe", "Knife/stiletto", "Shuriken"]
        }
    }
}

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
    footnote_marker: "%",
    cost: new Cost(20, CURRENCY.GP),
    weight_lbs: 6,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    proficiencies: new Proficiencies({
        single: "Harpoon",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.SPEARS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59,60,93],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Harpoon.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    speed: 7,
    damage: new Damage("1d4+1", "1d6+1"),
    pages: [93, 94],
}
WEAPONS.Harpoon.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    speed: 7,
    damage: new Damage("2d4", "2d6"),
    pages: [93],
}
WEAPONS.Harpoon.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 4,
    //damage: new Damage("2d4", "2d6"),
    pages: [63],
}

WEAPONS.Javelin[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Javelin",
    footnote_marker: "%",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 4,
    proficiencies: new Proficiencies({
        single: "Javelin",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.SPEARS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59,60,93],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ],

    comment: `No explicit range is given in the Fighter's Handbook. So it is assumed the same range as the PHB is used.`
})
WEAPONS.Javelin.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    speed: 4,
    damage: new Damage("1d4", "1d4"),
    pages: [93],
}
WEAPONS.Javelin.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    speed: 4,
    damage: new Damage("1d6", "1d6"),
    pages: [93],
}
WEAPONS.Javelin.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 1,
    //damage: new Damage("1d6", "1d6"),
    pages: [63],
}

WEAPONS.Spear[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Spear",
    footnote_marker: "%",
    cost: new Cost(8, CURRENCY.SP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 6,
    proficiencies: new Proficiencies({
        single: "Spear",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.SPEARS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59,60,93],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Spear.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    speed: 6,
    damage: new Damage("1d6", "1d8"),
    pages: [93],
}
WEAPONS.Spear.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    footnote_marker: "#",
    speed: 6,
    damage: new Damage("1d8+1", "2d6"),
    pages: [93],

    descriptions: [
        FIGHTERS_HANDBOOK_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE
    ]
}
WEAPONS.Spear.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 3,
    // damage: new Damage("1d8+1", "2d6"),
    pages: [63],
}

WEAPONS.Long_spear[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Spear, Long",
    footnote_marker: "%",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    proficiencies: new Proficiencies({
        single: "Long Spear",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.SPEARS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59,60,93,95],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Long_spear.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    speed: 8,
    damage: new Damage("1d8", "1d8+1"),
    pages: [93,95],
}
WEAPONS.Long_spear.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    footnote_marker: "#",
    speed: 8,
    damage: new Damage("2d6", "3d6"),
    pages: [93,95],

    descriptions: [
        FIGHTERS_HANDBOOK_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE
    ]
}
WEAPONS.Long_spear.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 5,
    // damage: new Damage("2d6", "3d6"),
    pages: [63],
}

WEAPONS.Trident[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Trident",
    footnote_marker: "%",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    proficiencies: new Proficiencies({
        single: "Trident",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.SPEARS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59,60,93],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Trident.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    speed: 7,
    rate_of_fire: "1",
    range: new Range(0, 1, 2),
    damage: new Damage("1d6+1", "3d4"),
    pages: [93, 94],
}
WEAPONS.Trident.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    speed: 7,
    damage: new Damage("1d8+1", "3d4"),
    pages: [93],
}
WEAPONS.Trident.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 4,
    // damage: new Damage("1d8+1", "3d4"),
    pages: [63],
}

WEAPONS.Short_bow.ammunition.Flight_arrow_stone[SOURCE.FIGHTERS_HANDBOOK.id] =
    WEAPONS.Long_bow.ammunition.Flight_arrow_stone[SOURCE.FIGHTERS_HANDBOOK.id] =
        WEAPONS.Composite_short_bow.ammunition.Flight_arrow_stone[SOURCE.FIGHTERS_HANDBOOK.id] =
            WEAPONS.Composite_long_bow.ammunition.Flight_arrow_stone[SOURCE.FIGHTERS_HANDBOOK.id] = new Ammunition({
                name: "Arrows, Stone Flight",
                footnote_marker: "&",
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
    footnote_marker: "!",
    cost: new Cost(2, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    speed: 4,
    damage: new Damage("1d3", "1d3"),
    proficiencies: new Proficiencies({
        single: "Belaying pin",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.CLUBBING],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.CLEAVING_CRUSHING]
    }),
    pages: [59,60,95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [100],
            text: [
                `**Belaying Pin**`,
                `The belaying pin is a short rod of wood or metal. It's inserted in a hole bored through the ship's rail, and ship's ropes are made fast (tied) to it. It can also be yanked free and brought in violent contact with enemies; in a pirate fight, anyone who loses a weapon or starts out without one ends up with a belaying pin in his hand.`,
                `Weapon proficiency with Belaying Pin is related to clubs and maces; if you have proficiency with club or maces, you take only a -1 when using a belaying pin you don't have proficiency for. Weapon specialization with belaying pin gives the usual benefits.`,
                `Belaying pins are very available on any ship; you can get any number of them at a seaside town or city, especially at a ship builder's, a warehouse, or a business that supplies ships.`
            ]
        }
    ]
})

WEAPONS.Bo_stick[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Bo stick",
    footnote_marker: "&",
    cost: new Cost(2, CURRENCY.CP),
    weight_lbs: 4,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 4,
    damage: new Damage("1d6", "1d4"),
    proficiencies: new Proficiencies({
        single: "Quarterstaff/Bo stick",
    }),
    pages: [60, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
        {
            pages: [100,101],
            text: [
                `**Bo Stick**`,
                `The bo stick is an ordinary hardwood staff, the height of a man or slightly taller.`,
                `Bo stick shares a proficiency with Quarterstaff. If you can use one, you can use the other. (This doesn't mean that the two styles are identical; an oriental bo stick fighter looks very different in combat than a western quarterstaff combatant. But if they traded weapons, they'd be just as good with the other guy's weapon ... each in his own style.) Weapon specialization in bo stick gives you the usual advantages.`,
                `Bo sticks are common everywhere; any 6' or 7' hardwood walking staff is a bo staff. To use it as such, however, you have to have the bo stick/quarterstaff weapon proficiency. The primary difference between the weapons, and the reason the quarterstaff does more damage against Large monster, is that the combat quarterstaff has iron-shod, even lead-weighted ends. (A quarterstaff which does not have these features should do damage identical to the bo stick.)`
            ]
        }
    ]
})
WEAPONS.Bo_stick.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 1,
    // damage: new Damage("1d6", "1d4"),
    pages: [63]
}

WEAPONS.Bolas[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Bolas",
    footnote_marker: "!",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 8,
    rate_of_fire: "1",
    range: new Range(3, 6, 9),
    damage: new Damage("1d3", "1d2"),
    proficiencies: new Proficiencies({
        single: "Bolas",
    }),
    pages: [60, 94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [96],
            text: [
                `**Bolas**`,
                `The bolas are three balls attached to ropes or cords about a yard in length; the other ends of the cords are tied together in a knot. The wielder of the bolas whirls them by the knot and throws them at a target; if they hit, they wrap around the target, with the balls smashing painfully into the target as they connect. Once they have wrapped themselves around a target, it takes the victim one full round and a successful ability check vs. Strength to get them free. (If the character fails his Strength check, he does not get the bolas free this round.)`,
                `This weapon does only a little damage, but it is especially useful if you are using the Hit Locations rules from the *Combat Rules* chapter.`,
                `If the attacker makes a Called Shot to the target's Legs (he doesn't have to specify which; if the attack hits, it hits both), and successfully attacks, the bolas wrap themselves tightly around his legs. He can no longer run or walk until he gets them free. He must make a Dexterity check just to avoid falling down. In fact, if he was moving when the attack was made, he suffers a -3 penalty to his Dexterity.`,
                `If the attacker makes a Called Shot to the target's Arms (again, he doesn't have to specify; both will be hit) and successfully attacks, the bolas wrap themselves tightly around his arms and torso. He cannot wield his weapon and does not get the AC bonus of his shield until he gets himself free. His roll to free himself is at a -2 penalty to his Strength ability score because he has no leverage.`,
                `If the attacker makes a Called Shot to the target's Head, the bolas wrap themselves around the target's neck and begin strangling him. (This does not work if the character was wearing a Closed-Faced Helm or a Great Helm, described later this chapter.) The bolas do the listed damage on the round they hit. Thereafter, on each successive round where they begin the round still on the victim's throat, they do 1d3 hp of damage from strangulation. The damage stops when they are removed or when the target is dead.`,
                `Weapon proficiency with the Bolas is not related to any other weapon proficiency. Specialization grants the usual benefits. In case of a Called Shot to the target's head, the damage bonus only applies to the initial hit; it is not added to the subsequent rounds of strangulation.`,
                `Any leatherworker or weaponsmith can make a set of bolas... but he must have exact measurements for the cords and exact weights for the balls to do it right. Simply hearing such a weapon described, the craftsman can make something like it... but unless he makes hit craftsman ability check by 3 or better, the weapon he makes will be proportioned wrong and will be at a -4 to hit.`
            ]
        }
    ]
})

WEAPONS.Cestus[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Cestus",
    footnote_marker: "!",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.S],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    proficiencies: new Proficiencies({
        single: "No Proficiency",
    }),
    pages: [60, 95],

    descriptions: [
        {
            pages: [60],
            text: [`**Special Note:** The Cestus doesn't require any Proficiency. It enhances punching damage, and everyone knows how to punch.`]
        },
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [96],
            text: [
                `**Cestus**`,
                `The cestus is a glovelike weapon, studded with sharp spikes and edges on the back of the glove and across the knuckles. Gladiators fighting with the cestus usually wea two, one on each hand (the plural is cesti); here, it pays for a gladiator to have Cestus Weapon Specialization, Two-Weapon Style Specialization, and/or Punching Specialization.`,
                `Cestus combat is very popular with arena crowds because it is extremely bloody and up-close. Also, because the weapons do comparatively little damage, the fighters tend to last a long time in combat.`,
                `When wearing a cestus or two cesti, a character my still make a Grab maneuver with the hand the cestus is on. This attack will be at a -2 to hit for clumsiness and a -2 to the attacker's Strength (for purposes of holding on) likewise.`,
                `Cestus, because it is simply a bonus to punching-type attacks, does not require weapon proficiency; anyone can use cesti with no proficiency penalty. Therefore, Specialization with Cestus costs only weapon proficiency slot.`,
                `In a culture where there is gladiatorial combat, cesti are readily available from weaponsmiths, but they are not exported, as they're such a basic weapon the market is not very good. Any foreign weaponsmith who has cesti described to him can make perfectly functional cesti; the first two cesti he makes will be at twice the listed cost, and subsequent ones will be at the listed cost.`
            ]
        }
    ]
})

WEAPONS.Chain[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Chain",
    footnote_marker: "&",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 3,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 5,
    rate_of_fire: "*",
    range: new Range("1/2", 1, 2),
    damage: new Damage("1d4+1", "1d4"),
    proficiencies: new Proficiencies({
        single: "Chain",
    }),
    pages: [60, 94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
        FIGHTERS_HANDBOOK_ASTRIX_ROF_SPECIAL,
        FIGHTERS_HANDBOOK_CHAIN_LASSO_NET,
        {
            pages: [101],
            text: [
                `**Chain**`,
                `This weapon is a 6' to 10' length of chain with weight at both ends. In combat, it's whirled very fast, the weighted end inflicting the damage on the target.`,
                `The chain combines some of the useful traits of melee weapons and the lasso. You can attack with it for normal Called Shots, Disarm, Parry, and Strike/Thrust maneuvers. Additionally, you can perform three of the lasso's five special functions: Pull/Trip by striking at the target's legs, Dismount a Rider, and Snag a Rider's Head.`,
                `The chain is easy to conceal, and (at least in western lands) is not usually recognized as a weapon until wielded as one.`,
                `The chain requires its own weapon proficiency, which is not related to any other weapon. Weapon specialization confers the usual bonuses.`,
                `Chains are to be found in any civilization with the technological skill to make them (this includes most *AD&D®* campaign settings), but the technique of fighting with them is mostly an eastern-culture development. A character would have to study with a practitioner of the technique, and be able to spend a weapon proficiency slot, in order to learn how to use the weapon.`
            ]
        }
    ]
})

WEAPONS.Dagger[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Dagger/Dirk",
    proficiencies: new Proficiencies({
        single: "Dagger/Dirk",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FENCING_BLADES, PROFICIENCIES.FIGHTERS.TIGHT.SHORT_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES, PROFICIENCIES.FIGHTERS.BROAD.SMALL_THROWING]
    }),
    pages: [59]
})

WEAPONS.Dagger_bone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Dagger Bone",
    footnote_marker: "!",
    cost: new Cost(1, CURRENCY.SP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d2", "1d2"),
    proficiencies: new Proficiencies({
        single: "Dagger/Dirk",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FENCING_BLADES, PROFICIENCIES.FIGHTERS.TIGHT.SHORT_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES, PROFICIENCIES.FIGHTERS.BROAD.SMALL_THROWING]
    }),
    pages: [59, 60, 94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        FIGHTERS_HANDBOOK_BONE_WEAPONS
    ]
})

WEAPONS.Dagger_stone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Dagger Stone",
    footnote_marker: "!",
    cost: new Cost(2, CURRENCY.SP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d3", "1d2"),
    proficiencies: new Proficiencies({
        single: "Dagger/Dirk",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FENCING_BLADES, PROFICIENCIES.FIGHTERS.TIGHT.SHORT_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES, PROFICIENCIES.FIGHTERS.BROAD.SMALL_THROWING]
    }),
    pages: [59, 60, 94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        FIGHTERS_HANDBOOK_STONE_WEAPONS
    ]
})

WEAPONS.Daikyu[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Daikyu",
    footnote_marker: "&",
    cost: new Cost(100, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.L,
    speed: 7,
    rate_of_fire: "2/1",
    proficiencies: new Proficiencies({
        single: "Daikyu",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.BOWS],
    }),
    pages: [59, 94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
        {
            pages: [101],
            text: [
                `**Daikyu**`,
                `The daikyu is the great samurai longbow. It's 7' long (hence it size designation as L). Its hand-grip is not in the center of the weapon; it's located closer to the bottom, so the daikyu can be fired from horseback and from kneeling positions.`,
                `As with the other bows, the daikyu can be used to perform the Called Shot, Disarm, Hold Attack, and Strike/Thrust (i.e., shoot) maneuvers.`,
                `The daikyu and katana are the two principal weapons of the samurai.`,
                `The daikyu requires its own weapons proficiency. It is related to, but not identical to, other bow proficiencies. Weapon specialization confers the usual benefits.`,
                `The daikyu is not exported from eastern nations. However, it is a simple task, if you are in such a nation, to commission the making of one. A western bowyer would have to have studied in the east to make one.`
            ]
        }
    ]
})

WEAPONS.Daikyu.ammunition.Daikyu_arrow[SOURCE.FIGHTERS_HANDBOOK.id] = new Ammunition({
    name: "Daikyu arrow",
    footnote_marker: "&",
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

const FIGHTERS_HANDBOOK_GAFF_HOOK_DESCRIPTION = {
    pages: [100],
    text: [
        `**Gaff/Hook**`,
        `The gaff is a metal hook with a wooden or metal crossbar at the base; it's held in one hand, the hook protruding between the middle and ring fingers, and normally used to hook and land fish.`,
        `However, like the belaying pin, it's in ready supply onboard a ship. Also, many pirates who lose a hand have a cup with a gaff on it attached to the stump, and so always have a weapon "on hand"—one that can't be dropped or Disarmed.`,
        `Proficiency with the gaff is not related to any other proficiency. Specialization grants the usual benefits.`
    ]
}
WEAPONS.Gaff_hook_attached[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Gaff/hook Attached",
    footnote_marker: "!",
    cost: new Cost(2, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    proficiencies: new Proficiencies({
        single: "Gaff/hook",
    }),
    pages: [60, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        FIGHTERS_HANDBOOK_GAFF_HOOK_DESCRIPTION
    ]
})

WEAPONS.Gaff_hook_held[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Gaff/hook Held",
    footnote_marker: "!",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    proficiencies: new Proficiencies({
        single: "Gaff/hook",
    }),
    pages: [60, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        FIGHTERS_HANDBOOK_GAFF_HOOK_DESCRIPTION
    ]
})

WEAPONS.Javelin_stone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Javelin, Stone",
    footnote_marker: "%",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 4,
    proficiencies: new Proficiencies({
        single: "Javelin",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.SPEARS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60,95],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
        FIGHTERS_HANDBOOK_STONE_WEAPONS,
    ]
})
WEAPONS.Javelin_stone.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    speed: 4,
    rate_of_fire: "1",
    range: new Range(2, 4, 6),
    damage: new Damage("1d4", "1d4"),
    pages: [94,95],
}
WEAPONS.Javelin_stone.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    speed: 4,
    damage: new Damage("1d4+1", "1d6"),
    pages: [95],
}
WEAPONS.Javelin_stone.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 1,
    // damage: new Damage("1d4+1", "1d6"),
    pages: [63],
}

WEAPONS.Knife[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Knife",
    proficiencies: new Proficiencies({
        single: "Knife/Stiletto",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FENCING_BLADES, PROFICIENCIES.FIGHTERS.TIGHT.SHORT_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES, PROFICIENCIES.FIGHTERS.BROAD.SMALL_THROWING]
    }),
    pages: [59,60]
})

WEAPONS.Knife_bone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Knife Bone",
    footnote_marker: "!",
    cost: new Cost(3, CURRENCY.CP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d2", "1d2"),
    proficiencies: new Proficiencies({
        single: "Knife/Stiletto",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FENCING_BLADES, PROFICIENCIES.FIGHTERS.TIGHT.SHORT_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES, PROFICIENCIES.FIGHTERS.BROAD.SMALL_THROWING]
    }),
    pages: [59,60,94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        FIGHTERS_HANDBOOK_BONE_WEAPONS
    ]
})

WEAPONS.Knife_stone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Knife Stone",
    footnote_marker: "!",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d2", "1d2"),
    proficiencies: new Proficiencies({
        single: "Knife/Stiletto",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FENCING_BLADES, PROFICIENCIES.FIGHTERS.TIGHT.SHORT_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES, PROFICIENCIES.FIGHTERS.BROAD.SMALL_THROWING]
    }),
    pages: [59,60,94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        FIGHTERS_HANDBOOK_STONE_WEAPONS
    ]
})

WEAPONS.Lasso[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Lasso",
    footnote_marker: "&",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 3,
    size: SIZE.L,
    speed: 10,
    rate_of_fire: "*",
    range: new Range(1, 2, 3),
    proficiencies: new Proficiencies({
        single: "Lasso",
    }),
    pages: [60, 94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
        FIGHTERS_HANDBOOK_ASTRIX_ROF_SPECIAL,
        FIGHTERS_HANDBOOK_CHAIN_LASSO_NET,
        {
            pages: [98,99],
            text: [
                `**Lasso**`,
                `The lasso, or lariat, is a length of rope with a loop at the end; the wielder holds the slack in his off-hand, twirls the lasso in his other hand, and hurls the loop at his target. on a successful hit, the lariat settles over the target, giving the wielder the chance to dismount him, pull him to the ground, trip him, etc.`,
                `In other words, when you attack someone with a lasso, you must declare what you're trying to accomplish with the attack.`,
                `If you're trying to trip him, you're trying to make the loop settle about his legs. This requires a Called Shot at the legs as per the Hit Locations section of the *Combat Rules* chapter.`,
                `If you hit, he must make a Dexterity ability roll, with the usual modifiers for the Pull/Trip maneuver; if he fails, he falls, and if he succeeds, he's able to jump out of your loop before it closes.`,
                `If you're trying to pin his arms to his sides, you're trying to make the loop settle about his torso and arms. This requires a Called Shot at the arms as per the Hit Locations section of the *Combat Rules* chapter.`,
                `If you hit, he must make a Strength ability roll, again with the usual modifiers for Pull/Trip. If he succeeds, he shrugs the loop off before you can pull it taut. If he fails, you can pull the loop taut. Both of his arms are pinned, as in the Pin maneuver. The target gets to struggle each round, also as per the Pin maneuver rules. Each additional lasso that hits the target to pin him gives him a -4 to his Strength ability for purposes of his struggling. When his Strength reaches 0, he has no chances of escaping.`,
                `If you're trying to dismount a rider, you're trying to make the loop settle about his torso—and then brace yourself for the impact (when his mount's movement reaches the end of your rope, both of you and he are going to be jarred). This doesn't require a Called Shot: You must merely hit your target normally.`,
                `If you hit, both you and the unfortunate rider must now make Strength ability rolls. If he rolls his better than you roll yours, the lasso is torn from your hands and you take 1d2 damage. If you roll yours better than he rolls his, you yank him from his saddle and he takes 1d3 from impact with the lasso and the earth. If you both make your roll by the same amount, then both results occur; the lasso is yanked from your hands, doing 1d2 to you, and he's yanked from his horse, taking 1d3. (Incidentally, if you've had time to tie your rope to an absolute stationary object, like a boulder, you don't have to roll against your Strength ability; you win this contest unless your target rolls a 1, in which case the rope breaks and he can ride off laughing.)`,
                `If you're trying to lasso a target's head (for example, when you're up in a tree and your target is an unsuspecting guard walking below), this is a Called Shot to his Head as per the usual rules.`,
                `If, after the modifiers, you still hit, you can yank for 1d3 damage (plus your Strength bonus). On subsequent rounds, you can yank for 1 point of damage each (plus your Strength bonus). But if you're in a position to hoist your target up in the air (for instance, if you're up on a tree-branch, lasso your victim, and then drop off the branch on the other side, holding onto the rope to hoist your victim up), you do your victim 1d4 points of strangulation damage per round (Strength bonus does not apply to this). If he can get his knife free and cut himself loose, that's good for him; if not, it's good for you. While strangling, a victim cannot shout or raise the alarm.`,
                `If you're trying to drop your loop around the head of a mounted rider... well, it's difficult, but possible. Make it as a standard Called Shot to the head.`,
                `If you hit, you must again make your Strength ability check. If he wins it, he takes 1d4 damage from the impact of the lasso around his neck going taut... but the lasso is still yanked from your hands, doing 1d2 to you, and he can ride off. If you win it, he takes 2d6 damage from the impact, and another 1d3 from hitting the ground, and he's dismounted. If you both make it by an equal amount, he takes 1d4, is dismounted and takes an additional 1d3, and you take 1d2 from the lasso being yanked out of your hands. (If, in this example, you've had time to tie the other end of your lasso to an absolutely stationary object, you target still gets his roll. On a 1, the rope breaks and he takes 1d4 damage. Otherwise, he's automatically dismounted and takes 3d6 damage.`,
                `Such a maneuver, hard as it is to set up, could easily break someone's neck, killing him instantly.)`,
                `In the chart above, the lasso was listed as a large weapon because of the amount of space it takes to twirl and wield it.`,
                `You cannot perform a Parry or Disarm with the lasso, or use it as a melee weapon for Pin—only at range.`,
                `Lasso requires its own weapon proficiency, which is not related to any other weapon proficiency. Weapon specialization gives you the normal +1 to hit with the lasso and +2 damage on all damaging effects of the lasso (strangulation after the initial hit is still only 1d4, not 1d4 + 2).`,
                `Cultures with gladiators are not the only ones which comes up with the lasso. Civilizations which depend heavily on herd-beasts often have the lasso as a weapon. In some cultures, the lasso is a favorite weapon of assassins. It's up to the DM to determine if the lasso is a weapon of the player-characters' culture.`,
                `If it is not, a PC need only train with someone who has proficiency with the weapon (and the PC must have a free weapon proficiency slot) in order to learn how to make and use the lasso.`
            ]
        }
    ]
})

WEAPONS.Main_gauche[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Main-gauche",
    footnote_marker: "!",
    cost: new Cost(3, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    proficiencies: new Proficiencies({
        single: "Main-gauche",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FENCING_BLADES, PROFICIENCIES.FIGHTERS.TIGHT.SHORT_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59, 60, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [104],
            text: [
                `**Main-gauche**`,
                `The main-gauche is a large-bladed dagger with a basket hilt (see the description of Cutlass, above) and large quillions. Though it is a stabbing weapon, it's primarily a defensive weapon wielded in the left-hand in two weapon technique (or two-weapon style specialization).`,
                `When used by someone with Main-gauche weapon proficiency, the weapon confers a +1 bonus to hit with the Disarm and Parry maneuvers. Because of its cutlass-like basket hilt, the main-gauche, too works like an iron gauntlet if the wielder wishes to punch someone with the hilt rather than slash with the blade.`,
                `Main-gauche proficiency is related to, but not identical to dagger proficiency. Specialization confers the usual benefits.`
            ]
        }
    ]
})

WEAPONS.Net[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Net",
    footnote_marker: "&",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    speed: 10,
    rate_of_fire: "*",
    range: new Range(1, 2, 3),
    proficiencies: new Proficiencies({
        single: "Net",
    }),
    pages: [60, 94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
        FIGHTERS_HANDBOOK_ASTRIX_ROF_SPECIAL,
        FIGHTERS_HANDBOOK_CHAIN_LASSO_NET,
        {
            pages: [99],
            text: [
                `**Net**`,
                `The gladiators' net consists of a small (8' to 12' diameter) circle net with weights around the edge and a trailing rope used for control. Customarily, it is folded in such a manner that it will twirl open when thrown; the gladiator throws it with one hand, keeping a grip on the trailing rope with the other.`,
                `If the gladiator makes his roll to hit, he has a Pin maneuver on his target (see the rules for Pin maneuver from the *Combat Rules* chapter). All the notes on Pin apply here, except one: the netted character may not make any sort of attack on the netter until he's won a Strength ability check and thrown the net off.`,
                `On the round after the gladiator has netted his opponent, he has a choice of what he wants to do.`,
                `He can hold onto the trailing rope with his off-hand (in order to maintain the Pin), pull out another weapon with his free hand, and attack his pray with that weapon. Eventually, his pray will probably win a Strength ability check and shrug that net off; in the meantime, the gladiator may get several rounds of unreturned attack on him.`,
                `Alternatively, he can try to improve his hold on the target. By continuing to loop the trailing rope around his victim, he can improve the capture until the victim has no chance of escape. To do this, he must make an ordinary roll to-hi against his victim's AC each round. On each successful hit, the victim loses 4 points of effective Strength for purposes of breaking free of the net. If the victim wins a Strength ability check against his captor before his Strength drops to 0, he breaks free (and his Strength is normal for all other purposes). If he fails, and his Strength is brought down to 0, he is hopelessly enmeshed in the net and cannot get out until his captor lets him.`,
                `When a gladiator throws a net and misses, it is open and unfolded. That doesn't mean he can no longer fight with it... but it is not as accurate, because it's not folded right. Each subsequent roll to hit with the unfolded net is at a -3 to hit.`,
                `Weapon proficiency with the net also gives you the ability to fold the net properly, and to make fighting-nets. Weapon Specialization gives you the normal +1 to hit; since it cannot give you a +2 to damage (the net doing no damage), you get that +2 as a bonus to your Strength when you're making Strength ability checks against netted prey.`,
                `Cultures with gladiatorial combat do export such weapons, and the knowledge of their use (gladiators do demonstrations and exhibitions in foreign capitals all the time). Also, cultures with no knowledge of gladiatorial combat independently develop the net weapon skill; at the DM's discretion, any character with the Savage warrior kit, the Hunter secondary skill or Hunting nonweapon proficiency, or any good rationale could spend a weapon proficiency slot to learn the use of the net.`
            ]
        }
    ]
})

WEAPONS.Nunchaku[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Nunchaku",
    footnote_marker: "!",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 3,
    damage: new Damage("1d6", "1d6"),
    proficiencies: new Proficiencies({
        single: "Nunchaku",
    }),
    pages: [60, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [102],
            text: [
                `**Nunchaku**`,
                `The nunchaku consists of two lengths of hard wood connected by a short length of chain or rope.`,
                `The weapon can be used to perform Called Shots, Disarm, Parry, and Strike/Thrust maneuvers.`,
                `Nunchaku requires its own proficiency, which is not related to any other weapons proficiency (including flails). Weapon specialization confers the usual benefits. Masters of the weapon often have weapon specialization in nunchaku and Style Specialization in Two-Weapons Style, giving them the ability to fight effectively with nunchaku in either hand. The only way to acquire this proficiency is to study with someone who already has the proficiency, and to have a proficiency slot available to spend on nunchaku.`,
                `Nunchaku are readily available in oriental ports, and such weapons are exported; western collectors are quite enthusiastic about them, even if these collectors usually cannot use them.`
            ]
        }
    ]
})

WEAPONS.Naginata[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Naginata",
    footnote_marker: "&#",
    sorting_group: "Polearm",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d8", "1d10"),
    proficiencies: new Proficiencies({
        single: "Naginata",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
        FIGHTERS_HANDBOOK_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        {
            pages: [101,102],
            text: [
                `**Naginata**`,
                `This is a polearm, a 6' to 8' shaft with a curved, sword-like blade at the end. It's the favored weapon of the female fighters of the orient, but they are not limited to it, nor is it limited to them.`,
                `Naginata proficiency is related to all other polearms. Weapon specialization confers the usual benefits.`,
                `Naginatas are readily available in oriental ports, and such weapons are readily exported, if the DM says there is a market for them.`
            ]
        }
    ]
})
WEAPONS.Naginata.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 4,
    // damage: new Damage("1d8", "1d10"),
    pages: [63],
}

WEAPONS.Tetsubo[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Tetsubo",
    footnote_marker: "&",
    sorting_group: "Polearm",
    cost: new Cost(2, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 7,
    damage: new Damage("1d8", "1d8"),
    proficiencies: new Proficiencies({
        single: "Tetsubo",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [95],

    descriptions: [
        FIGHTERS_HANDBOOK_AMPERSAND_TWO_HANDED_ONLY,
        {
            pages: [102],
            text: [
                `**Tetsubo**`,
                `The tetsubo is a long walking-staff, its upper end shod with studded iron strips.`,
                `Its weapon proficiency is related to other polearms; specialization confers the usual benefits.`,
                `Tetsubos can be had in oriental markets, but non are exported because it is a relatively simple weapon to make.`
            ]
        }
    ]
})
WEAPONS.Tetsubo.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 4,
    // damage: new Damage("1d8", "1d8"),
    pages: [63],
}

WEAPONS.Sai[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Sai",
    footnote_marker: "!",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 2,
    damage: new Damage("1d4", "1d2"),
    proficiencies: new Proficiencies({
        single: "Sai",
    }),
    pages: [60, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [102],
            text: [
                `**Sai**`,
                `This is a short, defensive weapon, consisting of a metal bar with a hilt, and oversized upward-curving quillions. When used by someone with proficiency in the weapon, sai confer a +1 to hit bonus when using the Pin and Disarm maneuvers.`,
                `In the chart at the start of this chapter, the Sai is listed as having two types of damage: P (piercing) and B (bludgeoning). That's not quite right; the normal sai is only a Bludgeoning-damage weapon. However, certain warriors prefer for it to be a sharp stabbing weapon, so the damage may be Piercing instead. A sai may only have one type of damage, not both.`,
                `Sai requires its own proficiency, which is not related to any other. Weapon specialization confers the usual benefits. To learn the proficiency, one must study with someone who has it, and the character must have a weapon proficiency slot to spend.`,
                `Many warriors proficient in the sai take Style Specialization in Two-Weapon technique and utilize twin sai in combat.`,
                `Sai are readily available in oriental ports, and are exported.`
            ]
        }
    ]
})

WEAPONS.Shuriken[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Shuriken",
    footnote_marker: "!",
    cost: new Cost(3, CURRENCY.SP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(2, 4, 6),
    damage: new Damage("1d4", "1d4"),
    proficiencies: new Proficiencies({
        single: "Shuriken",
        broad: [PROFICIENCIES.FIGHTERS.BROAD.SMALL_THROWING]
    }),
    pages: [60, 94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [102],
            text: [
                `**Shuriken**`,
                `Shuriken, often called throwing stars, are small thrown weapons. They do as much damage as a thrown dagger, and are considerably more concealable. Ornamental shuriken can often be worn as jewelry and not recognized as weapons, and a pocketful of shuriken weigh no more than many other single weapons.`,
                `However, shuriken require their own weapon proficiency, which is not related to any other. Weapon specialization confers the usual benefits. To learn shuriken proficiency, one must study with someone who has it, and must have a weapon proficiency slot to spend.`,
                `Shuriken are available in oriental ports, but must occidental collectors don't know how to use them.`
            ]
        }
    ]
})

WEAPONS.Spear_stone[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Spear, Stone",
    footnote_marker: "%",
    cost: new Cost(8, CURRENCY.CP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 6,
    proficiencies: new Proficiencies({
        single: "Spear",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.SPEARS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
        FIGHTERS_HANDBOOK_STONE_WEAPONS
    ]
})
WEAPONS.Spear_stone.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    speed: 6,
    rate_of_fire: "1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d4", "1d6"),
    pages: [94, 95],
}
WEAPONS.Spear_stone.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Handed",
    speed: 6,
    damage: new Damage("1d6", "2d4"),
    pages: [95],
}
WEAPONS.Spear_stone.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 3,
    // damage: new Damage("1d6", "2d4"),
    pages: [63],
}

WEAPONS.Stiletto[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Stiletto",
    footnote_marker: "!",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "2/1",
    range: new Range(1, 2, 3),
    damage: new Damage("1d3", "1d2"),
    proficiencies: new Proficiencies({
        single: "Knife/Stiletto",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FENCING_BLADES, PROFICIENCIES.FIGHTERS.TIGHT.SHORT_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES, PROFICIENCIES.FIGHTERS.BROAD.SMALL_THROWING]
    }),
    pages: [59, 60, 94, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [104],
            text: [
                `**Stiletto**`,
                `The stiletto is a type of narrow-bladed knife, sharp only at the point. Its most unusual trait is that it confers a +2 (non-magical) bonus to hit against certain armor types: Plate mail (bronze and normal), ring mail, and chain mail. (This is because of its narrow point and blade slip in more readily through any sort of armor that is not solid metal or overlapping plates of metal.)`,
                `It otherwise behaves like any other knife, and Knife weapon proficiency is exactly the same as Stiletto weapon proficiency: If you know one, you know the other equally well, at no additional cost in proficiency slots.`
            ]
        }
    ]
})

WEAPONS.Cutlass[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Cutlass",
    footnote_marker: "!",
    sorting_group: "Sword",
    cost: new Cost(12, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 5,
    damage: new Damage("1d6", "1d8"),
    proficiencies: new Proficiencies({
        single: "Cutlass",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.MEDIUM_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [100],
            text: [
                `**Cutlass**`,
                `The cutlass is a short, heavy sword, sharp along only one edge, with a heavy basket hilt (a protective cup) around the hilt to protect the hand.`,
                `The cutlass' basket hilt provides the following benefits: it gives the wielder a +1 to hit with Parry maneuver; and it works just the same as an iron gauntlet if the wielder wishes to punch someone with the hilt rather than slash with the blade. (See the Player's Handbook, pages 97-98. Bare-hand attacks do 1d2 damage, plus strength bonus, and the other effects of punching from the chart on page 97; metal gauntlets and other hand-protection makes that 1d3 plus strength bonus and punching effects. Note: An enchanted cutlass, say a *cutlass +1*, does not confer the +1 to hit and damage with these basket-hilt punches... only with blade attacks.)`,
                `Proficiency with Cutlass is related to proficiency with short sword, dagger/dirk, knife/stiletto, and main-gauche. Weapon Specialization with Cutlass is normal, except that you also get +1 to hit and +2 damage with those basket-hilt punches.`,
                `In a campaign with pirates, cutlasses are common and readily available in any port community; they are much less common inland.`
            ]
        }
    ]
})

WEAPONS.Short_sword[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Short sword",
    proficiencies: new Proficiencies({
        single: "Short sword/Drusus",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.SHORT_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59]
})

WEAPONS.Drusus[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Drusus",
    footnote_marker: "!",
    sorting_group: "Sword",
    cost: new Cost(50, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 3,
    damage: new Damage("1d6+1", "1d8+1"),
    proficiencies: new Proficiencies({
        single: "Short sword/Drusus",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.SHORT_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [96,98],
            text: [
                `**Drusus**`,
                `The Drusus is a Gladius (short sword) of Exceptional quality (as per the types of weapon quality described in the *Character Creation* chapter of this rule book). It looks just like an ordinary gladius; only be testing the sharpness of the blade can someone tell the difference. The Drusus has been forged so that the metal is better-tempered and holds an edge better, and then sharpened until it has a razorlike edge.`,
                `Because of this, it does +1 damage and confers a non-magical +1 to hit over the normal gladius. (This means the wielding character gets a +1 to hit when using the weapon, but the weapon does not give him the ability to hit monsters which require magical weapons to affect.)`,
                `The Drusus also has a disadvantage. In order to keep its keen edge, it must be regularly sharpened with a lot more attention and time than an ordinary weapon requires. After any day in which the Drusus has been fought with (even one attack!), someone with either the Armorer or Weaponsmithing nonweapon proficiency, must sharpen the blade for half an hour... or, on the next day, it will act as an ordinary short sword (losing its to-hit and damage bonus) until it is so sharpened.`,
                `Exposure to high heat (a smith's forge, dragon's breath, lava, etc.) will ruin the temper on a Drusus, turning it into an ordinary short sword and forever destroying its to-hit and damage bonus.`,
                `The Drusus uses the same weapon proficiency as the short sword. If a character can use a short sword, he can use a Drusus with equal proficiency. Weapon specialization with one does transfer to the other.`,
                `In cultures where there are gladiators, any weaponsmith with a weaponsmithing ability check of 14 or better can make a Drusus for the cost shown. These weapons are seldom exported, as local demand is high for the few made. A foreign weaponsmith could not make on merely if it were described to him; he would have to study with a local weaponsmith. Having done so, he could make the weapon.`
            ]
        }
    ]
})

WEAPONS.Katana[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Katana",
    footnote_marker: "%",
    sorting_group: "Sword",
    cost: new Cost(100, CURRENCY.GP),
    weight_lbs: 6,
    size: SIZE.M,
    type: [WEAPON_TYPE.S, WEAPON_TYPE.P],
    speed: 4,
    proficiencies: new Proficiencies({
        single: "Katana",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.LONG_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
        {
            pages: [101],
            text: [
                `**Katana**`,
                `The katana is the samurai's sword. It's a medium-length, slightly curved blade with no quillions (only a small, circular guard) and a hilt suitable for one-handed and two-handed use. The blade is sharpened only along one edge and at the tip, but it is sharpened to a razor's edge. It is forged with a special technique known only in the east, where layers of steel and iron are sandwiched, heated, folded, stretched, re-folded, stretched, re-folded, on and on until the blade consists of microscopically thin layers of alternating metals, providing strength, resilience, and the ability to hold a remarkable edge. This is why the katana has the excellent speed and damage listed for the weapon.`,
                `The katana requires its own weapon proficiency, which is related to the bastard sword/long blades group. Weapon specialization confers the usual benefits.`,
                `Katanas are very personal; a samurai is dishonored if he loses his, and so very few are lost. This means that it is very hard to get one in the west, other than by taking it from it owner... a difficult task. In the east, a character might be willing to commission one from a weaponsmith, for the listed price... if he gets a good reaction roll from the NPC. (An ordinary weaponsmith could not make one. The blade-making technique requires study in the east and the learning of a specialized individual weaponsmithing nonweapon proficiency.)`,
                `Also, a hero who does a favor or performs a mission for an eastern lord might be awarded a matched set of katana and wakizashi, if he's very lucky; this would be a high honor.`
            ]
        }
    ]
})
WEAPONS.Katana.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    speed: 4,
    damage: new Damage("1d10", "1d12"),
    pages: [95],
}
WEAPONS.Katana.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    speed: 4,
    damage: new Damage("2d6", "2d6"),
    pages: [95],
}
WEAPONS.Katana.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 1,
    // damage: new Damage("2d6", "2d6"),
    pages: [63],
}

WEAPONS.Rapier[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Rapier",
    footnote_marker: "!",
    sorting_group: "Sword",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 4,
    damage: new Damage("1d6+1", "1d8+1"),
    proficiencies: new Proficiencies({
        single: "Rapier",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FENCING_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59, 60, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [104],
            text: [
                `**Rapier**`,
                `The rapier is a long-bladed, one-handed sword, normally sharp only at the point. It's a thrusting weapon, wielded with lightning-like thrusts and lunges. Swashbucklers often learn Two-Weapon Style Specialization and use rapier with rapier, with main-gauche, with short sword, or with dagger, stiletto, or knife. It's also occasionally used with buckler.`,
                `Rapier requires its own proficiency, which is related to sabre proficiency—not long sword and its related weapons. Weapon specialization confers the usual benefits.`,
                `You can have a rapier made with a basket hilt. This adds 2 gp to the cost, +1 lb. to the weight, and confers the normal basket-hilt benefits: +1 to hit with Parry maneuver, and the iron-gauntlet benefit for Punching.`
            ]
        }
    ]
})

WEAPONS.Sabre[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Sabre",
    footnote_marker: "!",
    sorting_group: "Sword",
    cost: new Cost(17, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 4,
    damage: new Damage("1d6+1", "1d8+1"),
    proficiencies: new Proficiencies({
        single: "Sabre",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FENCING_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_EXCLAMATION_ONE_HANDED_ONLY,
        {
            pages: [104],
            text: [
                `**Sabre**`,
                `The sabre is a light slashing weapon. Its practitioners commonly use only sabre, and often take Single-Weapon Style Specialization and Sabre Weapon Specialization. They are very deadly with their blades and may be inordinately proud of the facial scars they accumulate (and deal out).`,
                `Sabre requires its own proficiency, which is related to rapier proficiency.`,
                `Sabres, like cutlasses and main-gauches, are made with a basket hilt. This confers the normal basket-hilt benefits: +1 to hit with Parry maneuver, and the iron-gauntlet benefit for Punching.`
            ]
        }
    ]
})

WEAPONS.Wakizashi[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Wakizashi",
    footnote_marker: "$",
    sorting_group: "Sword",
    cost: new Cost(50, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.S, WEAPON_TYPE.P],
    speed: 3,
    damage: new Damage("1d8", "1d8"),
    proficiencies: new Proficiencies({
        single: "Wakizashi",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.MEDIUM_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_DOLLAR_ONE_HANDED_OPTIONALLY_TWO_HANDED,
        {
            pages: [102],
            text: [
                `**Wakizashi**`,
                `The wakizashi is the short-sword companion of the katana. Its blade is forged the same way, and the weapon looks like a shorter version of the katana. It is often part of a matched set with the katana, and is of almost equal importance as the katana to the samurai. Only samurai can wear both katana and wakizashi`,
                `Wakizashi proficiency is related to short sword. Specialization confers the usual benefits. Many samurai fight with the katana in one hand and wakizashi in the other, in two-weapons technique, and some learn the two-weapon style specialization to further improve their ability with this style.`,
                `Wakizashis are as hard to come by as katanas.`
            ]
        }
    ]
})

// Catchup from PHB weapons

WEAPONS.Arquebus[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Arquebus",
    proficiencies: new Proficiencies({
        single: "Arquebus",
    }),
    pages: [60]
})

WEAPONS.Awl_pike[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Awl pike",
    proficiencies: new Proficiencies({
        single: "Awl pike",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Awl_pike.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 10,
    pages: [63],
}

WEAPONS.Bardiche[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Bardiche",
    proficiencies: new Proficiencies({
        single: "Bardiche",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Bardiche.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 6,
    pages: [63],
}

WEAPONS.Bastard_sword[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Bastard sword",
    proficiencies: new Proficiencies({
        single: "Bastard sword",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.LONG_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59]
})

WEAPONS.Battle_axe[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Battle axe",
    proficiencies: new Proficiencies({
        single: "Battle axe",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.AXES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.CLEAVING_CRUSHING]
    }),
    pages: [59, 60]
})
WEAPONS.Battle_axe.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    damage: new Damage("1d8+1", "1d8+1"),
    pages: [63]
}

WEAPONS.Bec_de_corbin[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Bec de corbin",
    proficiencies: new Proficiencies({
        single: "Bec de corbin",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Bec_de_corbin.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 6,
    pages: [63],
}

WEAPONS.Bill_guisarme[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Bill-guisarme",
    proficiencies: new Proficiencies({
        single: "Bill-guisarme",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Bill_guisarme.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 7,
    pages: [63],
}

WEAPONS.Blowgun[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Blowgun",
    proficiencies: new Proficiencies({
        single: "Blowgun",
    }),
    pages: [60]
})

WEAPONS.Club[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Club",
    proficiencies: new Proficiencies({
        single: "Club",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.CLUBBING],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.CLEAVING_CRUSHING]
    }),
    pages: [59, 60]
})
WEAPONS.Club.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    damage: new Damage("1d6+1", "1d3+1"),
    pages: [63]
}

WEAPONS.Composite_long_bow[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Composite long bow",
    proficiencies: new Proficiencies({
        single: "Composite long bow",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.BOWS],
    }),
    pages: [59]
})

WEAPONS.Composite_short_bow[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Composite short bow",
    proficiencies: new Proficiencies({
        single: "Composite short bow",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.BOWS],
    }),
    pages: [59]
})

WEAPONS.Long_bow[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Long bow",
    proficiencies: new Proficiencies({
        single: "Long bow",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.BOWS],
    }),
    pages: [59]
})

WEAPONS.Short_bow[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Short bow",
    proficiencies: new Proficiencies({
        single: "Short bow",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.BOWS],
    }),
    pages: [59, 60]
})

WEAPONS.Dart[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Dart",
    proficiencies: new Proficiencies({
        single: "Dart",
        broad: [PROFICIENCIES.FIGHTERS.BROAD.SMALL_THROWING]
    }),
    pages: [60]
})

WEAPONS.Fauchard[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Fauchard",
    proficiencies: new Proficiencies({
        single: "Fauchard",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Fauchard.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 5,
    pages: [63],
}

WEAPONS.Fauchard_fork[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Fauchard-fork",
    proficiencies: new Proficiencies({
        single: "Fauchard-fork",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Fauchard_fork.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 5,
    pages: [63],
}

WEAPONS.Footmans_flail[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Footman's flail",
    proficiencies: new Proficiencies({
        single: "Footman's flail",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FLAILS],
    }),
    pages: [59]
})
WEAPONS.Footmans_flail.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    damage: new Damage("1d6+2", "2d4+1"),
    pages: [63]
}

WEAPONS.Horsemans_flail[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Horseman's flail",
    proficiencies: new Proficiencies({
        single: "Horseman's flail",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FLAILS],
    }),
    pages: [59]
})
WEAPONS.Horsemans_flail.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    damage: new Damage("1d4+2", "1d4+2"),
    pages: [63]
}

WEAPONS.Footmans_mace[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Footman's mace",
    proficiencies: new Proficiencies({
        single: "Footman's mace",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.CLUBBING],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.CLEAVING_CRUSHING]
    }),
    pages: [59, 60]
})

WEAPONS.Horsemans_mace[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Horseman's mace",
    proficiencies: new Proficiencies({
        single: "Horseman's mace",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.CLUBBING],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.CLEAVING_CRUSHING]
    }),
    pages: [59, 60]
})
WEAPONS.Horsemans_mace.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    damage: new Damage("1d6+1", "1d4+1"),
    pages: [63]
}

WEAPONS.Footmans_pick[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Footman's pick",
    proficiencies: new Proficiencies({
        single: "Footman's pick",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.PICKS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.CLEAVING_CRUSHING]
    }),
    pages: [59, 60]
})
WEAPONS.Footmans_pick.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    damage: new Damage("1d6+2", "2d4+1"),
    pages: [63]
}

WEAPONS.Horsemans_pick[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Horseman's pick",
    proficiencies: new Proficiencies({
        single: "Horseman's pick",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.PICKS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.CLEAVING_CRUSHING]
    }),
    pages: [59, 60]
})
WEAPONS.Horsemans_pick.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    damage: new Damage("1d4+2", "1d4+1"),
    pages: [63]
}

WEAPONS.Glaive[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Glaive",
    proficiencies: new Proficiencies({
        single: "Glaive",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Glaive.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 5,
    pages: [63],
}

WEAPONS.Glaive_guisarme[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Glaive-guisarme",
    proficiencies: new Proficiencies({
        single: "Glaive-guisarme",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Glaive_guisarme.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 6,
    pages: [63],
}

WEAPONS.Guisarme[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Guisarme",
    proficiencies: new Proficiencies({
        single: "Guisarme",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Guisarme.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 5,
    pages: [63],
}

WEAPONS.Guisarme_voulge[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Guisarme-voulge",
    proficiencies: new Proficiencies({
        single: "Guisarme-voulge",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Guisarme_voulge.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 7,
    pages: [63],
}

WEAPONS.Halberd[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Halberd",
    proficiencies: new Proficiencies({
        single: "Halberd",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Halberd.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 6,
    pages: [63],
}

WEAPONS.Hand_axe[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Hand/throwing axe",
    proficiencies: new Proficiencies({
        single: "Hand/throwing axe",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.AXES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.CLEAVING_CRUSHING, PROFICIENCIES.FIGHTERS.BROAD.SMALL_THROWING]
    }),
    pages: [59, 60]
})

WEAPONS.Hand_crossbow[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Hand crossbow",
    proficiencies: new Proficiencies({
        single: "Hand crossbow",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.CROSSBOWS],
    }),
    pages: [59]
})

WEAPONS.Heavy_crossbow[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Heavy crossbow",
    proficiencies: new Proficiencies({
        single: "Heavy crossbow",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.CROSSBOWS],
    }),
    pages: [59]
})

WEAPONS.Light_crossbow[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Light crossbow",
    proficiencies: new Proficiencies({
        single: "Light crossbow",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.CROSSBOWS],
    }),
    pages: [59]
})

WEAPONS.Heavy_horse_lance[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Heavy horse lance",
    proficiencies: new Proficiencies({
        single: "Heavy horse lance",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.LANCES],
    }),
    pages: [59]
})

WEAPONS.Medium_horse_lance[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Medium horse lance",
    proficiencies: new Proficiencies({
        single: "Medium horse lance",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.LANCES],
    }),
    pages: [59]
})

WEAPONS.Light_horse_lance[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Light horse lance",
    proficiencies: new Proficiencies({
        single: "Light horse lance",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.LANCES],
    }),
    pages: [59]
})

WEAPONS.Jousting_lance[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Jousting lance",
    proficiencies: new Proficiencies({
        single: "Jousting lance",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.LANCES],
    }),
    pages: [59]
})

WEAPONS.Hook_fauchard[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Hook fauchard",
    proficiencies: new Proficiencies({
        single: "Hook fauchard",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Hook_fauchard.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 6,
    pages: [63],
}

WEAPONS.Khopesh[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Khopesh",
    proficiencies: new Proficiencies({
        single: "Khopesh",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.MEDIUM_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59]
})

WEAPONS.Long_sword[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Long sword",
    proficiencies: new Proficiencies({
        single: "Long sword",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.LONG_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59]
})
WEAPONS.Long_sword.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    damage: new Damage("1d8+1", "1d12+1"),
    pages: [63]
}

WEAPONS.Lucern_hammer[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Lucern hammer",
    proficiencies: new Proficiencies({
        single: "Lucern hammer",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Lucern_hammer.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 6,
    pages: [63],
}

WEAPONS.Mancatcher[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Mancatcher",
    proficiencies: new Proficiencies({
        single: "Mancatcher",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Mancatcher.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 4,
    pages: [63],
}

WEAPONS.Military_fork[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Military fork",
    proficiencies: new Proficiencies({
        single: "Military fork",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Military_fork.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 4,
    pages: [63],
}

WEAPONS.Morning_star[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Morning star",
    proficiencies: new Proficiencies({
        single: "Morning star",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.CLUBBING],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.CLEAVING_CRUSHING]
    }),
    pages: [59, 60]
})
WEAPONS.Morning_star.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    damage: new Damage("2d4+1", "1d6+1"),
    pages: [63]
}

WEAPONS.Partisan[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Partisan",
    proficiencies: new Proficiencies({
        single: "Partisan",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Partisan.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 6,
    pages: [63],
}

WEAPONS.Quarterstaff[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Quarterstaff",
    proficiencies: new Proficiencies({
        single: "Quarterstaff/Bo stick",
    }),
    pages: [60]
})
WEAPONS.Quarterstaff.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 1,
    pages: [63],
}

WEAPONS.Ranseur[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Ranseur",
    proficiencies: new Proficiencies({
        single: "Ranseur",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Ranseur.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 5,
    pages: [63],
}

WEAPONS.Scimitar[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Scimitar",
    proficiencies: new Proficiencies({
        single: "Scimitar",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.LONG_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59]
})

WEAPONS.Scourge[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Scourge",
    proficiencies: new Proficiencies({
        single: "Scourge",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.WHIPS],
    }),
    pages: [59]
})

WEAPONS.Whip[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Whip",
    proficiencies: new Proficiencies({
        single: "Whip",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.WHIPS],
    }),
    pages: [59]
})

WEAPONS.Sling[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Sling",
    proficiencies: new Proficiencies({
        single: "Sling",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.SLINGS],
    }),
    pages: [59]
})

WEAPONS.Staff_sling[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Staff Sling",
    proficiencies: new Proficiencies({
        single: "Staff Sling",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.SLINGS],
    }),
    pages: [59]
})

WEAPONS.Spetum[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Spetum",
    proficiencies: new Proficiencies({
        single: "Spetum",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Spetum.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 5,
    pages: [63],
}

WEAPONS.Two_handed_sword[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Two-handed sword",
    proficiencies: new Proficiencies({
        single: "Two-handed sword",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.LONG_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES]
    }),
    pages: [59]
})
WEAPONS.Two_handed_sword.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 7,
    pages: [63],
}

WEAPONS.Voulge[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Voulge",
    proficiencies: new Proficiencies({
        single: "Voulge",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.POLEARMS],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.POLE_WEAPONS]
    }),
    pages: [59, 60]
})
WEAPONS.Voulge.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 7,
    pages: [63],
}

WEAPONS.Warhammer[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Warhammer",
    proficiencies: new Proficiencies({
        single: "Warhammer",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.CLUBBING],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.CLEAVING_CRUSHING]
    }),
    pages: [59, 60]
})
WEAPONS.Warhammer.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    damage: new Damage("1d4+2", "1d4+1"),
    pages: [63]
}

//#endregion Fighter's Handbook

module.exports = WEAPONS;