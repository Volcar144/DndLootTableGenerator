// Item descriptions
const itemDescriptions = {
    "Potion of Healing": "A potion that heals 2d4+2 HP when consumed.",
    "Torch": "A stick with a flammable substance at one end that can be lit to provide light for up to 6 hours.",
    "Rope": "50 feet of hempen rope. Useful for climbing, binding, or various other tasks.",
    "Dagger": "A simple melee weapon dealing 1d4 piercing damage. Can be thrown.",
    "Backpack": "A container for holding gear and supplies.",
    "Crowbar": "A lever used to open or force apart objects.",
    "Hammer": "A tool used for driving nails or breaking things.",
    "Lantern": "A portable light source.",
    "Shovel": "A tool for digging.",
    "Tent": "A portable shelter made of cloth.",
    "Vial of Acid": "A small container holding a corrosive substance.",
    "Bag of Sand": "A bag filled with sand.",
    "Iron Pot": "A container used for cooking.",
    "Ink Pen": "A pen for writing.",
    "Flask of Oil": "A container of flammable oil.",
    "Rations": "Packaged food supplies.",
    "Sleeping Bag": "A padded bag for sleeping in.",
    "Signal Whistle": "A whistle used to signal others.",
    "Tinderbox": "A small container with flint and tinder for starting fires.",
    "Waterskin": "A container for holding water.",
    "5 gp": "5 gold pieces.",
    "10 gp": "10 gold pieces.",
    "15 gp": "15 gold pieces.",
    "Potion of Greater Healing": "A potion that heals 4d4+4 HP when consumed.",
    "Magic Wand": "A wand that can be used to cast a spell.",
    "Elven Cloak": "A cloak that gives advantage on Stealth checks.",
    "Bag of Holding": "A magical bag that can hold more than its size would suggest.",
    "Boots of Elvenkind": "Boots that make no sound, granting advantage on Stealth checks.",
    "Bracers of Archery": "Bracers that grant proficiency and bonuses to archery.",
    "Cloak of Protection": "A cloak that provides a bonus to AC and saving throws.",
    "Driftglobe": "A magical orb that provides light.",
    "Goggles of Night": "Goggles that grant darkvision.",
    "Hat of Disguise": "A hat that allows the wearer to cast Disguise Self at will.",
    "Horn of Blasting": "A horn that emits a powerful blast of sound.",
    "Lantern of Revealing": "A lantern that reveals invisible creatures and objects.",
    "Periapt of Health": "A pendant that protects against disease.",
    "Quiver of Ehlonna": "A quiver that can hold multiple items of varying sizes.",
    "Ring of Jumping": "A ring that allows the wearer to cast Jump at will.",
    "Ring of Warmth": "A ring that provides resistance to cold damage.",
    "25 gp": "25 gold pieces.",
    "50 gp": "50 gold pieces.",
    "75 gp": "75 gold pieces.",
    "Sword of Sharpness": "A sword that deals extra damage and can sever limbs.",
    "Ring of Protection": "A ring that provides a bonus to AC and saving throws.",
    "Amulet of Health": "An amulet that increases the wearer's Constitution score.",
    "Boots of Speed": "Boots that allow the wearer to move faster.",
    "Cloak of Displacement": "A cloak that makes the wearer harder to hit.",
    "Gem of Seeing": "A gem that allows the user to see through illusions.",
    "Horn of Valhalla": "A horn that summons warrior spirits.",
    "Ioun Stone": "A magical stone that grants various benefits.",
    "Mace of Disruption": "A mace that deals extra damage to undead.",
    "Necklace of Fireballs": "A necklace that can cast Fireball.",
    "Ring of Spell Turning": "A ring that can reflect spells.",
    "Robe of Stars": "A robe that provides bonuses and allows travel to the Astral Plane.",
    "Rod of Absorption": "A rod that can absorb spells cast at the user.",
    "Staff of Healing": "A staff that can cast healing spells.",
    "Wand of Fireballs": "A wand that can cast Fireball.",
    "100 gp": "100 gold pieces.",
    "200 gp": "200 gold pieces.",
    "300 gp": "300 gold pieces.",
    "Staff of Power": "A powerful staff with various magical abilities.",
    "Vorpal Sword": "A sword that can decapitate on a critical hit.",
    "Ring of Regeneration": "A ring that grants regeneration.",
    "Rod of Lordly Might": "A rod with various magical functions.",
    "Crystal Ball": "A crystal ball that can be used for scrying.",
    "Cubic Gate": "A magical item that allows travel to other planes.",
    "Horn of Blasting": "A horn that emits a powerful blast of sound.",
    "Manual of Bodily Health": "A manual that increases Constitution score.",
    "Manual of Gainful Exercise": "A manual that increases Strength score.",
    "Manual of Quickness of Action": "A manual that increases Dexterity score.",
    "Tome of Clear Thought": "A tome that increases Intelligence score.",
    "Tome of Leadership and Influence": "A tome that increases Charisma score.",
    "Tome of Understanding": "A tome that increases Wisdom score.",
    "500 gp": "500 gold pieces.",
    "750 gp": "750 gold pieces.",
    "1000 gp": "1000 gold pieces.",
    "Deck of Many Things": "A deck of cards with powerful magical effects.",
    "Sword of Kas": "A legendary sword with powerful abilities.",
    "Staff of the Magi": "A staff with a wide range of magical abilities.",
    "Belt of Storm Giant Strength": "A belt that increases Strength to 29.",
    "Cloak of Invisibility": "A cloak that grants invisibility.",
    "Crystal Ball of True Seeing": "A crystal ball that sees through illusions.",
    "Horn of Valhalla (Iron)": "A horn that summons berserkers.",
    "Mantle of Spell Resistance": "A mantle that grants resistance to spells.",
    "Ring of Three Wishes": "A ring that grants wishes.",
    "Rod of Lordly Might": "A rod with various magical functions.",
    "Staff of the Woodlands": "A staff that aids in natural magic.",
    "Talisman of Ultimate Evil": "A talisman that holds powerful evil magic.",
    "Wand of Orcus": "A wand with necromantic powers.",
    "1500 gp": "1500 gold pieces.",
    "2000 gp": "2000 gold pieces.",
    "2500 gp": "2500 gold pieces."
};

