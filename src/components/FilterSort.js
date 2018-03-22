import React from 'react';
//part of table handle sort by criteria
export default class FilterSort extends React.Component{
  constructor(props){
    super(props);
    this.toglePoint = 0;
    this._sortButtonHanler = this._sortButtonHanler.bind(this);
  }

  _sortButtonHanler(){
    this.toglePoint++;
    if(this.toglePoint %2 === 1){
      this.props.callBackSort(FilterSort.ASCENDING,this.props.sortBy);
      return;
    }
    this.props.callBackSort(FilterSort.DESCENDING,this.props.sortBy);
  }

  render(){
    return(
        <button onClick={this._sortButtonHanler} className="float-right btn btn-outline-light btn-sm button-toggles">
          <i className="fa fa-sort"/>
        </button>
    );
  }
}

FilterSort.ASCENDING = "ASCENDING";
FilterSort.DESCENDING = "DESCENDING";