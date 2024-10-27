
import { useState, useEffect } from "react";

const dataArray = [
  { fruit: 'apple', color: 'red', taste: 'sweet', size: 'small' },
  { fruit: 'apple', color: 'yellow', taste: 'sweet', size: 'medium' },
  { fruit: 'orange', color: 'orange', taste: 'citrus', size: 'medium' },
  { fruit: 'orange', color: 'yellow', taste: 'tropical', size: 'large' },
  { fruit: 'grapes', color: 'green', taste: 'sweet', size: 'small' },
  { fruit: 'watermelon', color: 'green', taste: 'juicy', size: 'large' }
];

const FilterComponent = () => {
  const [inputValues, setInputValues] = useState({});
  const [suggestions, setSuggestions] = useState({});
  const [selectedResults, setSelectedResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [currentField, setCurrentField] = useState('');

  useEffect(() => {
    // Dynamically initialize inputValues and suggestions based on dataArray keys
    if (dataArray.length > 0) {
      const keys = Object.keys(dataArray[0]);
      //console.log("I ma keys"+keys);
      let fruit=new Object;
      let value=[];
      for(let i=0;i<dataArray.length;i++)
      {
       
        if(!fruit.key.includes(dataArray[i].fruit))
        {
          fruit.key=dataArray[i].fruit;
          value.push(new Array.set(dataArray[i].fruit));
          //fruit.value=Array.set(dataArray[i]);
        }
         else{
          fruit.getKey(dataArray[i].fruit).value=value.push(new Array.set(dataArray[i]))
         }
        
      }
     // console.log(fruit);
      
      
      
      const initialInputValues = keys.reduce((acc, key) => ({ ...acc, [key]: '' }), {});
      const initialSuggestions = keys.reduce((acc, key) => ({ ...acc, [key]: [] }), {});
      
      setInputValues(initialInputValues);
      setSuggestions(initialSuggestions);
    }
  }, []);

  const handleInputChange = (event, key) => {
    const value = event.target.value;
    setInputValues(prevState => ({ ...prevState, [key]: value }));
    setCurrentField(key);

    // Generate unique suggestions based on the current input value and field
    const uniqueSuggestions = Array.from(
      new Set(
        dataArray
          .map(item => item[key])
          .filter(val => val.toLowerCase().startsWith(value.toLowerCase()))
      )
    ).sort();

    setSuggestions(prevSuggestions => ({ ...prevSuggestions, [key]: uniqueSuggestions }));
  };

  const handleSuggestionClick = (key, value) => {
    console.log(key);
    setInputValues(prevState => ({ ...prevState, [key]: value }));
    setSuggestions(prevSuggestions => ({ ...prevSuggestions, [key]: [] }));
    setCurrentField('');
  };

  const handleFilterClick = () => {
    const results = dataArray.filter(item =>
      Object.keys(inputValues).every(key =>
        inputValues[key] === '' || item[key].toLowerCase().includes(inputValues[key].toLowerCase())
      )
    );
    setSelectedResults(results);
    setShowResults(true);
  };

  return (
    <div className="p-4">
      {/* Render input fields based on keys */}
      {Object.keys(inputValues).map((key) => (
        <div key={key} className="mb-4">
          <input
            type="text"
            value={inputValues[key]}
            onChange={(event) => handleInputChange(event, key)}
            placeholder={`Search ${key}`}
            className="border p-2 rounded w-full"
          />
          <div className="mt-2">
            {currentField === key  && inputValues[key] && (
              <ul className="border border-gray-300 rounded">
                {suggestions[key].map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(key, suggestion)}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >

                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div> 
        </div>
      ))}

      {/* Filter button */}
      <button
        onClick={handleFilterClick}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Filter
      </button>

      {/* Display selected results */}
      <div className="mt-4">
        {showResults && selectedResults.length === 0 && (
          <div className="text-lg font-semibold mb-4">No results found</div>
        )}
        {showResults && selectedResults.map((result, index) => (
          <div key={index} className="border border-gray-300 p-4 mb-2 rounded">
            {Object.entries(result).map(([key, value], idx) => (
              <div key={idx} className="mb-2">
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
