import { Points } from "./IPoints";

export class Vector2D{

    constructor(){ /* TODO document why this constructor is empty */ };

    transformPointToVector(points: Points): number[]{
        return [points.x, points.y, 1];
    }

    transformMatrixToVector(matrix: number[][], vector: number[]) {
        let vectorResult: number[] = [0, 0, 0];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < vector.length; j++) {
                vectorResult[i] += matrix[i][j] * vector[j];
            }
        }
        return vectorResult;
    }

  
}