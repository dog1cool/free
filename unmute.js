const Discord = require('discord.js');

module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'members');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            embed.setTitle(`<@${memberTarget.user.id}> has been unmuted`);
            embed.setFooter('Made by Dog 1');
        } else{
            embed.setTitle('Cant find that member!');
            embed.setFooter('Made by Dog 1');
        }
        message.channel.send(embed);
    }
}