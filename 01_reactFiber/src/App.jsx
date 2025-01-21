import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("");

  // Simulate a background data-fetching task
  useEffect(() => {
    const fetchData = async () => {
      const result = await new Promise((resolve) => {
        return setTimeout(() => {
          console.log("hiiiii")
          return resolve(["Option 1", "Option 2", "Option 3"])
        }, 5000)
      } 
      );
      setData(result);
    };

    fetchData();
  }, []);

  const handleDropdownChange = (event) => {
    console.log("inside DropDown onchange");
    setDropdownValue(event.target.value);
  };

  return (
    <div>
      <h1>React Fiber Example</h1>
      <select onChange={handleDropdownChange}>
        <option value="Select an option1">Select an option1</option>
        <option value="Select an option2">Select an option2</option>
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p>Selected: {dropdownValue}</p>
    </div>
  );

}

export default App
