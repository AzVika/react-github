import { useReducer } from 'react';
import { AlertContext } from './AlertContext';
import { alertReduser } from './AlertReducer';
import { HIDE_ALERT, SHOW_ALERT } from '../type';

export const AlertState = ({ children }) => {
	const [state, dispatch] = useReducer(alertReduser, null);

	const hide = () => dispatch({ type: HIDE_ALERT });

	const show = (text, type = 'secondary') => {
		dispatch({
			type: SHOW_ALERT,
			payload: { type, text }
		})
	}

	return (
		<AlertContext.Provider value={{
			hide, show, alert: state
		}}>
			{children}
		</AlertContext.Provider>
	)
}