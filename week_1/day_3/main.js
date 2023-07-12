console.log("hi");

const name = 'ShaanShaan';

const nameAgain = 'ShaanAgain';

let whatismyname = `my name is ${name}
and also ${nameAgain}`;

console.log(whatismyname);

function evenUpToNumber(x) {
    for (let i = 0; i <= x/2; i++) {
        console.log(i*2);
    }
}

evenUpToNumber(10);

var fibArr = [0,1];

function fibonacci(x) {
    for (let i = 2; i <= x; i++) {
        fibArr[i] = fibArr[i-2] + fibArr[i-1];
    }
    console.log(fibArr);
}

fibonacci(7);

const someArray = [1,2,3,4,10,5,6,7,8,9]

function avgOfArray(array) {
    var totalSum = 0;
    for (let i = 0; i < someArray.length; i++) {
        totalSum = totalSum + array[i];
    }
    console.log(totalSum/array.length);
}

avgOfArray(someArray);

function maxOfArray(array) {
    var maxNum = array[0];
    for (let i = 0; i < someArray.length; i++) {
        
        if (array[i] > maxNum) {
            maxNum = array[i];
        }

    }
    console.log(maxNum);
}

maxOfArray(someArray);

function minOfArray(array) {
    var minNum = array[0];
    for (let i = 0; i < someArray.length; i++) {
        
        if (array[i] < minNum) {
            minNum = array[i];
        }

    }
    console.log(minNum);
}

minOfArray(someArray);

const someString = "this Is a sTring";

function numVowels(str) {

    str = str.toLowerCase();

    var numVowels = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
            numVowels = numVowels + 1;
        }
    }

    console.log(numVowels);

}

numVowels(someString);

function add2Nums(a,b) {
    return a + b;
}

console.log(add2Nums(1,2));

function mult2Nums (a,b) {
    return a * b;
}

console.log(mult2Nums(1,2));

function cityCode(city) {
    switch (city) {
        case "Miami":
            return "331xx";
    
        case "San Fransisco":    
            return "941xx";
        
        case "Miami":    
            return "100xx";

        default:
            return "city not in database yet";
    }
}

console.log(cityCode("Miami"))

someArrayOfStrings = ["hi", "apple", "bee", "sublime sphere", "apples", "app"]

function sortStringArrays(strArr) {
    return Array.from(strArr).sort();
}

console.log(sortStringArrays(someArrayOfStrings));

function sortNumArray(numArr) {
    return numArr.sort((a,b) => a-b);
}

console.log(sortNumArray(someArray));

function reverseNum(num) {

    const numStr = num.toString();

    const revArr = [];
    
    for (let i = numStr.length - 1; i >= 0; i--) {
        revArr.push(numStr[i]);
    }

    return parseFloat(revArr.join(''));

}

console.log(reverseNum(1234.321));

function capitaliseWords(str) {
    var charArray = str.split('');

    charArray[0] = charArray[0].toUpperCase();

    for (let i = 1; i < charArray.length; i++) {
        if (charArray[i-1] === ' ') {
            charArray[i] = charArray[i].toUpperCase();
        }
    }

    return charArray.join('');
}

console.log(capitaliseWords("this is not capitalised"));


function occurencesOfLetter(string, letter) {

    var occurences = 0;
    
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === letter) {
            occurences++;
        }
    }

    return occurences;
}

console.log(occurencesOfLetter('because','e'));

function filterForString(arrOfStr, filterStr) {
    let filteredArr = arrOfStr.filter((x) => {
        return x === filterStr;
      });

    return filteredArr;
}

console.log(filterForString(someArrayOfStrings, "apple"));


function filterForNum(arrOfNum, filterNum) {
    let filteredArr = arrOfNum.filter((x) => {
        return x === filterNum;
      });

    return filteredArr;
}

console.log(filterForString(someArray, 3));

let someObjectArray = [
    {
      id: 1,
      name: 'Cam',
      surname: 'Kirkpatrick',
      goalsScored: 5,
    },
    {
      id: 2,
      name: 'Michelle',
      surname: 'Visser',
      goalsScored: 9,
    },
    {
      id: 3,
      name: 'John',
      surname: 'Doe',
      goalsScored: 25,
    },
    {
        id: 4,
        name: 'Lord',
        surname: 'Bendtner',
        goalsScored: 92,
    },
];

console.log(Object.keys(someObjectArray[0]));
console.log(someObjectArray[0])

function filterByID(arrOfObj, filterID) {

    let filteredArr = arrOfObj.filter((x) => {
        return x.id === filterID;
      });

    return filteredArr;
}

console.log(filterByID(someObjectArray,3));

function returnByObjectID(arrOfObj, idNeeded) {
    
    for (let i = 0; i < arrOfObj.length; i++) {
        if (arrOfObj[i].id == idNeeded) {
            return arrOfObj[i];
        }
    }
    
    return null;
}

console.log(returnByObjectID(someObjectArray,2));

function todaysDate() {
    let todaysDate = new Date();

    let day = todaysDate.getDate();
    
    let month = todaysDate.getMonth() + 1;

    let year = todaysDate.getFullYear();

    console.log(`${day}/${month}/${year}`);
}

todaysDate();

function objectsWithMoreThanTenVals(arrOfObj) {
    let filteredArr = arrOfObj.filter((x) => {
        return x.goalsScored >= 10;
      });

    return filteredArr;
}

console.log(objectsWithMoreThanTenVals(someObjectArray));