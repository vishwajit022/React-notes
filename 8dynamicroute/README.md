We are going to first wrap app components with BrowserRouter
Inorder to replace href tag inside it

We will use Link tag which will further could be used to update the path

<Link to="/path">Home</Link>

Add we could render the component just like this

 <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<home />} />
        <Route path="/cart" element={<Cart />} />
</Routes>
