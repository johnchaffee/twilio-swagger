/* 

This script will create tagged versions of the Twilio Open API specs
Clone or pull the latest Twilio Open API specs from https://github.com/twilio/twilio-oai 
Store that repo in a parallel directory to this one called ../twilio-oai
Run this script by typing `node add-tags.js` in your shell
It will create or update all of the specs in the /api folder

*/


const fs = require("fs")
const sourceDir = "../twilio-oai/spec/json"
const specsArray = []

// Create specsArray
fs.readdir(sourceDir, (err, files) => {
  files.forEach((file) => {
    // console.log(file)
    if (file.match(/json/)) {
      specsArray.push(file)
    }
  })
  // console.log("specsArray", specsArray)

  // Loop through each source spec
  specsArray.forEach((spec) => {
    console.log(spec)
    slug = spec.replaceAll(/(twilio_|.json)/g, "")
    console.log(slug)
    // Create directory from the slug name
    fs.mkdirSync(`./api/${slug}`, { recursive: true })
    // Read sourcefile
    const data = require("../twilio-oai/spec/json/" + spec)
    const paths = data.paths
    // console.log(paths)
    const pathsArray = []
    for (let path in paths) {
      // console.log("PATH", path)
      pathsArray.push(path)
    }
    // console.log("PATHS ARRAY", pathsArray)

    // Loop through the paths in the spec
    pathsArray.forEach((path) => {
      path_components = path.match(/\/\w+/g)
      // console.log("PATH COMPONENTS", path_components)
      last = path_components[path_components.length - 1]
      // console.log("LAST", last)
      // Create a tag name from the last component of the path
      tag = last.replace("/", "")
      // console.log("TAG", tag)
      pathObject = paths[path]
      pathObjectArray = []
      // Create an array of the root level properties in the path
      for (let prop in pathObject) {
        // console.log("PROP", prop)
        pathObjectArray.push(prop)
      }
      // console.log("OBJECT ARRAY", pathObjectArray)

      // Loop through the properties in the path
      pathObjectArray.forEach((prop) => {
        // console.log("OJBECT_ARRAY PROP", prop)
        // If the property is a method (get, post, put, patch, delete)
        // Add a tag object to that method
        if (prop.match(/(get|post|put|patch|delete)/)) {
          switch (prop) {
            case "post":
              data.paths[path].post.tags = [tag]
              break
            case "put":
              data.paths[path].put.tags = [tag]
              break
            case "patch":
              data.paths[path].patch.tags = [tag]
              break
            case "delete":
              data.paths[path].delete.tags = [tag]
              break
            default:
              data.paths[path].get.tags = [tag]
          }
        }
      })
    })

    // Export the tagged spec to the appropriate directory
    fs.writeFile(
      `./api/${slug}/spec.json`,
      // `../twilio-oai/spec/json/${spec}`,
      JSON.stringify(data, null, 2),
      (err) => {
        if (err) {
          console.error(err)
        }
        console.log("file written successfully")
      }
    )
  })
})
