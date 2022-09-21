import React, { useState } from 'react'

export const UseState = ({ name }) => {
	const [error, setError] = useState(false)
	return (
		<div>
			<h2>Eliminar {name}</h2>
			<p>Por favor escribe el codigo de seguridad</p>
			<input placeholder="Codigo de seguridad" />
			<button onClick={() => setError(!error)}>Comprobar</button>
			{error && <h4>Error: ingrese su codigo de seguridad!</h4>}
		</div>
	)
}
