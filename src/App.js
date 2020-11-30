import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import DataLayout from './main';

function App() {
  const [theme, setTheme] = React.useState(false);

  const themeHandle = () => {
    if(theme === true) setTheme(false);
    else setTheme(true)
  }
  console.log(theme);

  return (
    <div className={theme === true ? "dark": "light"}>
      <DataLayout theme={theme} themeData={themeHandle} />
    </div>
  );
}

export default App;
