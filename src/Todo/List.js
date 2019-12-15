import React, { Component } from 'react';


class List extends Component {
    constructor() {
        super();
        this.state = {
            produit: '',
            products: []
        }
    }

    onChange(event) {
        this.setState({
            produit: event.target.value
        });
    }

    addElement(event) {
        event.preventDefault();
        this.setState({
            produit: '',
            products: [...this.state.products, this.state.produit]
        });
    }

    delete(event) {
        event.preventDefault();
        const array = this.state.products;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            products: array
        });
    }

    renderList() {
        return this.state.products.map((value) => {
            return (
                <div key={value} className="list-group-item"> 
                    {value} 
                    <button 
                    className="btn btn-danger m-3"
                    onClick ={this.delete.bind(this)}
                    >Supprimer
                    </button>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Ma Liste de Course</h1>
                <form>
                    <input
                        value={this.state.produit}
                        type="text"
                        placeholder="votre élément"
                        onChange={this.onChange.bind(this)}
                    />
                    <button
                        className="btn btn-success m-3"
                        onClick={this.addElement.bind(this)}
                    >
                        Ajouter
                        </button>
                </form>
                <div className="list-group">
                    {this.renderList()}
                </div>

            </div>
        );
    }
}

export default List;