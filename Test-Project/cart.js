
var table = document.getElementById("myTable");


//
var smallQuantityInput_saltPop = document.getElementById("quantity-popcorn");
var mediumQuantityInput_saltPop = document.getElementById("quantity-popcorn-medium");
var largeQuantityInput_saltPop = document.getElementById("quantity-popcorn-large");

var smallQuantityInput_ginger = document.getElementById("quantity-popcorn-ginger-S");
var mediumQuantityInput_ginger = document.getElementById("quantity-popcorn-ginger-M");
var largeQuantityInput_ginger = document.getElementById("quantity-popcorn-ginger-L");

var smallQuantityInput_spicy = document.getElementById("quantity-popcorn-spicy-S");
var mediumQuantityInput_spicy = document.getElementById("quantity-popcorn-spicy-M");
var largeQuantityInput_spicy = document.getElementById("quantity-popcorn-spicy-L");

var smallQuantityInput_herb = document.getElementById("quantity-popcorn-herb-S");
var mediumQuantityInput_herb = document.getElementById("quantity-popcorn-herb-M");
var largeQuantityInput_herb = document.getElementById("quantity-popcorn-herb-L");

var smallQuantityInput_sugar = document.getElementById("quantity-popcorn-sugar-S");
var mediumQuantityInput_sugar = document.getElementById("quantity-popcorn-sugar-M");
var largeQuantityInput_sugar = document.getElementById("quantity-popcorn-sugar-L");

var smallQuantityInput_bbq = document.getElementById("quantity-popcorn-bbq-S");
var mediumQuantityInput_bbq = document.getElementById("quantity-popcorn-bbq-M");
var largeQuantityInput_bbq = document.getElementById("quantity-popcorn-bbq-L");



var smallQuantityInput_coke = document.getElementById("quantity-coke-small");
var mediumQuantityInput_coke = document.getElementById("quantity-coke-medium");
var largeQuantityInput_coke = document.getElementById("quantity-coke-large");

var smallQuantityInput_sprite = document.getElementById("quantity-sprite-small");
var mediumQuantityInput_sprite = document.getElementById("quantity-sprite-medium");
var largeQuantityInput_sprite = document.getElementById("quantity-sprite-large");

var smallQuantityInput_orange = document.getElementById("quantity-orange-small");
var mediumQuantityInput_orange= document.getElementById("quantity-orange-medium");
var largeQuantityInput_orange = document.getElementById("quantity-orange-large");

var smallQuantityInput_pineapple= document.getElementById("quantity-pineapple-small");
var mediumQuantityInput_pineapple= document.getElementById("quantity-pineapple-medium");
var largeQuantityInput_pineapple = document.getElementById("quantity-pineapple-large");

var smallQuantityInput_milkshake = document.getElementById("quantity-milkshake-small");
var mediumQuantityInput_milkshake = document.getElementById("quantity-milkshake-medium");
var largeQuantityInput_milkshake = document.getElementById("quantity-milkshake-large");

var smallQuantityInput_coffee = document.getElementById("quantity-coffee-small");
var mediumQuantityInput_coffee = document.getElementById("quantity-coffee-medium");
var largeQuantityInput_coffee = document.getElementById("quantity-coffee-large");

var smallQuantityInput_hotdog = document.getElementById("quantity-hotdog-small");
var mediumQuantityInput_hotdog = document.getElementById("quantity-hotdog-medium");
var largeQuantityInput_hotdog = document.getElementById("quantity-hotdog-large");

var smallQuantityInput_saltycrepe = document.getElementById("quantity-saltycrepe-small");
var mediumQuantityInput_saltycrepe = document.getElementById("quantity-saltycrepe-medium");
var largeQuantityInput_saltycrepe = document.getElementById("quantity-saltycrepe-large");

var smallQuantityInput_noodles = document.getElementById("quantity-noodles-small");
var mediumQuantityInput_noodles = document.getElementById("quantity-noodles-medium");
var largeQuantityInput_noodles = document.getElementById("quantity-noodles-large");

