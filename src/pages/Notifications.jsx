// import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";

function Notifications() {
  const [temp, setTemp] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [gas, setGas] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.thingspeak.com/channels/2449450/fields/1.json?api_key=5GC5GGJMH3UJYN01&results=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTemp((temp) => temp.push(data.feeds[0].field1));
      });

    fetch(
      "https://api.thingspeak.com/channels/2449450/fields/2.json?api_key=5GC5GGJMH3UJYN01&results=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHumidity((humidity) => humidity.push(data.feeds[0].field2));
      });

    fetch(
      "https://api.thingspeak.com/channels/2449450/fields/3.json?api_key=5GC5GGJMH3UJYN01&results=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGas((gas) => gas.push(data.feeds[0].field3));
      });
  }, []);
  return (
    <div>
      <h1>{temp}</h1>
      <h1>{humidity}</h1>
      <h1>{gas}</h1>
    </div>
  );
}
export default Notifications;
