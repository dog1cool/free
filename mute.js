const Discord = require('discord.js');

const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'members');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                embed.setTitle(`<@${memberTarget.user.id}> has been muted`);
                embed.setFooter('Made by Dog 1'); return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            embed.setTitle(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
            embed.setFooter('Made by Dog 1');
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            embed.setTitle('Cant find that member!');
            embed.setFooter('Made by Dog 1');
        }
        message.channel.send(embed);
    }
}