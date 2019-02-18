let show_index = async (ctx, next) => {
    ctx.state = {
        title: 'Koa2',
        keys: 'ARC',
        desc: 'Atelier Red Crow'
    }
    await ctx.render('index', ctx.state)
}

module.exports = {
    "GET /": show_index
}
