import React, {useState} from 'react';
import axios from 'axios';
import uuid from "uuid";

const useAxios = () => {

  const [state, setState] = useState([]);

  const updateState = async (url) => {
    const response = await axios.get(
      `${url}`
    );
    setState(currState => [...currState, { ...response.data, id: uuid() }]);
  }

  return [state, updateState]
    
}

export default useAxios