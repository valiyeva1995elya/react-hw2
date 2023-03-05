import React, { useState } from 'react';
import "./style.css"
import Shops from './components/Shops';
import NewShops from './components/NewShop';
import Functional from './components/Functional';

function App() {
const [posts, setPosts] = useState(

 [
      {
            id: 1,
            name: "Twinkl baby",
            start: "09:00",
            finish: "18:00",
            distance: 5,
            special: true
      },
      {
            id: 2,
            name: "Marwin",
            start: "10:00",
            finish: "20:00",
            distance: 7,
            special: true
      },
      {
            id: 3,
            name: "Kinder Store",
            start: "10:00",
            finish: "17:30",
            distance: 25,
            special: false
      },
      {
            id: 4,
            name: "Magic Toys",
            start: "11:00",
            finish: "22:00",
            distance: 20,
            special: true
      },

])
const [selectSort, setSelectSort] = useState("")
const newShop = (newShop:any) => {
      setPosts([...posts, newShop])
}

const sortPosts = (sort:any) => {
      setSelectSort(sort);
      setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
      
}


      return (
            <div>
                  <Shops arrStors={posts}></Shops>
                  <Functional
                        value={selectSort}
                        onChange={sortPosts}
                        defaultValue="Сортировка"
                        options={[
                              {value: "name", name: "По названию" },
                              {value: "start", name: "По времени открытия" },
                              {value: "finish", name: "По времени закрытия" },
                        ]}
                  />
                  <NewShops create={newShop}></NewShops>
            </div>

      )
}



export default App;
