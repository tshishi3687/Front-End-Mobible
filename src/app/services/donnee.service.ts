import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Contrat, Info_bancaire} from '../objets';

@Injectable({
  providedIn: 'root'
})
export class DonneeService  implements CanActivate{

  // tslint:disable-next-line:variable-name
  private info_bancaire: Info_bancaire;
  private exist = false;

  constructor() { }

  // tslint:disable-next-line:variable-name
  verifSiExist(info_ban: Info_bancaire): void{

    if (info_ban == null){
      this.exist = true;
      return ;
    }
    this.info_bancaire = info_ban;
    sessionStorage.setItem('user-details', JSON.stringify(this.info_bancaire));
  }

  contrat(): Contrat{
    const contrat = JSON.parse(sessionStorage.getItem('user-details'));
    return contrat as Contrat;
  }

  client(): Info_bancaire{
    if (this.isAuthenticated()){
      this.contrat().facturation.information.appartient = JSON.parse(sessionStorage.getItem('user-details'));
      const information = JSON.parse(sessionStorage.getItem('user-details'));
      return information as Info_bancaire;
    }
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('user-details') !== null;
  }

  logout(): void{
    sessionStorage.removeItem('user-details');
  }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuthenticated ){
      return true;
    }else{
      this.logout();
      return false;
    }
  }

  loginExiste(): boolean {
    return this.exist;
  }
}
