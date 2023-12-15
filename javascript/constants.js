const SOURCE = {
    PHB: {id: "PHB", title: "Player's Handbook"},
    DMG: {id: "DMG", title: "Dungeon Master Guide"},
    AEG: {id: "AEG", title: "Arms and Equipment Guide"},
    WIZARDS_HANDBOOK: {id: "Complete Wizard's Handbook", title:"The Complete Wizard's Handbook"},
    COMBAT_AND_TACTICS: {id: "Combat and Tactics", title:"PLAYER'S OPTION: Combat & Tactics"},
    SAGE_ADVICE: {id: "Sage Advice", title: "Dragon Magazine: Sage Advice"},
    HIGH_LEVEL_CAMPAIGNS: {id: "DMGR:High-Level Campaigns", title: "Dungeon Master Option: High-Level Campaign"},
    WIZARD_SPELL_COMPENDIUM_4: {id: 'WSC 4', title: "Wizard's Spell Compendium Volume Four"}
}

const GAME_SYSTEM = {
    FIRST_EDITION: {id: '1E'},
    SECOND_EDITION: {id: '2E'},
}

const ATTRIBUTE = {
    SPELL: {id: 'Spell'},
    CLASS: {id: 'Class'},
    // RACE: {id: 'Race'},
    // WEAPON: {id: 'Weapon'},
    DUAL_CLASS_IN_GROUP: {id: 'Dual-class within group', title: 'Dual-class in the same group'},

    ELVEN_RESISTANCE: {id: "Elven resistance", title: "Elven resistance to Sleep and Charm"},
    GNOME_BASTARD_SWORD: {id: "Gnome Bastard sword", title: "Gnomes with Bastard sword"},
    RANGED_IN_MELEE: {id: "Ranged in melee", title: "Ranged weapons in melee combat"},
    TWO_WEAPONS_STRENGTH: {id: "Two weapons Strength", title: 'Two weapons and Strength bonus'},
    BOWS_AND_STRENGTH: {id: "Bows and Strength", title: "Bows and Strength bonus"},
    WIZARD_ELVEN_CHAIN: {id: 'Wizard in Elven chain mail'},
    WIZARD_ARMOR: {id: 'Wizard in metal armor'},
    INTELLIGENCE_VS_ILLUSIONS: {id: "Int vs illusion", title: "High Intelligence illusion immunity"},
    D30: {id: "d30", title: "What comes after a d20?"},
    SCROLL: {id: "Scroll", title: "Scroll rules and limitations"},
    MAGIC_ITEM_SIZE: {id: "Magic item size", title: "Who fit magic items?"},
    PANTHEON: {id: "Pantheon", title: "Pantheon of the Month"},
    MONSTER_ABILITY_SCORES: {id: "Monster Ability Scores"},

    DISPEL_MAGIC: {id: 'Dispel Magic'},
    TURN_UNDEAD: {id: 'Turn Undead'},
    INVISIBILITY: {id: 'Invisibility'},
    CHARM: {id: 'Charm'},
    BLINDNESS: {id: 'Blindness'},
    DEAFNESS: {id: 'Deafness'},
    SILENCE: {id: 'Silence'},
    STONESKIN: {id: "Stoneskin"},
    DOT: {id: "Continuing Damage"},
    MAGICAL_AGING: {id: "Magical aging"},

    MORNING_STAR: {id: "Morningstar", title: "What is a morning star?"},
    PRONOUNCE_DROW: {id: 'Pronounce drow', title: 'How to pronouncing "drow"'},
    PRONOUNCE_FLIND: {id: 'Pronounce flind', title: 'How to pronouncing "flind"'},
    APRIL_FOOLS: {id: 'April Fools'},
};

module.exports = {
    SOURCE,
    GAME_SYSTEM,
    ATTRIBUTE,
};