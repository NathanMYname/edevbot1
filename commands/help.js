Discord = require('discord.js');

module.exports = {
    name: 'help',
    execute(message, args) {
        const eEmbed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setTitle(`Here is some help, Here are all the commands`)
        .addField('\`!avatar (user)\`, (shows the persons avatar)')
        .addField('\`!ban (user)\`, admin only')
        .addField('\`!hi\`, replys with wassup my g')
        .addField('\`!kick, (user)\`, mods only')
        .addField('\`!mc\`, shows the membercount for the server.')
        .addField('\`!mute (user) (time)\`, admin only (mutes a person for a set of time.)')
        .addField('\`!ping\`, shows the bots ping.')
        .addField('\`!purge\`, deletes messages (2 - 100)')
        .addField('\`!rule(1 - 5)\`, shows the rules')
        .addField('c')

        
        message.channel.send(eEmbed);
    }
}