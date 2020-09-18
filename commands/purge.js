module.exports = {
    name: 'purge',
    async execute(message, args) {
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            const deleteCount = parseInt(args[0], 10);
            const deleteMessage = `Deleted ${deleteCount} messages`;

            if(!deleteCount || deleteCount > 100 || deleteCount < 2) return message.reply('Input a number between 2 - 100');

            const fetche = await message.channel.fetchMessages({
                limit: deleteCount
            });

            message.channel.bulkDelete(fetche)
            .catch(error => message.channel.send(`Cannot delete messages because of ${error}`))
            .then(() => message.channel.send(deleteMessage))
            .catch(err => {
                console.log(err);
            });
        } else {
            message.reply('You dont have permmsin.');
        }
    }
}