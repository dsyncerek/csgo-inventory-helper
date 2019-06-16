import { Container } from "inversify";
import { getRepository, Repository } from 'typeorm';
import { TYPES } from '../constants/types';
import BotController from '../controllers/Bot.controller';
import InventoryController from '../controllers/Inventory.controller';
import ItemController from '../controllers/Item.controller';
import Bot from '../entities/Bot.entity';
import Inventory from '../entities/Inventory.entity';
import Item from '../entities/Item.entity';
import ControllerInterface from '../interfaces/Controller.interface';
import BotService, { BotServiceInterface } from '../services/Bot.service';
import InventoryService, { InventoryServiceInterface } from '../services/Inventory.service';
import ItemService, { ItemServiceInterface } from '../services/Item.service';

const container = new Container();

container.bind<ControllerInterface>(TYPES.ControllerInterface).to(BotController);
container.bind<ControllerInterface>(TYPES.ControllerInterface).to(InventoryController);
container.bind<ControllerInterface>(TYPES.ControllerInterface).to(ItemController);

container.bind<BotServiceInterface>(TYPES.BotServiceInterface).to(BotService);
container.bind<ItemServiceInterface>(TYPES.ItemServiceInterface).to(ItemService);
container.bind<InventoryServiceInterface>(TYPES.InventoryServiceInterface).to(InventoryService);

container.bind<Repository<Bot>>(TYPES.BotRepository).toDynamicValue(() => getRepository(Bot));
container.bind<Repository<Item>>(TYPES.ItemRepository).toDynamicValue(() => getRepository(Item));
container.bind<Repository<Inventory>>(TYPES.InventoryRepository).toDynamicValue(() => getRepository(Inventory));

export { container };
