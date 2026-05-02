import { type SchemaTypeDefinition } from 'sanity'
import beer from './beer' 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [beer], // ADD 'beer' INTO THIS ARRAY
}