const {Command, flags} = require('@oclif/command')

class CreateCommand extends Command {
  async run() {
    const {args: {type, name}, flags: {simple}} = this.parse(CreateCommand)
    if (!type) {
      this.error('please specify the type')
      return
    }
    if (type !== ('page' || 'component')) {
      this.error(`invalid type name '${type}' please specify the correct type, eg: page or component `)
      return
    }
    if (!name) {
      this.error('please specify the template name')
      return
    }
    this.log(`[Success] Added new ${type} ${name} ${simple ? 'with simple mood' : ''}`)
  }
}
CreateCommand.args = [
  {name: 'type'},
  {name: 'name'},
]
CreateCommand.description = `Describe the command here
...
Extra documentation goes here
`

CreateCommand.flags = {
  name: flags.string({char: 'n', description: 'template name'}),
  simple: flags.boolean({char: 's', description: 'template mood simple'}),
}

module.exports = CreateCommand
