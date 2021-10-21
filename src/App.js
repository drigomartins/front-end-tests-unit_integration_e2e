import DataProvider from './context/general'
import Main from "./pages/main"
import "./assets/style/globals.css"

function App() {
  return (
    <DataProvider>
      <Main/>
    </DataProvider>
  );
}

export default App;
