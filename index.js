const searchArr = require('./src/searchArr');
const checkData = require('./src/checkData');
const replaceRoDiacritics = require('./src/replaceRoDiacritics');

let data = require('./data');

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

// console.log(JSON.stringify(files[files.length-1], null, 2));

files.forEach((item) => {
  if (item.bac.length < 1) {
  // if (item.address.city === 'congaz') {
    console.log(JSON.stringify(item, null, 2));
  }
});

// console.log(data[0]);
// console.log(data.map(({ text, districtStr, cityStr, nameStr }) => ({
//   // text,
//   district: districtStr,
//   city: cityStr,
//   name: nameStr,
//   search: nameStr,
// })));
console.log(`Remains: ${data.length} items`);
