import React from 'react'

class ClassState extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: false
		}
	}
	render() {
		return (
			<div>
				<h2>Eliminar {this.props.name}</h2>
				<p>Por favor escribe el codigo de seguridad</p>
				<input placeholder="Codigo de seguridad" />
				<button
					onClick={() =>
						this.setState((prevState) => ({
							error: !prevState.error
						}))
					}
				>
					Comprobar
				</button>
				{this.state.error && (
					<h4>Error: ingrese su codigo de seguridad!</h4>
				)}
			</div>
		)
	}
}

export { ClassState }
