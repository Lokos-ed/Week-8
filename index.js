//Menu Foods



//Creates the food class with the constructor of name and group.
class Food {
    constructor(name, group) {
        this.name = name
        this.group = group
    }
}

//Creates the menu class so all the necessary functions can be added into it.
class Menu {
    constructor(){
        //Creates the array to store and display the added variables.
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



//Delete food from the array depending on user prompt.
deleteFood(){
    let foodIndex = prompt("Enter food index to delete:");
    this.foods.splice(foodIndex, 1);
}


//Displays all foods in the array with an added message using template literals
    viewFoods(){
        let displayFoods = '';
        for(let i = 0; i < this.foods.length; i++){
            displayFoods += `
            [${i}]: ${this.foods[i].name} ${this.foods[i].group}`
        }

        alert(`Food Storage: 
            
        ${displayFoods}`);
    }

    //Creates a prompt with the message showing all the available options as well as storing the inputted value for later use.
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

    //This uses the value from the showMenu function to tell the program which function to call upon. It will keep running until the inputted value = 0.
    //It checks for the inputted value to match one of the three cases then breaks and repeats the process again.
    //The default selection = 0, meaning if nothing is entered, the menu will close on it's own. Else, if a number that is not 0-3 is entered, the list will default back to the original prompt.
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

//This creates a instance of the Menu class. This is so the program can utilize all the functions within the Menu class and then start the Menu.
let menu = new Menu();

menu.start();