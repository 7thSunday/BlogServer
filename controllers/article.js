let fn_test = async (ctx, next) => {
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


module.exports = {
    'GET /test': fn_test
}