const fs = require("fs/promises");

function readFile() {
  let fileData;

  //1. fileData = fs.readFileSync("data.txt");

  //2. fileData = fs.readFile("data.txt", function (error, fileData) {
  //   console.log("File parsing done!");
  //   console.log(fileData.toString());
  // });
  // readFileSync : 파일을 다 읽기 전까지 다음 코드 실행 안함
  // readFile : (Async) 파일을 다 읽기 전이어도 다음 코드 실햄함

  //1. console.log(fileData);
  //1. console.log(fileData.toString());

  fs.readFile("data.txt").then(function (fileData) {
    console.log("File parsing done!");
    console.log(fileData.toString());
  }); // promises

  console.log("Hi there!");
}

readFile();
