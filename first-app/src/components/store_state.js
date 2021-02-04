export const constants = {
    TOTAL_MONEY: "TOTAL_MONEY",
    LIST_PRODUCT_BOUGHT: "LIST_PRODUCT_BOUGHT"
}
export const store_state = {
    totalMoney: localStorage.getItem(constants.TOTAL_MONEY) || 0,
    listProductBought: localStorage.getItem(constants.LIST_PRODUCT_BOUGHT) || []
}


