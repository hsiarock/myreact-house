import logo from './logo.svg';
import './App.css';
import { FilterHouseTable } from './components/FilterHouseTable.js';


export default function App() {

  const DEMO_HOUSES = [
    { zip: "07060", address: "1 Linda Lane", price: "600,000"},
    { zip: "07060", address: "2 Linda Lane", price: "500,000"},
    { zip: "07060", address: "3 Linda Lane", price: "400,000"},
    { zip: "07030", address: "4 Linda Lane", price: "300,000"},
    { zip: "07030", address: "5 Linda Lane", price: "200,000"}
  ];

  return <FilterHouseTable houses={DEMO_HOUSES} />;
}
