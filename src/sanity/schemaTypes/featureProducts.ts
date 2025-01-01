import { defineField, defineType } from 'sanity'
import { NumberRule } from '@sanity/types';


const featureProducts = defineType({
    name: 'featureProducts',
    title: 'Feature Products ',
    type: 'document',
    fields: [
        defineField(
            {
                name: 'name',
                title: 'Name',
                type: 'string',
            },
        ),

        defineField({
            name: 'discountedPrice',
            title: 'Discounted Price',
            type: 'number',
        }),

        defineField(
            {
                name: 'actualPrice',
                title: 'Actual Price',
                type: 'number',
            }
        ),
        defineField(
            {
                name: 'productImage',
                title: 'Product Image',
                type: 'image',
                options: {
                    hotspot: true, // Allows cropping in the Sanity Studio
                },
            }
        ),
        defineField(
            {
                name: "slug",
                title: "Url-Slug",
                type: "slug",
                options: {
                    source: 'name',
                    maxLength: 98, // will be ignored if slugify is set
                },
                validation: Rule => Rule.required()
            }
        ),
        defineField(
            {
                name: 'isOnSale',
                title: 'Is On sale',
                type: 'boolean', // Checkbox for marking the product as featured
                description: 'Mark this product as if it is on sale',
            }
        ),

        defineField({
            name: 'discountPercent',
            title: 'Discount Percentage',
            type: 'number',
            description: 'Discount percentage for the sale.',
            hidden: ({ parent }: { parent: { isOnSale: boolean } }) => !parent?.isOnSale, // Show only if the product is on sale
            validation: (rule: NumberRule) => rule.min(0).max(100), // Ensure valid discount percentage
        }),
    ],
})

export default featureProducts;

