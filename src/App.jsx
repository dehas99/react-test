import "./App.css";

function Card({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Card title="kort 1" description="hej 1" />
      <Card title="kort 2" description="hej 2" />
      <Card title="kort 3" description="hej 3" />
    </div>
  );
}

export default App;
