const mkdirp = require('mkdirp')
const {template} = require('lodash')
const findup = require('find-up')
const fs = require('fs')
const {resolve, join} = require('path')
const filesTypes = ['wxml', 'js', 'wxss', 'json']

const currentPath = process.cwd()

function registerPage(basename) {
  const appPath = findup.sync('app.json')
  if (!appPath) {
    throw new Error('Can\'t find app.json')
  }
  const data = fs.readFileSync(appPath, 'utf8')
  const content = JSON.parse(data.toString())
  const rootPath = appPath.replace('app.json', '')
  const basePath = currentPath.replace(rootPath, '')
  const pagePath = `${basePath}/${basename}/${basename}`
  if (!content.pages) {
    content.pages = []
  }
  if (content.pages.find(path => path === pagePath)) {
    throw new Error('Page already exist in app.json')
  }
  content.pages.push(pagePath)
  fs.writeFileSync(appPath, JSON.stringify(content, null, 2))
}

function createFiles(type, basename) {
  filesTypes.forEach(fileType => {
    fileType = fileType.replace(/^\./g, '')
    const filePath = resolve(`${currentPath}/${basename}`, `${basename}.${fileType}`)

    if (fs.existsSync(filePath)) {
      throw new Error(`${filePath} already exist！`)
    }
    const templatePath = join(__dirname, '../', `templates/${type}`)
    const templateFile = fs.readFileSync(`${templatePath}/template.${fileType}`, 'utf8')
    const content = template(templateFile)({basename})
    fs.writeFileSync(filePath, content)
  })
  if (type === 'page') {
    registerPage(basename)
  }
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
