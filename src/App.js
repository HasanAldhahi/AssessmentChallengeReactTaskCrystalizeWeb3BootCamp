import Form from "./Form";
import UserCard from "./UserCard";
import "./styles.css";

import { useState, useEffect } from "react";

export default function App() {
  const [userInfo, setUserInfo] = useState([]);
  // const [user, setUser] = useState("");

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/exchange_rates`)
      .then((res) => res.json())
      .then((info) => setUserInfo(Object.values(info.rates)));
  }, []);

  console.log(userInfo);

  return (
    <div className="card">
      <Form />

      {userInfo.map((el) => {
        return <UserCard name={el.name} value={el.value} />;
      })}
    </div>
  );
}
