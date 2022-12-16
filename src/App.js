import "./App.css";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";


function App() {
  return (
   
        <div className="body">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div style={{color:"#c4302b", fontSize:40, textAlign:"center" }}>Library Management</div>
            <Header />
            <Router />
          </div>
        </div>
      </div>
    </div>
     
  );
}

export default App;