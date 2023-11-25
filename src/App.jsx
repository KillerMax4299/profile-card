import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./components/Card";
import "./App.css";

function App() {
  const [gender, setGender] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    function fetcher() {
      setTimeout(async () => {
        const { data } = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const { first, last } = data.results[0].name;
        setName(first + " " + last);
        const { gender, phone, picture } = data.results[0];
        setGender(gender);
        setPhone(phone);
        setImage(picture.large);
      }, 10);
    }
    fetcher();
  }, []);

  return (
    <>
      <Card gender={gender} name={name} phone={phone} image={image} />
    </>
  );
}

export default App;
