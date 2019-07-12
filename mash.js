// V1
function mash(){
     return "You will live in a " + getHome() + " and you will have " + getChildrenCount() + " kids, and you'll be driving a " + getCar() + ".";
}



// V2
function getHome(){
    let homes = [process.argv[2], 'Mansion', 'Apartment', 'Shack', 'House', 'place you would not want to live in']
    let numberOfHomes = homes.length
    let randomHome = Math.random() * (numberOfHomes - 0) + 0;
    randomHomeRounded = Math.floor(randomHome);
    console.log homes[randomHomeRounded]
}



// V3
function getChildrenCount(){
    let approxNumberOfChildren = Math.random() * (100 - 0) + 0;
    let roundedNumberOfChildren = Math.floor(approxNumberOfChildren);
    let usersChoiceVsRandom = [process.argv[3], roundedNumberOfChildren]
    let usersChoiceVsRandom2 = Math.random() * (usersChoiceVsRandom.length - 0) + 0;
    usersChoiceVsRandom2 = Math.floor(usersChoiceVsRandom2);
    console.log usersChoiceVsRandom[usersChoiceVsRandom2];
}



//V4
function getCar(){
    let cars = [process.argv[4], 'tesla', 'lambo', 'toyota corola', 'honda civic', ]
    let approxCar = Math.random() * (cars.length - 0) + 0;
    roundedCar = Math.floor(approxCar)
    console.log cars[roundedCar];
}

console.log(mash());

//