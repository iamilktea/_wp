let scores = { Alice: 85,Bob: 92,Charlie: 78};
console.log("10:");
for (let name in scores)
{
  console.log(`${name} 的分數是 ${scores[name]}`);
}
