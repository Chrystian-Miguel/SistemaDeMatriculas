import { HttpContextToken } from "@angular/common/http";

export const SUPPRESS_GLOBAL_ERROR_HANDLER = new HttpContextToken<boolean>(() => false);
