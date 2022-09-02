import _regeneratorRuntime from "babel-runtime/regenerator";

var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getState = function getState(_ref) {
	var getStore = _ref.getStore,
	    getActions = _ref.getActions,
	    setStore = _ref.setStore;

	return {
		store: {
			message: null,
			demo: [{
				title: "FIRST",
				background: "white",
				initial: "white"
			}, {
				title: "SECOND",
				background: "white",
				initial: "white"
			}]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: function exampleFunction() {
				getActions().changeColor(0, "green");
			},

			getMessage: function () {
				var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
					var resp, data;
					return _regeneratorRuntime.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									_context.prev = 0;
									_context.next = 3;
									return fetch(process.env.BACKEND_URL + "/api/hello");

								case 3:
									resp = _context.sent;
									_context.next = 6;
									return resp.json();

								case 6:
									data = _context.sent;

									setStore({ message: data.message });
									// don't forget to return something, that is how the async resolves
									return _context.abrupt("return", data);

								case 11:
									_context.prev = 11;
									_context.t0 = _context["catch"](0);

									console.log("Error loading message from backend", _context.t0);

								case 14:
								case "end":
									return _context.stop();
							}
						}
					}, _callee, _this, [[0, 11]]);
				}));

				function getMessage() {
					return _ref2.apply(this, arguments);
				}

				return getMessage;
			}(),
			changeColor: function changeColor(index, color) {
				//get the store
				var store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				var demo = store.demo.map(function (elm, i) {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;