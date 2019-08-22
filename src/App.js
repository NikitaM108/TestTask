 import React from 'react';
 import { YMaps,  Map, RouteButton, SearchControl, Placemark} from 'react-yandex-maps';
 import './App.css';


 
 

 const mapState = { center: [55.755768, 37.617671], zoom: 10 };
 

 class App extends React.Component  {
	 
	 state= { width: 600, height: 600, objects:['']};

	 

		render() {
			const { width, height,} = this.state; 
			return(
		<div >
			<YMaps query={{
      apikey: '29429ac3-3bfa-4e98-8f56-ca75a2bdfbea',
    }}>
				<div > My awesome application with maps!</div>
    <div >
      <Map state={mapState} width={width} height={height}  >
			<RouteButton options={{ float: 'right' }} />
			<SearchControl options={{ float: 'left' }} />
			</Map>
			<div>	
		
			</div>
			
			
		
    </div>

		
  </YMaps>
     
    </div>
			)
		};
}
 

export default App;

