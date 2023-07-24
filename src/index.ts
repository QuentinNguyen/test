import './index.css';
import { Watch } from './app/Watch';
import { Matrix3x3 } from './app/animation/Matrix3x3';
import { Vector2D } from './app/animation/Vector2D';
import type { Points } from './app/animation/IPoints';
import { WAnimation } from './app/animation/WAnimation';


let currentTime = new Date();
const watch = new Watch(currentTime);
watch;

const matrix3x3 = new Matrix3x3()
const matrix = [[1,2,1], [4,0,-1], [-1,2,2]]
const matrixA: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const matrixA2: number[][] = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
  
  // Matrice B (3x3)
  const matrixB: number[][] = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
  ];


const M: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Define the 3D point/vector v as a column vector
const v: number[] = [2, 3, 1];
console.log(matrix3x3.inverse(matrix))

console.log(matrix3x3.transformToVector(M,v))

const vector = new Vector2D();
const PointA :  Points= {x: 1, y: 1};
const PointB :  Points= {x: 4, y: 4};
console.log(vector.buildVector(PointA, PointB));

const a = new WAnimation(vector, matrix3x3)
console.log(a.transformScaling(PointA, PointB))
console.log(matrix3x3.multiplyVectorMatrix(v, matrixA2))
