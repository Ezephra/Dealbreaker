import React from "react";
import { Deal, Store } from "../../types";
import styles from "./DealList.module.css";
import {Link} from "react-router-dom";

interface DealItemProps {
    deal : Deal
}

const DealItem = ({ deal }: DealItemProps) => {

    return (
      <Link to={`/deal/${deal.gameID}`}>
        <div key={deal.gameID} className={styles.dealCard}>
          <div>{deal.title}</div>
          <div>Normal price: {deal.normalPrice} &euro;</div>
          <div>Sale price: {deal.salePrice} &euro;</div>
          <div>Store ID: {deal.storeID}</div>
          <div><img src={deal.thumb} className={styles.img}/></div>
        </div>
      </Link>
    )
  }

export default DealItem;