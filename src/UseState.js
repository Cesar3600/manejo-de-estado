import React, { useState, useEffect } from 'react'

const SECURITY_CODE = 'paradigma'

export const UseState = ({ name }) => {
	const [value, setValue] = useState('')
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	//debugger

	useEffect(() => {
		if (!!loading) {
			setTimeout(() => {
				if (value === SECURITY_CODE) {
					setLoading(false)
					setError(false)
				} else {
					setLoading(false)
					setError(true)
				}
			}, 1000)
		}
	}, [loading])

	//debugger

	return (
		<div>
			<h2>Eliminar {name}</h2>
			<p>Por favor escribe el codigo de seguridad</p>
			<input
				placeholder="Codigo de seguridad"
				onChange={(e) => setValue(e.target.value)}
				value={value}
			/>
			<button onClick={() => setLoading(true)}>Comprobar</button>
			{error && !loading && (
				<h4>Error: ingrese su codigo de seguridad!</h4>
			)}
			{loading && <p>Cargando ...</p>}
		</div>
	)
}
