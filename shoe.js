function myShoes () {


    var shoeList = [

        {color : 'blue', brand : "Nike",  price : 1200, in_stock : 10},
        {color : 'black',brand : "Louis vuitton",  price : 23500, in_stock : 15},
        {color : 'brown', brand : "Adidas",  price : 1750, in_stock : 5},
        {color : 'yellow', brand : "New balance",  price : 1800, in_stock : 100},
        {color : 'orange', brand : "Reebok",  price : 899, in_stock : 700},
        {color : 'white', brand : "All star",  price : 899, in_stock : 700},
        {color : 'grey', brand : "G-star",  price : 1699, in_stock : 700},
        {color : 'yellow', brand : "Puma",  price : 999, in_stock : 700},
        {color : 'red', brand : "Vans",  price : 550, in_stock : 700},
        {color : 'indigo', brand : "Jordaans",  price : 1500, in_stock : 700},
        
    ];


    var shoeCount = 0;

    // should be able to add 
    function addShoe(shoe) {
        shoeList.push(shoe);
        shoeCount++;
    }
    
    // get the shoeList
    function getShoeList() {
        return shoeList;
    }

    // get the shoes count if shoes are added
    function getShoeCount() {
        return shoeCount;
    }





    



    return {

        addShoe,
        getShoeList,
        getShoeCount,

    }



}