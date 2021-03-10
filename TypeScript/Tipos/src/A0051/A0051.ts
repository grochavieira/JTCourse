type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }

      console.log('###');
      console.log('');
    }
  }
}

const votation = new Votation('Qual a sua linguagem de programação favorita?');
votation.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votation.addVotationOption({ option: 'JavaScript', numberOfVotes: 0 });
votation.addVotationOption({ option: 'TypeScript', numberOfVotes: 0 });
votation.vote(1);
votation.vote(1);
votation.vote(1);
votation.vote(2);
votation.vote(3);

const votationApp = new VotationApp();
votationApp.addVotation(votation);

votationApp.showVotations();

const votation2 = new Votation('Qual a sua cor favorita favorita?');
votation2.addVotationOption({ option: 'Azul', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Roxo', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Verde', numberOfVotes: 0 });
votation2.vote(1);
votation2.vote(1);
votation2.vote(1);
votation2.vote(2);
votation2.vote(3);

const votationApp2 = new VotationApp();
votationApp2.addVotation(votation2);

votationApp2.showVotations();
