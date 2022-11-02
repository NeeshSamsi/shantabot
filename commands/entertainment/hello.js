const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder().setName("hello").setDescription("Simply reponds with Hello."),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction) {
    interaction.reply({ content: "Hello." })
  },
}
