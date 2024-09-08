export function getFlatEventsList (eventsData={}, orderGroups=[]) {
  return orderGroups.flatMap(groupName => eventsData[groupName]);
};

export function getDateLabeDictionary (flatEventList=[]) {
  let previousYear = new Date('01 Jan 1970 00:00:00 GMT').getFullYear();
  const dateDic = {};
  
  // flatEventList is already sorted by date, most recent first.
  for (let indx = flatEventList.length -1; indx >= 0; indx--) {
    const parsedDate = Date.parse(flatEventList[indx].date);

    if (flatEventList[indx].date.getFullYear() === previousYear) {
      dateDic[parsedDate] = flatEventList[indx].date.toLocaleString(
        'en', 
        {
          month: "short"
        }
      )
    } else {
      dateDic[parsedDate] = flatEventList[indx].date.toLocaleString(
        'en', 
        {
          year: "numeric",
          month: "short"
        }
      )

      previousYear = flatEventList[indx].date.getFullYear();
    };
  }

  return dateDic;
}