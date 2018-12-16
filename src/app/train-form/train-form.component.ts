import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FetchDatsServices } from './provider/fetch-data.service';
import { ManagementUserMasterModel } from './interfaces/data-model';

@Component({
  selector: 'app-train-form',
  templateUrl: './train-form.component.html',
  styleUrls: ['./train-form.component.css']
})
export class TrainFormComponent implements OnInit {
  sampleForm: FormGroup;
  roles: FormArray;
  admin: ManagementUserMasterModel;
  listAdmin: ManagementUserMasterModel[];
  // fetchRole = [
  //   {
  //   id: 2,
  //   role_name: 'author_master',
  //   order: 2
  //   },
  //   {
  //   id: 9,
  //   role_name: 'series_calendar',
  //   order: 9
  //   }
  // ];
  constructor(
    private fb: FormBuilder,
    private fetchDatsServices: FetchDatsServices
  ) { }

  ngOnInit() {
    this.getAdmin();
    this.getAdminById(3);
    this.sampleForm = this.fb.group({
      email: '',
      username: '',
      profile_picture: this.fb.group({
        url: ''
      }),
      front_editor_name: '',
      group: '',
      operational: '',
      created_at: '',
      roles: this.fb.array([])
      // roles: this.fb.array([ this.createItem() ])
    });
    // this.fullFillSampleForm();
    // this.loadAlreadyDataRoles();
  }

  getAdmin() {
    this.fetchDatsServices.fetchAdministrators().subscribe(items => {
      console.log(items);
      this.listAdmin = items.data;
    });
  }

  getAdminById(id) {
    this.fetchDatsServices.fetchAdministratorsById(id).subscribe(item => {
      console.log(item);
      this.admin = item;
      this.fullFillSampleForm();
    });
  }

  createItem(a: string = null, b: number = null): FormGroup {
    return this.fb.group({
      role_name: a,
      order: b
    });
  }

  addItem(): void {
    this.roles = this.sampleForm.get('roles') as FormArray;
    this.roles.push(this.createItem());
  }

  // loadAlreadyDataRoles() {
  //   if (this.admin) {

  //   }
  // }

  fullFillSampleForm() {
    this.sampleForm.patchValue({
      email: this.admin.email,
      username: this.admin.username,
      profile_picture: {
        url: this.admin.profile_picture.url
      },
      front_editor_name: this.admin.front_editor_name,
      group: this.admin.group,
      operational: this.admin.operational,
      created_at: this.admin.created_at,
    });
    for (let i = 0; i < this.admin.roles.length; i++) {
      const a = this.admin.roles[i].role_name;
      const b = this.admin.roles[i].order;

      this.roles = this.sampleForm.get('roles') as FormArray;
      this.roles.push(this.createItem(a, b));
    }
  }

  onSubmit() {
    const updateAdmin = this.sampleForm.value;
    this.fetchDatsServices.insertAdministrator(updateAdmin).subscribe(item => {
      alert('success');
      return item;
    });
  }

  onSubmitUpdate() {
    const updateAdmin = this.sampleForm.value;
    this.fetchDatsServices.updateAdministratorById(3, updateAdmin)
    .subscribe(item => {
      alert('update success');
      return item;
    }
      // {
      // replace the hero in the heroes list with update from server
      // const ix = item ? (this.listAdmin ? this.listAdmin.findIndex(h => h.id === item.id) : 'not load list admin') : -1;
      // if (ix > -1) {
        // this.listAdmin[ix] = item;
      // }
    );
  }

  onDelete() {
    this.fetchDatsServices.deleteAdministratorById(2).subscribe(item => item);
  }
}
