import { type SchemaTypeDefinition } from 'sanity'
import featureProducts from './featureProducts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [featureProducts],
}
