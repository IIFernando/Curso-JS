let victories = 102;
let defeats = 1;

function matchBalance(victories, defeats) {

    let balance = victories - defeats;

    if (balance <= 10) {
        let result = console.log(`The Hero has a balance of ${balance} and is at level Iron.`);
        return result;

    } else if (balance > 11 && balance <= 20) {
        let result = console.log(`The Hero has a balance of ${balance} and is at level Bronze.`);
        return result;

    } else if (balance > 21 && balance <= 50) {
        let result = console.log(`The Hero has a balance of ${balance} and is at level Silver.`);
        return result;

    } else if (balance > 51 && balance <= 80) {
        let result = console.log(`The Hero has a balance of ${balance} and is at level Gold.`);
        return result;

    } else if (balance > 81 && balance <= 90) {
        let result = console.log(`The Hero has a balance of ${balance} and is at level Diamond.`);
        return result;

    } else if (balance > 91 && balance <= 100) {
        let result = console.log(`The Hero has a balance of ${balance} and is at level Legendary.`);
        return result;

    } else if (balance >= 101) {
        let result = console.log(`The Hero has a balance of ${balance} and is at level Immortal.`);
        return result;

    }
}

matchBalance(victories, defeats)