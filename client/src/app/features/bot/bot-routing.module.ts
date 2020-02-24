import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BotLayoutComponent } from './components/bot-layout/bot-layout.component';
import { AddBotComponent } from './containers/add-bot.component';
import { BotComponent } from './containers/bot.component';
import { BotsComponent } from './containers/bots.component';
import { EditBotComponent } from './containers/edit-bot.component';

const routes: Route[] = [
  {
    path: '',
    component: BotLayoutComponent,
    children: [
      {
        path: '',
        component: BotsComponent,
      },
      {
        path: 'add',
        component: AddBotComponent,
      },
      {
        path: 'edit/:steamId',
        component: EditBotComponent,
      },
      {
        path: ':steamId',
        component: BotComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotRoutingModule {}
