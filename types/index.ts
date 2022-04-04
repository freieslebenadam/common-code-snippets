
export interface ILanguage {
  name: string,
  title: string
}

// export interface ITag {
//   name: string,
// }

export interface ISnippet {
  id: string,
  slug: string,
  name: string,
  description?: string,
  language: ILanguage,
  code: string,
  tags?: string[]
}