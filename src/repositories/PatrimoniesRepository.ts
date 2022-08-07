import { EntityRepository, Repository } from "typeorm";
import Patrimony from "../entities/Patrimony";

@EntityRepository(Patrimony)
class PatrimoniesRepository extends Repository<Patrimony> {}

export default PatrimoniesRepository;
