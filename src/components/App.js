import React from "react";
import "./../styles/App.css";
import Autocomplete from "./Autocomplete";

const cities = [
  "Mumbai", "Navi Mumbai", "Delhi", "New Delhi", "Bengaluru", "Hyderabad",
  "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
  "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal", "Visakhapatnam",
  "Patna", "Vadodara", "Warangal", "Thane", "Coimbatore", "Kochi",
];

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Autocomplete suggestions={cities} />
    </div>
  );
};

export default App;