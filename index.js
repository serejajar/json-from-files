// const path = require('path');

const bac2015 = require('./data/2015');
const bac2016 = require('./data/2016');
const bac2016all = require('./data/2016-all');
const bac2017 = require('./data/2017');
const bac2018 = require('./data/2018');
const bac2019 = require('./data/2019');

function parseText(text, year) {
  const strings = text
    .trim()
    .split('\n');

  const schools = strings.map((str) => {
    const trimedString = str
      .trim()
      .replace(/(\s){2,}/g, '___');

    const [
      num,
      districtStr,
      cityStr,
      nameStr,
      candidats,,
      rejectedCandidats,,
      mediumNote,
    ] = trimedString.split('___');

    // if (
    //   !num
    //   || !districtStr
    //   || !cityStr
    //   || !nameStr
    //   || !candidats
    //   || !rejectedCandidats
    //   || !mediumNote
    // ) {
    //   console.log(year, trimedString);
    //   console.log(
    //     num,
    //     districtStr,
    //     cityStr,
    //     nameStr,
    //     candidats,
    //     rejectedCandidats,
    //     mediumNote,
    //   );
    // }
    return {
      year,
      text: str,
      num,
      districtStr: districtStr.toLowerCase(),
      cityStr: cityStr.toLowerCase(),
      nameStr,
      candidats: +candidats,
      rejectedCandidats: +rejectedCandidats,
      mediumNote: +mediumNote.replace(',', '.'),
    };
  });

  return schools;
}

function checkData(fileData, schoolData) {
  const {
    year,
    text,
    districtStr,
    cityStr,
    nameStr,
    candidats,
    rejectedCandidats,
    mediumNote,
  } = schoolData;

  const bac = [{
    year,
    text,
    candidats,
    rejectedCandidats,
    mediumNote
  }]

  if (
    !fileData.address.district
    && !fileData.address.city
    && !fileData.name.ro
  ) {
    return {
      ...fileData,
      name: {
        ro: nameStr,
        ru: ''
      },
      address: {
        district: districtStr,
        city: cityStr
      },
      bac,
    }
  }

  return {
    ...fileData,
    bac: [
      ...fileData.bac,
      ...bac,
    ]
  };
}

let data = [].concat(
  parseText(bac2015, '2015'),
  parseText(bac2016, '2016'),
  parseText(bac2016all, '2016 all'),
  parseText(bac2017, '2017'),
  parseText(bac2018, '2018'),
  parseText(bac2019, '2019')
);

console.log(`Total: ${data.length} items`);

const searchArr = [
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'asm',
    search: 'academiei',
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'DCantemir',
    search: 'dimitrie cantemir|d. cantemir',
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'MGrecu',
    search: 'grecu',
  },
  {
    district: 'chisinau',
    city: 'buicani',
    name: 'ACantemir',
    search: 'antioh cantemir|',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'prometeu',
    search: 'prometeu',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'MEliade',
    search: 'eliade',
  },
  {
    district: 'bender',
    city: 'bender',
    name: 'AlexanruCelBun',
    search: 'alexandru cel bun',
  },
  {
    district: 'ribnita',
    city: 'ribnita',
    name: 'evrika',
    search: 'evrika',
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'MEminescu',
    search: 'eminescu',
  },
  {
    district: 'tiraspol',
    city: 'tiraspol',
    name: 'LBlaga',
    search: 'blaga',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'ElimulNou',
    search: 'elimul',
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'ARusso',
    search: 'russo',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'evrica',
    search: 'evrica',
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'LimbiModerne',
    search: 'liceul de limbi moderne şi management',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'columna',
    search: 'columna',
  },
  {
    district: 'ialoveni',
    city: 'bardar',
    name: 'ADavid',
    search: 'aurel david',
  },
  {
    district: 'chisinau',
    city: 'stauceni',
    name: 'DVoda',
    search: 'dragoş vodă',
  },
  {
    district: 'edinet',
    city: 'edinet',
    name: 'SeminarDeFete',
    search: 'seminarul',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'NVGogol',
    search: 'gogol',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'APuskin',
    search: 'puşkin',
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'ICreanga',
    search: 'creangă',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'SpiruHaret',
    search: 'haret',
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'MEminescu',
    search: 'eminescu',
  },
];

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

    const isSchool = text.search(regexp) !== -1;

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

console.log(JSON.stringify(files[files.length-1], null, 2));
console.log(data[0]);
console.log(`Remains: ${data.length} items`);
