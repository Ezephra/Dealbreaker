import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Deal, Store } from '../../types';
import DealDetailPage from '../pages/DealDetailPage';
import DealList from './DealList';


const DealPage = ({route} : any) => {
  const [isLoading, setLoading] = useState(true);
  const [dealData, setDealData] = useState<Deal[]>([]);
  const [storeData, setStoreData] = useState<Store[]>([]);
  const fullURL_Deal = "https://www.cheapshark.com/api/1.0/deals";
  const fullURL_Store = "https://www.cheapshark.com/api/1.0/stores";

  const LoadDeals = async() => {
    try {
      const response = await axios.get<Deal[]>(fullURL_Deal)
      setDealData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } 
  }

  const LoadStores = async () => {
    try {
      const response = await axios.get<Store[]>(fullURL_Store)
      setStoreData(response.data);
    } catch (error) {
      console.log(error);
    } 
  }

  useEffect(() => {
    LoadDeals();
    LoadStores();
  }, []);

  return (
    <div>
      <Route path="/">
          <DealList deals={dealData}/>
    </Route>
    <Route path="/deal/:id">
          <DealDetailPage deals={dealData} stores={storeData}/>
    </Route>
    </div>
  );

}



export default DealPage;
