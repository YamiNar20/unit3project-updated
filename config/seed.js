require('dotenv').config();
require('./database');

const { src } = require('gulp');
const Category = require('../models/category');
const Item = require('../models/item');

(async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: 'Dog', sortOrder: 10 },
		{ name: 'Cat', sortOrder: 20 },
		{ name: 'Fish', sortOrder: 30 },
		{ name: 'Bird', sortOrder: 40 },
		{ name: 'Reptile', sortOrder: 50 },
		{ name: 'Insects', sortOrder: 60 },
		{ name: 'Pet Food', sortOrder: 70 }
	]);

	await Item.deleteMany({});
	const items = await Item.create([
		{
			name: 'Pluto',
			emoji: '🐶',
			category: categories[0],
			price: 100,
			description: 'He is a yellow-orange color, medium-sized, short-haired dog with black ears. '
		},
		{
			name: 'Pongo',
			emoji: '🐶',
			category: categories[0],
			price: 30,
			description: 'One Dalmatians'
		},
		{
			name: 'Lady',
			emoji: '🐶',
			category: categories[0],
			price: 20,
			description: 'Cocker Spaniel '
		},
    
		{
			name: 'Duchess',
			emoji: '🐱',
			category: categories[1],
			price: 12,
			description: ' white Turkish Angora cat'
		},
		{
			name: 'Marie',
			emoji: '🐱',
			category: categories[1],
			price: 8,
			description: 'Turkish Angora '
		},
		{
			name: 'Berlioz',
			emoji: '🐱',
			category: categories[1],
			price: 6,
			description: ' Gray-furred Turkish Angora, '
		},
		{
			name: 'Flounder',
			emoji: '🐠',
			category: categories[2],
			price: 8,
			description: 'Clown Fish'
		},
		{
			name: 'Cleo',
			emoji: '🐠',
			category: categories[2],
			price: 5,
			description: 'Goldfish'
		},
		{
			name: 'Dory',
			emoji: '🐠',
			category: categories[2],
			price: 20,
			description: 'Blue Tang'
		},
		{
			name: 'Heihei',
			emoji: '🦜',
			category: categories[3],
			price: 18,
			description:
				'Rooster'
		},
		{
			name: 'Kevin',
			emoji: '🦜',
			category: categories[3],
			price: 30,
			description: 'Himalayan Monal pheasant'
		},
		{
			name: 'Iago',
			emoji: '🦜',
			category: categories[3],
			price: 25,
			description: 'Scarlet Macaw Parrot'
		},
		{
			name: 'Bruni',
			emoji: '🦎',
			category: categories[4],
			price: 50,
			description: 'Salamander'
		},
		{
			name: 'Bill',
			emoji: '🦎',
			category: categories[4],
			price: 50,
			description:
				'Brown Anole Lizard,'
		},
		{
			name: 'Rango',
			emoji: '🦎',
			category: categories[4],
			price: 50,
			description:
				'Chameleon'
		},
		{
			name: 'Waffles',
			emoji: '🦎',
			category: categories[4],
			price: 50,
			description:
				'Horned lizard'
		},
		{
			name: 'Absolem',
			emoji: '🐛',
			category: categories[5],
			price: 5,
			description: 'The Blue Caterpilla'
		},
		{
			name: 'Turbo',
			emoji: '🐌',
			category: categories[5],
			price: 95,
			description:
				'Orange Snail'
		},
		{
			name: 'Francis',
			emoji: '🐞',
			category: categories[5],
			price: 20,
			description:
				'Ladybug'
		},
		
		{
			name: 'Lettuce',
			emoji: '🥬',
			category: categories[6],
			price: 2.00,
			description: 'Romaine'
		},
		{
			name: 'Apple',
			emoji: '🍏',
			category: categories[6],
			price: 250,
			description: 'Green Granny Smith'
		},
		{
			name: 'Speak to the Dead',
			emoji: '🥦',
			category: categories[6],
			price: 400,
			description: 'Broccoli Rabe'
		},
		
	]);

	console.log(items);

	process.exit();
})();