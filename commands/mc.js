const Discord = require('discord.js');

module.exports = {
    name: 'mc',
    execute(message, args) {
        const memberInServer = message.guild.memberCount;
        const memberEmbed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setTitle(`${message.guild.name} has ${memberInServer} members in the server!`) ;
        
        message.channel.send(memberEmbed);
    }
}