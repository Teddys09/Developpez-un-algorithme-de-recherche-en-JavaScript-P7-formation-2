const dataRecipe = [];

export async function getData() {
  function getRecipe() {
    return axios
      .get('./assets/data/data.js')
      .then((res) => dispatchData(res.data))
      .catch((err) => console.log(err));
  }
  await getRecipe();
  function dispatchData(data) {
    dataRecipe.push(data);
  }
  console.log(dataRecipe);
  return { dataRecipe };
}
