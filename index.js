function dwarfRollCall(dwarves) {
  var arr = [];
  for(var i = 0; i < dwarves.length; i++) {
<<<<<<< HEAD
    arr.push(`${i + 1}. ${dwarves[i]}`);
  }
  return arr.join(" ") + " ";
=======
    arr.push(i+1 + ". " + dwarves[i]);
  }
  return arr.toString();
>>>>>>> 5bedd6fc6274635ee6cfde8009e1f4b483b9e326
}

function summonCaptainPlanet(planeteerCalls){
  var upperCase = []
  for(var i = 0; i < planeteerCalls.length; i++) {
    upperCase.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return upperCase
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
      return true
    } else {
      return false
    }
  }
}

function findTheCheese (foods) {
  if (foods.indexOf("cheddar") > -1) {
    return "cheddar"
  } else if (foods.indexOf("gouda") > -1) {
    return "gouda"
  } else if (foods.indexOf("camembert") > -1) {
    return "camembert"
  } else {
    return "no cheese!"
  }
}
