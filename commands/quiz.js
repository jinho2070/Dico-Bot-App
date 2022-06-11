const { SlashCommandBuilder } = require('@discordjs/builders');
const quiz = require("../data/quiz.json");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('quiz')
		.setDescription('Reply to a quiz'),

	async execute(interaction) {
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const limit = 5; // 제한시간
        const filter = (response) => {
            console.log('response');
            return item.answer.some(answers => answers.toLowerCase() === response.content.toLowerCase());
        };
        console.log('here');

        interaction.reply(item.question, { fetchReply: true })
	    .then(() => {
		interaction.channel.awaitMessages({ filter, max: 1, time: limit * 1000, errors: ['time'] })
			.then(collected => {
				interaction.followUp(`${collected.first().author} got the correct answer!`);
			})
			.catch(collected => {
				interaction.followUp('Looks like nobody got the answer this time.');
			});
	    });
	},
};