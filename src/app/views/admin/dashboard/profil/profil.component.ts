import { Component } from '@angular/core';
import { id } from 'date-fns/locale';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {

  userInfo: any;

  constructor(private asd: DataService,private auth:AuthadminService) {const user = this.auth.getUser();
    this.asd.getUserData(user).subscribe((data: any) => {
      this.userInfo = data;
    });}

  ngOnInit(): void {
    
  }

}


