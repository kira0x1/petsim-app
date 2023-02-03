export enum PetType {
  Fire,
  Water,
  Air,
  Ground,
}

export default interface Pet {
  name: string;
  icon: string;
  id: number;
  type: PetType;
}
