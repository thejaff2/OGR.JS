export class Golomb {

    generate(order: number, maxlength: number): number {

        let ruler = new GolombRuler(order);
        let shortest = ruler.length();
        console.log(ruler.print());

        if (maxlength > shortest)
            maxlength = shortest;

        let adjustPosition = order - 2;

        let count = 0;

        let halfOrder = (order / 2) | 0;
        let halfMax = (maxlength / 2) | 0;
        let breakFirstHalf: boolean = false;

        do {
            let prevDist = ruler.clearMarkers(adjustPosition);
            ruler.addMarker(prevDist + 1);

            breakFirstHalf = false;

            while (ruler.markers.length < order && ruler.length() < maxlength) {
                if (adjustPosition == halfOrder && ruler.length() > halfMax) {
                    // breakFirstHalf = true;
                    adjustPosition--;
                    break;
                }

                ruler.addMarker();
                adjustPosition++;
            }

            if (ruler.markers.length == order && ruler.length() <= shortest) {
                console.log(ruler.print());
                shortest = ruler.length();

                if (maxlength > shortest)
                    maxlength = shortest;
            }

            // if (ruler.markers.length > 5 && 
            //     ruler.markers[1] == 1 && 
            //     ruler.markers[2] == 5 && 
            //     ruler.markers[3] == 12 && 
            //     ruler.markers[4] == 22
            //     && ruler.markers[5] > 44) 
            //      {
            //     let xc = "sdf";
            // }

            if (ruler.markers.length == adjustPosition + 1)
                adjustPosition--;

            count++;
        }
        while (adjustPosition > 0);
        // while (this.count < 90000000 && adjustPosition > 0);

        return count;
    }
}

export class GolombRuler {
    markers: number[] = [];
    distances: number[] = [];

    constructor(public order: number) {
        this.markers.push(0);

        for (let i = 0; i < order - 1; i++)
            this.addMarker();

        this.calculateDistances();
    }

    length(): number {
        return this.markers[this.markers.length - 1];
    }

    addMarker(minDistance: number = 1): void {
        let newDistance = this.smallestValidDistance(minDistance);
        this.markers.push(this.markers[this.markers.length - 1] + newDistance);
        this.calculateDistances();
    }

    removeMarker(): void {
        this.clearMarkers(this.markers.length - 2);
    }

    clearMarkers(after: number = 0): number {
        this.markers.splice(after + 1);
        let curDistance = this.markers[this.markers.length - 1] - this.markers[this.markers.length - 2];
        this.markers.splice(after);
        this.calculateDistances();
        return curDistance;
    }

    progressMarker(curDistance: number): void {
        // let curDistance = this.markers[this.markers.length - 1] - this.markers[this.markers.length - 2];

        // this.removeMarker();

        let newDistance = this.smallestValidDistance(curDistance + 1);
        this.markers[this.markers.length - 1] = this.markers[this.markers.length - 2] + newDistance;
        this.calculateDistances();
    }

    smallestValidDistance(minDistance: number = 1): number {
        let i = minDistance;

        let marker = this.markers[this.markers.length - 1] + minDistance;

        do {
            // let exists = this.distances.find(x => x == i);

            // if (!exists)
            //     return i;

            // i++;

            let newDists = this.newDistancesByMarker(marker);

            if (!newDists.some(x => this.distances.find(y => y === x) != null))
                return i++;

            i++;
            marker++;
        }
        while (true);
    }

    newDistancesByMarker(marker: number): number[] {
        return this.markers.map(x => marker - x);
    }

    calculateDistances(): void {
        this.distances = [];

        for (var i = 0; i < this.markers.length - 1; i++)
            for (var j = i + 1; j < this.markers.length; j++)
                this.distances.push(this.markers[j] - this.markers[i]);

        // console.log(print());
    }

    print(): string {
        return `markers: ${this.markers.map(x => x + " ")}`; // distances: ${this.distances.map(x => x + " ")}`;
    }
}