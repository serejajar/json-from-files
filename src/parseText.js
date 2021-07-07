const replaceRoDiacritics = require('./replaceRoDiacritics');

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
      districtStr: replaceRoDiacritics(districtStr, true),
      cityStr: replaceRoDiacritics(cityStr, true),
      nameStr: replaceRoDiacritics(nameStr),
      candidats: +candidats,
      rejectedCandidats: +rejectedCandidats,
      mediumNote: +mediumNote.replace(',', '.'),
    };
  });

  return schools;
}

module.exports = parseText;
