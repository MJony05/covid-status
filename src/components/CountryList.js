import './../styles.css'
const CountryList = (props) => {
  const countries = props.countries
  const clazz = countries.length ? 'none' : 'block'
  const getIso = (name)=> {
    console.log(name)
  }
  return (
    <div>

      <button style={{display:clazz}} onClick={() => props.getCountriesAction()}>Start</button>
      <ul className="country-list">
        {countries.map((val,index) => {
          return <li onClick={()=>getIso(val.iso)} key={index}><p className="country-item" >{index + " - " +val.name}</p></li>
        })}
      </ul>

    </div>
  );
};
export default CountryList;
