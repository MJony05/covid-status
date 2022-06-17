const CountryList = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.getCountriesAction()}>Start</button>
    </div>
  );
};
export default CountryList;
