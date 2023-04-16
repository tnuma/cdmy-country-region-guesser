const readline = require("readline");

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

// function to select word from passed array, randomly.
const selectCountry = () => {
  // Array to store correct match of country and region
  const info = [];
  // select region from regions array
  const selectedRegion = regions[Math.floor(Math.random() * regions.length)];
  // add region and country to info array
  info.push(selectedRegion.region)
  info.push(selectedRegion.countries[Math.floor(Math.random() * 10)])
  return info;
};
const generateRandomQuestion = (arr) => {
  const qRegion = regions[Math.floor(Math.random() * 7)].region;
  return [`${arr[1]} is a country in ${qRegion}`, qRegion]
};

const startQuiz = () => {
  console.log('Welcome to the "Which Region Does the Country Belong To?" quiz game! Given a country name, your job is to determine which region the country belongs to. Please answer each question with "y" (yes) or "n" (no). Answering 5 questions correctly will make you win, but if you answer 5 questions incorrectly, you will lose. Type "exit" or "quit" to quit the game. Good luck!\n');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let selectedCountry = selectCountry();
  let question = generateRandomQuestion(selectedCountry);
  let correctCount = 0;
  let wrongCount = 0;
  let questionCount = 1;
  console.log(`Q${questionCount}, ${question[0]}`);

  rl.on('line', (answer) => {
    if (answer === 'exit' || answer === 'quit') {
      rl.close();
      return;
    }

    if (question[1] === selectedCountry[0] && answer === 'y') {
      console.log('\nCorrect!')
      correctCount++;
    } else if (question[1] !== selectedCountry[0] && answer === 'n') {
      console.log('\nCorrect!')
      correctCount++;
    } else {
      console.log(`\nWrong! ${selectedCountry[1]} is in ${selectedCountry[0]}`);
      wrongCount++;
    }

    console.log(`Correct: ${correctCount}, Wrong: ${wrongCount}\n`);
    if (correctCount === 5) {
      console.log('You win!\n');
      rl.close();
      return;
    } else if (wrongCount === 5) {
      console.log('You lose!\n');
      rl.close();
      return;
    }

    // Generate a new question for the next round
    selectedCountry = selectCountry();
    question = generateRandomQuestion(selectedCountry);
    questionCount++;
    console.log(`Q${questionCount}, ${question[0]}`);
  });
}

startQuiz();