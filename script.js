class Formular extends React.Component{
    state = {
        city : "London",
        text: "nic",
        check: true,
        option: 0

    }

    handleChange =(e) => {
        
            if(e.target.type === "checkbox"){
                this.setState({
                [e.target.name] : e.target.checked
                })
            }
            else{
            this.setState({
            [e.target.name] : e.target.value
        })
            }
   
        }
    render(){
        return(
            <div>
            <label>
                Podaj miasto
                <input name="city" type="text" value={this.state.city} onChange={this.handleChange} />
            </label>
            <br />
            <label>
                Napisz coś o mieście
                <textarea name="text" value={this.state.text} onChange={this.handleChange.bind(this)}></textarea>
            </label>
            <br />
            <label>
                Czy lubisz to miasto?
                <input name="check" type="checkbox" onChange={this.handleChange} checked={this.state.check}/>
            </label>
            <br />
            <label>
                Ile razy byłeś w tym mieście?
                <select name="option" value={this.state.option} onChange={this.handleChange}>
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