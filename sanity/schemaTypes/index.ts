import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {workType} from './workType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, workType],
}
