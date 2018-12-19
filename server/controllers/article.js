var fn_test = async (ctx, next) => {
    let name = ctx.query.name,
        age = ctx.query.age,
        gender = ctx.query.gender;
    // ctx.response.body = {
    //     'name': name,
    //     'age': age,
    //     'gender': gender
    // }
    await ctx.render('article',{name,age,gender});
}

var my_test = async (ctx, next) => {
    let testModel = require('../models/test');
    let timeStamp = Date.now();
    let test = await testModel.create({
        id: 'd-' + timeStamp,
        name: 'Aya',
        gender: false,
        birth: '2011-11-23',
        createAt: timeStamp,
        updateAt: timeStamp,
        version: 0
    });
    console.log('create' + JSON.stringify(test));
    ctx.response.body = {
        'code' : 200,
        'message' : 'OK'
    }
} 

module.exports = {
    'GET /test': fn_test,
    // 'GET /mytest': my_test
}