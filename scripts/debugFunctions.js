//These are functions that might regularly be used to debug the code.
//Functions are added as needed

//Gives you all items
function allItems(){
    Object.keys(objects).forEach(key => objects[key].value = 2);
}

//Makes her fully into you.
function fullStats(){
    attraction = 130;
    shyness = 0;
}

//Sets the clock to night
function nightTime(){
    thetime += clubclosingtime;
    hour += 7;
}

//Makes all requirements met for her to take you into her flat.
function getInvite(){
    fullStats();
    locations.makeOut.visited = 1;
    locations.theBar.visited = 1;
    locations.theClub.visited = 1;
    seenmovie = 1;
}