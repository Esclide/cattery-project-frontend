import {User} from "./user";
import {Cat} from "./cat";
import {Attachment} from "./attachment";

enum AdvertisementType {
  sale= 'sale',
  knitting = 'knitting'
}
enum AdvertisementLevel {
  general= 'general',
  cattery = 'cattery'
}

export interface Advertisement {
  id?: number;
  type?: keyof typeof AdvertisementType;
  level?: keyof typeof AdvertisementLevel;
  title?: string;
  description?: string;
  price?: number;
  country?: string;
  city?: string;
  breedNames?: string;
  creationDate?: string;
  creatorUsername?: string;
  catIDs?: string[];
  creator?: User;
  cats?: Cat[];
  attachments?: Attachment[];
}
