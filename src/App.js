import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { ThemeContext } from './Context/AuthProvider';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div data-theme={theme?"dark":"light"}>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
