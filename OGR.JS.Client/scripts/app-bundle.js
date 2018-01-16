define('app',["require", "exports", "./golomb"], function (require, exports, golomb_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        App.prototype.attached = function () {
            this.message = "cores: " + window.navigator.hardwareConcurrency;
            console.log("start: " + new Date());
            var golomb = new golomb_1.GolombRuler(11, 90);
            console.log("finished: " + new Date());
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1lBQ0UsWUFBTyxHQUFHLGNBQWMsQ0FBQztRQXlFM0IsQ0FBQztRQXZFQyxzQkFBUSxHQUFSO1lBQ00sSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQztZQVFwRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFFcEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxvQkFBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQWdEckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBR3pDLENBQUM7UUFTSCxVQUFDO0lBQUQsQ0ExRUEsQUEwRUMsSUFBQTtJQTFFWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2xvbWIsIEdvbG9tYlJ1bGVyIH0gZnJvbSBcIi4vZ29sb21iXCI7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZVdvcmtlciwgSVR5cGVkV29ya2VyIH0gZnJvbSAndHlwZWQtd2ViLXdvcmtlcnMnXHJcbmltcG9ydCAqIGFzIGZpbmdlcnByaW50IGZyb20gJ2ZpbmdlcnByaW50anMyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIG1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcclxuXHJcbiAgYXR0YWNoZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJjb3JlczogXCIgKyB3aW5kb3cubmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3k7XHJcblxyXG4gICAgLy8gbGV0IHR5cGVkV29ya2VyOiBJVHlwZWRXb3JrZXI8bnVtYmVyLCBudW1iZXI+ID0gY3JlYXRlV29ya2VyKHRoaXMud29ya0ZuLCAobiA6IG51bWJlcikgPT4gY29uc29sZS5sb2cobikpO1xyXG5cclxuICAgIC8vIHR5cGVkV29ya2VyLnBvc3RNZXNzYWdlKDQ1KTtcclxuXHJcbiAgICAvLyBsZXQgZ29sb21iID0gbmV3IEdvbG9tYlJ1bGVyKDgsIFswLCAxLCAzLCA5LCAxNV0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwic3RhcnQ6IFwiICsgbmV3IERhdGUoKSk7XHJcblxyXG4gICAgbGV0IGdvbG9tYiA9IG5ldyBHb2xvbWJSdWxlcigxMSwgOTApO1xyXG4gICAgLy8gbGV0IHJ1bGVycyA9IGdvbG9tYi5leGhhdXN0KFswLCAxLCAzXSk7ICAgICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tXCIpO1xyXG4gICAgLy8gcnVsZXJzLmZvckVhY2gociA9PiBjb25zb2xlLmxvZyhnb2xvbWIucHJpbnQocikpLCB0aGlzKTtcclxuXHJcbiAgICAvLyBsZXQgbmV4dHN0dWIgPSBnb2xvbWIubmV4dFN0dWIoMywgWzAsIDEwLCAxMV0pO1xyXG4gICAgLy8gaWYgKG5leHRzdHViICE9IG51bGwpXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGdvbG9tYi5wcmludChuZXh0c3R1YikpO1xyXG5cclxuICAgIC8vIG5leHRzdHViID0gZ29sb21iLm5leHRTdHViKDMsIG5leHRzdHViKTtcclxuICAgIC8vIGlmIChuZXh0c3R1YiAhPSBudWxsKVxyXG4gICAgLy8gICBjb25zb2xlLmxvZyhnb2xvbWIucHJpbnQobmV4dHN0dWIpKTtcclxuXHJcbiAgICAvLyBuZXh0c3R1YiA9IGdvbG9tYi5uZXh0U3R1YigzLCBuZXh0c3R1Yik7XHJcbiAgICAvLyBpZiAobmV4dHN0dWIgIT0gbnVsbClcclxuICAgIC8vICAgY29uc29sZS5sb2coZ29sb21iLnByaW50KG5leHRzdHViKSk7XHJcblxyXG4gICAgLy8gbmV4dHN0dWIgPSBnb2xvbWIubmV4dFN0dWIoMywgbmV4dHN0dWIpO1xyXG4gICAgLy8gaWYgKG5leHRzdHViICE9IG51bGwpXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGdvbG9tYi5wcmludChuZXh0c3R1YikpO1xyXG5cclxuICAgIC8vIG5leHRzdHViID0gZ29sb21iLm5leHRTdHViKDMsIG5leHRzdHViKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdvbG9tYi5wcmludChuZXh0c3R1YikpO1xyXG5cclxuICAgIC8vIG5leHRzdHViID0gZ29sb21iLm5leHRTdHViKDMsIG5leHRzdHViKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdvbG9tYi5wcmludChuZXh0c3R1YikpO1xyXG5cclxuICAgIC8vIG5leHRzdHViID0gZ29sb21iLm5leHRTdHViKDMsIG5leHRzdHViKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdvbG9tYi5wcmludChuZXh0c3R1YikpO1xyXG5cclxuICAgIC8vIGxldCBuZXh0c3R1YiA9IGdvbG9tYi5maXJzdFN0dWIoMyk7XHJcblxyXG4gICAgLy8gZG8geyAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAvLyAgIGlmIChuZXh0c3R1YiAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJTVFVCOiBcIiArIGdvbG9tYi5wcmludChuZXh0c3R1YikpO1xyXG4gICAgLy8gICAgIGxldCBydWxlcnMgPSBnb2xvbWIuZXhoYXVzdChuZXh0c3R1Yik7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJTLS0tLS1cIik7XHJcbiAgICAvLyAgICAgcnVsZXJzLmZvckVhY2gociA9PiBjb25zb2xlLmxvZyhnb2xvbWIucHJpbnQocikpLCB0aGlzKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkYtLS0tLVwiKTtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vICAgbmV4dHN0dWIgPSBnb2xvbWIubmV4dFN0dWIoMywgbmV4dHN0dWIpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gd2hpbGUgKG5leHRzdHViICE9IG51bGwpO1xyXG5cclxuICAgIC8vIHRoaXMubWVzc2FnZSA9IFwiZG9uZVwiO1xyXG4gICAgY29uc29sZS5sb2coXCJmaW5pc2hlZDogXCIgKyBuZXcgRGF0ZSgpKTtcclxuXHJcbiAgICAvLyB0aGlzLm1lc3NhZ2UgPSBcImRvbmUgXCIgKyBHb2xvbWIuY291bnQ7XHJcbiAgfVxyXG5cclxuICAvLyB3b3JrRm4oaW5wdXQ6IG51bWJlciwgY2FsbGJhY2s6IChjb3VudDogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgLy8gICAvLyBsZXQgZ29sb21iID0gbmV3IEdvbG9tYigpO1xyXG5cclxuICAvLyAgIC8vIGNhbGxiYWNrKGdvbG9tYi5nZW5lcmF0ZSg3LCA1MCkpO1xyXG5cclxuICAvLyAgIGNhbGxiYWNrKDQ1KTtcclxuICAvLyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        function GolombRuler(order, maxSearchLength) {
            this.order = order;
            this.maxSearchLength = maxSearchLength;
            this.markers = [];
            this.distances = [];
        }
        GolombRuler.prototype.firstStub = function (length) {
            this.markers = [0];
            this.distances = [];
            while (this.markers.length < length)
                this.addMarker();
            return this.markers.map(function (x) { return x; });
        };
        GolombRuler.prototype.nextStub = function (length, prevStub) {
            var _this = this;
            if (prevStub === void 0) { prevStub = [0]; }
            this.markers = [];
            this.distances = [];
            prevStub.forEach(function (x) { return _this.markers.push(x); }, this);
            this.calculateDistances();
            var adjustPositionCur = prevStub.length - 1;
            var adjustPositionMin = length - 1;
            var halfOrder = Math.ceil(this.order / 2) - 1;
            var halfMax = Math.ceil(this.maxSearchLength / 2);
            var results = [];
            var cycles = 0;
            do {
                var prevDist = this.clearMarkers(adjustPositionCur);
                this.addMarker(prevDist + 1);
                if (adjustPositionCur <= halfOrder && this.length() >= halfMax)
                    adjustPositionCur--;
                while (this.markers.length < length) {
                    this.addMarker();
                    adjustPositionCur++;
                    if (adjustPositionCur <= halfOrder && this.length() >= halfMax) {
                        adjustPositionCur--;
                        break;
                    }
                }
            } while (adjustPositionCur != adjustPositionMin && adjustPositionCur > 0);
            if (adjustPositionCur == 0)
                return null;
            return this.markers.map(function (x) { return x; });
        };
        GolombRuler.prototype.exhaust = function (stub) {
            var _this = this;
            if (stub === void 0) { stub = [0]; }
            this.markers = [];
            this.distances = [];
            stub.forEach(function (x) { return _this.markers.push(x); }, this);
            this.calculateDistances();
            for (var i = this.markers.length - 1; i < this.order - 1; i++)
                this.addMarker();
            var shortestLength = this.length();
            if (!this.maxSearchLength || this.maxSearchLength > shortestLength)
                this.maxSearchLength = shortestLength;
            var adjustPositionCur = this.order - 2;
            var adjustPositionMin = stub.length - 1;
            var halfOrder = Math.ceil(this.order / 2) - 1;
            var halfMax = Math.ceil(this.maxSearchLength / 2);
            var results = [];
            results.push(this.markers.map(function (x) { return x; }));
            var cycles = 0;
            do {
                var prevDist = this.clearMarkers(adjustPositionCur);
                this.addMarker(prevDist + 1);
                while (this.length() < this.maxSearchLength && this.markers.length < this.order) {
                    if (adjustPositionCur <= halfOrder && this.length() >= halfMax) {
                        adjustPositionCur--;
                        break;
                    }
                    this.addMarker();
                    adjustPositionCur++;
                }
                if (this.markers.length == this.order && this.length() <= shortestLength) {
                    if (this.length() < shortestLength)
                        results = [];
                    results.push(this.markers.map(function (x) { return x; }));
                    shortestLength = this.length();
                    if (this.maxSearchLength > shortestLength) {
                        this.maxSearchLength = shortestLength;
                        halfMax = Math.ceil(this.maxSearchLength / 2);
                    }
                }
                if (this.markers.length == adjustPositionCur + 1)
                    adjustPositionCur--;
                cycles++;
            } while (adjustPositionCur > adjustPositionMin);
            results.push([cycles]);
            return results;
        };
        GolombRuler.prototype.find = function (stopAtOrder) {
            var shortestLength = this.length();
            if (!this.maxSearchLength || this.maxSearchLength > shortestLength)
                this.maxSearchLength = shortestLength;
            if (!stopAtOrder)
                stopAtOrder = this.order;
            var adjustPositionCur = this.order - 2;
            var adjustPositionMin = 0;
            var halfOrder = Math.ceil(this.order / 2) - 1;
            var halfMax = Math.ceil(this.maxSearchLength / 2);
            var results = [];
            results.push(this.markers.map(function (x) { return x; }));
            var cycles = 0;
            do {
                var prevDist = this.clearMarkers(adjustPositionCur);
                this.addMarker(prevDist + 1);
                while (this.markers.length < stopAtOrder && this.length() < this.maxSearchLength) {
                    if (adjustPositionCur <= halfOrder && this.length() >= halfMax) {
                        adjustPositionCur--;
                        break;
                    }
                    this.addMarker();
                    adjustPositionCur++;
                }
                if (stopAtOrder != this.order && cycles == 3) {
                    if (this.markers.length == stopAtOrder) {
                        results = [];
                        results.push(this.markers.map(function (x) { return x; }));
                        break;
                    }
                }
                else {
                    if (this.markers.length == this.order && this.length() <= shortestLength) {
                        if (this.length() < shortestLength)
                            results = [];
                        results.push(this.markers.map(function (x) { return x; }));
                        shortestLength = this.length();
                        if (this.maxSearchLength > shortestLength) {
                            this.maxSearchLength = shortestLength;
                            halfMax = Math.ceil(this.maxSearchLength / 2);
                        }
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
        GolombRuler.prototype.removeMarkers = function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLEVBQVAsQ0FBTyxDQUFDLElBQUksSUFBSSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7b0JBQy9ELE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFZixDQUFDLEVBQUUsQ0FBQztnQkFDSixNQUFNLEVBQUUsQ0FBQztZQUNiLENBQUMsUUFDTSxJQUFJLEVBQUU7UUFDakIsQ0FBQztRQUVPLDBDQUFvQixHQUE1QixVQUE2QixNQUFjO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sR0FBRyxDQUFDLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVPLHdDQUFrQixHQUExQjtZQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBRXBCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDNUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUduRSxDQUFDO1FBR0wsa0JBQUM7SUFBRCxDQTdSQSxBQTZSQyxJQUFBO0lBN1JZLGtDQUFXIiwiZmlsZSI6ImdvbG9tYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHb2xvbWIge1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb2xvbWJSdWxlciB7XHJcbiAgICBtYXJrZXJzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgZGlzdGFuY2VzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvcmRlcjogbnVtYmVyLCBwcml2YXRlIG1heFNlYXJjaExlbmd0aD86IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlyc3RTdHViKGxlbmd0aDogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHRoaXMubWFya2VycyA9IFswXTtcclxuICAgICAgICB0aGlzLmRpc3RhbmNlcyA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXJrZXJzLmxlbmd0aCA8IGxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFya2Vycy5tYXAoeCA9PiB4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV4dFN0dWIobGVuZ3RoOiBudW1iZXIsIHByZXZTdHViOiBudW1iZXJbXSA9IFswXSk6IG51bWJlcltdIHtcclxuICAgICAgICB0aGlzLm1hcmtlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmRpc3RhbmNlcyA9IFtdO1xyXG5cclxuICAgICAgICBwcmV2U3R1Yi5mb3JFYWNoKHggPT4gdGhpcy5tYXJrZXJzLnB1c2goeCksIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlcygpO1xyXG5cclxuICAgICAgICBsZXQgYWRqdXN0UG9zaXRpb25DdXIgPSBwcmV2U3R1Yi5sZW5ndGggLSAxO1xyXG4gICAgICAgIGxldCBhZGp1c3RQb3NpdGlvbk1pbiA9IGxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGxldCBoYWxmT3JkZXIgPSBNYXRoLmNlaWwodGhpcy5vcmRlciAvIDIpIC0gMTtcclxuICAgICAgICBsZXQgaGFsZk1heCA9IE1hdGguY2VpbCh0aGlzLm1heFNlYXJjaExlbmd0aCAvIDIpO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0czogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBsZXQgY3ljbGVzID0gMDtcclxuXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBsZXQgcHJldkRpc3QgPSB0aGlzLmNsZWFyTWFya2VycyhhZGp1c3RQb3NpdGlvbkN1cik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTWFya2VyKHByZXZEaXN0ICsgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWRqdXN0UG9zaXRpb25DdXIgPD0gaGFsZk9yZGVyICYmIHRoaXMubGVuZ3RoKCkgPj0gaGFsZk1heClcclxuICAgICAgICAgICAgICAgIGFkanVzdFBvc2l0aW9uQ3VyLS07XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYXJrZXJzLmxlbmd0aCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIoKTtcclxuICAgICAgICAgICAgICAgIGFkanVzdFBvc2l0aW9uQ3VyKys7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFkanVzdFBvc2l0aW9uQ3VyIDw9IGhhbGZPcmRlciAmJiB0aGlzLmxlbmd0aCgpID49IGhhbGZNYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RQb3NpdGlvbkN1ci0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoYWRqdXN0UG9zaXRpb25DdXIgIT0gYWRqdXN0UG9zaXRpb25NaW4gJiYgYWRqdXN0UG9zaXRpb25DdXIgPiAwKTtcclxuXHJcbiAgICAgICAgaWYgKGFkanVzdFBvc2l0aW9uQ3VyID09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXJrZXJzLm1hcCh4ID0+IHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGhhdXN0KHN0dWI6IG51bWJlcltdID0gWzBdKTogbnVtYmVyW11bXSB7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZXMgPSBbXTtcclxuXHJcbiAgICAgICAgc3R1Yi5mb3JFYWNoKHggPT4gdGhpcy5tYXJrZXJzLnB1c2goeCksIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlcygpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDE7IGkgPCB0aGlzLm9yZGVyIC0gMTsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzLmFkZE1hcmtlcigpO1xyXG5cclxuICAgICAgICBsZXQgc2hvcnRlc3RMZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubWF4U2VhcmNoTGVuZ3RoIHx8IHRoaXMubWF4U2VhcmNoTGVuZ3RoID4gc2hvcnRlc3RMZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMubWF4U2VhcmNoTGVuZ3RoID0gc2hvcnRlc3RMZW5ndGg7XHJcblxyXG4gICAgICAgIGxldCBhZGp1c3RQb3NpdGlvbkN1ciA9IHRoaXMub3JkZXIgLSAyO1xyXG4gICAgICAgIGxldCBhZGp1c3RQb3NpdGlvbk1pbiA9IHN0dWIubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgbGV0IGhhbGZPcmRlciA9IE1hdGguY2VpbCh0aGlzLm9yZGVyIC8gMikgLSAxO1xyXG4gICAgICAgIGxldCBoYWxmTWF4ID0gTWF0aC5jZWlsKHRoaXMubWF4U2VhcmNoTGVuZ3RoIC8gMik7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHRzOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubWFya2Vycy5tYXAoeCA9PiB4KSk7XHJcblxyXG4gICAgICAgIGxldCBjeWNsZXMgPSAwO1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2RGlzdCA9IHRoaXMuY2xlYXJNYXJrZXJzKGFkanVzdFBvc2l0aW9uQ3VyKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIocHJldkRpc3QgKyAxKTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmxlbmd0aCgpIDwgdGhpcy5tYXhTZWFyY2hMZW5ndGggJiYgdGhpcy5tYXJrZXJzLmxlbmd0aCA8IHRoaXMub3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhZGp1c3RQb3NpdGlvbkN1ciA8PSBoYWxmT3JkZXIgJiYgdGhpcy5sZW5ndGgoKSA+PSBoYWxmTWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0UG9zaXRpb25DdXItLTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1hcmtlcigpO1xyXG4gICAgICAgICAgICAgICAgYWRqdXN0UG9zaXRpb25DdXIrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPT0gdGhpcy5vcmRlciAmJiB0aGlzLmxlbmd0aCgpIDw9IHNob3J0ZXN0TGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoKCkgPCBzaG9ydGVzdExlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubWFya2Vycy5tYXAoeCA9PiB4KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2hvcnRlc3RMZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1heFNlYXJjaExlbmd0aCA+IHNob3J0ZXN0TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhTZWFyY2hMZW5ndGggPSBzaG9ydGVzdExlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBoYWxmTWF4ID0gTWF0aC5jZWlsKHRoaXMubWF4U2VhcmNoTGVuZ3RoIC8gMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoID09IGFkanVzdFBvc2l0aW9uQ3VyICsgMSlcclxuICAgICAgICAgICAgICAgIGFkanVzdFBvc2l0aW9uQ3VyLS07XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByaW50KHRoaXMubWFya2VycykpO1xyXG5cclxuICAgICAgICAgICAgY3ljbGVzKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChhZGp1c3RQb3NpdGlvbkN1ciA+IGFkanVzdFBvc2l0aW9uTWluKTtcclxuXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKFtjeWNsZXNdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmQoc3RvcEF0T3JkZXI/OiBudW1iZXIpOiBudW1iZXJbXVtdIHtcclxuICAgICAgICBsZXQgc2hvcnRlc3RMZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJpbnQodGhpcy5tYXJrZXJzKSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5tYXhTZWFyY2hMZW5ndGggfHwgdGhpcy5tYXhTZWFyY2hMZW5ndGggPiBzaG9ydGVzdExlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5tYXhTZWFyY2hMZW5ndGggPSBzaG9ydGVzdExlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKCFzdG9wQXRPcmRlcilcclxuICAgICAgICAgICAgc3RvcEF0T3JkZXIgPSB0aGlzLm9yZGVyO1xyXG5cclxuICAgICAgICBsZXQgYWRqdXN0UG9zaXRpb25DdXIgPSB0aGlzLm9yZGVyIC0gMjtcclxuICAgICAgICBsZXQgYWRqdXN0UG9zaXRpb25NaW4gPSAwOyAvLyB0aGlzLnN0dWIubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgbGV0IGhhbGZPcmRlciA9IE1hdGguY2VpbCh0aGlzLm9yZGVyIC8gMikgLSAxO1xyXG4gICAgICAgIGxldCBoYWxmTWF4ID0gTWF0aC5jZWlsKHRoaXMubWF4U2VhcmNoTGVuZ3RoIC8gMik7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHRzOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubWFya2Vycy5tYXAoeCA9PiB4KSk7XHJcblxyXG4gICAgICAgIGxldCBjeWNsZXMgPSAwO1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2RGlzdCA9IHRoaXMuY2xlYXJNYXJrZXJzKGFkanVzdFBvc2l0aW9uQ3VyKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIocHJldkRpc3QgKyAxKTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLm1hcmtlcnMubGVuZ3RoIDwgc3RvcEF0T3JkZXIgJiYgdGhpcy5sZW5ndGgoKSA8IHRoaXMubWF4U2VhcmNoTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRqdXN0UG9zaXRpb25DdXIgPD0gaGFsZk9yZGVyICYmIHRoaXMubGVuZ3RoKCkgPj0gaGFsZk1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdFBvc2l0aW9uQ3VyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIoKTtcclxuICAgICAgICAgICAgICAgIGFkanVzdFBvc2l0aW9uQ3VyKys7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdG9wQXRPcmRlciAhPSB0aGlzLm9yZGVyICYmIGN5Y2xlcyA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCA9PSBzdG9wQXRPcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5tYXJrZXJzLm1hcCh4ID0+IHgpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByaW50KHRoaXMubWFya2VycykpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoID09IHRoaXMub3JkZXIgJiYgdGhpcy5sZW5ndGgoKSA8PSBzaG9ydGVzdExlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJpbnQodGhpcy5tYXJrZXJzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCgpIDwgc2hvcnRlc3RMZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubWFya2Vycy5tYXAoeCA9PiB4KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNob3J0ZXN0TGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4U2VhcmNoTGVuZ3RoID4gc2hvcnRlc3RMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhTZWFyY2hMZW5ndGggPSBzaG9ydGVzdExlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFsZk1heCA9IE1hdGguY2VpbCh0aGlzLm1heFNlYXJjaExlbmd0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHJ1bGVyLm1hcmtlcnMubGVuZ3RoID4gNSAmJiBcclxuICAgICAgICAgICAgLy8gICAgIHJ1bGVyLm1hcmtlcnNbMV0gPT0gMSAmJiBcclxuICAgICAgICAgICAgLy8gICAgIHJ1bGVyLm1hcmtlcnNbMl0gPT0gNSAmJiBcclxuICAgICAgICAgICAgLy8gICAgIHJ1bGVyLm1hcmtlcnNbM10gPT0gMTIgJiYgXHJcbiAgICAgICAgICAgIC8vICAgICBydWxlci5tYXJrZXJzWzRdID09IDIyXHJcbiAgICAgICAgICAgIC8vICAgICAmJiBydWxlci5tYXJrZXJzWzVdID4gNDQpIFxyXG4gICAgICAgICAgICAvLyAgICAgIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCB4YyA9IFwic2RmXCI7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoID09IGFkanVzdFBvc2l0aW9uQ3VyICsgMSlcclxuICAgICAgICAgICAgICAgIGFkanVzdFBvc2l0aW9uQ3VyLS07XHJcblxyXG4gICAgICAgICAgICBjeWNsZXMrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGFkanVzdFBvc2l0aW9uQ3VyID4gYWRqdXN0UG9zaXRpb25NaW4pO1xyXG4gICAgICAgIC8vIHdoaWxlICh0aGlzLmNvdW50IDwgOTAwMDAwMDAgJiYgYWRqdXN0UG9zaXRpb24gPiAwKTtcclxuXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKFtjeWNsZXNdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByaW50KG1hcmtlcnM6IG51bWJlcltdKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYG1hcmtlcnM6ICR7bWFya2Vycy5tYXAoeCA9PiB4ICsgXCJcIil9YDsgLy8gZGlzdGFuY2VzOiAke3RoaXMuZGlzdGFuY2VzLm1hcCh4ID0+IHggKyBcIiBcIil9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlcnNbdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTWFya2VyKG1pbkRpc3RhbmNlOiBudW1iZXIgPSAxKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5ld0Rpc3RhbmNlID0gdGhpcy5zbWFsbGVzdFZhbGlkRGlzdGFuY2UobWluRGlzdGFuY2UpO1xyXG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKHRoaXMubWFya2Vyc1t0aGlzLm1hcmtlcnMubGVuZ3RoIC0gMV0gKyBuZXdEaXN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVEaXN0YW5jZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZU1hcmtlcnMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jbGVhck1hcmtlcnModGhpcy5tYXJrZXJzLmxlbmd0aCAtIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYXJNYXJrZXJzKGFmdGVyOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLm1hcmtlcnMuc3BsaWNlKGFmdGVyICsgMSk7XHJcbiAgICAgICAgbGV0IGN1ckRpc3RhbmNlID0gdGhpcy5tYXJrZXJzW3RoaXMubWFya2Vycy5sZW5ndGggLSAxXSAtIHRoaXMubWFya2Vyc1t0aGlzLm1hcmtlcnMubGVuZ3RoIC0gMl07XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzLnNwbGljZShhZnRlcik7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVEaXN0YW5jZXMoKTtcclxuICAgICAgICByZXR1cm4gY3VyRGlzdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9ncmVzc01hcmtlcihjdXJEaXN0YW5jZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gbGV0IGN1ckRpc3RhbmNlID0gdGhpcy5tYXJrZXJzW3RoaXMubWFya2Vycy5sZW5ndGggLSAxXSAtIHRoaXMubWFya2Vyc1t0aGlzLm1hcmtlcnMubGVuZ3RoIC0gMl07XHJcblxyXG4gICAgICAgIC8vIHRoaXMucmVtb3ZlTWFya2VyKCk7XHJcblxyXG4gICAgICAgIGxldCBuZXdEaXN0YW5jZSA9IHRoaXMuc21hbGxlc3RWYWxpZERpc3RhbmNlKGN1ckRpc3RhbmNlICsgMSk7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzW3RoaXMubWFya2Vycy5sZW5ndGggLSAxXSA9IHRoaXMubWFya2Vyc1t0aGlzLm1hcmtlcnMubGVuZ3RoIC0gMl0gKyBuZXdEaXN0YW5jZTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc21hbGxlc3RWYWxpZERpc3RhbmNlKG1pbkRpc3RhbmNlOiBudW1iZXIgPSAxKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaSA9IG1pbkRpc3RhbmNlO1xyXG5cclxuICAgICAgICBsZXQgbWFya2VyID0gdGhpcy5tYXJrZXJzW3RoaXMubWFya2Vycy5sZW5ndGggLSAxXSArIG1pbkRpc3RhbmNlO1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBuZXdEaXN0cyA9IHRoaXMubmV3RGlzdGFuY2VzQnlNYXJrZXIobWFya2VyKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbmV3RGlzdHMuc29tZSh4ID0+IHRoaXMuZGlzdGFuY2VzLmZpbmQoeSA9PiB5ID09PSB4KSAhPSBudWxsKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBpKys7XHJcblxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIG1hcmtlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXdEaXN0YW5jZXNCeU1hcmtlcihtYXJrZXI6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXJrZXJzLm1hcCh4ID0+IG1hcmtlciAtIHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlRGlzdGFuY2VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2VzID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYXJrZXJzLmxlbmd0aCAtIDE7IGkrKylcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgdGhpcy5tYXJrZXJzLmxlbmd0aDsgaisrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0YW5jZXMucHVzaCh0aGlzLm1hcmtlcnNbal0gLSB0aGlzLm1hcmtlcnNbaV0pO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcmludCgpKTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><div class=\"container-fluid text-center text-warning\"><br><h2>OGR.<b class=\"text-light\">JS</b></h2><small>LOGICAL PROCESSORS: <b>4</b><br>ACTIVE WORKERS: <b>1</b><br></small><button type=\"button\" class=\"btn btn-outline-warning\">Add worker</button> <button type=\"button\" class=\"btn btn-outline-warning\" disabled=\"disabled\">Remove worker</button><br><br><small>CURRENT STUB: <b>000 004 020 030 057</b>, CYCLES: <b>43,123</b>, SHORTEST: <b>151 MARKS</b>, RUNTIME: <b>2m31s</b></small><div class=\"display-4 text-underline text-white\" style=\"font-size:28px;letter-spacing:1px\"><b>000 004 020 030 057 059 062 076 100 111 123 136 144 145 151</b></div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020 030 057 059 062 076 100 111 123 136 144 145</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020 030 057 059 062 076 100 111 123 136 144</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020 030 057 059 062 076 100 111 123 136</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020 030 057 059 062 076 100 111 123</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020 030 057 059 062 076 100 111</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020 030 057 059 062 076 100</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020 030 057 059 062 076</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020 030 057 059 062</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020 030 057 059</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020 030 057</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020 030</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004 020</div><div class=\"display-4 text-secondary\" style=\"font-size:28px;letter-spacing:2px\">000 004</div><div class=\"display-4\" style=\"font-size:28px;letter-spacing:2px\"><b>151</b></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map