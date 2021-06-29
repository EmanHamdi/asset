import { Component, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { MatTableDataSource } from '@angular/material/table';

let tableArr: Element[] = 
[
  { Qty: 1, Unit:'cup' , Food: 'rice', Calories: 702 , Weight: 195 },
  { Qty: 100, Unit: 'ounce', Food: 'chickpeas', Calories: 10716.1, Weight: 2835  }
  
];

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})


export class SampleComponent
{
  dataSource = new MatTableDataSource<Element>(tableArr);
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
      // dataSource= new MatTableDataSource();
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
        
          // this.dataSource = new MatTableDataSource(tableArr);
    }
    ///////////////////////////////////////////////////////////////
    


////////////////////////////////////////////////////////////////////////
text = new BehaviorSubject('');
  arr$ = this.text.pipe(
    map((text) => {
      const vals = text.length ? text.trim().split('\n') : []
      return vals
        .filter(this.validateValue)
        .map(this.transformToCustomObj);
    }),
  );

  validateValue(value: string) {
    return !!value.length;
  }
  
  transformToCustomObj(value) {
      var obj = value.split(" ");
      tableArr.push({ Qty : Number(obj[0])  , Unit:obj[1] , Food:obj[2] , Weight : 10 });
        // this.dataSource.data.push({ Weight : 10 ,Qty : Number(obj[0]) ,Food:obj[2],Unit:obj[1] });
          // this.dataSource.data = tableArr;
          this.dataSource = new MatTableDataSource(this.dataSource.data);
          console.log('this.dataSource',this.dataSource);
       //   this.columnNames = tableArr
          
        console.log("tableArr",tableArr);
      
      console.log(value.split(" "));

          // CALC////////////////////////////////////////////////////////
          
      
    return { value };
  }

  displayedColumns = [];
  

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'Qty',
    value: 'Qty.',

  }, {
    id: 'Unit',
    value: 'Unit',
  },
    {
      id: 'Food',
      value: 'Food',
    },
    {
      id: 'Calories',
      value: 'Calories',
    },
    {
      id: 'Weight',
      value: 'Weight',
    }
  ];

  ngOnInit() {
    
    this.displayedColumns = this.columnNames.map(x => x.id);
     this.dataSource.data = tableArr;
     this.dataSource = new MatTableDataSource(this.dataSource.data);
    // this.dataSource.data = ELEMENT_DATA;
    console.log("tableArr1",this.dataSource.data);
    
    // this.createTable();
  }

  // createTable() {
   
  //   this.dataSource = new MatTableDataSource(tableArr);
  // }
}

export interface Element {
  Qty: number,
  Unit: string,
  Food: string,
  Calories?: number,
  Weight?: number,
    
  }
  


