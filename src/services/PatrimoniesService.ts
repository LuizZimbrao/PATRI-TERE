import { getCustomRepository } from "typeorm";
import PatrimoniesRepository from "../repositories/PatrimoniesRepository";

interface IPatrimony {
  name: string;
  neighborhood: string;
  street: string;
  number: string;
  coordinates: string;
  owner?: string;
  tumbling_date: string;
  tumbling_number: string;
  patrimony_type: string;
  conservation?: string;
  security_condition?: string;
  historical_data?: string;
  images?: string;
  details?: string;
}

class PatrimoniesService {
  async create({
    name,
    neighborhood,
    street,
    number,
    coordinates,
    owner,
    tumbling_date,
    tumbling_number,
    patrimony_type,
    conservation,
    security_condition,
    historical_data,
    images,
    details,
  }: IPatrimony) {
    if (!name) {
      return { error: "O campo nome é obrigatório" };
    }

    if (!neighborhood) {
      return { error: "O campo bairro é obrigatório" };
    }

    if (!street) {
      return { error: "O campo rua é obrigatório" };
    }

    if (!number) {
      return { error: "O campo número é obrigatório" };
    }

    if (!coordinates) {
      return { error: "O campo coordenadas é obrigatório" };
    }

    if (!tumbling_date) {
      return { error: "O campo data de tombamento é obrigatório" };
    }

    if (!tumbling_number) {
      return { error: "O campo numero de tombamento é obrigatório" };
    }

    if (!patrimony_type) {
      return { error: "O campo tipo de patrimônio é obrigatório" };
    }

    const patrimoniesRepository = getCustomRepository(PatrimoniesRepository);
    const patrimonyExists = await patrimoniesRepository.findOne({
      where: { tumbling_number },
    });

    if (patrimonyExists) {
      return { error: "Patrimonio já cadastrado" };
    }

    const patrimony = patrimoniesRepository.create({
      name,
      neighborhood,
      street,
      number,
      coordinates,
      owner,
      tumbling_date,
      tumbling_number,
      patrimony_type,
      conservation,
      security_condition,
      historical_data,
      images,
      details,
    });

    await patrimoniesRepository.save(patrimony);

    return patrimony;
  }
}

export default new PatrimoniesService();
