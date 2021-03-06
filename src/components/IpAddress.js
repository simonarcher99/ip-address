import { useState, useEffect } from "react";
import LocationMap from "./LocationMap";

import classes from "./IpAddress.module.css";

const IpAddress = () => {
  const [ipAddressDict, setIpAddressDict] = useState({});
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    fetch("http://ip-api.com/json/")
      .then((res) => {
        if (res.ok) {
          setHttpError(null);
          return res.json();
        } else {
          throw Error("Failed to fetch IP Address");
        }
      })
      .then((data) => {
        console.log(data);
        setIpAddressDict(data);
      })
      .catch((error) =>
        setHttpError("Failed to retrieve IP Address, please try again later.")
      );
  }, []);

  return (
    <div>
      {!httpError && (
        <>
          <div className={classes.info}>
            <p>
              <span className={classes.bold}>Public IPv4 Address:</span>{" "}
              {ipAddressDict.query}
            </p>
            <p>
              <span className={classes.bold}>Internet Service Provider:</span>{" "}
              {ipAddressDict.isp}
            </p>
            <p>
              <span className={classes.bold}>Location:</span>{" "}
              {ipAddressDict.city}, {ipAddressDict.country}
            </p>
          </div>
          <LocationMap lat={ipAddressDict.lat} lon={ipAddressDict.lon} />
        </>
      )}
      {httpError && <p>{httpError}</p>}
    </div>
  );
};

export default IpAddress;
