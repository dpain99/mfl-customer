export interface IBanner {
  version: number;
  id: number;
  name: string;
  actionLink: string;
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
