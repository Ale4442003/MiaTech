import ItemList from "./ItemList";

export default function CityList() {
  const cities = ["Bergamo", "Milano", "Roma", "Torino"];

  return (
    <div>
      <h3>Cities</h3>
      <ItemList items={cities} />  
    </div>
  );
}
