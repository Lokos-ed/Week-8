//Menu Foods



//class Food
    //name
    //group
class Food {
    constructor(name, group) {
        this.name = name
        this.group = group
    }
}

//class Menu
class Menu {
    constructor(){
        //Food array
        this.foods=[];
    }

    


    //prompt for name
    //prompt for group
    //push new created food into array
    addFood(){
        let foodName = prompt("Enter food name");
        let foodGroup = prompt("Enter food group");
        this.foods.push(new Food(foodName, foodGroup));
    }



//delete foods
deleteFood(){
    let foodIndex = prompt("Enter food index to delete:");
    this.foods.splice(foodIndex, 1);
}


//view foods
    viewFoods(){
        let displayFoods = '';
        for(let i = 0; i < this.foods.length; i++){
            displayFoods += `
            [${i}]: ${this.foods[i].name} ${this.foods[i].group}`
        }

        alert(`Food Storage: 
            
        ${displayFoods}`);
    }

    //show menu
    showMenu(){
        return prompt(` 
            Main Menu:
            -----------------
            0) Exit Menu
            1) Add Food
            2) Delete Food
            3) View All Foods
            `);
    }

    //start menu
    start(){
        let selection = this.showMenu();

        while (selection != 0){
            switch(selection){
                case "1": this.addFood();
                break;

                case "2": this.deleteFood();
                break;

                case "3": this.viewFoods();
                break;

                default: selection = 0;
            }
            selection = this.showMenu();
        }
        alert("Exiting Menu...");
    }

}


let menu = new Menu();

menu.start();