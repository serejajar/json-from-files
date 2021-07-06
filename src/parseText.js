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

module.exports = parseText;
