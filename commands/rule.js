module.exports = {
    name: 'rule',
     execute(message, args) {
        const rule = parseInt(args[0], 10);

        if (!rule || rule < 1 || rule > 5) return message.reply('please provide a rule number between 1 and 5');

        if(rule) {
            if (rule === 1) return message.channel.send('1. No spamming. OR we will mute you.');
            if (rule === 2) return message.channel.send('2. Don\'t recommend any bots to the owners or staff as they might be destroyer bots and destroy the server.');
            if (rule === 3) return message.channel.send('3. Every channel has its own purpose. Don\'t use bot commands in chat for example.');
            if (rule === 4) return message.channel.send('4. [Deleted Rule]');
            if (rule === 5) return message.channel.send('5. NSFW is strictly prohibited. If the bot detects it, it will ban the person doing it.');
        }
    }
}