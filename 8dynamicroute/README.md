Hum sabse pehle apne App component ko BrowserRouter ke saath wrap karenge. Iss se href tag ko replace karne mein asani hogi.

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from "./Nav.jsx";
import Routing from "./components/Routing.jsx";

function App() {
return (
<Router>

<div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:1200/1*QfkzAdgYWe9mAOam8wOD_g.png)' }}>
<Nav />
<Routing />
</div>
</Router>
);
}

export default App;
Ab hum Link tag ka istemal karke href tag ko replace karenge, jisse ki hum path ko aasani se update kar sakein.

<Link to="/path">Home</Link>

Aur ab hum component ko render karenge, jaise ki yeh example dikhata hai:

<Routes>
<Route path="/about" element={<About />} />
<Route path="/" element={<Home />} />
<Route path="/cart" element={<Cart />} />
</Routes>
Iss tareeke se, hum apne React application mein react-router-dom ka use karke navigation implement kar sakte hain. Link tag se hum path ko update kar sakte hain, aur Routes aur Route components se humein specific components ko specific paths ke sath associate karne mein madad milti hai.
