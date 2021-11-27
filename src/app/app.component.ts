import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Test Technique Angular';
  list:any[]=[];
  //Adding item into the list 
  addTask(item:String){
    console.warn(item);
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list);
    
    
  }
  //Removing item from the list
  removeTask(id:number){
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id);
  }

 
}
  
