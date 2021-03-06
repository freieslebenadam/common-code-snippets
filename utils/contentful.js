const contentful = require("contentful")

// Contentful connection
const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

// Fetching all snippets
const getAllSnippets = async () => {
  const { items } = await client.getEntries({ content_type: "snippet" })

  const snippets = items.map(item => {
    const tags = item.fields.tags === undefined ? [] : item.fields.tags.map(tag => tag.fields.name)

    return {
      id: item.sys.id,
      slug: item.fields.slug,
      name: item.fields.name,
      description: item.fields.description,
      language: item.fields.language.fields,
      code: item.fields.code,
      tags: tags
    }
  })

  return snippets
}

// Fetching one snippet by slug
const getSnippet = async (slug) => {
  const { items } = await client.getEntries({
    content_type: "snippet",
    'fields.slug[in]': `${slug}`
  })

  const item = items[0]

  const snippet = {
    id: item.sys.id,
    slug: item.fields.slug,
    name: item.fields.name,
    description: item.fields.description,
    language: item.fields.language.fields,
    code: item.fields.code,
    tags: item.fields.tags === undefined ? [] : item.fields.tags.map(tag => tag.fields.name)
  }

  return snippet
}

module.exports = { 
  getAllSnippets,
  getSnippet
}