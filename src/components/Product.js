import { useState } from "react";

function Product({product, basket, setBasket, total, money}) {


const basketItem = basket.find(item => item.id === product.id)
  /*const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// Expected output: 12 FİND BU ŞEKİLDE KULLANILIR.
*/
  const addBasket = () => {
   const checkBasket = basket.find(item => item.id == product.id)

  if(checkBasket){
   checkBasket.amount +=1
   setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
  
  } else {
    setBasket([...basket, {
      id: product.id,
      amount :1
    }])
  }
  }
    const removeBasket = () => {
     const currentBasket = basket.find(item => item.id === product.id)
     const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
     currentBasket.amount -= 1
     if (currentBasket.amount === 0){
      setBasket(basketWithoutCurrent)

     } else {
      setBasket([...basketWithoutCurrent,currentBasket])
     }

    }


    

    return(
     <div className="product">
     <img src={product.image} alt=""/>
       <h6>{product.title}</h6> 
       <div className="price">${product.price}</div>
       <div className="actions">
        <button className="sell-btn"disabled= {!basketItem} onClick={removeBasket}>Take out</button>
        <span className="amount">{basketItem && basketItem.amount || 0}</span>
        <button className="buy-btn" disabled={total + product.price > money}onClick={addBasket}>Buy</button>
       </div>
       <style jsx>{`
         .product{
          padding: 15px;
          background:#fff;
          border:1px solid #ddd;
          margin-bottom:20px;
          padding: 20px 0;
         }
         .product h6{
          font-size: 20px;
          margin-bottom: 10px;
         }
         .product .price{
          font-size:20px;
          color:#179b17;
         }
         .product .acions {
          display: flex;
          align-items: center;
         }
         .actions{
          text-align:center;
         }
         .actions button{
          height: 40px;
          padding: 0 15px;
          cursor: pointer;
         }
         .actions .amount {
          width: 50px;
         }
         .actions .buy-btn {
          background: #c4b0ff;
         }
         .actions .sell-btn {
          background: #c4b0ff;
         }
        .amount{
          height: 40px;
          cursor: pointer;
          padding: 0 15px;
        }
    `}</style>
     </div>
    )
}
export default Product;
