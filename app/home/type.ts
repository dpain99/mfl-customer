export interface IBanner {
  version: number;
  id: number;
  name: string;
  actionLink: string | null;
  status: string;
  imageId: number;
  image: {
    version: number;
    id: number;
    key: string;
    url: string;
    type: string;
    size: number;
    uploaderId: number;
  };
}

//product
export interface IProduct {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  version: number;
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  slug: string;
  status: string;
  productCategories: IProductCategory[];
  productImage: IProductImage[];
  productVariant: IProductVariant[];
  minMoney: number;
  maxMoney: number;
}

export interface IProductCategory {
  createdAt: string;
  deletedAt: string | null;
  id: number;
  productId: number;
  categoryId: number;
  category: ICategory;
}

export interface ICategory {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  version: number;
  id: number;
  name: string;
  status: string;
}

export interface IProductImage {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  version: number;
  id: number;
  productId: number;
  imageId: number;
  image: IImage;
}

export interface IImage {
  createdAt: string;
  deletedAt: string | null;
  version: number;
  id: number;
  key: string;
  url: string;
  type: string;
  size: number;
  uploaderId: number;
}

export interface IProductVariant {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  version: number;
  id: number;
  name: string;
  value: string;
  sku: string;
  quantity: number;
  price: number;
  salePrice: number;
  productId: number;
  productVariantImage: IProductVariantImage[];
}

export interface IProductVariantImage {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  version: number;
  id: number;
  productVariantId: number;
  imageId: number;
  image: IImage;
}

export interface IProductListResponse {
  items: IProduct[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}