// Generate loot table based on number of items requested
function generateLootTable(numItems) {
    const items = {
        common: [
            "Potion of Healing", "Torch", "Rope", "Dagger", "Backpack", "Crowbar", "Hammer", "Lantern", "Shovel", "Tent",
            "Vial of Acid", "Bag of Sand", "Iron Pot", "Ink Pen", "Flask of Oil", "Rations", "Sleeping Bag", "Signal Whistle",
            "Tinderbox", "Waterskin", "5 gp", "10 gp", "15 gp"
        ],
        uncommon: [
            "Potion of Greater Healing", "Magic Wand", "Elven Cloak", "Bag of Holding", "Boots of Elvenkind", "Bracers of Archery",
            "Cloak of Protection", "Driftglobe", "Goggles of Night", "Hat of Disguise", "Horn of Blasting", "Lantern of Revealing",
            "Periapt of Health", "Quiver of Ehlonna", "Ring of Jumping", "Ring of Warmth", "25 gp", "50 gp", "75 gp"
        ],
        rare: [
            "Sword of Sharpness", "Ring of Protection", "Amulet of Health", "Boots of Speed", "Cloak of Displacement",
            "Gem of Seeing", "Horn of Valhalla", "Ioun Stone", "Mace of Disruption", "Necklace of Fireballs", "Ring of Spell Turning",
            "Robe of Stars", "Rod of Absorption", "Staff of Healing", "Wand of Fireballs", "100 gp", "200 gp", "300 gp"
        ],
        very_rare: [
            "Staff of Power", "Vorpal Sword", "Ring of Regeneration", "Rod of Lordly Might", "Crystal Ball", "Cubic Gate",
            "Horn of Blasting", "Manual of Bodily Health", "Manual of Gainful Exercise", "Manual of Quickness of Action",
            "Tome of Clear Thought", "Tome of Leadership and Influence", "Tome of Understanding", "500 gp", "750 gp", "1000 gp"
        ],
        legendary: [
            "Deck of Many Things", "Sword of Kas", "Staff of the Magi"
        i", "Vorpal Sword", "Belt of Storm Giant Strength", "Cloak of Invisibility", "Crystal Ball of True Seeing",
            "Horn of Valhalla (Iron)", "Mantle of Spell Resistance", "Ring of Three Wishes", "Rod of Lordly Might",
            "Staff of the Woodlands", "Talisman of Ultimate Evil", "Wand of Orcus", "1500 gp", "2000 gp", "2500 gp"
        ]
    };

    let lootTable = [];
    let usedRolls = new Set();
    let totalDiceValue = 0;

    while (lootTable.length < numItems && usedRolls.size < 20 && totalDiceValue <= 20) {
        const d20 = Math.floor(Math.random() * 20) + 1;

        if (usedRolls.has(d20)) {
            continue; // Skip if this roll value has already been used
        }

        let itemType;
        if (d20 <= 10) {
            itemType = 'common';
        } else if (d20 <= 15) {
            itemType = 'uncommon';
        } else if (d20 <= 18) {
            itemType = 'rare';
        } else if (d20 === 19) {
            itemType = 'very_rare';
        } else {
            itemType = 'legendary';
        }

        const itemList = items[itemType];
        const randomItemIndex = Math.floor(Math.random() * itemList.length);
        const randomItem = itemList[randomItemIndex];

        usedRolls.add(d20);
        lootTable.push({ item: randomItem, rarity: itemType, roll: d20 });

        totalDiceValue += d20;
    }

    return lootTable;
}

// Display loot table in HTML
function displayLootTable(lootTable) {
    const lootTableDiv = document.getElementById('lootTable');
    lootTableDiv.innerHTML = "<h2>Generated Loot Table</h2>";

    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Rarity</th>
            <th>Dice Roll</th>
            <th>Item</th>
        </tr>
    `;

    lootTable.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.rarity}</td>
            <td>${item.roll}</td>
            <td class="item" data-item="${item.item}">${item.item}</td>
        `;
        table.appendChild(row);
    });

    lootTableDiv.appendChild(table);

    // Add click event listener to items
    const items = document.getElementsByClassName('item');
    Array.from(items).forEach(item => {
        item.addEventListener('click', () => {
            const itemName = item.dataset.item;
            const itemDescription = itemDescriptions[itemName];

            showModal(itemName, itemDescription);
        });
    });
}

// Show modal with item description
function showModal(itemName, itemDescription) {
    const modal = document.getElementById('itemModal');
    const modalTitle = document.getElementById('itemTitle');
    const modalDescription = document.getElementById('itemDescription');

    modalTitle.textContent = itemName;
    modalDescription.textContent = itemDescription;

    modal.style.display = 'block';

    // Close modal on close button click or outside click
    const closeButton = document.getElementsByClassName('close')[0];
    closeButton.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// Function to generate and display loot table
function generateAndDisplayLootTable(numItems) {
    const lootTable = generateLootTable(numItems);
    displayLootTable(lootTable);
}

// Example usage: Generate and display loot table with 10 items
generateAndDisplayLootTable(10);

