import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-loading',
  standalone: true,
  imports: [],
  templateUrl: './skeleton-loading.component.html',
  styleUrl: './skeleton-loading.component.css'
})
export class SkeletonLoadingComponent {
  skeleton = [
    { line: '' },
    { line: '' },
    { line: '' },
    { line: '' },
    { line: '' },
    { line: '' },
    { line: '' },
    { line: '' },
  ]
}
