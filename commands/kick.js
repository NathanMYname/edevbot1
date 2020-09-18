module.exports = {
    name: 'kick',
    execute(message, args) {

        if (message.member.hasPermission('KICK_MEMBERS')) {
            const userKick = message.mentions.users.first();

            if (userKick) {
                var member = message.guild.member(userKick);

                if (member) {
                    member.kick('You have been kicked from the server.').then(() => {
                        message.reply(`Kicked user ${userKick.tag}!`);

                        const logChannel = message.guild.channels.find(ch => ch.name.includes('log'));
                        const kickText = `${userKick.tag} has been kicked from the server`;


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

                        Promise.resolve(kickText).then(function (kickText) {
                            logChannel.send(kickText);
                        }, function (value) {
                            //none
                        });
                    }).catch(err => {
                        message.reply('An error occured.')
                        console.log(err)
                    })
                } else {
                    message.reply('User ID is not valid.')
                }
            } else {
                message.reply('You need to state the user to kick.')
            }

        } else {
            message.reply('You dont have permission.')
        }
    }
}