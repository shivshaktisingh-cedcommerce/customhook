
import { useEffect } from 'react';
import './App.css';
import useFetch from "./useFetch";

const App = () => {
  var url = "https://jsonplaceholder.typicode.com/todos";
  var payload = 1;
  var method="GET";
  const {data,extractDataFromApi} = useFetch();
//  console.log(data)
 useEffect(()=>{
  extractDataFromApi(url ,payload, method)
  console.log("ubfsdfs")
 },[])

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default App;
