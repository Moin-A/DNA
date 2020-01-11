import App, { Container } from 'next/app';
import Moin from '../components/Moin'

class MyApp extends App {
    render() {
        const {Component} = this.props
        return (
            <Container>
               
                <Moin>
                <Component/>
                </Moin>
            </Container>
        );
    }
}

export default MyApp;
