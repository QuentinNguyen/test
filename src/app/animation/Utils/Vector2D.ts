import { Points } from "./IPoints";

export class Vector2D{

    constructor(){ /* TODO document why this constructor is empty */ };

    transformPointToVector(points: Points): number[]{
        return [points.x, points.y, 1];
    }

}