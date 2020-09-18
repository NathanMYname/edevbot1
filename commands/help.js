Discord = require('discord.js');

module.exports = {
    name: 'help',
    execute(message, args) {
        const eEmbed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setTitle(`Here is some help!`);
        
        message.channel.send(eEmbed);
    }
}