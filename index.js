// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue >=42) {
        return someValue - 42;
    } else {
        return 42 - someValue;
    }
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
}

function distanceTravelledInFeet(start,destination){
    const blocksTraveled = Math.abs(destination - start);
    return blocksTraveled * 264;
  }

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start,destination)
    if (distance <= 400) {
        return 0;
    } else if (distance <=2000) {
        return (distance - 400) * 0.02;
    } else if (distance <=2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}

expect(distanceFromHqInBlocks(43)).to.equal(1)