import Item from './item';
import apple from './img/apple.jpeg'
import watch from './img/watch.jpeg'
import glass from './img/glass.jpeg'
import boots from './img/boots.jpeg'
import pencil from './img/pencil.jpeg'
import coin from './img/coin.jpeg'


class Items {

    constructor() {
    this.items =  [
        new Item(1,"Apple",apple,"a delicious apple",1.33,12),
        new Item(2,"Watch",watch,"shows time",22.99,2),
        new Item(3,"Glass",glass,"for drinks",4.99,3),
        new Item(4,"Boots",boots,"for running",33.99,10),
        new Item(5,"Pencil",pencil,"red colored pencil",1.99,20),
        new Item(6,"Coin",coin,"rusty new coin",0.99,14),
    ];
    }

}
export default Items;