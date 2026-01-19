import prod1 from '../assets/PROD_1.jpg'
import prod2 from '../assets/PROD_2.jpg'
import prod3 from '../assets/PROD_3.jpg'
import prod4 from '../assets/PROD_4.jpg'
import featuredImage from '../assets/LatestCollection.jpg'

export const products = [
    {
        id: 'face-serum',
        name: 'Face Serum',
        category: 'Serums',
        image: prod1,
        price: '39.97',
        oldPrice: '635.29',
        rating: 5,
        reviews: 20,
        sku: 'SKUCV10FS',
        tags: ['Vitamin C', 'Face Serum', 'Brightening'],
        description: "Our Face Serum is a powerful blend capable of transforming your skin's texture and tone. Enriched with active ingredients, it penetrates deep to hydrate and rejuvenate."
    },
    {
        id: 'face-wash',
        name: 'Face Wash',
        category: 'Cleanser',
        image: prod2,
        price: '36.46',
        oldPrice: '229.98',
        rating: 5,
        reviews: 15,
        sku: 'SKUFW20CL',
        tags: ['Organic', 'Face Wash', 'Daily Use'],
        description: 'A gentle yet effective face wash that removes impurities without stripping your skin of its natural oils. Perfect for daily use.'
    },
    {
        id: 'body-serum',
        name: 'Body Serum',
        category: 'Body Care',
        image: prod3,
        price: '16.49',
        oldPrice: '423.94',
        rating: 5,
        reviews: 12,
        sku: 'SKUBS30BC',
        tags: ['Hydrating', 'Body Serum', 'Soft Skin'],
        description: 'Luxurious Body Serum designed to moisturize and nourish your skin from head to toe. Leaves skin feeling soft and smooth.'
    },
    {
        id: 'sun-protection',
        name: 'Sun Protection',
        category: 'Sunscreen',
        image: prod4,
        price: '85.04',
        oldPrice: '167.04',
        rating: 5,
        reviews: 8,
        sku: 'SKUSP40SC',
        tags: ['SPF 50', 'Sun Protection', 'UV Block'],
        description: 'High-performance sun protection that shields your skin from harmful UV rays while keeping it hydrated and healthy.'
    },
    {
        id: 'latest-collection',
        name: 'Latest Collection Bundle',
        category: 'Bundle',
        image: featuredImage,
        price: '150.00',
        oldPrice: '200.00',
        rating: 5,
        reviews: 5,
        sku: 'SKULCB50',
        tags: ['Bundle', 'Collection', 'New'],
        description: 'The ultimate collection of our newest arrivals. Experience the best of our latest skincare innovations in one package.'
    }
];
