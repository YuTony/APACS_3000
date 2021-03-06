import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { APACSStabService } from "../services/APACS-stab.service";


/** File node data with possible child nodes. */
export interface DataNode {
    name: string;
    classId: string;
    children: DataNode[];
}

/**
 * Flattened tree node that has been created from a FileNode through the flattener. Flattened
 * nodes include level index and whether they can be expanded or not.
 */
export interface FlatTreeNode {
    name: string;
    type: string;
    level: number;
    expandable: boolean;
}


@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

    /** The TreeControl controls the expand/collapse state of tree nodes.  */
    treeControl: FlatTreeControl<FlatTreeNode>;

    /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
    treeFlattener: MatTreeFlattener<any, FlatTreeNode>;

    /** The MatTreeFlatDataSource connects the control and flattener to provide data. */
    dataSource: MatTreeFlatDataSource<any, FlatTreeNode>;
    data: any[] = [];

    constructor(private api: APACSStabService) {
        this.treeFlattener = new MatTreeFlattener(
            this.transformer,
            this.getLevel,
            this.isExpandable,
            this.getChildren);

        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.dataSource.data = this.data;
    }

    /** Transform the data to something the tree can read. */
    transformer(node: any, level: number): FlatTreeNode {
        // console.log(!node.children.length);
        return {
            name: node.name,
            type: node.classId,
            level,
            expandable: node.children.length != 0
        };
    }

    /** Get the level of the node */
    getLevel(node: FlatTreeNode): number {
        // console.log('level' + node.level);
        return node.level;
    }

    /** Get whether the node is expanded or not. */
    isExpandable(node: FlatTreeNode): boolean {
        // console.log('expandable' + node.expandable);
        return node.expandable;
    }

    /** Get whether the node has children or not. */
    hasChild(index: number, node: FlatTreeNode): boolean {
        // console.log('expandable' + node.expandable);
        return node.expandable;
    }

    /** Get the children for the node. */
    getChildren(node: DataNode): DataNode[] | null | undefined {
        // console.log(node.children);
        return node.children;
    }

    types: Map<string, any> = new Map<string, any>();

    getInterface(obj: any) {
        let int = {};
        // @ts-ignore
        Object.keys(obj).forEach(key => int[key] = typeof obj[key]);
        return int;
    }

    async getChild(id: string): Promise<any> {
        let children = await this.api.getObjectById(id).toPromise();
        this.types.set(children.strClassID, this.getInterface(children));
        return {
            name: children.strName,
            classId: children.strClassID,
            children: await this.getChildren2(children.sysAddrID)
        }
    }

    async getChildren2(id: string): Promise<any[]> {
        let children = await this.api.getChild(id).toPromise();
        let proms = children.map(cur => {
            return this.getChild(cur.sysAddrID);
        });
        return await Promise.all(proms);
    }

    async ngOnInit() {
        let rootId = (await this.api.getRoot().toPromise()).sysAddrID;
        this.dataSource.data = [await this.getChild(rootId)];

        console.log(this.dataSource.data);
        console.log(this.types);

        let ans = '';
        this.types.forEach(((value, key) => {
            ans += `
export interface ${key} {${Object.keys(value).map(value1 => `\n\t${value1}: ${value[value1]}`)}
}
`;
        }))
        console.log(ans);
        console.log(Array.from(this.types.keys()).join(' | '));
    }
}
