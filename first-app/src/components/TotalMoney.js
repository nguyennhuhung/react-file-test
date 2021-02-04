import React from 'react'
import { constants, store_state } from './store_state'

 const TotalMoney = (props) => {
    return  <div id={props.id}>{store_state.totalMoney}</div>
}
export default TotalMoney