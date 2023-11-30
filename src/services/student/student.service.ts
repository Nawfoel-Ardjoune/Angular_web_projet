import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { STUDENTS_MOCKED } from '../../mocks/students.mock';
import { BehaviorSubject } from 'rxjs/index';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class StudentService{
    //private studentList: Student[] = STUDENTS_MOCKED;
    private studentList: Student[] = [];
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

    private StudentUrl = 'http://localhost:9428/api/students';

    

    constructor(public studentService : StudentService, private http: HttpClient) { 
      //console.log("student.construct called");
      this.getStudents();
      //console.log("Student list == ",this.studentList);
    }

    getStudents() {
      console.log("getStudent called");
      return this.http.get<Student[]>(this.StudentUrl).subscribe((students) =>{
        this.studentList = students;
        console.log("student == ",students);
      });
    }

    // private log(message: string){
    //   this.messageService.add(`StudentService: ${message}`);
    // }
}