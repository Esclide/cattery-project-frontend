import { Cat } from "./cat";
import { Advertisement } from "./advertisement";

export interface Attachment {
  id?: number;
  path?: string;
  isMainPhoto?: boolean;
  advertisementId?: string;
  advertisement?: Advertisement;
  catId?: string;
  cat?: Cat;
}
