import axios from 'axios'
import { create } from 'zustand'

const showStore = create((set) => ({
  fetchData: () => {
    console.log("hey");
  }
}))

export default showStore