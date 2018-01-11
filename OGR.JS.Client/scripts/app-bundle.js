define('app',["require", "exports", "./golomb"], function (require, exports, golomb_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        App.prototype.attached = function () {
            this.message = "generating";
            console.log("start: " + new Date());
            var golomb = new golomb_1.GolombRuler(7);
            var rulers = golomb.find(25, 4);
            rulers.forEach(function (r) { return console.log(golomb.print(r)); }, this);
            this.message = "done";
            console.log("finished: " + new Date());
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUFBO1lBQ0UsWUFBTyxHQUFHLGNBQWMsQ0FBQztRQThCM0IsQ0FBQztRQTVCQyxzQkFBUSxHQUFSO1lBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7WUFRNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXBDLElBQUksTUFBTSxHQUFHLElBQUksb0JBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBR3pDLENBQUM7UUFTSCxVQUFDO0lBQUQsQ0EvQkEsQUErQkMsSUFBQTtJQS9CWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2xvbWIsIEdvbG9tYlJ1bGVyIH0gZnJvbSBcIi4vZ29sb21iXCI7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZVdvcmtlciwgSVR5cGVkV29ya2VyIH0gZnJvbSAndHlwZWQtd2ViLXdvcmtlcnMnXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBtZXNzYWdlID0gJ0hlbGxvIFdvcmxkISc7XHJcblxyXG4gIGF0dGFjaGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJnZW5lcmF0aW5nXCI7XHJcblxyXG4gICAgLy8gbGV0IHR5cGVkV29ya2VyOiBJVHlwZWRXb3JrZXI8bnVtYmVyLCBudW1iZXI+ID0gY3JlYXRlV29ya2VyKHRoaXMud29ya0ZuLCAobiA6IG51bWJlcikgPT4gY29uc29sZS5sb2cobikpO1xyXG5cclxuICAgIC8vIHR5cGVkV29ya2VyLnBvc3RNZXNzYWdlKDQ1KTtcclxuXHJcbiAgICAvLyBsZXQgZ29sb21iID0gbmV3IEdvbG9tYlJ1bGVyKDgsIFswLCAxLCA0LCA5LCAxNV0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwic3RhcnQ6IFwiICsgbmV3IERhdGUoKSk7XHJcblxyXG4gICAgbGV0IGdvbG9tYiA9IG5ldyBHb2xvbWJSdWxlcig3KTtcclxuICAgIGxldCBydWxlcnMgPSBnb2xvbWIuZmluZCgyNSwgNCk7XHJcbiAgICBydWxlcnMuZm9yRWFjaChyID0+IGNvbnNvbGUubG9nKGdvbG9tYi5wcmludChyKSksIHRoaXMpO1xyXG5cclxuICAgIHRoaXMubWVzc2FnZSA9IFwiZG9uZVwiO1xyXG4gICAgY29uc29sZS5sb2coXCJmaW5pc2hlZDogXCIgKyBuZXcgRGF0ZSgpKTtcclxuXHJcbiAgICAvLyB0aGlzLm1lc3NhZ2UgPSBcImRvbmUgXCIgKyBHb2xvbWIuY291bnQ7XHJcbiAgfVxyXG5cclxuICAvLyB3b3JrRm4oaW5wdXQ6IG51bWJlciwgY2FsbGJhY2s6IChjb3VudDogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgLy8gICAvLyBsZXQgZ29sb21iID0gbmV3IEdvbG9tYigpO1xyXG5cclxuICAvLyAgIC8vIGNhbGxiYWNrKGdvbG9tYi5nZW5lcmF0ZSg3LCA1MCkpO1xyXG5cclxuICAvLyAgIGNhbGxiYWNrKDQ1KTtcclxuICAvLyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZGVidWc6IHRydWUsXHJcbiAgdGVzdGluZzogdHJ1ZVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('golomb',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Golomb = (function () {
        function Golomb() {
        }
        return Golomb;
    }());
    exports.Golomb = Golomb;
    var GolombRuler = (function () {
        function GolombRuler(order, stub) {
            if (stub === void 0) { stub = [0]; }
            var _this = this;
            this.order = order;
            this.stub = stub;
            this.markers = [];
            this.distances = [];
            stub.forEach(function (x) { return _this.markers.push(x); }, this);
            this.calculateDistances();
            for (var i = this.markers.length - 1; i < order - 1; i++)
                this.addMarker();
        }
        GolombRuler.prototype.find = function (maxSearchLength, stopAtOrder) {
            var shortestLength = this.length();
            if (!maxSearchLength || maxSearchLength > shortestLength)
                maxSearchLength = shortestLength;
            if (!stopAtOrder)
                stopAtOrder = this.order;
            var adjustPositionCur = this.order - 2;
            var adjustPositionMin = this.stub.length - 1;
            var halfOrder = Math.ceil(this.order / 2) - 1;
            var halfMax = Math.ceil(maxSearchLength / 2);
            var results = [];
            results.push(this.markers.map(function (x) { return x; }));
            var cycles = 0;
            do {
                var prevDist = this.clearMarkers(adjustPositionCur);
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
                    if (this.length() < shortestLength)
                        results = [];
                    results.push(this.markers.map(function (x) { return x; }));
                    shortestLength = this.length();
                    if (maxSearchLength > shortestLength) {
                        maxSearchLength = shortestLength;
                        halfMax = Math.ceil(maxSearchLength / 2);
                    }
                }
                if (this.markers.length == adjustPositionCur + 1)
                    adjustPositionCur--;
                cycles++;
            } while (adjustPositionCur > adjustPositionMin);
            results.push([cycles]);
            return results;
        };
        GolombRuler.prototype.print = function (markers) {
            return "markers: " + markers.map(function (x) { return x + ""; });
        };
        GolombRuler.prototype.length = function () {
            return this.markers[this.markers.length - 1];
        };
        GolombRuler.prototype.addMarker = function (minDistance) {
            if (minDistance === void 0) { minDistance = 1; }
            var newDistance = this.smallestValidDistance(minDistance);
            this.markers.push(this.markers[this.markers.length - 1] + newDistance);
            this.calculateDistances();
        };
        GolombRuler.prototype.removeMarker = function () {
            this.clearMarkers(this.markers.length - 2);
        };
        GolombRuler.prototype.clearMarkers = function (after) {
            if (after === void 0) { after = 0; }
            this.markers.splice(after + 1);
            var curDistance = this.markers[this.markers.length - 1] - this.markers[this.markers.length - 2];
            this.markers.splice(after);
            this.calculateDistances();
            return curDistance;
        };
        GolombRuler.prototype.progressMarker = function (curDistance) {
            var newDistance = this.smallestValidDistance(curDistance + 1);
            this.markers[this.markers.length - 1] = this.markers[this.markers.length - 2] + newDistance;
            this.calculateDistances();
        };
        GolombRuler.prototype.smallestValidDistance = function (minDistance) {
            var _this = this;
            if (minDistance === void 0) { minDistance = 1; }
            var i = minDistance;
            var marker = this.markers[this.markers.length - 1] + minDistance;
            do {
                var newDists = this.newDistancesByMarker(marker);
                if (!newDists.some(function (x) { return _this.distances.find(function (y) { return y === x; }) != null; }))
                    return i++;
                i++;
                marker++;
            } while (true);
        };
        GolombRuler.prototype.newDistancesByMarker = function (marker) {
            return this.markers.map(function (x) { return marker - x; });
        };
        GolombRuler.prototype.calculateDistances = function () {
            this.distances = [];
            for (var i = 0; i < this.markers.length - 1; i++)
                for (var j = i + 1; j < this.markers.length; j++)
                    this.distances.push(this.markers[j] - this.markers[i]);
        };
        return GolombRuler;
    }());
    exports.GolombRuler = GolombRuler;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sR0FBRyxDQUFDLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVPLHdDQUFrQixHQUExQjtZQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBRXBCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDNUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUduRSxDQUFDO1FBR0wsa0JBQUM7SUFBRCxDQTlKQSxBQThKQyxJQUFBO0lBOUpZLGtDQUFXIiwiZmlsZSI6ImdvbG9tYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHb2xvbWIge1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb2xvbWJSdWxlciB7XHJcbiAgICBtYXJrZXJzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgZGlzdGFuY2VzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvcmRlcjogbnVtYmVyLCBwcml2YXRlIHN0dWI6IG51bWJlcltdID0gWzBdKSB7XHJcbiAgICAgICAgc3R1Yi5mb3JFYWNoKHggPT4gdGhpcy5tYXJrZXJzLnB1c2goeCksIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlcygpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDE7IGkgPCBvcmRlciAtIDE7IGkrKylcclxuICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluZChtYXhTZWFyY2hMZW5ndGg/OiBudW1iZXIsIHN0b3BBdE9yZGVyPzogbnVtYmVyKTogbnVtYmVyW11bXSB7XHJcbiAgICAgICAgbGV0IHNob3J0ZXN0TGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByaW50KHRoaXMubWFya2VycykpO1xyXG5cclxuICAgICAgICBpZiAoIW1heFNlYXJjaExlbmd0aCB8fCBtYXhTZWFyY2hMZW5ndGggPiBzaG9ydGVzdExlbmd0aClcclxuICAgICAgICAgICAgbWF4U2VhcmNoTGVuZ3RoID0gc2hvcnRlc3RMZW5ndGg7XHJcblxyXG4gICAgICAgIGlmICghc3RvcEF0T3JkZXIpXHJcbiAgICAgICAgICAgIHN0b3BBdE9yZGVyID0gdGhpcy5vcmRlcjtcclxuXHJcbiAgICAgICAgbGV0IGFkanVzdFBvc2l0aW9uQ3VyID0gdGhpcy5vcmRlciAtIDI7XHJcbiAgICAgICAgbGV0IGFkanVzdFBvc2l0aW9uTWluID0gdGhpcy5zdHViLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGxldCBoYWxmT3JkZXIgPSBNYXRoLmNlaWwodGhpcy5vcmRlciAvIDIpIC0gMTtcclxuICAgICAgICBsZXQgaGFsZk1heCA9IE1hdGguY2VpbChtYXhTZWFyY2hMZW5ndGggLyAyKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdHM6IG51bWJlcltdW10gPSBbXTtcclxuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5tYXJrZXJzLm1hcCh4ID0+IHgpKTtcclxuXHJcbiAgICAgICAgbGV0IGN5Y2xlcyA9IDA7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGV0IHByZXZEaXN0ID0gdGhpcy5jbGVhck1hcmtlcnMoYWRqdXN0UG9zaXRpb25DdXIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE1hcmtlcihwcmV2RGlzdCArIDEpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubWFya2Vycy5sZW5ndGggPCBzdG9wQXRPcmRlciAmJiB0aGlzLmxlbmd0aCgpIDwgbWF4U2VhcmNoTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRqdXN0UG9zaXRpb25DdXIgPD0gaGFsZk9yZGVyICYmIHRoaXMubGVuZ3RoKCkgPj0gaGFsZk1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdFBvc2l0aW9uQ3VyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIoKTtcclxuICAgICAgICAgICAgICAgIGFkanVzdFBvc2l0aW9uQ3VyKys7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoID09IHN0b3BBdE9yZGVyKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmludCh0aGlzLm1hcmtlcnMpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoID09IHRoaXMub3JkZXIgJiYgdGhpcy5sZW5ndGgoKSA8PSBzaG9ydGVzdExlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcmludCh0aGlzLm1hcmtlcnMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGgoKSA8IHNob3J0ZXN0TGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5tYXJrZXJzLm1hcCh4ID0+IHgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzaG9ydGVzdExlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1heFNlYXJjaExlbmd0aCA+IHNob3J0ZXN0TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4U2VhcmNoTGVuZ3RoID0gc2hvcnRlc3RMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFsZk1heCA9IE1hdGguY2VpbChtYXhTZWFyY2hMZW5ndGggLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHJ1bGVyLm1hcmtlcnMubGVuZ3RoID4gNSAmJiBcclxuICAgICAgICAgICAgLy8gICAgIHJ1bGVyLm1hcmtlcnNbMV0gPT0gMSAmJiBcclxuICAgICAgICAgICAgLy8gICAgIHJ1bGVyLm1hcmtlcnNbMl0gPT0gNSAmJiBcclxuICAgICAgICAgICAgLy8gICAgIHJ1bGVyLm1hcmtlcnNbM10gPT0gMTIgJiYgXHJcbiAgICAgICAgICAgIC8vICAgICBydWxlci5tYXJrZXJzWzRdID09IDIyXHJcbiAgICAgICAgICAgIC8vICAgICAmJiBydWxlci5tYXJrZXJzWzVdID4gNDQpIFxyXG4gICAgICAgICAgICAvLyAgICAgIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCB4YyA9IFwic2RmXCI7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoID09IGFkanVzdFBvc2l0aW9uQ3VyICsgMSlcclxuICAgICAgICAgICAgICAgIGFkanVzdFBvc2l0aW9uQ3VyLS07XHJcblxyXG4gICAgICAgICAgICBjeWNsZXMrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGFkanVzdFBvc2l0aW9uQ3VyID4gYWRqdXN0UG9zaXRpb25NaW4pO1xyXG4gICAgICAgIC8vIHdoaWxlICh0aGlzLmNvdW50IDwgOTAwMDAwMDAgJiYgYWRqdXN0UG9zaXRpb24gPiAwKTtcclxuXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKFtjeWNsZXNdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByaW50KG1hcmtlcnM6IG51bWJlcltdKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYG1hcmtlcnM6ICR7bWFya2Vycy5tYXAoeCA9PiB4ICsgXCJcIil9YDsgLy8gZGlzdGFuY2VzOiAke3RoaXMuZGlzdGFuY2VzLm1hcCh4ID0+IHggKyBcIiBcIil9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlcnNbdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTWFya2VyKG1pbkRpc3RhbmNlOiBudW1iZXIgPSAxKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5ld0Rpc3RhbmNlID0gdGhpcy5zbWFsbGVzdFZhbGlkRGlzdGFuY2UobWluRGlzdGFuY2UpO1xyXG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKHRoaXMubWFya2Vyc1t0aGlzLm1hcmtlcnMubGVuZ3RoIC0gMV0gKyBuZXdEaXN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVEaXN0YW5jZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZU1hcmtlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsZWFyTWFya2Vycyh0aGlzLm1hcmtlcnMubGVuZ3RoIC0gMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhck1hcmtlcnMoYWZ0ZXI6IG51bWJlciA9IDApOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMubWFya2Vycy5zcGxpY2UoYWZ0ZXIgKyAxKTtcclxuICAgICAgICBsZXQgY3VyRGlzdGFuY2UgPSB0aGlzLm1hcmtlcnNbdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDFdIC0gdGhpcy5tYXJrZXJzW3RoaXMubWFya2Vycy5sZW5ndGggLSAyXTtcclxuICAgICAgICB0aGlzLm1hcmtlcnMuc3BsaWNlKGFmdGVyKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlcygpO1xyXG4gICAgICAgIHJldHVybiBjdXJEaXN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2dyZXNzTWFya2VyKGN1ckRpc3RhbmNlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBsZXQgY3VyRGlzdGFuY2UgPSB0aGlzLm1hcmtlcnNbdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDFdIC0gdGhpcy5tYXJrZXJzW3RoaXMubWFya2Vycy5sZW5ndGggLSAyXTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5yZW1vdmVNYXJrZXIoKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld0Rpc3RhbmNlID0gdGhpcy5zbWFsbGVzdFZhbGlkRGlzdGFuY2UoY3VyRGlzdGFuY2UgKyAxKTtcclxuICAgICAgICB0aGlzLm1hcmtlcnNbdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDFdID0gdGhpcy5tYXJrZXJzW3RoaXMubWFya2Vycy5sZW5ndGggLSAyXSArIG5ld0Rpc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlRGlzdGFuY2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzbWFsbGVzdFZhbGlkRGlzdGFuY2UobWluRGlzdGFuY2U6IG51bWJlciA9IDEpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBpID0gbWluRGlzdGFuY2U7XHJcblxyXG4gICAgICAgIGxldCBtYXJrZXIgPSB0aGlzLm1hcmtlcnNbdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDFdICsgbWluRGlzdGFuY2U7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGV0IG5ld0Rpc3RzID0gdGhpcy5uZXdEaXN0YW5jZXNCeU1hcmtlcihtYXJrZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFuZXdEaXN0cy5zb21lKHggPT4gdGhpcy5kaXN0YW5jZXMuZmluZCh5ID0+IHkgPT09IHgpICE9IG51bGwpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGkrKztcclxuXHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgbWFya2VyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5ld0Rpc3RhbmNlc0J5TWFya2VyKG1hcmtlcjogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlcnMubWFwKHggPT4gbWFya2VyIC0geCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVEaXN0YW5jZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1hcmtlcnMubGVuZ3RoIC0gMTsgaSsrKVxyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCB0aGlzLm1hcmtlcnMubGVuZ3RoOyBqKyspXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RhbmNlcy5wdXNoKHRoaXMubWFya2Vyc1tqXSAtIHRoaXMubWFya2Vyc1tpXSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByaW50KCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXHJcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xyXG4gIGF1cmVsaWEudXNlXHJcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcclxuXHJcbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XHJcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcclxuICB9XHJcblxyXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XHJcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtdGVzdGluZycpO1xyXG4gIH1cclxuXHJcbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24pIHtcclxuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1></template>"; });
//# sourceMappingURL=app-bundle.js.map