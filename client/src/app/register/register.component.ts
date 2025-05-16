import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_service/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accoutService = inject(AccountService);
  private toaster = inject(ToastrService);
  cancelRegister = output<boolean>();
  model: any = {}

  register() {
    this.accoutService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => this.toaster.error(error.error)
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