var smallQuantityInput_nachos = document.getElementById("quantity-nachos-small");
var mediumQuantityInput_nachos = document.getElementById("quantity-nachos-medium");
var largeQuantityInput_nachos = document.getElementById("quantity-nachos-large");

var smallQuantityInput_burger = document.getElementById("quantity-burger-small");
var mediumQuantityInput_burger = document.getElementById("quantity-burger-medium");
var largeQuantityInput_burger = document.getElementById("quantity-burger-large");

var smallQuantityInput_crepe = document.getElementById("quantity-crepe-small");
var mediumQuantityInput_crepe = document.getElementById("quantity-crepe-medium");
var largeQuantityInput_crepe = document.getElementById("quantity-crepe-large");




//
smallQuantityInput_saltPop.addEventListener("change", updateTable);
mediumQuantityInput_saltPop.addEventListener("change", updateTable);
largeQuantityInput_saltPop.addEventListener("change", updateTable);

smallQuantityInput_ginger.addEventListener("change", updateTable);
mediumQuantityInput_ginger.addEventListener("change", updateTable);
largeQuantityInput_ginger.addEventListener("change", updateTable);

smallQuantityInput_spicy.addEventListener("change", updateTable);
mediumQuantityInput_spicy.addEventListener("change", updateTable);
largeQuantityInput_spicy.addEventListener("change", updateTable);

smallQuantityInput_herb.addEventListener("change", updateTable);
mediumQuantityInput_herb.addEventListener("change", updateTable);
largeQuantityInput_herb.addEventListener("change", updateTable);

smallQuantityInput_sugar.addEventListener("change", updateTable);
mediumQuantityInput_sugar.addEventListener("change", updateTable);
largeQuantityInput_sugar.addEventListener("change", updateTable);

smallQuantityInput_bbq.addEventListener("change", updateTable);
mediumQuantityInput_bbq.addEventListener("change", updateTable);
largeQuantityInput_bbq.addEventListener("change", updateTable);

smallQuantityInput_coke.addEventListener("change", updateTable);
mediumQuantityInput_coke.addEventListener("change", updateTable);
largeQuantityInput_coke.addEventListener("change", updateTable);

smallQuantityInput_sprite.addEventListener("change", updateTable);
mediumQuantityInput_sprite.addEventListener("change", updateTable);
largeQuantityInput_sprite.addEventListener("change", updateTable);

smallQuantityInput_orange.addEventListener("change", updateTable);
mediumQuantityInput_orange.addEventListener("change", updateTable);
largeQuantityInput_orange.addEventListener("change", updateTable);

smallQuantityInput_pineapple.addEventListener("change", updateTable);
mediumQuantityInput_pineapple.addEventListener("change", updateTable);
largeQuantityInput_pineapple.addEventListener("change", updateTable);

smallQuantityInput_milkshake.addEventListener("change", updateTable);
mediumQuantityInput_milkshake.addEventListener("change", updateTable);
largeQuantityInput_milkshake.addEventListener("change", updateTable);

smallQuantityInput_coffee.addEventListener("change", updateTable);
mediumQuantityInput_coffee.addEventListener("change", updateTable);
largeQuantityInput_coffee.addEventListener("change", updateTable);

smallQuantityInput_hotdog.addEventListener("change", updateTable);
mediumQuantityInput_hotdog.addEventListener("change", updateTable);
largeQuantityInput_hotdog.addEventListener("change", updateTable);

smallQuantityInput_saltycrepe.addEventListener("change", updateTable);
mediumQuantityInput_saltycrepe.addEventListener("change", updateTable);
largeQuantityInput_saltycrepe.addEventListener("change", updateTable);

smallQuantityInput_noodles.addEventListener("change", updateTable);
mediumQuantityInput_noodles.addEventListener("change", updateTable);
largeQuantityInput_noodles.addEventListener("change", updateTable);

smallQuantityInput_nachos.addEventListener("change", updateTable);
mediumQuantityInput_nachos.addEventListener("change", updateTable);
largeQuantityInput_nachos.addEventListener("change", updateTable);

