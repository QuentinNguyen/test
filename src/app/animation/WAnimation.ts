import { Points } from "./Utils/IPoints";
import { Matrix3x3 } from "./Utils/Matrix3x3";
import { Vector2D } from "./Utils/Vector2D";


export class WAnimation {

    private _vector2D: Vector2D = new Vector2D();
    private _matrix3x3: Matrix3x3 = new Matrix3x3();

    constructor() { }

    transformTranslation(pointStart: Points, pointFinal: Points): number[][] {
        let translationMatrix = this.buildTranslationMatrix(pointFinal);
        let vectorStart = this._vector2D.transformPointToVector(pointStart);
        let matrixStart = this._matrix3x3.transformVectorToMatrix(vectorStart);

        return this._matrix3x3.multiply(matrixStart, translationMatrix);
    }

    transformScaling(pointStart: Points, pointFinal: Points): number[][] {
        let vectorStart = this._vector2D.transformPointToVector(pointStart);
        let matrixStart = this._matrix3x3.transformVectorToMatrix(vectorStart);
        let scalingTransformMatrix = this.buildScalingTransformMatrix(pointFinal);
        return this._matrix3x3.multiply(matrixStart, scalingTransformMatrix);
    }

    transformRotation(pointStart: Points, pointFinal: Points): number[][] {
        const angleInRad = Math.atan2(pointFinal.y - pointStart.y, pointFinal.x - pointStart.x);

        let vectorStart = this._vector2D.transformPointToVector(pointStart);
        let matrixStart = this._matrix3x3.transformVectorToMatrix(vectorStart);

        let rotationTransformMatrix = this.buildRotationTransformMatrix(angleInRad);

        return this._matrix3x3.multiply(matrixStart, rotationTransformMatrix);
    }

    private buildRotationTransformMatrix(rad: number): number[][] {
        let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (i == 0 && j == 0) {
                    matrix[i][j] = Math.cos(rad);
                }
                else if (i == 1 && j == 0) {
                    matrix[i][j] = Math.sin(rad);
                }
                else if (i == 0 && j == 1) {
                    matrix[i][j] = -Math.sin(rad);
                }
                else if (i == 1 && j == 1) {
                    matrix[i][j] = Math.cos(rad);
                }
                else if (i == 2 && j == 2) {
                    matrix[i][j] = 1;
                }
            }
        }
        return matrix
    }

    private buildScalingTransformMatrix(pointFinal: Points): number[][] {
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