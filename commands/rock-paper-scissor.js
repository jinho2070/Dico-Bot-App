const { SlashCommandBuilder } = require('@discordjs/builders');

const convertEmoji = (who) => {
    if (who ==='가위'){
        return '🤘';
    }
    else if (who === '바위'){
        return '👊';
    }
    else if (who === '보'){
        return '🖐️';
    }
}

module.exports = {
	data: new SlashCommandBuilder().setName('가위바위보')
                                    .setDescription('디스코봇과의 가위바위보 게임')
                                    .addStringOption(option => option.setName('카테고리')
                                                                    .setDescription('가위바위보 선택')
                                                                    .addChoice('가위', '가위')
                                                                    .addChoice('바위','바위')
                                                                    .addChoice('보','보')),
	async execute(interaction) {
        const human = interaction.options.getString('카테고리');
        const list = ['가위', '바위','보'];
        const random = Math.floor(Math.random() * 3);
        const bot = list[random];
        let winner = '';
        if (human === bot){
            winner = '비김';
        }
        else{
            human === "가위" ? (winner = bot === '바위'? '봇': '인간') : '';
            human === "바위" ? (winner = bot === '보'? '봇': '인간') : '';
            human === "보" ? (winner = bot === '가위'? '봇': '인간') : '';
        } 
        const result =
        `
        사람: ${convertEmoji(human)} : vs 봇: ${convertEmoji(bot)}
        ${winner === '비김' ? '우리는 비겼다 인간.' : winner + '의 승리!'}
        `
		await interaction.reply(result);
	},
};