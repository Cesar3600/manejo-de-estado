import React from 'react'
import Loading from './Loading'

class ClassState extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: false,
			loading: false
		}
	}

	componentWillMount() {
		console.log(`componentWillMount`)
	}

	componentDidMount() {
		console.log(`componentDidMount`)
	}

	componentDidUpdate() {
		console.log('componentDidUpdate ... actualizacion!!!!')
		setTimeout(() => {
			if (!!this.state.loading) {
				this.setState({
					loading: false
				})
			}
		}, 3000)
	}

	render() {
		return (
			<div>
				<h2>Eliminar {this.props.name}</h2>
				<p>Por favor escribe el codigo de seguridad</p>
				<input placeholder="Codigo de seguridad" />
				<button onClick={() => this.setState({ loading: true })}>
					Comprobar
				</button>
				{this.state.error && (
					<h4>Error: ingrese su codigo de seguridad!</h4>
				)}
				{this.state.loading && <Loading />}
			</div>
		)
	}
}

export { ClassState }
