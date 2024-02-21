import {useState} from 'react'

const List = ()=>{

  const [products, setProducts] = useState(["Apple", "OnePlus"]);
  const [inputValue, setInputvalue] = useState("");
  const handleChange = (e)=>{
    // console.log("test", e.target.value)
    setInputvalue(e.target.value)
  }
  const handleClick = ()=>{
    console.log("test>>>>", inputValue)
    // setProducts([...products, inputValue])
    const updateProducts = [...products];
    updateProducts.push(inputValue);
    setProducts(updateProducts)
  }
  return(
    <>
  <input onChange={handleChange}/>
  <button onClick={handleClick}>Submit</button>
    <ul>
      {products.map((product, i)=><li key={i}>{product}</li>)}
      <li>List</li>
    </ul>
    </>
  )
}

export default List