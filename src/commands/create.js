const {Command} = require('@oclif/command')
const createTemplate = require('../api/create-template')

class CreateCommand extends Command {
  async run() {
    const {args: {type, name}} = this.parse(CreateCommand)
    if (!type) {
      this.error('please specify the type')
      return
    }
    if (type !== 'page' && type !== 'component') {
      this.error(`invalid type name '${type}' please specify the correct type, eg: page or component `)
      return
    }
    if (!name) {
      this.error('please specify the template name')
      return
    }
    try {
      await createTemplate(type, name)
      this.log(`[Success] Added new ${type} ${name}`)
    } catch (error) {
      return this.error(error)
    }
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

module.exports = CreateCommand
