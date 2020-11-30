import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import DataLayout from './main';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [theme, setTheme] = React.useState(false);

  const themeHandle = () => {
    if(theme === true) setTheme(false);
    else setTheme(true)
  }
  console.log(theme);

  return (
    <Router>
    <div className={theme === true ? "dark": "light"}>
      <DataLayout theme={theme} themeData={themeHandle} />
    </div>
    </Router>
  );
}

export default App;
