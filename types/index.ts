
export interface ITag {
  id: string,
  name: string,
}

export interface ISnippet {
  id: string,
  name: string,
  description: string,
  language: {
    name: string,
    title: string
  },
  code: string,
  tags?: ITag[]
}