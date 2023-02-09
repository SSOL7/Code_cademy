let early_registered = true;
let runners_age = Math.floor(Math.random() * 6);
let runners = Math.floor(Math.random() * 1001);

if (early_registered && runners_age > 18) {
    runners += 1000;
    console.log(`Race at 9:30 am.`);
} else if (!early_registered && runners_age > 18) {
    runners += 1000;
    console.log('You will race at 11:00 am.');
} else if (runners_age < 18) {
    runners += 1000;
    console.log('Youth registrants run at 12:30 pm (regardless of registration).');
} else {
    console.log('Please see the registration desk.');
}


