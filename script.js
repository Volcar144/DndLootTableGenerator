// script.js

document.getElementById('lootForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numItems = document.getElementById('numItems').value;
    const lootTable = generateLootTable(numItems);

    displayLootTable(lootTable);
});

function generateLootTable(numItems) {
    const items = {
        common: { range: [1, 10], list: ["Potion of Healing", "Torch", "Rope", "Dagger"] },
        uncommon: { range: [11, 15], list: ["Potion of Greater Healing", "Magic Wand", "Elven Cloak"] },
        rare: { range: [16, 18], list: ["Sword of Sharpness", "Ring of Protection", "Amulet of Health"] },
        very_rare: { range: [19], list: ["Staff of Power", "Vorpal Sword", "Ring of Regeneration"] },
        legendary: { range: [20], list: ["Deck of Many Things", "Sword of Kas", "Staff of the Magi"] }
    };

    let lootTable = [];
    for (let i = 0; i < numItems; i++) {
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
        lootTable.push({ item: randomItem, rarity: itemType, roll: d20 });
    }

    return lootTable;
}

function displayLootTable(lootTable) {
    const lootTableDiv = document.getElementById('lootTable');
    lootTableDiv.innerHTML = "<h2>Generated Loot Table</h2>";
    const ul = document.createElement('ul');
    
    lootTable.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `Item: ${entry.item} (Rarity: ${entry.rarity}, Roll: ${entry.roll})`;
        ul.appendChild(li);
    });

    lootTableDiv.appendChild(ul);
}
