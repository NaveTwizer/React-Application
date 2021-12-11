export const Stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
];

export const handleSearch = (event) => {
    console.log(event.target.value);
};
export class Caro{
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }
  getInfo() {
    return(
      <div>
      <h1 id="carNameHeader">Car name: {this.name}</h1>
      <h1>Car brand: {this.brand}</h1>
      </div>
    )
  }
}