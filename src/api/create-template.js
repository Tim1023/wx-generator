const mkdirp = require('mkdirp')
const {template} = require('lodash')
const fs = require('fs')
const {resolve, join} = require('path')
const filesTypes = ['wxml', 'js', 'wxss', 'json']
function createFiles(type, basename) {
  filesTypes.forEach(fileType => {
    fileType = fileType.replace(/^\./g, '')
    const currentPath = process.cwd()
    const filePath = resolve(`${currentPath}/${basename}`, `${basename}.${fileType}`)

    if (fs.existsSync(filePath)) {
      throw new Error(`${filePath} 已存在！`)
    }
    const templatePath = join(__dirname, '../', `templates/${type}`)
    const templateFile = fs.readFileSync(`${templatePath}/template.${fileType}`, 'utf8')
    const content =  template(templateFile)({basename})
    fs.writeFileSync(filePath, content)
  })
}

function createTemplate(type, name) {
  return new Promise((resolve, reject) => {
    mkdirp(name, error => {
      return error ?
        reject(new Error(error)) :
        resolve(createFiles(type, name))
    })
  })
}

module.exports = createTemplate
