import React, { Component } from 'react';
import { GridSpinner } from "react-spinners-kit";

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        const { loading } = this.state;
        const grid = {
            position: "absolute",
            top: "calc(50% - 80px)",
            left: "calc(50% - 80px)"
        };
        
        return (
           <div style={grid}>
               <GridSpinner
                    size={80}
                    color="#92BB24"
                    loading={loading}                
                />
            </div>
        );
    }
}

export default Loader;
