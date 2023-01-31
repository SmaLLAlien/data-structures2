
export class NodeService {
  next: NodeService = null;
  prev: NodeService = null;

  constructor(public val: any) { }
}
