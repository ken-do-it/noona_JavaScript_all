// 3. 변수와 자료형 문제

let a = 30
let b = 50
console.log(a,b)


let temp

//second step
temp = a
a = b
b = temp
console.log(a, b)


// 5 배열 문제

// array 
let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]


// 어레이에 마지막 아이템 “Zebra” 제거하기
animals.pop()
console.log(animals)

// 주어진 어레이에 “Dog” 추가하기
animals.push("dog")
console.log(animals)


// 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
// let add_animals =["Mosquito","Mouse","Mule"]
// animals.push(add_animals)
animals.push("Mosquito","Mouse","Mule")
console.log(animals)

// 해당 어레이에는 "Human"이 있는가?
console.log(animals.includes("Human"))


// 해당 어레이에는 “Cat” 이 있는가?
console.log(animals.includes("cat")) // result is no
console.log(animals.includes("Cat"))

// "Red deer"을 "Deer"로 바꾸시오
console.log(animals.indexOf("Red deer"))
animals[77] = "Deer"
console.log(animals[77])
// "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
console.log(animals.indexOf("Spider"))

animals.splice(81,3)
console.log(animals)
console.log(animals.indexOf("Spider")) // result -1 ??

// "Tiger"이후의 값을 제거하시오
console.log(animals.indexOf("Tiger"))
animals.splice(84)
console.log(animals)

// "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
// console.log(animals.indexOf("Baboon", "Bison")) not working
console.log(animals.indexOf("Baboon"))
console.log(animals.indexOf("Bison"))

let B_item = animals.slice(8,16) 
console.log(B_item)



// 8. if문 문제

//8-1 . 유저가 입력하는 숫자 음수 양수 구분

let number = 1

if (number == 0) {
    console.log("0 입니다")
} else if( number >= 1) {
    console.log("양수입니다")
} else if (number < 0) {
    console.log ("음수입니다")
}


// 8-2. 레포트 점수 등급

let point = 98

if (90 <= point && point <= 100 ) {
    console.log("당신의 등급은 A ")
} else if (80 <= point && point <= 89) {
    console.log("당신의 등급은 B")
} else if (70 <= point && point <= 79) {
    console.log ("당신의 등급은 C")
} else if (60 <= point && point <= 69) {
    console.log("당신의 등급은 D") 
} else if (0 <= point && point <= 59) {
    console.log("당신의 등급은 F")
} else{
    console.log("?")
}



// 8-3. 지원자 스킬

let employee = ["HTML", "node", "Py", ]


/*
if (employee.includes("HTML" && "CSS" && "JavaScript"&& "React")){
    console.log("합격")
}else if (employee.includes("HTML" && "CSS" && "JavaScript")) {
    console.log("예비")
} else{
    console.log("?")
}
*/

if (employee.includes("JavaScript") && employee.includes("React")){
    console.log("합격")
} else if (employee.includes("JavaScript") || employee.includes("React")) {
    console.log("예비")
} else {
    console.log("탈락")
} 




// 9. for 문 

// 9-1 1~100 더하고 결과 값 출력
let sum = 0

for (let i = 0; i <= 100; i++) {
    // sum = sum + i
    sum += i

    // console.log(sum)
}

console.log(sum)


// 9-2 1~100까지 홀수만 출력

for (let i = 1; i <=100; i+=2) {
    console.log(i)
}

// 9-3 1~50 까지 369

for (let i =0; i <=50; i++) {
    let num = i.toString();
    if (num.includes ("33") || num.includes("36") || num.includes("39")) {
        console.log("짝짝")
    } else if (num.includes ("3") || num.includes("6") || num.includes("9")) {
        console.log("짝")
    } else{
        console.log(i)
    }
}




for (let i = 1; i <= 50; i++) {
    let num = i.toString();
    let result =""
    for (let j =0; j < num.length; j++) {
        if (num[j] === "3" || num[j] === "6" || num[j] === "9") {
            result += "짝"
        }
    } if (result.length > 0) {
        console.log(result)

    }else {
        console.log(i)
    }
}
    
//9-4 소수면 true 아니면 false

let n =11
let primeNum = true

if (n ===1){// 1은 소수가 아님 
    primeNum = false
}else{
    for(let i=2;i<n;i++){
      if(n % i == 0){
        primeNum =  false 
      }
    }
}

console.log(primeNum)

let num = 7
let isPrime = true

if (num <= 1) {
    isPrime = false
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false
        
        }
    }
}

console.log(num + "는 소수인가요? " + isPrime)


function greet () {
    console.log ("안녕 내 이름은 제시카야")
  }
  
  greet()




  //////////////////
  function greet_1(name, name2) {
    if (name2 !== undefined) {
        console.log("안녕 내 이름은 " + name + "야, ", "안녕 내 이름은 " + name2 + "야");
    } else {
        console.log("안녕 내 이름은 " + name + "야");
    }
}

greet_1("에밀리"); // 안녕 내 이름은 에밀리야만 출력
greet_1("에밀리", "할리"); // 안녕 내 이름은 에밀리야, 안녕 내 이름은 할리야


/////////////////// returen 

name3 = "Ken"
function greet_2(name3) {
  return name3
}
console.log("안녕 내이름은", name3, "이야")



/////////// meetAt
function meetAt(year, month, date) {
    if (year && month && date) {
      console.log(year+"/", month+"/", date+"")
    } else if (year && month) {
      console.log(year+"년", month+"월")
    }else {
      console.log(year+"년")
    }
 }
 meetAt(2024,12,7)
 meetAt(2024,12)
 meetAt(2024)



 /// 조건 숫자 나오게 하기  배열중 가장 작은 값

 function findSmallestElement(arr) {
    let result = arr[0]
    for (i=0; i<arr.length; i++) {
      if (result > arr[i]) {
        result = arr[i]
      }
    }
    console.log("가장 작은 값은 =", result)
  }
  
  findSmallestElement([100,10,200,3,1])


  //// 잔돈 거스리기   

 
let unit = [50000,10000,5000,1000,500,100]
function giveMeChange(money) {
  for (i=0; i<unit.length; i++) {
    let num = Math.floor(money / unit[i])
    console.log(unit[i]+" X "+num)
    money = money - (unit[i]*num)
  }
}

giveMeChange(52300)