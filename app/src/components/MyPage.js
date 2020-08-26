//5.
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";

const FetchMe = ({fetchData,name,isFetching}) => {
  useEffect(() => {
    // run action creator when the component mounts
    fetchData();
  }, [fetchData]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  

  return (
    <>
      {/* {console.log(props)} */}
      <h2>Data: {name}</h2>
      <button onClick={() => fetchData()}>Get Data</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // quote: state.quote,
    isFetching: state.isFetching,
    name:state.name,
    error: state.error,
    
  };
};

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(FetchMe);
