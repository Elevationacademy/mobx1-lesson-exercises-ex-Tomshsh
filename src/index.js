import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Item } from '../src/stores/Item'
import { ShoppingList } from '../src/stores/ShoppingList'


let groceryList = new ShoppingList()
let potatoes = new Item("Potatoes")
let sombreros = new Item("Sombreros")
let corn = new Item("Corn")
groceryList.list.push(potatoes,sombreros,corn)
// Use the prop "store" for your store
ReactDOM.render(<App store = {groceryList} />, document.getElementById('root'));
registerServiceWorker();
