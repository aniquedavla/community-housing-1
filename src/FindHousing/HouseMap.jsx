import React from 'react';
import ListHouse from './ListHouse';
import GoogleMap from './GoogleMap';
import LeafMap from './LeafMap';
import TheLeafMap from './TheLeafMap';
import LeafletHouseMap from './LeafletHouseMap';


class HouseMap extends React.Component {
  render() {

    return (
      <div>
        
        <TheLeafMap/>
      </div>

  );
  }
}

export default HouseMap;
