// script.js

document.getElementById('lootForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numItems = document.getElementById('numItems').value;
    const lootTable = generateLootTable(numItems);

    displayLootTable(lootTable);
});

function generateLootTable(numItems) {
    const items = {
        common: { range: [1, 10], list: [
            "Potion of Healing", "Torch", "Rope", "Dagger", "Backpack", "Crowbar", "Hammer", "Lantern", "Shovel", "Tent",
            "Vial of Acid", "Bag of Sand", "Iron Pot", "Ink Pen", "Flask of Oil", "Rations", "Sleeping Bag", "Signal Whistle",
            "Tinderbox", "Waterskin", "5 gp", "10 gp", "15 gp"
        ]},
        uncommon: { range: [11, 15], list: [
            "Potion of Greater Healing", "Magic Wand", "Elven Cloak", "Bag of Holding", "Boots of Elvenkind", "Bracers of Archery",
            "Cloak of Protection", "Driftglobe", "Goggles of Night", "Hat of Disguise", "Horn of Blasting", "Lantern of Revealing",
            "Periapt of Health", "Quiver of Ehlonna", "Ring of Jumping", "Ring of Warmth", "25 gp", "50 gp", "75 gp"
        ]},
        rare: { range: [16, 18], list: [
            "Sword of Sharpness", "Ring of Protection", "Amulet of Health", "Boots of Speed", "Cloak of Displacement",
            "Gem of Seeing", "Horn of Valhalla", "Ioun Stone", "Mace of Disruption", "Necklace of Fireballs", "Ring of Spell Turning",
            "Robe of Stars", "Rod of Absorption", "Staff of Healing", "Wand of Fireballs", "100 gp", "200 gp", "300 gp"
        ]},
        very_rare: { range: [19], list: [
            "Staff of Power", "Vorpal Sword", "Ring of Regeneration", "Rod of Lordly Might", "Crystal Ball", "Cubic Gate",
            "Horn of Blasting", "Manual of Bodily Health", "Manual of Gainful Exercise", "Manual of Quickness of Action",
            "Tome of Clear Thought", "Tome of Leadership and Influence", "Tome of Understanding", "500 gp", "750 gp", "1000 gp"
        ]},
        legendary: { range: [20], list: [
            "Deck of Many Things", "Sword of Kas", "Staff of the Magi", "Vorpal Sword", "Belt of Storm Giant Strength",
            "Cloak of Invisibility", "Crystal Ball of True Seeing", "Horn of Valhalla (Iron)", "Mantle of Spell Resistance",
            "Ring of Three Wishes", "Rod of Lordly Might", "Staff of the Woodlands", "Talisman of Ultimate Evil",
            "Wand of Orcus", "1500 gp", "2000 gp", "2500 gp"
        ]}
    };

    let lootTable = [];
    let usedItems = new Set();

    while (lootTable.length < numItems) {
        const d20 = Math.floor(Math.random() * 20) + 1;
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

        const itemList = items[itemType].list;
        const randomItem = itemList[Math.floor(Math.random() * itemList.length)];

        if (!usedItems.has(randomItem)) {
            usedItems.add(randomItem);
            lootTable.push({ item: randomItem, rarity: itemType, roll: d20 });
        }

        // If there are not enough unique items to satisfy the request, break the loop
        if (usedItems.size >= Object.values(items).flatMap(item => item.list).length) {
            break;
        }
    }

    return lootTable;
}

function displayLootTable(lootTable) {
    const lootTableDiv = document.getElementById('lootTable');
    lootTableDiv.innerHTML = "<h2>Generated Loot Table</h2>";

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    const headers = ['Rarity', 'Dice Roll', 'Item'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    lootTable.forEach(entry => {
        const row = document.createElement('tr');
        
        const rarityCell = document.createElement('td');
        rarityCell.textContent = entry.rarity;
        row.appendChild(rarityCell);

        const rollCell = document.createElement('td');
        rollCell.textContent = entry.roll;
        row.appendChild(rollCell);

        const itemCell = document.createElement('td');
        itemCell.textContent = entry.item;
        row.appendChild(itemCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    lootTableDiv.appendChild(table);
}

