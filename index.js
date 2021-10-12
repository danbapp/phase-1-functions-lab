function distanceFromHqInBlocks(street){
  if(street > 42){
    return street - 42;}
  else if(street < 42){
    return 42 - street;
  }
  }

function distanceFromHqInFeet(street){
  let distanceInFeet = distanceFromHqInBlocks(street);
  return distanceInFeet * 264;
  }

function distanceTravelledInFeet(start, end){
  if(start > end){
    return (start - end) * 264;}
  else if(start < end){
    return (end - start) * 264;}
}  

function calculatesFarePrice(start, destination){
  let totalFeet = distanceTravelledInFeet(start, destination);
  if (totalFeet > 0 && totalFeet <= 400){
    return 0;}
  else if(totalFeet > 400 && totalFeet < 2000){
    return (totalFeet - 400) * .02;}
  else if(totalFeet > 2000 && totalFeet <= 2500){
    return 25;}
  else {
      return 'cannot travel that far';}
  }