import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY='AIzaSyAXnR6vU4rsK_Ysbe6Q9ZXO7RV9XufwNOE';//Youtube Api key


//It's function component which currently returns some other component.
class App extends Component {
    constructor(props) {
        super(props);

        this.state={
            videos:[],
            selectedVideo:undefined
        };

        this.handleVideoSearch('god of war');
        this.handleSelectedVideo=this.handleSelectedVideo.bind(this);
        this.handleVideoSearch=this.handleVideoSearch.bind(this);
        }

    handleSelectedVideo=function(selectedVideo) {
     this.setState(()=>({selectedVideo}));
    }

    handleVideoSearch=function(term) {
        YTSearch({key:API_KEY,term},(videos)=>{
            this.setState({
                videos,
                selectedVideo:videos[0]
            });

        });
    }

    
    render (){
        const videoSearch=_.debounce((term)=>this.handleVideoSearch(term),300);
      return( 
         
           <div>
            <SearchBar handleVideoSearch={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
             videos={this.state.videos}
             handleSelectedVideo={this.handleSelectedVideo}
             />
           </div>
      )
    }
}

ReactDOM.render(<App/>,document.querySelector('.container'));//ReactDOm 