module.exports = {
    name: 'ban',
    execute(message, args) {
            if (message.member.hasPermission('BAN_MEMBERS')) {
                const userBan = message.mentions.users.first();

                if (userBan) {
                    var member = message.guild.member(userBan);

                    if (member) {
                        member.ban({
                            reason: 'You have been banned.'
                        }).then(() => {
                            message.reply(`${userBan.tag} was banned from the server.`)
                        })
                    } else {
                        message.reply('That user is not in the server.');
                    }
                } else {
                    message.reply('You need to state a user to ban.')
                }
            } else {
                message.reply('You dont have permission.')
            }
    }
}