//Singleton Data Service

import NotificationService,{NOTIF_WISHLIST_CHANGED} from './notification-services';

let ns = new NotificationService();

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
        ns.postNotification(NOTIF_WISHLIST_CHANGED,wishList);
    };
    
    removeWishListItem = item => {
        for(var x=0;x<wishList.length;x++) {
            if(wishList[x].id===item.id) {
                wishList.splice(x,1);
                ns.postNotification(NOTIF_WISHLIST_CHANGED,wishList);
                break;
            }
        }
    }


}

export default DataService;