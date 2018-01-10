import { Golomb, GolombRuler } from "./golomb";
// import { createWorker, ITypedWorker } from 'typed-web-workers'

export class App {
  message = 'Hello World!';

  attached(): void {
    this.message = "generating";

    // let typedWorker: ITypedWorker<number, number> = createWorker(this.workFn, (n : number) => console.log(n));

    // typedWorker.postMessage(45);

    // let golomb = new GolombRuler(8, [0, 1, 4, 9, 15]);

    console.log("start: " + new Date());

    let golomb = new GolombRuler(6);
    let rulers = golomb.find(17);
    rulers.forEach(r => console.log(golomb.print(r)), this);

    this.message = "done";
    console.log("finished: " + new Date());

    // this.message = "done " + Golomb.count;
  }

  // workFn(input: number, callback: (count: number) => void): void {
  //   // let golomb = new Golomb();

  //   // callback(golomb.generate(7, 50));

  //   callback(45);
  // }
}
