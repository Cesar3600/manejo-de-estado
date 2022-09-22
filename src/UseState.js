import React, { useState, useEffect } from 'react'

export const UseState = ({ name }) => {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	//debugger

	useEffect(() => {
		setTimeout(() => {
			if (!!loading) {
				setLoading(false)
			}
		}, 3000)
	}, [loading])

	//debugger

	return (
		<div>
			<h2>Eliminar {name}</h2>
			<p>Por favor escribe el codigo de seguridad</p>
			<input placeholder="Codigo de seguridad" />
			<button onClick={() => setLoading(true)}>Comprobar</button>
			{error && <h4>Error: ingrese su codigo de seguridad!</h4>}
			{loading && <p>Cargando ...</p>}
		</div>
	)
}
