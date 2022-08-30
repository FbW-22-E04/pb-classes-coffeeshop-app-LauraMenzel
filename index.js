class CoffeeShop {

  constructor(name, menu, orders) {

    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }

  addMenuItem(newMenuItem) {

    this.menu.push(newMenuItem);
  }

  addOrder(name) {

	const result = this.menu.filter((el) => el.name === name);

	if(result .length > 0){

		this.orders.push(name)}

	else{

	console.log("This item is currently unavailable!");
		}
	}
  


  fulfillOrder() {

    if (!this.orders.length > 0) {	

 	console.log(`The ${this.orders[0]} is ready`)

	this.orders.shift()
	
    } 

	 else{console.log("All orders have been fulfilled")
	}
    
  }


listOrders(){

	console.log('Orders:', this.orders);

}

dueAmount(){

	let total = 0;
	this.orders.forEach(item => {
		const price = this.menu.find(el => el.name === item).price
		console.log("dueAmount-price", price);

		total += price
	})

	console.log("dueAmount-total", total);
}


cheapestItem(){

	let cheapest = {
		price: Infinity,
		name: ''

	};

	this.menu.forEach(el => {

	if(el.price < cheapest.price)
	 {cheapest.price =el.price
	}
	console.log("cheapestItem", cheapest.name, 'with price', cheapest.price);

	})
}


drinksOnly(){

	const drinks = this.menu.filter(el => el.type === 'drink')
	console.log(drinks);
	
}

}


	

const menu = [
  {
    name: "Cola",
    type: "drink",
    price: 3,
  },
  {
    name: "Bolognese",
    type: "food",
    price: 7,
  },
  {
    name: "water",
    type: "drink",
    price: 2,
  },
  {
    name: "Pizza",
    type: "food",
    price: 7,
  },
];



const blackBean = new CoffeeShop('blackBean', menu,[]) 

console.log(blackBean);

blackBean.addOrder("Pizza");
blackBean.addOrder("Cola");
blackBean.drinksOnly();
blackBean.fulfillOrder();
blackBean.cheapestItem();
blackBean.addOrder("water")
blackBean.listOrders()
blackBean.dueAmount()
console.log(blackBean);
