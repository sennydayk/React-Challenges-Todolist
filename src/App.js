import { useState } from "react";
import "./styles.css";

export default function App() {
  const [cities, setCities] = useState([]);
  const [newCity, setNewCity] = useState("");

  // 도시 추가 함수
  const addCities = () => {
    setCities([...cities, newCity]);
    setNewCity("");
  };

  // 도시 삭제 함수
  const deleteCity = (index) => {
    const updatedCities = cities.filter((_, i) => i !== index);
    setCities(updatedCities);
  };

  return (
    <div className="App">
      <div>
        <input
          value={newCity}
          name="city"
          onChange={(e) => setNewCity(e.target.value)}
        />
        <button type="button" onClick={addCities}>
          add
        </button>
      </div>
      {cities.map((city, index) => (
        <div>
          <li key={index}>{city}</li>
          <button type="button" onClick={() => deleteCity(index)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
