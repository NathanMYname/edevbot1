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
            if (msg.first().content === 'yes') {
                message.channel.send('What channel would you like the vote to b send to?');
                try {
                    let msg = await message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: '15000',
                        error: ['time'],
                    })
                    let sendToChannel = msg.first().mentions.channels.first();
                } catch (ERROR) {
                    message.channel.send('You did not respond fast enough.');
                    console.log(ERROR)
                }
                message.channel.send('What would you like to make the vote about?');
            } try {
                let msg = await message.channel.awaitMessages(filter, {
                    maxMatches: 1,
                    time: '15000',
                    error: ['time'],
                })
                let embedTopic = msg.first().content
                message.channel.send('Enter your first point?');
                try {
                    let msg = await message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: '15000',
                        error: ['time'],
                    })
                    let firstTopic = msg.first().content
                    message.channel.send('Enter your second point');
                    try {
                        let msg = await message.channel.awaitMessages(filter, {
                            maxMatches: 1,
                            time: '15000',
                            error: ['time'],
                        })
                        let secondTopic = msg.first().content
                        const voteEmbed = new Discord.RichEmbed()
                            .setTitle(embedTopic)
                            .addField(embedTopic, `\:white_check_mark: ${firstTopic}`)
                            .addField(embedTopic, `\:x: ${secondTopic}`)


                        sendToChannel.channel.send(voteEmbed).then(msg => msg.react(`\:white_check_mark:`)).then(reaction => reaction.message.react(`\:x:`)).catch(err => console.log(err));
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
