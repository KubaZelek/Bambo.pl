import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDD83UzInf0ytN0oCt80UVtSwZMOqAZu7s",
  authDomain: "bambopl-65a7a.firebaseapp.com",
  projectId: "bambopl-65a7a",
  storageBucket: "bambopl-65a7a.appspot.com",
  messagingSenderId: "387024769804",
  appId: "1:387024769804:web:b52b036eab0637faebef29",
  measurementId: "G-EKEG1V5SGP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <h1>bambopl</h1>
    </div>
  );
}

export default App;
