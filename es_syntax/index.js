// ES5 Syntax

// forEach()

const arrCourses = ["Web 1", "Web 2", "Web 3", "Mobile"];

// Als je een break moet gebruiken -> manuele for loop
for (let idx = 0; idx < arrCourses.length; idx++) {
  if (idx === 2) {
    break;
  }
  const element = arrCourses[idx];
  console.log(element);
}
console.log("FOREACH:");

const forEachResult = arrCourses.forEach((e, idx) => {
  console.log(e);
  //   Achter de schermen gebeurt eigenlijk dit
  //   return undefined;
});

console.log(forEachResult);

// MAP methode

const arrNumbers = [1, 2, 3, 4, 5];
console.log("Voor de map: ", arrNumbers);

const newArr = arrNumbers.map((e) => e * 5);
console.log("Na de map: ", newArr);
console.log("Na de map, originele arr: ", arrNumbers);

const numbersStrArr = arrNumbers.map((e) => e.toString());
console.log(numbersStrArr);

// REDUCE methode
const sumOfArr = arrNumbers.reduce((acc, val) => acc + val, "");
console.log("Som is: ", sumOfArr);

// Initiële waarde aan reduce
[].reduce((acc, val) => acc + val, 0);

// Enkel oneven elementen optellen
const sumOdd = arrNumbers.reduce((acc, val) => {
  if (val % 2 !== 0) {
    return acc + val;
  } else {
    return acc;
  }
}, 0);

// FILTER methode
const filteredCourses = arrCourses.filter((c) => c !== "Web 3");
console.log(filteredCourses);

// SOME methode
// Minstens 1 element gelijk aan de conditie
const isMobileIncluded = arrCourses.some((c) => {
  return c === "Mobile";
});

// EVERY methode
const isEveryMobile = arrCourses.every((c) => {
  return c === "Mobile";
});

const student = {
  firstName: "David",
  lastName: "Breckx",
  address: {
    street: "Test",
    city: "Gent",
  },
};

student.street = "Arbeidstraat 14";

const arr = [1, 2];
arr.push(3);

// REST parameter

// sum([]) => 0
// sum([1]) => 1
// sum([1, 2]) => 3
// sum([1, 2, 3]) => 6

// sum(1, 2, 3, 4);

const sum = (...arr) => {
  return arr.reduce((acc, val) => acc + val, 0);
};

sum();
sum(1);
sum(1, 2);
sum(1, 2, 3, [4, 5]);

const arr1 = [1, 2, 12];
const arr2 = [3, 4, 5];

const arr3 = [0, ...arr1, ...arr2, 34];
[1, 2, 12, 3, 4, 5];

const studentCopy = { ...student };

const a = arr1[1];
const b = arr1[2];

const [first, second, third] = arr1;
// first = 5;

const [fir, ...last] = arr3;

const lastName = "Breckx";

const {
  lastName: studentLastName,
  address: { city },
} = student;

const newFunction = (cb) => {
  cb();
};

newFunction(() => {
  console.log("Test");
});

newFunction((a, b) => {
  return a + b;
});

// ownMap(arr);

const ownMap = (arr, cb) => {
  let tempArr = [];
  arr.forEach((e) => {
    tempArr.push(cb(e));
  });

  return tempArr;
};

const result1 = ownMap(arr1, (e) => e * 5);
const result2 = ownMap(arr1, (e) => e + 15);

console.log(result1);
console.log(result2);

// TIMERS -> CALLBACK HELL
// TIMEOUT

setTimeout(() => {
  // 1
  console.log("Bericht na 5 sec");
}, 1000);
// 2
console.log("Test na timeout");

// PROMISES
// PRODUCING CODE

const myPromise = new Promise((resolve, reject) => {
  // Code die een tijdje kan duren
  // Connectie met een databank - file system - request
  setTimeout(() => {
    const result = false;
    if (result) {
      // Dit is de data dat uit uw databank komt bvb.
      const data = ["web1", "web2", "web3"];
      resolve(data);
    } else {
      reject("Fout gebeurd!");
    }
  }, 1000);
});

// CONSUMING CODE
myPromise
  .then((data) => {
    console.log("Promise was succesvol!, ", data);
  })
  .catch((err) => {
    console.log("Promise was rejected: ", err);
  })
  .finally(() => {
    console.log("Code wordt altijd uitgevoerd ongeacht succesvol of fout");
  });

deegPromise.then(() => {}).catch(() => {});
ingredientsPromise.then(() => {}).catch(() => {});

// Simulatie pizzeria

// Stappen vooraleer de pizza kan geleverd worden
// STAP 1: Bestelling opnemen van de klant - 3s
// STAP 2: Deeg uitrollen - 4s
// STAP 3: Ingrediënten toevoegen - 2s
// STAP 4: Pizza in de oven - 10s
// STAP 5: Pizza klaar - 1s

// STAP 1
setTimeout(() => {
  console.log("Bestelling opgenomen van klant");
  // STAP 2
  setTimeout(() => {
    console.log("Deeg uitgerold");
    // STAP 3
    setTimeout(() => {
      console.log("Ingrediënten toegevoegd");
      // STAP 4
      setTimeout(() => {
        console.log("Pizza uit de oven");
        // STAP 5
        setTimeout(() => {
          console.log("Bestelling klaar");
        }, 1000);
      }, 10000);
    }, 2000);
  }, 4000);
}, 3000);

// ASYNC AWAIT

// AWAIT keyword -> wachten op het resultaat

const getResult = async () => {
  try {
    const data = await myPromise;
    console.log(data);
    await deegPromise;
    const ingredienten = await ingredientsPromise;
  } catch (error) {
    console.log(error);
  }
};
