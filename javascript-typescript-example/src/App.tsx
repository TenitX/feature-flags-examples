import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { isEnabled } from './TenitFeatureFlags';

function App() {

  const [showNewUi, setShowNewUi] = useState(false);

  const userId = "abc-123";

  useEffect(() => {
    isEnabled("newUi", userId).then(setShowNewUi);
  }, []);


  const oldUi =
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <input placeholder='Email' /> 
      <input placeholder='First Name' /> 
      <input placeholder='Last Name' />
      <button>Submit</button>
      </header>

  const newUi =
      <div className="form-style-6">
      <h1>Contact Us</h1>
      <form>
      <input type="text" name="field1" placeholder="Your Name" />
      <input type="email" name="field2" placeholder="Email Address" />
      <textarea name="field3" placeholder="Type your Message"></textarea>
      <input type="submit" value="Send" />
      </form>
      </div>

  return (
    <div className="App">
      {showNewUi ? newUi : oldUi}
    </div>
  );
}

export default App;
