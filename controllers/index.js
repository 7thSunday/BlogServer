let show_index = async (ctx, next) => {
    ctx.state = {
        title: 'Koa2'
    }
    await ctx.render('index', ctx.state)
}

module.exports = {
    "GET /": show_index
}
