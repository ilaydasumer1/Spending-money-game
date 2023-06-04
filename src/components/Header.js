import { useState } from "react";

function Header({total, money}) {
    return ( 
      <>
        {total > 0 && money - total !== 0 && (
            <div className="header"> You have <span> $ {money-total} </span>to spend</div>  
        )}

        {total === 0 && (
        <div className="header"> You have <span> {money}$ </span> to spend</div>
              )}
        {money - total === 0 && (
        <div className="header"> Your have no money</div>
         )}
         <style jsx>{`
          .header{
            position:sticky;
            top:0;
            background: linear-gradient(to bottom, #20b820, #2fff4b);
            height: 60px;
            display:flex;
            align-items: center;
            justify-content: center;
            color:#fff;
            font-size:24px;
            letter-spacing: 1px;
          }
          .header span{
            margin: 0 10px;
            font-weight:bold;
          }
    `}</style>
         </>
    )
}
export default Header;