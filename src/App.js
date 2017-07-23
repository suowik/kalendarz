import React, {Component} from 'react';
import moment from 'moment';

const format = 'DD-MM-YYYY HH:mm:ss';
const dateFormat = 'DD-MM-YYYY';

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            now: moment()
        };
        this.dates = {
            beginning: moment([2016, 10, 2]),
            smallBeginning: moment([2016, 10, 4]),
            coffee: moment([2016, 9, 12]),
            engagement: moment([2017, 5, 8]),
            kiss: moment([2016, 10, 10]),
            hug: moment([2016, 9, 23]),
            myLove: moment([2016, 10, 25]),
            herLove: moment([2016, 11, 18]),
            wedding: moment([2017, 11, 26])
        }
    }

    componentDidMount() {
        let that = this;
        setInterval(() => {
            that.setState({
                now: moment()
            })
        }, 1000)
    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-6">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h3>Do naszego ślubu pozostało:</h3>
                            <h3>{this.dates.wedding.diff(this.state.now, 'days')} dni</h3>
                            <h3>{this.dates.wedding.diff(this.state.now, 'hours')} godzin</h3>
                            <h3>{this.dates.wedding.diff(this.state.now, 'seconds')} sekund</h3>

                            <h4><strong>Zaręczyliśmy się</strong> {this.state.now.diff(this.dates.engagement, 'days')} dni temu</h4>
                            <h4>Znamy się już: {this.state.now.diff(this.dates.coffee, 'days')} dni </h4>
                            <h4>Jesteśmy razem: {this.state.now.diff(this.dates.beginning, 'days')} dni </h4>
                            <h4>'Mała miesięcznica' zdarzyła
                                się: {this.state.now.diff(this.dates.smallBeginning, 'days')} dni temu</h4>
                            <h4>Pocałowaś mnie {this.state.now.diff(this.dates.beginning, 'months')} miesięcy temu </h4>
                            <h4>Przytuliłem się do Ciebie: {this.state.now.diff(this.dates.hug, 'days')} dni
                                temu </h4>

                            <h4>Pierwszy raz powiedziałem, że Cię kocham: {this.state.now.diff(this.dates.myLove, 'days')} dni
                                temu </h4>

                            <h4>Pierwszy raz usłyszałem "kocham Cię": {this.state.now.diff(this.dates.herLove, 'days')} dni
                                temu </h4>

                            Te kilka dat zmieniło i ciągle zmienia moje życie. Dziękuję Ci za wszystkie piękne chwile :)

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
