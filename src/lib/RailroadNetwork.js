"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RailroadNetwork = void 0;
const Graph_1 = require("./Graph");
class RailroadNetwork {
    constructor(railLines) {
        this.graph = new Graph_1.Graph();
        this.railLines = railLines;
    }
    // Get all the reachable squares from the current square
    // A square is not reachable if it is not accessible or it passes through another unit
    // Returns a set of strings
    getReachableSquares(currentSquare, isPieceEngineer, boardState) {
        // If the piece is not on the railroad, it can only move one space
        if (!this.isOnRail(currentSquare)) {
            return this.graph.getAdjacentNeighbors(currentSquare);
        }
        const singleRail = this.getAllRailroadsFromSquare(currentSquare);
        // BFS search on the railroads
        var reachableSquares = [];
        var visited = new Set();
        visited.add(currentSquare);
        reachableSquares.push(currentSquare);
        while (reachableSquares.length != 0) {
            var iterSquare = reachableSquares.shift();
            const allNeighbors = this.graph.getAdjacentNeighbors(iterSquare);
            const neighborsOnRailroad = Array.from(allNeighbors).filter((nextSquare) => this.isOnRail(nextSquare));
            neighborsOnRailroad.forEach(function (nextSquare) {
                if (visited.has(nextSquare)) {
                    return;
                }
                // if the piece is not an engineer, check if it is on the same railroad
                if (isPieceEngineer === false && singleRail.has(nextSquare) === false) {
                    // skip if not accessible without turning
                    return;
                }
                // visited
                visited.add(nextSquare);
                // empty
                if (boardState[nextSquare] === null) {
                    // explore this square and its neighbors
                    reachableSquares.push(nextSquare);
                }
            });
        }
        // include squares that aren't on the railroad
        var neighbors = this.graph.getAdjacentNeighbors(currentSquare);
        neighbors.forEach(function (square) {
            visited.add(square);
        });
        return visited;
    }
    isOnRail(currentSquare) {
        return this.railLines.some((railLine) => railLine.includes(currentSquare));
    }
    getAllRailroadsFromSquare(currentSquare) {
        // get all positions that are accessible on the same railroad
        var singleRail = this.railLines
            .filter((railroad) => railroad.includes(currentSquare))
            .flat();
        return new Set(singleRail);
    }
}
exports.RailroadNetwork = RailroadNetwork;
