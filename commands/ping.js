module.exports = {
    name: 'ping',
    execute(message, args) {
        message.channel.send('Finidng bots ping...').then(msg => {
            const botPing = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`eDevBot's ping is ${botPing}ms`);
        })
    }
}