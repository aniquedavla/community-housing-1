import React from 'react';
import { Button } from 'reactstrap';
import Search from './Search';
import Title from './Title';
import FindHouse from '../FindHousing/FindHouse';
import HomeNavBar from './HomeNavBar';
import RequestCommunity from './RequestCommunity';



//home page component to let the user search a community or creat a community
class Home extends React.Component {

  
  
  render() {

    return (
      <div className="App ">
        <HomeNavBar />
        <Title/>
          <form>
            <label>
                <input  placeholder="  Search for your community" style={{width: "500px", height: "35px",  borderColor: '#3f51b5'}}
                  type="text" name="name" />
            </label>
          </form>
        <Search/>
      </div>

    );
  }
}

export default Home;
