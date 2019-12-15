import React, { Component } from 'react';
import Counter from '../Hooks/Counter';

class List extends Component {
    constructor() {
        super();
        this.state = {

            products: [
                { id: 1, nom: "poisson" },
                { id: 2, nom: "lait" },
                { id: 3, nom: "oeufs" }
            ],
            nouveauProduit: ''
        };
    }

    delete = (id) => {
        //crée une copie du tableau
        const produits = this.state.products.slice();
        const index = produits.findIndex((produit) => produit.id === id);
        produits.splice(index, 1);
        this.setState({
            products: produits
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime();
        const p = this.state.nouveauProduit;
        const product = {id : id, nom :p};

        const novoProduits = this.state.products.slice();

        novoProduits.push(product);

        this.setState({
            products : novoProduits, nouveauProduit:''
        });
    }

    handleChange = (event) => {
        //pour éviter que la page se recharge
        event.preventDefault();
    
        const value = event.target.value;
        this.setState({
            nouveauProduit: value
        });
    }

    render() {
        const title = "Ma Liste de Course";
        return (
            <div>
                <h1>{title}</h1>
                <Counter />
                <div className="list-group">

                    {this.state.products.map(produit =>
                        <div className="list-group-item">{produit.nom} <button className="btn btn-danger m-3" onClick={() => this.delete(produit.id)}>Supprimer</button></div>)
                    }

                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        placeholder="votre produit"
                        value={this.state.nouveauProduit}
                        onChange={this.handleChange}
                    />
                    <button
                        className="btn btn-success m-3"
                    >
                        Ajouter
                        </button>
                </form>


            </div>
        );
    }
}

export default List;