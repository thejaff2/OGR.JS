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
            console.log(this.print(this.markers));
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
                    if (adjustPositionCur == halfOrder && this.length() >= halfMax) {
                        adjustPositionCur--;
                        break;
                    }
                    this.addMarker();
                    adjustPositionCur++;
                }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvbG9tYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBR0EsQ0FBQztRQUFELGFBQUM7SUFBRCxDQUhBLEFBR0MsSUFBQTtJQUhZLHdCQUFNO0lBS25CO1FBSUkscUJBQW1CLEtBQWEsRUFBVSxJQUFvQjtZQUFwQixxQkFBQSxFQUFBLFFBQWtCLENBQUMsQ0FBQztZQUE5RCxpQkFPQztZQVBrQixVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQVUsU0FBSSxHQUFKLElBQUksQ0FBZ0I7WUFIOUQsWUFBTyxHQUFhLEVBQUUsQ0FBQztZQUN2QixjQUFTLEdBQWEsRUFBRSxDQUFDO1lBR3JCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUU5QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUUxQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNwRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUVNLDBCQUFJLEdBQVgsVUFBWSxlQUF3QixFQUFFLFdBQW9CO1lBQ3RELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLElBQUksZUFBZSxHQUFHLGNBQWMsQ0FBQztnQkFDckQsZUFBZSxHQUFHLGNBQWMsQ0FBQztZQUVyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDYixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUU3QixJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRTdDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFN0MsSUFBSSxPQUFPLEdBQWUsRUFBRSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFZixHQUFHLENBQUM7Z0JBQ0EsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGVBQWUsRUFBRSxDQUFDO29CQUMxRSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQzdELGlCQUFpQixFQUFFLENBQUM7d0JBQ3BCLEtBQUssQ0FBQztvQkFDVixDQUFDO29CQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsaUJBQWlCLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBRXRDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBR3ZFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUM7d0JBQy9CLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBRWpCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFdkMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFFL0IsRUFBRSxDQUFDLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLGVBQWUsR0FBRyxjQUFjLENBQUM7d0JBQ2pDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsQ0FBQztnQkFDTCxDQUFDO2dCQVlELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztvQkFDN0MsaUJBQWlCLEVBQUUsQ0FBQztnQkFFeEIsTUFBTSxFQUFFLENBQUM7WUFDYixDQUFDLFFBQ00saUJBQWlCLEdBQUcsaUJBQWlCLEVBQUU7WUFHOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBRU0sMkJBQUssR0FBWixVQUFhLE9BQWlCO1lBQzFCLE1BQU0sQ0FBQyxjQUFZLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsRUFBRSxFQUFOLENBQU0sQ0FBRyxDQUFDO1FBQ2xELENBQUM7UUFFTyw0QkFBTSxHQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVPLCtCQUFTLEdBQWpCLFVBQWtCLFdBQXVCO1lBQXZCLDRCQUFBLEVBQUEsZUFBdUI7WUFDckMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUIsQ0FBQztRQUVPLGtDQUFZLEdBQXBCO1lBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBRU8sa0NBQVksR0FBcEIsVUFBcUIsS0FBaUI7WUFBakIsc0JBQUEsRUFBQSxTQUFpQjtZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUVPLG9DQUFjLEdBQXRCLFVBQXVCLFdBQW1CO1lBS3RDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUM1RixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5QixDQUFDO1FBRU8sMkNBQXFCLEdBQTdCLFVBQThCLFdBQXVCO1lBQXJELGlCQWVDO1lBZjZCLDRCQUFBLEVBQUEsZUFBdUI7WUFDakQsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO1lBRXBCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO1lBRWpFLEdBQUcsQ0FBQztnQkFDQSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRWpELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsRUFBUCxDQUFPLENBQUMsSUFBSSxJQUFJLEVBQXpDLENBQXlDLENBQUMsQ0FBQztvQkFDL0QsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUVmLENBQUMsRUFBRSxDQUFDO2dCQUNKLE1BQU0sRUFBRSxDQUFDO1lBQ2IsQ0FBQyxRQUNNLElBQUksRUFBRTtRQUNqQixDQUFDO1FBRU8sMENBQW9CLEdBQTVCLFVBQTZCLE1BQWM7WUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxHQUFHLENBQUMsRUFBVixDQUFVLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRU8sd0NBQWtCLEdBQTFCO1lBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUM1QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR25FLENBQUM7UUFHTCxrQkFBQztJQUFELENBN0pBLEFBNkpDLElBQUE7SUE3Slksa0NBQVciLCJmaWxlIjoiZ29sb21iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdvbG9tYiB7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvbG9tYlJ1bGVyIHtcclxuICAgIG1hcmtlcnM6IG51bWJlcltdID0gW107XHJcbiAgICBkaXN0YW5jZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG9yZGVyOiBudW1iZXIsIHByaXZhdGUgc3R1YjogbnVtYmVyW10gPSBbMF0pIHtcclxuICAgICAgICBzdHViLmZvckVhY2goeCA9PiB0aGlzLm1hcmtlcnMucHVzaCh4KSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlRGlzdGFuY2VzKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1hcmtlcnMubGVuZ3RoIC0gMTsgaSA8IG9yZGVyIC0gMTsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzLmFkZE1hcmtlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kKG1heFNlYXJjaExlbmd0aD86IG51bWJlciwgc3RvcEF0T3JkZXI/OiBudW1iZXIpOiBudW1iZXJbXVtdIHtcclxuICAgICAgICBsZXQgc2hvcnRlc3RMZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJpbnQodGhpcy5tYXJrZXJzKSk7XHJcblxyXG4gICAgICAgIGlmICghbWF4U2VhcmNoTGVuZ3RoIHx8IG1heFNlYXJjaExlbmd0aCA+IHNob3J0ZXN0TGVuZ3RoKVxyXG4gICAgICAgICAgICBtYXhTZWFyY2hMZW5ndGggPSBzaG9ydGVzdExlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKCFzdG9wQXRPcmRlcilcclxuICAgICAgICAgICAgc3RvcEF0T3JkZXIgPSB0aGlzLm9yZGVyO1xyXG5cclxuICAgICAgICBsZXQgYWRqdXN0UG9zaXRpb25DdXIgPSB0aGlzLm9yZGVyIC0gMjtcclxuICAgICAgICBsZXQgYWRqdXN0UG9zaXRpb25NaW4gPSB0aGlzLnN0dWIubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgbGV0IGhhbGZPcmRlciA9IE1hdGguY2VpbCh0aGlzLm9yZGVyIC8gMikgLSAxO1xyXG4gICAgICAgIGxldCBoYWxmTWF4ID0gTWF0aC5jZWlsKG1heFNlYXJjaExlbmd0aCAvIDIpO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0czogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLm1hcmtlcnMubWFwKHggPT4geCkpO1xyXG5cclxuICAgICAgICBsZXQgY3ljbGVzID0gMDtcclxuXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBsZXQgcHJldkRpc3QgPSB0aGlzLmNsZWFyTWFya2VycyhhZGp1c3RQb3NpdGlvbkN1cik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTWFya2VyKHByZXZEaXN0ICsgMSk7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYXJrZXJzLmxlbmd0aCA8IHN0b3BBdE9yZGVyICYmIHRoaXMubGVuZ3RoKCkgPCBtYXhTZWFyY2hMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhZGp1c3RQb3NpdGlvbkN1ciA9PSBoYWxmT3JkZXIgJiYgdGhpcy5sZW5ndGgoKSA+PSBoYWxmTWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0UG9zaXRpb25DdXItLTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1hcmtlcigpO1xyXG4gICAgICAgICAgICAgICAgYWRqdXN0UG9zaXRpb25DdXIrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmludCh0aGlzLm1hcmtlcnMpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoID09IHRoaXMub3JkZXIgJiYgdGhpcy5sZW5ndGgoKSA8PSBzaG9ydGVzdExlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcmludCh0aGlzLm1hcmtlcnMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGgoKSA8IHNob3J0ZXN0TGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5tYXJrZXJzLm1hcCh4ID0+IHgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzaG9ydGVzdExlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1heFNlYXJjaExlbmd0aCA+IHNob3J0ZXN0TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4U2VhcmNoTGVuZ3RoID0gc2hvcnRlc3RMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFsZk1heCA9IE1hdGguY2VpbChtYXhTZWFyY2hMZW5ndGggLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHJ1bGVyLm1hcmtlcnMubGVuZ3RoID4gNSAmJiBcclxuICAgICAgICAgICAgLy8gICAgIHJ1bGVyLm1hcmtlcnNbMV0gPT0gMSAmJiBcclxuICAgICAgICAgICAgLy8gICAgIHJ1bGVyLm1hcmtlcnNbMl0gPT0gNSAmJiBcclxuICAgICAgICAgICAgLy8gICAgIHJ1bGVyLm1hcmtlcnNbM10gPT0gMTIgJiYgXHJcbiAgICAgICAgICAgIC8vICAgICBydWxlci5tYXJrZXJzWzRdID09IDIyXHJcbiAgICAgICAgICAgIC8vICAgICAmJiBydWxlci5tYXJrZXJzWzVdID4gNDQpIFxyXG4gICAgICAgICAgICAvLyAgICAgIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCB4YyA9IFwic2RmXCI7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoID09IGFkanVzdFBvc2l0aW9uQ3VyICsgMSlcclxuICAgICAgICAgICAgICAgIGFkanVzdFBvc2l0aW9uQ3VyLS07XHJcblxyXG4gICAgICAgICAgICBjeWNsZXMrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGFkanVzdFBvc2l0aW9uQ3VyID4gYWRqdXN0UG9zaXRpb25NaW4pO1xyXG4gICAgICAgIC8vIHdoaWxlICh0aGlzLmNvdW50IDwgOTAwMDAwMDAgJiYgYWRqdXN0UG9zaXRpb24gPiAwKTtcclxuXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKFtjeWNsZXNdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByaW50KG1hcmtlcnM6IG51bWJlcltdKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYG1hcmtlcnM6ICR7bWFya2Vycy5tYXAoeCA9PiB4ICsgXCJcIil9YDsgLy8gZGlzdGFuY2VzOiAke3RoaXMuZGlzdGFuY2VzLm1hcCh4ID0+IHggKyBcIiBcIil9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlcnNbdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTWFya2VyKG1pbkRpc3RhbmNlOiBudW1iZXIgPSAxKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5ld0Rpc3RhbmNlID0gdGhpcy5zbWFsbGVzdFZhbGlkRGlzdGFuY2UobWluRGlzdGFuY2UpO1xyXG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKHRoaXMubWFya2Vyc1t0aGlzLm1hcmtlcnMubGVuZ3RoIC0gMV0gKyBuZXdEaXN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVEaXN0YW5jZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZU1hcmtlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsZWFyTWFya2Vycyh0aGlzLm1hcmtlcnMubGVuZ3RoIC0gMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhck1hcmtlcnMoYWZ0ZXI6IG51bWJlciA9IDApOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMubWFya2Vycy5zcGxpY2UoYWZ0ZXIgKyAxKTtcclxuICAgICAgICBsZXQgY3VyRGlzdGFuY2UgPSB0aGlzLm1hcmtlcnNbdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDFdIC0gdGhpcy5tYXJrZXJzW3RoaXMubWFya2Vycy5sZW5ndGggLSAyXTtcclxuICAgICAgICB0aGlzLm1hcmtlcnMuc3BsaWNlKGFmdGVyKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlcygpO1xyXG4gICAgICAgIHJldHVybiBjdXJEaXN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2dyZXNzTWFya2VyKGN1ckRpc3RhbmNlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBsZXQgY3VyRGlzdGFuY2UgPSB0aGlzLm1hcmtlcnNbdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDFdIC0gdGhpcy5tYXJrZXJzW3RoaXMubWFya2Vycy5sZW5ndGggLSAyXTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5yZW1vdmVNYXJrZXIoKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld0Rpc3RhbmNlID0gdGhpcy5zbWFsbGVzdFZhbGlkRGlzdGFuY2UoY3VyRGlzdGFuY2UgKyAxKTtcclxuICAgICAgICB0aGlzLm1hcmtlcnNbdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDFdID0gdGhpcy5tYXJrZXJzW3RoaXMubWFya2Vycy5sZW5ndGggLSAyXSArIG5ld0Rpc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlRGlzdGFuY2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzbWFsbGVzdFZhbGlkRGlzdGFuY2UobWluRGlzdGFuY2U6IG51bWJlciA9IDEpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBpID0gbWluRGlzdGFuY2U7XHJcblxyXG4gICAgICAgIGxldCBtYXJrZXIgPSB0aGlzLm1hcmtlcnNbdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDFdICsgbWluRGlzdGFuY2U7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGV0IG5ld0Rpc3RzID0gdGhpcy5uZXdEaXN0YW5jZXNCeU1hcmtlcihtYXJrZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFuZXdEaXN0cy5zb21lKHggPT4gdGhpcy5kaXN0YW5jZXMuZmluZCh5ID0+IHkgPT09IHgpICE9IG51bGwpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGkrKztcclxuXHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgbWFya2VyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5ld0Rpc3RhbmNlc0J5TWFya2VyKG1hcmtlcjogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlcnMubWFwKHggPT4gbWFya2VyIC0geCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVEaXN0YW5jZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1hcmtlcnMubGVuZ3RoIC0gMTsgaSsrKVxyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCB0aGlzLm1hcmtlcnMubGVuZ3RoOyBqKyspXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RhbmNlcy5wdXNoKHRoaXMubWFya2Vyc1tqXSAtIHRoaXMubWFya2Vyc1tpXSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByaW50KCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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