import React from 'react';
import ListChild from '../../Utilities/ListChild';
import './OrganizedList.css'



let startList = [
  {
    productName: "Appricot", productQty: 20.4, 
  },
  {
    productName: "Fridge", productQty: 1500, 
  },
  {
    productName: "TV", productQty: 1499, 
  },
  {
    productName: "Deodorant", productQty: 10, 
  },
  {
    productName: "Boiler", productQty: 300, 
  },
  {
    productName: "Apple", productQty: 1.25, 
  },
  {
    productName: "Anti-bug spray", productQty: 15, 
  },
  {
    productName: "T-Shirt", productQty: 10, 
  },
]

function OrganizedList(props) {
  return (
    <div className='final-list-container'>
      <ul className="ol-start-list">
        {startList.map((product, index) => (
          <ListChild 
            key={index}
            index={index}
            liClass='ul-list-container'
            prodClass='ul-product'
            qtyClass='ul-qty'
            productName={product.productName}
            productQty={product.productQty}
          />
        ))}
      </ul>
     
    </div>
  );
}

export default OrganizedList;