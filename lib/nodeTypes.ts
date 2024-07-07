const freeGlobal =
  typeof global == 'object' && global !== null && global.Object === Object && global

/** Detect free variable `exports`. */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. */

const freeModule =
  // @ts-ignore
  freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const moduleExports = freeModule && freeModule.exports === freeExports

/** Detect free variable `process` from Node.js. */
// @ts-ignore
const freeProcess = moduleExports && freeGlobal.process

/** Used to access faster Node.js helpers. */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const nodeTypes = (() => {
  try {
    /* Detect public `util.types` helpers for Node.js v10+. */
    /* Node.js deprecation code: DEP0103. */
    const typesHelper = freeModule && freeModule.require && freeModule.require('util').types
    return typesHelper
      ? typesHelper
      : /* Legacy process.binding('util') for Node.js earlier than v10. */
        // @ts-ignore
        freeProcess && freeProcess.binding && freeProcess.binding('util')
  } catch (_e) {}
})()
