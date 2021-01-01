const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    disription: "This command kicks a member!",
    execute(message, args){
        const member = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();

        if (member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            embed.setTitle('User has been kicked');
            embed.setImage('Made by Dog 1');
        } else {
            embed.setTitle('You could not kick this member!');
        }
        message.channel.send(embed);
    }
}