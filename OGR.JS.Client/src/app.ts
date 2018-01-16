import { Golomb, GolombRuler } from "./golomb";
// import { createWorker, ITypedWorker } from 'typed-web-workers'
import * as fingerprint from 'fingerprintjs2';

export class App {
  message = 'Hello World!';

  attached(): void {
        this.message = "cores: " + window.navigator.hardwareConcurrency;

    // let typedWorker: ITypedWorker<number, number> = createWorker(this.workFn, (n : number) => console.log(n));

    // typedWorker.postMessage(45);

    // let golomb = new GolombRuler(8, [0, 1, 3, 9, 15]);

    console.log("start: " + new Date());

    let golomb = new GolombRuler(11, 90);
    // let rulers = golomb.exhaust([0, 1, 3]);      
    // console.log("-----");
    // rulers.forEach(r => console.log(golomb.print(r)), this);

    // let nextstub = golomb.nextStub(3, [0, 10, 11]);
    // if (nextstub != null)
    //   console.log(golomb.print(nextstub));

    // nextstub = golomb.nextStub(3, nextstub);
    // if (nextstub != null)
    //   console.log(golomb.print(nextstub));

    // nextstub = golomb.nextStub(3, nextstub);
    // if (nextstub != null)
    //   console.log(golomb.print(nextstub));

    // nextstub = golomb.nextStub(3, nextstub);
    // if (nextstub != null)
    //   console.log(golomb.print(nextstub));

    // nextstub = golomb.nextStub(3, nextstub);
    // console.log(golomb.print(nextstub));

    // nextstub = golomb.nextStub(3, nextstub);
    // console.log(golomb.print(nextstub));

    // nextstub = golomb.nextStub(3, nextstub);
    // console.log(golomb.print(nextstub));

    // let nextstub = golomb.firstStub(3);

    // do {      
      
      
    //   if (nextstub != null) {
    //     console.log("STUB: " + golomb.print(nextstub));
    //     let rulers = golomb.exhaust(nextstub);
    //     // console.log("S-----");
    //     rulers.forEach(r => console.log(golomb.print(r)), this);
    //     console.log("F-----");
    //   }

    //   nextstub = golomb.nextStub(3, nextstub);
    // }
    // while (nextstub != null);

    // this.message = "done";
    console.log("finished: " + new Date());

    // this.message = "done " + Golomb.count;
  }

  // workFn(input: number, callback: (count: number) => void): void {
  //   // let golomb = new Golomb();

  //   // callback(golomb.generate(7, 50));

  //   callback(45);
  // }
}
