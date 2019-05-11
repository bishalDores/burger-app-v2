import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../ReactAux/ReactAux';


const withErrorHandlers = (WrapperComponent,axios) => {
    return class extends Component{

        state = {
            error: null
        };

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res,error => {
                this.setState({error:error})
            });
        }

        componentWillUnmount(){
            // console.log('Will Unmount');
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmHandler = () => {
            this.setState({error:null})
        };


        render(){
            return(
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmHandler}
                    >
                        {this.state.error ? this.state.error.message:null}
                    </Modal>
                    <WrapperComponent {...this.props}/>
                </Aux>
            )
        }
    }
};
export default withErrorHandlers;