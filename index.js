const path = require('path');
const fs = require('fs');

const searchArr = require('./src/searchArr');
const checkData = require('./src/checkData');
const replaceRoDiacritics = require('./src/replaceRoDiacritics');
let data = require('./bac');

console.log(`Total: ${data.length} items`);

const files = searchArr.map(({ district, city, name, search }) => {
  const regexp = new RegExp(search, 'gi');
  const id = `${district}-${city}-${name}`;

  let fileData = {
    id,
    search,
    address: {},
    name: {
      ro: '',
      ru: '',
    },
    bac: [],
  };

  data = data.map((item) => {
    const {
      text,
      districtStr,
      cityStr,
    } = item;

    const isSchool = replaceRoDiacritics(text).search(regexp) !== -1;


    if (
      isSchool
      && district === districtStr
      && city === cityStr
    ) {
      fileData = checkData(fileData, item);
      return;
    }

    return item;
  }).filter(item => !!item);

  return fileData;
});

files.forEach((file) => {
  if (
    file.bac.length > 6
    || file.bac.length === 0
  ) {
    console.log('Wrong data!');
    console.log(JSON.stringify(file, null, 2));
  } else {
    const filePath = path.join(__dirname, `./schools/${file.id}.json`);
    console.log(filePath);
    fs.writeFileSync(filePath, JSON.stringify(file, null, 2))
  }
});
