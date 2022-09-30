import { useCallback, useState} from "react";

const useFetch = () => {
  const [data, setData] = useState(null);

  const extractDataFromApi=useCallback((url , payload , method="POST")=>{
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));  
  },[])
  return {data,extractDataFromApi};
};

export default useFetch;