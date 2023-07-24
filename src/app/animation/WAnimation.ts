import { Points } from "./IPoints";
import { Matrix3x3 } from "./Matrix3x3";
import { Vector2D } from "./Vector2D";

export class WAnimation {

    private _vector2D: Vector2D = new Vector2D();
    private _matrix3x3: Matrix3x3 = new Matrix3x3();

    constructor(vector2D: Vector2D, matrix3x3: Matrix3x3) {
        this._vector2D = vector2D;
        this._matrix3x3 = matrix3x3;
    }

    transformTranslation(pointStart: Points, pointFinal: Points): number[] {
        let translationMatrix = this.buildTranslationMatrix(pointFinal);
        let vectorStart = this._vector2D.transformPointToMatrix(pointStart);

        return this._matrix3x3.multiplyVectorMatrix(vectorStart, translationMatrix);
    }

    transformScaling(pointStart: Points, pointFinal: Points): number[] {
        let vectorStart = this._vector2D.transformPointToMatrix(pointStart);
        let scalingTransformMatrix = this.buildScalingTransformMatrix(pointFinal);

        return this._matrix3x3.multiplyVectorMatrix(vectorStart, scalingTransformMatrix); 
    }

    transformRotation(): number[]{
       return;
    }

    private buildRotationTransformMatrix(pointFinal: Points){
        let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (i == 0 && j == 0) {
                    matrix[i][j] = pointFinal.x;
                }
                else if (i == 1 && j == 1) {
                    matrix[i][j] = pointFinal.y;
                }
                else if (i == 2 && j == 2) {
                    matrix[i][j] = 1;
                }
                else {
                    matrix[i][j] = 0;
                }
            }
        }
        return matrix
    }

    private buildScalingTransformMatrix(pointFinal: Points) {
        let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (i == 0 && j == 0) {
                    matrix[i][j] = pointFinal.x;
                }
                else if (i == 1 && j == 1) {
                    matrix[i][j] = pointFinal.y;
                }
                else if (i == 2 && j == 2) {
                    matrix[i][j] = 1;
                }
                else {
                    matrix[i][j] = 0;
                }
            }
        }
        return matrix
    }

    private buildTranslationMatrix(pointFinal: Points): number[][] {
        let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (i == j) {
                    matrix[i][j] = 1;
                }
                //To get the correct result, the translate position are set like this to give, a transpose matrice
                else if (i == 0 && j == 2) {
                    matrix[i][j] = pointFinal.x;
                }
                else if (i == 1 && j == 2) {
                    matrix[i][j] = pointFinal.y;
                }
                else {
                    matrix[i][j] = 0;
                }
            }
        }
        return matrix
    }
}