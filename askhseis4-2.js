var time = +prompt("give customer's time");
var value
while(time<0){
    alert("try again");
    var time = +prompt("give a valid number");
}
if(time>=0 && time<=1800){
    value = 1.40;
    console.log(`the time the customer played is ${time/60} minutes and he owns ${value} euros`)
}
else if(time>1800 && time<=3600){
    value = 2.50;
    console.log(`the time the customer played is ${time/60} minutes and he owns ${value} euros`)
}
else if(time>3600 && time<=5400){
    value = 3.60;
    console.log(`the time the customer played is ${time/60} minutes and he owns ${value} euros`)
}
else if (time>5400 && time<=7200){
    value = 4.70;
    console.log(`the time the customer played is ${time/60} minutes and he owns ${value} euros`)
}
else{
    value = 4.70 + 0.03*(time-7200);
     console.log(`the time the customer played is ${time/60} minutes and he owns ${value} euros`);
 }

// 2os tropos

function icafe(x){
    let price;
    if(x<=30){
        return price = 1.40;
    }else if(x>30 && x<=60){
        return price =2.50;
    }
    else if(x>60 && x<=90){
        return price =3.60;
    }
    else if(x>90 && x<=120){
        return price =4.70;
    }
    else{
        return price = 4.70 + 0.03*(x-120)*60
    }
}
console.log(icafe(121));























