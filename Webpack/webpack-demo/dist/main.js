/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "eb1abfe0c7ff2e682077";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/index.js")(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/a.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/style/a.scss ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../assets/111.jpg */ "./src/assets/111.jpg"));
// Module
exports.push([module.i, ".box {\n  background-color: #c09;\n  font-size: 30px;\n  display: -webkit-box;\n  display: flex;\n  background: url(" + ___CSS_LOADER_URL___0___ + "); }\n", "",{"version":3,"sources":["D:\\Code\\CommonProject\\Front-End\\Webpack\\webpack-demo/src\\style\\a.scss"],"names":[],"mappings":"AAEA;EACI,sBAHS;EAIT,eAAe;EACf,oBAAa;EAAb,aAAa;EACb,yCAAoC,EAAA","file":"a.scss","sourcesContent":["$bgColor:#c09;\n\n.box{\n    background-color: $bgColor;\n    font-size: 30px;\n    display: flex;\n    background: url('../assets/111.jpg')\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/style.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/style/style.css ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".box {\n  color: red; }\n", "",{"version":3,"sources":["D:\\Code\\CommonProject\\Front-End\\Webpack\\webpack-demo/src\\style\\style.css"],"names":[],"mappings":"AAAA;EACE,UAAU,EAAA","file":"style.css","sourcesContent":[".box {\n  color: red;\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/assets/111.jpg":
/*!****************************!*\
  !*** ./src/assets/111.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/b.js":
/*!******************!*\
  !*** ./src/b.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = exports.a = 3;
var b = exports.b = 4;
var c = exports.c = 5;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(/*! ./style/style.css */ "./src/style/style.css");

__webpack_require__(/*! ./style/a.scss */ "./src/style/a.scss");

var _b = __webpack_require__(/*! @/b */ "./src/b.js");

var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createDomElement() {
  var dom = document.createElement('div');
  dom.innerHTML = _lodash2.default.join(['aicoder', '.com', ' wow'], '');
  dom.className = 'box';
  return dom;
}

document.body.appendChild(createDomElement());
console.log(2222222222);

var Temp = function () {
  function Temp() {
    (0, _classCallCheck3.default)(this, Temp);
  }

  (0, _createClass3.default)(Temp, [{
    key: 'show',
    value: function show() {
      console.log('this.Age :', this.Age);
    }
  }, {
    key: 'Age',
    get: function get() {
      return this._age;
    },
    set: function set(val) {
      this._age = val + 1;
    }
  }]);
  return Temp;
}();

var t = new Temp();
t.Age = 19;

t.show();

console.log('a:', _b.a);
console.log('b:', _b.b);
console.log('c:', _b.c);

(0, _jquery2.default)(function () {
  console.log('jq');
  (0, _jquery2.default)('.box').click(function () {
    alert('111');
  });
});

/***/ }),

/***/ "./src/style/a.scss":
/*!**************************!*\
  !*** ./src/style/a.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./a.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/a.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./a.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/a.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./a.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/a.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/style.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style/style.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "lodash":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = _;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2Euc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy8xMTEuanBnIiwid2VicGFjazovLy8uL3NyYy9iLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvYS5zY3NzPzQ4MzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz8wMjBkIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiJdLCJuYW1lcyI6WyJhIiwiYiIsImMiLCJjcmVhdGVEb21FbGVtZW50IiwiZG9tIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiXyIsImpvaW4iLCJjbGFzc05hbWUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwiVGVtcCIsIkFnZSIsIl9hZ2UiLCJ2YWwiLCJ0Iiwic2hvdyIsImNsaWNrIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsR0FBRzs7UUFFSDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QjtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGtCQUFrQiw4QkFBOEI7UUFDaEQ7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esb0JBQW9CLDJCQUEyQjtRQUMvQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxtQkFBbUIsY0FBYztRQUNqQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLEtBQUs7UUFDckI7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsWUFBWTtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGNBQWMsNEJBQTRCO1FBQzFDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTs7UUFFSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0EsZUFBZSw0QkFBNEI7UUFDM0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQix1Q0FBdUM7UUFDeEQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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OztBQ3BDQSx3Qjs7Ozs7Ozs7Ozs7QUNBQSxtQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiZWIxYWJmZTBjN2ZmMmU2ODIwNzdcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IFwibWFpblwiO1xuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmVcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9pbmRleC5qc1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuOScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGhhcyhleHBvcnRzLCBrZXkpKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBJbXBvcnRzXG52YXIgZ2V0VXJsID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9hc3NldHMvMTExLmpwZ1wiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwOTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkQ6XFxcXENvZGVcXFxcQ29tbW9uUHJvamVjdFxcXFxGcm9udC1FbmRcXFxcV2VicGFja1xcXFx3ZWJwYWNrLWRlbW8vc3JjXFxcXHN0eWxlXFxcXGEuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLHNCQUhTO0VBSVQsZUFBZTtFQUNmLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlDQUFvQyxFQUFBXCIsXCJmaWxlXCI6XCJhLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJnQ29sb3I6I2MwOTtcXG5cXG4uYm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdDb2xvcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy8xMTEuanBnJylcXG59XCJdfV0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ib3gge1xcbiAgY29sb3I6IHJlZDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkQ6XFxcXENvZGVcXFxcQ29tbW9uUHJvamVjdFxcXFxGcm9udC1FbmRcXFxcV2VicGFja1xcXFx3ZWJwYWNrLWRlbW8vc3JjXFxcXHN0eWxlXFxcXHN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVUsRUFBQVwiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ib3gge1xcbiAgY29sb3I6IHJlZDtcXG59XCJdfV0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBuZWVkUXVvdGVzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cbiAgdXJsID0gdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFVrbEdSbDR3QUFCWFJVSlFWbEE0SUZJd0FBQncyUUNkQVNyMEFVb0JQcEZHblVvbHBDTW1wOVE2RU5BU0NVM2RWK3oweGtyNGw2MXJiWldFL1ArQTM0cC9XZlFtMVdacXZsTm1YL2EvTUQyMGVOZTVqNW45ODg2SGxaMmw1dmZWWG13LzdIcmwzRjlJdzFoTHpmeHA5QWZ4dlJDeno5dE9wWjg2L0xIOWovSCsyYisvOE1mbnBxS1pLZHlkMm5tVTJ2ZXZrdkNIY1A5N3Z3Um1sbEgvcFRVeHkrM0xLcWtlK2RlTXVGTmpTZFpUNGNtT0ZsRWVxM0dMejBaRzU4K0ZoUVZzWE00cFZib0FJa0dXREJiQzEwTzdubVk3blQrdXZpMUFrNjBScWtPRTZsdE4wUnFkY2pqOHFxZnl2Tjd1TlBCSERsYWhXZGp4c3ZGQW00MXNNTWlidm05R3pzM2ZEWWxmdi8vLy8vKzIrNnh3dkZ4L3h2Qm95MU4xRFNqVjJvTXgwUDd5d3VlVlB5TjVoQnVocmhFcEZuNCt0RnVBSWdmVFhaSzZIUU0vODBUWi9iVUdWazQrckJINGpHcVR3WGgwdVJFNnNQMFZrV2ZrdjZwOCs2R05aSFovUUxRRW52Y1VvTlg5TEJ6MnlCaTQyQno5VnNJbkxRaEpJeXZNb3NmVU9kb3dZdnNDaWNkNjliaFk4YzZQTjh0VE1SVE5ycHljMkZmS0xYa28vbWkvSE9UU2w0NlNIdnVtSHh4clh0a0x3MkxXK0hJb3NETzRwS0kzdEsvRktDNXY5cUczcXl6WmhYSkpnbTRBSlVGSklGTkp4UzR0S2tNelRheFNORmlxazBkcGtJOW04a1Z5bGF1V0NMV1MyZ2dVMjZGSXlnYnpGWlg3ZUtTa2tHTGg5MHRJcVU1VGRoeXBHUjVaVUNYMlE2MVZKdHVrRmUyeEVhQ3gvQTYvbTBFTTY5Yi9UTWsrWUdzLzJORnVwRXdCbUdsaElqNCtrSFZZUUF6OWlCeVhLb0haSCtiNjBEdEVoVkRTQm5Nb1JOZ0Mzd0hXOE0yaysySkV2ZUZTZGV5Ky9ZZjJrVlFvdU82VElmak52bUVjZHBudHg3em0zT1A2Q09MbHNqekZhWHlDUVhldTVoQ1dMOWliRm5OTDdzNVVLakZJU0t1T0k1VGhXVllDbkJKREo5ckpyS09kd3MrZlhkZmxnQk1aRTR2c0hGWU9BdStPczRrc0hGTElSUDErdU92U1kvQTVLWnhlREt0SXZ0eUE4RWlsTnVIbjE4RjA1VXA5bmxON25CSTNlNUlMbEl3dGR3VENKanV4S1pFd0IwSFk4WVpHeXlFd2NHdXdCdk1DNzNnd2hTTkJUcSszZVV2ZSs5Mk55M2lMRDJKUmYyenp0QkhZVE5DT0txL1FVNXp0bEZKZ2dFUlNWVzkzc3dIbWpzQm05MVdZb3J1YkdERmp2WE1lLzZVMGt2YUF2Wi9WRlFwcEtIYyt0OWhuQVpCbkEwcGtTL01vZmh6MU1yY1hVSHR3NXdSZ29hNmNMdVBlVkllcXg1NmRxd3AzRmJvYldzREkvaUZzMTR2UzNKVTVwNnB2NG83REQ5Nll0azZ0Q0Z4THhaZ2ZSQnFCZmNoWEZQVTh1S1E4a09TUnVDbjZhblZsNTd2TEltNnlzRFppcTBaVHlFMFBUbi9JWlh4OUgyTWdoYitQdjh5NUhNd201K1Y3aDhVYm5pTmdXTTVEckVlV2xLd3dRS0dzV2N0U2VEQkNuWUUwLzRxVnAvLzRLQUxQNGFqYTZ2SmcwUDVDalhjVHBiVDhDWHNDQkNuZ0g5TjNkNmlNTnhucEVYWHNLWkQ3RkFXK2pKY3JjZnl1cHo2ekF6TUwzODNENW4zOWI0bk14VHhnLzE3bFJPdWlFdEsrK0ZNZVd0ekltbVp5SzJJYU82MmlKeElJb0xoSk56dU0zMkdsRjFwRVVTbFFsVEFhZVRrVzdEY2FneTkrblY5SE04UzI1anNSZFhMU0Y4Zmp3VlBMODdtZThMWGkyOFIwZXc0M3ZnYUtaU2Q0RFQ1L0FSbmVESHNkd1VtREc4MjdhWkQ3ZTQ2TWtQVDEvUndxS203WjNlVFd6dmhlNnNSd25QRWpVRWFIVTZ3MHg4OTFqQnczL3JaM2NGWW1ha2F2Y2JubXBPYzk5L21PNUNrMVY0T2I1Tm9qZU9vVEdDVEZ3cDBaT0QzK1FJTFlPbEZzOVd4dkE4NHc1SzZ4b0h0QWF3anQwS1lCM2JKQnhEU3BhWWFNanFUeStES2JLamlmdEtCUFJNZjNmaUpaWGNVU21ianowNVdaa3Y1UzQzMzVESFpvSWFXc1NHSkEwSDhlZTRoT0lJQlNucm5iWjUraE53TnhsQlluS3RSdlI5cFJaLzhJRkNjZDBtRlk5ZC94WE9zWnBnVVpPcU5xTnJ5dnNVU21STUFib3FBb3h3SFRHbGNEdkd0c3k3MVlwcUZBWk15MUE3WHZ6TW5aVGFnU001dk5CdldSbzBKUWlzRnNmanNWTTVuR1Nwbm9VTTBYZXdwa1BzVWt6cTRkcEIzYVZXdU5DanV5ZlhhNGU5ZE9zVU5JaHFEdWRkaGd1WlZBVWp1N1I1K2thSGVOeUR5V3VldnFIZ015UEY4TXI4Z1N1cFFYc1hYeXlKZ0RmeDkvajdrb012cTlRN25keGNkaFNES0l4ZWE1UzV0cWh3dkNCVFBDeXhaMDBYUGN0Qnl0dkJUeFF1Q2FoWmZFbXVJYWIrUHY4ZmY0Ky93eUFaUVZmUkJBRng3WGcxQUV5UXBoRHBIRzlnTHIzeVl5bGdicEl0c2F3cXY2eGZjM1Y4K2cySzh4ZjRRWi9nbmZERzNTNlIvcEN0OGdYbzhTb254NE1neTM4ZmRhdGkxNy81UGFtV1MzellPR05IQ3huQlV1NmY3Tlg4ZDBHOGxuMlJOMzdLTHhqQ3o0OUdZbW1GaDY1K0NRdDV3aFVETi9IaXpBL1VlV21NMWladUFVMzhmZjVBSkdFV0NqMTZ5a2Vqb2R0YUEyc1RwQ3ZuVHR2bE9NNzczaW9BaHE4cDhBa0JMakcwOUlwOGZQZGR5TVJmNFJVSVZza25QOHRVS3VVQURrdTBXK1ZmQWxmLzVlanp2M3gzci8vOW8wLzZTNy9xTlB4bVBnalh4UlZvZGxyb29pUE11dVd1NjNoR09zVnJvcE9FOHlXSjZZeFBLYThrYmtNSThjb2pmenRKU0h3NFVpZ3Q0MXE1ODQrclVXaVRpbW9ZSjZ5SUEzZ1VtZWxlMDlkRGFreXJXMGR0VWNZUzRTMDdPWUhZWmswNFNNUUEwT2h1TEl5QkswcXp3WUxFZkg2dlpsRzAxK3RTTExqZG1NSjU3NEREQ1hiTStVYXgxT1Z4NmUxZFNlVS9MdTh0NnlCbk1JRDVWYkM2VktOVzgveUlFck9OQ0FJU0pkM3R0aHZjb3JoSDdRVXBMWHh1K3VUVzNCM3FmczIyNTZvdU5yK1hIYXprTzhXZ2M2U251aG9sa2lwc3dmTkJWR21peDM2SGNkLzJuV0NsVnlnM2VtVlJVeGpBZVVCZVkyVWZDbXpNWFVoTVJMMWc2ZVNRMStXem9MU0orYlFtclBWb0ttYVJmT1o1WEZhYnUvU3k0RmQ2NWI3SVNybTBBTDlYNzU3WXg2bUdDem1ZRjRDNS9aTXBKeG5zNytVRFN3dU5mN2hrWlptWnB1N3RpQkxKVDNLWENIOFRSSzcyV0w2RUljMFY5cU5uNVV5UUI0WXVaNFI4Y3dEN0FYTmZ4QzR6enpYUVlaYkJUcC9nMmpNbjZ6dGN2ODRvSkVhQkpwTk9zNHRjM1p3Y3ZoUTM0SXFTZnlPK2w0NkowcWVFb2E4TzhocHlyR3VmR3FEZ0FvRlVzMXRycXY5MTRlbmltd2ZxVkNwUDd5RDkwWldMZXA0c1UzYXNtSGFYNEpXcGdpQ2h4UmNrRUt1dCtHN2RqcWhUbWc4SjQwRGZLdnkyUzZWZnRCbDBhSUw0d21UdC96UFIzeHRkZ1liU2NVOFBHYmZEWU16VG83L3RaeHMyS21ob2JEYkEvRVVKdmRBa3JRZ3p3d0swNFJ3N3ZPZGZJWkRkL0NLbkUzc2lUVm9TcTYySStWTmlCRzNVd0Z6NnlLQ0Ztenh4MWdwaS9GRE1Ja3RLeXBvMWJIRUxpdE9KVTBzWUlyZER6VDJ4dzcyNllLRFU3QVgrb1BGTmpRZjFuNVBhamtlem92OUc2a3hBU3NOaXVnTW5uTjJ6ajJLTGo3ZW1oQ1lPbDA0V3dvK2FsL3V2a1NmZUJuTW8rVUc3eEZ6UDlzZURuYUIrYTMrb0lBR2ZWaHUyOWxSQTY1Z3pPUW5IMVZDV2hHVE9XN1RFeGZYUHBvZkcvOVp0ZEY0c1plWnJDekoxTG5Ra0szZmNmN0NkdEhiZGtOQWpYWm1IRVNHdTNQVHBHOENWUXQ4K1VqV21IV1U1ZWtGZFVVVUdrZGc2dXp0WGt2WFd3ZTBRRGRIUCtEL2FmSTRFUjFFV0FnOWJNTGNmb1l4a3dkY2U0SlhBU3h2QmdtdTg5ZnI2QXhBVXhlL2R6YTEvTWhNTXdsSzNtZU5sUXY3cW1saDVQLzkrOWpSSURIdzZhK1grcjZ2RkxDVGRualBWOHFxSGt4MmVjYStwd2syRTN4ay9pMWJqaVo5MXVicFoyWjQ4eHArYUNWUy95MDlOTzkya3M5TjNyV05ReXh1WUlHaDg2cHBNME5vbmR0SHBuendLanoyZWlmR2Q3eVhnZ3JXN2JTMko2dnRwSzFBRFc3VXpjaEJ6ZVQ0NzJ1U3h6dEJBeFh0ajBEZExjdGJacmlUSm5wRS9RcVRkcHgra1BST1lUTWZ5bVBrUHZVNHE2OTVQRWdSTVRIOTVLcGs1bzFUM2RPVFR1VzFTSFpYNFZxWUcwYmRlWlRpaExaZGRlMDBNT3hlYklsRTNqZkZWZXlZS0lMdWdpYWNqSzh6ZzM4RkRQYUJvVzVjR1plVkpuZzNHT3dZazJZRlQ0VTNHZWthLzE0dDFxTzBnQ1laNmZRTWE4UzMrM1U1aTdxS29rcXFnVjRJSWQwZmlKUUwrSzVFNSs5Ry9NUFk2alZadDFycHdoSlE2aEExdExUZEhFZ1dIYnMxbnJiSGJwaTNiNTQza0UrTjlhdjFkV2o0eTQ2RU1yTnJhTlo1azJWSG83WUY4S3ZnUVk2bG8zSFIreEZJMHZTZ1FYZTFUa3p1M2hUSFdTVnFXVVIxcDJvSExaREJWZWlwSmU5amxsdHEwWHE5WlRCVjJtdWhKS2VFWkdEa3F3MTNUTE9RYTNROUdWK0pjNHQvR2IyQ1BYMWcweStRYW1mNmIzMVRlU3V4NFRVNmcwcFl2TFFwWUNUMTJlaWxSbENTeHQyZ1JDTTJwWjJlQ1pIaExrN01Qb0J1RHRnR1piaXQxMkVKanB6a2hLSUxZcU52VEtDNXV5QlFWWld5ME9WZ3dlUHdvSjdVR0ZkQnVQY1FLSW1ud2dLQUpGVVkvSjhkdDNEVGNIK3JjTkZqSDRVMldmSDkzSnVlamxlSTN2QVUzdUZXeU9RWWJyMWZTZHdnQnVrVGVUMjRZcENYOFkycDN4L3dJZXVuakZ3NkxzTm13MnU0RElTTVdKQS9EZTdHc0tlbjB0aVVrNThmejNHWFdNSzIxZFI5cUcxZGE2Z3V0bmwwN1VSZHU1UVV5bGM1SHk1WTRuNGErbk54dWhBNm9wV3pyNWt5TDRMbFJXYUlkYitkako2VVRwUmhBTkluOWVscnVISjBtOXd5Mnc4dTRBUE5IZUo1b09CWUZBdndPNHVhOEl6cytwVDc1bE1FTkZNeGRjMWxJWGh2YlZNTndEaW1BUDZzM25NbnRvOFF3RXVLMHZCUHZSTURySHhqZ0pyQWpQUjdKc2kveVhKa1RHeCsvMEc0aEZNeUxFbjBwZTVaQklaOWxRZ1lJTXlZRHFSRzlhZVp5ZEtrSm85WWJ5OWJzRXhURmZ3ZUlpNzVpTVZkbktEQk9jTWlXZy9MNXJkamZSM3hrZ1BtaHEwa2g4b1BwUDFRNm8xMm9McEpKQXcyTFBxZi9NMWoyeEZzOWxUaUlxNlRSNFpWSmNvTkQxVzFlVm9lMjNOdWJoTC9OTEc0NUtiTVRIUnVDTHNSc01sUTNQVVZGMUVCcm5qRDJMM2lxZ2I2MWEwUkNNWUVmR3NyM095VGRleG5Dcm9HaXJoRElIYUZCQURFL0htbEVrbU52V2Nnd3JXYjArTlpSeHBJZzBnMHcwNWtDVVM0Z3BOem4vbTF2MytrV0RUTThmUGZ3ZVAwc2FkUnlZSjdkTXpUTHc3dS81c0xuOTl4TmlWS1FRUWpCd1hmSDViVWNPZmtCWlR0Ri9SSm1jZHl4TnV3V0hmVzJzb0NnSS9YYUxGczZEYnJ3dW9qeVNiY20vOEJNc2t0OG9BSCtqNUdiQk5mQVh6Q1JTSkZCdEhsY3VqcGtKMEdFNHVPYmFqOUN5a0lwbkxpVVdkZEowRjB0dWM1SFl4T050bXdsamptdFFpelQ2M01jdGlNbFBoUkI3a05RbGdrdVF3dmw0L1ZDQXlwN2VUVVFBRG8xOEdmd29DblRUMVg2MmRXMjFhSkJnK3R6d055a1BsWjk0R0swMEJad0o0aUY5WXZXOUl1UWhKRXFidWxycXFhNmwxQ2s1RVYya3dZejJDVUpLNXBsWWlVMHVZcW81YjZBY3ArT2pzWVdWTzdkeGdnRFBKNkxscmVQMEV1ekZ3NXhtdTlaMjJkbFpUNCs5STNkRk9yVEtDUmF1QVZyMlZjT29XR1ZFOWxjL3UwQ0h6QkRjTERCaVVXYUZqKzJjelNnT3VPSU1oTmpqL1dzZFpmaDY0NjlmWS81TmdQcldoSkNvQkliYWdXS2FIaG9rNzRscWhYZzA0d0ZHZ1NOZFoyYmRpY0xmTm1FUnphS2wzRGZnN2xweXhNMW1jNWtobjlmSS91RkZFWitXSjJacnd3V0xPSDZOWVZ3MVIwWUppd2s2Y3cwSGhIQk01TVp6YTVDeWlwVEF0NlM2WDV0bmEwRjVKVWtZMlQwb0xKYmNmYVN2MVZZUGthY2JLQy9rSzJBUlhlbXJXM2MyQkJoejYyZjljV0lXSkhMalNUVjY5WDRsSk1PSTRlSXM3WW0zM25SQldVOEVGRFF2K0twc2lhMmpiWEZPQk5JWlNVYStLaTBvdzg4KzlCdmp5SEVWMkhhaUMvcmgyTmFpeHRRcTdzUjE3bTdwVUlHYzIrbzN4VUNSeDl0NlZTTVFkK0hKRVNyY0Y4ZmYvUjEvRHpvTnhKNGkwcytkZG5GMVVSRGtERm41V2RRSEF1K1dEQWdmaHRlNVpMK0JIbmlmYXpLRDllNFFzc0h0eWxrdjcxVmQ4dis5MExVODdUZld2K056ekt3ZDhjQU91bGw5d0RVQTkxMkY1aDZBYVJoNjV0cFh6MkN1ejM4TE1YRUc3RC9YblhINm1sWkZZK3VMNitPZExQbzc1VDUwbE95MDJWME1PSThWSWpXTlkvSHc0NDJKczZNUHpqdnBXMnpNTy9CQVNkUEdJWlVkMEkyL1dsSWJaYzhkY2ZPTE03WE9HMk9kWDd3K1pacE1YazZocmc1RlNqdTFFL1BOVi9kQjVzY2pkeWdmeGdhTjdwWnE3QURnTit2Q3kvTUxJYlN0VERwYVZEREtYbjl2amVWdDdjOXVqamxXR3RGWUhZbjJCUmYvVTlnRGV1dHNiUkR5S2xOemIrQVZuR3VkdlRjS25FSlJHa1BFbmI3QWJ6SzJXVys2TU5KSVd1a2RmaVpDdjZzWHovQm1TWFJ6dmdHbDljTEhpRlNnWkQxejRmSFJmQ1BmTEdKU0VWc2JYY2NxSCs4dVVJNWsxV0VGcFhabzU5Wkp6WjNIV0RRUlN1Z3NIeGVQQ0VPMUYxL0orejhESmNtTldFamVCb1BiKzhKTk1DS3BTU2N6OVdCVGR1emRhbCswdTdKMExzUE1ZU3gydU1zVzNHL05EUGZ6dFJpcy84Wm9JYUNYWUZTQXR3RTh2ekxRQ3BFUHI1NjhRRUNHd21pZ1VlTDU5cjZWdFdhZDV4WnRtM3I3ZG1TaGFYT2xNbDFudmVKNGVzaFk2S29jZXBvSW9IYWRUSW9mRHpYczJ4U0Q1K01tL1BHUVZqbnUwaUhkU3grK21Ed3FHSnlreEZRcXIvMGNxVzU2WWl5aWRFVTh0Z256d0U0WGl4UU1wd1UwZ0dZdi9YeStyNXo3SisxSExtQS9WRjFCNTVKdFBVRURUcnpaWUx3dnpWS1JXejBSa3Vkcy9mNldvdUg4QXo5aUVNUXJsRWR1Wnk5UlJhR2w0VHpOQk5jQVpWZzFSZmU2WWUxQVpGOEx1MVpML25GaTkzMmtIcFhUZWh1b2tVamlwMTBHeUhKS0QzVU0vZnlZQ1FxaDBrTnNPUWNlUWxTRnVlQWoyMEJXM3hXbzZnbEFZTm9vcGZld01ySXBtNXdVZkl0SFR5TDF6SzFoMExUSDA0Nyt1dnplZXFwT256WmZaUHVkSmM0OWRXRWg3TjNVRzQrTTdoUStBbERMclRwQ0RsZ3NBaEdPZDJ2WXg4VFd4MTdJN05BQWx4RE1zYUhFdVhMeVlNZENoNFR0MmFQRitOVWtzbVV1MXlkWU83K252YVdrWXZhRld6bmF0WWlRYVdRdERHM3U0QVgzVWNWNE51WXNWMXhUUXlTQmlqL0ZMSDNtTWZqQk9sVUc5SG05akVHeW8vQTlqYzk0UE9HbC9WdXhwUDNsL3hKZldBbjduWTR6ZEpKYzhDSnpGQ0x3NE0xR2NrYUl4aFBFU1RXRXdET3I4dzF3NlQxNFhoM29IR0c4dGpyMSsyOUUwQjZacmpndnpRdllWdHZVRlRTWldMT1A1QXpWOTNwWmJ6Q1B2SWU4WUJyRWFtMFA1a3h3ZWdmWmVKOXBFZWY3dXVWa3IvUjByTHh1eFV0dmZrZmo1ZzBITklwWE4xNm5EZWNQR1pZYWw5dSttU0o3YUFBeGJlTlEwVk4xTStSZUd2ZDZYOEg0K1c5TVdQNGFIYW5ROVRUU3JkcVNQUkE1eHlyUGhRcWZVRjJlN01GQjRham0wOEtXVkYrTVhoWlNNdGFlcmlxTFViN0VEbUhGVnlvUTBzYmZKYjR5NmZ1TDdQcEVkRGVCanVQNnYzcXFvNERkWFpoUHlpRUdyZEFsbm14aFBHTVlGRUxFVWtjNjN0RXIyM2lPSEpEL05XN0tNcDdVTWZ6QlZqRUdDSkxtZURyN2o4RmFGQmszc3JxN2grd0NXT0ZUb0NpTTBsOE1EYWlxcWZtN0l4bkNlOFpLelhXTW9ZNmxlNHFzYXpiY254Uit0aWkzK2dFdE5IM3c3N3RhVmJ3R2p6c3ZUOWt2dElzZHp6RnhoSUM1MXppZ1ViMGJxcWFEalpocnlFTkhvOVgzZjFsQlhnL2F6b014TnZpM09XcEIraVdhZlUxTVRjSEUxZEFhWU1yNjd6ZkhDQlFQRWt2TUtYdGdmYjNvamNrMGZzSUJiem1nMXdZcGp2R3k0bU4vdWVrY2FlRm9XMHlEQTFEZFdHMTQrODFOTlZEbEtVWFZ4Zzl4cnVReG9KQ1BJeitQWUJpTzhualkvNVRoUlVCTkFST0lwSXhvTVZEeUNEWGVwa0UzRUJlbUZPdzY4WTdKZ0ZHcU1jYXlUVG0zeGF2R3lXQWxyVnRrRUhTNlpYSzVKTU9TR0swNi9jek0vaUNlSlZCQ2dBMW5jZCtRK2ptQldkUTl2SVN1RFQrYmtmQUhMMUc5Tkg2UEJ5eVVnUkFzSnRBcit5bi9Ld1JNamYxNDd4dUhkQUpYdll4RFZuY1N3dG5scmttbFZMMXo2d0lBM3dlbjVwendQd0FNazdZZDlVdmgzWG9VMHgyQzJ2dVp0RjdSSC9LVU9wdHFPL2ZkWk1lNnlsMWFYcDhYNkRjL1F5b2l6N2UzS1RlK2FkbnBYQU1kUVdkOEdYdlZVc2hESFlHM3BweERzcHFXZzNlSUxwY2M4QUEwOCswS0l2WG90dHd1Wk8wK2VLdnhQaGhTQlZCTkZ5Tit2S25CZkNoOXNXZjdXR1Q3QlBCZ1FkU3RxL2FidkFucmowZXkwMC9Cdm9xNEhkN3BDZldQVWtra2FjVS9OMi9Vb21zcDhTSWVpaWRreVVqZE1OL3FhRzlKWmExbzRPQWxBYlFmWGdkY3NRRmJrUG9hM2tCZ1VabUdYb2FPNE1aWFBiK3cxWFF1SUg5RWQ3M3VDNGMzdUpBWXRrdWhKaCs3SDZlUkFnUWlHMWNzSUY4S2ZSM1M3dG5sNzNjRWN2U1FXcWlGdnREeUZ4ZElvTnR3N0luM3JOY3RjalY2L3V3a1NNeTVrQzhicTc5UU05Y090UTNNY0VFYkZxZnRCZjlwS3hUOXloU3A5dDlKTWRWQWZldVNtTDVQM25HOVFoQzRmdlgxRkd6R2dJdTVEUDduSVJ0eUVCR0R1VFZ5MVRSQWlyVWxvRGVQV1g2dU9MY3BpQ3Q0Tml1ZFJYanlidUVaNjhnZHJSMzVYNnhPM01nUzY2bnIxT2RVQ1lmMXlOUkJYUTR5SDJTRnlESk5CNEg5Nm9IZGtlSFUvWVdmRkxvbkIwUDRNOEt6cFVRWWxsZTE1WGJhdWhkUFJUUDZOM2FvajUwTVF1Wm13UDQ3OU5Rem5MZklWRUwyZmVUT09FalM5Y1UwNGV5a0xxOHliOUxtMEhZN2dvLzUveGFMdG1jbjM4djVnUXgzMGV5UnRKOHE5ckd5bHF0Z01EV3dHcnduQjZmOTBJLzFJZmxOZ1NSZlYrc3ZYMzMwand0ZURCTkc2SVpLbEpSU1JDSGsxRnpIMllqNEZsaTl5bS9YODZ3Sjd3ZGZWR3duWW5HU0ZiM2J3ekRmTzFnSHE4eVA0Qk1qa2lBdDg5TDB2VzVSamI4VnI4L1p5Q1U5OGZuZk83UHpIbFhHbllhL1E3WTJDTFBONmlZQmJDTE50UzBMczAwbjJjU1E4VEpNcmNNSTFvVXNtdEpDb3dIdExVNVJpb25pc0N6Zk12aEgvLzhFNndNaU5Xb3hVL3ZIQjBjT2tFWEd2TUE4bG5QZ0lacG1TOTZXZDIzc203NHJLN3pCaVpKZE5HZUtxU3NyTHo1Nm4vckY5eUxsdDUwaVptTEh2U0J3YUFEUEtWd0M1UEV2UzJRdi9sc1Y0a0gyZ1A3c1hNaXNUWDFFdTZ5cENNVE1ZNkhiSFNjaUtrU25yQkNNLzA2Q2FsU05FeWUrMXRhdGFmbldxY1JqaEV6ZU43dVR0TkNFcG1BUzN2TkdmZEEveXBBbElOSHJZRWlIK05NcWx6Zm1xYnE0bGYvWStYYjBkYmIzazZTMzZJeEhBOXFhcHYrcVZqa0pTSmZYMVVEdFhhMmxsa1dVb1RvUm1WV2hMaUJITGZsZmhSb3R0M01INGJDVG1odlhySk1SbXZPU291T2pJVkVyQ0VIWUNac0IyWlRNY0REZ2N3NmljMnhET0VtM0FNNnBmQzhaSHM2R0g2dkttM0NseEdqZ0RCT3VSL2NoWnB1UEdRVDltL1RPZGNHRHZBWm4yQmFxMEVUOTB1Y3V6UTA4Uk13bnJGbmx1UDhwMFpyMkp1TTN4dVRoRXRPQit1cytGNEhQTkZ2Z0Z2ME5mRjdNQUJDQnpyVlB3U2RjWWR4RnFPSXVkT3gxL3FBQXVoUUdveitjbjVpdlM5YlFnYjMzWlQ5SUVhbkxkZE5TN09hb0hWN05PUWJJL3FTK1JMR3d6RXBsTld2V1FRazRwM2ZRYklYMW5EL0ZnMVFtR0JtTTZUZHNGRWFERU9VNHRydWRBZVBxTTJoNTZTa2FTUHJjQ2Y3UGFxVWxQQnJKSkpvRWxKSUM3WnlOWnZOTXM3Mk5TZUJ1VkU3cnpJTUNaUm9YZGkrOXUzNno5SldKdFFkb01WSndjZjFTRmRKL0dpa2FrNy9na0tUMW91dUxWWEY2em5lYTB5cE8vbndSTGxhNWwwbWNxU3U4aW9uWmYyc0wrZVN5Q1BjbHEveUI0b28zUWdxYmwrQ2FITzE0Yjcvb2VxRHcxRHphYTJvWGQyOVVYbWI4YVA5bStTZ3d0c3FrMi9yOCtDQm5lbkhKUHZ1MXFLSVVQai9kL3JyMCtjWFBGRFdGMks2cXFlOGZYTFJqdFd3b3Yzd2FjblVOWXFLa2RMWGs5VnhNcHJ5dTMxd1gwWC94ZThwVFl4eVhsemRoKzkvanVGNmZoTmtkcEtuNWNBWGlBaUpsS2lpaGZvVy9JeDFGZkRDNG8xWDlPRzJxM2p1N1lQVHd3QmRjWDRrR0JKaEM1NDE5amxlbEhZMGh1bklxM2hERVJPQ3pjZnRnZjV5cU1yS044dllRdXZtZEE0THBIQnIyWEdRQ3dXYnZYVGtMTlFySmdDRjJFOGthN2ppSFQyREN5YTBaT3ZueTgzMmQrTWlkUWxqcWE2VkVDK0M1bFl0S2FLY1hudnRtOEdqb3FhNzZCTnpmeS9kTXN0Q3AreTUxTUJBSmRGWDRuUFJBL2NnY2Q2aEY5L0VRUGZzSDRxcVE5a21qQW1DcWhDb013dG8weVF2bzkvN1YrQzE1MU9rSSs2K2txOGl2aWMrbzFlVmlvcnpZYjE3eDNUNW9FRWY2ODUyZWJBYWF6MytmRkR4a2xsYk54YnlIakwwOFpyM2dDY3lYdWJST1NOSUpTUmQ1UHl5WnR2aUE1clBJbkVwV09sZ1lkeS9Zem45SDRhR2x2dVVva0RIelNheWJUbitueENLWGJxSjhCOS9RQzdHYmc1YkpFajF3alBOS2ppY1FDSE9KRkljb28wZHFTODFBUEtoSTg4cThSaEJsVGFteThlQzdyaDdKb2hpcEY2UWxwY3ZtMGlDQkhISGpGS3dRTlVtZUVpQkdibEFFTnVTVU0zaisxRFd5czFRak54Ri94U1hhc2FvVnVLL3RLYWh3ZXdRbEM5NHp1WXJoYWlUcjdMWHlXNXh2SE5IbGYyNml4c1B0dnFGSDduRDhZakN3NHRMdVdXQmxON0NtaG5nUngvdFJPeDlaOFE1OXYwaDUzdXRpZlF0OTRsQjJheFhvMEJTYk80N2M3dVpoQXNyVFNpNkpxaElTbEJtSTB0em9KaXRMSlVReGZjdnVoa2FMZkg2aks5b3pLTGJxRFQxT3pIam5ncmpicEtNMGxxSm9DOXp3WXFzZHBoN2lHaFA5c1FCTEtjOCtuWFkzV0EyQ2JtTnBTTTQzRTRIc3pTeUlHUDZTZkU5b1JmR0JSNXRiM0VUL0d4Tnh1OHNUTi9uMjRiMVpPRVN2RHFSNzZqS3dINWJQVWVacSt1WU4wTTVXQ3A5N2IrOTJaZDR6UHBnWjE0YUtOTlFUaVlucjB6V3U5QkIraDFYTGxjSy85aG9rNEFiY0M5aTRCYlNvRU03a0ZnaU1DcFBqRFo1VGNmeFFWVFU0Uk5FQ2E2d1F0V3JVdk9RclpZczhWOTFKQWhDcFNBRXl4WSt0WHl2WGxGVlhnQTQ5YktpcGsyZlBwbGthelY0aDBxYktlbnExR0dmYkJDaVlxR05OOGpBWUIxSW9mTzkxYmU3Q3BkSmJGWXZQaVBGWkJ1T1Y4RTV4aGMzNGd3TC96eWZ3SC9XVWFkb050dFhOZkMxRHVDTjZwWEwxK29jVy9pTUtvOEhhOG9CenV0OGRMYzM3aDFpR2dYVTFhdVpoT0xzbW1sUndlYnpPUlpGQ3YzRkZVc2VwQ1V5UlYrdlZoSjBFbE8zOHJyY3p1MWl4WW81UFRzQmoyd084Y1pmenZiVFJxTTFUTU43WUMvaTloMXZCajNxWDZ1c0I3Ui9LNVpDOVNHL0kwelV0UHpTcGYxZEJvamY3ZE0waHV4Ym5qNVlFT05vVG5MN0ZDWTlKT0srbVVSTXFROThjUEhOZkZzaEM0YUt3eUR2cjJKeENtRWRHYVFBNWw2Q0pxbVZUaE5JMUl1c2dhRkg1bnk2N1FtQ1FkZ2ZBMjhRVjJBRFNCUlFqNnQ1RDZHY052M3lRRmttMnRYYVNKK3pqN3QzdXlnOTRQVnNMNEo0MmlKUXlBSWk5OW84N0E2QkFwL3k2bkkxZ0RoUy94VkJxZ2tyL3cydjE5ekNFNzIyYzdDY2VjWmRrbTZkU3YrQWdNcnpVYlNtU0dtMlgydjhQS0tGR1YxMWNORW00d2tBZTZUdmNMQUY5K2wxV2Z1Ty8wLzF0cDRTZ2ZQazQrRjREYnZaWU1tQW1abzhCWUJTZ0NXRTNZV2diakNFN25kai9Ocnhmek1Gb01CUFBMTmVQQlBBZ1hFeGl0THlmdjdKVHpSc01TRHVLSDZPMlpnV3owVVhiUXZuRFM5dzh1VkRzS2NWaE9hdGFpaStJY0puNTFhWmd5YmJRcUorZnR0Vmd2dnVhWmpjZ2hydUp2dGVnVDZpTmc5TU5nSEdHclZhZy91MHdSSEp2UXp6ems4YkJpT0lQNE40SVM4ajBiTFRRWitBZzhyQnFDY3h1K2RwL2k2R1RoODlPY3FKeWRFaWlFRXR4UWdBZmMzbjNJeWpDbmxFclNCL0JnODhzMStDUUovWS92YVdMUkkxYUpSYndkY0pFN3l5ZENNMHIycEhjQ1k2QjJOV0M3aWx0SVU3SFB6WWk3L2ZTZnFsYlo5enlEclIvT2FwRFUxeVE4eXhRVGNpdHNLaHg5UFN0YjB6REpmekF1ZHlWZXlackI2U3NSYzhVNVl3TlZqSHNiYmVReEZRVTdjV1lmS2tpa0RlSWdtdi9YVm5DNTMyUWdNOXFrQTBucTFRcytTdmlJZkRMQWpjSG5SdXp5Z1FQRGVyK3BMMjdDQ1YwcHMyQnk4M3pXejQrSElnSlRiOVdtZWxkcjRpaXpJcy9ZaHRkQnpPWjZ5ZVBaaVRHN2U1cUJpRGFuaFRzL2ZGQm56dEFVbHp6Q0FYbVNZZURMYjVDWDR4QnBKN2tnVVB4S3dtbUxEQ0p3UFFodklwNXlmbm9oamZJekphcjNZaUNJMzNnc013QW1tdlF3bkZYVHIrdlJyZUxUS1RhV0RPZHkvaUxzVGNicVJsc1QrZmtVb2FJZ1FUUytnS1RUa21pV016WmFHZnViV3NLOWhDeENBOXJVOXBBVytoZ3NoczJBMVRPRk13bGd2d1dTQjV4cERNSmtaTDRBSVU0b0lYUklBUGlQTlBhOEZqUFBLUHN5aGpEcER5U1FvZzVvVkJJNEk5WU9xZ1A2TVFuMHlkUHE3Z0c3T3U3TEFqQlMvRndWWnUzR2RLZ0E1bDRSSzZwWTdGeGJkWUd2cFRGSmFtUUF5WC9VZW9mRW91ek9LalRiKzJPVXI5M2JESUU1YVFZREZ6OVpKVjBPaVRvYnNCVEw3NzJRL0FtUEF2WlZucmRmWmZndTRLT3RtaGFGdi9qMmxDZC9KU3ZOWEdJeVFVbHRQeEQxQUkrMDA5S1k4TE1pYlVweDJxSVQ3eWFmOC9oY2dHMFRVNWVyam9wMnRLb04wWHgrcTFkb3JwWCtKK25NYXBmTTlDcUR2akFUUmQ1RFA0eXlrSHozUUhnR1MySUcvWlQ5anlGbjZmTmRnMG9hbXNZbC85WmlMd1RyZnFMWi9jb0RpdlhQSGRBVVpqWDNoRmlhL1loNVQreXhHWm1GOUZNUXhiOWl0V3ZxYnFnZ1hMaXBjNE5BTDBtei9UWTBscEtac0ZwY0I3LzVHWDJ2a3ZpSWZkMkZhNWIrQUNVZFpuNVU4NUUxcExWQ1BHSUpNOWNBaXd2cUlTRThPU0RGc3kzTW8zWjVGMU9paFh6TVdwblo0SU5BK3l4TDEwZFJRK01RZVFoZ20wQ1VmdnlCR0M4UnVkc0NobkRVUGEzbUdkNHVzOGdacGtnQzlqL25qbnp2SG12d210bFF2U05wU2gwaUhGazZkSHB4dlFlMDB5amtyLzMyb3N5VUhES3YyZGZrcFF0bHdlTThnWXpRb2JFYWpHeDVucU9MQlFGaTRTOENzT0E0NzdLbHJkcXFkT3JXbjNlR2tVdEFUVEZVN2NUb1BYbHdOWk00RWt6KzNFSjlnQUQvdk4rVzBZTXBFWlZuektGa0ZScjNaMzhkSXNJay9taTBxTUlSM3E5R0owdEV3anAxa1I4TFBLdG5TRmFrWjFRTi90WUtIZUNTR2xESnNDclY5c3hZQmprUnE3bE1hbGdTanhDVnB2WWc5bFVBZDFaL0lkSzdFbW1NUE9hUXJnSWltamN5Qkx3aHJTMFpxT2FJcG4rLzNLNlowcnk5V3dsWlJoRFpDeTN3VDZFc3BhcDBDZDRyeW15RjVwWXBqZURPWDMyVUcvRFdIKzVTL2NmaklqUjB0VVN3Vk1xcmVEMXhWUnhOWXZBajBZL2F1QnlsM1JlNkNtc2Q5Nkc0WEx3QWI5V2ttUlI4SVl4U2h1L2x3T3RLVUUwbFBvT2RHMXNTZEpUdTNMSG45WC9DN0xHM0hkMmJ0L2d5dFl3V2Q4MVJ6TnY2RGRDb1FRaE5rV0dvQ0oyb28wcUd0aDNsRGp1bllxSFNoVTlHVTNsRlIyS1I2M2hEQlJzSWNSWHErTGI4bnp6NVh6OFNaUHJHSmtqRXZLMUZpZXl2eHBhRk5nUTFKUFdDVGUwcjRldFNVcmJicWVNRkZqbEdzamFTQ0NUQ2c4NCsvOWI2aFNlNVFRaWlybStTdUdjeC96RENaSEp2VDJpN3IwdzZEUWtxS0Fkc2lta0QwV3IzTEd1c1FwT3RLQTRPc05Qd0M1NHFNdEpsZ3dBQUFEd0thdU0zR3k2dDZVTzVpWVFCV3lVWWQ1VWdwL0xpdE9iYklTRUE3WFBTb3JKbWswOTBNL2ZCUi9yajYyTzRYa2tQcVFpVXFvT2VadEFkaFVMbXFia21xWWdvUmtSaXNVUC9CWW1EanNsUnJvRjRFZU1aaVpTTUNZOEg4dlRnYnFyazUxa1dzSzFwQldpaCtjcmZaQ0orODJGRDJhUTRIMjUwNnkvTUVUVldrdVNIM0p5ZmhaOTN5UHBMKzhCUTNjUFA3Vmd1ZnhxTXpyblBWY3pRRlY0aGFBMEpWTWRJaU9sblBIT3JZU1pYaDNZWmpMNlpaN0I0VURFWEZGRmNLOVdoQkFRU2JkaHoyTTlDcldCaHc4aWZoTjMwaEtKM0E2QytPTGowTEJyUlpOZGpFR1RRU2VmTTRZc1ZScEc3c1RTKzFCTmpBeGVpaUJ5M0YwWHovSHN0MGhHYkFYUXJWYjMvYzMzMzV1dkJFTVlVYlI5L3g3L2NrRWF3UkY2Y05OSnpaZjNYNk14NDBUSTgwVnNoYml6VlM2SUNsQ3JtNEJ6MzJoNU1GdXlXRjZFWExOa1NRNFQ2anlVWldWbmFmZU84ekJmT0xFMnNxNTZoVmhDWGZKWUpGOVIzOEY4YmNWWWpzWDFBVmNDNTVXTXU2c3N5RkExeWdXYzNRd2FXaDgrMTJFaTRlNS9sblRwYXRUWlEwRWlneTBGYm5PZU44T1kydGJvbDVyVUlXdzlLYWg1THJSbHhKYXFvVE1oQmRBMFhQSlVaREtWOUFnN3l5TWptZ0FMTUNjZk9ncGs2TWxSMWVkbnRWQy9nNWZrZVo5VDAwWWlmT3ZRandEeFcwci9qa1Ewa2Nhb0llc1Z1ZWVqbFRBdStIUmwyTlJZQUFBQUcyUEZxVnFWb1hXNExXYWE1NU9nelFsTkNXRFp2VEdwM01ZdmpLNDFkL2N2OWptei9mejQ2eGM3emNXRHN0UEg2YXI5L3FuaVMxa1VWOXJOa1o3TjRsOXFkN3FxbmdDTjUvbTJKZFpNVkk3Vk5PdTZVMU93bHpwWStoRmF6SkRjYXpTY3pxdlY2YTJhS1RYRjFOV3JVTytaSm9XOGl2alErQTVDQkJRT0NHbkpLcGlPM25abEpTNjF4cDVMT21QVitwQXBWWkQ0U0gzcW9PUFZYRTZkSkhRamZicjdsZlpHcVd5ZEp0UFdickVWU3lwZW16NlovbjlIdHRaUk05S2k4OGpDakFRZ2tuZiszK2JYaUlES3RwK1k0U3dOVkh5RktHNVJMT3ljbEd6VzR5Yk9nSXE5Q2ZWemZ5eVVFSHVjZWhpVWErcnZSTGFsdHBsaHdTdXQ4Y3NyejBIQ1YyRnJobzNCajZtcjdmeXJvRnR4KzUrL0NrQklBT0FmQmcyRUZBb2NDY3kySHQ4YjdIQ2VFYXd1TllsRGdkSitneGpoTC9FOW5jUjNsQzlKdFJpNVY1UndLdHVselhiV0U2ckxjVWQyTDRKakNjcmJ1RzZMaE56T1pqdi9QWlZYNnc3Wno3SlI3WWdjQ0FBQUFBQVNabW12VktjRGloT0JyMUdBQzlDRURFVEZKUklpbWdqN0JtY2Y1R3lnTHpEblBiUXNOSnhXVjlqY1ltVDFoYU55OEZROW1JMGNzUUt0MldTekFFTEFNYmxqK0l2NUw2ejRJa2YraXBiS09HM1pqVkkxTEpXc2Q4dW4wRWNQNjMzMG1FV3pVVWh6cWpBQ3FRODYxcC8vY1R6bjBtNUNLSm1aZ1ZVODhPRThEalQ0T3Z2c1NoYU0rSzhGZjRUVTkxbWwvU1F3ZnB5YVBNbzV2VDhHRHpWWlRUSG9lSWloby81UzVHYnFyYVIraXNUU215NnZmcXdUMWZRR253SG01UXFVN0k1Q21wdGdCMDRmdHNaNTRVYklEOXVsUDFPYUJsbjFvR0JHQ0YwelVUMy9JeVJ6dzF6cGc0alVMMGZ4NGVxMzNYVlN4Z1ZzRDc3S0VGc2QzT0VTK2VJa0ZmVFlvcVVveVl1YWVoSVJPMDNTR0hNbjUzVGYrZ3lZdy9PelJKVlpSV1ZIaWtPTDg5ZTZWSHdCMnJGMXhzejFGeG1TOC94OXZlTFJsUnA0aW1jN0tZMml1RGZJREpTREJPdXE3VUgwQTRRWnI5a0tidkFYNnFvZGJxd3V0ai9mWGpNclVDalgxYnMyQXoxZGZrT0dHc1V1ci9nb2ZMbnJ4SlpuTWVvQjF4TjVHWjFPV1U3VHV1VWVWaVJ5YzlHLzVTK2RJeFJPd0dPUm15alRDUlI0UUFBQUFCRHpRYXJsbFJGVk5Rc00rMkFLTWNJRkt3ZjVGS1BVQ0NIVG5uWVA1d2Q2Y0JDOTM2UEpHWjdvV0trV0lIMzlUWW5MTGhab0ZUMS9pbmpacDFKYXVJUkFBeTlHTjBQdkd5UkJDM1dkUXgzVDliQndRNGVKbDE5MVBxeXBCVnBNYmsxcTZqZ3h4WEkyZk81U0VCNDVhR1dCa3FSbkZCc1k1VGRQU0Z5WHhpRVlmZURXZDBhSnV1ZzIvem0vQWlIdnN2Nk05VHgwcnlBNjhYeDArSXh2TXg4NHpXeDRWNm9lakNWMEFwVmdlWkJHZHlZcTFZcDdubXA1R3BRUUtXUFR5elZVRkk2OG9Gb1M3NGtFQ0M2cTkveWRMcTBnQjRoeGROQS9pM0JUbmtYQ25hUkpFdFlveTNOWndHclU4eTRIOGFySTJLMlNWV2w4bUFtSlhPWkljMVUwYitXSzB0MEtXSXJCU2Y2WnptQnoyR1A3VEVZL1htZ3JVaTJHM1VoTkIrM2Z3cWJlTjJFSE5yZmVURnJwZXVFaWpsczJEdTFWVi9kQW84MUQ1emN6Y1dZb2hnZEdJM1c3WDJFMGNBb2REUVY5TTd2ZmVTZzh5dEgvR04zZXIvNWNwK2lxR0pSVUlyUjRZSlFtbnBFQUFBQUN5NlRvK0dvYjFKRFM2bFIyczJLcTVPcS83akhjdXhrelQ4K1R5U25kalFLQ3ZuVWRWUExpb1ZLUGVNL0pzVXVHQlJpY3JlbDhlL3lCcEVTb0VGbGhmZlVra2dmYkdOU3ovRGRqb21jZFphMWtyUCtHV1p3WGVqQldQS0YzZ0N2R2dIUWpWL2duOWlQck1vQk5iN2dBZkh1Sk1yQlNVdjZpZWVhbjZGVFNnNUhJL2pGRWxBdXRtV3FMWjdGQ2NnTEsvTnRpWlFBdmVndklxckY4VmVhK285TFlOMDRTdWFNSVFPZEh5bDR6VEtXZ2owRU14QzFvNjhyZitZZkhPSE4xS3JpYmNyZlRBaEVXV0dtOWNIRHZmTGs5SGZHQTAyZkt6ZXdpZ2lQa2ZiRHJDSVd1M2taLzN3bzUzN3JrQ0hwdE1rOWYzUXZXTWZCN05IcTEva0wrbVgrZWkvbzVOTUdJZzcvamo5WDMxMGNmSzFyak1LTDh1ZmJiR3c1SkZSSDhVV1hGQ2g5bGlTb1BwTlpZZ01hR1NjZUdQV1Y0a1l0RzRwWVp3YVYxRXJKbmt0U2trODJ5YktaWG12cHQvODJiUWU3T0xGczlKYUNqSUN1dFV1R094RmwvZjdlTTBPZzBUeEl0N0JUZU90eXJTVTN6d2U0a29NSlNsNW9BQUFBQVVyRFNGZGlXdVphbXdGbU54YTZlQmQvK2h4Qk43M0x6TmZlbU9KaDI1RkZ6dVJZdGlna0ZycXQ4ZHdZeGt2MEJkTCtnV2dYUnRCQXdFbVo5dC9DMG8vUEFBa0lYaVJ0cE9JQS90WjdZY1BWS1RyS2J0Nm9BL0RURS9pV0YxdGpqRUhXVmpvenhqQWNvN0ZRUFNhSy9NYk83eXd5UjE3dU1MMHljb3kzYjd5VlUrVGpsaHhoM3ZwN2hPWjVoWVdaN09GenRDVlA5TUZzOUk3cHNSV1dMdkNrVmdQNUNpY0JRNFBJWlJMb1hWS2FaNEcwOTB1Rm15bW1IeHJMRG5vZkl4Z3hwNFJtSXRqWWR2a1RBQ0hiWGROSklId2hJM2JqbkNXWXNuODViaWJBV0lNYTB4RFA1NHFjNkRKWVB1QUpYRFJOV3pYQjFhTU4ySGJQeUt4S3pmM2k2QVV4WGZtTVNPY2c0VlcxejYzb0lySEc4amozTmpTMTcvY2lKWExrSjI5NU43MEZuOUpnQW1vbmZGOUo1SVBqTkMwbnJTQklUN1JIWVRPVkxteFFMbzdWWXB4RnhEUEs5bit5RUIxNlVUeE00RW84NnI4L2w3dWZlM3UrTURZdXJqMjNjM0ZxL0hWT3VGSGRpQlpOSC9PVjdkNnVDK2NmYks5ZUJTWXRxaGdBS2F6TGwrVE0wOFRQUTNZU203dnowcWpEbFdGVWRQL1p5dU9SZFRLNjVCWXFRcUVXZU9qZS8wWTlDK1FHRmc3OHIwa3A4dldEOTN4d29TV0NmZ2djbXZmcUE0cXNJaURWZE1YNzZOeUsveTFxUG9BTGE2ZHUxTWdiU250Z0VUNElsYzlmQm8ra1hFNmJTOFNiNU4vQ09KaEgrUVRvL2U4bytybHFIWkpyemFnZjZQbXlCU0ZIN1lzNnJhNXdEYlQ1bkVib01wU2wzVER4TFdsaXNIQ0NLamZJY3d3MmNodWxHMys2SU54R0ZuVG1Ob2xKbllMRmg3clQxU0JZZGdNUlhSdTNFeTRCbzJOOHFQL0ExemxyRGRHdmdDdUtrcUtibU1kWk5hM2plODkrTnFPS3h3cTJvOHg5VzNoSUYyMzQxcUEwWEtLYWdTdE9ZV0NSVlB1a0ljU3NlbThtczd5d0NRbU9SZ1FCdU00TzBQWWNQNVNQR09KMkpTM3ZGK3pyd01YMXVkRzFaWDVUdTF6T1YxV1BvNkxNN0thYlp4OXc5SlFCL1I1ZXRGYmREcDRGUGNsYVZGUlRvTUdXSnB2ZEUvMWVzYnl4eFJSUVdvVll2ZmpSSytwaU51cFdqNmcvaFNqU0RkWjI1cXU1NloxRWVrZEl2NDlvVHRFaVRpTlBwY2dTWEkxUmhWMlMzbjVQdUkrSUtWRlFGaHFwZEJVZkxvdzY1VVFhMm9peTB6bjJoZW5GeHg5b0NQS3RaTUdVL2RBQUFBXCIiLCJleHBvcnQgY29uc3QgYSA9IDM7XG5leHBvcnQgY29uc3QgYiA9IDQ7XG5leHBvcnQgY29uc3QgYyA9IDU7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUvYS5zY3NzJztcbmltcG9ydCB7IGEsIGIsIGMgfSBmcm9tICdAL2InO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudCgpIHtcbiAgdmFyIGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb20uaW5uZXJIVE1MID0gXy5qb2luKFsnYWljb2RlcicsICcuY29tJywgJyB3b3cnXSwgJycpO1xuICBkb20uY2xhc3NOYW1lID0gJ2JveCc7XG4gIHJldHVybiBkb207XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRG9tRWxlbWVudCgpKTtcbmNvbnNvbGUubG9nKDIyMjIyMjIyMjIpO1xuXG5jbGFzcyBUZW1wIHtcbiAgc2hvdygpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcy5BZ2UgOicsIHRoaXMuQWdlKTtcbiAgfVxuXG4gIGdldCBBZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZTtcbiAgfVxuXG4gIHNldCBBZ2UodmFsKSB7XG4gICAgdGhpcy5fYWdlID0gdmFsICsgMTtcbiAgfVxufVxuXG5jb25zdCB0ID0gbmV3IFRlbXAoKTtcbnQuQWdlID0gMTk7XG5cbnQuc2hvdygpO1xuXG5jb25zb2xlLmxvZygnYTonLCBhKTtcbmNvbnNvbGUubG9nKCdiOicsIGIpO1xuY29uc29sZS5sb2coJ2M6JywgYyk7XG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdqcScpO1xuICAkKCcuYm94JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgYWxlcnQoJzExMScpO1xuICB9KTtcbn0pO1xuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4vYS5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2Fscykge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi9hLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4vYS5zY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IFxuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn0iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi9zdHlsZS5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuL3N0eWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgXG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIm1vZHVsZS5leHBvcnRzID0gXzsiXSwic291cmNlUm9vdCI6IiJ9