import { Golomb } from "./golomb";
// import { createWorker, ITypedWorker } from 'typed-web-workers'

export class App {
  message = 'Hello World!';

  attached(): void {
    this.message = "generating";

    // let typedWorker: ITypedWorker<number, number> = createWorker(this.workFn, (n : number) => console.log(n));

    // typedWorker.postMessage(45);

    let golomb = new Golomb();
    
    this.message = "done " + golomb.generate(8, 60);

    // this.message = "done " + Golomb.count;
  }

  // workFn(input: number, callback: (count: number) => void): void {
  //   // let golomb = new Golomb();

  //   // callback(golomb.generate(7, 50));

  //   callback(45);
  // }
}
