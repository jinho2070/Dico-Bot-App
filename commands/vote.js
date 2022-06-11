const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('vote')
		.setDescription('Vote!!')
        .addStringOption(option =>
            option.setName('question')
            .setDescription('What do you want to vote on')
            .setRequired(true)
            ),

	async execute(interaction) {
        const input = interaction.options.getString('question');
        const vote_embed = new MessageEmbed()
            .setTitle("👇 투표 ㄱㄱ")
            .setDescription(input)
            .setColor('RED');
        
        const msg = await interaction.reply({embeds: [vote_embed], fetchReply: true});
       
        try {
            await msg.react('👍'),
            await msg.react('👎')

        } catch (error) {
            console.error('One of the emojis failed to react:', error);
        }
            

	},
};