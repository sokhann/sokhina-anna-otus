const {
  promises: { readdir },
} = require("fs")
const { resolve } = require("path")

const readPath = (folderPath) => {
  return new Promise((resolve, reject) => {
    let tree = { files: [], folders: [] }
    const readOptions = {
      withFileTypes: true,
    }
    readdir(folderPath, readOptions).then((items) => {
      const promisesArr = []

      items.forEach((item) => {
        const itemPath = folderPath + item.name

        if (item.isDirectory()) {
          tree.folders.push(itemPath)

          const itemPromise = readPath(itemPath + "/").then((res) => {
            res.folders.forEach((folder) => tree.folders.push(folder))
            res.files.forEach((file) => tree.files.push(file))
          })

          promisesArr.push(itemPromise)
        } else {
          tree.files.push(itemPath)
        }
      })

      Promise.all(promisesArr).then(() => resolve(tree))
    })
  })
}

const path = process.argv[2]

if (!path) {
  throw new Error("path is not defined")
} else if (path[path.length - 1] !== "/") {
  throw new Error(`path '${path}' has no trailing slash`)
} else {
  readPath(path).then((tree) => console.log(tree))
}
