import Card from "./components/Card";

const App = () => {
  const electronics = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/10259873/pexels-photo-10259873.jpeg?auto=compress&cs=tinysrgb&w=800",
      brand: "Apple",
      detail: "Uploaded on November 16th, 2021Uploaded on November 16th, 2021",
      price: "$1000",
      type: "Laptop",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/4161710/pexels-photo-4161710.jpeg?auto=compress&cs=tinysrgb&w=800",
      brand: "Samsung",
      detail: "Uploaded on November 16th, 2021Uploaded on November 16th, 2021",
      price: "$800",
      type: "Smartphone",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/11135667/pexels-photo-11135667.jpeg?auto=compress&cs=tinysrgb&w=800",
      brand: "Sony",
      detail: "Uploaded on November 16th, 2021Uploaded on November 16th, 2021",
      price: "$200",
      type: "Headphones",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=800",
      brand: "Dell",
      detail: "Uploaded on November 16th, 2021Uploaded on November 16th, 2021",
      price: "$500",
      type: "Desktop",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg?auto=compress&cs=tinysrgb&w=800",
      brand: "HP",
      detail: "Uploaded on November 16th, 2021Uploaded on November 16th, 2021",
      price: "$300",
      type: "Printer",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg?auto=compress&cs=tinysrgb&w=800",
      brand: "Canon",
      detail: "Uploaded on November 16th, 2021Uploaded on November 16th, 2021",
      price: "$400",
      type: "Camera",
    },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {electronics.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;
