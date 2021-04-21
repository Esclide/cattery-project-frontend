import { User } from "./user";
import { Breed } from "./breed";
import {Attachment} from "./attachment";

export interface Cat  {
  id?: number;
  name?: string;
  title?: string;
  gender?: string;
  breeder?: User;
  breederUsername?: string;
  owner?: User;
  ownerUsername?: string;
  motherId?: string;
  fatherId?: string;
  breedName?: string;
  breed?: Breed;
  color?: string;
  birthDate?: string;
  abilityToReproduce?: boolean;
  description?: string;
  isAlive?: boolean;
  attachments: Attachment[];
}
