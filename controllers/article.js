const path = require("path");
const fs = require("fs");

// normal request
var fn_test = async (ctx, next) => {
  let name = ctx.query.name,
    age = ctx.query.age,
    gender = ctx.query.gender;
    ctx.response.body = {
      name: name,
      age: age,
      gender: gender
    };
    // await ctx.render('article',{name,age,gender});
};

// sql database operation
var sql_test = async (ctx, next) => {
  let testModel = require("../models/test");
  let timeStamp = Date.now();
  // insert
  // let test = await testModel.create({
  //   id: "d-" + timeStamp,
  //   name: "Aya",
  //   gender: false,
  //   birth: "2011-11-23",
  //   createAt: timeStamp,
  //   updateAt: timeStamp,
  //   version: 0
  // });
  // console.log("create" + JSON.stringify(test));
  // ctx.response.body = {
  //   code: 200,
  //   message: "OK"
  // };

  //query
  let test = await testModel.findAll();
  // test instanceof Array
  ctx.response.body = test;
};

// file upload
var upload_test = async (ctx, next) => {
  const tmpdir = path.join("./", "upload_files");

  const filePaths = [];
  const files = ctx.request.files || {};
  const params = ctx.request.body.fields;
  //   console.log(params);
  for (let key in files) {
    const file = files[key];
    if (Object.prototype.toString.call(file) == "[object Array]") {
      for (var j = 0; j < file.length; j++) {
        witeFile(file[j]);
      }
    } else {
      witeFile(file);
    }
  }

  function witeFile(file) {
    const filePath = path.join(tmpdir, file.name);
    const reader = fs.createReadStream(file.path);
    const writer = fs.createWriteStream(filePath);
    reader.pipe(writer);
    filePaths.push(filePath);
  }

  ctx.body = filePaths;
};

module.exports = {
  "GET /test": fn_test,
  'GET /sqltest': sql_test,
  "POST /upload": upload_test
};
