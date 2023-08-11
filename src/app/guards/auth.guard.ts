import { CanActivateFn, Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};