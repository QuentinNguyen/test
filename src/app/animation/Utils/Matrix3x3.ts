export class Matrix3x3 {

    private matrixIdentity: number[][] = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

    constructor() { /* TODO document why this constructor is empty */ }

    //I need to use it to bring Object to initial position 
    inverse(matrix: number[][]): number[][] {
        if (this.checkDerterminant(matrix)) {
            for (let j = 0; j < matrix.length; j++) {
                let pivotRow = this.findPivot(matrix, j, j);
                if (pivotRow != j) {
                    this.swapLines(matrix, j, pivotRow);
                    this.swapLines(this.matrixIdentity, j, pivotRow);
                }
                else if (matrix[j][j] != 1) {
                    let scalar = 1 / matrix[j][j];
                    this.multiplyRow(matrix, j, scalar);
                    this.multiplyRow(this.matrixIdentity, j, scalar);
                }
                for (let i = 0; i < matrix.length; i++) {
                    if (i != j && matrix[i][j] != 0) {
                        let negavetiveScalar = -matrix[i][j];
                        this.addRow(matrix, i, j, negavetiveScalar);
                        this.addRow(this.matrixIdentity, i, j, negavetiveScalar);
                    }
                }
            }
            return this.matrixIdentity;
        }
        return matrix;
    }


    multiply(matrixA: number[][], matrixB: number[][]): number[][] {
        let matrixResult: number[][] = [[0,0,0],[0,0,0],[0,0,0]];
        for (let i = 0; i < matrixA.length; i++) {
            for (let j = 0; j < matrixA.length; j++) {
                for (let k = 0; k < matrixA.length; k++) {
                    matrixResult[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return matrixResult;
    }


    transformVectorToMatrix(vector: number[]):number[][]{
        let matrix : number[][]  = [[0,0,0],[0,0,0],[0,0,0]];
        if(matrix.length !== matrix[0].length && matrix.length !== vector.length){
            throw new Error("The matrix and the vector doesn't have the same dimension");
        }

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if(i == j){
                   matrix[i][j] = vector[i];
                }
                else{
                    matrix[i][j] = 0;
                }
            }
        }

        return matrix;
    }

    private multiplyRow(matrix: number[][], row: number, scalar: number) {
        for (let k = 0; k < matrix[row].length; k++) {
            matrix[row][k] *= scalar;
        }
    }

    private addRow(matrix: number[][], row: number, row2: number, scalar: number) {
        for (let k = 0; k < matrix[row].length; k++) {
            matrix[row][k] = matrix[row][k] + scalar * matrix[row2][k];
        }
    }

    private swapLines(matrix: number[][], row: number, row2: number) {
        for (let k = 0; k < matrix[row].length; k++) {
            let temp = matrix[row][k];
            matrix[row][k] = matrix[row2][k];
            matrix[row2][k] = temp;
        }
    }

    private findPivot(matrix: number[][], row: number, column: number) {
        let pivotRow = row;
        for (let k = row + 1; k < matrix.length; k++) {
            if (Math.abs(matrix[k][column]) > Math.abs(matrix[pivotRow][column])) {
                pivotRow = k;
            }
        }
        if (pivotRow == matrix.length) {
            return -1;
        } else {
            return pivotRow;
        }
    }

    private getDeterminant(matrix: number[][]): number {
        if (matrix.length !== matrix[0].length) {
            throw new Error("The matrix size is not the same");
        }

        const a = matrix[0][0];
        const b = matrix[0][1];
        const c = matrix[0][2];
        const d = matrix[1][0];
        const e = matrix[1][1];
        const f = matrix[1][2];
        const g = matrix[2][0];
        const h = matrix[2][1];
        const i = matrix[2][2];

        return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
    }

    private checkDerterminant(matrix: number[][]) : boolean {
        if (this.getDeterminant(matrix) == 0) {
            return false;
        }

        return true;
    }
}