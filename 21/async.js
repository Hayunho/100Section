const fs = require("fs/promises");

async function readFile() {
  let fileData;

  // 1. synchronous
  // fileData = fs.readFileSync("data.txt");

  // 2. asynchro
  // fileData = fs.readFile("data.txt", function (error, fileData) {
  // error 처리
  //   if (error) {
  //     ...
  //   }
  //   console.log("File parsing done!");
  //   console.log(fileData.toString());
  // });
  // readFileSync : 파일을 다 읽기 전까지 다음 코드 실행 안함
  // readFile : (Async) 파일을 다 읽기 전이어도 다음 코드 실햄함

  // 1. log synchor
  // console.log(fileData);
  // console.log(fileData.toString());

  // 3. asynchro-promises
  // fs.readFile("data.txt")
  //   .then(function (fileData) {
  //     console.log("File parsing done!");
  //     console.log(fileData.toString());
  //   })
  //   .then(function () {}) // asnyc promises
  //   .catch(function (error) {
  //     console.log(error);
  //   }); //error처리

  // console.log("Hi there!");

  // 4. await async
  // fileData = await fs.readFile("data.txt");

  // console.log("File parsing done!");
  // console.log(fileData.toString());
  // console.log("Hi there!");

  // 5. await async fix up error
  try {
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log(error);
  }

  console.log("File parsing done!");
  console.log(fileData.toString());
  console.log("Hi there!");
}

readFile();
