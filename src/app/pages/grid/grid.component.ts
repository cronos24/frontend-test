import { Component, OnInit } from '@angular/core';
import {NodeService} from './nodeservice';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  files: TreeNode<any>[] = [];
  cols: { field: string; header: string; }[] = [];
  selectedColumns: any[];
    // files: TreeNode[];
    // cols: any[];
    // selectedColumns: any[];

  constructor(private nodeService: NodeService) {
    this.nodeService.getFilesystem().then(files => this.files = files);

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.selectedColumns = this.cols;
  }

  ngOnInit(): void {
    
  }

}
