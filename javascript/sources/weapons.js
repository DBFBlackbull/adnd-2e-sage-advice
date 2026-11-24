const {SOURCE, CURRENCY, SIZE, WEAPON_TYPE, HANDEDNESS, STRENGTH_BONUS, SAGE_ADVICE} = require('../constants')

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
            images,
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
        this.images = images
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
            images,
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
        this.images = images
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
WEAPONS.Bill = {};
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
WEAPONS.Boku_toh = {};
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
WEAPONS.Caltrop = {};
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
WEAPONS.Dagger_parrying = {};
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
WEAPONS.Jitte = {};
WEAPONS.Knife = {};
WEAPONS.Knife_bone = {};
WEAPONS.Knife_stone = {};
WEAPONS.Heavy_horse_lance = {};
WEAPONS.Light_horse_lance = {};
WEAPONS.Jousting_lance = {};
WEAPONS.Medium_horse_lance = {};
WEAPONS.Maul = {};
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
WEAPONS.Sap = {};
WEAPONS.Scourge = {};
WEAPONS.Scythe = {};
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
        Stinkpot: {},
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
WEAPONS.Claymore = {};
WEAPONS.Cutlass = {};
WEAPONS.Drusus = {};
WEAPONS.Falchion = {};
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

const PHB_IMAGE_POLEARM_SPEAR = {
    pages: [98],
    image: 'phb_polearm_spear.png'
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
        `**Bows:** Bows come in various shapes and sizes. The power of a bow is measured by its pull. The greater the pull, the more Strength needed to work the bow. Thus, it is possible for characters to have bows that grant them damage bonuses for high Strength (it is assumed the character has chosen a bow that has a greater pull). Likewise, characters with low Strengths suffer their usual penalties when using a bow (they are forced to use weaker bows or simply cannot draw back as far). The pull of a bow seldom prevents a character from using the weapon, only from gaining the full effect. The true test of a character's Strength comes in stringing a bow—the bow of a strong hero may simply be un string able by a lesser man (as was Odysseus's).`,
        `Heavier pull bows are not normally any more expensive than standard bows. The exceptions to this are those bows that enable the fighter to gain bonuses for exceptional Strength (18/01 or greater). These bows must be custom crafted and cost three to five times the normal price. These bows are also difficult to string or use effectively for those without exceptional Strength. These characters must roll a successful bend bars/lift gates roll to string or use such weapons (again, think of the test of the suitors in Odysseus's household).`
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
    speed: 7,
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
            ],
            comment: `Annoying that mancatcher is listed as dealing no damage, when the description says it deals 1d2 damage. Now it might be at the end of the round and not on hit technically, but it would be nice to have this information up front.`
        }
    ],
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
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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
    ],
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
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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
            text: [`**Military fork:** This is one of the simplest modifications of a peasant's tool since it is little more than a pitchfork fixed to a longer shaft. With tines strengthened and straightened, the military fork serves well. The need for cutting and cleaving eventually often results in combining the fork with other weapons.`]
        }
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
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

    descriptions: [
        PHB_RELATED_WEAPONS
    ],

    images: [
        PHB_IMAGE_POLEARM_SPEAR
    ]
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
    speed: 9,
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
    text: [`The "&ast;" means the weapon doesn't precisely have a rate of fire; it may be used as often as the character's level (and perhaps specialization) dictates for a melee weapon.`]
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

const FIGHTERS_HANDBOOK_ONE_HAND_THROW = {
    pages: [94],
    text: [
        `The Harpoon, Javelin, Spear, and Trident can all be thrown, but the thrown weapon damage is always the one-handed damage, never the two-handed damage.`
    ]
}

const FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED = {
    pages: [63],
    text: [
        `**Two-Hander Style - Style Specialization**`,
        `You can, by devoting a weapon proficiency to it, take a Style Specialization with Two-Hander Style.`,
        `Style Specialization with Two-Hander Style gives you a very specific benefit: When you're using a weapon two-handed, that weapon's Speed Factor is reduced by 3.`,
        `For example, a fighter with Two-Hander Style Specialization and wielding a Bastard Sword can wield his weapon faster in two-handed style than in one-handed style. Used in one hand, the Bastard Sword has a Speed Factor of 6. In two hands (normally), it has a Speed Factor of 8. But used in two hands by someone with Two-Hander Style Specialization, it has a Speed Factor of (8-3) 5.`,
        `This is because when a fighter wields such a weapon with both hands on the hilt, he has more leverage on the blade and can move it faster. That's what Style Specialization in Two-Hander Style will do for the character: It teaches him how to use the weapon much faster and more aggressively than someone with less specialized training in the weapon.`
    ]
}

const FIGHTERS_HANDBOOK_2H_STYLE_SPEC_ONE_HANDER = {
    pages: [63],
    text: [
        `**Two-Hander Style - One-Handed Weapons Used Two-Handed**`,
        `Some players don't realize that many other one-handed weapons can also be used two-handed. Since these weapons don't do anymore damage two-handed, there usually isn't much reason to use this way; however, with Style Specialization in Two-Hander Style, now there's a reason.`,
        `If you specialize in Two-Hander Style and then use a one-handed weapon in two hands, you also get a bonus of +1 to damage. Thus, if you take Two-Hander Style Specialization, when using a long sword two-handed, you do 1d8+1 damage instead of the base 1d8 (or 1d12+1 vs. large targets, instead of the base 1d12).`,
        `The one-handed weapons which can be used two-handed in this fashion include: Battle axe, Club, Footman's flail, Footman's pick, Horseman's flail, Horseman's mace, Horseman's pick, Morning star, Longsword, Warhammer.`
    ],
    comment: `It seems inconsistent that Footman's mace is not on the list when all 3 Horseman's weapons are on the list.`
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
    pages: [59, 60, 93],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Harpoon.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    speed: 7,
    damage: new Damage("1d4+1", "1d6+1"),
    pages: [93, 94],

    descriptions: [FIGHTERS_HANDBOOK_ONE_HAND_THROW]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
    pages: [59, 60, 93],

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

    descriptions: [FIGHTERS_HANDBOOK_ONE_HAND_THROW]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
    pages: [59, 60, 93],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Spear.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    speed: 6,
    damage: new Damage("1d6", "1d8"),
    pages: [93],

    descriptions: [
        FIGHTERS_HANDBOOK_ONE_HAND_THROW
    ]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
    pages: [59, 60, 93, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_PERCENTAGE_ONE_OR_TWO_HANDED,
    ]
})
WEAPONS.Long_spear.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "One-handed",
    speed: 8,
    damage: new Damage("1d8", "1d8+1"),
    pages: [93, 95],
}
WEAPONS.Long_spear.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-handed",
    footnote_marker: "#",
    speed: 8,
    damage: new Damage("2d6", "3d6"),
    pages: [93, 95],

    descriptions: [
        FIGHTERS_HANDBOOK_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE
    ]
}
WEAPONS.Long_spear.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 5,
    // damage: new Damage("2d6", "3d6"),
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
    pages: [59, 60, 93],

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

    descriptions: [FIGHTERS_HANDBOOK_ONE_HAND_THROW]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
    pages: [59, 60, 95],

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
            pages: [100, 101],
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
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
    proficiencies: new Proficiencies({single: "No Proficiency",}),
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
    name: "Attached",
    footnote_marker: "!",
    sorting_group: "Gaff/hook",
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
    name: "Held",
    footnote_marker: "!",
    sorting_group: "Gaff/hook",
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
    pages: [59, 60, 95],

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
    pages: [94, 95],

    descriptions: [FIGHTERS_HANDBOOK_ONE_HAND_THROW]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
}

WEAPONS.Knife[SOURCE.FIGHTERS_HANDBOOK.id] = new Weapon({
    name: "Knife",
    proficiencies: new Proficiencies({
        single: "Knife/Stiletto",
        tight: [PROFICIENCIES.FIGHTERS.TIGHT.FENCING_BLADES, PROFICIENCIES.FIGHTERS.TIGHT.SHORT_BLADES],
        broad: [PROFICIENCIES.FIGHTERS.BROAD.BLADES, PROFICIENCIES.FIGHTERS.BROAD.SMALL_THROWING]
    }),
    pages: [59, 60]
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
    pages: [59, 60, 94, 95],

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
    pages: [59, 60, 94, 95],

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
            pages: [98, 99],
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
            pages: [101, 102],
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_ONE_HAND_THROW]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
            pages: [96, 98],
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
WEAPONS.Bastard_sword.grip[HANDEDNESS.TWO_HANDED_SPECIALIZATION.id][SOURCE.FIGHTERS_HANDBOOK.id] = {
    name: "Two-Hander Style Specialization",
    speed: 5,
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
}

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
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_ONE_HANDER]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_ONE_HANDER]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_ONE_HANDER]
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
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_ONE_HANDER]
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
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_ONE_HANDER]
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
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_ONE_HANDER]
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
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_ONE_HANDER]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_ONE_HANDER]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_ONE_HANDER]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_SPEED]
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
    pages: [63],

    descriptions: [FIGHTERS_HANDBOOK_2H_STYLE_SPEC_ONE_HANDER]
}

//#endregion Fighter's Handbook

//#region Priest's Handbook
const PRIESTS_HANDBOOK_FULL_STAR_ONE_HANDED = {
    pages: [124],
    text: [
        `✬ This weapon is intended for one-handed use, and may not be used two-handed. In the case of nunchaku, two-handed flourishes are common, but blows are struck with one hand only at a time.`
    ]
}

const PRIESTS_HANDBOOK_EMPTY_STAR_TWO_HANDED = {
    pages: [124],
    text: [`⭐︎ This weapon is intended for two-handed use only.`]
}

WEAPONS.Bill[SOURCE.PRIESTS_HANDBOOK.id] = new Weapon({
    name: "Bill",
    footnote_marker: "✬",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    proficiencies: new Proficiencies({single: "Bill"}),
    pages: [124],

    descriptions: [
        PRIESTS_HANDBOOK_FULL_STAR_ONE_HANDED,
        {
            pages: [124],
            text: [`The **Bill** is a short hook on a short cross-handle, and is a weapon derived from the sort of hook used to spear and haul in fish or to carry sides of meat around.`]
        }
    ]
});

WEAPONS.Lasso[SOURCE.PRIESTS_HANDBOOK.id] = new Weapon({
    name: "Lasso",
    footnote_marker: "⭐︎",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 3,
    size: SIZE.L,
    speed: 10,
    proficiencies: new Proficiencies({single: "Lasso"}),
    pages: [124],

    descriptions: [
        PRIESTS_HANDBOOK_EMPTY_STAR_TWO_HANDED,
        {
            pages: [124],
            text: [`The **Lasso** is a rope with a loop at the end; it's thrown at targets, and on a successful hit the loop settles around the target. The wielder can then pull the rope taut and seriously inconvenience his target. Extensive rules for the lasso appear in the *The Complete Fighter's Handbook*.`]
        }
    ]
});

WEAPONS.Maul[SOURCE.PRIESTS_HANDBOOK.id] = new Weapon({
    name: "Maul",
    footnote_marker: "⭐︎",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 9,
    damage: new Damage("2d4", "1d10"),
    proficiencies: new Proficiencies({single: "Maul"}),
    pages: [124],

    descriptions: [
        PRIESTS_HANDBOOK_EMPTY_STAR_TWO_HANDED,
        {
            pages: [124],
            text: `The **Maul** is a polearm with a heavy bludgeoning head at the end. It is therefore a Bludgeoning weapon, and is appropriate for the use of clerics and specific priests who aren't allowed to use bladed weapons. When a priesthood allows the use of polearms, this includes the maul (and the mancatcher, for that matter); but when maul alone is listed, the priest cannot use the other polearms.`
        }
    ]
});

WEAPONS.Net[SOURCE.PRIESTS_HANDBOOK.id] = new Weapon({
    name: "Net",
    footnote_marker: "⭐︎",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    speed: 10,
    proficiencies: new Proficiencies({single: "Net"}),
    pages: [124],

    descriptions: [
        PRIESTS_HANDBOOK_EMPTY_STAR_TWO_HANDED,
        {
            pages: [124],
            text: [
                `The **Net** is a weighted combat net on the end of a rope. Like the lasso, it is thrown to spread over a target; if it hits, it can be pulled closed, and the trailing rope used to pull the victim around. Also like the lasso, extensive rules for this weapon's use appear in *The Complete Fighter's Handbook*.`
            ]
        }
    ]
})

WEAPONS.Nunchaku[SOURCE.PRIESTS_HANDBOOK.id] = new Weapon({
    name: "Nunchaku",
    footnote_marker: "✬",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 3,
    damage: new Damage("1d6", "1d6"),
    proficiencies: new Proficiencies({single: "Nunchaku"}),
    pages: [124],

    descriptions: [
        PRIESTS_HANDBOOK_FULL_STAR_ONE_HANDED,
        {
            pages: [124],
            text: [
                `The **Nunchaku** is an oriental weapon and only suitable for oriental-based campaigns. It consists of two wooden handles connected by a short chain or short length of cord. It was originally derived from an agricultural implement, which is why so many priests of nature-oriented gods can use it.`
            ]
        }
    ]
});

WEAPONS.Scythe[SOURCE.PRIESTS_HANDBOOK.id] = new Weapon({
    name: "Scythe",
    footnote_marker: "⭐︎",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.M,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 8,
    damage: new Damage("1d6+1", "1d8"),
    proficiencies: new Proficiencies({single: "Scythe"}),
    pages: [124],

    descriptions: [
        PRIESTS_HANDBOOK_EMPTY_STAR_TWO_HANDED,
        {
            pages: [124],
            text: [
                `The **Scythe** is a large, curving blade that is sharp only on the underside of the blade (the concave edge); the blade is attached to a twisted pole some 5-6' in length. The wielder uses the weapon two-handed. The scythe is a harvesting tool used by farmers to cut down their grain; as a weapon, it is symbolic of gods of agriculture, time, and death.`
            ]
        }
    ]
})
//#endregion

//#region SageAdvice158
WEAPONS.Scythe[SAGE_ADVICE.ISSUE_158.id] = new Weapon({
    name: "Scythe",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 10,
    damage: new Damage("2d4", "1dG"),
    proficiencies: new Proficiencies({single: "Scythe"}),
    pages: [71],

    descriptions: [
        {
            pages: [71],
            text: [
                `... In a character's hands, a scythe makes a cumbersome weapon at best. I suggest the following statistics: cost 5 gp; weight 7 lbs.; size L; type P/S (the blade has both a curved cutting edge and a sharp point); speed factor 10; damage 2d4 (S-M)/1dG (L).`
            ]
        }
    ],

    comment: `The release of this magazine comes only one month after the release of *The Complete Priest's Handbook*. It is very likely that the question for this Sage Advice was posted and answered well before the *Priest's Handbook* was released, or that Skip Williams was not aware of of the statistics of the book. The Sage Advice really says "1dG", clearly a typo.`
})
//#endregion

//#region Wizard's Handbook
WEAPONS.Bo_stick[SOURCE.WIZARDS_HANDBOOK.id] = new Weapon({
    name: "Bo stick",
    cost: new Cost(2, CURRENCY.CP),
    weight_lbs: 4,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 3,
    damage: new Damage("1-6", "1-4"),
    proficiencies: new Proficiencies({single: "Bo stick"}),
    pages: [48],

    descriptions: [
        {
            pages: [48],
            text: [`Bo stick: A staff of hard wood that is very difficult to break and is normally 6-7 feet in length.`]
        }
    ]
})

WEAPONS.Boku_toh[SOURCE.WIZARDS_HANDBOOK.id] = new Weapon({
    name: "Boku-toh",
    cost: new Cost(6, CURRENCY.CP),
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 4,
    damage: new Damage("1-4", "1-2"),
    proficiencies: new Proficiencies({single: "Boku-toh"}),
    pages: [48],

    descriptions: [
        {
            pages: [48],
            text: [`Boku-toh: A wooden replica of a short sword, usually used for practice since it cannot cut or slash. Used aggressively, it can cause bludgeoning damage..`]
        }
    ]
});

