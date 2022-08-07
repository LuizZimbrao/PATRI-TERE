import Patrimony from "../entities/Patrimony";
import PatrimoniesService from "../services/PatrimoniesService";

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

class PatrimoniesController {
  async store(req: Request, res: Response) {
    const {
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
    } = req.body as unknown as IPatrimony;

    const patrimony = await PatrimoniesService.create({
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
  }
}

export default new PatrimoniesController();
