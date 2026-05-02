import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'beer',
  title: 'Beer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Beer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'style',
      title: 'Beer Style',
      type: 'string',
      description: 'e.g., Hazy IPA, Imperial Stout, Sour',
    }),
    defineField({
      name: 'abv',
      title: 'ABV (%)',
      type: 'number',
    }),
    defineField({
      name: 'status',
      title: 'Current Status',
      type: 'string',
      options: {
        list: [
          { title: 'On Tap', value: 'onTap' },
          { title: 'In Cans', value: 'inCans' },
          { title: 'Sold Out', value: 'soldOut' },
        ],
        layout: 'radio',
      },
      initialValue: 'onTap',
    }),
    defineField({
      name: 'tastingNotes',
      title: 'Tasting Notes',
      type: 'text',
      description: 'A short description of flavor profile and ingredients.',
    }),
    defineField({
      name: 'image',
      title: 'Beer Photo or Can Art',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})