export class Calculate {

  date: string;
  beneficiary: string;
  participants: object;
  expenses: string[];
  beneficiaryTotal: number;
  totalExpenses: number;


  private uid;

  constructor() {
    this.expenses = new Array<string>();
    this.participants = new Array<object>();
    this.beneficiaryTotal = 0;
  }
}
