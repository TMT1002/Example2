const array =  [{ make: 'audi', model: 'r8', year: '2012' }, 
{ make: 'audi', model: 'rs5', year: '2013' },
{ make: 'ford', model: 'mustang', year: '2012' },
{ make: 'ford', model: 'fusion', year: '2015' },
{ make: 'kia', model: 'optima', year: '2012' }];

const arr = array.reduce((x,y) => {if(!((x[y.make])||0)) x[y.make] = []; x[y.make].push(y); return x},{});

console.log(arr);
