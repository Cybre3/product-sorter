import React from 'react';
import OrganizedList from './OrganizedList/OrganizedList';
import UnorganizedStartList from './UnorganizedStartList/UnorganizedStartList';
import './ProductSortContainer.css'

function ProductSortContainer(props) {
  return (
    <div className='product-sort-container'>
      <UnorganizedStartList />
      <OrganizedList />
    </div>
  );
}

export default ProductSortContainer;