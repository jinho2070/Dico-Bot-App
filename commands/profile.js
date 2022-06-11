const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('Embed Profile!'),
	async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Disco-bot Profile')
            .setURL('https://discord.js.org/')
            .setAuthor({ name: 'Disco-bot', iconURL: 'https://cdn.britannica.com/67/23167-050-24C175A7/John-Travolta-Saturday-Night-Fever.jpg', url: 'https://discord.js.org' })
            .setDescription('Welcome to Disco PANG-PANG. I\'m Disco-bot')
            .addFields(
                {name : "Hobby", value: "Answering Questions", inline: true},
                {name : "Home", value: "Disco Party", inline: true},
                {name : "Interest",value: "NFT", inline: true}
            )
            .setTimestamp(new Date())
            .setImage('https://cdn.britannica.com/67/23167-050-24C175A7/John-Travolta-Saturday-Night-Fever.jpg')
            .setFooter({text: "Created by hyeniii"});
        await interaction.reply({embeds: [embed]})
	},
};