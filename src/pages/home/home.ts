import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;
  jsonItems: any;
  searchTerm: string = '';

  constructor(public navCtrl: NavController) {
    this.items = [
      { title: 'Alexander Albon' },
      { title: 'Valtteri Bottas' },
      { title: 'Pierre Gasly' },
      { title: 'Antonio Giovinazzi' },
      { title: 'Romain Grosjean' },
      { title: 'Lewis Hamilton' },
      { title: 'Nico Hulkenberg' },
      { title: 'Robert Kubica' },
      { title: 'Daniil Kvyat' },
      { title: 'Charles Leclerc' },
      { title: 'Kevin Magnussen' },
      { title: 'Lando Norris' },
      { title: 'Sergio Perez' },
      { title: 'Kimi Raikkonen' },
      { title: 'Daniel Ricciardo' },
      { title: 'George Russell' },
      { title: 'Carlos Sainz' },
      { title: 'Lance Stroll' },
      { title: 'Max Verstappen' },
      { title: 'Sebastian Vettel ' },
    ];
    this.setFilteredItems();
    this.jsonItems = this.items;
  }

  /**
   * 
   * @param searchTerm 
   */
  filterItems(searchTerm) {
    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems() {
    this.jsonItems = this.filterItems(this.searchTerm);
  }

  /**
   * 
   * @param event 
   */
  list(event) {
    // console.log(JSON.stringify(event));
    // console.log(event);
    alert(event);
  }
}

// reference: https://www.joshmorony.com/high-performance-list-filtering-in-ionic-2/
