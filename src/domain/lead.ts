import { v4 as uuid } from "uuid";

export class Lead {
  readonly uuid: string;
  readonly message: string;
  readonly phone: string;
  readonly pathtofiles: Array<string>;

  constructor({ message, phone, pathtofiles }: { message: string; phone: string; pathtofiles: Array<string> }) {
    this.uuid = uuid();
    this.message = message;
    this.phone = phone; 
    this.pathtofiles = pathtofiles;
  }
}