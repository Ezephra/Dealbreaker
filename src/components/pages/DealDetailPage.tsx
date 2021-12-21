import { useParams } from 'react-router-dom';
import { Deal, Store } from '../../types';
import styles from './DetailPage.module.css';
interface ParamTypes {
  id: string
}

interface DetailPageProps {
  deals: Deal[],
  stores: Store[],
}

const DealDetailPage = ({deals} : DetailPageProps, {stores} : DetailPageProps) => {
  let { id } = useParams<ParamTypes>();

  let deal = deals.find((deal: Deal) => deal.dealID === id);
  let store = stores.find((store : Store) => store.storeID === deal?.storeID)

  return (
    <div>
      <div>{deal?.title}</div>
      <div>{deal?.salePrice}</div>
      <div>{deal?.normalPrice}</div>
      <div>Available store: {store?.storeName}</div>
    </div>
  )
}

export default DealDetailPage;