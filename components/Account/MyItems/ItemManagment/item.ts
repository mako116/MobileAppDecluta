export type ItemStatus = 'draft' | 'active' | 'inactive' | 'pending' | 'sold' | 'rejected' | 'under_review';

export interface Item {
  id: string;
  title: string;
  price: number;
  currency: string;
  condition: 'New' | 'Used' | 'Refurbished' | 'Used Like New';
  status: ItemStatus;
  image: string;
  quantity: number;
  dateAdded: string;
  dateSold?: string;
  itemNumber: string;
  category: string;
  buyer?: string;
}