import { Injectable } from '@angular/core';
import {NodeService} from "./node.service";

@Injectable({
  providedIn: 'root'
})
export class BinarySearchTreeService {
  root: NodeService;
}
