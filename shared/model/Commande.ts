export default class Commande {
  public id: number | null = null;
  public ref: string = "";
  public total: number = 0;

  constructor(id: number, ref: string, total: number) {
    this.id = id;
    this.ref = ref;
    this.total = total;
  }
}
