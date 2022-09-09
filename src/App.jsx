import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Movies from "./components/Movies";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e8c8176f&s=panda").then(
        (res) => res.json().then((data) => setData(data.Search))
      );
    }, 2000);
  });
  return (
    <div className="app">
      {data.length ? (
        <>
          <div className="header">
            <h2>Logo</h2>
            <h3>OMDBapi</h3>
          </div>
          <div className="content">
            <Movies data={data} />
          </div>
          <div className="footer">
            <p>{new Date().getFullYear()} Copyright Text</p>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
