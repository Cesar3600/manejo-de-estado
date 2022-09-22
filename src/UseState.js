import React, { useState, useEffect } from 'react'

export const UseState = ({ name }) => {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	//debugger

	useEffect(() => {
		console.log('inicio  efecto')
		//debugger

		setTimeout(() => {
			console.log('me demore 3 segundos?')
			if (!loading) {
				console.log('soy ua falsa de 3 segundos')
			}
			if (!!loading) {
				console.log('haciendo la validacion')
				setLoading(false)
				console.log('terminando la validacion')
				//debugger
			}
		}, 3000)

		console.log('fin efecto')
		//debugger
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
