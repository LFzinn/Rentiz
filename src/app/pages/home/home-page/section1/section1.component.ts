import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {


  purpose: string[] = [];
  location: string[] = [];
  type: string[] = [];

  constructor(private router: Router) {}


  search() {
    const queryParams = {
      options: [this.purpose, this.type, this.location].join(',')
    }

    if( queryParams.options.length === 2 ) {
      Swal.fire({
        title: "Quer Conhecer Todas as Opções?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Sim",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else {
      this.router.navigate(['/properties'], { queryParams });

    }

  }


}
