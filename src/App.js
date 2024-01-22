import { useState } from "react";
import "./App.css";
function App() {
  const initialArray = [
    "apple",
    "banana",
    "cherry",
    "elderberry",
    "watermelon",
    "grape",
  ];
  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit, index) {
      tempResult += `${index}: ${fruit}, `;
    });
    setResult(tempResult.slice(0, -2));
  };

  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      if (fruit.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  };

  const handleReduce = () => {
    let result = array.reduce((acc, curr) => {
      return acc + ' + ' + curr;
    })
    setResult(result);
  };

  const handlePush = () => {
    array.push(query);
    setArray(array);
    setResult(array.join(", "));
  };

  const handlePop = () => {
    array.pop();
    setArray(array);
    setResult(array.join(", "));
  };

  const handleSlice = () => {
    let newArr = [...initialArray];
    setResult(newArr.slice(1, newArr.length-1).join(", ")); //첫번째와 마지막 요소 삭제
  };

  const handleSplice = () => {
    let prev = null;

    // result가 split 할 수 있는 string 인지 체크 후 할당
    if(typeof result === 'string'){
      prev = result.split(' ');
    }

    // 이전 값이랑 결과가 다를 때 실행 - 체크 안하면 계속 삭제함.
    if(prev === array){
      return;
    }
    array.splice(2, 2, 'kiwi', 'lime');
    setResult(array.join(", "));
  };

  const handleIndexOf = () => {    
    setResult(array.indexOf(query));
  };

  const handleIncludes = () => {
    setResult(array.includes(query) ? 'true' : 'false');
  };

  const handleFind = () => {
    let found = array.find((el) => {
      return el === query;
    });
    if(found === undefined){
      found = 'NOT FOUND';
    }
    setResult(found);
  };

  const handleSome = () => {
    const result = array.some((el) => {
      return el === query;
    });
    setResult(result ? 'true' : 'false');
  };

  const handleEvery = () => {
    const result = array.every((el) => {
      return el.length > 5; //상세 요구사항에 '5글자 초과' 라고 기재되어 있어서 5초과로 조건 설정.
    });
    setResult(result ? 'true' : 'false');
  };

  const handleSort = () => {
    const result = array.sort((a, b) => a.localeCompare(b));
    setResult(result.join(", "));
  };

  const handleJoin = () => {
    setResult(array.join(", "));
  };

  return (
    <div>
      <h1>Array API Practice</h1>
      <div>
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <strong>Array</strong> : {array.join(", ")}
      </div>
      <div>
        <strong>Result</strong> : {result}
      </div>
    </div>
  );
}
export default App;