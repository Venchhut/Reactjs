import { useRef, useState } from "react";
import "./App.css";

const products = Array.from({ length: 30 }, (_, i) => `Product ${i + 1}`);

const App = () => {
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    productRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h3>Products</h3>
        <div className="product-list">
          {products.map((item, index) => (
            <div
              key={index}
              className={`list-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          ))}
        </div>
      </aside>

      {/* Product Grid */}
      <main className="grid-container">
        {products.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              productRefs.current[index] = el ?? null;
              return;
            }}
            className="product-card"
          >
            <img
              src={`https://picsum.photos/300/300?random=${index}`}
              alt={item}
              className="product-image"
            />
            <div className="product-info">
              <h4>{item}</h4>
              <p>High-quality product with amazing features.</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