smallQuantityInput_burger.addEventListener("change", updateTable);
mediumQuantityInput_burger.addEventListener("change", updateTable);
largeQuantityInput_burger.addEventListener("change", updateTable);

smallQuantityInput_crepe.addEventListener("change", updateTable);
mediumQuantityInput_crepe.addEventListener("change", updateTable);
largeQuantityInput_crepe.addEventListener("change", updateTable);

// 


function updateTable() {
    // 
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
  
    // 
    var smallQuantity = parseInt(smallQuantityInput_saltPop.value);
    var mediumQuantity = parseInt(mediumQuantityInput_saltPop.value);
    var largeQuantity = parseInt(largeQuantityInput_saltPop.value);


    var smallQuantity2 = parseInt(smallQuantityInput_ginger.value);
    var mediumQuantity2 = parseInt(mediumQuantityInput_ginger.value);
    var largeQuantity2 = parseInt(largeQuantityInput_ginger.value);

    var smallQuantity3 = parseInt(smallQuantityInput_spicy.value);
    var mediumQuantity3 = parseInt(mediumQuantityInput_spicy.value);
    var largeQuantity3 = parseInt(largeQuantityInput_spicy.value);

    var smallQuantity4 = parseInt(smallQuantityInput_herb.value);
    var mediumQuantity4 = parseInt(mediumQuantityInput_herb.value);
    var largeQuantity4 = parseInt(largeQuantityInput_herb.value);

    var smallQuantity5 = parseInt(smallQuantityInput_sugar.value);
    var mediumQuantity5 = parseInt(mediumQuantityInput_sugar.value);
    var largeQuantity5 = parseInt(largeQuantityInput_sugar.value);

    var smallQuantity6 = parseInt(smallQuantityInput_bbq.value);
    var mediumQuantity6 = parseInt(mediumQuantityInput_bbq.value);
    var largeQuantity6 = parseInt(largeQuantityInput_bbq.value);
  
    var smallQuantity7 = parseInt(smallQuantityInput_coke.value);
    var mediumQuantity7 = parseInt(mediumQuantityInput_coke.value);
    var largeQuantity7 = parseInt(largeQuantityInput_coke.value);

    var smallQuantity8 = parseInt(smallQuantityInput_sprite.value);
    var mediumQuantity8 = parseInt(mediumQuantityInput_sprite.value);
    var largeQuantity8 = parseInt(largeQuantityInput_sprite.value);

    var smallQuantity9 = parseInt(smallQuantityInput_orange.value);
    var mediumQuantity9 = parseInt(mediumQuantityInput_orange.value);
    var largeQuantity9 = parseInt(largeQuantityInput_orange.value);

    var smallQuantity10 = parseInt(smallQuantityInput_pineapple.value);
    var mediumQuantity10 = parseInt(mediumQuantityInput_pineapple.value);
    var largeQuantity10 = parseInt(largeQuantityInput_pineapple.value);

    var smallQuantity11 = parseInt(smallQuantityInput_milkshake.value);
    var mediumQuantity11 = parseInt(mediumQuantityInput_milkshake.value);
    var largeQuantity11 = parseInt(largeQuantityInput_milkshake.value);

    var smallQuantity12 = parseInt(smallQuantityInput_coffee.value);
    var mediumQuantity12 = parseInt(mediumQuantityInput_coffee.value);
    var largeQuantity12 = parseInt(largeQuantityInput_coffee.value);

    var smallQuantity13 = parseInt(smallQuantityInput_hotdog.value);
    var mediumQuantity13 = parseInt(mediumQuantityInput_hotdog.value);
    var largeQuantity13 = parseInt(largeQuantityInput_hotdog.value);

    var smallQuantity14 = parseInt(smallQuantityInput_saltycrepe.value);
    var mediumQuantity14 = parseInt(mediumQuantityInput_saltycrepe.value);
    var largeQuantity14 = parseInt(largeQuantityInput_saltycrepe.value);

    var smallQuantity15 = parseInt(smallQuantityInput_noodles.value);
    var mediumQuantity15 = parseInt(mediumQuantityInput_noodles.value);
    var largeQuantity15 = parseInt(largeQuantityInput_noodles.value);

    var smallQuantity16 = parseInt(smallQuantityInput_nachos.value);
    var mediumQuantity16 = parseInt(mediumQuantityInput_nachos.value);
    var largeQuantity16 = parseInt(largeQuantityInput_nachos.value);

    var smallQuantity17 = parseInt(smallQuantityInput_burger.value);
    var mediumQuantity17 = parseInt(mediumQuantityInput_burger.value);
    var largeQuantity17 = parseInt(largeQuantityInput_burger.value);

    var smallQuantity18 = parseInt(smallQuantityInput_crepe.value);
    var mediumQuantity18 = parseInt(mediumQuantityInput_crepe.value);
    var largeQuantity18 = parseInt(largeQuantityInput_crepe.value);

    // 
    var totalCost = smallQuantity * 5 + mediumQuantity * 7 + largeQuantity * 9 
    + smallQuantity2 * 5 + mediumQuantity2 * 7 + largeQuantity2 * 9 + 
    smallQuantity3 * 5 + mediumQuantity3 * 7 + largeQuantity3 * 9 
    + smallQuantity4 * 5 + mediumQuantity4 * 7 + largeQuantity4 * 9+
    + smallQuantity5 * 5 + mediumQuantity5 * 7 + largeQuantity5 * 9+
     smallQuantity6 * 5 + mediumQuantity6 * 7 + largeQuantity6 * 9
     + smallQuantity7 * 5 + mediumQuantity7 * 7 + largeQuantity7 * 9
     + smallQuantity8 * 5 + mediumQuantity8 * 7 + largeQuantity8 * 9
     + smallQuantity9 * 5 + mediumQuantity9 * 7 + largeQuantity9 * 9
     + smallQuantity10 * 5 + mediumQuantity10 * 7 + largeQuantity10 * 9
     + smallQuantity11 * 5 + mediumQuantity11 * 7 + largeQuantity11 * 9
     + smallQuantity12 * 5 + mediumQuantity12 * 7 + largeQuantity12 * 9
     + smallQuantity13 * 5 + mediumQuantity13 * 7 + largeQuantity13 * 9
     + smallQuantity14 * 5 + mediumQuantity14 * 7 + largeQuantity14 * 9
     + smallQuantity15 * 5 + mediumQuantity15 * 7 + largeQuantity15 * 9
     + smallQuantity16 * 5 + mediumQuantity16 * 7 + largeQuantity16 * 9
     + smallQuantity17 * 5 + mediumQuantity17 * 7 + largeQuantity17 * 9
     + smallQuantity18 * 5 + mediumQuantity18 * 7 + largeQuantity18 * 9;
  
    //
    if (smallQuantity > 0) {
      addRow("Salt-Popcorn S", 5+"$", smallQuantity, smallQuantity * 5+"$");
    }
    if (mediumQuantity > 0) {
      addRow("Salt-Popcorn-M", 7+"$", mediumQuantity, mediumQuantity * 7+"$");
    }
    if (largeQuantity > 0) {
      addRow("Salt-Popcorn L", 9+"$", largeQuantity, largeQuantity * 9+"$");
    }


    if (smallQuantity2 > 0) {
        addRow("Ginger-Popcorn S", 5+"$", smallQuantity2, smallQuantity2 * 5+"$");
      }
    if (mediumQuantity2 > 0) {
        addRow("Ginger-Popcorn-M", 7+"$", mediumQuantity2, mediumQuantity2 * 7+"$");
      }
    if (largeQuantity2 > 0) {
        addRow("Ginger-Popcorn L", 9+"$", largeQuantity2, largeQuantity2 * 9+"$");
      }

      
    if (smallQuantity3 > 0) {
        addRow("Spicy-Popcorn S", 5+"$", smallQuantity3, smallQuantity3 * 5+"$");
      }
    if (mediumQuantity3 > 0) {
        addRow("Spicy-Popcorn-M", 7+"$", mediumQuantity3, mediumQuantity3 * 7+"$");
      }
    if (largeQuantity3 > 0) {
        addRow("Spicy-Popcorn L", 9+"$", largeQuantity3, largeQuantity3 * 9+"$");
      }
      

      if (smallQuantity4 > 0) {
        addRow("Herb-Popcorn S", 5+"$", smallQuantity4, smallQuantity4 * 5+"$");
      }
    if (mediumQuantity4 > 0) {
        addRow("Herb-Popcorn M", 7+"$", mediumQuantity4, mediumQuantity4 * 7+"$");
      }
    if (largeQuantity4 > 0) {
        addRow("Herb-Popcorn L", 9+"$", largeQuantity4, largeQuantity4 * 9+"$");
      }

      if (smallQuantity5 > 0) {
        addRow("Sugar-Popcorn S", 5+"$", smallQuantity5, smallQuantity5 * 5+"$");
      }
    if (mediumQuantity5 > 0) {
        addRow("Sugar-Popcorn M", 7+"$", mediumQuantity5, mediumQuantity5 * 7+"$");
      }
    if (largeQuantity5 > 0) {
        addRow("Sugar-Popcorn L", 9+"$", largeQuantity5, largeQuantity5 * 9+"$");
      } 
  
    
    if (smallQuantity6 > 0) {
        addRow("BBQ-Popcorn S", 5+"$", smallQuantity6, smallQuantity6 * 5+"$");
      }
    if (mediumQuantity6 > 0) {
        addRow("BBQ-Popcorn M", 7+"$", mediumQuantity6, mediumQuantity6 * 7+"$");
      }
    if (largeQuantity6 > 0) {
        addRow("BBQ-Popcorn L", 9+"$", largeQuantity6, largeQuantity6 * 9+"$");
      }


    if (smallQuantity7 > 0) {
        addRow("Coca-cola S", 5+"$", smallQuantity7, smallQuantity7 * 5+"$");
      }
    if (mediumQuantity7 > 0) {
        addRow("Coca-cola M", 7+"$", mediumQuantity7, mediumQuantity7 * 7+"$");
      }
    if (largeQuantity7 > 0) {
        addRow("Coca-cola L", 9+"$", largeQuantity7, largeQuantity7 * 9+"$");
      }

    if (smallQuantity8 > 0) {
        addRow("Sprite S", 5+"$", smallQuantity8, smallQuantity8 * 5+"$");
      }
    if (mediumQuantity8 > 0) {
        addRow("Sprite M", 7+"$", mediumQuantity8, mediumQuantity8 * 7+"$");
      }
    if (largeQuantity8 > 0) {
        addRow("Sprite L", 9+"$", largeQuantity8, largeQuantity8 * 9+"$");
      }  

   if (smallQuantity9 > 0) {
        addRow("Orange-Juice S", 5+"$", smallQuantity9, smallQuantity9 * 5+"$");
      }
    if (mediumQuantity9 > 0) {
        addRow("Orange-Juice M", 7+"$", mediumQuantity9, mediumQuantity9 * 7+"$");
      }
    if (largeQuantity9 > 0) {
        addRow("Orange-Juice L", 9+"$", largeQuantity9, largeQuantity9 * 9+"$");
      }  

   if (smallQuantity10 > 0) {
        addRow("Pineapple-Juice S", 5+"$", smallQuantity10, smallQuantity10 * 5+"$");
      }
    if (mediumQuantity10 > 0) {
        addRow("Pineapple-Juice M", 7+"$", mediumQuantity10, mediumQuantity10 * 7+"$");
      }
    if (largeQuantity10 > 0) {
        addRow("Pineapple-Juice L", 9+"$", largeQuantity10, largeQuantity10 * 9+"$");
      } 
      
    if (smallQuantity11 > 0) {
        addRow("Choco-Milkshake S", 5+"$", smallQuantity11, smallQuantity11 * 5+"$");
      }
    if (mediumQuantity11 > 0) {
        addRow("Choco-Milkshake M", 7+"$", mediumQuantity11, mediumQuantity11 * 7+"$");
      }
    if (largeQuantity11 > 0) {
        addRow("Choco-Milkshake L", 9+"$", largeQuantity11, largeQuantity11 * 9+"$");
      } 
      
    if (smallQuantity12 > 0) {
        addRow("Coffee S", 5+"$", smallQuantity12, smallQuantity12 * 5+"$");
      }
    if (mediumQuantity12 > 0) {
        addRow("Coffee M", 7+"$", mediumQuantity12, mediumQuantity12 * 7+"$");
      }
    if (largeQuantity12 > 0) {
        addRow("Coffee L", 9+"$", largeQuantity12, largeQuantity12 * 9+"$");
      } 

            
    if (smallQuantity13 > 0) {
      addRow("Hotdog S", 5+"$", smallQuantity13, smallQuantity13 * 5+"$");
    }
  if (mediumQuantity13 > 0) {
      addRow("Hotdog M", 7+"$", mediumQuantity13, mediumQuantity13 * 7+"$");
    }
  if (largeQuantity13 > 0) {
      addRow("Hotdog L", 9+"$", largeQuantity13, largeQuantity13 * 9+"$");
    } 

    if (smallQuantity14 > 0) {
      addRow("Saltycrepe S", 5+"$", smallQuantity14, smallQuantity14 * 5+"$");
    }
  if (mediumQuantity14 > 0) {
      addRow("Saltycrepe M", 7+"$", mediumQuantity14, mediumQuantity14 * 7+"$");
    }
  if (largeQuantity14 > 0) {
      addRow("Saltycrepe L", 9+"$", largeQuantity14, largeQuantity14 * 9+"$");
    } 

  if (smallQuantity15 > 0) {
      addRow("Noodles S", 5+"$", smallQuantity15, smallQuantity15 * 5+"$");
    }
  if (mediumQuantity15 > 0) {
      addRow("Noodles M", 7+"$", mediumQuantity15, mediumQuantity15 * 7+"$");
    }
  if (largeQuantity15 > 0) {
      addRow("Noodles L", 9+"$", largeQuantity15, largeQuantity15 * 9+"$");
    }   


    if (smallQuantity16 > 0) {
      addRow("Nachos S", 5+"$", smallQuantity16, smallQuantity16 * 5+"$");
    }
  if (mediumQuantity16 > 0) {
      addRow("Nachos M", 7+"$", mediumQuantity16, mediumQuantity16 * 7+"$");
    }
  if (largeQuantity16 > 0) {
      addRow("Nachos L", 9+"$", largeQuantity16, largeQuantity16 * 9+"$");
    } 


    if (smallQuantity17 > 0) {
      addRow("Mini-Burgers S", 5+"$", smallQuantity17, smallQuantity17 * 5+"$");
    }
  if (mediumQuantity17 > 0) {
      addRow("Mini-Burgers M", 7+"$", mediumQuantity17, mediumQuantity17 * 7+"$");
    }
  if (largeQuantity17 > 0) {
      addRow("Mini-Burgers L", 9+"$", largeQuantity17, largeQuantity17 * 9+"$");
    } 
    
    

    if (smallQuantity18 > 0) {
      addRow("Crepe S", 5+"$", smallQuantity18, smallQuantity18 * 5+"$");
    }
  if (mediumQuantity18 > 0) {
      addRow("Crepe  M", 7+"$", mediumQuantity18, mediumQuantity18 * 7+"$");
    }
  if (largeQuantity18 > 0) {
      addRow("Crepe  L", 9+"$", largeQuantity18, largeQuantity18 * 9+"$");
    }     

    // 
    totalPriceLabel = document.getElementById("idtotalPrice");
    totalPriceLabel.innerText = "TOTAL PRICE :" + totalCost + "$";

  }
  

//
function addRow(item, price, quantity, total) {
    //
    if (quantity > 0) {
      // 
      var row = table.insertRow();
  
      // 
      var itemCell = row.insertCell(0);
      var priceCell = row.insertCell(1);
      var quantityCell = row.insertCell(2);
      var totalCell = row.insertCell(3);
  
      //
      itemCell.innerHTML = item;
      priceCell.innerHTML = price;
      quantityCell.innerHTML = quantity;
      totalCell.innerHTML = total;
    }
  }
  

/////////////////////

