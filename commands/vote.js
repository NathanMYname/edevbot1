const Discord = require('discord.js');

module.exports = {
    name: 'vote',
    async execute(message, args) {
        message.channel.send('Would you like to create a vote?');


        const filter = m => m.author.id === message.author.id;

        try {
            let msg = await message.channel.awaitMessages(filter, {
                maxMatches: 1,
                time: '15000',
                error: ['time']
            })
            if (msg.content.first() === 'yes') {
                message.channel.send('What would you like to make the vote about?');
            } try {
                let msg = await message.channel.awaitMessages(filter, {
                    maxMatches: 1,
                    time: '15000',
                    error: ['time'],
                })
                let embedTopic = msg.content.first();
                message.channel.send('Enter your first point?');
                try {
                    let msg = await message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: '15000',
                        error: ['time'],
                    })
                    let firstTopic = msg.content.first();
                    message.channel.send('Enter your second point');
                    try {
                        let msg = await message.channel.awaitMessages(filter, {
                            maxMatches: 1,
                            time: '15000',
                            error: ['time'],
                        })
                        let secondTopic = msg.content.first();
                        const voteEmbed = new Discord.RichEmbed()
                    .setTitle(embedTopic)
                    .addField(embedTopic, firstTopic)
                    .addField(embedTopic, secondTopic).then(msg => msg.react(`\:white_check_mark:`)).then(reaction => reaction.message.react(`\:x:`)).catch(err => console.log(err));
                    } catch (ERROR) {
                        message.channel.send('You did not respond fast enough.');
                        console.log(ERROR);
                    }
                } catch (error) {
                    message.channel.send('You did not respond fast enough.');
                    console.log(ERROR);
                }

            } catch {
                message.channel.send('You did not respond fast enough.');
                console.log(ERROR);
            }
        } catch (ERROR) {
            message.channel.send('You did not respond fast enough.');
            console.log(ERROR);
        }
    }
}
