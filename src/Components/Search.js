import * as React from 'react'
function changeElementText(elemID, text) {
  const elem = document.getElementById(elemID);
  elem.innerHTML = text;
}

export function Search(props) {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [carName, setCarName] = React.useState('');

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
      setCarName(event.target.value);
      props.onSearch(event);

    };
  
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange} maxLength={10} />

        <p>
          Searching for <strong>{searchTerm}</strong>.
        </p>
        {changeElementText("carNameHeader", `Car name: ${carName}`)}

      </div>
    );
};
export default Search;