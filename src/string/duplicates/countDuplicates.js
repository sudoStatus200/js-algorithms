const countDuplicates = (string, toLowerCase = true) => {
  if (!string && string === undefined) return 0;
  try {
    let modifiedString;
    toLowerCase
      ? (modifiedString = string.toLowerCase())
      : (modifiedString = string);

    const result = modifiedString
      .split("")
      .reduce(
        (acc, curr) =>
          acc[curr] === undefined
            ? Object.assign(acc, { [curr]: 1 })
            : Object.assign(acc, { [curr]: acc[curr] + 1 }),
        {}
      );

    return result;
  } catch (e) {
    return 0;
  }
};

module.exports= countDuplicates