export class Food {
  id?: number;
  link: string;
  name: string;
  cuisine?: string;
  mexican?: number;
  chinese?: number;
  japanese?: number;
  thai?: number;
  greek?: number;
  indian?: number;
  caribbean?: number;
  italian?: number;
  german?: number;
  korean?: number;
  american?: number;
  deli?: number;
  vietnamese?: number;
  breakfast?: number;
  soulFood?: number;
  bakery?: number;

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
