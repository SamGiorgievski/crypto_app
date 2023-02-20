import {useEffect} from 'react'
import homeStore from '../stores/HomeStore';
import { Link } from "react-router-dom";

export default function Home() {

  const store = homeStore();

  useEffect(() => {
    store.fetchCoins()
  }, [])

  return (
    <div>
      <input type="text" value={store.query} onChange={store.setQuery}/>
      {store.coins.map(coin=> {
        return (
          <div key={coin.id}>
            <Link to={`/${coin.id}`} >
              {coin.name}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
