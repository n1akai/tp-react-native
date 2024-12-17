import axios from "axios";
import Commande from "../model/Commande";
import { ProcessResult } from "../util/ProcessResult";

export default class CommandeService {
  url = "http://localhost:8081/api/command/";

  findByAll() {
    return axios.get<Commande[]>(this.url);
  }

  deleteByRef(ref: string) {
    return axios.delete<number>(this.url + "ref/" + ref);
  }

  save(item: Commande) {
    return axios.post<ProcessResult>(this.url, item);
  }
}
