const App = () => {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <Items isLoggedIn={true} />
    </div>
  );
};

export default App;

// const Items = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
//   if (isLoggedIn) {
//     return <h2>Welcome to the app</h2>;
//   } else {
//     <h2>Please log in to continue</h2>;
//   }
// };

// ternary operator

// function Items({ isLoggedIn }: { isLoggedIn: boolean }) {
//   return isLoggedIn ? (
//     <p>Welcome to the app</p>
//   ) : (
//     <p>Please log in to continue</p>
//   );
// }

// Rendering different component

function Items({ isLoggedIn }: { isLoggedIn: boolean }) {
  return isLoggedIn ? <Dasboard /> : <Singup />;
}

function Dasboard() {
  return <div>hi</div>;
}

function Singup() {
  return <p>Please sign up</p>;
}
