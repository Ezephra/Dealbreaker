import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Dealpage.module.css";
import { Deal, Store } from "../../types";
import { Link } from "react-router-dom";

const url_deals = "https://www.cheapshark.com/api/1.0/deals";
const url_stores = "https://www.cheapshark.com/api/1.0/stores";



const Dealpage = () => {
    const [dealData, setDealData] = useState<Deal[]>([]);
    const [storeData, setStoreData] = useState<Store[]>([]);

    const LoadDeals = async() => {
        try {
            const res = await axios.get<Deal[]>(url_deals);
            setDealData(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const LoadStores = async() => {
        try {
            const res = await axios.get<Store[]>(url_stores);
            setStoreData(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        LoadDeals();
        LoadStores();
    },[]);

    return(
        <>
        
        <div className={styles.dealCard}>
            { dealData.map((deal:Deal) => {
                const store = storeData.find((store : Store) => parseInt(deal.storeID) === parseInt(store.storeID));
                const storeLogo = "https://www.cheapshark.com" + store?.images.icon;

                return(
                    <div key={deal.dealID} className={styles.dealCard_info}>
                        <Link to={{ pathname: "https://www.cheapshark.com/redirect?dealID=" + deal.dealID }} target="_blank">
                            <img className={styles.thumbnail} src={deal.thumb} alt={deal.internalName} />
                            <p className={styles.gameTitle}>{deal.title}</p>
                        </Link>
                        <p>Price: {deal.salePrice}&euro;</p>
                        <p>Available: {store?.storeName}</p>
                        <img src={storeLogo} alt={store?.storeName} />
                    </div>
                );
            })}
        </div> 
        
        </>
    );
}

export default Dealpage