import './App.css';
import React, { useEffect } from 'react'
import Dashboard from './components/NavBar/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './DataActions/DataAction';
import Card from './components/Card/Card';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <NavBar/>
      <hr style={{marginTop : "10px"}} />
      <Dashboard/>
    </div>
  ) : <Card/>
}

export default App;
