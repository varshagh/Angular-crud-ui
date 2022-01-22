import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  constructor(private http: HttpClient){ }
  API = 'http://localhost:9080';
    public registerStudent(studentData: any) {
      return this.http.post(this.API +'/registerStudent',studentData);
    }
    public getStudents(){
      return this.http.get(this.API + '/getStudents')
    }
    public deleteStudent(id:any){
      return this.http.delete(this.API + '/deleteStudent?id='+ id)
    }
    public updateStudent(student : any){
      return this.http.put(this.API + '/updateStudent',student);
    }

}
