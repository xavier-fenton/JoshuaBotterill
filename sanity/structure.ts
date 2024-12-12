import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Work')
    .items([
      S.documentTypeListItem('works').title('Works'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['works'].includes(item.getId()!),
      ),
    ])
