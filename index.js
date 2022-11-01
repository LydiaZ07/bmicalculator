const Sara = {
name: "Sara",
height: 160,
weight: 110,
};

function getBMI(bmi) {
    return bmi.weight / (bmi.height) * (bmi.height)
}

console.log(getBMI(Sara))

function compareBMI(compare) {
    if (compare <= 18){
       console.log("skinny")
    }
     else if (compare >18 && compare <30){
        console.log("healthy")
     }
    else if (compare >=39){
        console.log("overweight")
    }
}

function run(bmi){
    const compare = getBMI(bmi);
    compareBMI(compare);
}

run(Sara);
