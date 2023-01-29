import Routes from "./Router";
import { StyleGlobal } from "./Global";

function App() {
  return (
    <>
      <StyleGlobal />
      <div className="App">
        <main className="AppBody">
          <Routes />
        </main>
      </div>
    </>
  );
}

export default App;
