export class ExpenseEntry {

  date: string;
  category: string;
  subCategory: string;
  commerce: string;
  description: string;
  value: number;
  owner: string;
  payed: boolean;
  selected: boolean;

  private uidOfPay: string;
  private uid: string;

  constructor(date: string, category: string, subCategory: string, commerce: string,
              description: string, owner: string, value: number) {
    this.date = date;
    this.category = category;
    this.subCategory = subCategory;
    this.commerce = commerce;
    this.description = description;
    this.owner = owner;
    this.value = value;
    this.selected = false;
  }
  setEmpyValues() {
    this.payed = false;
    this.uidOfPay = '';
  }
  setUid(uid: string) {
    this.uid = uid;
  }
  getUid() {
    return this.uid;
  }
  setUidOfPay(uid: string) {
    this.uidOfPay = uid;
  }
  getUidOfPay() {
    return this.uidOfPay;
  }
  removeSelected() {
    this.selected = null;
  }
}
