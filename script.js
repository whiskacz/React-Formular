class Formular extends React.Component{
    state = {
        city : "London",
        text: "nic",
        check: true,
        option: 0

    }

    handleCity =(e) => {
        this.setState({
            city : e.target.value
        })
    }
    handleText(e){
        this.setState({
            text: e.target.value
        })
    }
    handleCheckBox= (e) =>{
        this.setState({
            check: e.target.checked
        })
    }
    handleOptions = (e) => {
        this.setState({
            option: e.target.value
        })
    }

    render(){
        return(
            <div>
            <label>
                Podaj miasto
                <input type="text" value={this.state.city} onChange={this.handleCity} />
            </label>
            <br />
            <label>
                Napisz coś o mieście
                <textarea value={this.state.text} onChange={this.handleText.bind(this)}></textarea>
            </label>
            <br />
            <label>
                Czy lubisz to miasto?
                <input type="checkbox" onChange={this.handleCheckBox} checked={this.state.check}/>
            </label>
            <br />
            <label>
                Ile razy byłeś w tym mieście?
                <select value={this.state.option} onChange={this.handleOptions}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="more">więcej</option>
                </select>
            </label>
                
                
            </div>



        )
    }
}
ReactDOM.render(<Formular />, document.getElementById('root'))