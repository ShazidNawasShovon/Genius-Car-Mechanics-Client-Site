import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  //   DELETE AN USER
  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are you sure You want to delete ? ");
    if (proceed) {
      const url = `https://immense-coast-96318.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted SuccessFully");
            const remainingServices = services.filter(
              (user) => user._id !== id
            );
            setServices(remainingServices);
          }
        });
    }
  };
  //
  useEffect(() => {
    fetch("https://immense-coast-96318.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2>Manage Services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h3>{service.name}</h3>
          <button
            className="mx-auto"
            onClick={() => handleDeleteService(service._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
