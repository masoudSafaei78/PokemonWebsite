import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import LeftSideBar from './Components/LeftSideBar'
import Home from './Components/Pages/Home'
import Layout from './Components/Layout';
import ResponsiveDrawer from '../src/Components/Test'
import PokemonCards from '../src/Components/PokemonCards'
import Test2 from '../src/Components/test2'
function App() {
  return (
    <div style={{margin:"50px"}} className="App">
    {/* <Layout/> */}
    <ResponsiveDrawer/>
    {/* <PokemonCards/> */}
    {/* <Test2/> */}
    {/* <Home/> */}
    </div>
  );
}

export default App;
