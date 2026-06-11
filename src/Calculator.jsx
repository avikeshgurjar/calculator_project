import "./App.css";
import { useEffect, useState } from "react";


export default function Calculator() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [ope, setOpe] = useState(null);
  const [history,setHistory]=useState([])

  if (history.length===25){
    setHistory([])
  }



  


  const finalRes = (num1, num2, ope) => {
    const v1 = parseFloat(num1);
    const v2 = parseFloat(num2);
    if (v1 === NaN || v2 === NaN) {
      return "";
    }
    if (ope === "+") {
      return (v1 + v2).toString();
    } else if (ope === "-") {
      return (v1 - v2).toString();
    } else if (ope === "*") {
      return (v1 * v2).toString();
    } else {
      return (v1 / v2).toString();
    }
  };

  const handleButtonClick = (input) => {
    // console.log(input)
    if (input === "C") {
      setValue1("");
      setValue2("");
      setOpe(null);
    } else if (input === "=") {
      if (value1 && value2 && ope) {
        
        setHistory([...history,finalRes(value1, value2, ope)])
        setValue1(finalRes(value1, value2, ope));
        setValue2("");
        setOpe(null);
      }
    } else if (
      input === "+" ||
      input === "-" ||
      input === "*" ||
      input === "/"
    ) {
      if (value1 && value2 && ope) {
        setValue1(finalRes(value1, value2, ope));
        setValue2("");


      }
      setOpe(input);
    } else if (
      input === 1 ||
      input === 2 ||
      input === 3 ||
      input === 4 ||
      input === 5 ||
      input === 6 ||
      input === 7 ||
      input === 8 ||
      input === 9 ||
      input === 0
    ) {
      if (ope) {
        setValue2(input + value2 );
      } else {
        setValue1(value1 + input);
      }
    }
  };
  
  const showingRes = ope && value2 && value1 ? `${value1}${ope}${value2}` : ope &&  value1 ?`${value1}${ope}` :value1 || "0" 
  // console.log(history)

  return (
    <div id="container">
      <h1>Calculator</h1>
      <div className="w-100  border-gray-300 ">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="display"
            value={showingRes}
            name="inputval"
            readOnly
          />
          <div id="buttons">
            <button type="button" onClick={() => handleButtonClick(7)}>
              7
            </button>
            <button type="button" onClick={() => handleButtonClick(8)}>
              8
            </button>
            <button type="button" onClick={() => handleButtonClick(9)}>
              9
            </button>
            <button type="button" onClick={() => handleButtonClick("/")}>
              ÷
            </button>
            <button type="button" onClick={() => handleButtonClick(4)}>
              4
            </button>
            <button type="button" onClick={() => handleButtonClick(5)}>
              5
            </button>
            <button type="button" onClick={() => handleButtonClick(6)}>
              6
            </button>
            <button type="button" onClick={() => handleButtonClick("*")}>
              *
            </button>
            <button type="button" onClick={() => handleButtonClick(1)}>
              1
            </button>
            <button type="button" onClick={() => handleButtonClick(2)}>
              2
            </button>
            <button type="button" onClick={() => handleButtonClick(3)}>
              3
            </button>
            <button type="button" onClick={() => handleButtonClick("-")}>
              -
            </button>
            <button type="button" onClick={() => handleButtonClick("C")}>
              C
            </button>
            <button type="button" onClick={() => handleButtonClick(0)}>
              0
            </button>
            <button type="button" onClick={() => handleButtonClick("=")}>
              =
            </button>
            <button type="button" onClick={() => handleButtonClick("+")}>
              +
            </button>
          </div>
        </form>
        
      </div>
      <div className="history-log">
        <h3>History:</h3>
        <ol>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
      
    </div>
  );
}
