import fs from 'node:fs';

const rawText = fs.readFileSync('./data-fetch/zones-faibles-emissions/zfe-m_liste.txt', 'utf8');

const matchRegex = /^[0-9]{2}\s([0-9]{5})/;

const codesInsee = rawText
	.split('\n')
	.map((line) => line.match(matchRegex)?.[1])
	.filter(Boolean);

export default codesInsee;
