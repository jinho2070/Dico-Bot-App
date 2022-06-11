const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder().setName('돈줘')
                                   .setDescription('돈 제공!'),

	async execute(interaction) {
        const id = interaction.user.id;
        const username = interaction.user.tag;

        const filePath =  `./data/${id}.json`;
        // 파일이 없다면 파일 생성
        !fs.existsSync(filePath) ? fs.writeFileSync(filePath, JSON.stringify({})) : null;

        const userInfo = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        const today = new Date();
        const date = "" + today.getFullYear() + today.getMonth() + today.getDate();

        const howMuch = 5000;

        let saveUser = {};

        if (userInfo.id){
            if(userInfo.date === date){
                await interaction.reply('오늘 이미 받았으니 내일 받으시오');
                saveUser = userInfo;
            }
            else {
                await interaction.reply(`${howMuch}원이 지급됐어\n${username}의 현재 작액은 ${userInfo.money} -> ${userInfo.money + howMuch}이야`);
                saveUser = {
                    id,
                    username,
                    date,
                    money : userInfo.money + howMuch,
                }
            }
        }
        else {
            await interaction.reply(`${username}!! 가입 축하해! ${howMuch}원이 지급됐어!`);
            saveUser = {
                id,
                username,
                date,
                money : howMuch,
            }
        }

        fs.writeFileSync(filePath, JSON.stringify(saveUser));

	},
};