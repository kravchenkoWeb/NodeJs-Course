// let age = 24,
//     hobbies = true;

//     const name = 'Vitaliy';

// const summarizeUser = (userName, userAge, hasHobbies) => {
//     console.log('User name is ' + userName + ' and his age is ' + userAge + ' and he has hobbies: ' + hasHobbies);
// };

// const sum = (a,b) => a + b,
//       addOne = a => a+=1,
//       random = () => 1+1;

// // console.log(sum(1,2));
// // console.log(addOne(2));
// // console.log(random());

// const hobbiesArr = ['Gaming', 'Cybersport'];


// console.log(summarizeUser(name, age, hobbies));

const fetchData = () => {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 500);
    });
    return prom;
}

setTimeout(() => {
    console.log("Timer is done");
    fetchData().then(text => {
        console.log(text);
    });
}, 1);

console.log("Async");
console.log("Hi");