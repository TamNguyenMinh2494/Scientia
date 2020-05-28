import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CourseComponent } from 'src/app/pages/course/course.component';
import { AlgoParams } from 'src/app/model/algo-params.model';
import { Courses } from 'src/app/model/courses.model';

@Component({
  templateUrl: './algo-params.component.html',
  styleUrls: ['./algo-params.component.scss']
})
export class AlgoParamsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlgoParams
  ) { }
  inputData = [];
  numOfProcess = '2';
  ngOnInit() {
    console.log(this.numOfProcess);
  }

  confirmNOP() {
    console.log(this.numOfProcess);
    // tslint:disable-next-line:radix
    const n = parseInt(this.numOfProcess);
    for (let i = 0; i < n; i++) {
      this.inputData.push(this.data);
    }
    console.log(this.data);
    console.log(this.inputData);
  }
}
