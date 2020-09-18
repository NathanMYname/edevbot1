const Discord = require('discord.js');
const { token, prefix } = require('./botconfig.json')


const ms = require('ms')
const fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}


bot.on('ready', () => {
    console.log('Ready!');
    bot.user.setActivity('over server')
})



bot.on('guildBanAdd', (guild, user) => {
    const logChannel = guild.channels.find(ch => ch.name.includes('log'));
    const banText = `${user.tag} has been banned from the server.`;
    

    if (!logChannel) {
        console.log('Could not find a log channel. Creation one now...');

        guild.createChannel('logs', {
            type: 'text',
            position: 0,
            topic: 'Logs for this server.',
            permissionOverwrites: [{
                id: guild.id,
                deny: ['SEND_MESSAGES','READ_MESSAGE_HISTORY', 'READ_MESSAGES']
            }]
        })
        .then(console.log)
        .catch(console.error);
    }

    Promise.resolve(banText).then(function (banText) {
      logChannel.send(banText);
    }, function (value) {
        //none
    });
});

bot.on('guildBanRemove', (guild, user) => {
    const logChannel = guild.channels.find(ch => ch.name.includes('log'));
    const unbanText = `${user.tag} has been unbanned from the server.`;
    

    if (!logChannel) {
        console.log('Could not find a log channel. Creation one now...');

        guild.createChannel('logs', {
            type: 'text',
            position: 0,
            topic: 'Logs for this server.',
            permissionOverwrites: [{
                id: guild.id,
                deny: ['SEND_MESSAGES','READ_MESSAGE_HISTORY', 'READ_MESSAGES']
            }]
        })
        .then(console.log)
        .catch(console.error);
    }

    Promise.resolve(unbanText).then(function (unbanText) {
      logChannel.send(unbanText);
    }, function (value) {
        //none
    });
});

bot.on('guildMemberAdd', member => {
    const autoRole = member.guild.roles.get('756129943783735316');
    
    if(!autoRole) return;

    member.addRole(autoRole.id);
        
})

bot.on('message', message => {
    let wordArray = message.content.split(" ")


    let filterWords = ["cock", "kock", "co ck", "c0ck", "coc", "bitch", "fuck", "dick", "penis", "penus","BlTCH", "ass", "Ass"];

    for(var i = 0; i < filterWords.length; i++) {
        if(wordArray.includes(filterWords[i])) {
            message.delete()
            message.channel.send(`sorry ${message.author.username}, you cant say that.`);
            break;
        }
        
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const blacklist = require('./blacklist.json');
    const blacklistUsers = Object.keys(blacklist);
    let listed = false;
    blacklistUsers.forEach(id => {
        if (message.author.id === id) listed = true;
    });

    if (listed === true) return message.channel.send('you are blacklisted from \`edevBot\`');
	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was a issue with that command enterd.')
    }


});

bot.login(token);