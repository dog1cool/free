module.exports = {
    name: 'help',
    disription: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Commands')
        .setURL('https://youtube.com/history')
        .setDescription('Here are the list of commands (still in beta)')
        .addFields(
            {name: '`Ban`', value: '**__Bans__ user from server.**'},
            {name: '`kick`', value: '**__Kicks__ user from server.**'},
            {name: '`mute (time)`', value: '**__Mutes__ user for the amount of time.**'},
            {name: '`unmute`', value: '**__Unmutes__ user to talk.**'},
            {name: '`purge`', value: '**__Purges__ the chat to delete messages.**'},
            {name: '`say`', value: '**__Says__ what you want it to say.**'},
            {name: '`prefix`', value: '**-**'}
        )
        .setImage('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*')
        .setFooter('created by Dog || Powered on discord.js');
    
            message.channel.send(newEmbed);
    }


}