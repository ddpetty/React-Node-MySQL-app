import React from "react";
import useFetch from "./useFetch";
import "./ShowCustomers.css";

export default function ShowCustomers() {
  const customers = useFetch();

  return (
    <div className="customers">
      {customers.length > 0
        ? customers.map(customer => (
            <div key={customer.id} className="customer">
              <p>Id: {customer.id}</p>
              <p>
                Name: {customer.first_name} {customer.last_name}
              </p>
              <p>Gender: {customer.gender}</p>
            </div>
          ))
        : `Retreiving data...`}
    </div>
  );
}
