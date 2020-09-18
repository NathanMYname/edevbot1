const Discord = require('discord.js');

module.exports = {
    name: 'server',
    execute(message, args) {
        if (args[0] === 'members') {
            const serverMembers = message.guild.memberCount;
            const memberEmbed = new Discord.RichEmbed()
            .setTitle(`${message.guild.name} has ${serverMembers} members in server.`);

            message.channel.send(memberEmbed).catch(err => console.log(err));
            
        }

        if (args[0] === 'boost') {
            const serverBoosts = message.guild.premiumSubscriptionCount;
            const boostEmbed = new Discord.RichEmbed()
            .setTitle(`${message.guild.name} has ${serverBoosts} boost in the server!`);

            message.channel.send(boostEmbed).catch(err => console.log(err));
        }

        if (args[0] === 'joined') {
            const joinedEmbed = new Discord.RichEmbed()
            .setTitle(`You joined ${message.guild.name} at ${message.member.joinedAt}`)

            message.channel.send(joinedEmbed).catch(err => console.log(err));
        }
    }
}