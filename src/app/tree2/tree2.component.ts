import { CollectionViewer, DataSource, SelectionChange } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APACSStabService } from "../services/APACS-stab.service";
import { Types } from "../models/APACSInterfaces";
import { Action, Actions } from "../models/interfaces";

export interface TreeChild {
    sysAddrID: string;
    strClassID: string;
}

export interface DataNode {
    name: String;
    strClassId: String;
    sysAddrID: String;
    fullInfo: Types;
    children: TreeChild[];
}

/** Flat node with expandable and level information */
export class DynamicFlatNode {
    constructor(public item: DataNode, public level = 1, public expandable = false,
                public isLoading = false) {
    }
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
@Injectable({providedIn: 'root'})
export class DynamicDatabase {

    constructor(private api: APACSStabService) {
    }

    /** Initial data from database */
    async initialData(): Promise<DynamicFlatNode[]> {
        let rootId = (await this.api.getRoot().toPromise()).sysAddrID;
        return [new DynamicFlatNode(await this.getItem(rootId), 0, true)];
    }

    async getItem(id: String) {
        let conf = await this.api.getObjectById(id).toPromise();
        let item: DataNode = {
            name: conf.strName,
            strClassId: conf.strClassID,
            sysAddrID: id,
            fullInfo: conf,
            children: await this.api.getChild(id).toPromise()
        }
        return item;
    }

    async getChildren(node: DataNode): Promise<DataNode[]> {
        // let proms = node.children.map(async ch => await this.getItem(ch.sysAddrID));
        let proms = node.children.reduce<Promise<DataNode>[]>((acc, val) => {
            if (!['TApcAccount', 'TApcCardHolder'].includes(val.strClassID))
                acc.push(this.getItem(val.sysAddrID))
            return acc;
        }, [])
        return Promise.all(proms);
    }

    isExpandable(node: DataNode): boolean {
        return node.children.length != 0;
    }
}


export class DynamicDataSource implements DataSource<DynamicFlatNode> {

    dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

    constructor(private _treeControl: FlatTreeControl<DynamicFlatNode>,
                private _database: DynamicDatabase) {
    }

    get data(): DynamicFlatNode[] {
        return this.dataChange.value;
    }

    set data(value: DynamicFlatNode[]) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }

    connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
        this._treeControl.expansionModel.changed.subscribe(change => {
            if ((change as SelectionChange<DynamicFlatNode>).added ||
                (change as SelectionChange<DynamicFlatNode>).removed) {
                this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
            }
        });

        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
    }

    disconnect(collectionViewer: CollectionViewer): void {
    }

    /** Handle expand/collapse behaviors */
    handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
        }
    }

    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node: DynamicFlatNode, expand: boolean) {
        const index = this.data.indexOf(node);
        if (index < 0)
            return;

        if (expand) {
            const children = this._database.getChildren(node.item);
            if (!children)
                return;
            node.isLoading = true;
            children.then(chn => {
                const nodes = chn.map(item =>
                    new DynamicFlatNode(item, node.level + 1, this._database.isExpandable(item)));

                // const nodes = chn.reduce<DynamicFlatNode[]>((acc, val) => {
                //     if (!['TApcAccount', 'TApcCardHolder'].includes(val.classId)) {
                //         acc.push(new DynamicFlatNode(val, node.level + 1, this._database.isExpandable(val)));
                //     }
                //     return acc;
                // }, []);
                this.data.splice(index + 1, 0, ...nodes);
                this.dataChange.next(this.data);
                node.isLoading = false;
            })
        } else {
            let count = 0;
            for (let i = index + 1; i < this.data.length
            && this.data[i].level > node.level; i++, count++) {
            }
            this.data.splice(index + 1, count);
            // console.log(expand)
            this.dataChange.next(this.data);
        }
    }
}

@Component({
    selector: 'app-tree2',
    templateUrl: './tree2.component.html',
    styleUrls: ['./tree2.component.scss']
})
export class Tree2Component implements OnInit {
    @Output() clickNodeEvent = new EventEmitter<Action>();

    clickNodeHandler(object: Types, action: Actions) {
        this.clickNodeEvent.emit({object: object, action: action});
    }

    treeControl: FlatTreeControl<DynamicFlatNode>;
    dataSource: DynamicDataSource;

    constructor(private database: DynamicDatabase) {
        this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);

        this.dataSource.data = [];
    }

    async ngOnInit() {
        this.dataSource.data = await this.database.initialData();
    }

    getLevel = (node: DynamicFlatNode) => node.level;

    isExpandable = (node: DynamicFlatNode) => node.expandable;

    hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}
