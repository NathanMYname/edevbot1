const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    execute(message, args) {
        if (args[0]) {
            const user = message.mentions.users.first();
            if (!user) return message.reply('Please mention a user to access their profile picture.');

            const otherIconEmbed = new Discord.RichEmbed()
                .setTitle(`${user.username}'s Avatar.`)
                .setImage(user.displayAvatarURL);

            return message.channel.send(otherIconEmbed).catch(err => console.log(err));
        }

        const myIconEmbed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}'s Avatar.`)
            .setImage(message.author.displayAvatarURL);
        return message.channel.send(otherIconEmbed).catch(error => console.log(error));
    }
}