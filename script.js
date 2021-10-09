cakes = [{ weight:5, pounds: 160 }, { weight: 3, pounds: 90 }, { weight: 2, pounds: 15}]
capacity = 20

function maxDuffelBagValue(cakes, capacity) {

// seperate the properties weight and pounds into 2 seperate lists   

let cakeValues = cakes.map(({ pounds }) => pounds)
let cakeWeights = cakes.map(({ weight }) => weight)

var cakeWeightsLength = cakeWeights.length

// initiate array of most valuable haul for each capacity value

let mostValuableHaul = [];
mostValuableHaul[0] = 0;

var bestCalculatedOutput = 0;

//calculating most valuable haul for each capacity value until max capacity

for (let w=1; w <= capacity; w++) {
    
    for (i=0; i<cakeWeightsLength; i++) {
    
        if (w >= cakeWeights[i]) {
        bestCalculatedOutput = Math.max(mostValuableHaul[w-cakeWeights[i]] + cakeValues[i], bestCalculatedOutput);
    }
 }
 mostValuableHaul[w] = bestCalculatedOutput;
 }
           
 console.log("The most valuable haul that can be taken is " + mostValuableHaul[capacity] + " pounds")
  
 }


maxDuffelBagValue(cakes, capacity)

