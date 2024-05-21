import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { TitlePageComponent } from '../../../shared/components-shared/title-page/title-page.component';
import { RealPipe } from '../../../shared/pipes/real.pipe';
import { HousesService } from '../../../shared/services/houses.service';
import { getParamsID } from '../../../shared/functions/get-params-id';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [TitlePageComponent, ReactiveFormsModule, RealPipe, CommonModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component implements OnInit {
  houses: any[] = [];
  dataForm: FormGroup;

  constructor(
    private viewportScroller: ViewportScroller,
    private formBuilder: FormBuilder) {
      this.dataForm = this.formBuilder.group({
        name: [''],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.pattern('[0-9]{11}')]],
        people: [''],
      });
    }

  ngOnInit(): void { window.scrollTo(0, 0);}

  private HousesService = inject(HousesService);

  house$ = getParamsID().pipe(
    switchMap((id) => this.HousesService.getHouseById(id))
  );

  get email() { return this.dataForm.get('email'); }

  validatorError:boolean = false;
  loading:boolean = false;
  successMessage:boolean = false;

  submitForm() {
    if (this.dataForm.get('email')?.invalid) {
      this.validatorError = true;
    } else if (this.dataForm.valid) {
      this.loading = true;

      setTimeout(() => {
        console.log(this.dataForm.value);
        this.loading = false;
        this.successMessage = true;
        this.dataForm.reset();
      }, 2000);
    }
  }

  backToForm() {
    this.loading = false;
    this.successMessage = false;
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  }
}
