// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import wasmInit from "./pkg/demo.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const wasmClient = await wasmInit("./pkg/demo_bg.wasm");

  // Call the Add function export from wasm, save the result
  const addResult = wasmClient.add(24, 24);
  const factSev = wasmClient.factorial(7);

  // Set the result onto the body
  document.body.textContent = `Hello World Demo! addResult: ${addResult} & 7!: ${factSev}`;
};
runWasm();

