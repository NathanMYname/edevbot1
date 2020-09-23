const fs = require('fs');

module.exports = {
    name: 'blacklist',
    async execute(message, args) {
        if(message.author.id !== '529512479789809664') return message.reply('ya dont hve perms bud');
        const mentionedUser = message.mentions.users.first();
        if(!args[0]) return message.channel.send('Mention a valid member bro.');
        if(!mentionedUser) return message.channel.send('Bro IT DOSENT EXISTTTT.');
        if (mentionedUser.bot) return message.channel.send('The mentioned user cannot be a bot bro, like cmon bro.');
        const blacklistObject = {
            userTag: message.author.tag
        };
        let blacklist = await JSON.parse(fs.readFileSync('././blacklist.json', "utf-8"));
        if(!blacklist) return console.log("Issue pareseing blacklist.json");
        if(!blacklist[mentionedUser.id]) blacklist[mentionedUser.id] = blacklistObject;

        try {
            await fs.writeFile('././blacklist.json', JSON.stringify(blacklist, null, 2), (err) => {
                if (err) {
                    return console.log('eeroeroeoreoroeoroeroeoreorooeroeoroer', err);
                } else {
                    console.log('sucblacklist ' + mentionedUser.tag);
                }
            });
        } catch (err) {
            console.log(err);
            message.channel.send('error blacklist');
        }
    }
}