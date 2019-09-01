//Singleton Data Service

let instance = null;
var wishList = [];

class DataService {
    
    constructor() {
        
        if(!instance) {
            instance = this;
        }
    }
    
    addWishListItem =  item => {
        wishList.push(item);
    };
    
    removeWishListItem = item => {
        for(var x=0;x<wishList.length;x++) {
            if(wishList[x].id===item.id) {
                wishList.slice(x,1);
                break;
            }
        }
    }


}

export default DataService;