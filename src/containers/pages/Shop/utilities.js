export const processData = (filtersToApply) => (data) => {
  // in case "data" is object use Object.entries()
  /* filter by gender and height */
  let filteredData = [];
  data.map((object) => {
    let { id, name, price, image_link } = { ...object };
    filteredData.push({ id, name, price, image_link });
  });

  /* sort by mass and by height, only if mass is the same */
//   let sortedData = filteredData.sort((a, b) => {
//     return a.mass === b.mass ? b.height - a.height : b.mass - a.mass;
//   });

  console.log(filteredData)
  return filteredData;
};
