import React from 'react'

class Loading extends React.Component {
	componentWillUnmount() {
		console.log(`componentWillUnmount !!!!`)
	}
	render() {
		return (
			<>
				<h3>Cargando ....</h3>
			</>
		)
	}
}

export default Loading
