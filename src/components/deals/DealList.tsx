import React from "react";
import DealItem from "./DealItem";
import { Deal } from "../../types";
import styles from "./DealList.module.css";

interface DealListProps {
  deals: Deal[]
}


const DealList = ({deals}: DealListProps) => {
    return(
      <div className={styles.dealList}>
        {deals.map((deal: Deal)=> {
          return(
            <DealItem deal={deal} key={deal.dealID}/>
          );
      })}
      </div>
    );
}

export default DealList;