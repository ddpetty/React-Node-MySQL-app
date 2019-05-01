import { useState, useEffect } from "react";

export default function useFetch() {
  const [customers, setCustomers] = useState([]);
  const url = "https://react-node-mysql-app.herokuapp.com/customers";

  async function getCustomers() {
    const response = await fetch(url);
    const json = await response.json();
    if(response.ok) {
      setCustomers(json.customers);
    } 
  }

  try {
    useEffect(() => {
      getCustomers();
    }, []);
    return customers;
  } catch (err) {
    console.log(err);
  }
}
