import { arrHeadPhone } from '../mockData/data'
import { constants, store_state } from './store_state'
import TotalMoney from './TotalMoney'

const buyHeadPhone = (idItem) => {

    let totalMoney = JSON.parse(localStorage.getItem(constants.TOTAL_MONEY)) || 0;
    
    let arrProductBought = JSON.parse(localStorage.getItem(constants.LIST_PRODUCT_BOUGHT)) || [];
    const findHeadPhone = arrHeadPhone.find(item => {
        return item.id === idItem
    })
    totalMoney += Number(findHeadPhone.price.split('.').join(''));
    // document.getElementById((<TotalMoney id='total_money' />).props.id).innerText = totalMoney;
    const findHeadPhoneAtPB = arrProductBought.findIndex(item => item.id === findHeadPhone.id)
    if(findHeadPhoneAtPB === -1) {
        findHeadPhone.quantity = 1;
        arrProductBought.push(findHeadPhone)
    } else {
        let quantity = arrProductBought[findHeadPhoneAtPB].quantity || 1;
        arrProductBought[findHeadPhoneAtPB].quantity = quantity + 1;
    }
    // uodate gia tri o localstorage
    localStorage.setItem(constants.TOTAL_MONEY, JSON.stringify(totalMoney));
    localStorage.setItem(constants.LIST_PRODUCT_BOUGHT, JSON.stringify(arrProductBought))
}

export default buyHeadPhone;