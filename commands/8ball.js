module.exports = {
    name: '8ball',
    execute(message, args) {
        var test = args[0];
        if (test) return test;
    }
}