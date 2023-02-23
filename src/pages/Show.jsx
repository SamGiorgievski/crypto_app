import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'

export default function Show() {
  const store = showStore();
  const params = useParams();

  useEffect(() => {
    console.log(params);
    store.fetchData();
  }, [])

  return (
    <div>Show</div>
  )
}
