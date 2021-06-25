import "./App.css";
import React, { useState } from "react";


function App() {
  const [result, setResult] = useState("0");
  const [list, setList] = useState([]);
  const [histBut, setHistButton] = useState(false);

  const handleClick = (e) => {
    setResult( result + e.target.name);
  };

  const clearAll = () => {
    setResult("");
  };
  const backSpace = () => {
    setResult(result.slice(0, -1));
  };
  const rate = () => {
    setResult(result / 100);
  };

  const calculate = () => {
 
    const detail = {
      id: Math.floor(Math.random() * 1000),
      name: "detail",
      value: result
    };
    setList([...list, detail]);
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error!");
    }
    
  };

  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <button className="btn" className="history" onClick={() => setHistButton(!histBut)}>
          {" "}
          HISTORY{" "}
        </button>
        {histBut ? (
          <div className="container2" id="scroller">
            <p>My history</p>
            <button className="clean-hist" onClick={() => setList([])}>
              Clean All History
            </button>
            {list !== [] ? (
              <ul>
                {list.map((t, index) => (
                  <li key={index}>
                    
                    {currDate} {currTime} <br />  {t.value} = {eval(t.value).toString()}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
        
        <div className="keypad">
          <button
            className="midgrey"
            name="AC"
            onClick={clearAll}
            id="clearAll"
          >
            AC
          </button>
          <button
            className="midgrey"
            name="C"
            onClick={backSpace}
            id="backspace"
          >
            C
          </button>
          <button className="midgrey" name="%" onClick={rate}>
            %
          </button>
          <button className="btn" name="/" onClick={handleClick} id="operators">
            &divide;
          </button>
          <button className="btn" name="7" onClick={handleClick}>
            7
          </button>
          <button className="btn" name="8" onClick={handleClick}>
            8
          </button>
          <button className="btn" name="9" onClick={handleClick}>
            9
          </button>
          <button className="btn" name="*" onClick={handleClick} id="operators">
            &times;
          </button>
          <button className="btn" name="4" onClick={handleClick}>
            4
          </button>
          <button className="btn" name="5" onClick={handleClick}>
            5
          </button>
          <button className="btn" name="6" onClick={handleClick}>
            6
          </button>
          <button className="btn" name="-" onClick={handleClick} id="operators">
            &ndash;
          </button>
          <button className="btn" name="1" onClick={handleClick}>
            1
          </button>
          <button className="btn" name="2" onClick={handleClick}>
            2
          </button>
          <button className="btn" name="3" onClick={handleClick}>
            3
          </button>
          <button className="btn" name="+" onClick={handleClick} id="operators">
            +
          </button>
          <button className="btn" name="0" onClick={handleClick} id="zero">
            0
          </button>
          <button className="btn" name="." onClick={handleClick}>
            ,
          </button>
          <button name="=" onClick={calculate} id="operators">
            =
          </button>
          
        </div>
      </div>
    </>
  );
}

export default App;
