export * from "./tmf.module";
export * from "./tmf.service";
export class Tmf {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
