import NavBar from './components/NavBar'
import Title from './components/Title'
import Container from 'react-bootstrap/Container';
import Category from './components/Category'
import ItemsList from './components/ItemsList'
import { useState } from 'react';
import { items } from './Data';

const App = () => {
  const [itemsData,setItemsData] = useState(items)
  // filter by category
  const filterByCategory = (isCategory)=>{
    if (isCategory === "الكل") {
      setItemsData([...items]) ;
    } else{
      const newArray = items.filter((item)=> item.category === isCategory)
      setItemsData([...newArray])
    }
  }
  // filter by search from 
  const filterBySearch = (word)=>{
    if (word !== "") { 
      const newArray = items.filter((item)=> item.title === word)
      setItemsData([...newArray])
    }
  }
  return (
    <div className='color-body font'>
      <NavBar filterBySearch={filterBySearch}/>
      <Container>
      <Title/>
      <Category data={items} filterByCategory={filterByCategory}/>
      <ItemsList data={itemsData}/>
      </Container>
    </div>
  )
}

export default App