WEAPONS.Jitte[SOURCE.WIZARDS_HANDBOOK.id] = new Weapon({
    name: "Jitte",
    cost: new Cost(10, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    speed: 2,
    damage: new Damage("1-4", "1-2"),
    proficiencies: new Proficiencies({single: "Jitte"}),
    pages: [48],

    descriptions: [
        {
            pages: [48],
            text: [`Jitte: A tapered iron bar with a short hook near the handle. Although the hook is not sharp enough to cut or pierce, the jitte can be used to strike blows.`]
        }
    ]
})

WEAPONS.Shuriken[SOURCE.WIZARDS_HANDBOOK.id] = new Weapon({
    name: "Shuriken",
    cost: new Cost(10, CURRENCY.SP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    rate_of_fire: "2/1",
    range: new Range(5, 10, 20),
    damage: new Damage("1-6", "1-4"),
    proficiencies: new Proficiencies({single: "Shuriken"}),
    pages: [48],

    descriptions: [
        {
            pages: [48],
            text: [`Shuriken: A small throwing weapon in the shape of a star with needle-like projections. They are thrown by hand and easily concealed in folds of clothing. A shuriken has a fire rate of 2, a short range of 5 yards, a medium range of 10 yards, and a long range of 20 yards.`]
        }
    ]
})
//#endregion

//#region Arms and Equipment
const AEG_ASTERISK_DOUBLE_DAMAGE_AGAINST_L_CHARGE = {
    pages: [109],
    text: [`&ast; This weapon inflicts double damage against charging creatures of L or greater size.`]
}

const AEG_2xASTERISK_DISMOUNT_RIDER = {
    pages: [109],
    text: [`&ast;&ast; This weapon can dismount a rider on a successful hit.`]
}

const AEG_3xASTERISK_ALLOWED_BY_DM = {
    pages: [109],
    text: [`&ast;&ast;&ast; This weapon available only if allowed by the DM.`]
}

const AEG_AT_DOUBLE_DAMAGE_CHARGING_MOUNT = {
    pages: [109],
    text: [`@ This weapon inflicts double damage when used from the back of a charging mount.`]
}

const AEG_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE = {
    pages: [109],
    text: [`# This weapon inflicts double damage when firmly set to receive a charge.`]
}

const AEG_ATTRIBUTE = {
    INTERVIEW: "interview",
    HISTORY: "history"
}

WEAPONS.Arquebus[SOURCE.AEG.id] = new Weapon({
    name: "Arquebus",
    footnote_marker: "***",
    cost: new Cost(500, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 15,
    rate_of_fire: "1/3",
    damage: new Damage("1d10", "1d10"),
    proficiencies: new Proficiencies({single: "Arquebus"}),
    pages: [53, 108],

    descriptions: [
        AEG_3xASTERISK_ALLOWED_BY_DM,
        {
            pages: [53,54],
            text: [
                `**Arquebus**`,
                `The arquebus is a musket used by cultures just learning the technology of guns. It is a two-handed weapon, fired like a rifle except that the arms absorb the recoil, not the shoulders, since the weapon does not rest on the latter. The gun is also called a “hackbut.”`,
                `Years after its development, the term “arquebus” expanded to include handguns of the same era, and eventually the word lost its original meaning and was used instead to describe small handguns used by cavalry. In term of AD&D® game campaigns, the arquebus refers to the large, two-handed primitive gun with a smooth bore barrel as opposed to a rifled barrel. Hence, the gun is technically not a rifle. This form of arquebus often has a hooklike projection on the underside of its barrel.`,
                `The arquebus was developed in order to give the average infantry the use of smoke powder, whose destructive potential is only newly recognized in many areas.`,
                `The musket arquebus is loaded by pouring smoke powder from a flask or horn into the muzzle and firmly packing it with a piece of paper. The projectile, an iron ball, is rammed in after this. Once the barrel is ready, the pan is filled with smoke powder, the pan's cover is closed, and a burning slow-match (a piece of cloth or paper rolled into a fuse) is placed in the mechanism called the serpentine (the curved piece of metal where the trigger would someday be on a modern rifle). Pressure on the metal plate releases the serpentine into the pan, and BOOM!`,
                `Since this weapon involves smoke powder, DMs may forbid its use. Players should check with their DM as to weather it is allowed in the campaign.`,
                `Smoke powder is considered a magical item. The historical arquebus required two types of gunpowder, a finer variety for pan loading and a coarse variety for muzzle loading. Each type was carried in a separate container. If the DM desired, the gunner may require the two different powder types in order to operate the arquebus.`,
                `The arquebus is a very dangerous instrument, nearly as dangerous to the user as to the target. In order to reload, the gunner has to hold the smoldering slow-match in his left hand while reloading with his right. A slow-match burn for eight rounds.`,
                `An arquebus can be fired only once every three rounds providing the character is not being attacked while loading. Treat the gunner the same as a spellcaster casting a very long spell. When firing an arquebus, all range penalties are doubled.`,
                `If an arquebus attack roll is a 1 or 2, the gun backfires, inflicting 1d6 points of damage to the gunner. It is also fouled and cannot be used until cleaned, a process which takes at least 30 minutes (and relative peace).`,
                `When an arquebus scores a hit, it does 1-9 points of damage on 1d10. If a 10 is rolled, the die is rolled again and this amount is added to the 10. Each time a 10 is rolled, the die is rolled again and added to the total.`,
                `There is no Strength modifiers to an arquebus' damage.`,
                `If the arquebus' smoke powder is exposed to water, the powder is ruined.`
            ]
        },
        {
            pages: [54],
            text: [
                `*“As far as many folk are concerned, smoke powder and magic don't mix! Sure, the arquebus is a newfangled weapon, but not all new things are necessarily better! With an arquebus, the firer has to take time to reload, unless he wants to have someone tag along and supply him with an extra arquebus, already loaded, in order to keep up a steady rate of fire. Oh, certainly that can be done—or the more intelligent adventurer will go out and get himself a long bow which fires arrows quicker than an arquebus can throw shot, and has comparable range! As far as can be determined, the arquebus is good for making god-awful noise that will either scare the Nine Hells out of any enemy, or possibly anger the target into attacking with even more ferocity.”*`,
                `*— Grymwand, Professional Mercenary*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        },
        {
            pages: [54],
            text: [
                `The arquebus gets its name from the German Hakenbuchse, meaning “gun with a hook.”`
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Battle_axe[SOURCE.AEG.id] = new Weapon({
    name: "Battle Axe",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 7,
    damage: new Damage("1d8", "1d8"),
    proficiencies: new Proficiencies({single: "Battle Axe"}),
    pages: [108],

    descriptions: [
        {
            pages: [54,55],
            text: [
                `**Battle Axe**`,
                `Contrary to popular artwork, the most common version of the battle axe is a stout pole about four feet in length with a single-edged, trumpet-shaped blade mounted on one end. Battle axes are also called broad axes.`,
                `The battle axe is a footman's weapon, giving these soldiers a longer reach and a fighting chance against mounted opponents. Its long handle allows the wielder to put considerable force into his swing. Despite the shaft length, a battle axe is a one-handed weapon.`,
                `The typical dwarven battle axe is a double bladed weapon, usually with a spiked top. Dwarves favor these weapons since the long handles compensate somewhat for the shorter dwarven stature, especially against large humanoid opponents. They are often wielded with two hands. In many dwarven cultures, the battle axe is a symbol of dwarven might.`,
                `A thrust with the spiked head of a battle axe inflicts 1d3 hit points of damage.`,
                `Dwarves are not the only race that favors the battle axe. Gnolls often are encountered with battle axes. Troglodytes use a stone version of the battle axe, with all of the disadvantages of stone weapons (i.e., prone to chipping and shattering).`,
                `Two-handed battle axes have the same statistics as the bardiche. They are called “great axes.”`
            ],
        },
        {
            pages: [55,56],
            text: [
                `*“Though the battle axe is a one-handed weapon, its longer handle, which gives it good momentum, is not a good horseman's weapon, as the wielder has to put a lot of his weight into the swing, something hard to do from a saddle. It is also useless as a missile weapon. Still, its damage is respectable, and it looks nasty, especially the dwarven styles. A battle axe is good for the foot soldier or adventurer who needs to strike at a large creature or at someone on horseback.*`,
                `*“Battle axes are good for their percussive and cutting effects against armor. If adventurers want to use a battle axe and still gain some measure of protection, it is wise to fight alongside a companion who is armored with a sword and shield. The companion acts as the axe-wielder's defense while the latter is busy chopping away. This is a good exercise in teamwork, which may keep both adventurers alive much longer.*`,
                `*“As for dwarves, out center of gravity is low enough that we can swing a battle axe and not topple over from the momentum. It is a fine weapon for heaving the legs of a giant out under him. and it is a weapon that lets us put all of out weight into the swing.”*`,
                `*— Dagalor Goldenbeard, of the Dwarven Clan Goldenbeard*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        },
        {
            pages: [56],
            text: [
                `The battle axe has the distinction of being one of the oldest tools and weapons of man. The first battle axe dates back about 35,000 years, when weaponers began attaching the blade to long wooden handles. The double-bladed battle axe was born in Egypt during the Bronze Age, but the design did not gain widespread acceptance.`,
                `During the Greco-Roman times, the battle axe was seen as a barbarian weapon used by the Franks, Celts, Lombards, and Vikings.`,
                `The earliest modern battle axes were a Danish weapon of the ninth century. These weapons did not have double-bladed heads, but were still two-handed weapons. The Danes often decorated these axe heads with carvings. Some shafts reached six feet in length, which caused great structural strain on the point immediately below the axe-head.`,
                `English knights of the 14th century adopted the battle axe as a favored weapon in foot combat. Its long handle afforded a great reach, and allowed for a great amount of force to be focused in the blow.`,
                `Naval crews used battle axes as boarding weapons until the tactic of boarding parties become obsolete.`,
                `The dwarven battle axe design is based on actual design by the Swiss, who called their version the mordaxt.`
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Belaying_pin[SOURCE.AEG.id] = new Weapon({
    name: "Belaying pin",
    cost: new Cost(2, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    speed: 4,
    rate_of_fire: "2/1",
    damage: new Damage("1d3", "1d3"),
    proficiencies: new Proficiencies({single: "Belaying pin"}),
    pages: [57,108],

    descriptions: [
        {
            pages: [56,57],
            text: [
                `**Belaying Pin**`,
                `Not intended as an actual weapon, the belaying oin is a wooden or metal rod that is inserted in holes bored through a ship's rail. Ship's ropes are secured to these belaying pins. The pins are usually found in rows bringing a series of ropes together to one location. The pins mkay be pulled out and used as a melee weapon, more often that not during boarding actions at sea when no other weapon are in reach.`
            ]
        },
        {
            pages: [57],
            text: [
                `*“When a bloke is at sea, unarmed and surrounded by degenerate pirates, a belaying pin makes a fine on-the-spot weapon, even though its primary function is to hold hope, not bash heads. No warrior in his right mind would bother to specialize in or stock up on belaying pins!”*`,
                `*— Captain Ar, of the Galleon Flameburst*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        }
    ]
})

WEAPONS.Blowgun[SOURCE.AEG.id] = new Weapon({
    name: "Blowgun",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.L,
    speed: 5,
    proficiencies: new Proficiencies({single: "Blowgun"}),
    pages: [108],

    descriptions: [
        {
            pages: [57],
            text: [
                `**Blowgun**`,
                `Blowguns are long, hollow tubes composed of wood or metal, ranging from four to seven feet in length. They are used to fire darts, needles, and pellets. The weapons date back to primitive times, when they were used mostly for hunting.`,
                `Blowguns may have had a part in the invention of guns, since the blowgun demonstrated that one end of a tube needs to be closed off in order for the propelling force to shoot the missile in the proper direction.`,
                `Tribes still exist, especially primitive people in tropical jungle cultures, that use the blowgun. In most cases, these tribes are not advanced in terms of inventions, especially weapons of war. Some tribes use stands to brace their blowguns. If a stand is used the firer gains a +1 bonus to his attack rolls.`,
                `The grippli have been known to use blowguns on rare occasions.`
            ]
        },
        {
            pages: [57],
            text: [
                `*“Though the blowgun has poor range, it is a quiet weapon which may be fired twice per round. Desperate adventurers who find themselves weaponless may make blowguns out of local flora, such as reeds, if they are resourceful.*`,
                `*“Blowguns can also be used as makeshift breathing tubes if adventurers are crossing or hiding in a body of water*`,
                `*“Being virtually noiseless, the blowgun is a good weapon for use in infiltrating a stronghold. Darts dipped in a sleep drug may knock out sentries quickly, and this may be an ideal arrangement for someone who wishes to avoid causing excessive bloodshed. It is certainly better suited for that sort of work than combat on the field, since the blowgun is a very fragile weapon.”*`,
                `*— Cedric D'Abalone, Sage*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        },
        {
            pages: [57],
            text: [
                `**Blowgun Pellets:** Most blowgun pellets are of hardened clay, and are used for hunting. A solid hit from a pellet can stun a small bird.`
            ]
        }
    ]
})
WEAPONS.Blowgun.ammunition.Barbed_dart[SOURCE.AEG.id] = new Ammunition({
    name: "Barbed Dart",
    cost: new Cost(1, CURRENCY.SP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    damage: new Damage("1d3", "1d3"),
    pages: [108],

    descriptions: [
        {
            pages: [57],
            text: [
                `**Blowgun Darts:** The blowgun dart is a small arrow with a was of cotton or other plant fibers instead of fletching. This allows for a build-up of pressure from the user's wind. The fibers make a better seal in the tube, allowing more force to gather behind it. A blowgun dart is not the same as a regular dart, and the latter cannot be shot out of a blowgun.`,
            ]
        }
    ]
})
WEAPONS.Blowgun.ammunition.Needle[SOURCE.AEG.id] = new Ammunition({
    name: "Needle",
    cost: new Cost(2, CURRENCY.CP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    damage: new Damage("1", "1"),
    pages: [108],

    descriptions: [
        {
            pages: [57],
            text: [
                `**Needles:** Needles are sometimes used to deliver a poison, often a paralytic poison such as curare. Needles do less damage than other blowgun missile, but this is not a disadvantage, since their function is to carry the poison to the target, not to cause damage.`
            ]
        }
    ]
})

WEAPONS.Bolas[SOURCE.AEG.id] = new Weapon({
    name: "Bolas",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 8,
    damage: new Damage("1d3", "1d2"),
    proficiencies: new Proficiencies({single: "Bolas"}),
    pages: [108],

    descriptions: [
        {
            pages: [57, 58],
            text: [
                `**Bolas**`,
                `The bola is a missile of prehistoric origins. Currently, it is still used by arctic tribes and by savages who dwell on temperate plains. The main function of the bola is to provide a hunter with a good missile weapon that will catch the pray off guard and entangle it so as to make escape impossible.`,
                `The bola is basically a leather strap or straps with weights fastened to the ends, although there are many variations to the design. Arctic bolas are generally used for hunting birds. The bola may have four, six, or ten weights made of walrus ivory or bone. The weights are egg-shaped, spherical, or carved into the likeness of animals. All of the straps or cords join together to make a sort of handle. The thrower grasps the handle, jerks back back the strand to straighten them, whirls the bolas over his head, and releases them. Each bola strand is about 28 inches long and each weight is about two inches in diameter.`,
                `Two-ball bolas are called somais; triple-ball bolas are achicos.`,
                `Temperate plains bolas are usually twice as large and consist of a single leather thong with a leather-covered stone at each end. Often a second cord is fastened in the center of the first cord with a small weight attached at the end. This weight is held by the thrower. This version of the bola can bring down a man-sized target. When a bola hits, the victim is held fast and must take a round to make a Strength check in order to get free. Failure means the bolas are still holding.`,
                `If an attacker makes a Called Shot to the target's legs and succeeds, the bolas wrap themselves tightly around the victim's legs and prevent further movement. The target must make a Dexterity check in order not to fall down, incurring a -3 penalty if the victim was moving when the bolas hit.`,
                `If the attacker succeeds in a Called Shot to the victim's arms, the bolas wrap themselves tightly around the torso, preventing the victim from using a weapon or employing the protection of his shield until he frees himself. Strength checks are made at -2 penalty due to lack of leverage.`,
                `A successful Called Shot to the victim's head wraps the bolas around his neck, strangling him (unless the character is wearing a great helm or closed-faced helm). The bolas cause normal damage on the round in which they hit, then an additional 1d3 hit points of strangulation damage every round the bolas are still in place.`
            ]
        },
        {
            pages: [58],
            text: [
                `*“This is a good weapon to trip someone up, in case ya wanna take an opponent alive. But ya gotta make sure ya got enough room to give the bola a good swing. Bolas only work outside or in huge rooms. They work good if yer on horseback.”*`,
                `*— Brakhan, Bounty Hunter*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        }
    ]
})

const AEG_BOW = {
    pages: [58],
    text: [
        `**Bow**`,
        `In one form or another, bows have been used since the early days of man. They represented a great step in man's ability to cause damage, since the attacker was at a considerable range from the target, not within reach of the enemy's claws or melee weapons. The first bows were long, slender rods (also called staves) with string of animal tendon or plant fiber.`
    ]
}

const AEG_SHORT_BOW = {
    pages: [58,59],
    text: [
        `**Short Bow**`,
        `Short bows were the first to be developed, although they were not called such. This is more of a default term that refers to anything which is not a long bow. Short bow staves are about 5½ feet long on the average. As the years passed, attempts were made to increase bow ranges. Bows were either given longer staves or flexibility was increased with no change to length. The former resulted in what i now called the long bow.`,
        `Bows fell into decline with the spread of handguns. It was reasoned that while a wounded or weakened soldier might lack the strength to pull a bow, he could still pull a trigger. In fantasy settings, there is no danger of the bow being replaced so quickly.`,
        `Short bows can fire only short bow arrows (identical to flight arrows for game terms).`
    ]
}

const AEG_LONG_BOW = {
    pages: [59],
    text: [
        `**Long Bow**`,
        `The long bow is similar to the short bow, except that the staff is about as high as the archer, usually 6 to 6½ feet. It has better range than the short now, and can fire both flight and sheaf arrows.`
    ]
}

const AEG_COMPOSITE_BOW = {
    pages: [59],
    text: [
        `**Composite Bows**`,
        `Composite bows are long bows or short bows whose staves are made from more than one type of material. This gives greater flexibility, and thus better range. These were developed after the normal long bow.`,
        `The second material that makes up a long bow may be anything from another type of wood to bone, sinew or metal. The different materials are usually glued together.`
    ]
}

const AEG_BOW_STRENGTH_BONUS = {
    pages: [59],
    text: [
        `An adventurer who wishes to gain a damage bonus from high Strength when wielding a bow must purchase specially crafted bows. Such a bow costs the normal price for a bow *plus the normal price again for every bonus point desired*. Thus, a warrior with 17 Strength who wants a long bow (base cost 75 gp) that gives him his +1 bonus to damage rolls would have to pay a total of 150 gp. The same fighter with 18/00 Strength (+6 bonus to damage) would pay 525 gp. These bows can be strung and drawn only by characters of that Strength or higher. Others attempting this must make a successful bend bars/lift gates roll.`,
        `Most archers protect their wrist from the snap of the bowstring by fastening a piece of horn, bone, or leather to them. Such an item is known as a bracer.`
    ]
}

const AEG_BOW_INTERVIEW = {
    pages: [59],
    text: [
        `*“In our times, bows still are preferable to the primitive firearms or even the crossbows offered. A high rate of fire, low noise, and good range makes the bow a better choice than the other missile weapons.*`,
        `*“Centaurs favor bows, usually composite bows adapted to enable them to take advantage of their Strength. Elves in particular are adept at making and using bows, of both the long and short varieties. Exactly how the elves happen to be so good at archery is up for debate. Some say elves are trained to shoot beginning in childhood. Others say that their skills are no different than those of humans, but the uncanny, keen elven senses enable the fair folk to anticipate the target's location at the time of the arrow's impact.*`,
        `*“Whatever the reason, no one argues that the elves exhibit clear evidence of the superiority of the bow as the best missile weapon available to the aspiring adventurer.*`,
        `*“Bows are not without their faults. Bowstrings must be kept dry, the staff must not be allowed to crack, and certain amount of strength is required to string and pull a bow. Still, even a short bow is a good thing to have when a warrior wants to inflict damage on someone from a long distance!*`,
        `*“A short bow can fire only flight arrows, while the long bow can fire any type of arrows. However, the short bow is easier to carry and is good for the fighter who relies primarily on a melee weapon but wishes to have a respectable missile weapon.”*`,
        `*— Lady Adriennedar Ironedge, Ranger of Hawkhaven*`
    ],
    attribute: [AEG_ATTRIBUTE.INTERVIEW]
}

const AEG_BOW_HISTORY = {
    pages: [59,60],
    text: [
        `Bows were used extensively for war by the Egyptians, Babylonians, Jews, and other peoples of the eastern Mediterranean world. In ancient Greece and Rome, bows were used mainly for hunting.`,
        `The Huns were the deadliest archers of all the invading barbarian peoples who attacked Rome. Charlemagne made the bow a mandatory weapon for the “civilized” armies.`,
        `At the Battle of Hastings in 1066, many historians claim that the Normans, led by William the Conqueror, beat the enemy by unleashing a rain of arrows on them. Some speculate that Harold died from an arrow through his eye. The bow used was five feet long.`,
        `The English, learning from the lessons of Hastings, continued to refine and adapt their bows, making the staff longer and longer, copying the Welsh long bow. This became known as the English long bow within England.`,
        `The long bow proved very effective, especially in the British victories aat Crecy and Agincourt. In the former, British archers outshot their Genoese counterparts who where using crossbows. Just as the Italians and French gained reputations as excellent crossbowmen, the English gained a reputation for archery. In the time of Henry VIII, English law required all males to learn the use of a long bow bvy the time they reached their teens.`,
        `Europeans bows were most often made of ash or yew wood. Short bows were called Continental bows, while long bows were sometimes called Welsh bows.`,
        `An example of the potency of the long bow can be found in a particular historical incident. An arrow fired by a Welsh bowman is reported to have pierced a knight's leg armor, his leg, the armor on the other side of the leg, the knight's saddle, and to have finally lodged in the horse, pinning the knight to his mount.`,
        `Medieval archers did not always use quivers, but rather kept their arrows tied in bunches and secured to their belts by loops. Mounted archers used quivers that were attached to the saddle.`,
        `Bows were used as late as 1807, when Russian irregulars harassed Napoleon's armies, and in World War II, when detachments of American archers were used in special actions in Asia.`,
        `Even today, certain African pygmy tribes and indigenous folk of the Amazon use bows.`
    ],
    attribute: [AEG_ATTRIBUTE.HISTORY]
}

const AEG_ARROW_GENERAL = {
    pages: [60,61],
    text: [
        `**Arrows**`,
        `In general, arrows range in length from 20 to 40 inches. The feathers, or fletching, of the arrow consist of two or more feathers set coaxially to the shaft. This gives the arrow its aerodynamic lift. If the feathers are instead set diagonally, the arrows rotates in flight. Goose feathers and parrot feathers are used most often in fletching, though pressed paper and leather are sometimes used.`
    ]
}

const AEG_ARROW_INCENDIARY = {
    pages: [61],
    text: [
        `**Incendiary Arrow**`,
        `An incendiary arrow is any arrow type (except bone or stone) with a wad of hemp soaked in a bituminous substance (such as tar) placed just beneath the head. The hemp is lit before the arrow is fired.`,
        `In addition to its normal damage, the arrow causes one additional hit point of fire damage on the round of impact unless the target makes a saving throw vs. death magic. At the DM's option, flaming arrows may ignite combustible materials contacting it.`
    ]
}

WEAPONS.Composite_long_bow[SOURCE.AEG.id] = new Weapon({
    name: "Composite long bow",
    sorting_group: "Bow",
    cost: new Cost(100, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.L,
    speed: 7,
    proficiencies: new Proficiencies({single: "Composite long bow"}),
    pages: [108],

    descriptions: [
        AEG_BOW,
        AEG_LONG_BOW,
        AEG_COMPOSITE_BOW,
        AEG_BOW_STRENGTH_BONUS,
        AEG_BOW_INTERVIEW,
        AEG_BOW_HISTORY
    ]
})

WEAPONS.Composite_short_bow[SOURCE.AEG.id] = new Weapon({
    name: "Composite short bow",
    sorting_group: "Bow",
    cost: new Cost(75, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.M,
    speed: 6,
    proficiencies: new Proficiencies({single: "Composite short bow"}),
    pages: [108],

    descriptions: [
        AEG_BOW,
        AEG_SHORT_BOW,
        AEG_COMPOSITE_BOW,
        AEG_BOW_STRENGTH_BONUS,
        AEG_BOW_INTERVIEW,
        AEG_BOW_HISTORY
    ]
})

WEAPONS.Long_bow[SOURCE.AEG.id] = new Weapon({
    name: "Long bow",
    sorting_group: "Bow",
    cost: new Cost(75, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.L,
    speed: 8,
    proficiencies: new Proficiencies({single: "Long bow"}),
    pages: [108],

    descriptions: [
        AEG_BOW,
        AEG_LONG_BOW,
        AEG_BOW_STRENGTH_BONUS,
        AEG_BOW_INTERVIEW,
        AEG_BOW_HISTORY
    ]
})

WEAPONS.Short_bow[SOURCE.AEG.id] = new Weapon({
    name: "Short bow",
    sorting_group: "Bow",
    cost: new Cost(30, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.M,
    speed: 7,
    proficiencies: new Proficiencies({single: "Short bow"}),
    pages: [108],

    descriptions: [
        AEG_BOW,
        AEG_SHORT_BOW,
        AEG_BOW_STRENGTH_BONUS,
        AEG_BOW_INTERVIEW,
        AEG_BOW_HISTORY
    ]
})

WEAPONS.Short_bow.ammunition.Flight_arrow[SOURCE.AEG.id] =
    WEAPONS.Long_bow.ammunition.Flight_arrow[SOURCE.AEG.id] =
        WEAPONS.Composite_short_bow.ammunition.Flight_arrow[SOURCE.AEG.id] =
            WEAPONS.Composite_long_bow.ammunition.Flight_arrow[SOURCE.AEG.id] = new Ammunition({
                name: "Flight arrow",
                cost: new Cost(3, CURRENCY.SP, 12),
                weight_lbs: 0.1,
                size: SIZE.M,
                type: [WEAPON_TYPE.P],
                damage: new Damage("1d6", "1d6"),
                pages: [108],

                descriptions: [
                    AEG_ARROW_GENERAL,
                    {
                        pages: [61],
                        text: [
                            `**Flight Arrow**`,
                            `The flight arrow, as its name implies, is built for distance. These are lightweight arrows and are often used for hunting. Most of these arrows are made of ash or birch and are 30 to 40 inches long.`
                        ]
                    },
                    AEG_ARROW_INCENDIARY
                ]
            })
WEAPONS.Short_bow.ammunition.Flight_arrow_stone[SOURCE.AEG.id] =
    WEAPONS.Long_bow.ammunition.Flight_arrow_stone[SOURCE.AEG.id] =
        WEAPONS.Composite_short_bow.ammunition.Flight_arrow_stone[SOURCE.AEG.id] =
            WEAPONS.Composite_long_bow.ammunition.Flight_arrow_stone[SOURCE.AEG.id] = new Ammunition({
                name: "Stone arrow, flight",
                cost: new Cost(3, CURRENCY.CP, 12),
                weight_lbs: 0.1,
                size: SIZE.M,
                type: [WEAPON_TYPE.P],
                damage: new Damage("1d4", "1d4"),
                pages: [108],

                descriptions: [
                    AEG_ARROW_GENERAL,
                    {
                        pages: [61, 62],
                        text: [
                            `**Stone Arrow**`,
                            `Stone arrow are considered flight arrows for game purposes, except that the stone arrowheads cause less damage and have a tendency to shatter if they impact armor or similarly hard surfaces. If a stone arrow hits any object made of metal, stone, or harder substance, it has a 20% chance of surviving the hit without damage to the arrow. If a die roll does not indicate success, the arrow is still allowed a saving throw vs. crushing blow with a +4 bonus using the figures for Rock Crystal. Failure indicates that the arrow shatters.`
                        ]
                    },
                ]
            })
WEAPONS.Long_bow.ammunition.Sheaf_arrow[SOURCE.AEG.id] =
    WEAPONS.Composite_long_bow.ammunition.Sheaf_arrow[SOURCE.AEG.id] = new Ammunition({
        name: "Sheaf arrow",
        cost: new Cost(3, CURRENCY.SP, 6),
        weight_lbs: 0.1,
        size: SIZE.M,
        type: [WEAPON_TYPE.P],
        damage: new Damage("1d8", "1d8"),
        pages: [108],

        descriptions: [
            AEG_ARROW_GENERAL,
            {
                pages: [61],
                text: [
                    `**Sheaf Arrow**`,
                    `Sheaf arrows, also known as war arrows, are heavier arrows with less range than flight arrows, but cause more damage. The arrowheads are steel and quite sharp. Sheaf arrows are used in warfare and can be fired only by long bows. These arrows range in length from 20 to 27 inches.`
                ]
            },
            AEG_ARROW_INCENDIARY
        ]
    })

WEAPONS.Caltrop[SOURCE.AEG.id] = new Weapon({
    name: "Caltrop",
    cost: new Cost(2, CURRENCY.SP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: "n/a",
    damage: new Damage("1", "1d2"),
    pages: [108],

    descriptions: [
        {
            pages: [62],
            text: [
                `**Caltrop**`,
                `A caltrop is a metal ball bristling with metal spikes or prongs. When a caltrop is left on the ground, there is always at least one spike standing more or less upright, ready to pierce the foot of the unwary`,
                `In order to be effective, at least 10 caltrops must be dropped in an area of 25 square feet (a 5' ✕ 5' square). Each character entering the area must make a saving throw vs. paralyzation. Failure means that the pursuer has stepped on a caltrop, suffering 1d4 hit points of damage. The character will be able to move at only one-half his normal rate until the caltrop is dislodged from his foot. The victim must also make a second saving throw vs. paralyzation, with failure indicating that the character is lame for 24 hours (unless magically healed), and can move at only one-third his normal movement rate. In any case, the victim must spend one round removing the caltrop from his foot.`,
                `If half the number of caltrops are dropped in an area (5 in a 25 square foot area), the first save is made with a +4 bonus. For every five *extra* caltrops over the required 10 dropped in a 25 square foot area, the saving throw is made at a -2, up to a maximum penalty of -6. A new saving throw must be made for each five-foot section entered in which caltrops have been dropped.`,
                `Characters moving at less than one-third their normal movement rate through an area of caltrops need not make a saving throw. They are moving slowly enough to avoid the caltrops (although they must be able to see the terrain in order to do so).`
            ]
        }
    ]
})

WEAPONS.Cestus[SOURCE.AEG.id] = new Weapon({
    name: "Cestus",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.S],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    proficiencies: new Proficiencies({single: "No Proficiency"}),
    pages: [63, 108],

    descriptions: [
        {
            pages: [63],
            text: [
                `**Cestus**`,
                `The cestus is a leather glove that has spikes and razor edges on the back and across the knuckles. Other form of cesti are loaded with led or other heavy filler in order to give a punch more force. The weapon is mainly used as gladiator weapon in the arenas of sport.`,
                `The damage caused by the cestus (1d4 vs. small and medium creatures; 1d3 to large) *replaces* the damage caused by a punch. Although this may seem to be a disadvantage, remember that punching damage is temporary while damage from the cestus is permanent until healed. There is no proficiency in the cestus, though a warrior can spend a proficiency slot and specialize in it.`
            ]
        },
        {
            pages: [63],
            text: [
                `*“A cestus isn't a true weapon of battle. It's just a cruel way to add damage to a fighter's punch. A cestus is a good weapon only if you like to punch opponents.*`,
                `*“But since most combatants inside and outside the arena have missile weapons, spells, long melee weapons such as spears, polearms, and swords, or benefits due to size, a fighter using a cestus may find himself badly chewed up, if not dead, before closing in enough to use the weapon. And using a cestus in tavern brawls will probably accomplish little more than calling the city guard's wrath on the owner of the cestus.*`,
                `*“The cestus is just a dramatic device meant to draw blood and make a contest look more terrible. Few monsters will care about the drama produced by cestus if the glove is used in real combat.”*`,
                `*— Tisha, Swordswoman Extraordinary*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        }
    ]
})

WEAPONS.Chain[SOURCE.AEG.id] = new Weapon({
    name: "Chain",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 3,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 5,
    damage: new Damage("1d4+1", "1d4"),
    proficiencies: new Proficiencies({single: "Chain"}),
    pages: [108],

    descriptions: []
})

WEAPONS.Club[SOURCE.AEG.id] = new Weapon({
    name: "Club",
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 4,
    damage: new Damage("1d6", "1d3"),
    proficiencies: new Proficiencies({single: "Club"}),
    pages: [108],

    descriptions: [
        {
            pages: [63, 65],
            text: [
                `**Club**`,
                `Most clubs are stout, hardwood sticks, narrow at the grip and wider at the end. This simple weapon has been used since mankin first began using tools. Anyone can find a good stout piece of wood and swing it; hence the club's widespread use.`,
                `The club is the ancestor of the mace, since warriors eventually fitted their clubs with spikes and metal heads in order to increase their deadliness.`,
                `As centuries passed, cultures began embracing civilization and advanced technology. They looked down on the club as a primitive tool and a barbarian weapon. Peasants often arm themselves with clubs, sometimes adpating them by adding iron spikes, resulting in the morningstar.`,
                `Centaurs are often seen wielding clubs, since sylvan settings have ample wood for fashioning such weapons. Ogres also use clubs, since the weapon does not require brains to use or make.`
            ]
        },
        {
            pages: [65],
            text: [
                `*“Despite the lowly status of the club, it is a useful proficiency. A stout tree branch, a wooden chair leg, or a metal rod all may be considered clubs, and all can be found most anywhere. When an adventurer is without a weapon, knowing how to wield a common stick may save his life*`,
                `*“Clubs are common among adventurers. City guards who do not intend to shed blood use clubs in law enforcement, thieves who wish merely to steal a purse carry them, and humble peasants or street urchins who cannot afford a sword may wield a stout piece of wood. If anyone anticipates a life filled with tavern brawls, proficiency with the club is a must.*`,
                `*“Druids favor clubs, since they can cast* shillelagh * spells on the wood. Carrying a weapon made of wood, an organic, natural material, is preferable to using iron, since many self-respecting druids will use metal weapons only as a last resort.”*`,
                `*— Archdruid Heather Rose*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        },
        {
            pages: [65],
            text: [
                `The versatility of the club is shown in the Bayeux Tapestry, which depicts squads of Saxons wielding clubs as both melee weapons and missile weapons. Some cultures decorate their clubs or even carve the club heads into representation of the creatures they expect to hunt.`
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

const AEG_CROSSBOW_LIGHT_HEAVY = {
    pages: [65,66],
    text: [
        `**Crossbow, Light and Heavy**`,
        `A crossbow is a bow mounted crosswise on a wooden or metal shaft, the latter called a tiller. The bow is usually made of ash or yew. The crossbow fires a quarrel (also called a bolt).`,
        `Crossbows are loaded by pulling the string back until it locks into a nut fitted on the tiller. A man's strength is enough to pull the bow to the locking position, although heavier crossbows with more powerful bows require a mechanical aid. The most effective of these devices is the windlass, a series of pulleys and crank handles fitted at the crossbow's stock. For crossbows that do not have the windlass, a stirrup is fitted on the front of the crossbow. When resetting the bow, the firer places his foot in the stirrup in order to keep the bow off the ground while he is pulling the string up to the locking position.`,
        `The main differences between the light and heavy crossbows are the size of the quarrel and the presence of stirrup, which is found only on the heavy crossbow. Heavy and light crossbows are more correctly referred to as two-foot and one-foot crossbows, respectively. This term refers to the length of the quarrels.`,
        `The one-foot crossbow is made with a steel tiller and is quite rugged. It may be easily concealed beneath flowing garments such as cloaks or robes. It is frowned upon by the more lawful civilized cities.`,
        `Although bows cannot be used under water, the crossbow can, since the tension produced by the weapon overcomes the water resistance. Underwater races such as the locathah, mermen and tritons use crossbows of both heavy and light varieties.`
    ]
}

const AEG_CROSSBOW_INTERVIEW = {
    pages: [66],
    text: [
        `*“Apparently, the drow couldn't care less about the hand crossbow's reputation, since they favor this weapon in all encounters. Derro also use hand crossbows, probably a habit they picked up from their fellow subterranean dwellers, the drow.*`,
        `*“Of all the crossbows, light crossbows were the first to be developed. Their rate of fire and range are their main advantages. But damage potential is less than that of a bow and arrow.*`,
        `*“Heavy crossbows have better range and damage potential, but they can fire only once every other round. If a warrior does not kill his opponent with the first shot, he may not get another chance.*`,
        `*“It would be foolish to dismiss the crossbow completely. Heavy and light crossbows have better range than their respective bow counterparts, the long and short bows. The best tactic when using a crossbow is to assemble a line of people, all armed with these weapons, who unleash a devastating volley at an enemy.*`,
        `*“Hand crossbows are easily concealed, have an adequate rate of fire, and good range for such a small weapon. On the other hand, damage potential is worse than that of a dagger, and the weapon may be banned in some lawful kingdoms or cities. Some societies, such as the drow, place poison on their bolts in order to immobilize and opponent.”*`,
        `*— Emryl Aelorthas, Professional Bowyer*`
    ],
    attribute: [AEG_ATTRIBUTE.INTERVIEW]
}

const AEG_CROSSBOW_QUARRELS = {
    pages: [66],
    text: [
        `**Quarrels**`,
        `Quarrels or bolts are the ammunition fired by crossbows regardless of the weapon's size. Crossbows are rated as one-footers or two-footers, according to the bolt's length. Quarrels are shaped like arrows, but the shafts are shorter and thicker. The quarrel heads used for warfare are conical or pyramid-shaped iron heads.`
    ]
}

const AEG_CROSSBOW_HISTORY = {
    pages: [66,67],
    text: [
        `European crossbows have existed since the 4th century AD and at first were used primarily for hunting. By 1000 AD, crossbows had been adopted for warfare. Use began to wane upon the advent of the English long bow, for despite the fact that the crossbow was a more powerful weapon with better range and was easier to use in close quarters, the rate of fire of a bow was a huge psychological advantage. The most talented makers and users of the crossbow were the Italians, whose Genoese mercenary crossbowmen were the best in the world.`,
        `Although heavy and light crossbows enjoyed a favorable reputation among military commanders, these weapons suffered a bad reputation. The crossbow was so lethal that Pope Innocent II banned its use in 1139 AD. The edict was later changed, however, so the crusaders could use it against Moslems.`,
        `Light crossbows were considered unethical weapons,a nd were often banned between the 16th and 18th centuries. The light crossbow was primarily used as a hunting weapon.`,
        `The crossbow was originally developed in China, culminating in a sturdy, reliable model during the Han Dynasty, circa 206 BC. This particular crossbow model, some scholars believe, was seen as early as about 36 BC by about 100 Roman soldiers who were taken prisoner in Central Asier. Such experiences or the trade routes eventually opened passed the concept of the crossbow from East to West.`,
        `Initially, the European crossbow was made with a wooden stave. This construction, however, does not give optimum power to the bolt's flight. Bt the end of the 11th century, it is believed that many crossbow staves were made of composite construction, usually horn and sinew in conjunction with wood (usually yew). This method of crossbowmaking came from Saracens, and the Saracen influence in southern Europe explains why the area became well known for crossbow manufacturing and use.`
    ],
    attribute: [AEG_ATTRIBUTE.HISTORY]
}

WEAPONS.Hand_crossbow[SOURCE.AEG.id] = new Weapon({
    name: "Hand crossbow",
    sorting_group: "Crossbow",
    cost: new Cost(300, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.S,
    speed: 5,
    proficiencies: new Proficiencies({single: "Hand crossbow"}),
    pages: [108],

    descriptions: [
        {
            pages: [66],
            text: [
                `**Crossbow, Hand**`,
                `The deadly little bow is a pistol-sized weapon made with a steel tiller. It is more easily concealed than the light crossbow and its use is considered unethical in civilized society. Hand crossbows have a reloading mechanism built into the tiller.`
            ]
        },
        AEG_CROSSBOW_INTERVIEW,
        AEG_CROSSBOW_HISTORY
    ]
})
WEAPONS.Hand_crossbow.ammunition.Hand_quarrel[SOURCE.AEG.id] = new Ammunition({
    name: "Hand quarrel",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    damage: new Damage("1d3", "1d2"),
    pages: [108],

    descriptions: [
        AEG_CROSSBOW_QUARRELS
    ]
})

WEAPONS.Heavy_crossbow[SOURCE.AEG.id] = new Weapon({
    name: "Heavy crossbow",
    sorting_group: "Crossbow",
    cost: new Cost(50, CURRENCY.GP),
    weight_lbs: 14,
    size: SIZE.M,
    speed: 10,
    proficiencies: new Proficiencies({single: "Heavy crossbow"}),
    pages: [108],

    descriptions: [
        AEG_CROSSBOW_LIGHT_HEAVY,
        AEG_CROSSBOW_INTERVIEW,
        AEG_CROSSBOW_HISTORY
    ]
})
WEAPONS.Heavy_crossbow.ammunition.Heavy_quarrel[SOURCE.AEG.id] = new Ammunition({
    name: "Heavy quarrel",
    cost: new Cost(2, CURRENCY.SP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    damage: new Damage("1d4+1", "1d6+1"),
    pages: [108],

    descriptions: [
        AEG_CROSSBOW_QUARRELS
    ]
})

WEAPONS.Light_crossbow[SOURCE.AEG.id] = new Weapon({
    name: "Light crossbow",
    sorting_group: "Crossbow",
    cost: new Cost(35, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.S,
    speed: 7,
    proficiencies: new Proficiencies({single: "Light crossbow"}),
    pages: [108],

    descriptions: [
        AEG_CROSSBOW_LIGHT_HEAVY,
        AEG_CROSSBOW_INTERVIEW,
        AEG_CROSSBOW_HISTORY
    ],

    comment: `Size of Light Crossbow and Light quarrel looks to be swapped.`
})
WEAPONS.Light_crossbow.ammunition.Light_quarrel[SOURCE.AEG.id] = new Ammunition({
    name: "Light quarrel",
    cost: new Cost(1, CURRENCY.SP),
    weight_lbs: 0.1,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    damage: new Damage("1d4", "1d4"),
    pages: [108],

    descriptions: [
        AEG_CROSSBOW_QUARRELS
    ]
})

const AEG_DAGGER_GENERAL =         {
    pages: [67, 68],
    text: [
        `**Dagger**`,
        `The typical dagger has a pointed, usually double-edged blade, as opposed to a knife, which has a single edge and is a bit shorter than the dagger.`,
        `The dagger is one of man's oldest weapons. The first dagger were most likely hand-held spearheads used by cavemen, made of bone or stone. Bone daggers are made from the bones of large animals such as reindeer and bison, with one end sharpened and then handle carved to resemble the animal from which the bone came. Such daggers are relatively fragile, and stone replaced bone when early man discovered how to work with stone.`,
        `Stone daggers are more difficult to make due to the composition of stone. Most stone daggers are made of flint, hard stone that can be worked easily. The flint is chipped until the proper shape is achieved, usually that of the broad leaf, then it is sometimes lashed to a wooden handle. This sort of stone dagger has a major weak point: the place where the blade is attached to the handle. Primitive tribes know that the best stone dagger is made from a single piece of stone with the dagger's handle consisting of a straight section of stone. The handle is then wrapped in hide for a good grip. The average stone dagger measures 12 inches long.`,
        `When man began working with copper and bronze, the technique of making a dagger's handle and blade from a single piece of material remained. Blade length increased up to 24 inches long, and when the length exceeded this, a new weapon, the short sword, was born.`,
        `Some weaponsmiths have turned dagger making into an art form, decorating the handles, crossguards, and even the blades with beautiful carvings. Some daggers are decorated with carved scenes derived from a culture's mythology.`
    ]
}

const AEG_DAGGER_HISTORY = {
    pages: [68],
    text: [
        `With the advent of swords, the dagger was relegated to the role of back-up weapon. In fact, the average Roman soldier did not carry a dagger, but his Teutonic barbarian enemy used them. As the barbarian's influence swept over Europe, the dagger was given new life.`,
        `Daggers with steel blades became necessary in order to penetrate armor. Although knights carried daggers, they were considered a weapon of last resort`,
        `The modern handshake derived from a habit used by bodyguards. They would take the hand of anyone visiting the king and shake his arm, hoping to dislodge any dagger concealed in the visitor's sleeve.`
    ],
    attribute: [AEG_ATTRIBUTE.HISTORY]
}

const AEG_DAGGER_INTERVIEW = {
    pages: [69],
    text: [
        `*“A dagger is great because it's easy to conceal, it's good in close-fighting or as a backup weapon, and it's shape allows it to be hurled. It has only a few problems—it's a short weapon, with neither the reach nor the damage potential of a sword.*`,
        `*“A dagger makes a handy tool as well. Soldiers and adventurers use their daggers as eating utensils. Owning a sharp blade that is easily carried make life easier (just try drawing a long sword to cut some bread or a piece of rope!).*`,
        `*“My favorite advantage of a dagger is that when you rely on stealth, you can use a dagger to dispatch a foe and draw less attention than resorting to a sword, in which case you might as well yell out your intentions. This is one reason why those of us who attack out enemies indiretly savor the dagger and usually carry at least two.”*`,
        `*— Jasmine, Halfling Thief*`
    ],
    attribute: [AEG_ATTRIBUTE.INTERVIEW]
}

WEAPONS.Dagger[SOURCE.AEG.id] = new Weapon({
    name: "Dagger or dirk",
    cost: new Cost(2, CURRENCY.GP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    proficiencies: new Proficiencies({single: "Dagger or dirk"}),
    pages: [108],

    descriptions: [
        AEG_DAGGER_GENERAL,
        AEG_DAGGER_HISTORY,
        {
            pages: [68],
            text: [
                `**Dagger, Dirk**`,
                `A dirk has qualities of both the dagger and the knife. While useful as a weapon, it was designed for a variety of uses. It is a version of the ballock knife (or “kidney dagger”). The dirk has two round, symmetrical globes at the base of the handle, where the handle meets the blade. The grip itself emerges from between the globes and is fared at the top. The blade is often made from a large shard of a sword blade. The dirk is a single-edged, grooved weapon with a back edge near the point. It usually features a decorative notch at the bade.`,
                `Most dirks have a special scabbard that has two small pockets in the front, one for a knife and one for a fork, used by warriors in the field as an early mess kit.`
            ]
        },
        {
            pages: [68],
            text: [
                `The dirk is a Scottish weapon, carried by Highlanders, making its appearance in the late 17th century. The grip is usually leather, ivy root, or ivory. In the late 18th century, the dirk was sometimes mounted in silver or gold. Though normally considered a civilian weapon, the dirk was produced as a military blade when Scottish men were incorporated into Britain's regular army.`
            ]
        },
        AEG_DAGGER_INTERVIEW
    ]
})

WEAPONS.Dagger_bone[SOURCE.AEG.id] = new Weapon({
    name: "Bone dagger",
    sorting_group: "Dagger or dirk",
    cost: new Cost(1, CURRENCY.SP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d2", "1d2"),
    proficiencies: new Proficiencies({single: "Dagger or dirk"}),
    pages: [108],

    descriptions: [
        AEG_DAGGER_GENERAL,
        AEG_DAGGER_HISTORY,
        AEG_DAGGER_INTERVIEW
    ]
})

WEAPONS.Dagger_parrying[SOURCE.AEG.id] = new Weapon({
    name: "Parrying dagger",
    sorting_group: "Dagger or dirk",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d3", "1d3"),
    proficiencies: new Proficiencies({single: "Parrying dagger"}),
    pages: [108],

    descriptions: [
        AEG_DAGGER_GENERAL,
        AEG_DAGGER_HISTORY,
        AEG_DAGGER_INTERVIEW,
        {
            pages: [69],
            text: [
                `**Dagger, Parrying**`,
                `This specialized type of dagger is used in conjunction with a sword. It is used to catch or break an opponent's sword. Some versions of this dagger are equipped with spring blades that split intro three blades at the push of a button. When such a dagger is employed in this fashion, it cannot be thrown successfully`,
                `Most parrying daggers have long, straight or curved quillons, and a tough side ring that extends perpendicular to the blade in order to protect the user's fingers,`,
                `Unlike the main-gauche, the parrying dagger is made for a specific purpose, to deflect or break an opponent's weapon. The main-gauche, while also good for parrying, is less of a weapon-breaker.`
            ],
            comment: `The Parrying dagger has all these descriptions for parrying or weapon breaking, but has no mechanics described for how this is resolved. Unlike the Main-gauche, which is described to give +1 to certain maneuvers.`
        }
    ]
})

WEAPONS.Dagger_stone[SOURCE.AEG.id] = new Weapon({
    name: "Stone dagger",
    sorting_group: "Dagger or dirk",
    cost: new Cost(2, CURRENCY.SP),
    weight_lbs: 1,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d3", "1d2"),
    proficiencies: new Proficiencies({single: "Dagger or dirk"}),
    pages: [108],

    descriptions: [
        AEG_DAGGER_GENERAL,
        AEG_DAGGER_HISTORY,
        AEG_DAGGER_INTERVIEW
    ]
})

WEAPONS.Dart[SOURCE.AEG.id] = new Weapon({
    name: "Dart",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    rate_of_fire: "3/1",
    damage: new Damage("1d3", "1d2"),
    proficiencies: new Proficiencies({single: "Dart"}),
    pages: [70,108],

    descriptions: [
        {
            pages: [69,70],
            text: [
                `**Dart**`,
                `The dart is a small, easily concealable missile weapon that is thrown rather than fired from a bow or other launcher.`,
                `Darts are known to exist among advanced caveman tribes. These darts are usually small, wooden shafts fitted with a head of bone or stone.`,
                `In modern cultures, darts have leaf or arrow-shaped heads and stabilizers on the shaft's butt end, much like miniature arrows.`,
                `Many cultures use darts for sport, hunting, and warfare on land and sea. Lizard men use barbed darts.`
            ]
        },
        {
            pages: [70],
            text: [
                `*“Darts are small, easy to hide, and have a good rate of fire. Range is slightly better than a dagger, but darts cause less damage. Darts may be smeared with various toxins to make them more effective. It makes sense to fire darts at their maximum rate (three per round), which not only gives the thrower three changes of hitting, but also offsets the low damage potential by offering the possibility of multiple hits.*`,
                `*“A dart is a good weapon to throw at a spellcaster. As long as one dart hits a spellcaster, the latter's spell is ruined, regardless of the damage caused. Of course, this is why many spellcasters carry darts. Most are nimble enough to use them effectively, and if they are unable to cast a spell, but see an enemy spellcaster about to cast, a dart can ruin the spell. It helps to be a sharp-eyed, quick-thinking, nimble, handsome fellow such as myself”*`,
                `*— Malraz Alizar the Magnificent, Illusionist Without Peer*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW],
            comment: `Using multiple attacks to ruin spellcasting strongly depends on the rules used. The PHB p. 126-127 stats that *"true multiple attacks—using the same weapon more than once—... Everyone involved in the combat completes one action before the second (or subsequent) attack rolls are made."*. This procedure completely negates the described usefulness of multiple attacks with darts, unless the spell in question takes a full round to cast, in which case it only finished at the end of the round.`
        }
    ]
})

const AEG_FLAIL_GENERAL = {
    pages: [70],
    text: [
        `**Flail**`,
        `The flail is a sturdy wooden handle attached to an iron rod, a wooden rod with spikes, or a spiked iron ball. Between the handle and its implement is either a hinge or chain link. The weapon was originally used as a tool for threshing grain. Weather a flail is used by a foot soldier or a horseman, the principle is the same.`,
        `Rumors tell that the flinds' flindbars are in fact a variation of the flail. This has not been substantiated, and the flinds have no wish to cooperate in the research.`
    ]
}

const AEG_FLAIL_INTERVIEW = {
    pages: [70],
    text: [
        `*“In the adventurer's world, a flail can be used by warriors or priests, especially if the latter is not allowed edged weapons. The footman's flail causes more damage, since the longer pole enables the wielder to make a stronger swing. This is a good weapon to use in subduing someone, or even for a disarming maneuver. Bear in mind that the footman's flail is a two-handed weapon, whereas the horseman's flail is one-handed.*`,
        `*“There is certainly no problem in a footman using a horseman's fail, although it is not a good habit. A foot soldier would be better off with a different blunt weapon that can cause more damage or have more versatility, such as a warhammer.”*`,
        `*— Brother George, Cleric*`
    ],
    attribute: [AEG_ATTRIBUTE.INTERVIEW],
    comment: `If the designers wanted the footman's flail to be a two-handed weapon it should have been the size L, so that it would follow the weapon size rules laid out in the PHB p. 96. The Fighter's handbook specifically points out that certain one-handed weapons can be used two-handed for more damage when using Two-Hander Style Specialization. This implies that the footman's flail is a one-handed weapon.`
}

const AEG_FLAIL_HISTORY= {
    pages: [71],
    text: [
        `The followers of Peter the Hermit who fought in the Crusades in the 11th and 12th centuries used flails, placing spikes on the short flail heads. This adaptation gave rise to other modifications, such as replacing the second bar with two or more iron palls attached by chains.`,
        `Footman's flail were used mostly in the 13th and 14th centuries by foot soldiers, especially peasant troops, while the horseman's version enjoyed use by cavalry troops during the same time period.`,
        `Flails were used as late as the 1920's by Polish peasants against Soviet troops.`
    ],
    attribute: [AEG_ATTRIBUTE.HISTORY]
}

WEAPONS.Footmans_flail[SOURCE.AEG.id] = new Weapon({
    name: "Flail, Footman's",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 7,
    damage: new Damage("1d6+1", "2d4"),
    proficiencies: new Proficiencies({single: "Footman's Flail"}),
    pages: [108],

    descriptions: [
        AEG_FLAIL_GENERAL,
        {
            pages: [71],
            text: [
                `**Footman's Flail**`,
                `The footman's flail has a handle approximately four feet in length. It otherwise conforms to the above description.`
            ]
        },
        AEG_FLAIL_INTERVIEW,
        AEG_FLAIL_HISTORY
    ]
})

WEAPONS.Horsemans_flail[SOURCE.AEG.id] = new Weapon({
    name: "Flail, Horseman's",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 6,
    damage: new Damage("1d4+1", "1d4+1"),
    proficiencies: new Proficiencies({single: "Horseman's Flail"}),
    pages: [108],

    descriptions: [
        AEG_FLAIL_GENERAL,
        {
            pages: [71],
            text: [
                `**Horseman's Flail**`,
                `The horseman's version ofn the flail has a two-foot-long handle. The horseman already has a good positional advantage, sitting atop a horse, and consequently does not need the greater reach afforded by the long handle of the footman's flail. This is a one-handed weapon.`
            ]
        },
        AEG_FLAIL_INTERVIEW,
        AEG_FLAIL_HISTORY
    ]
})

const AEG_GAFF_HOOK_GENERAL = {
    pages: [72],
    text: [
        `**Gaff/Hook**`,
        `The gaff or hook is actually a tool used to hook and land fish. It is commonly found where fishing boats are encountered, and the hooks are in plentiful supply, affording the disarmed adventurer a weapon of last resort.`,
        `The gaff consists of a metal hook with a wooden or metal crossbar at the base. A one-handed tool, the hook protrudes from between the middle and ring fingers.`,
        `Some sailors who have lost a hand have a cup with a gaff hook attached to the stump, guaranteeing that they are never without a weapon.`
    ]
}

const AEG_GAFF_HOOK_INTERVIEW = {
    pages: [72],
    text: [
        `*“Ya don't often see adventurers whacking away with gaffs. To them, it's only a tool. But more often than not, dock workers, press gangs, priates, and sailors have a pretty good swing with those hooks.”*`,
        `*— Rych the Seeker, Harbormaster*`
    ],
    attribute: [AEG_ATTRIBUTE.INTERVIEW]
}

WEAPONS.Gaff_hook_attached[SOURCE.AEG.id] = new Weapon({
    name: "Attached",
    sorting_group: "Gaff/Hook",
    cost: new Cost(2, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    proficiencies: new Proficiencies({single: "Gaff/Hook"}),
    pages: [108],

    descriptions: [
        AEG_GAFF_HOOK_GENERAL,
        AEG_GAFF_HOOK_INTERVIEW
    ]
})

WEAPONS.Gaff_hook_held[SOURCE.AEG.id] = new Weapon({
    name: "Held",
    sorting_group: "Gaff/Hook",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    proficiencies: new Proficiencies({single: "Gaff/Hook"}),
    pages: [108],

    descriptions: [
        AEG_GAFF_HOOK_GENERAL,
        AEG_GAFF_HOOK_INTERVIEW
    ]
})

WEAPONS.Hand_axe[SOURCE.AEG.id] = new Weapon({
    name: "Hand/Throwing axe",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 4,
    damage: new Damage("1d6", "1d4"),
    proficiencies: new Proficiencies({single: "Hand/Throwing axe"}),
    pages: [108],

    descriptions: [
        {
            pages: [72,73],
            text: [
                `**Hand or Throwing Axe**`,
                `The hand axe or throwing axe is also known as the hatchet. The axe blade has a sharp steel tip, counterbalanced by a pointed fluke. The short handle has a point on the bottom and the head may have a spike on top.`,
                `This weapon is often used by barbarian tribes. Some hand axes are carried on the saddles of knights and horsemen, who respect this weapon after seeing barbarians wield the axes effectively.`,
                `Despite this acceptance by civilized folk, the throwing axe is often relegated to backup weapon status since the creation of the battleaxe, whose longer handle gives the wielder greater force in the swing. The maximum length of the hand axe's handle is about 18 inches, not very great, though better than a dagger's reach in hand-to-hand combat. The throwing axe's last advantage, its ability to be hurled, was eclipsed with the advent of better bows such as the long bow.`,
                `Short races such as gnomes make good use of hand axes. The gnomes' traditional enemies, the kobolds, also use hand axes. The weapon's size is small enough to be wielded properly, and it can be hurled as a last resort. Dwarves, of course, are far more interested in the heavier battleaxe.`
            ]
        },
        {
            pages: [73],
            text: [
                `*“The throwing axe is a good backup weapon for an adventurer. It can be used in melee combat or as a missile weapon, although with mediocre range. The weapon is also useful as a general tool, especially to outdoor types such as rangers, who often need a good tool to hack away at undergrowth in order to blaze a trail.”*`,
                `*— Dalraun Ironedge, Ranger*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        }
    ]
})

WEAPONS.Harpoon[SOURCE.AEG.id] = new Weapon({
    name: "Harpoon",
    proficiencies: new Proficiencies({single: "Harpoon"}),
    pages: [108],

    descriptions: [
        {
            pages: [73],
            text: [
                `**Harpoon**`,
                `The harpoon is a hunting weapon, which, in times of duress, may be used for defense. Its development by primeval man was for hunting marine ma,,als and large fish.`,
                `The first harpoons were merely pointed sticks. Later, these became sticks with a sharp head of horn or bone. The heads often had hooks cut into them for increased damage and to hold the harpoon fast in the beast's flesh. The head was then fitted or attached to the end of the shaft, secured by animal sinews.`,
                `Metal harpoon heads evolved later, most with pointed or barbed heads. These heads are usually detachable from the shaft, but are connected to the thrower by a cord attached between the point and the barb.`,
                `When a hunter throws the harpoon and hits an animal, he follows the victim as best he can, playing out as much rope as needed until the beast tires and dies.`,
                `Some creatures may be of sufficient intelligence to try to free themselves from the harpoon. If the target has Intelligence of 2 or greater and some means of dislodging the hook or breaking the line, it is allowed a saving throw vs. poison. Success means the victim is freed. Failure means the harpoon is still attached, the victim takes another hit point of damage, and is drawn 10' closer to the harpoon's wielder. The victim is pulled towards the wielder *only* if a concentrated attempt is made and the victim is of a size and weight that makes this possible (e.g., a harpooned whale cannot be hauled in by a fighter with 13 Strength).`,
                `Certain primitive jungle tribes traditionally use harpoons to hunt wild boar. kuo-toa, the aquatic subterranean fish-men, favor the harpoon with as many nasty barbs on the weapon as possible.`,
                `Harpoons may be used one- or two-handed, and there is no change in speed factor for using it one way or the other. This is a definite advantage. On the other hand, the harpoon has a poor throwing range, and damage potential is less when it is used one-handed, much like a bastard sword. The harpoon is a common weapon in coastal areas, but its primary function is not as a weapon against an intelligent opponent.`,
                `Adventurers on ships may experiment with fitting harpoons onto ballista launchers, if the DM permits. This may be especially handy if the PCs are hunting some sea creature that they must haul back to port.`
            ]
        }
    ]
})
WEAPONS.Harpoon.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "One-handed",
    cost: new Cost(20, CURRENCY.GP),
    weight_lbs: 6,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d4+1", "1d6+1"),
    pages: [108],
})
WEAPONS.Harpoon.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "Two-handed",
    cost: new Cost(20, CURRENCY.GP),
    weight_lbs: 6,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("2d4", "2d6"),
    pages: [108],
})

const AEG_JAVELIN = {
    pages: [73,74],
    text: [
        `**Javelin**`,
        `Javelins are classified as light spears, suitable for melee or missile combat, usable either on horseback or on foot. The weapon has been around since man's earliest days. The javelin head is not very large, and is usually leaf- or lancet-shaped. Javelin heads may have barbs.`,
        `As a weapon of war, the javelin has low popularity, though it is often used for hunting purposes. Javelins are also used as a ceremonial weapon of bodyguards in civilized nations. Halberdier yeomen are often assigned javelins.`,
        `Javelin throwing is a common contest of the games of sport of ancient civilizations.`,
        `Javelins may be used either one- or two-handed, and like the harpoon, there is no difference in speed factor between the two styles. The javelin has a respectable throwing range, certainly better than that of a spear, with damage potential comparable to the spear. Like the harpoon, the javelin gives the adventurer the advantage of a weapon that may be used effectively either as a melee weapon or as a missile weapon.`,
        `Many drow carry javelins, often coating the weapon with the same poison they use on crossbow bolts. Kobolds also use javelins, as any weapon which inflects damage from a long distance is embraced by that cowardly race. Advanced races of lizard men are also javelin users.`
    ]
}

WEAPONS.Javelin[SOURCE.AEG.id] = new Weapon({
    name: "Javelin",
    proficiencies: new Proficiencies({single: "Javelin"}),
    pages: [108],

    descriptions: [
        AEG_JAVELIN
    ],

    comment: `Size L looks like a typo as a weapon intended to be thrown should generally be size M (a one-handed weapon).`
})
WEAPONS.Javelin.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "One-handed",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 4,
    damage: new Damage("1d4", "1d4"),
    pages: [108],
})
WEAPONS.Javelin.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "Two-handed",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 4,
    damage: new Damage("1d6", "1d6"),
    pages: [108],
})

WEAPONS.Javelin_stone[SOURCE.AEG.id] = new Weapon({
    name: "Javelin, Stone",
    proficiencies: new Proficiencies({single: "Javelin"}),
    pages: [108],

    descriptions: [
        AEG_JAVELIN
    ]
})
WEAPONS.Javelin_stone.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "One-handed",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 4,
    damage: new Damage("1d4", "1d4"),
    pages: [108],
})
WEAPONS.Javelin_stone.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "Two-handed",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 2,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 4,
    damage: new Damage("1d4+1", "1d6"),
    pages: [108],
})

const AEG_KNIFE_GENERAL = {
    pages: [74, 75],
    text: [
        `**Knife**`,
        `A knife consists of a single-edged, pointed blade with a handle mounted asymmetrically. It is an early weapon, used even by primitive tribes. In these cultures, a knife is little more than a flint blade with one or two cutting edges.`,
        `Bone knifes are little more than a sharpened piece of bone, often decorated in the same way as daggers. Like other bone weapons, bone knives are apt to shatter.`,
        `True knives appeared when man began using alloys such as bronze. A knife was cast from a single piece of bronze, with a single straight edge or slightly curved blade. The curvature is often accentuated near the point.`,
        `When man began using iron, knifes handles went through a change. The malleability of iron made it easy to create and keep a sharp edge, while also enabling the maker to extend the blade into the flat tang, which was then covered with sidepieces of wood, bone, or horn. This made the handles easier to decorate. In primitive civilizations, knives are used as an all-purpose tool, on the hunting grounds, and as a tool of sacrifice.`,
        `Different forms of knives may be found among the different peoples who depend heavily on this useful tool. Small knives are made from domestic uses, longer knives for hunting and war.`,
        `Small knives exhibit their own evolution, resulting in the common man's small knife with a four-inch blade and a plain handle of bone or horn. The more influential citizen may have a knife with a handle of rock crystal or other stone, enclosed in a precious metal. Despite the great value of these knives, they are not as effective in combat as the larger knives (-1 to attack and damage rolls).`,
        `Non-domestic knives, or outdoor knives, have stronger blades and sharper points. They are carried in their own sheaths, or in the scabbard of a larger weapon, such as a sword, creating a specialized set.`,
        `In some areas, knife makers are prohibited from selling knives with leaf-shaped blades. Such decrees are an effort to prevent such knives from being carried casually. The leaf shape cause a large, gaping wound that bleeds heavily.`
    ]
}

const AEG_KNIFE_INTERVIEW = {
    pages: [75],
    text: [
        `*“Though it seems as if a dagger and a knife are very much alike, there are important differences. A knife is lighter than a dagger. Its shape does not allow it to be thrown as easily, which explains why the lighter knife has the same throwing range as a dagger. The knife causes only slightly less damage than the dagger. Both weapons have the same rate of fire. The dagger is less of a tool and more a weapon, while it can be argued that the reverse applies to the knife.*`,
        `*“An adventurer of high station way wish to have a knife and a sword of similar design, both housed in one scabbard. Such a thing is certainly considered a status symbol (definitely a mixed blessing).*`,
        `*“A big advantage of knives is that they are found everywhere. Cooks, trappers, and hunters are but three occupations that justify carrying a knife.”*`,
        `*— Peripim Furfoot, Halfling Adventurer and Profession Cook*`
    ],
    attribute: [AEG_ATTRIBUTE.INTERVIEW]
}

const AEG_KNIFE_HISTORY = {
    pages: [75, 76],
    text: [
        `Knife handles historically exhibited wide variations in materials and workmanship. Cast silver knife handles were popular in the 16th century, inlaid mother-of-pearl was in vogue in the 17th century, porcelain handles were popular in the 18th century, and carved ivory and bone with fine silver plates was the trend in the 19th century.`,
        `Nations or cultural groups created knives that suited their particular style or customs. A common knife in southern Europe, for instance, had a blade that folded toward the handle, with the cutting edge housed in a special groove. In Spain, these were called the Navaja, and in Italy the Serramancio. We know them today as clasp knives or jackknives.`,
        `By far the most famous knife of the past two centuries was a heavy, single-edged, sharply pointed blade with a small handle with wooden sidepieces. The knife was designed for melee combat. This knife was much in use in the American West, and was named for it creator: Colonel James Bowie.`
    ],
    attribute: [AEG_ATTRIBUTE.HISTORY]
}

WEAPONS.Knife[SOURCE.AEG.id] = new Weapon({
    name: "Knife",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 2,
    damage: new Damage("1d3", "1d2"),
    proficiencies: new Proficiencies({single: "Knife"}),
    pages: [108],

    descriptions: [
        AEG_KNIFE_GENERAL,
        AEG_KNIFE_INTERVIEW,
        AEG_KNIFE_HISTORY
    ]
})

WEAPONS.Knife_bone[SOURCE.AEG.id] = new Weapon({
    name: "Bone knife",
    sorting_group: "Knife",
    cost: new Cost(3, CURRENCY.CP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 2,
    damage: new Damage("1d2", "1d2"),
    proficiencies: new Proficiencies({single: "Knife"}),
    pages: [108],

    descriptions: [
        AEG_KNIFE_GENERAL,
        AEG_KNIFE_INTERVIEW,
        AEG_KNIFE_HISTORY
    ]
})

WEAPONS.Knife_stone[SOURCE.AEG.id] = new Weapon({
    name: "Stone knife",
    sorting_group: "Knife",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 2,
    damage: new Damage("1d2", "1d2"),
    proficiencies: new Proficiencies({single: "Knife"}),
    pages: [108],

    descriptions: [
        AEG_KNIFE_GENERAL,
        AEG_KNIFE_INTERVIEW,
        AEG_KNIFE_HISTORY
    ]
})

const AEG_LANCE_GENERAL = {
    pages: [76],
    text: [
        `**Lance**`,
        `The term “lance” originally referred to spears wielded by footmen and cavalry. It eventually referred only to cavalry spears.`,
        `Lance design varies between cultures and eras. Generally, the lance is a long shaft of tough wood, usually ash, with an iron head in the shape of a laurel or willow leaf, with cutting edges and a sharp point meant to penetrate armor.`,
        `Lances are meant to be gripped close to the bottom, putting a great distance between the wielder and his target. As a rule, the lance is aimed diagonally above the horse's neck. The opponents face each other with their left sides oncoming.`,
        `Along with almost any variety of sword, the lance is considered the best offensive weapon for mounted soldiers. Some knights carry a small fabric pennant affixed just below the lance head. These pennants are either triangular or square, and carry the colors or symbols of the knight's family or liege.`,
        `In parades, lances are held vertically, with the butt set in a stirrup or on the horseman's right thigh. On a march, the lance is held across the shoulder, across the saddlebow, or horizontally alongside the horse.`,
        `Through evolution, weaponsmiths sought to increase the damage caused by the lance by making them heavier.`,
        `One of the biggest problems with using a lance is the jarring impact on the user. In order to address this problem, a thick leather ring called a graper is fitted to the shaft just behind the wielder's hand. This acts as a stop against the armpit, halting the lance's rearward motion upon impact.`,
        `Another important part of a lance is a rest. The rest is a small, sometimes folding bracket fixed to the right side if the knight's breastplate armor. The graper is leaned against this rest when the lance is in use. The rest enables the knight to get the maximum push from his lance, inflicting the most damage.`,
        `The difference between the light, medium, and heavy, lances stems from the length (10' for a light, 12' for a medium, and 14' for a heavy), and weight (five pounds, ten pounds, and fifteen pounds for light, medium, and heavy respectively).`,
        `Each lance type can be used only if the rider is on a horse of corresponding type or greater. Thus, a knight on a heavy warhorse can use any lance, while the scout on a light warhorse is limited to the light lance.`,
        `Locathah riding on the backs of giant eels use light lances.`
    ]
}

const AEG_LANCE_INTERVIEW = {
    pages: [76, 77],
    text: [
        `*“Light lances can be used as a polearm by adventurers who do not relish combat on horseback, preferring instead to meet the enemy on foot. It can be hard to wield a heavy lance in a forest, so a medium lance may be a good compromise.*`,
        `*“Lances are best used as a mounted weapon. When used from the back of a charging mount, it inflicts double damage.*`,
        `*“Nothing is more awe-inspiring than a mounted knight, wielding her lance and charging a dragon. Of such things legends are made, and no mounted warrior worth his salt should be without his lance, especially a paladin. I know I have mine!”*`,
        `*— Maura Smallwood, Paladin*`
    ],
    attribute: [AEG_ATTRIBUTE.INTERVIEW],
    comment: `Allowing the usage of lances when not on horseback is a good change. This makes the weapon a viable pick as a weapon proficiency for campaigns that focus on dungeons, and see little mounted combat. The mounted double damage then become a situational bonus instead of the only reason to use the weapon.`
}

const AEG_LANCE_HISTORY = {
    pages: [77],
    text: [
        `The lance's history can be traced to the Middle East, and was widely used by Greco-Roman horsemen.`,
        `Though rendered obsolescent in 1600 by the advent of firearms, lances were still used by light cavalry until the 19th century, with many European armies maintaining use of the lance in the Russian Civil War and World War I. Two of the most well-known uses of the lance in the 20th century were the Polish lancers' charges against German armor in 1939, and the Italian charges against the Russians in 1942.`
    ],
    attribute: [AEG_ATTRIBUTE.HISTORY]
}

WEAPONS.Heavy_horse_lance[SOURCE.AEG.id] = new Weapon({
    name: "Heavy horse lance",
    footnote_marker: "@",
    sorting_group: "Lance",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    damage: new Damage("1d8+1", "3d6"),
    proficiencies: new Proficiencies({single: "Heavy horse lance"}),
    pages: [108],

    descriptions: [
        AEG_AT_DOUBLE_DAMAGE_CHARGING_MOUNT,
        AEG_LANCE_GENERAL,
        AEG_LANCE_INTERVIEW,
        AEG_LANCE_HISTORY
    ]
})

WEAPONS.Jousting_lance[SOURCE.AEG.id] = new Weapon({
    name: "Jousting lance",
    footnote_marker: "@",
    sorting_group: "Lance",
    cost: new Cost(20, CURRENCY.GP),
    weight_lbs: 20,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 10,
    damage: new Damage("1d3-1", "1d2-1"),
    proficiencies: new Proficiencies({single: "Jousting lance"}),
    pages: [108],

    descriptions: [
        AEG_AT_DOUBLE_DAMAGE_CHARGING_MOUNT,
        AEG_LANCE_GENERAL,
        {
            pages: [76, 77],
            text: [
                `**Jousting Lance**`,
                `Jousting lances, used in “jousts of peace,” are the heaviest lances, weighing 20 pounds and measuring at least 13 feet long. These lances are fitted with a three pronged head in order to prevent armor penetration. The prongs are short, blunt projections that emerge from the headpiece, as opposed to a sharp point. This lance is also known as a “courtesy lance.” In a full tilt, a joust of war, the head is blunt and may actually cause fatalities.`,
            ]
        },
        AEG_LANCE_INTERVIEW,
        AEG_LANCE_HISTORY
    ]
})

WEAPONS.Light_horse_lance[SOURCE.AEG.id] = new Weapon({
    name: "Light horse lance",
    footnote_marker: "@",
    sorting_group: "Lance",
    cost: new Cost(6, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 6,
    damage: new Damage("1d6", "1d8"),
    proficiencies: new Proficiencies({single: "Light horse lance"}),
    pages: [108],

    descriptions: [
        AEG_AT_DOUBLE_DAMAGE_CHARGING_MOUNT,
        AEG_LANCE_GENERAL,
        AEG_LANCE_INTERVIEW,
        AEG_LANCE_HISTORY
    ]
})

WEAPONS.Medium_horse_lance[SOURCE.AEG.id] = new Weapon({
    name: "Medium horse lance",
    footnote_marker: "@",
    sorting_group: "Lance",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d6+1", "2d6"),
    proficiencies: new Proficiencies({single: "Medium horse lance"}),
    pages: [108],

    descriptions: [
        AEG_AT_DOUBLE_DAMAGE_CHARGING_MOUNT,
        AEG_LANCE_GENERAL,
        AEG_LANCE_INTERVIEW,
        AEG_LANCE_HISTORY
    ]
})

WEAPONS.Lasso[SOURCE.AEG.id] = new Weapon({
    name: "Lasso",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 3,
    size: SIZE.L,
    speed: 10,
    proficiencies: new Proficiencies({single: "Lasso"}),
    pages: [108],

    descriptions: [
        {
            pages: [77, 78],
            text: [
                `**Lasso**`,
                `A lasso is a length of rope with a loop at the end, tied with a knot that enables the loop to be tightened. The wielder twirls the lasso and throws the loop at the intended target. If it hits, the lasso has encircled the target, enabling the attacker to dismount the victim, make him fall, pin him, strangle him, etc. The wielder must specify exactly what he wants the lasso to accomplish before making his attack roll.`,
                `A successful hit does not cause damage to the target, but incidental damage can occur from the results of certain actions performed with the lasso, such as making someone fall or strangling a victim.`,
                `The many tricks which can be performed with a lasso are outlined in the Equipment Chapter of the *The Complete Fighter's Handbook.*`,
                `A lasso may be severed by 2 hit points of cutting damage. A victim's Strength can break a lasso, using the character's Bend Bars/Lift Gates roll. Only one attempt can be made on any one lasso.`,
                `Lassos are also called lariats. Characters can take lasso as a weapon proficiency, but they should remember that the Rope Use nonweapon proficiency gives a +2 bonus to hit with a lasso.`
            ]
        },
        {
            pages: [78],
            text: [
                `*“Lasso? What sort of heroic weapon is a lasso? What is a warrior going to do, tie up his victim and make him die of embarrassment? Bah! If a warrior is so keen on using a length of hemp rope, let him learn Rope Use. That way, not only is there a better chance at hitting a victim with a lasso than if he were proficient with the lasso as a weapon, but the adventurer will also pick up many more tricks, rather than wasting time trying to become expert at throwing silly loops of rope! Lassos, indeed!”*`,
                `*— Kedar the Dark, Warrior of Adauntlynn*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        }
    ]
})

const AEG_MACE_GENERAL = {
    pages: [78],
    text: [
        `**Mace**`,
        `The mace is a direct descendant of the basic club, being nothing more than a wooden club with a stone or iron head mounted on the end. The head design varies, with some being spiked, others flanged, and still others with pyramidical knobs.`,
        `The mace has existed since man began working with metal. The first maces were made in order to give the club wielder more power in his swing.`,
        `High-level priests, knights, and even paladins may have a personalized, decorated mace that serves primarily as a symbol of rank.`,
        `Since the mace is a weapon that requires very little in the way of specialized training, it is favored weapon among goblins.`
    ]
}

const AEG_MACE_INTERVIEW = {
    pages: [79],
    text: [
        `*“Maces are a step up from the basic club, and are a good weapon especially for priests who cannot use edged weapons. Adventurers may find that the horseman's mace is actually a good secondary weapon for a footman, though the reverse is certainly not true!*`,
        `*“A mace is especially made for crushing things, especially helmets and armor.”*`
    ],
    attribute: [AEG_ATTRIBUTE.INTERVIEW]
}

const AEG_MACE_HISTORY = {
    pages: [79,80],
    text: [
        `The Romans armed their allied auxiliaries with bronze-headed maces, although they never used maces themselves.`,
        `Two styles of mace head patterns emerged before the 14th century. The first was a ferrule from which extended knot or node-shaped pieces, and the second was a geometrically designed head with vanes (conical or diamond-shaped flanges).`,
        `Gothic influence in the 14th century made maces more decorative, a trend which ended in the 16th century, when maces were given a more military form. Eastern European maces, especially those from Poland and Hungary, had onion-shaped heads, an idea taken from the Turkish maces. Maces were used as a weapon up until the 18th century.`,
        `During the Middle Ages, arming oneself with a mace took on significance among nobles and army commanders. The mace became a preferred weapon among wealthy or illustrious users, and it became symbolic of power, wealth, and renown. These maces were shaped or decorated in a manner that represented the wielder. This, the owner of a mace became recognized as a person of prominence and rank, with the number of ribs and flanges on the mace indicating the owner's status`
    ],
    attribute: [AEG_ATTRIBUTE.HISTORY]
}

WEAPONS.Footmans_mace[SOURCE.AEG.id] = new Weapon({
    name: "Footman's Mace",
    pages: [],

    descriptions: [
        AEG_MACE_GENERAL,
        {
            pages: [78,79],
            text: [
                `**Footman's Mace**`,
                `Footman's maces originated as heavy wooden truncheons, about two and a half feet in length and covered with iron studs. As time went by, flanged heads similar to the horseman's mace were used instead. This mace is a two-handed weapon.`,
                `There are two different types of footman's maces: an emergency weapon made from materials at hand and thrown together by a blacksmith, and the maces made by professional weaponsmiths for troops. In order to reflect the difference between the two types, the homemade mace should be given a -1 penalty to attack and damage rolls.`,
                `The hasty, emergency maces are usually a wooden handle with any sort of metal head attached.`
            ],
            comment: `Footman's mace is a size M weapon, and is therefore considered a one-handed weapon by the PHB rules. Trying to redefine it as a two-handed weapon is the same trend seen on the Footman's flail. If the designers wanted it to be a two-handed weapon they should make it size L and put it under the polearms. Only thing speaking towards making footman's mace a two-handed weapon is that it is not included in the *Fighter's handbook* section about using one-handed weapon in two-handed, though I think this omission is an error.`
        },
        AEG_MACE_INTERVIEW,
        AEG_MACE_HISTORY
    ]
})

WEAPONS.Horsemans_mace[SOURCE.AEG.id] = new Weapon({
    name: "Horseman's Mace",
    pages: [],

    descriptions: [
        AEG_MACE_GENERAL,
        {
            pages: [78,79],
            text: [
                `**Horseman's Mace**`,
                `The first horseman's maces were a wooden handle, about 18 inches long, with a leather wrist strap at the bottom of the handle so the weapon would not be dropped, and a metal head. As time progressed, knights preferred to have maces made entirely of metal.`,
                `The horseman's mace became an important weapon to the knight. Knights usually keep a mace slung over a hook on the saddlebow. Not surprisingly, an alternate name for the horseman's mace is the knight's mace. This type of mace is a one-handed weapon.`
            ],
        },
        AEG_MACE_INTERVIEW,
        AEG_MACE_HISTORY
    ]
})


WEAPONS.Main_gauche[SOURCE.AEG.id] = new Weapon({
    name: "Main-Gauche",
    cost: new Cost(3, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 2,
    damage: new Damage("1d4", "1d3"),
    proficiencies: new Proficiencies({single: "Main-Gauche"}),
    pages: [108],

    descriptions: [
        {
            pages: [80],
            text: [
                `**Main-Gauche**`,
                `The main-gauche (French for “left hand”) is a large dagger with a basket hilt. Since most swordsmen use their right hand to wield a sword, this dagger is meant for the left hand, wielded as a defensive weapon when a warrior is using the two-handed fighting technique. The main-gauche is also called a “left-hand dagger.”`,
                `The heavy basket of the main-gauche is the equivalent of an iron gauntlet for the purpose of hand-to-hand combat.`,
                `Fighters proficient with main-gauche gain a +1 bonus to hit with Disarm and Parry maneuvers. More information on fighting styles and maneuvers can be found in *The Complete Fighter's Handbook* in the Combat chapter.`
            ],
            comment: `The "two-handed fighting technique" is clearly suppose to be the "two weapon fighting technique", as the warrior is using two weapons in this scenario.`
        },
        {
            pages: [80, 81],
            text: [
                `*“A main-gauche causes the same damage as a normal dagger, but the former is designed especially for defense. It's important not to confuse the main-gauche with the parrying dagger. The latter has a different design, including longer quillons and sometimes a triple blade. A parrying dagger also has a greater likelihood of breaking an opponent's weapon. A main-gauche offers better protection to the user's hand. In any case, it is quite a sight to see a warrior using a sword in one hand and a main-gauche in the other.”*`,
                `*—Mendrill Halfelven, Bard*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        }
    ]
})

WEAPONS.Mancatcher[SOURCE.AEG.id] = new Weapon({
    name: "Mancatcher",
    footnote_marker: "**",
    cost: new Cost(30, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    speed: 7,
    proficiencies: new Proficiencies({single: "Mancatcher"}),
    pages: [108],

    descriptions: [
        AEG_2xASTERISK_DISMOUNT_RIDER,
        {
            pages: [81],
            text: [
                `**Mancatcher**`,
                `A mancatcher is a polearm with a special function: to capture an opponent without killing him. The weapon consists of a long pole with a set of spring-loaded, sharpened jaws at the end. The victim is caught between the jaws, which then snap shut.`,
                `The target, regardless of armor and other defensive devices (magical or otherwise), is treated as AC 10, though appropriate Dexterity bonuses are allowed. If a hit is scored, the opponent is caught, losing shield and Dexterity bonuses. In addition, the victim can be pushed and pulled around at the whim of the mancatcher's wielder.`,
                `While caught in the mancatcher, the victim suffers 1d2 hit points of damage per round. There is a 25% chance that the trapped character will fall to the ground.`,
                `The victim may attempt to escape the grip of a mancatcher by making a successful bend bars/lift gates roll, but he suffers an extra 1d2 points of damage while breaking away.`
            ]
        },
        {
            pages: [81,82],
            text: [
                `*“Mancatchers are good for pulling horsemen off their mounts and pinning them to the ground, but the weapon is only good on man-sized opponents. Smaller creatures like goblins and kobolds can just slip on through, and the larger creatures don't have the right frame, though why anyone would want to capture any of these disgusting things alive is beyond me.*`,
                `*“Mancatchers are used often by that foul, subterranean race of fish-men, the kuo-toa. Some adventurers who may have suffered the depredations of the kuo-toa and who see a character wielding a mancatcher may get a bit upset. Often it's best to steer clear of weapons that remind certain people of certain races, unless of course, someone is* really *good with the weapon in question!”*`,
                `*— Troxel the Inpredictable*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        }
    ]
})

WEAPONS.Morning_star[SOURCE.AEG.id] = new Weapon({
    name: "Morning star",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 12,
    size: SIZE.M,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 7,
    damage: new Damage("2d4", "1d6+1"),
    proficiencies: new Proficiencies({single: "Morning star"}),
    pages: [108],

    descriptions: [
        {
            pages: [82],
            text: [
                `**Morning Star**`,
                `The morning star is a wooden shaft topped with a metal head made up of a spiked iron sheath. Morning stars have an overall length of about four feet. Some such weapons have a round, oval, or cylindrical shaped head studded with spikes. Extending from most morning star heads, regardless of design, is a long point for thrusting.`,
                `The weapon is designed to allow the wielder to inflict greater damage with his swing. The weighted, spiked head adds to this ability significantly.`,
                `Long-handled morning stars are used by foot soldiers, while the short-handled version are used by horsemen. It is a very popular weapon due to its effectiveness and its simplicity of production.`,
                `The morning star traces its ancestry to the mace, which in turn traces its lineage back to the club.`,
                `Hobgoblins, a race that takes great delight in inflicting pain, often use morning stars. Troglodytes use stone morning stars.`
            ]
        },
        {
            pages: [82],
            text: [
                `*“Morning stars are clubs with a real nasty attitude. They can cause as much damage to a man as a longsword, probably because of them spikes. I hear tell that the morning star is called a bludgeoning weapon as well as a piercing weapon, but tell me, have you ever seen a sharp spike hit someone at high speeds and have that called bludgeoning?”*`,
                `*— Suriel, Cleric of Tyr*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        },
        {
            pages: [82,83],
            text: [
                `The morning star was derived from the Swiss Morgenstern (literally: “morning star”), and was used during the 16th and 17th centuries, especially in England. The weapon has the perverse nickname of “holy water sprinkler.”`,
                `The morning star was popular from the Middle Ages to the late 17th century, though its use continued among peasants and poor urban militiaman and gangs up to the 19th century.`
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Net[SOURCE.AEG.id] = new Weapon({
    name: "Net",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    speed: 10,
    proficiencies: new Proficiencies({single: "Net"}),
    pages: [108],

    descriptions: [
        {
            pages: [83],
            text: [
                `**Net**`,
                `The net is a tool that has been used as a weapon since the days when emerging civilizations held gladiatorial arena combat. This version of the net is an eight- to twelve-foot diameter circular net with weights around the edges and a trailing rope used to guide the net and pull it away. It is usually folded in such a way that it twirls open when thrown. It is tossed with one hand, with the attacker holding onto the guide rope with the other hand.`,
                `A successful hit with this weapon means that the victim is netted and must try to break free by making a Strength check once per round until successful. The netted victim cannot make any sort of attack until the net has been shaken off.`,
                `On the round after the victim is netted, the attacker has several options for his next action, including using another weapon to strike the entangled victim. The victim loses his Dexterity and shield bonuses to armor class until he is freed.`,
                `The attacker may improve his grip on the victim by looping the trailing rope around the netted character. This requires a normal attack roll for success, and the victim loses 4 points of effective Strength (for determining success of freeing oneself from the net) per successful round of attack. If the victim's Strength is reduced to zero, he is hopelessly tangled and cannot escape unless helped by someone outside the net.`,
                `If a warrior throws a net and misses, it is open and unfolded. It may still be thrown but it is no longer folded correctly and is consequently an unwieldy weapon. Attackers suffer a -3 penalty to hit when throwing an unfolded net.`,
                `A properly folded net allows the attacker to perform Disarm, Parry, and Pin maneuvers. Such attacks are at a -3 to hit if the net is unfolded.`,
                `Certain underwater races, such as nixies and sahuagin, use nets not only for fishing, but also as a combat weapon, usually when they wish to take a victim alive.`,
            ]
        },
        {
            pages: [83],
            text: [
                `*“This weapon is rather unusual, but it can be quite effective. Imagine, a weapon which, if it hits, will immobilize an opponent in just one round. Of course, such a weapon is not very effective on larger than man-sized or exceptionally strong creatures (such as an ogre), though it may buy a wounded adventurer some time, since a successful hit means that the victim must abandon plans for attacking and concentrate instead on getting out of the net.*`,
                `*“Characters who can set snares and traps ought to consider the net when making their little traps. It could come in handy for defense or in a hasty retreat.”*`,
                `*— Bramm Po, Illusionist*`
            ],
            attribute: [AEG_ATTRIBUTE.INTERVIEW]
        }
    ]
})

const AEG_PICK_GENERAL = {
    pages: [83],
    text: [
        `**Pick, Military**`,
        `The medieval military pick was a specialized weapon. It probably originated from the common mining tool. As armor grew heavier, the pick's form and function were soon adapted to a specialized role. This role was to penetrate the heavier armor types, from chain mail up through full plate armor. The military pick was a modification of a weapon called the *martel-de-fer*, a type of war hammer that had a hammerhead balanced by a thick, curved piercing fluke or “crow's beak.”`,
        `The military pick generally consists of a heavy piercing fluke mounted on a haft. The weapon might have either one or two flukes, and the haft might be spiked.`,
        `The weapon is popular with knights and the heavy foot soldiers of certain mercenary companies. Dwarves and gnomes are also fond of the weapon, and deep gnomes (svirfneblin) in particular use great numbers of them.`,
    ]
}

const AEG_PICK_INTERVIEW = {
    pages: [84],
    text: [
        `*“Races who particularly enjoy mining, such as gnomes, svirfneblin, and dwarves, can be found with these weapons. They usually know how to use a pick both as a tool and as a weapon, though they will first use normal weapons if given the chance. Sometimes they have to wield these as weapons against another race known for its subterranean diggings, and who also use the pick as a weapon: the duergar.”*`,
        `*— Nahac the Gnome Sage*`
    ],
    attribute: [AEG_ATTRIBUTE.INTERVIEW]
}

WEAPONS.Footmans_pick[SOURCE.AEG.id] = new Weapon({
    name: "Footman's Pick",
    pages: [],

    descriptions: [
        AEG_PICK_GENERAL,
        {
            pages: [84],
            text: [
                `**Footman's Pick**`,
                `The footman's version of this weapon has a longer haft (up to 5'), enabling it to be wielded with two hands. The weapon weights about six pounds and can be swing with great penetrating force.`
            ]
        },
        AEG_PICK_INTERVIEW
    ]
})

WEAPONS.Horsemans_pick[SOURCE.AEG.id] = new Weapon({
    name: "Horseman's Pick",
    pages: [],

    descriptions: [
        AEG_PICK_GENERAL,
        {
            pages: [84],
            text: [
                `**Horseman's Pick**`,
                `The horseman's pick is lighter (about 4 pounds) and has a shortened haft (about two feet), making it easier to wield from horseback. It is commonly used by knights and heavy mercenary horsemen, who face more heavily armored opponents. The deep gnomes' weapon is also of the lighter variety.`
            ]
        },
        AEG_PICK_INTERVIEW
    ]
})

const AEG_POLEARM_GENERAL = {
    pages: [84],
    text: [
        `**Polearms**`,
        `Also called staff weapons, polearms are defined as hafted weapons—edged weapons mounted on a short handle or on a longer shaft wielded with two hands. The shafts are usually made of wood, though metal shafts sometimes exists.`,
        `An alternative term for polearm is pollaxe, which is used to describe t
        any weapon which has a metal head in a combination of axe, beak, or hammer, mounted on a pole ranging four to six feet in length. Poll is the contemporary word for a steel head mounted on a staff, and the term should not be confused with “poleaxe.”`,
        `Though descriptions of the various polearm types follow, there are certain characteristics common with all pole weapons, as outlined here.`,
        `Polearms are easy to make and are used often by peasants and common foot soldiers. The polearm is a great equalizer for these troops, who often must fight armored men on horseback. A polearm gives the wielder a long reach without exposing himself to the swing of a sword. Setting polearms to receive a charge grants the wielder an initiative bonus.`,
        `A primary use of the polearm is to allow warriors in the second rank to attack over the shoulders of the front rank. Often times, a fighter with a hand weapon and shield will team up with one using a pole arm, and they will fight as a coordinated unit.`,
        `Polearms that have special attachments to topple mounted targets have a base 20% chance of success.`,
        `Special optional rules for implementing polearm tactics may be found in the Combat chapter in *The Complete Fighter's Handbook*.`,
        `Gnolls and hobgoblins make it a point to carry polearms often. A band of such creatures encountered carrying polearms will be knowledgeable in polearm tactics. Orcs favor halberds, pikes, and glaives.`,
        `While the Master Weapons Chart at the end of this chapter shows which polearms cause extra damage when set to receive a charge, any polearm can be used to receive a charge regardless of whether is causes extra damage.`
    ]
}

const AEG_POLEARM_INTERVIEW_1 = {
    pages: [84,85],
    text: [
        `***The Real Way To Use A Polearm***`,
        `*“Alright, listen up, for I am only going to say this once. I grow weary of seeing groups of bumbling amateurs running around with polearms, each person with a different type. One uses his halberd, another uses a pike, still another has a guisarme-voulge, and he cannot even pronounce it, let alone us it! This is ridiculous. If you are going to use a polearm, use it correctly! Here's how.*`,,
        `*“First of all, for the gods' sake, try to get some idea of where your group is going. Are you going to the jungle or a dense forest? You are? Then why buy a polearm, you fool!? You will have no room to wield it, and more often than not you'll wind up poking your comrade's eye out. Make sure that the terrain suits the weapon.*`,
        `*“Next, once you know that the destination justifies a polearm, each person should get the same type of polearm. The weapons vary in the speed with which they can be swung and the amount of space needed to wield the things. Different polearms complicate what should be a simple operation.*`,
        `*“When you see an enemy charging at you, have all the polearm bearers line up in the front row, with weapons set to receive the charge. In order to set for a charge, the wielder should stand sideways, leaning forward so the left shoulder faces the oncoming foe. The polearm should be set at an angle, with the head pointing away from the ground, facing up at the enemy. The end of the handle should rest against the instep of the right foot. Both hands hold the pole firmly. You are now ready to receive a charge.*`,
        `*“Once the enemy impales himself on the blades, you cannot just pull out the staff weapon and begin hitting the creature. Your non-polearm-wielding comrades behind you should begin throwing spells, hurling missiles, spears, whatever, at the impaled foes. Try your best to keep the enemy on the blade, and out of your reach.*`,
        `*“Now that's the way to use a polearm! It is a team effort that needs to be practiced often. Remember this, and perhaps it will save your life!”*`,
        `*— Fiona the Ranger, Daughter of Dierdre*`
    ],
    attribute: [AEG_ATTRIBUTE.INTERVIEW]
}

const AEG_POLEARM_INTERVIEW_2 = {
    pages: [88],
    text: [
        `*“Taken as en entire weapon group, polearms are useful weapon especially in an outdoor setting. Their advantages include a good reach, excellent defensive capability, and the ability to knock opponents off their mounts. Among the drawbacks of polearms as a whole are the amount of room needed to wield them, their diminished usefulness in close-quarters melee, their overall slowness, and their encumbrance. Also, with so many polearm types to choose from, it is unlikely that a group of adventurers all have the same weapon or that everyone in the group will want a polearm of any sort in the first place. Polearms are more effective if several people have them; a single adventurer wielding a halberd is not going to stop a row of four charging orcs. Remember the advice given earlier and try to co-ordinate polearm choices before going off to adventure.”*`,
        `*— Fiona, Daughter of Dierdre*`
    ],
    attribute: [AEG_ATTRIBUTE.INTERVIEW]
}

WEAPONS.Awl_pike[SOURCE.AEG.id] = new Weapon({
    name: "Awl pike",
    footnote_marker: "#",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 12,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 13,
    damage: new Damage("1d6", "1d12"),
    proficiencies: new Proficiencies({single: "Awl pike"}),
    pages: [108],

    descriptions: [
        AEG_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [85],
            text: [
                `**Awl Pike**`,
                `Also known just as a “pike” and a Morris pike (corruption of Moorish), this is an infantry spear ranging 16 to 22 feet in length. Awl heads are usually leaf- or lozenge-shaped. The pole is made of strong wood, such as ash. Many pike heads are made with two tongues of steel, nailed down the sides of the shaft in order to prevent the head from getting hacked off. The grip is often bound with cloth and the butt capped in steel to prevent the shaft from splitting. The awl pike has the dubious distinction of being the slowest polearm available. Add to this its mediocre damage against man-sized opponents and one is left with a weapon of questionable value, except when used en mass on the battlefield.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        {
            pages: [89],
            text: [
                `The sarisa, a Macedonian infantry spear, was the ancestor of the pike. The Swiss rediscovered the idea of mounting a spear head on a very long pole, and it became so popular that they adopted the pike as their national weapon in the 15th century. Their prowess with the pike, not only as a defensive weapon but as an offensive one, prompted other European nations to adopt it. The pike remained in use until the end of the 17th century, when muskets and bayonets made the long spears obsolete.`,
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Bardiche[SOURCE.AEG.id] = new Weapon({
    name: "Bardiche",
    sorting_group: "Polearm",
    cost: new Cost(7, CURRENCY.GP),
    weight_lbs: 12,
    size: SIZE.L,
    type: [WEAPON_TYPE.S],
    speed: 9,
    damage: new Damage("2d4", "2d6"),
    proficiencies: new Proficiencies({single: "Bardiche"}),
    pages: [109],

    descriptions: [
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [85],
            text: [
                `**Bardiche**`,
                `The word bardiche is the corrupted spelling of berdysh. The berdysh (Russian term) is in effect an elongated battleaxe with a large, narrow, curved axe head measuring 24 to 32 inches long, mounted on a pole five to eight feet long.`,
                `The upper part of the head can be used for thrusting, while the lower part is in the form of a langet. A langet is an iron strap used to increase the strength of the head and protect the most exposed part of the weapon from blows.`,
                `Berdysh require more room to wield than a pike or a spear, but the weapon has a unique function: it can be used as a gun rest. The smaller berdysh have two rings for attaching to a shoulder strap. This arrangement is popular among horsemen.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        {
            pages: [89],
            text: [
                `The berdysh were created by the Russians and used by Muscovite infantry during the 16th and 17th centuries. They were also used in Scandinavia and eastern Europe.`,
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Bec_de_corbin[SOURCE.AEG.id] = new Weapon({
    name: "Bec de corbin",
    sorting_group: "Polearm",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 9,
    damage: new Damage("1d8", "1d6"),
    proficiencies: new Proficiencies({single: "Bec de corbin"}),
    pages: [109],

    descriptions: [
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [85],
            text: [
                `**Bec de Corbin**`,
                `Also called the bec de faucon, the names mean “crow's beak” and “falcon's beak” respectively. This pole weapon has a hook much like a bird's beak and is ideal for cutting open armor like some great can opener. The weapon also has a hammer or axe side that delivers a solid hit. This is a highly specialized weapon, designed for the purpose of cutting armor then striking the now unarmored victim with the other side of the weapon. The pole shaft is eight feet long.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        {
            pages: [89],
            text: [
                `The bec de corbin (and faucon) was used by the upper classes during the Late Middle Ages and early Renaissance. The terms are French, but the weapons were so named by English writers!`,
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Bill_guisarme[SOURCE.AEG.id] = new Weapon({
    name: "Bill-guisarme",
    sorting_group: "Polearm",
    cost: new Cost(7, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 10,
    damage: new Damage("2d4", "1d10"),
    proficiencies: new Proficiencies({single: "Bill-guisarme"}),
    pages: [109],

    descriptions: [
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [85],
            text: [
                `**Bill-Guisarme**`,
                `Also known simply as a “bill,” this weapon is derived from an agricultural tool, the bill hook. Throughout its years of use, the bill's head went through many changes. Its most common head form is a sharp spike with a sturdy hook whose inside and outside edges were sharpened, and a cutting blade reminiscent of a cleaver. The pole length ranges around eight feet.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        {
            pages: [89],
            text: [
                `The bill was a popular weapon with the English, and, along with the halberd, remained in use longer than all other polearms, well into the early 17th century. The English bills had a shorter shaft length, usually around four feet, and were rather tough.`,
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Fauchard[SOURCE.AEG.id] = new Weapon({
    name: "Fauchard",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 8,
    damage: new Damage("1d6", "1d8"),
    proficiencies: new Proficiencies({single: "Fauchard"}),
    pages: [109],

    descriptions: [
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [86],
            text: [
                `**Fauchard**`,
                `Developed from the common agricultural sickle or scythe, the fauchard consists of a long, curving blade with a large, pointed head and a *fluke* (a small, curved hook found on many polearms). The head is mounted on a wooden pole about eight feet long. Peasants can often change scythes into fauchards.`,
                `The fauchard is classified as a glaive. It is not very good as a thrusting weapon, but is used mainly as a slashing weapon. It fulfils the need for a weapon that puts some distance between the wielder and his enemy.`,
                `Since the fauchard is not an instrument designed foremost as a weapon but rather a farming tool adapted for war, it is inefficient as a weapon of war, being rather bulky and needing a large area to be used properly.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
    ]
})

WEAPONS.Fauchard_fork[SOURCE.AEG.id] = new Weapon({
    name: "Fauchard-fork",
    sorting_group: "Polearm",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 9,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 8,
    damage: new Damage("1d8", "1d10"),
    proficiencies: new Proficiencies({single: "Fauchard-fork"}),
    pages: [109],

    descriptions: [
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [86],
            text: [
                `**Fauchard-Fork**`,
                `This term denotes a fauchard with the fluke attached. The fluke was added in order to improve the weapon's thrusting capability, but the effort was fruitless. It is still a bulky weapon, requiring much space to be wielded effectively.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
    ]
})

const AEG_POLEARM_GLAIVE_HISTORY = {
    pages: [89],
    text: [
        `The glaive (derived from the Latin *gladius*, meaning “sword”) blade increased in size over the years until it was big enough to have a nation's or ruler's coat of arms engraved upon it. It was often carried in parades. Glaives were introduced in the 14th century and favored by the French. The blade is said to resemble a large bread knife. The 16th century Italians and Germans favored the glaive as a palace guard weapon.`,
    ],
    attribute: [AEG_ATTRIBUTE.HISTORY]
}

WEAPONS.Glaive[SOURCE.AEG.id] = new Weapon({
    name: "Glaive",
    footnote_marker: "*",
    sorting_group: "Polearm",
    cost: new Cost(6, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 8,
    damage: new Damage("1d6", "1d10"),
    proficiencies: new Proficiencies({single: "Glaive"}),
    pages: [109],
    descriptions: [
        AEG_ASTERISK_DOUBLE_DAMAGE_AGAINST_L_CHARGE,
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [86],
            text: [
                `**Glaive**`,
                `The glaive is a pole weapon with a large head shaped like a knife or sword mounted on an eight- to ten-foot long shaft. The blade usually turns outward in order to increase the cutting area. Some glaives are fitted with flukes. Overall, the glaive's damage potential is not spectacular, but its long reach makes up for this. It effectively takes a normal sword blade and gives it a great reach.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        AEG_POLEARM_GLAIVE_HISTORY
    ]
})

WEAPONS.Glaive_guisarme[SOURCE.AEG.id] = new Weapon({
    name: "Glaive-guisarme",
    footnote_marker: "*",
    sorting_group: "Polearm",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 9,
    damage: new Damage("2d4", "2d6"),
    proficiencies: new Proficiencies({single: "Glaive-guisarme"}),
    pages: [109],
    descriptions: [
        AEG_ASTERISK_DOUBLE_DAMAGE_AGAINST_L_CHARGE,
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [86],
            text: [
                `**Glaive-Guisarme**`,
                `This term describes a glaive with a fluke mounted on the back of the blade. It is slower and heavier than a glaive, and its potential damage is nothing noteworthy.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        AEG_POLEARM_GLAIVE_HISTORY
    ]
})

const AEG_POLEARM_GUISARME_HISTORY = {
    pages: [89],
    text: [
        `The guisarme was used extensively between the 12th and 17th centuries.`,
    ],
    attribute: [AEG_ATTRIBUTE.HISTORY]
}

WEAPONS.Guisarme[SOURCE.AEG.id] = new Weapon({
    name: "Guisarme",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.S],
    speed: 8,
    damage: new Damage("2d4", "1d8"),
    proficiencies: new Proficiencies({single: "Guisarme"}),
    pages: [109],

    descriptions: [
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [86],
            text: [
                `**Guisarme**`,
                `Also called the gisarme or the giserne, the guisarme is an elaborately curved blade, much like the crescent blade of an axe, attached to a six-foot long staff. Thrusting spikes are often attached to the top of the shaft. The guisarme is suppose to have come from the farmer's pruning hook. The weapon may have contributed to the development of the berdysh and the halberd.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        AEG_POLEARM_GUISARME_HISTORY
    ]
})

WEAPONS.Guisarme_voulge[SOURCE.AEG.id] = new Weapon({
    name: "Guisarme-voulge",
    sorting_group: "Polearm",
    cost: new Cost(8, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 10,
    damage: new Damage("2d4", "2d4"),
    proficiencies: new Proficiencies({single: "Guisarme-voulge"}),
    pages: [109],

    descriptions: [
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [86],
            text: [
                `**Guisarme-Voulge**`,
                `This term describes the guisarme in its later stages, with a curved axe-head. It features a back spike, the fluke, for punching through armor, and the blade's end tapers for thrusting attacks. Often, the fluke is replaced with a sharp hook for use in dismounting riders. It is a slower weapon than the plain guisarme but causes comparable damage.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        AEG_POLEARM_GUISARME_HISTORY
    ]
})

WEAPONS.Halberd[SOURCE.AEG.id] = new Weapon({
    name: "Halberd",
    sorting_group: "Polearm",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 9,
    damage: new Damage("1d10", "2d6"),
    proficiencies: new Proficiencies({single: "Halberd"}),
    pages: [109],

    descriptions: [
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [86],
            text: [
                `**Halberd**`,
                `By far the oldest and most often used polearm, the halberd consists of a cleaverlike axe blade mounted on a staff averaging six feet in length. The axe blade is balanced at the rear with a fluke, and surmounted by a sharp spike, usually of quadrangular design. The fluke is sometimes replaced by a hook used to dismount cavalry. A halberd can be best described as a cross between a spear and an axe.`,
                `Though a halberd's main function is to dismount cavalry, it may also be employed as a thrusting and a cutting weapon. It is not a fast weapon, even compared to other polearms. Still, it does more damage to a man-sized opponent than all other polearms.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        {
            pages: [89,90],
            text: [
                `Halberds were introduced sometime between the 6th and the 9th centuries AD, when foot soldiers of Northern europe mounted their swords, called scramasax, on poles. The Swiss refined this weapon and wielded it with devastating skill. In fact, halberds were known to split a man's head from pate to jaw, armor notwithstanding! The halberd got its name during the first primitive versions made by the Swiss.`,
                `The word *halberd* comes from the German word *halm* (staff) and *barte* (axe).`,
                `Primitive halberds had a wide blade with a straight cutting edge. The staff fit through two sockets in the back of the blade. This design was probably inspired by the guisarme. By the end of the 15th century, the halberd was modified in order to increase its effectiveness. This is the halberd type most often referred to when using the term. The primitive halberds were soon referred to as the *Swiss vouge* (voulge). Like most polearms, the halberd fell into decline with the introduction of firearms.`,
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Hook_fauchard[SOURCE.AEG.id] = new Weapon({
    name: "Hook fauchard",
    sorting_group: "Polearm",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.S],
    speed: 9,
    damage: new Damage("1d4", "1d4"),
    proficiencies: new Proficiencies({single: "Hook fauchard"}),
    pages: [109],

    descriptions: [
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [86,87],
            text: [
                `**Hook-Fauchard**`,
                `Like the fauchard-fork, the hook-fauchard is another attempt to improve the fauchard. This weapon has a hook fitted on the blade's back. The hook is used to dismount cavalry. Like its predecessors, it was not a very effective weapon. Its damage potential is horrible compared to the fauchards that it was supposed to improve upon, and it is slower than the original fauchard.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
    ]
})

WEAPONS.Lucern_hammer[SOURCE.AEG.id] = new Weapon({
    name: "Lucern hammer",
    footnote_marker: "#",
    sorting_group: "Polearm",
    cost: new Cost(7, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.P, WEAPON_TYPE.B],
    speed: 9,
    damage: new Damage("2d4", "1d6"),
    proficiencies: new Proficiencies({single: "Lucern hammer"}),
    pages: [109],

    descriptions: [
        AEG_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [87],
            text: [
                `**Lucern Hammer**`,
                `The lucern hammer is a hammerhead with a spike at its rear, mounted on a long pole, reaching as much as ten feet in length. In some cases, the end is fitted with a spike to keep enemy soldiers at bay. It is one of the heavier pole weapons and is rather slow. The entire weapon is usually made of steel, including the pole, and often it is decorated with carvings and precious metal gilding.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        {
            pages: [90],
            text: [
                `Confusion often exists whether a lucern hammer is a hammer. It is safe to say yes, it is a hammer, and is alternatively called a war hammer. A short-handled version of the lucern hammer was used by mounted troops as early as the mid-13th century. It is longer than the weapon most adventurers call a war hammer and is used mainly by massed units on the battlefield. The lucern hammer gets its name from the Swiss city of Lucerne, whose armories were well-stocked with the weapon, so much so that scolars named them after the city.`,
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Military_fork[SOURCE.AEG.id] = new Weapon({
    name: "Military fork",
    footnote_marker: "*",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d8", "2d4"),
    proficiencies: new Proficiencies({single: "Military fork"}),
    pages: [109],

    descriptions: [
        AEG_ASTERISK_DOUBLE_DAMAGE_AGAINST_L_CHARGE,
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [87],
            text: [
                `**Military Fork**`,
                `The military fork is the warrior's version of a simple agricultural farming tool. The head consists of two parallel spikes, often fitted with hooks for pulling horsemen off their mounts. Certain versions of the fork have a blade mounted just below the spikes. The wooden staff is about seven feet long.`,
                `Forks are useful not only as thrusting weapons, but as tools for climbing the defender's ramparts, setting up ladders, and hoisting baskets of supplies.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        {
            pages: [90],
            text: [
                `Military forks are descended from farmer's pitchforks, though the former's spikes were straight as opposed to the curved spikes of the latter. This weapon appeared frequently during the Crusades and peasant revolts from the 15th to 19th centuries. In 1920. Polish peasants used forks to fight off Soviet troops attacking Warsaw.`,
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Partisan[SOURCE.AEG.id] = new Weapon({
    name: "Partisan",
    footnote_marker: "#",
    sorting_group: "Polearm",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 9,
    damage: new Damage("1d6", "1d6+1"),
    proficiencies: new Proficiencies({single: "Partisan"}),
    pages: [109],

    descriptions: [
        AEG_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [87],
            text: [
                `**Partisan**`,
                `The partisan (alternatively spelled “partizan”) is a staff weapon consisting of a long, tapering double-edged spear blade with two diagonally-set flukes at the base. The shaft is about eight feet long. The partisan's flukes may be used to catch and break opponents' weapons, as well as to inflict extra damage. Partisan heads are large enough to allow engraving and ornamentation.`
            ],
            comment: `More weapon breaker description without an actual rule for it.`
        },
        AEG_POLEARM_INTERVIEW_2,
        {
            pages: [90],
            text: [
                `Partisans are derivative of the langdebeve, a broad-bladed spear. The name *partisan* came from the people who wielded it, the partisans, in the late 15th century France and Italy. After its retirement as a weapon of war, partisans continued to be used as ceremonial weapons in royal courts. In fact, the Swiss Guards of the Vatican and the Yeomen of the Guard at the Tower of London still use partisans at state occasions or when in full dress.`,
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Ranseur[SOURCE.AEG.id] = new Weapon({
    name: "Ranseur",
    footnote_marker: "#",
    sorting_group: "Polearm",
    cost: new Cost(6, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    damage: new Damage("2d4", "2d4"),
    proficiencies: new Proficiencies({single: "Ranseur"}),
    pages: [109],

    descriptions: [
        AEG_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [87,88],
            text: [
                `**Ranseur**`,
                `Also known as the rancoon and the rawcon, the ranseur resembles a partisan, except that the ranseur's flukes are longer, resulting in a three-pronged head. The flukes are, however, shorter than the middle blade. Partisans are sturdier than ranseurs. The three prongs are large enough to puncture armor or trap a weapon and disarm the opponent (considered a Called Shot, -4 to hit, see Combat chapter of *The Complete Fighter's Handbook*).`
            ],
            comment: `Actual rules for a description!`
        },
        AEG_POLEARM_INTERVIEW_2,
    ]
})

WEAPONS.Spetum[SOURCE.AEG.id] = new Weapon({
    name: "Spetum",
    footnote_marker: "#",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    damage: new Damage("1d6+1", "2d6"),
    proficiencies: new Proficiencies({single: "Spetum"}),
    pages: [109],

    descriptions: [
        AEG_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [88],
            text: [
                `**Spetum**`,
                `Spetums are similar to ranseurs, except that the side blades sometimes angle backward, increasing the damage when the blade is pulled out of a wound. When the weapon is pulled out of a victim, he suffers an additional 1d2 hit points of damage due to the side blades. The spetum's shaft is eight feet long.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
    ]
})

WEAPONS.Voulge[SOURCE.AEG.id] = new Weapon({
    name: "Voulge",
    footnote_marker: "#",
    sorting_group: "Polearm",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 12,
    size: SIZE.L,
    type: [WEAPON_TYPE.S],
    speed: 10,
    damage: new Damage("2d4", "2d4"),
    proficiencies: new Proficiencies({single: "Voulge"}),
    pages: [109],

    descriptions: [
        AEG_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE,
        AEG_POLEARM_GENERAL,
        AEG_POLEARM_INTERVIEW_1,
        {
            pages: [88],
            text: [
                `**Voulge**`,
                `Also called the vouge and the Lochabar axe, this weapon is a large, long blade, narrowing to a spike at the top, with a hook-shaped fluke at the blade's rear. The staff is eight feet long. Though it is a simple weapon to make, this advantage is offset by the fact that it is one of the slowest polearms available.`
            ]
        },
        AEG_POLEARM_INTERVIEW_2,
        {
            pages: [90],
            text: [
                `The term *voulge* has been used to describe many types of polearms, thus its true meaning is obscure. A number of texts associate the voulge with the English bill, the French glaive, and the Swiss vouge, the latter of which is the accepted voulge form. The lochaber axe is a Scottish polearm used in the 16th to 18th centuries, most likely descended from the gisarme.`
            ],
            attribute: [AEG_ATTRIBUTE.HISTORY]
        }
    ]
})

WEAPONS.Quarterstaff[SOURCE.AEG.id] = new Weapon({
    name: "Quarterstaff",
    weight_lbs: 4,
    size: SIZE.L,
    type: [WEAPON_TYPE.B],
    speed: 4,
    damage: new Damage("1d6", "1d6"),
    proficiencies: new Proficiencies({single: "Quarterstaff"}),
    pages: [109],
    descriptions: []
})

WEAPONS.Sap[SOURCE.AEG.id] = new Weapon({
    name: "Sap",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 0.1,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    speed: 2,
    damage: new Damage("1d2", "1d2"),
    proficiencies: new Proficiencies({single: "Sap"}),
    pages: [109],
    descriptions: []
})

WEAPONS.Scourge[SOURCE.AEG.id] = new Weapon({
    name: "Scourge",
    cost: new Cost(1, CURRENCY.GP),
    weight_lbs: 2,
    size: SIZE.S,
    speed: 5,
    damage: new Damage("1d4", "1d2"),
    proficiencies: new Proficiencies({single: "Scourge"}),
    pages: [109],
    descriptions: []
})

WEAPONS.Sickle[SOURCE.AEG.id] = new Weapon({
    name: "Sickle",
    cost: new Cost(6, CURRENCY.SP),
    weight_lbs: 3,
    size: SIZE.S,
    type: [WEAPON_TYPE.S],
    speed: 4,
    damage: new Damage("1d4+1", "1d4"),
    proficiencies: new Proficiencies({single: "Sickle"}),
    pages: [109],
    descriptions: []
})

WEAPONS.Sling[SOURCE.AEG.id] = new Weapon({
    name: "Sling",
    cost: new Cost(5, CURRENCY.CP),
    weight_lbs: 0.1,
    size: SIZE.S,
    speed: 6,
    proficiencies: new Proficiencies({single: "Sling"}),
    pages: [109],
    descriptions: []
})
WEAPONS.Sling.ammunition.Bullet[SOURCE.AEG.id] = new Ammunition({
    name: "Sling bullet",
    cost: new Cost(1, CURRENCY.CP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    damage: new Damage("1d4+1", "1d6+1"),
    pages: [109],
})
WEAPONS.Sling.ammunition.Stone[SOURCE.AEG.id] = new Ammunition({
    name: "Sling stone",
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    damage: new Damage("1d4", "1d4"),
    pages: [109],
})

WEAPONS.Spear[SOURCE.AEG.id] = new Weapon({
    name: "Spear",
    proficiencies: new Proficiencies({single: "Spear"}),
    pages: [109],
    descriptions: []
})
WEAPONS.Spear.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "One-handed",
    cost: new Cost(8, CURRENCY.SP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 6,
    damage: new Damage("1d6", "1d8"),
    pages: [109],
})
WEAPONS.Spear.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "Two-handed",
    footnote_marker: "#",
    cost: new Cost(8, CURRENCY.SP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 6,
    damage: new Damage("1d8+1", "2d6"),
    pages: [109],

    descriptions: [
        AEG_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE
    ]
})

WEAPONS.Long_spear[SOURCE.AEG.id] = new Weapon({
    name: "Spear, long",
    proficiencies: new Proficiencies({single: "Long spear"}),
    pages: [109],
    descriptions: []
})
WEAPONS.Long_spear.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "One-handed",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    damage: new Damage("1d8", "1d8+1"),
    pages: [109],
})
WEAPONS.Long_spear.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "Two-handed",
    footnote_marker: "#",
    cost: new Cost(5, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 8,
    damage: new Damage("2d6", "3d6"),
    pages: [109],

    descriptions: [
        AEG_HASHTAG_DOUBLE_DAMAGE_RECEIVE_CHARGE
    ]
})

WEAPONS.Spear_stone[SOURCE.AEG.id] = new Weapon({
    name: "Spear, stone",
    proficiencies: new Proficiencies({single: "Spear"}),
    pages: [109],
    descriptions: []
})
WEAPONS.Spear_stone.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "One-handed",
    cost: new Cost(8, CURRENCY.CP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 6,
    damage: new Damage("1d4", "1d6"),
    pages: [109],
})
WEAPONS.Spear_stone.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "Two-handed",
    cost: new Cost(8, CURRENCY.CP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 6,
    damage: new Damage("1d6", "2d4"),
    pages: [109],

    descriptions: []
})

WEAPONS.Staff_sling[SOURCE.AEG.id] = new Weapon({
    name: "Staff sling",
    cost: new Cost(2, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.M,
    speed: 11,
    proficiencies: new Proficiencies({single: "Staff sling"}),
    pages: [109],

    descriptions: [

    ]
})
WEAPONS.Staff_sling.ammunition.Stinkpot[SOURCE.AEG.id] = new Ammunition({
    name: "Stinkpot",
    cost: new Cost(1, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.S,
    type: [WEAPON_TYPE.B],
    damage: new Damage("1d3", "1d3"),
    pages: [109],
})

WEAPONS.Stiletto[SOURCE.AEG.id] = new Weapon({
    name: "Stiletto",
    cost: new Cost(5, CURRENCY.SP),
    weight_lbs: 0.5,
    size: SIZE.S,
    type: [WEAPON_TYPE.P],
    speed: 2,
    damage: new Damage("1d3", "1d2"),
    proficiencies: new Proficiencies({single: "Stiletto"}),
    pages: [109],

    descriptions: [

    ]
})

WEAPONS.Bastard_sword[SOURCE.AEG.id] = new Weapon({
    name: "Bastard sword",
    sorting_group: "Sword",
    proficiencies: new Proficiencies({single: "Bastard sword"}),
    pages: [109],

    descriptions: [

    ]
})
WEAPONS.Bastard_sword.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "One-handed",
    cost: new Cost(25, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 6,
    damage: new Damage("1d8", "1d12"),
    pages: [109]
})
WEAPONS.Bastard_sword.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "Two-handed",
    cost: new Cost(25, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 8,
    damage: new Damage("2d4", "2d8"),
    pages: [109]
})

WEAPONS.Broad_sword[SOURCE.AEG.id] = new Weapon({
    name: "Broad sword",
    sorting_group: "Sword",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 5,
    damage: new Damage("2d4", "1d6+1"),
    proficiencies: new Proficiencies({single: "Broad sword"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Claymore[SOURCE.AEG.id] = new Weapon({
    name: "Claymore",
    sorting_group: "Sword",
    cost: new Cost(25, CURRENCY.GP),
    weight_lbs: 10,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 8,
    damage: new Damage("2d4", "2d8"),
    proficiencies: new Proficiencies({single: "Claymore"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Cutlass[SOURCE.AEG.id] = new Weapon({
    name: "Cutlass",
    sorting_group: "Sword",
    cost: new Cost(12, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 5,
    damage: new Damage("1d6", "1d8"),
    proficiencies: new Proficiencies({single: "Cutlass"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Drusus[SOURCE.AEG.id] = new Weapon({
    name: "Drusus",
    sorting_group: "Sword",
    cost: new Cost(50, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 3,
    damage: new Damage("1d6+1", "1d8+1"),
    proficiencies: new Proficiencies({single: "Drusus"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Falchion[SOURCE.AEG.id] = new Weapon({
    name: "Falchion",
    sorting_group: "Sword",
    cost: new Cost(17, CURRENCY.GP),
    weight_lbs: 8,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 5,
    damage: new Damage("1d6+1", "2d4"),
    proficiencies: new Proficiencies({single: "Falchion"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Khopesh[SOURCE.AEG.id] = new Weapon({
    name: "Khopesh",
    sorting_group: "Sword",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 7,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 9,
    damage: new Damage("2d4", "1d6"),
    proficiencies: new Proficiencies({single: "Khopesh"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Long_sword[SOURCE.AEG.id] = new Weapon({
    name: "Long sword",
    sorting_group: "Sword",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 5,
    damage: new Damage("1d8", "1d12"),
    proficiencies: new Proficiencies({single: "Long sword"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Rapier[SOURCE.AEG.id] = new Weapon({
    name: "Rapier",
    sorting_group: "Sword",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 4,
    damage: new Damage("1d6+1", "1d8+1"),
    proficiencies: new Proficiencies({single: "Rapier"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Sabre[SOURCE.AEG.id] = new Weapon({
    name: "Sabre",
    sorting_group: "Sword",
    cost: new Cost(17, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 4,
    damage: new Damage("1d6+1", "1d8+1"),
    proficiencies: new Proficiencies({single: "Sabre"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Scimitar[SOURCE.AEG.id] = new Weapon({
    name: "Scimitar",
    sorting_group: "Sword",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 4,
    size: SIZE.M,
    type: [WEAPON_TYPE.S],
    speed: 5,
    damage: new Damage("1d8", "1d8"),
    proficiencies: new Proficiencies({single: "Scimitar"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Short_sword[SOURCE.AEG.id] = new Weapon({
    name: "Short sword",
    sorting_group: "Sword",
    cost: new Cost(10, CURRENCY.GP),
    weight_lbs: 3,
    size: SIZE.M,
    type: [WEAPON_TYPE.P],
    speed: 3,
    damage: new Damage("1d6", "1d8"),
    proficiencies: new Proficiencies({single: "Short sword"}),
    pages: [109],

    descriptions: [],

    comment: `Size M looks incorrect. Short swords are an offhand weapon.`
})

WEAPONS.Two_handed_sword[SOURCE.AEG.id] = new Weapon({
    name: "Two-handed sword",
    sorting_group: "Sword",
    cost: new Cost(50, CURRENCY.GP),
    weight_lbs: 15,
    size: SIZE.L,
    type: [WEAPON_TYPE.S],
    speed: 10,
    damage: new Damage("1d10", "3d6"),
    proficiencies: new Proficiencies({single: "Two-handed sword"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Trident[SOURCE.AEG.id] = new Weapon({
    name: "Trident",
    proficiencies: new Proficiencies({single: "Trident"}),
    pages: [109],

    descriptions: [

    ]
})
WEAPONS.Trident.grip[HANDEDNESS.ONE_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "One-handed",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d6+1", "3d4"),
    pages: [109]
})
WEAPONS.Trident.grip[HANDEDNESS.TWO_HANDED.id][SOURCE.AEG.id] = new Weapon({
    name: "Two-handed",
    cost: new Cost(15, CURRENCY.GP),
    weight_lbs: 5,
    size: SIZE.L,
    type: [WEAPON_TYPE.P],
    speed: 7,
    damage: new Damage("1d8+1", "3d4"),
    pages: [109]
})

WEAPONS.Warhammer[SOURCE.AEG.id] = new Weapon({
    name: "War hammer",
    cost: new Cost(2, CURRENCY.GP),
    weight_lbs: 6,
    size: SIZE.M,
    type: [WEAPON_TYPE.B],
    speed: 4,
    damage: new Damage("1d4+1", "1d4"),
    proficiencies: new Proficiencies({single: "War hammer"}),
    pages: [109],

    descriptions: []
})

WEAPONS.Whip[SOURCE.AEG.id] = new Weapon({
    name: "Whip",
    cost: new Cost(1, CURRENCY.SP),
    weight_lbs: 2,
    size: SIZE.M,
    speed: 8,
    damage: new Damage("1d2", "1"),
    proficiencies: new Proficiencies({single: "Whip"}),
    pages: [109],

    descriptions: []
})
//#endregion
module.exports = WEAPONS;