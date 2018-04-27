let isGestOneVegan = true;
let isGestTwoVegan = true;

if(isGestOneVegan  && isGestTwoVegan ){
    console.log('Only Offer Vegan Dishes!');
}else if(isGestOneVegan  || isGestTwoVegan ){
    console.log('Make sure to offer some Vegan food');
} else {
    console.log('Offer anything on the menu');
}
