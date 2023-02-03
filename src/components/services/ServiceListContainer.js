import React, { useEffect, useState } from "react";
import { ServiceList } from "./ServiceList";
import services from "../../services.json";
import Accordion from "react-bootstrap/Accordion";
import "./style.css";

function ServiceListContainer({ greeting }) {
  const [list, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const asyncMock = new Promise((resolve) => {
    setTimeout(() => {
      resolve(services);
    }, 1000);
  });
  useEffect(() => {
    asyncMock
      .then((services) => setList(services))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="d-flex align-items-center">
          <h2>
            <strong>Estamos cargando los servicios ....</strong>
          </h2>
          <div
            className="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      ) : (
        <>
          <div className="container">
            <Accordion defaultActiveKey="0">
              <ServiceList items={list} />
            </Accordion>
          </div>
        </>
      )}
    </>
  );
}

export { ServiceListContainer };
