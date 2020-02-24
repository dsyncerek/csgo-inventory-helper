import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorsService } from '../../../../shared/services/form-errors.service';
import { CustomValidators } from '../../../../shared/utils/custom-validators';
import { CreateBotDto } from '../../models/create-bot';

@Component({
  selector: 'app-add-bot-form',
  templateUrl: './add-bot-form.component.html',
  styleUrls: ['./add-bot-form.component.scss'],
})
export class AddBotFormComponent {
  @Output() addBot = new EventEmitter<CreateBotDto>();

  form: FormGroup = this.formBuilder.group({
    steamId: ['', [Validators.required, CustomValidators.steamId]],
    ownerSteamId: ['', CustomValidators.steamId],
    name: '',
    login: '',
    tradeitemLink: ['', CustomValidators.tradeLink],
    is2FA: false,
    isOnline: false,
  });

  tradeLinkHintLink = 'https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url';
  steamIdHintLink = 'https://steamidfinder.com';

  constructor(private readonly formBuilder: FormBuilder, private readonly formErrors: FormErrorsService) {}

  submit(): void {
    if (this.form.valid) {
      const bot: CreateBotDto = { ...this.form.value };
      this.addBot.emit(bot);
    }
  }

  getControlErrorMessage(controlName: string): string {
    return this.formErrors.getControlErrorMessage(this.form, controlName);
  }
}
