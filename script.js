// script.js

document.getElementById('lootForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numItems = document.getElementById('numItems').value;
    const itemType = document.getElementById('itemType').value;
    const lootTable = generateLootTable(numItems, itemType);

    displayLootTable(lootTable);
});

function generateLootTable(numItems, itemType) {
    const items = {
        common: ["Potion of Healing", "Torch", "Rope", "Dagger"],
        uncommon: ["Potion of Greater Healing", "Magic Wand", "Elven Cloak"],
        rare: ["Sword of Sharpness", "Ring of Protection", "Amulet of Health"],
        very_rare: ["Staff of Power", "Vorpal Sword", "Ring of Regeneration"],
        legendary: ["Deck of Many Things", "Sword of Kas", "Staff of the Magi"]
    };

    let lootTable = [];
    for (let i = 0; i < numItems; i++) {
        const randomItem = items[itemType][Math.floor(Math.random() * items[itemType].length)];
        lootTable.push(randomItem);
    }

    return lootTable;
}

function displayLootTable(lootTable) {
    const lootTableDiv = document.getElementById('lootTable');
    lootTableDiv.innerHTML = "<h2>Generated Loot Table</h2>";
    const ul = document.createElement('ul');
    
    lootTable.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    lootTableDiv.appendChild(ul);
}
