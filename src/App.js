import logo from './logo.svg';
// import './App.css';
import Header from './Compoents/Header';

function App() {
  let Message = "Hello worlds"
  let user={
    name:"Ankit",
    city:"Pune"
  }

  function Demo(){
    return(
      <div>
      <p>Message : {Message}</p>
      <p>Message : {user.name}</p>
      <p>Message : {user.city}</p>
      </div>
    )
  }

  return (
    <div>
      <Demo/>    
      <Header />
    </div>
  );
}

export default App;

