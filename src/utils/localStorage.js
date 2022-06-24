export const getlocalStorage = (key) => {
    const data  = localStorage.getItem(key);
    if(!!data) return JSON.parse(data);
    else return false;
}

export const setlocalStorage = (key,data) => {
    const item = getlocalStorage(key);
    if(Boolean(item)){
        const newData = JSON.stringify([...item, data])
         localStorage.setItem(key, newData)
    }
    else{
        localStorage.setItem(key, JSON.stringify([data]))
    }
}

export const removeAllItems = (key) => {
      localStorage.removeItem(key)
}

export const removeCartItem = (img) => {
      let data = getlocalStorage("cart"); 
      if(!!data){
        data =  data.filter(item =>item.img !== img)
        localStorage.setItem("cart", JSON.stringify(data));
        return true;
      }
      else return false;

}



