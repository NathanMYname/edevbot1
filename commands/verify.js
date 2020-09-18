module.exports = {
    name: 'verify',
    async execute(message, args) {
        const role = message.guild.roles.get('755570648088182804');
        const role2 = message.guild.roles.get('756129943783735316');
        if (!role) return message.channel.send('Verify role does not exist.');
        try {
            await message.member.addRole(role.id);
            message.member.removeRole(role2.id);
            try {
                await message.member.send(`You have verified in ${message.guild.name}`);
            } catch (err) {
                console.log(err);
                message.channel.send(`I wasb't able to message ${message.author.tag}`);
            }
        } catch (err) {
            message.channel.send(`There was an issue giving @<${message.author.id}> the verify command`)
            console.log(err);
        }
    }
}