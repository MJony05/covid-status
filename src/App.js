import CountryList from "./components/CountryList";
import { getData } from "./components/Api";
import CountryListContainer from "./redux/containers/CountryListContainer";
function App() {
  const data = getData();
  return (
    <>
      <CountryListContainer />
    </>
  );
}

export default App;
