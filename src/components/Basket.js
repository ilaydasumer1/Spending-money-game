import BasketItem from "./BasketItem";

function Basket({basket, products, total}) {
    return( 
    <div className="basket">
    <h3 className="baslik"> My Shopping Basket</h3>
        {basket.map(item => (
            <BasketItem item={item} 
              product={products.find(p => p.id === item.id)}
            />
        ))}
        <div className="basket-total">
          Total:  ${total}
        </div>
        </div>
      )
        }
export default Basket;