module.exports = {
    name: '8ball',
    execute(message, args) {
        
        if (args[0]) return message.channel.send(args[0]);
    }
}