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

module.exports = checkData;
