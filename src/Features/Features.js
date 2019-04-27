import React, { Component } from 'react';
import './Features.css'
import Option from '../Option/Option'
class Features extends Component{
    render(){
        const features = Object.keys(this.props.features)
          .map(key => {
            const options = this.props.features[key].map((item, index) => {
              const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return (
              <Option featureName={key} featureClass={featureClass} updateFeature={this.props.updateFeature} key={`${index}_${key}`} item={item} index={index} /> 
              )
            });
            return <div className="feature" key={key}>
              <div key={key} className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          }); 

        return (
        <div>
            {features}
        </div>
        )
    }
}

export default Features;