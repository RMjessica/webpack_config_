var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export var Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
var injectContext = function injectContext(PassedComponent) {
	var StoreWrapper = function StoreWrapper(props) {
		//this will be passed as the contenxt value
		var _useState = useState(getState({
			getStore: function getStore() {
				return state.store;
			},
			getActions: function getActions() {
				return state.actions;
			},
			setStore: function setStore(updatedStore) {
				return setState({
					store: Object.assign(state.store, updatedStore),
					actions: Object.assign({}, state.actions)
				});
			}
		})),
		    _useState2 = _slicedToArray(_useState, 2),
		    state = _useState2[0],
		    setState = _useState2[1];

		useEffect(function () {

			state.actions.getMessage();
		}, []);

		return React.createElement(
			Context.Provider,
			{ value: state },
			React.createElement(PassedComponent, props)
		);
	};
	return StoreWrapper;
};

export default injectContext;