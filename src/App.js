import "./App.css";
import Login from "./containers/Login";
function App() {
  return (
    <div className="App">
      <Login
        submit={(values) => {
          alert(JSON.stringify(values));
        }}
      />
    </div>
  );
}

export default App;
