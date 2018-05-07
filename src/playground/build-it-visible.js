class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            };
        });
    }
    
    render() {
        return(
            <div>
                <h1>Visibillity Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey!! Here is some text you can see now</p>
                    </div>
                    )}
            </div>
        );
    }
}

ReactDOM.render(<Toggler />, document.getElementById('app'));

/*let Visibility = false;
const toggleContent = () => {
    Visibility = !Visibility;
    renderApp();
};




const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleContent}>
                {Visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {Visibility && <p>Hey!! Here is some text you can see now</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
}; 

renderApp(); */