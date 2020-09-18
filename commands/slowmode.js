module.exports = {
    name: 'slowmode',
    async execute(message, args) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You can\'t use this command');
        if(!args[0]) return message.channel.send('You did not mention a number in second to set slowmode to.');
        if  (args[0] === 'none') {
            await message.channel.setRateLimitPerUser(0);
            return message.channel.send(`Set slowmode to 0 seconds!`);
        }
        if(isNaN(args[0])) return message.channel.send('Number states is not a number.');
        const setTimeTo = Number(args[0]);

        if(setTimeTo === 5) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 10) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 15) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 30) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 60) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 120) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 300) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 600) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 900) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 1800) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 3000) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 7200){
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };
        if(setTimeTo === 21600) {
            await message.channel.setRateLimitPerUser(setTimeTo);
            return message.channel.send(`Set Aloqmosw to ${setTimeTo} seconds!`);
        };

        message.channel.send(`Invalid time is seconds: Options \`none, 5, 10, 15, 30, 60, 120, 300, 600, 900, 1800, 3600, 7200 and 21600\``);
    }
}