const userPurchases = [
  ["a", "b"],
  ["a", "c"],
  ["d", "e"],
];

function getRecommendations(index, list) {
  let recommendations = [];

  for (let i in list) {
    let hasIntersection = false;
    for (let j in list[i]) {
      for (let k in list[index]) {
        if (list[i][j] == list[index][k]) {
          hasIntersection = true;
        }
      }
    }
    if (hasIntersection) {
      for (let j in list[i]) {
        recommendations.push(list[i][j]);
      }
    }
  }
  if (recommendations.length > 0) {
    for (let item in list[index]) {
      recommendations.push(list[index][item]);
    }
    let result = [...new Set(recommendations)];
    return result.sort();
  } else return;
}

function maxItemAssociation(list) {
  let result = [];

  list.forEach((item, index) => {
    const userRecs = getRecommendations(index, list);
    console.log(`your recs: ${userRecs}`);
    result.push(userRecs);
  });

  const maxItem = result.reduce((prev, curr) =>
    curr.length > prev.length ? curr : prev
  );

  console.log(maxItem);
}

maxItemAssociation(userPurchases);
