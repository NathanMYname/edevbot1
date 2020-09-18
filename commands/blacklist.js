const fs = require('fs');

module.exports = {
    name: 'blacklist',
    async execute(message, args) {
        if(message.author.id !== '529512479789809664', '735217121314865242') return message.reply('ya dont hve perms bud');
        const mentionedUser = message.mentions.users.first();
        if(!args[0]) return message.channel.send('Mention a valid user.');
        if(!mentionedUser) return message.channel.send('The mentioned user does not exist.');
        if(mentionedUser.bot) return message.channel.send('The mentioned user cannot be a bot.');
        
        const blacklistObject = {
            userTag: message.author.tag
        };
        let blacklist =  await JSON.parse(fs.readFileSync('././blacklist.json', "utf-8"));
        if(!blacklist) return console.log('Issue parseing blacklist. JSON');
        if(!blacklist[mentionedUser.id]) blacklist[mentionedUser.id] = blacklistObject;

        try {
            await  fs.writeFile('././blacklist.json', JSON.stringify(blacklist, null, 2), (err) => {
                if (err) {
                    return console.log(err);
                } else {
                    console.log("succesfuly blacklist " + mentionedUser.tag);
                }
            });
        } catch (err) {
            console.log(err);
            console.log("Error blacklisting");
        }
    }
}