module.exports = {
    name: 'purge',
    description: "Clear messages!",
    async execute(message, args) {
        if(!args[0]) return message.reply("You must enter amount of messages you want clear!")
        if(isNaN(args[0])) return message.reply("please enter the number you wish to delete!");

        if(args[0] > 100) return message.reply("You can't delete more than 100 messages!");
        if(args[0] < 1) return message.reply("You must at least 1 message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}