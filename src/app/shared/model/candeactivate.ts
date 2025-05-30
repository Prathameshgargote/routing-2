import { Observable } from "rxjs";

export interface Icandeactivate{
    canDeactivete:()=>boolean|Observable<boolean>|Promise<boolean>
}