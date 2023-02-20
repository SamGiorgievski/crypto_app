import axios from 'axios'
import { create } from 'zustand'
import debounce from '../helpers/debounce'

const homeStore = create((set) => ({
  coins: [],
  query: '',

  setQuery: (e) => {
    set({query: e.target.value})
    homeStore.getState().searchCoins()
  },

  searchCoins: debounce(async () => {
    const {query} = homeStore.getState()
    const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
    
    const coins = res.data.coins.map(coin => {
      return {
        name: coin.name,
        image: coin.large,
        id: coin.id,
        rank: coin.market_cap_rank,
        symbol: coin.symbol,
        logo: coin.thumb
      }
    })

    set({coins})
  }, 500),

 fetchCoins: async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')

  const coins = res.data.coins.map(coin => {
    return {
      name: coin.item.name,
      image: coin.item.large,
      id: coin.item.id,
      priceBTC: coin.item.price_btc,
      logo: coin.item.thumb,
      symbol: coin.item.symbol,
      rank: coin.item.market_cap_rank
    }
  })
  set({coins})
 }

}))

export default homeStore