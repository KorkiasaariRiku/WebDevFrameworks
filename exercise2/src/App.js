import React from "react";
import Title from './components/Title';
import ShoppingList from './components/List';
import styles from './App.module.css';
import './App.css';

class App extends React.Component {
  constructor(props)
  {

    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Vodka', qty: 4, unit: 'ltr' },
        { id: 2, value: 'Yeast', qty: 11, unit: 'grs' },
        { id: 3, value: 'Sugar', qty: 6, unit: 'kgs' },
        { id: 4, value: 'Water', qty: 25, unit: 'ltr' }
      ]
    };

  }

  addVodka =() =>{
    this.setState({items: [...this.state.items,{id:1,value: "Vodka", qty:1 , unit:"ltr"}]});
  }
  addYeast =() =>{
    this.setState({items: [...this.state.items,{id:2,value: "Yeast", qty:11 , unit:"grs"}]});
  }
  addSugar =() =>{
    this.setState({items: [...this.state.items,{id:3,value: "Sugar", qty:6 , unit:"kgs"}]});
  }
  addWater =() =>{
    this.setState({items: [...this.state.items,{id:4,value: "Water", qty:25 , unit:"ltr"}]});
  }




  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addVodka}> Add Vodka</button>
      <button onClick={ this.addYeast}> Add Vodka</button>
      <button onClick={ this.addSugar}> Add Vodka</button>
      <button onClick={ this.addWater}> Add Vodka</button>
    </div>
  }
}

export default App;