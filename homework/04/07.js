class Vector
{
  constructor(components)
  {
    this.components= components;
  }
  add(other)
  {
    return new Vector(this.components.map((v, i)=> v + other.components[i]));
  }
  sub(other)
  {
    return new Vector(this.components.map((v, i)=> v - other.components[i]));
  }
  dot(other)
  {
    return this.components.reduce((sum, v, i)=> sum + v * other.components[i],0);
  }
  toString()
  {
    return `[${this.components.join(',')}]`;
  }
}
let a = new Vector([1,2,3]);
let b = new Vector([4,5,6]);
console.log(a.add(b).sub(b).dot(b));
