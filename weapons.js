var iFileName = "TheToddLuci0's Custom Weapons";

WeaponsList['guitar axe'] = {
  // https://www.dandwiki.com/wiki/Guitar_Axe_(5e_Equipment)
	name : "Guitar Axe",\
  //TODO: Replace HB with a custom source ID
	source : ["HB", 0],
	defaultExcluded : true,
	regExpSearch : /^(?=.*guitar)(?=.*axe).*$/i,
	type : "AlwaysProf",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 10, "slashing"],
	range : "melee",
	description : "Heavy, Two Handed, Special",
	tooltip : "A guitar affixed with two blades, used by bards to kill their enemies. All characters proficient with lutes are proficient this weapon, and can be use it as a musical instrument.",
	special : true,
	list : "melee",
	weight : 8,
	isAlwaysProf : true
	
}
