export class Golomb {


}

export class GolombRuler {
    markers: number[] = [];
    distances: number[] = [];

    constructor(public order: number, private stub: number[] = [0]) {
        stub.forEach(x => this.markers.push(x), this);

        this.calculateDistances();

        for (let i = this.markers.length - 1; i < order - 1; i++)
            this.addMarker();
    }

    public find(maxSearchLength?: number, stopAtOrder?: number): number[][] {
        let shortestLength = this.length();
        // console.log(this.print(this.markers));

        if (!maxSearchLength || maxSearchLength > shortestLength)
            maxSearchLength = shortestLength;

        if (!stopAtOrder)
            stopAtOrder = this.order;

        let adjustPositionCur = this.order - 2;
        let adjustPositionMin = this.stub.length - 1;

        let halfOrder = Math.ceil(this.order / 2) - 1;
        let halfMax = Math.ceil(maxSearchLength / 2);

        let results: number[][] = [];
        results.push(this.markers.map(x => x));

        let cycles = 0;

        do {
            let prevDist = this.clearMarkers(adjustPositionCur);
            this.addMarker(prevDist + 1);

            while (this.markers.length < stopAtOrder && this.length() < maxSearchLength) {
                if (adjustPositionCur <= halfOrder && this.length() >= halfMax) {
                    adjustPositionCur--;
                    break;
                }

                this.addMarker();
                adjustPositionCur++;
            }

            if (this.markers.length == stopAtOrder)
                console.log(this.print(this.markers));

            if (this.markers.length == this.order && this.length() <= shortestLength) {
                // console.log(this.print(this.markers));

                if (this.length() < shortestLength)
                    results = [];

                results.push(this.markers.map(x => x));

                shortestLength = this.length();

                if (maxSearchLength > shortestLength) {
                    maxSearchLength = shortestLength;
                    halfMax = Math.ceil(maxSearchLength / 2);
                }
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

            if (this.markers.length == adjustPositionCur + 1)
                adjustPositionCur--;

            cycles++;
        }
        while (adjustPositionCur > adjustPositionMin);
        // while (this.count < 90000000 && adjustPosition > 0);

        results.push([cycles]);

        return results;
    }

    public print(markers: number[]): string {
        return `markers: ${markers.map(x => x + "")}`; // distances: ${this.distances.map(x => x + " ")}`;
    }

    private length(): number {
        return this.markers[this.markers.length - 1];
    }

    private addMarker(minDistance: number = 1): void {
        let newDistance = this.smallestValidDistance(minDistance);
        this.markers.push(this.markers[this.markers.length - 1] + newDistance);
        this.calculateDistances();
    }

    private removeMarker(): void {
        this.clearMarkers(this.markers.length - 2);
    }

    private clearMarkers(after: number = 0): number {
        this.markers.splice(after + 1);
        let curDistance = this.markers[this.markers.length - 1] - this.markers[this.markers.length - 2];
        this.markers.splice(after);
        this.calculateDistances();
        return curDistance;
    }

    private progressMarker(curDistance: number): void {
        // let curDistance = this.markers[this.markers.length - 1] - this.markers[this.markers.length - 2];

        // this.removeMarker();

        let newDistance = this.smallestValidDistance(curDistance + 1);
        this.markers[this.markers.length - 1] = this.markers[this.markers.length - 2] + newDistance;
        this.calculateDistances();
    }

    private smallestValidDistance(minDistance: number = 1): number {
        let i = minDistance;

        let marker = this.markers[this.markers.length - 1] + minDistance;

        do {
            let newDists = this.newDistancesByMarker(marker);

            if (!newDists.some(x => this.distances.find(y => y === x) != null))
                return i++;

            i++;
            marker++;
        }
        while (true);
    }

    private newDistancesByMarker(marker: number): number[] {
        return this.markers.map(x => marker - x);
    }

    private calculateDistances(): void {
        this.distances = [];

        for (var i = 0; i < this.markers.length - 1; i++)
            for (var j = i + 1; j < this.markers.length; j++)
                this.distances.push(this.markers[j] - this.markers[i]);

        // console.log(print());
    }


}