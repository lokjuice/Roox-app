import '../scss/main.scss'
import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

interface IProps {
}

interface IState {
  data: any;
	error: any;
	isLoaded: boolean;
	byCity: boolean | null;
	byCompany: boolean | null;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  
		this.state = {
			data: [],
			error: null,
			isLoaded: false,
      byCity: null,
			byCompany: null,
		};
    this.updateData = this.updateData.bind(this);
  }
  componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(res => res.json())
		.then(result => {
  	  this.setState({
				data: result,
				isLoaded: true,
			});
  	},error => {
			this.setState({
				isLoaded: true,
				error
			});
		})
	}
  updateData = (value1: boolean, value2: boolean) => {
		this.setState({
      byCity: value2,
			byCompany: value1,
		});
  }
	render() {
    const { data, error, isLoaded } = this.state;
		if (error){
			return <div>Ошибка: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Загрузка...</div>;
		} else {
        return (
        <section className='main'>
          <LeftPanel data={data} updateData={this.updateData}/>
          <RightPanel data={data} byCity={this.state.byCity} byCompany={this.state.byCompany}/>
        </section>
		  )
    }
	}
}

export default App;
