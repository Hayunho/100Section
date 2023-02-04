const fs = require("fs");

function readFile() {
  let fileData;

  // fileData = fs.readFileSync("data.txt");
  fileData = fs.readFile("data.txt", function (error, fileData) {
    console.log("File parsing done!");
    console.log(fileData.toString());
  });
  // readFileSync : 파일을 다 읽기 전까지 다음 코드 실행 안함
  // readFile : (Async) 파일을 다 읽기 전이어도 다음 코드 실햄함

  // console.log(fileData);
  // console.log(fileData.toString());
  console.log("Hi there!");
}

readFile();
