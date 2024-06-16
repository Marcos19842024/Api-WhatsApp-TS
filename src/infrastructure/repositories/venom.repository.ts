import LeadExternal from "../../domain/lead-external.repository";
import { create, Whatsapp } from "venom-bot";

export class VenomTransporter implements LeadExternal {
  intance: Whatsapp | undefined;

  constructor() {
    create({ session: "session" }).then((client) => (this.intance = client));
  }
  async sendMsg(lead: { message: string; phone: string; pathtofiles: Array<string> }): Promise<any> {
    try {
      const { message, phone, pathtofiles } = lead;
      var result;            
      if(pathtofiles?.length > 0) {
        console.log("Adjuntos:");
        let pathtofile = pathtofiles[0];
        const filename = pathtofile.split("\\").pop();
        result = await this.intance?.sendFile(`${phone}@c.us`, pathtofile, filename, message)
        console.log(filename);
        if(pathtofiles.length > 1) {
          for(let i = 1; i < pathtofiles.length; i++) {
            let pathtofile = pathtofiles[i];                       
            const filename = pathtofile.split("\\").pop();
            result = await this.intance?.sendFile(`${phone}@c.us`, pathtofile, filename,``)
            console.log(filename);            
          };
        }        
      }
      else {
        result = this.intance?.sendText(`${phone}@c.us`, message);
      }
      const response = result;
      return Promise.resolve(response);
    } 
    catch (error: any) {
      return Promise.reject(error);
    }
  }
}