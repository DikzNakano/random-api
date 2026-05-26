const fs = require("fs")
const path = require("path")

export default function handler(req, res) {
  const { type } = req.query

  try {
    const file = path.join(process.cwd(), `${type}.json`)

    const data = JSON.parse(fs.readFileSync(file))

    const result = data[Math.floor(Math.random() * data.length)]

    res.json({
      result
    })

  } catch {
    res.json({
      error: "Category not found"
    })
  }
}
