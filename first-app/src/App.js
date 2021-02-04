import React from 'react';
import { arrHeadPhone } from './mockData/data'
import Product from './components/Product';
import TotalMoney from './components/TotalMoney'
function App() {
  return (
    <div className="App">
        <TotalMoney id='total_money' />
      <div id='container'>
        {arrHeadPhone.map(item => {
          let id = item.id || '';
          let title = item.title || 'chua cap nhat'
          let price = item.price || 'chua cap nhat'
          let img = item.image || 'chua cap nhat'
          return <Product id={id} title ={title} price={price} img={img} type='muaban'/>
        })}
      </div>
    </div>
  );
}

export default App;
