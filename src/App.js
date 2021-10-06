import react, { useState } from "react";
import axios from 'axios';
import Product from './Product';

function App() {
  const [search, setSearch] = useState("");
  const [data, setData]=  useState([]);
  const YOUR_APP_ID= '1943331e';
   const YOUR_APP_KEY='2c260fcfc0c5bcdd978dd58fe9882404';

  const submitHandler = (e) => {
    
    
    // console.log(search);
    e.preventDefault(); 
    axios.get(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
    .then(array=> setData(array.data.hits))
  };

  return (
   
    <div>
      <center>
        <h4>Food Recipe App </h4>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <h1>{search}</h1>
          <br />
          <input type="submit" value="Search" className="btn btn-primary"/> <br />
        </form>
        {data.length>=1 ? <Product data={data}/> : null }
      </center>
    </div>
  );
}

export default App;
