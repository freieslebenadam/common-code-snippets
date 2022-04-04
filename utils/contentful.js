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
      slug: item.fields.slug,
      name: item.fields.name,
      description: item.fields.description,
      language: item.fields.language.fields,
      code: item.fields.code,
    }
  })

  return snippets
}

const getSnippet = async (slug) => {
  const { items } = await client.getEntries({
    content_type: "snippet",
    'fields.slug[in]': `${slug}`
  })

  const snippet = {
    id: items[0].sys.id,
    slug: items[0].fields.slug,
    name: items[0].fields.name,
    description: items[0].fields.description,
    language: items[0].fields.language.fields,
    code: items[0].fields.code
  }

  return snippet
}

module.exports = { 
  getAllSnippets,
  getSnippet
}