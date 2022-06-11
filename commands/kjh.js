const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder().setName('김재홍')
                                   .setDescription('바보라고 대답합니다!'),
	async execute(interaction) {
		await interaction.reply('바보!');
	},
};