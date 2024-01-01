/*
import { useRef } from "react";

function App() {
  const name = useRef(null);
  const age = useRef(null);
  //We need to pass an html element in here
  function submit(e) {
    e.preventDefault();
    console.log(age.current.value);
    console.log(name.current.value);
  }
  return (
    <div>
      <form className="p-4" onSubmit={submit} action="">
        <input
          className="h-20 text-3xl border-2 w-30"
          ref={name}
          type="text"
          placeholder="name"
        />{" "}
        <br />
        <input
          className="h-20 text-3xl border-2 w-30"
          ref={age}
          type="text"
          placeholder="age"
        />
        <br />
        <button className="px-4 py-2 bg-blue-300 rounded-md btn">Submit</button>
      </form>
    </div>
  );
}

export default App;


*/

// import { useState } from "react";

// function App() {
//   const [val, setval] = useState({ name: "", email: "" });
//   function change(e) {
//     e.preventDefault();
//     setval({ ...val, name: e.target.value });
//   }
//   function changeemail(e) {
//     e.preventDefault();
//     setval({ ...val, email: e.target.value });
//   }
//   function submit(e) {
//     e.preventDefault();
//     console.log(val);
//   }
//   return (
//     <div>
//       <form action="" onSubmit={submit}>
//         <input onChange={change} type="text" placeholder="name" />
//         <input onChange={changeemail} type="text" placeholder="email " />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("email")} type="email" placeholder="email" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
