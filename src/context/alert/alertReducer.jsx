import { SHOW_ALERT, HIDE_ALERT } from '../type'

const handlers = {
	[SHOW_ALERT]: (state, action) => action.payload,
	[HIDE_ALERT]: () => null,
	DEFAULT: state => state
}

export const alertReduser = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT;
	return handler(state, action);
}