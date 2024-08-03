const SOURCE = {
    PHB: {id: "PHB", title: "Player’s Handbook"},
    DMG: {id: "DMG", title: "Dungeon Master Guide"},
    AEG: {id: "AEG", title: "Arms and Equipment Guide"},
    WIZARDS_HANDBOOK: {id: "Complete Wizards Handbook", title:"The Complete Wizard’s Handbook"},
    PSIONICS_HANDBOOK: {id: "Complete Psionics Handbook", title:"The Complete Psionics Handbook"},
    PALADINS_HANDBOOK: {id: "Complete Paladins Handbook", title:"The Complete Paladin’s Handbook"},
    DRUIDS_HANDBOOK: {id: "Complete Druids Handbook", title:"The Complete Druid’s Handbook"},
    NECROMANCERS_HANDBOOK: {id: "Complete Book of Necromancers", title:"The Complete Book of Necromancers"},
    THE_WILL_AND_THE_WAY: {id: "The Will and the Way", title:"The Will and the Way"},
    COMBAT_AND_TACTICS: {id: "Combat and Tactics", title:"PLAYER’S OPTION: Combat & Tactics"},
    SPELLS_AND_MAGIC: {id: "Spells and Magic", title:"PLAYER’S OPTION: Spells & Magic"},
    SAGE_ADVICE: {id: "Sage Advice", title: "Dragon Magazine: Sage Advice"},
    HIGH_LEVEL_CAMPAIGNS: {id: "DMGR High-Level Campaigns", title: "Dungeon Master Option: High-Level Campaign"},
    WIZARD_SPELL_COMPENDIUM: {id: 'WSC', title: "Wizard’s Spell Compendium"},
    PRIEST_SPELL_COMPENDIUM: {id: 'PSC', title: "Priest’s Spell Compendium"},
    SHARED_SPELLS: {id: 'Shared spell'}
}

const GAME_SYSTEM = {
    FIRST_EDITION: {id: '1E'},
    SECOND_EDITION: {id: '2E'},
}

const ATTRIBUTE = {
    SPELL: {id: 'Spell'},
    PSIONICS: {id: 'Psionics', title: 'Psionics (incomplete)'},
    CLASS: {id: 'Class'},
    RACE: {id: 'Race', title: 'Race (incomplete)'},
    WEAPON: {id: 'Weapon', title:'Weapon (incomplete)'},
    DUAL_CLASS_IN_GROUP: {id: 'Dual-class within group', title: 'Dual-class in the same group'},

    ELVEN_RESISTANCE: {id: "Elven resistance", title: "Elven resistance to Sleep and Charm"},
    GNOME_BASTARD_SWORD: {id: "Gnome Bastard sword", title: "Gnomes with Bastard sword"},
    RANGED_IN_MELEE: {id: "Ranged in melee", title: "Ranged weapons in melee combat"},
    TWO_WEAPONS_STRENGTH: {id: "Two weapons Strength", title: 'Two weapons and Strength bonus'},
    BOWS_AND_STRENGTH: {id: "Bows and Strength", title: "Bows and Strength bonus"},
    WIZARD_ELVEN_CHAIN: {id: 'Wizard in Elven chain mail'},
    WIZARD_ARMOR: {id: 'Wizard in metal armor'},
    PALADIN_HOLY_SWORD: {id:'Paladin with Holy sword'},
    INTELLIGENCE_VS_ILLUSIONS: {id: "Int vs illusion", title: "High Intelligence illusion immunity"},
    D30: {id: "d30", title: "What comes after a d20?"},
    SCROLL: {id: "Scroll", title: "Scroll rules and limitations"},
    MAGIC_ITEM_SIZE: {id: "Magic item size", title: "Who fit magic items?"},
    PANTHEON: {id: "Pantheon", title: "Pantheon of the Month"},
    MONSTER_ABILITY_SCORES: {id: "Monster Ability Scores"},
    NAT1_SAVING_THROW: {id: "Nat1 save", title: "Nat 1 Saving Throw always fails"},

    DISPEL_MAGIC: {id: 'Dispel Magic'},
    TURN_UNDEAD: {id: 'Turn Undead'},
    INVISIBILITY: {id: 'Invisibility'},
    CHARM: {id: 'Charm'},
    BLINDNESS: {id: 'Blindness', title: 'Blindness/Darkness'},
    DEAFNESS: {id: 'Deafness'},
    SILENCE: {id: 'Silence'},
    STONESKIN: {id: "Stoneskin"},
    DOT: {id: "Continuing Damage"},
    MAGICAL_AGING: {id: "Magical aging"},
    TOUCH_SPELLS: {id: "Touch spells", title: "Touch attack"},
    SPELL_ATTACK_ROLL: {id: "Spells with Attack Rolls"},

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