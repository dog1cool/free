const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    disription: "This command ban a member!",
    execute(message, args){
        const member = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            embed.setTitle("User has been banned");
            embed.setFooter('Made by Dog 1');
        }else{
            embed.setTitle('You could not ban this member!');
            embed.setFooter('Made by Dog 1');
        }
        message.channel.send(embed);
    }
}
        
