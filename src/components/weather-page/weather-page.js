import React, {Component} from 'react';
import { connect } from 'react-redux';

import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { getCityFiveDayAction, searchCityAction, getCityCurrentConditions } from "../../redux/actions";
import CityCard from '../city-card/city-card';

class WeatherPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: '',
            openModal: false
        }
    }
    onLabelChange = (e) => {
        this.setState({
            label:e.target.value
        })
    }


    onSubmit = (event) => {
        const {label} = this.state;
        event.preventDefault();
        if (label.replace(/[^A-Za-z]/ig, '').trim()) {
            this.props.reduxActions.searchCity(label);
            this.setState({
                label: ''
            });  
        }
        else {
            this.setState({
                openModal: !this.state.openModal
            })
        }  
    }

    closeModal= () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }

    componentDidMount() {
        this.props.reduxActions.getCityFiveDayAction(215854);
        this.props.reduxActions.getCityCurrentConditions(215854);
        this.props.reduxActions.searchCity("tel aviv");
    }

    componentDidUpdate(prevProps){
        if(this.props.search!==prevProps.search){
            if(!this.props.search) {
                return null;
            }
            this.props.reduxActions.getCityFiveDayAction(this.props.search.Key);
            this.props.reduxActions.getCityCurrentConditions(this.props.search.Key);
        }
    }

    render() {
        const { search } = this.props;
        if(!search) {
            return null;
        }
        return(
        <div>
            <Container>
            <h1>weather page</h1>
            <form onSubmit={this.onSubmit}>
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
            <Grid item>
            <IconButton aria-label="search"  type="submit">
            <SearchIcon />
            </IconButton>
            </Grid>
            <Grid item>
            <TextField
                    id="outlined-name"
                    label="chek weather in your city"
                    margin="normal"
                    variant="outlined"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                </Grid>
        </Grid>
            </form>
            <Grid container>
            <Dialog
            open={this.state.openModal}
            onClose={this.closeModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
            {"Enter the name of the city"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Enter the full of the city name or part of it. Searching should be done in English letters only.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.closeModal} color="primary">
                Ok
            </Button>
            </DialogActions>
      </Dialog>
            <CityCard/>
            </Grid>
            </Container>
        </div>            
        )
    }
}


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        reduxActions: {
            getCityFiveDayAction: (key) => {
                dispatch(getCityFiveDayAction(key))
            },
            searchCity: (search) => {
                dispatch(searchCityAction(search))
            },
            getCityCurrentConditions: (key) => {
                dispatch(getCityCurrentConditions(key))
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherPage);