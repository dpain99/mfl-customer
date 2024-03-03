export interface Product {
    createdAt: string
    updatedAt: string
    deletedAt: any
    version: number
    id: number
    name: string
    description: string
    shortDescription: string
    slug: string
    status: string
    productCategories: ProductCategory[]
    productImage: ProductImage[]
    productVariant: ProductVariant[]
    minMoney: number
    maxMoney: number
}

export interface ProductCategory {
    createdAt: string
    deletedAt: any
    id: number
    productId: number
    categoryId: number
    category: Category
}

export interface Category {
    createdAt: string
    updatedAt: string
    deletedAt: any
    version: number
    id: number
    name: string
    status: string
}

export interface ProductImage {
    createdAt: string
    updatedAt: string
    deletedAt: any
    version: number
    id: number
    productId: number
    imageId: number
    image: Image
}

export interface Image {
    createdAt: string
    deletedAt: any
    version: number
    id: number
    key: string
    url: string
    type: string
    size: number
    uploaderId: number
}

export interface ProductVariant {
    createdAt: string
    updatedAt: string
    deletedAt: any
    version: number
    id: number
    name: string
    value: string
    sku: string
    quantity: number
    price: number
    salePrice: number
    productId: number
}
