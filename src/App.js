import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [beer, setBeer] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const litres = beer * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let alcohol; alcohol = gramsLeft / (weight * 0.7);

    if (gender === "male") {
      alcohol = gramsLeft / (weight * 0.7);
    } else if (gender === "female") {
      alcohol = gramsLeft / (weight * 0.6);
    }

    if (alcohol < 0) {
      alcohol = 0;
    }

    setResult(alcohol.toFixed(1));
  };

  return (
<div>
  <h1>Calculating alcohol blood level</h1>
  <form onSubmit={handleSubmit}>

    <div>
    <label>Weight <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
    </label>
    </div>

    <div>
    <label>Bottles <input type="number" value={beer} onChange={e => setBeer(e.target.value)}/>
    </label>
    </div>

    <div>
    <label>Time <input type="number" value={time} onChange={e => setTime(e.target.value)}/>
    </label>
    </div>
    
    <div>
    <label>
          Gender
          <select value={gender} onChange={e => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
    </div>

    <h3>{result}</h3>
        <button type="submit">Calculate</button>
      </form>
      </div>
  );
};

export default App;
