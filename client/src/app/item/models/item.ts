export interface Item {
  classId: string;
  name: string;
  appId: number;
  contextId: number;
  icon: string;
  price?: number;
}

export const selectItemId = (item: Item): string => item.classId;
