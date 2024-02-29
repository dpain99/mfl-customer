export interface ICategory {
  version: number;
  id: number;
  name: string;
  status: string;
  children: ICategory[];
}
