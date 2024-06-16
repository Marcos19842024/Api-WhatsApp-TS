import LeadExternal from "../domain/lead-external.repository";
import LeadRepository from "../domain/lead.repository";

export class LeadCreate {
  private leadRepository: LeadRepository;
  private leadExternal: LeadExternal;
  constructor(repositories: [LeadRepository, LeadExternal]) {
    const [leadRepository, leadExternal] = repositories;
    this.leadRepository = leadRepository;
    this.leadExternal = leadExternal;
  }

  public async sendMessageAndSave({
    message,
    phone,
    pathtofiles,
  }: {
    message: string;
    phone: string;
    pathtofiles: Array<string>;
  }) {
    const responseDbSave = await this.leadRepository.save({ message, phone, pathtofiles });//TODO DB
    const responseExSave = await this.leadExternal.sendMsg({ message, phone, pathtofiles });//TODO enviar a ws
    return {responseDbSave, responseExSave};
  }
}