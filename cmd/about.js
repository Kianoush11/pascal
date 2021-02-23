const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .setTitle("**P A S C A L**", true)
          .addField("__**" + "Developed In : " + "**__", ":flag_ir: by Kavisho with :heart:", true)
          .addField("__**" + "Code Language : " + "**__", "Javascript <:java:785151723207393300>", false)
          .setDescription("برای آشنایی با کد جنریتور کد g.help را وارد کنید")
		      .addField("__**" + "Bot Status :" + "**__", "Online", true)
          .setFooter("P A S C A L")
          .setColor('RANDOM')
  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info'],
  permLevel: 0
};

exports.help = {
  name: "about",
  description: "Bot Info",
  usage: "about"
};
