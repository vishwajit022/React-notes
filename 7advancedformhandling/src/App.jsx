import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users, setusers] = useState([]);
  //Creating an empty array of objects
  const handleFormSubmitData = (data) => {
    setusers([...users, data]);
  };
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex mt-[-30vh] items-center justify-center">
        <div className="container mx-auto">
          <Cards props={users} />
          <Form handleFormSubmitData={handleFormSubmitData} />
        </div>
      </div>
    </>
  );
}

export default App;
