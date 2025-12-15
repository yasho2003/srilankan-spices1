import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Sri Lankan Spices</h1>
      <p>Explore authentic Ceylon spices 🧂🌶️</p>

      <Link to="/products">
        <button>View Spices</button>
      </Link>
    </div>
  );
}

export default Home;
