import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useCurrency } from "../context/useCurrency";
import { products } from "../data/products"; // Using central product data

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleRecommendQuantity = (newQty) => {
    if (newQty < 1) return;
    setQuantity(newQty);
  };

  const handleAddToCart = async () => {
    if (!product) return;
    setIsAdding(true);
    const success = await addToCart(product, quantity);
    setIsAdding(false);
    if (success) {
      alert(`${product.name} (x${quantity}) added to cart!`);
    } else {
      alert("Failed to add to cart.");
    }
  };

  const handleBuyNow = async () => {
    if (!product) return;
    const success = await addToCart(product, quantity);
    if (success) {
      alert(`${product.name} (x${quantity}) added to cart!`);
      navigate("/cart");
    } else {
      alert("Failed to add to cart.");
    }
  };

  if (!product) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading product...</div>;
  }

  // Placeholder logic for stock
  const stockStatus = "In stock, ready to ship";

  return (
    <div style={{ padding: "40px", display: 'flex', gap: '40px', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap' }}>
      {/* Left: Image */}
      <div style={{ flex: '1 1 400px' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            border: '1px solid #030303ff'
          }}
        />
      </div>

      {/* Right: Details */}
      <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        <div>
          <h2 style={{ fontFamily: 'ui-monospace', fontSize: '2.5rem', marginBottom: '10px' }}>{product.name}</h2>
          {/* Category or other info could go here */}
          {product.category && <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', color: '#888' }}>{product.category}</span>}
        </div>

        {/* Description */}
        <div style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#444' }}>
          {product.description || product.desc}
        </div>

        {/* Price */}
        <div>
          <p style={{ margin: '0', fontSize: '1.9rem', fontWeight: 'bold',fontFamily:'serif' }}>
            {formatPrice(product.price)}
          </p>
        </div>

        {/* Stock Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', color: '#2e7d32' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2e7d32', display: 'inline-block' }}></span>
          {stockStatus}
        </div>


        {/* Controls Container */}
        <div style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '8px', marginTop: '10px' }}>

          {/* Quantity Selector */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '1.1rem', marginBottom: '8px', fontWeight: 'bold' }}>Quantity</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #030303ff', width: 'fit-content', borderRadius: '4px' }}>
              <button
                onClick={() => handleRecommendQuantity(quantity - 1)}
                style={{ background: 'transparent', border: 'none', padding: '8px 15px', cursor: 'pointer', fontSize: '1.2rem',color:'#030303ff' }}
              >−</button>
              <span style={{ padding: '8px 15px', minWidth: '40px', textAlign: 'center', fontSize: '1.1rem' }}>{quantity}</span>
              <button
                onClick={() => handleRecommendQuantity(quantity + 1)}
                style={{ background: 'transparent', border: 'none', padding: '8px 15px', cursor: 'pointer', fontSize: '1.2rem',color:'#030303ff' }}
              >+</button>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              style={{
                background: '#fff',
                color: '#000',
                border: '1px solid #000',
                padding: '15px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background 0.2s',
                width: '100%',
                fontSize: '1rem'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#f5f5f5'}
              onMouseOut={(e) => e.currentTarget.style.background = '#fff'}
            >
              {isAdding ? 'Adding...' : 'Add to cart'}
            </button>

            <button
              onClick={handleBuyNow}
              style={{
                background: '#4f46e5', // Purchase button 
                color: '#f6f3f3ff',
                border: 'none',
                padding: '15px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%',
                fontSize: '1rem'
              }}
            >
              Buy with Shop
            </button>
          </div>

          <div style={{ marginTop: '15px', fontSize: '0.85rem', color: '#666', textAlign: 'center' }}>
            <p>Secure payments • Free shipping over $65</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
