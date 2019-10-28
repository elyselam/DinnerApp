export class Food {
    id?: number;
    link: string;
    name: string;
    cuisine?: string;
    mexican?: 0;
    chinese?: 0;
    japanese?: 0;
    thai?: 0;
    greek?: 0;
    indian?: 0;
    caribbean?: 0;
    italian?: 0;
    german?: 0;
    korean?: 0;
    american?: 0;
    deli?: 0;
    vietnamese?: 0;
    breakfast?: 0;
    soulFood?: 0;
    bakery?: 0;
  
    constructor(kek: number) {
      this.mexican += kek ;
      this.chinese += kek ;
      this.japanese += kek ;
      this.thai += kek ;
      this.greek += kek ;
      this.indian += kek ;
      this.caribbean += kek ;
      this.italian += kek ;
      this.german += kek ;
      this.korean += kek ;
      this.american += kek ;
      this.deli += kek ;
      this.vietnamese += kek ;
      this.breakfast += kek ;
      this.soulFood += kek ;
      this.bakery += kek ;
  
    }
  
    combine(element: Food) {
      this.mexican += element.mexican ;
      this.chinese += element.chinese ;
      this.japanese += element.japanese ;
      this.thai += element.thai ;
      this.greek += element.greek ;
      this.indian += element.indian ;
      this.caribbean += element.caribbean ;
      this.italian += element.italian ;
      this.german += element.german ;
      this.korean += element.korean ;
      this.american += element.american ;
      this.deli += element.deli ;
      this.vietnamese += element.vietnamese ;
      this.breakfast += element.breakfast ;
      this.soulFood += element.soulFood ;
      this.bakery += element.bakery ;
    };
  }
