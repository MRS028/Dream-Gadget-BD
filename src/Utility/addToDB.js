const getStoredCartList = () =>{
    // cart-list
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoreCartList = (id) =>{
    const storedList = getStoredCartList();
    if(storedList.includes(id)){

    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('whish-list',storedListStr);
    }
}

export {addToStoreCartList}