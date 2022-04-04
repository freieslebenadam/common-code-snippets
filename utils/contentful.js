const contentful = require("contentful")

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

const getAllSnippets = async () => {
  const { items } = await client.getEntries({ content_type: "snippet" })

  const snippets = items.map(item => {
    return {
      id: item.sys.id,
      name: item.fields.name,
      description: item.fields.description,
      language: item.fields.language.fields,
      code: item.fields.code,
    }
  })

  return snippets
}

module.exports = { 
  client,
  getAllSnippets
}