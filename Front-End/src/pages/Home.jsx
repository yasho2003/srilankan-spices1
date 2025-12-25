import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const featuredSpices = [
    {
      id: 1,
      name: "Ceylon Cinnamon (කුරුඳු)",
      description: "True Cinnamon, delicate and slightly sweet, harvested from the inner bark.",
      image: "/images/spice-cinnamon.png",
      price: "$15.00",
    },
    {
      id: 2,
      name: "Green Cardamom (කරදමුංගු)",
      description: "The 'Queen of Spices', known for its intense, slightly sweet flavor.",
      image: "/images/spice-cardamom.png",
      price: "$22.50",
    },
    {
      id: 3,
      name: "Black Pepper (ගම්මිරිස්)",
      description: "King of spices, offering a sharp, hot biting taste.",
      image: "/images/spice-pepper.png",
      price: "$12.00",
    },
    {
      id: 4,
      name: "Chili Flakes (කෑලිමිරිස්)",
      description: "Sun-dried red chilies crushed for a fiery kick.",
      image: "/images/spice-chili-flakes.png",
      price: "$8.50",
    },
    {
      id: 5,
      name: "Turmeric Powder (කහකුඩු)",
      description: "Vibrant yellow spice known for its earthy aroma and health benefits.",
      image: "/images/spice-turmeric.png",
      price: "$10.00",
    },
    {
      id: 6,
      name: "Nutmeg (සාදික්කා)",
      description: "Warm, nutty flavor perfect for baking and savory dishes.",
      image: "/images/spice-nutmeg.png",
      price: "$18.00",
    },
  ];

  const handleAddToCart = async (spice) => {
    const success = await addToCart(spice.id, 1);
    if (success) {
      // Show success feedback (optional: add toast notification)
      alert(`${spice.name} added to cart!`);
    }
  };

  const handleBuyNow = (spice) => {
    // Navigate to payment/checkout
    navigate("/payment");
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>Srilankan Spices</h1>
          <p>
            Experience the authentic aroma and taste of premium Ceylon spices,
            harvested directly from the lush gardens of Sri Lanka.
          </p>
          <Link to="/products">
            <button className="cta-button">Explore Collection</button>
          </Link>
        </div>
      </section>

      {/* Featured Spices Section */}
      <section className="section-featured">
        <h2 className="section-title">Featured Collections</h2>
        <div className="spices-grid">
          {featuredSpices.map((spice) => (
            <div key={spice.id} className="spice-card">
              <img src={spice.image} alt={spice.name} />
              <h3>{spice.name}</h3>
              <p>{spice.description}</p>
              <div className="spice-price">{spice.price}</div>
              <div className="spice-actions">
                <button
                  className="spice-btn btn-cart"
                  onClick={() => handleAddToCart(spice)}
                >
                  Add to Cart
                </button>
                <button
                  className="spice-btn btn-buy"
                  onClick={() => handleBuyNow(spice)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story/About Section */}
      <section className="section-about">
        <h2 className="section-title">Our Heritage</h2>
        <div className="about-text">
          <p>
            Nestled in the heart of the Indian Ocean, Sri Lanka has been known for centuries as the 'Spice Island'.
            Our spices are not just ingredients; they are a legacy of tradition, cultivation, and passion.
            We bring you the purest, most aromatic spices, ethically sourced to enrich your culinary journey.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
