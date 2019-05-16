import React, { Component } from "react";
import axios from "axios"

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);

    }

    handleFilter(filter){
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems = () => {
        axios.get('https://stevenadams.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        console.log("response data", response);
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch(error => {
        console.log(error);
      });
      }

    portfolioItems = () => {
        // Data that we'll need
        // background image: thumb_image_url
        // logo
        // description: description
        // id: id
        // "position"
        return this.state.data.map(whatever => {
            // console.log("portfolio item", whatever)
            return <PortfolioItem key={whatever.id} whatever={whatever}/>;
        })
    }

    componentDidMount(){
        this.getPortfolioItems();
    }


    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }


        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <button onClick ={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick ={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick ={() => this.handleFilter('Enterprise')}>Enterprise</button>
                {this.portfolioItems()}

            </div>
        )
    }
}