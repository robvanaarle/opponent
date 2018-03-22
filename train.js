const quickDraw = require('quickdraw.js');
const neataptic = require('neataptic');
const fs = require('fs');
const path = require('path');

const categories = [
  'aircraft carrier',
  'airplane',
  'alarm clock',
  'ambulance',
  'angel',
  'animal migration',
  'ant',
  'anvil',
  'apple',
  'arm',
  'asparagus',
  'axe',
  'backpack',
  'banana',
  'bandage',
  'barn',
  'baseball',
  'baseball bat',
  'basket',
  'basketball',
  'bat',
  'bathtub',
  'beach',
  'bear',
  'beard',
  'bed',
  'bee',
  'belt',
  'bench',
  'bicycle',
  'binoculars',
  'bird',
  'birthday cake',
  'blackberry',
  'blueberry',
  'book',
  'boomerang',
  'bottlecap',
  'bowtie',
  'bracelet',
  'brain',
  'bread',
  'bridge',
  'broccoli',
  'broom',
  'bucket',
  'bulldozer',
  'bus',
  'bush',
  'butterfly',
  'cactus',
  'cake',
  'calculator',
  'calendar',
  'camel',
  'camera',
  'camouflage',
  'campfire',
  'candle',
  'cannon',
  'canoe',
  'car',
  'carrot',
  'castle',
  'cat',
  'ceiling fan',
  'cello',
  'cell phone',
  'chair',
  'chandelier',
  'church',
  'circle',
  'clarinet',
  'clock',
  'cloud',
  'coffee cup',
  'compass',
  'computer',
  'cookie',
  'cooler',
  'couch',
  'house',
];

const dataSet = quickDraw.set(categories.length * 100, categories);

const network = new neataptic.architect.Perceptron(
  dataSet.input,
  30,
  dataSet.output,
);

network.train(dataSet.set, {
  iterations: 100,
  log: 1,
  rate: 0.1,
});

const neuralNet = JSON.stringify(network.toJSON());

fs.writeFile(path.join(__dirname, 'neural-net.json'), neuralNet, () =>
  console.log('Done training neural net')); // prettier-ignore
