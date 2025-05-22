const array = [1, 2, 3, 4, 5].values();

array.map((e) => ({val: e})).forEach(e => console.log(e))
