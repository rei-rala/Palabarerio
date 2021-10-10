import React, { createContext } from "react";
import axios from "axios";

const Axios = createContext();

const AxiosContext = ({ children }) => {

  const POST = async (data) => {
    const config = {
      url: process.env.REACT_APP_API_URL,
      method: 'post',
      data
    }
    console.table(config)

    axios.post(process.env.REACT_APP_API_URL, data)
      .then(console.log)
      .catch(console.warn)
  }


  return <Axios.Provider value={{
    POST
  }}>
    {children}
  </Axios.Provider>
}

export { Axios }
export default AxiosContext