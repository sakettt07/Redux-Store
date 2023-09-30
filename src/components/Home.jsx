import React from 'react'
import img1 from "../assets/AKA8518.jpg";
import img2 from "../assets/Apple-iPhone-15-Proed.jpg";
import img3 from "../assets/Sony_PS50.jpg";
import img4 from "../assets/controllerZE.jpg"
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {
  const productList=[
    {
      name:"Mac Book",
      price:12000,
      imgSrc:img1,
      id:"askmkamk",
    },
    {
      name:"Iphone 15 Pro Max",
      price:700,
      imgSrc:img2,
      id:"askamk",
    },
    {
      name:"Sony PS5",
      price:500,
      imgSrc:img3,
      id:"askmk",
    },
    {
      name:"PS5 Gamepads",
      price:200,
      imgSrc:img4,
      id:"askak",
    },
  ];
  const dispatch=useDispatch();
  const addToCart=(options)=>{
    dispatch({type:"addToCart",payload:options})
    dispatch({type:"calculatePrice"});

    toast.success("Added To Cart");

  }
  return (
    <div className='home'>
      {
        productList.map(i=>(
          <ProductCard 
          key={i.id} 
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCart} />
        ))
      }
    </div>
  )
};
const ProductCard=({name,id,price,handler,imgSrc})=>(
  <div className='productCard'>
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
  </div>
)

export default Home
