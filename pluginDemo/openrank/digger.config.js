import Table from 'cli-table3';

export const showTable = (data, title) => {
  const table = new Table({
    head: ['Time', title]
  , colWidths: [10, 20]
  });

  table.push(...data)

  console.log(table.toString())
}


export default {
  cli: {
    openrank: ({ time, example, data }) => {
      const showData = [];
      for (let key in data) {
        showData.push([key, data[key]])
      }

      console.log(`${example}'s openrank(${time}):`);
      showTable(showData, 'openrank');
      return data;
    }
  }
}
