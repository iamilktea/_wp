function sumArray(arr)
{
  return arr.reduce((sum,val) => sum + val,0);
}
console.log(sumArray([1,2,3,4]));
