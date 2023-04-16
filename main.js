const asia = {
	region: "Asia",
	countries: [
		"China",
		"India",
		"Indonesia",
		"Pakistan",
		"Bangladesh",
		"Japan",
		"Philippines",
		"Vietnam",
		"Turkey",
		"Iran",
	],
};
const northAmerica = {
	region: "North America",
	countries: [
		"United States",
		"Mexico",
		"Canada",
		"Guatemala",
		"Cuba",
		"Haiti",
		"Dominican Republic",
		"Honduras",
		"Jamaica",
		"El Salvador",
	],
};
const southAmerica = {
	region: "South America",
	countries: [
		"Brazil",
		"Colombia",
		"Argentina",
		"Peru",
		"Venezuela",
		"Chile",
		"Ecuador",
		"Bolivia",
		"Paraguay",
		"Uruguay",
	],
};
const europe = {
	region: "Europe",
	countries: [
		"Russia",
		"Germany",
		"United Kingdom",
		"France",
		"Italy",
		"Spain",
		"Ukraine",
		"Poland",
		"Romania",
		"Netherlands",
	],
};
const africa = {
	region: "Africa",
	countries: [
		"Nigeria",
		"Ethiopia",
		"Egypt",
		"Democratic Republic of the Congo",
		"South Africa",
		"Tanzania",
		"Kenya",
		"Algeria",
		"Sudan",
		"Uganda",
	],
};
const oceania = {
	region: "Oceania",
	countries: [
		"Australia",
		"Papua New Guinea",
		"New Zealand",
		"Fiji",
		"Solomon Islands",
		"Vanuatu",
		"Samoa",
		"Kiribati",
		"Tonga",
		"Micronesia",
	],
};
const middleEast = {
	region: "Middle East",
	countries: [
		"Saudi Arabia",
		"Iran",
		"Iraq",
		"Yemen",
		"Syria",
		"Jordan",
		"United Arab Emirates",
		"Israel",
		"Lebanon",
		"Oman",
	],
};

const regions = [asia, northAmerica, southAmerica, europe, africa, oceania, middleEast];

// const generateRandomQuestion = () => {

// };

// function to select word from passed array, randomly.
const selectCountry = (arr) => {
  // Array to store correct match of country and region
  const info = [];
  // select region from regions array
	const selectedRegion = arr[Math.floor(Math.random() * arr.length)];
  // add region and country to info array
  info.push(selectedRegion.region)
  info.push(selectedRegion.countries[Math.floor(Math.random() * 10)])
  return info;
};

console.log(selectCountry(regions));