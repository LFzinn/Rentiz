import { Component, OnInit } from '@angular/core';
import { TitlePageComponent } from '../../../shared/components-shared/title-page/title-page.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [TitlePageComponent, ReactiveFormsModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component implements OnInit  {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      msg: [''],
      subject: [''],
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  get email() { return this.form.get('email'); }

  validatorError:boolean = false;
  loading:boolean = false;
  successMessage:boolean = false;
  btnDisabled:boolean = false;

  onSubmit() {
    if (this.form.get('email')?.invalid) {
      this.validatorError = true;
    } else if (this.form.valid) {
      this.validatorError = false;
      this.btnDisabled = true;
      this.loading = true;

      setTimeout(() => {
        console.log(this.form.value);
        this.loading = false;
        this.successMessage = true;
        this.form.reset();
      }, 2000);
    }
  }

}
