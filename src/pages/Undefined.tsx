import { Link } from "react-router-dom";

const Undefined = () => {
  return (
    <div className="container mx-auto py-5 min-vh-100 d-flex flex-column justify-content-center align-items-center gap-5">
      <h1 className="text-warning">404</h1>

      <p>Sorry, the page you are looking for cannot be found</p>

      <p>
        Burada devam edebilirisniz: <Link to="/">Home</Link>
      </p>
      <p>
        If you want to create a note: <Link to="/new">Create</Link>
      </p>
    </div>
  );
};

export default Undefined;
