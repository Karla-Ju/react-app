import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;