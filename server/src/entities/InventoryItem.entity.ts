import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Inventory from './Inventory.entity';
import Item from './Item.entity';

@Entity()
class InventoryItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 1 })
  quantity: number;

  @ManyToOne(() => Inventory, inv => inv.items, { nullable: false, onDelete: 'CASCADE' })
  inventory: Inventory;

  @ManyToOne(() => Item, item => item.invItems, { eager: true, cascade: true, nullable: false, onDelete: 'CASCADE' })
  item: Item;

  constructor(partial: Partial<InventoryItem> = {}) {
    Object.assign(this, partial);
  }
}

export default InventoryItem;
