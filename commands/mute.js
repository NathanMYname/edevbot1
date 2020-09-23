ms = require('ms');

module.exports = {
    name: 'mute',
    execute(message, args) {
        if (message.member.hasPermission('MUTE_MEMBERS')) {

            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))

            if (!person) return message.reply('Could not find that user.');

            let mainrole = message.guild.roles.find(role => role.name === 'Member');
            let muterole = message.guild.roles.find(role => role.name === 'Muted');
            let time = args[1];

            if (mainrole) {
                message.guild.defaultRole.setPermissions(0);
            }

            if (!mainrole) {
                message.channel.send('Create a Member role called Member.');
            }

            if (!muterole) {
                message.channel.send('Create a mute role. with no permissions but the only permission of "READ TEXT CHANNELS AND SEE VOICE CHANNELS".')
            } else
                if (!time) {
                    return message.reply('Please enter a time to mute the user for.');
                }

            const logChannel = message.guild.channels.find(ch => ch.name.includes('log'));
            const muteText = `${person.user.username} has been muted for ${ms(ms(time))}`;
            const unmuteText = `@${person.user.username} has been unmuted.`


            if (!logChannel) {
                console.log('Could not find a log channel. Creation one now...');

                message.guild.createChannel('logs', {
                    type: 'text',
                    position: 0,
                    topic: 'Logs for this server.',
                    permissionOverwrites: [{
                        id: message.guild.id,
                        deny: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'READ_MESSAGES']
                    }]
                })
                    .then(console.log)
                    .catch(console.error);
            }

            Promise.resolve(muteText).then(function (muteText) {
                logChannel.send(muteText);
            }, function (value) {
                //none
            });

            person.removeRole(mainrole);
            person.addRole(muterole);

            setTimeout(function () {
                person.addRole(mainrole);
                person.removeRole(muterole);

                Promise.resolve(unmuteText).then(function (unmuteText) {
                    logChannel.send(unmuteText);
                }, function (value) {
                    //none
                });

            }, ms(time));


        } else {
            message.reply('You dont have permission.')
        }
    }
}