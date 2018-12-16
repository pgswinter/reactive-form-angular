import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UploaderService } from '../provider/uploader.service';
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  uploadForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private uploaderService: UploaderService
  ) { }

  ngOnInit() {
    this.uploadForm = this.fb.group({});
  }

  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe();
    }
  }
}
