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
  data: any;
  cols: { field: string; header: string; }[] = [];
  selectedColumns: any[] = [];
  selectData: { id: string; name: string; }[];
  customers: any;
    // files: TreeNode[];
    // cols: any[];
    // selectedColumns: any[];

  constructor(private nodeService: NodeService) {
    
    this.cols = [
      { field: 'ItemName', header: 'Descripción' },
      { field: 'Quantity', header: 'Cantidad' },
      { field: 'LineTotal', header: 'Importe de Venta' },
      { field: 'TRANSITO', header: 'Transito' },
  ];

  this.selectData = [
      { id: 'FirmCode', name: 'Marca' },
      { id: 'ItemCode', name: 'Articulo' },
      { id: 'CategoriaCode', name: 'Categoría' },
      { id: 'SlpCode', name: 'Vendedor' },
      { id: 'CardCode', name: 'Cliente' },
      { id: 'DocNum', name: 'Numero del Pedido' },
  ];

  //this.selectedColumns = this.selectData;

    this.nodeService.getData().subscribe((data:any)=>{
      this.data= data;

      var newData= this.groupData(data, this.selectedColumns);

      this.files= newData;

    });

   
    

        
  }

  ngOnInit(): void {
    
  }

  onChange(event:any){
  
    
    // let newData= this.groupData(this.data, event.value);
    // this.files= newData;

    
  }

   groupData(data:any, multiselect:any){
   
    
      var grouped:any = [];
      let groups:any = [];

      multiselect.forEach((element: { id: any; }) => {
        groups.push(element.id);
      });

      data.forEach(function (a:any) {       
        
        groups.reduce(function (o:any, g:any, i:any) {  
          
            o[a[g]] = o[a[g]] || (i + 1 === groups.length ? [] : {});

            return o[a[g]];                                           
        }, grouped).push({data:a});

        

       


      });
      

     

     console.log(grouped);
     

      return grouped;

  }

  calculateCustomerTotal(name:any) {
    let total = 0;

    if (this.customers) {
        for (let customer of this.customers) {
            if (customer.representative.name === name) {
                total++;
            }
        }
    }

    return total;
}


  

 

}
